-- The row guards take advisory lock 87654001 before reading related rows.
-- Under REPEATABLE READ / SERIALIZABLE those reads can still use a snapshot
-- established before the lock was acquired. Reject those isolation levels,
-- rather than allowing apparently successful writes based on stale state.
--
-- At READ COMMITTED, the volatile PL/pgSQL row guards' SQL commands take fresh
-- snapshots after this lock has been acquired. Acquiring the same lock BEFORE
-- the statement also puts it ahead of row locks, including for multirow writes.
-- The lock is held until transaction end; all three related tables participate.
-- Writers may see invariant violations or deadlock errors and must roll back.
BEGIN;
DO $$ BEGIN
 IF current_setting('transaction_isolation') <> 'read committed' THEN
  RAISE EXCEPTION 'Migration requires READ COMMITTED isolation for a fresh validation snapshot';
 END IF;
END $$;
LOCK TABLE taxonomy_nodes, company_capabilities, company_sites IN ACCESS EXCLUSIVE MODE;

-- Refuse to bless an already inconsistent database. Do not repair or delete data.
DO $$
BEGIN
 IF EXISTS (
  SELECT 1 FROM taxonomy_nodes c LEFT JOIN taxonomy_nodes p ON p.id = c.parent_id
  WHERE c.parent_id IS NOT NULL AND
   (p.id IS NULL OR p.level <> c.level - 1 OR p.taxonomy_version <> c.taxonomy_version
    OR (c.active AND NOT p.active))
 ) THEN
  RAISE EXCEPTION 'Existing taxonomy hierarchy is inconsistent; resolve before migration';
 END IF;
 IF EXISTS (
  SELECT 1 FROM company_capabilities c LEFT JOIN taxonomy_nodes n ON n.id = c.taxonomy_node_id
  LEFT JOIN company_sites s ON s.id = c.site_id
  WHERE n.id IS NULL OR n.level <> 3 OR NOT n.active
     OR (c.site_id IS NOT NULL AND (s.id IS NULL OR s.company_id <> c.company_id))
 ) THEN
  RAISE EXCEPTION 'Existing capability taxonomy or site owner is inconsistent; resolve before migration';
 END IF;
END$$;

CREATE FUNCTION lock_taxonomy_consistency_statement() RETURNS trigger LANGUAGE plpgsql AS $$
BEGIN
 IF current_setting('transaction_isolation') <> 'read committed' THEN
  RAISE EXCEPTION 'Taxonomy, capability and site writes require READ COMMITTED isolation'
   USING ERRCODE = '25001';
 END IF;
 PERFORM pg_advisory_xact_lock(87654001);
 RETURN NULL;
END$$;

CREATE TRIGGER trg_taxonomy_consistency_statement
 BEFORE INSERT OR UPDATE OR DELETE ON taxonomy_nodes
 FOR EACH STATEMENT EXECUTE FUNCTION lock_taxonomy_consistency_statement();
CREATE TRIGGER trg_capability_consistency_statement
 BEFORE INSERT OR UPDATE OR DELETE ON company_capabilities
 FOR EACH STATEMENT EXECUTE FUNCTION lock_taxonomy_consistency_statement();
CREATE TRIGGER trg_site_consistency_statement
 BEFORE INSERT OR UPDATE OR DELETE ON company_sites
 FOR EACH STATEMENT EXECUTE FUNCTION lock_taxonomy_consistency_statement();
COMMIT;

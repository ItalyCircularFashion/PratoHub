-- Refuse inconsistent existing hierarchies rather than silently changing data.
BEGIN;
LOCK TABLE taxonomy_nodes IN ACCESS EXCLUSIVE MODE;
LOCK TABLE company_contacts, sources IN ACCESS EXCLUSIVE MODE;
DO $$
BEGIN
 IF EXISTS (
  SELECT 1 FROM taxonomy_nodes child
  JOIN taxonomy_nodes parent ON parent.id = child.parent_id
  WHERE child.active AND NOT parent.active
 ) THEN
  RAISE EXCEPTION 'Existing active taxonomy child has inactive parent; resolve before migration';
 END IF;
END$$;

ALTER TABLE company_contacts DROP CONSTRAINT company_contacts_source_id_fkey;
ALTER TABLE company_contacts ADD CONSTRAINT company_contacts_source_id_fkey
 FOREIGN KEY (source_id) REFERENCES sources(id) ON DELETE RESTRICT ON UPDATE NO ACTION;

CREATE FUNCTION guard_active_taxonomy() RETURNS trigger LANGUAGE plpgsql AS $$
DECLARE parent_active boolean;
BEGIN
 -- The existing hierarchy and capability triggers use the same transaction lock.
 PERFORM pg_advisory_xact_lock(87654001);
 IF TG_OP = 'UPDATE' THEN
  IF NOT OLD.active AND NEW.active THEN
   RAISE EXCEPTION 'Taxonomy reactivation forbidden';
  END IF;
  IF OLD.active AND NOT NEW.active AND EXISTS (
   SELECT 1 FROM taxonomy_nodes WHERE parent_id = OLD.id AND active
  ) THEN
   RAISE EXCEPTION 'Taxonomy node has active children';
  END IF;
 END IF;
 IF NEW.active AND NEW.parent_id IS NOT NULL THEN
  -- Seed INSERT ... ON CONFLICT DO NOTHING visits BEFORE INSERT even for an
  -- existing inactive row. UPDATE remains protected by the trigger above.
  IF TG_OP = 'INSERT' AND EXISTS (
   SELECT 1 FROM taxonomy_nodes WHERE taxonomy_version = NEW.taxonomy_version AND code = NEW.code
  ) THEN RETURN NEW; END IF;
  SELECT active INTO parent_active FROM taxonomy_nodes WHERE id = NEW.parent_id;
  IF parent_active IS DISTINCT FROM true THEN
   RAISE EXCEPTION 'Active taxonomy node requires active parent';
  END IF;
 END IF;
 RETURN NEW;
END$$;
CREATE TRIGGER trg_taxonomy_active_guard BEFORE INSERT OR UPDATE OF active, parent_id ON taxonomy_nodes
 FOR EACH ROW EXECUTE FUNCTION guard_active_taxonomy();
COMMIT;

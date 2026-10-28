-- Stable codes and references, including inactive records, are never recycled.
CREATE FUNCTION protect_taxonomy_identity() RETURNS trigger LANGUAGE plpgsql AS $$
BEGIN
 IF TG_OP = 'DELETE' THEN RAISE EXCEPTION 'Taxonomy deletion forbidden'; END IF;
 IF (NEW.id, NEW.taxonomy_version, NEW.code, NEW.level, NEW.parent_id) IS DISTINCT FROM
    (OLD.id, OLD.taxonomy_version, OLD.code, OLD.level, OLD.parent_id) THEN
   RAISE EXCEPTION 'Taxonomy identity and hierarchy are immutable';
 END IF;
 RETURN NEW;
END$$;
CREATE TRIGGER trg_taxonomy_identity BEFORE UPDATE OR DELETE ON taxonomy_nodes
FOR EACH ROW EXECUTE FUNCTION protect_taxonomy_identity();

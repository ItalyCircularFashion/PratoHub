-- Keep a referenced site's owner consistent when the site is edited later.
CREATE FUNCTION validate_site_owner_change() RETURNS trigger LANGUAGE plpgsql AS $$
BEGIN
 PERFORM pg_advisory_xact_lock(87654001);
 IF NEW.company_id IS DISTINCT FROM OLD.company_id AND EXISTS (
   SELECT 1 FROM company_capabilities WHERE site_id=OLD.id AND company_id<>NEW.company_id
 ) THEN RAISE EXCEPTION 'Referenced site cannot move to another company'; END IF;
 RETURN NEW;
END$$;
CREATE TRIGGER trg_site_owner_change BEFORE UPDATE OF company_id ON company_sites
FOR EACH ROW EXECUTE FUNCTION validate_site_owner_change();

CREATE EXTENSION IF NOT EXISTS pgcrypto;

CREATE TYPE publication_status AS ENUM ('DRAFT','IN_REVIEW','PUBLISHED','ARCHIVED');
CREATE TYPE claim_status AS ENUM ('UNCLAIMED','PENDING','CLAIMED');
CREATE TYPE execution_mode AS ENUM ('DIRECT','SUBCONTRACTED','COORDINATED','COMMERCIAL_ONLY','UNKNOWN');
CREATE TYPE b2b_availability AS ENUM ('CONFIRMED','UNKNOWN','NOT_OFFERED');
CREATE TYPE verification_status AS ENUM ('UNREVIEWED','SOURCE_CHECKED','INDEPENDENTLY_VERIFIED','DISPUTED','REJECTED');
CREATE TYPE source_kind AS ENUM ('OFFICIAL_REGISTER','COMPANY_WEBSITE','COMPANY_DOCUMENT','DIRECT_DECLARATION','THIRD_PARTY');
CREATE TYPE source_state AS ENUM ('ACTIVE','UNAVAILABLE','SUPERSEDED');
CREATE TYPE site_kind AS ENUM ('REGISTERED_OFFICE','HEADQUARTERS','PRODUCTION_SITE','WAREHOUSE','SHOWROOM','OTHER');
CREATE TYPE assertion_scope AS ENUM ('COMPANY','CAPABILITY');

CREATE TABLE companies (
 id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
 slug text NOT NULL UNIQUE,
 legal_name text NOT NULL,
 trade_name text,
 vat_number text,
 tax_code text,
 country_code char(2) NOT NULL DEFAULT 'IT',
 website_url text,
 summary text,
 publication_status publication_status NOT NULL DEFAULT 'DRAFT',
 claim_status claim_status NOT NULL DEFAULT 'UNCLAIMED',
 published_at timestamptz,
 created_at timestamptz NOT NULL DEFAULT now(),
 updated_at timestamptz NOT NULL DEFAULT now(),
 CONSTRAINT company_legal_name_not_blank CHECK (length(btrim(legal_name)) > 0),
 CONSTRAINT company_slug_format CHECK (slug ~ '^[a-z0-9]+(?:-[a-z0-9]+)*$'),
 CONSTRAINT company_vat_format CHECK (vat_number IS NULL OR vat_number ~ '^[0-9A-Z]{5,20}$'),
 CONSTRAINT company_published_timestamp CHECK (publication_status <> 'PUBLISHED' OR published_at IS NOT NULL)
);
CREATE UNIQUE INDEX uq_company_vat_country ON companies (country_code, vat_number) WHERE vat_number IS NOT NULL;
CREATE INDEX ix_company_status ON companies (publication_status);
CREATE INDEX ix_company_name ON companies (lower(legal_name));

CREATE TABLE company_sites (
 id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
 company_id uuid NOT NULL REFERENCES companies(id) ON DELETE CASCADE,
 site_kind site_kind NOT NULL DEFAULT 'OTHER',
 address_line text, city text NOT NULL, province_code varchar(3), postal_code text,
 country_code char(2) NOT NULL DEFAULT 'IT',
 is_primary boolean NOT NULL DEFAULT false,
 created_at timestamptz NOT NULL DEFAULT now()
);
CREATE UNIQUE INDEX uq_primary_company_site ON company_sites(company_id) WHERE is_primary;
CREATE INDEX ix_sites_city ON company_sites(lower(city));

CREATE TABLE company_roles (
 company_id uuid NOT NULL REFERENCES companies(id) ON DELETE CASCADE,
 role_code text NOT NULL CHECK (role_code IN ('MANUFACTURER','COORDINATOR','TRADER','SERVICE_PROVIDER','BRAND')),
 PRIMARY KEY (company_id, role_code)
);

CREATE TABLE taxonomy_nodes (
 id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
 taxonomy_version text NOT NULL DEFAULT 'PRATOHUB-TX-1.0',
 code text NOT NULL,
 level smallint NOT NULL CHECK (level BETWEEN 1 AND 3),
 parent_id uuid REFERENCES taxonomy_nodes(id) ON DELETE RESTRICT,
 label_it text NOT NULL,
 label_en text,
 description_it text,
 active boolean NOT NULL DEFAULT true,
 sort_order smallint NOT NULL DEFAULT 0,
 UNIQUE(taxonomy_version, code),
 CONSTRAINT tax_level_parent CHECK ((level=1 AND parent_id IS NULL) OR (level>1 AND parent_id IS NOT NULL))
);
CREATE INDEX ix_taxonomy_parent ON taxonomy_nodes(parent_id);

CREATE OR REPLACE FUNCTION validate_taxonomy_hierarchy() RETURNS trigger LANGUAGE plpgsql AS $$
DECLARE p_level smallint; p_version text;
BEGIN
 IF NEW.level > 1 THEN
  SELECT level, taxonomy_version INTO p_level, p_version FROM taxonomy_nodes WHERE id=NEW.parent_id;
  IF p_level IS DISTINCT FROM NEW.level-1 OR p_version IS DISTINCT FROM NEW.taxonomy_version THEN
    RAISE EXCEPTION 'Invalid taxonomy hierarchy for %', NEW.code;
  END IF;
 END IF;
 RETURN NEW;
END$$;
CREATE TRIGGER trg_taxonomy_hierarchy BEFORE INSERT OR UPDATE OF parent_id,level,taxonomy_version ON taxonomy_nodes
FOR EACH ROW EXECUTE FUNCTION validate_taxonomy_hierarchy();

CREATE TABLE materials (
 id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
 code text NOT NULL UNIQUE,
 label_it text NOT NULL,
 label_en text
);
CREATE TABLE technologies (
 id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
 code text NOT NULL UNIQUE,
 family text NOT NULL,
 label_it text NOT NULL,
 label_en text
);

CREATE TABLE company_capabilities (
 id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
 company_id uuid NOT NULL REFERENCES companies(id) ON DELETE CASCADE,
 taxonomy_node_id uuid NOT NULL REFERENCES taxonomy_nodes(id) ON DELETE RESTRICT,
 site_id uuid REFERENCES company_sites(id) ON DELETE SET NULL,
 execution_mode execution_mode NOT NULL DEFAULT 'UNKNOWN',
 b2b_availability b2b_availability NOT NULL DEFAULT 'UNKNOWN',
 description text,
 publication_status publication_status NOT NULL DEFAULT 'DRAFT',
 published_at timestamptz,
 created_at timestamptz NOT NULL DEFAULT now(),
 updated_at timestamptz NOT NULL DEFAULT now(),
 UNIQUE(id, company_id),
 CONSTRAINT capability_publication_timestamp CHECK (publication_status <> 'PUBLISHED' OR published_at IS NOT NULL)
);
CREATE INDEX ix_capability_taxonomy ON company_capabilities(taxonomy_node_id);
CREATE INDEX ix_capability_company ON company_capabilities(company_id);
CREATE INDEX ix_capability_execution ON company_capabilities(execution_mode,b2b_availability);
-- Più dichiarazioni sono permesse se corrispondono a sedi/modalità distinte.
-- Il servizio applicativo impedisce duplicati semantici nel medesimo contesto.

CREATE OR REPLACE FUNCTION validate_capability() RETURNS trigger LANGUAGE plpgsql AS $$
DECLARE nlevel smallint; nactive boolean; site_company uuid;
BEGIN
 SELECT level, active INTO nlevel,nactive FROM taxonomy_nodes WHERE id=NEW.taxonomy_node_id;
 IF nlevel IS DISTINCT FROM 3 OR nactive IS NOT TRUE THEN
  RAISE EXCEPTION 'Capability must point to active leaf taxonomy node';
 END IF;
 IF NEW.site_id IS NOT NULL THEN
  SELECT company_id INTO site_company FROM company_sites WHERE id=NEW.site_id;
  IF site_company IS DISTINCT FROM NEW.company_id THEN RAISE EXCEPTION 'Capability site belongs to different company'; END IF;
 END IF;
 RETURN NEW;
END$$;
CREATE TRIGGER trg_validate_capability BEFORE INSERT OR UPDATE OF taxonomy_node_id,site_id,company_id ON company_capabilities
FOR EACH ROW EXECUTE FUNCTION validate_capability();

CREATE TABLE capability_materials (
 capability_id uuid NOT NULL REFERENCES company_capabilities(id) ON DELETE CASCADE,
 material_id uuid NOT NULL REFERENCES materials(id) ON DELETE RESTRICT,
 PRIMARY KEY(capability_id,material_id)
);
CREATE TABLE capability_technologies (
 capability_id uuid NOT NULL REFERENCES company_capabilities(id) ON DELETE CASCADE,
 technology_id uuid NOT NULL REFERENCES technologies(id) ON DELETE RESTRICT,
 PRIMARY KEY(capability_id,technology_id)
);

CREATE TABLE sources (
 id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
 url text NOT NULL UNIQUE,
 title text NOT NULL,
 publisher text NOT NULL,
 source_kind source_kind NOT NULL,
 source_state source_state NOT NULL DEFAULT 'ACTIVE',
 published_on date,
 accessed_at timestamptz NOT NULL DEFAULT now(),
 content_sha256 char(64),
 note text
);

CREATE TABLE fact_assertions (
 id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
 company_id uuid NOT NULL REFERENCES companies(id) ON DELETE CASCADE,
 capability_id uuid,
 scope assertion_scope NOT NULL,
 field_path text NOT NULL,
 value_jsonb jsonb NOT NULL,
 verification_status verification_status NOT NULL DEFAULT 'UNREVIEWED',
 reviewer_note text,
 checked_at timestamptz,
 created_at timestamptz NOT NULL DEFAULT now(),
 updated_at timestamptz NOT NULL DEFAULT now(),
 FOREIGN KEY (capability_id,company_id) REFERENCES company_capabilities(id,company_id) ON DELETE CASCADE,
 CHECK ((scope='COMPANY' AND capability_id IS NULL) OR (scope='CAPABILITY' AND capability_id IS NOT NULL))
);
CREATE INDEX ix_assertions_company_field ON fact_assertions(company_id,field_path);
CREATE TABLE assertion_sources (
 assertion_id uuid NOT NULL REFERENCES fact_assertions(id) ON DELETE CASCADE,
 source_id uuid NOT NULL REFERENCES sources(id) ON DELETE RESTRICT,
 supporting_detail text,
 PRIMARY KEY(assertion_id,source_id)
);

CREATE TABLE company_contacts (
 id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
 company_id uuid NOT NULL REFERENCES companies(id) ON DELETE CASCADE,
 contact_type text NOT NULL CHECK(contact_type IN ('PUBLIC_EMAIL','PHONE','CONTACT_PAGE')),
 contact_value text NOT NULL,
 is_public boolean NOT NULL DEFAULT false,
 source_id uuid REFERENCES sources(id) ON DELETE SET NULL,
 created_at timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE audit_events (
 id bigserial PRIMARY KEY,
 occurred_at timestamptz NOT NULL DEFAULT now(),
 actor text NOT NULL,
 entity_kind text NOT NULL,
 entity_id uuid NOT NULL,
 action text NOT NULL CHECK(action IN ('CREATE','UPDATE','PUBLISH','ARCHIVE','VERIFY','IMPORT')),
 before_jsonb jsonb,
 after_jsonb jsonb
);
CREATE INDEX ix_audit_entity ON audit_events(entity_kind,entity_id,occurred_at DESC);

-- WP01: any taxonomy write and capability write serializes hierarchy validation.
CREATE OR REPLACE FUNCTION validate_taxonomy_hierarchy() RETURNS trigger LANGUAGE plpgsql AS $$
DECLARE p_level smallint; p_version text;
BEGIN
 PERFORM pg_advisory_xact_lock(87654001);
 IF NEW.parent_id = NEW.id THEN RAISE EXCEPTION 'Self-parent forbidden'; END IF;
 IF NEW.level > 1 THEN
  SELECT level, taxonomy_version INTO p_level, p_version FROM taxonomy_nodes WHERE id=NEW.parent_id;
  IF p_level IS DISTINCT FROM NEW.level-1 OR p_version IS DISTINCT FROM NEW.taxonomy_version THEN RAISE EXCEPTION 'Invalid taxonomy hierarchy for %', NEW.code; END IF;
 END IF;
 IF TG_OP = 'UPDATE' AND EXISTS (SELECT 1 FROM taxonomy_nodes c WHERE c.parent_id=OLD.id AND (c.level<>NEW.level+1 OR c.taxonomy_version<>NEW.taxonomy_version)) THEN
  RAISE EXCEPTION 'Change invalidates taxonomy children';
 END IF;
 IF TG_OP = 'UPDATE' AND (NEW.level <> 3 OR NOT NEW.active) AND EXISTS (SELECT 1 FROM company_capabilities c WHERE c.taxonomy_node_id=OLD.id) THEN
  RAISE EXCEPTION 'Referenced taxonomy leaf must remain active L3';
 END IF;
 RETURN NEW;
END$$;
DROP TRIGGER trg_taxonomy_hierarchy ON taxonomy_nodes;
CREATE TRIGGER trg_taxonomy_hierarchy BEFORE INSERT OR UPDATE OF parent_id,level,taxonomy_version,active ON taxonomy_nodes FOR EACH ROW EXECUTE FUNCTION validate_taxonomy_hierarchy();
CREATE OR REPLACE FUNCTION validate_capability() RETURNS trigger LANGUAGE plpgsql AS $$
DECLARE nlevel smallint; nactive boolean; site_company uuid;
BEGIN
 PERFORM pg_advisory_xact_lock(87654001);
 SELECT level,active INTO nlevel,nactive FROM taxonomy_nodes WHERE id=NEW.taxonomy_node_id;
 IF nlevel IS DISTINCT FROM 3 OR nactive IS NOT TRUE THEN RAISE EXCEPTION 'Capability must point to active leaf taxonomy node'; END IF;
 IF NEW.site_id IS NOT NULL THEN
  SELECT company_id INTO site_company FROM company_sites WHERE id=NEW.site_id;
  IF site_company IS DISTINCT FROM NEW.company_id THEN RAISE EXCEPTION 'Capability site belongs to different company'; END IF;
 END IF;
 RETURN NEW;
END$$;
-- Refuse publication entirely until a future authenticated evidence gate exists.
ALTER TABLE companies ADD CONSTRAINT wp01_no_company_publication CHECK (publication_status <> 'PUBLISHED' AND published_at IS NULL);
ALTER TABLE company_capabilities ADD CONSTRAINT wp01_no_capability_publication CHECK (publication_status <> 'PUBLISHED' AND published_at IS NULL);
-- Versioned independent official classification; no invented company assignments.
CREATE TABLE ateco_codes (id uuid PRIMARY KEY DEFAULT gen_random_uuid(), version text NOT NULL, code text NOT NULL, label_it text NOT NULL, UNIQUE(version, code));
CREATE TABLE company_ateco_codes (company_id uuid NOT NULL REFERENCES companies(id) ON DELETE CASCADE, ateco_code_id uuid NOT NULL REFERENCES ateco_codes(id) ON DELETE RESTRICT, is_primary boolean NOT NULL DEFAULT false, PRIMARY KEY(company_id, ateco_code_id));
CREATE UNIQUE INDEX uq_company_ateco_primary ON company_ateco_codes(company_id) WHERE is_primary;

INSERT INTO companies(id,slug,legal_name,trade_name,vat_number,tax_code,website_url,summary,
 publication_status,published_at)
VALUES ('11111111-1111-4111-8111-111111111111','manteco','Manteco S.p.A.','Manteco',
 '00297290975','03329250488','https://manteco.com/',
 'Sviluppo di tessuti e coordinamento di una rete produttiva tessile secondo MSystem.',
 'DRAFT',NULL) ON CONFLICT DO NOTHING;
-- Fail the whole seed transaction if an existing identity is not this company.
SELECT CAST(CASE WHEN EXISTS (SELECT 1 FROM companies WHERE
 id='11111111-1111-4111-8111-111111111111' AND slug='manteco'
 AND legal_name='Manteco S.p.A.' AND trade_name='Manteco'
 AND vat_number='00297290975' AND tax_code='03329250488' AND country_code='IT'
 AND website_url='https://manteco.com/'
 AND summary='Sviluppo di tessuti e coordinamento di una rete produttiva tessile secondo MSystem.'
 AND publication_status='DRAFT' AND claim_status='UNCLAIMED' AND published_at IS NULL
 FOR UPDATE) THEN '1' ELSE 'Seed company identity mismatch' END AS integer);
INSERT INTO company_sites(company_id,site_kind,address_line,city,province_code,postal_code,is_primary)
VALUES ('11111111-1111-4111-8111-111111111111','HEADQUARTERS','Via della Viaccia, 19','Montemurlo','PO','59013',true) ON CONFLICT DO NOTHING;
SELECT CAST(CASE WHEN EXISTS (SELECT 1 FROM company_sites WHERE
 company_id='11111111-1111-4111-8111-111111111111' AND is_primary
 AND site_kind='HEADQUARTERS' AND address_line='Via della Viaccia, 19'
 AND city='Montemurlo' AND province_code='PO' AND postal_code='59013' AND country_code='IT'
 FOR UPDATE) THEN '1' ELSE 'Seed primary site mismatch' END AS integer);
INSERT INTO company_roles(company_id,role_code) VALUES
 ('11111111-1111-4111-8111-111111111111','COORDINATOR') ON CONFLICT DO NOTHING;
INSERT INTO company_capabilities(id,company_id,taxonomy_node_id,execution_mode,b2b_availability,description)
SELECT '22222222-2222-4222-8222-222222222222',
 '11111111-1111-4111-8111-111111111111',n.id,'COORDINATED','UNKNOWN',
 'Coordinamento di rete produttiva secondo le informazioni aziendali su MSystem.'
FROM taxonomy_nodes n WHERE n.code='TX-11.01.01' AND n.taxonomy_version='PRATOHUB-TX-1.0' ON CONFLICT DO NOTHING;
SELECT CAST(CASE WHEN EXISTS (SELECT 1 FROM company_capabilities c
 JOIN taxonomy_nodes n ON n.id=c.taxonomy_node_id
 WHERE c.id='22222222-2222-4222-8222-222222222222'
 AND c.company_id='11111111-1111-4111-8111-111111111111'
 AND n.code='TX-11.01.01' AND n.taxonomy_version='PRATOHUB-TX-1.0' AND n.level=3 AND n.active
 AND c.site_id IS NULL AND c.execution_mode='COORDINATED' AND c.b2b_availability='UNKNOWN'
 AND c.description='Coordinamento di rete produttiva secondo le informazioni aziendali su MSystem.'
 AND c.publication_status='DRAFT' AND c.published_at IS NULL
 FOR UPDATE OF c,n) THEN '1' ELSE 'Seed capability identity mismatch' END AS integer);
INSERT INTO sources(url,title,publisher,source_kind,accessed_at) VALUES
 ('https://manteco.com/contacts/','Contacts','Manteco','COMPANY_WEBSITE','2026-10-28T14:26:00Z'),
 ('https://manteco.com/msystem/','MSystem','Manteco','COMPANY_WEBSITE','2026-10-28T14:26:00Z'),
 ('https://www.gazzettaufficiale.it/atto/parte_seconda/caricaDettaglioAtto/originario?atto.codiceRedazionale=C-8508&atto.dataPubblicazioneGazzetta=2001-04-07','Avviso Manteco 2001','Gazzetta Ufficiale','THIRD_PARTY','2026-10-28T14:26:00Z') ON CONFLICT DO NOTHING;
SELECT CAST(CASE WHEN NOT EXISTS (
 SELECT 1 FROM (VALUES
  ('https://manteco.com/contacts/','Contacts','Manteco','COMPANY_WEBSITE'),
  ('https://manteco.com/msystem/','MSystem','Manteco','COMPANY_WEBSITE'),
  ('https://www.gazzettaufficiale.it/atto/parte_seconda/caricaDettaglioAtto/originario?atto.codiceRedazionale=C-8508&atto.dataPubblicazioneGazzetta=2001-04-07','Avviso Manteco 2001','Gazzetta Ufficiale','THIRD_PARTY')
 ) AS expected(url,title,publisher,kind)
 WHERE NOT EXISTS (SELECT 1 FROM sources s WHERE s.url=expected.url AND s.title=expected.title
  AND s.publisher=expected.publisher AND s.source_kind::text=expected.kind
  AND s.source_state='ACTIVE' FOR UPDATE)
) THEN '1' ELSE 'Seed source identity mismatch' END AS integer);
INSERT INTO fact_assertions(id,company_id,scope,field_path,value_jsonb,verification_status,checked_at) VALUES
 ('33333333-3333-4333-8333-333333333331','11111111-1111-4111-8111-111111111111','COMPANY','legal_name','"Manteco S.p.A."','SOURCE_CHECKED','2026-10-28T14:26:00Z'),
 ('33333333-3333-4333-8333-333333333332','11111111-1111-4111-8111-111111111111','COMPANY','vat_number','"00297290975"','SOURCE_CHECKED','2026-10-28T14:26:00Z'),
 ('33333333-3333-4333-8333-333333333333','11111111-1111-4111-8111-111111111111','COMPANY','tax_code','"03329250488"','SOURCE_CHECKED','2026-10-28T14:26:00Z'),
 ('33333333-3333-4333-8333-333333333334','11111111-1111-4111-8111-111111111111','COMPANY','headquarters','"Via della Viaccia, 19 — Montemurlo"','SOURCE_CHECKED','2026-10-28T14:26:00Z') ON CONFLICT DO NOTHING;
INSERT INTO fact_assertions(id,company_id,capability_id,scope,field_path,value_jsonb,verification_status,checked_at)
VALUES ('33333333-3333-4333-8333-333333333335',
 '11111111-1111-4111-8111-111111111111','22222222-2222-4222-8222-222222222222',
 'CAPABILITY','execution_mode','"COORDINATED"','SOURCE_CHECKED','2026-10-28T14:26:00Z') ON CONFLICT DO NOTHING;
SELECT CAST(CASE WHEN NOT EXISTS (
 SELECT 1 FROM (VALUES
  ('33333333-3333-4333-8333-333333333331','COMPANY','legal_name','"Manteco S.p.A."',NULL),
  ('33333333-3333-4333-8333-333333333332','COMPANY','vat_number','"00297290975"',NULL),
  ('33333333-3333-4333-8333-333333333333','COMPANY','tax_code','"03329250488"',NULL),
  ('33333333-3333-4333-8333-333333333334','COMPANY','headquarters','"Via della Viaccia, 19 — Montemurlo"',NULL),
  ('33333333-3333-4333-8333-333333333335','CAPABILITY','execution_mode','"COORDINATED"','22222222-2222-4222-8222-222222222222')
 ) AS expected(id,scope,field,value,capability_id)
 WHERE NOT EXISTS (SELECT 1 FROM fact_assertions a WHERE a.id=expected.id::uuid
  AND a.company_id='11111111-1111-4111-8111-111111111111'
  AND a.capability_id IS NOT DISTINCT FROM expected.capability_id::uuid
  AND a.scope::text=expected.scope AND a.field_path=expected.field AND a.value_jsonb=expected.value::jsonb
  AND a.verification_status='SOURCE_CHECKED' AND a.reviewer_note IS NULL
  AND a.checked_at='2026-10-28T14:26:00Z'::timestamptz FOR UPDATE)
) THEN '1' ELSE 'Seed assertion identity mismatch' END AS integer);
INSERT INTO assertion_sources(assertion_id,source_id)
SELECT '33333333-3333-4333-8333-333333333332',id FROM sources WHERE url='https://www.gazzettaufficiale.it/atto/parte_seconda/caricaDettaglioAtto/originario?atto.codiceRedazionale=C-8508&atto.dataPubblicazioneGazzetta=2001-04-07' ON CONFLICT DO NOTHING;
INSERT INTO assertion_sources(assertion_id,source_id)
SELECT '33333333-3333-4333-8333-333333333333',id FROM sources WHERE url='https://www.gazzettaufficiale.it/atto/parte_seconda/caricaDettaglioAtto/originario?atto.codiceRedazionale=C-8508&atto.dataPubblicazioneGazzetta=2001-04-07' ON CONFLICT DO NOTHING;
INSERT INTO assertion_sources(assertion_id,source_id)
SELECT '33333333-3333-4333-8333-333333333334',id FROM sources WHERE url='https://manteco.com/contacts/' ON CONFLICT DO NOTHING;
INSERT INTO assertion_sources(assertion_id,source_id)
SELECT '33333333-3333-4333-8333-333333333335',id FROM sources WHERE url='https://manteco.com/msystem/' ON CONFLICT DO NOTHING;
INSERT INTO assertion_sources(assertion_id,source_id)
SELECT '33333333-3333-4333-8333-333333333331',id FROM sources WHERE url='https://www.gazzettaufficiale.it/atto/parte_seconda/caricaDettaglioAtto/originario?atto.codiceRedazionale=C-8508&atto.dataPubblicazioneGazzetta=2001-04-07' ON CONFLICT DO NOTHING;
INSERT INTO sources(url,title,publisher,source_kind,accessed_at,note) VALUES ('https://manteco.com/privacy-policy/','Privacy Policy','Manteco','COMPANY_WEBSITE','2026-10-28T14:31:00Z','Testo: company fiscal code/VAT number 03329250488; footer P.IVA 00297290975. Contrasto da revisione manuale.') ON CONFLICT DO NOTHING;
SELECT CAST(CASE WHEN EXISTS (SELECT 1 FROM sources WHERE url='https://manteco.com/privacy-policy/'
 AND title='Privacy Policy' AND publisher='Manteco' AND source_kind='COMPANY_WEBSITE' AND source_state='ACTIVE'
 AND note='Testo: company fiscal code/VAT number 03329250488; footer P.IVA 00297290975. Contrasto da revisione manuale.'
 FOR UPDATE) THEN '1' ELSE 'Seed privacy source identity mismatch' END AS integer);
INSERT INTO fact_assertions(id,company_id,scope,field_path,value_jsonb,verification_status,reviewer_note,checked_at) VALUES ('33333333-3333-4333-8333-333333333336','11111111-1111-4111-8111-111111111111','COMPANY','vat_number','"03329250488"','DISPUTED','Privacy: fiscal code/VAT number; in contrasto con footer aziendale e avviso storico GU; non usata come P.IVA canonica.','2026-10-28T14:31:00Z') ON CONFLICT DO NOTHING;
SELECT CAST(CASE WHEN EXISTS (SELECT 1 FROM fact_assertions WHERE id='33333333-3333-4333-8333-333333333336'
 AND company_id='11111111-1111-4111-8111-111111111111' AND capability_id IS NULL
 AND scope='COMPANY' AND field_path='vat_number' AND value_jsonb='"03329250488"'::jsonb
 AND verification_status='DISPUTED' AND checked_at='2026-10-28T14:31:00Z'::timestamptz
 AND reviewer_note='Privacy: fiscal code/VAT number; in contrasto con footer aziendale e avviso storico GU; non usata come P.IVA canonica.'
 FOR UPDATE) THEN '1' ELSE 'Seed disputed assertion mismatch' END AS integer);
INSERT INTO assertion_sources(assertion_id,source_id,supporting_detail) SELECT '33333333-3333-4333-8333-333333333336',id,'company fiscal code/VAT number 03329250488' FROM sources WHERE url='https://manteco.com/privacy-policy/' ON CONFLICT DO NOTHING;
-- Existing links are never overwritten: validate their supporting details too.
SELECT CAST(CASE WHEN NOT EXISTS (
 SELECT 1 FROM (VALUES
  ('33333333-3333-4333-8333-333333333331','https://www.gazzettaufficiale.it/atto/parte_seconda/caricaDettaglioAtto/originario?atto.codiceRedazionale=C-8508&atto.dataPubblicazioneGazzetta=2001-04-07',NULL),
  ('33333333-3333-4333-8333-333333333332','https://www.gazzettaufficiale.it/atto/parte_seconda/caricaDettaglioAtto/originario?atto.codiceRedazionale=C-8508&atto.dataPubblicazioneGazzetta=2001-04-07',NULL),
  ('33333333-3333-4333-8333-333333333333','https://www.gazzettaufficiale.it/atto/parte_seconda/caricaDettaglioAtto/originario?atto.codiceRedazionale=C-8508&atto.dataPubblicazioneGazzetta=2001-04-07',NULL),
  ('33333333-3333-4333-8333-333333333334','https://manteco.com/contacts/',NULL),
  ('33333333-3333-4333-8333-333333333335','https://manteco.com/msystem/',NULL),
  ('33333333-3333-4333-8333-333333333336','https://manteco.com/privacy-policy/','company fiscal code/VAT number 03329250488')
 ) AS expected(assertion_id,url,detail)
 WHERE NOT EXISTS (SELECT 1 FROM assertion_sources a JOIN sources s ON s.id=a.source_id
  WHERE a.assertion_id=expected.assertion_id::uuid AND s.url=expected.url
  AND a.supporting_detail IS NOT DISTINCT FROM expected.detail FOR UPDATE OF a)
) THEN '1' ELSE 'Seed assertion source mismatch' END AS integer);

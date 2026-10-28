INSERT INTO taxonomy_nodes (taxonomy_version,code,level,label_it,sort_order) VALUES
('PRATOHUB-TX-1.0','TX-01',1,'Materie prime e recupero',1),
('PRATOHUB-TX-1.0','TX-02',1,'Preparazione fibre e filatura',2),
('PRATOHUB-TX-1.0','TX-03',1,'Preparazione e trasformazione filati',3),
('PRATOHUB-TX-1.0','TX-04',1,'Tintoria e colorazione',4),
('PRATOHUB-TX-1.0','TX-05',1,'Preparazione alla tessitura',5),
('PRATOHUB-TX-1.0','TX-06',1,'Tessitura',6),
('PRATOHUB-TX-1.0','TX-07',1,'Maglieria',7),
('PRATOHUB-TX-1.0','TX-08',1,'Rifinizione e nobilitazione',8),
('PRATOHUB-TX-1.0','TX-09',1,'Controllo qualità e riparazione',9),
('PRATOHUB-TX-1.0','TX-10',1,'Confezione e prodotto finito',10),
('PRATOHUB-TX-1.0','TX-11',1,'Servizi industriali e coordinamento',11),
('PRATOHUB-TX-1.0','TX-12',1,'Commercio e distribuzione tessile',12) ON CONFLICT DO NOTHING;

WITH proc(code,parent_code,label) AS (VALUES
('TX-01.01','TX-01','Cernita e selezione'),
('TX-02.01','TX-02','Filatura'),
('TX-03.01','TX-03','Ritorcitura'),
('TX-04.01','TX-04','Tintura'),
('TX-05.01','TX-05','Orditura'),
('TX-06.01','TX-06','Tessitura ortogonale'),
('TX-07.01','TX-07','Smacchinatura'),
('TX-08.01','TX-08','Finissaggio meccanico'),
('TX-09.01','TX-09','Controllo tessuto'),
('TX-10.01','TX-10','Confezione'),
('TX-11.01','TX-11','Coordinamento produttivo'),
('TX-12.01','TX-12','Commercio tessuti'))
INSERT INTO taxonomy_nodes(code,level,parent_id,label_it)
SELECT proc.code,2, p.id,proc.label FROM proc JOIN taxonomy_nodes p ON p.code=proc.parent_code AND p.taxonomy_version='PRATOHUB-TX-1.0' ON CONFLICT DO NOTHING;

WITH leaf(code,parent_code,label) AS (VALUES
('TX-01.01.01','TX-01.01','Cernita materiali tessili post-consumo'),
('TX-02.01.01','TX-02.01','Filatura cardata'),
('TX-02.01.02','TX-02.01','Filatura pettinata'),
('TX-03.01.01','TX-03.01','Ritorcitura a due capi'),
('TX-04.01.01','TX-04.01','Tintura in fiocco'),
('TX-04.01.02','TX-04.01','Tintura in filato'),
('TX-04.01.03','TX-04.01','Tintura in pezza'),
('TX-05.01.01','TX-05.01','Orditura sezionale'),
('TX-06.01.01','TX-06.01','Tessitura di campionature'),
('TX-06.01.02','TX-06.01','Produzione di tessuti operati'),
('TX-07.01.01','TX-07.01','Smacchinatura di pannelli'),
('TX-08.01.01','TX-08.01','Garzatura'),
('TX-08.01.02','TX-08.01','Cimatura'),
('TX-09.01.01','TX-09.01','Controllo tessuto finito'),
('TX-10.01.01','TX-10.01','Taglio industriale'),
('TX-11.01.01','TX-11.01','Gestione di filiera produttiva esternalizzata'),
('TX-12.01.01','TX-12.01','Commercio all’ingrosso di tessuti'))
INSERT INTO taxonomy_nodes(code,level,parent_id,label_it)
SELECT leaf.code,3,p.id,leaf.label FROM leaf JOIN taxonomy_nodes p ON p.code=leaf.parent_code AND p.taxonomy_version='PRATOHUB-TX-1.0' ON CONFLICT DO NOTHING;

INSERT INTO technologies(code,family,label_it) VALUES
 ('JACQUARD','WEAVING_PATTERN','Jacquard'),
 ('DOBBY','WEAVING_PATTERN','Ratiera/licci'),
 ('RAPIER','WEFT_INSERTION','Pinza'),
 ('AIR_JET','WEFT_INSERTION','Getto d’aria'),
 ('RING','SPINNING','Ring spinning'),
 ('OPEN_END','SPINNING','Open-end') ON CONFLICT DO NOTHING;

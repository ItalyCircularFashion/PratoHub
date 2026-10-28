INSERT INTO materials(code,label_it) VALUES
 ('WO','Lana'),('CO','Cotone'),('PES','Poliestere'),('PA','Poliammide'),('LI','Lino'),('VI','Viscosa'),('OTHER','Altro') ON CONFLICT DO NOTHING;

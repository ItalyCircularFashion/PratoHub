// Generated from database/seeds/01_taxonomy.sql, 02_materials.sql and 03_technologies.sql.
import type { DictionaryItem, TaxonomyNode } from '../services/catalog';

export const taxonomy: TaxonomyNode[] = [
  {
    "code": "TX-01",
    "label": "Materie prime e recupero",
    "parentCode": null,
    "level": 1
  },
  {
    "code": "TX-02",
    "label": "Preparazione fibre e filatura",
    "parentCode": null,
    "level": 1
  },
  {
    "code": "TX-03",
    "label": "Preparazione e trasformazione filati",
    "parentCode": null,
    "level": 1
  },
  {
    "code": "TX-04",
    "label": "Tintoria e colorazione",
    "parentCode": null,
    "level": 1
  },
  {
    "code": "TX-05",
    "label": "Preparazione alla tessitura",
    "parentCode": null,
    "level": 1
  },
  {
    "code": "TX-06",
    "label": "Tessitura",
    "parentCode": null,
    "level": 1
  },
  {
    "code": "TX-07",
    "label": "Maglieria",
    "parentCode": null,
    "level": 1
  },
  {
    "code": "TX-08",
    "label": "Rifinizione e nobilitazione",
    "parentCode": null,
    "level": 1
  },
  {
    "code": "TX-09",
    "label": "Controllo qualità e riparazione",
    "parentCode": null,
    "level": 1
  },
  {
    "code": "TX-10",
    "label": "Confezione e prodotto finito",
    "parentCode": null,
    "level": 1
  },
  {
    "code": "TX-11",
    "label": "Servizi industriali e coordinamento",
    "parentCode": null,
    "level": 1
  },
  {
    "code": "TX-12",
    "label": "Commercio e distribuzione tessile",
    "parentCode": null,
    "level": 1
  },
  {
    "code": "TX-01.01",
    "label": "Cernita e selezione",
    "parentCode": "TX-01",
    "level": 2
  },
  {
    "code": "TX-02.01",
    "label": "Filatura",
    "parentCode": "TX-02",
    "level": 2
  },
  {
    "code": "TX-03.01",
    "label": "Ritorcitura",
    "parentCode": "TX-03",
    "level": 2
  },
  {
    "code": "TX-04.01",
    "label": "Tintura",
    "parentCode": "TX-04",
    "level": 2
  },
  {
    "code": "TX-05.01",
    "label": "Orditura",
    "parentCode": "TX-05",
    "level": 2
  },
  {
    "code": "TX-06.01",
    "label": "Tessitura ortogonale",
    "parentCode": "TX-06",
    "level": 2
  },
  {
    "code": "TX-07.01",
    "label": "Smacchinatura",
    "parentCode": "TX-07",
    "level": 2
  },
  {
    "code": "TX-08.01",
    "label": "Finissaggio meccanico",
    "parentCode": "TX-08",
    "level": 2
  },
  {
    "code": "TX-09.01",
    "label": "Controllo tessuto",
    "parentCode": "TX-09",
    "level": 2
  },
  {
    "code": "TX-10.01",
    "label": "Confezione",
    "parentCode": "TX-10",
    "level": 2
  },
  {
    "code": "TX-11.01",
    "label": "Coordinamento produttivo",
    "parentCode": "TX-11",
    "level": 2
  },
  {
    "code": "TX-12.01",
    "label": "Commercio tessuti",
    "parentCode": "TX-12",
    "level": 2
  },
  {
    "code": "TX-01.01.01",
    "label": "Cernita materiali tessili post-consumo",
    "parentCode": "TX-01.01",
    "level": 3
  },
  {
    "code": "TX-02.01.01",
    "label": "Filatura cardata",
    "parentCode": "TX-02.01",
    "level": 3
  },
  {
    "code": "TX-02.01.02",
    "label": "Filatura pettinata",
    "parentCode": "TX-02.01",
    "level": 3
  },
  {
    "code": "TX-03.01.01",
    "label": "Ritorcitura a due capi",
    "parentCode": "TX-03.01",
    "level": 3
  },
  {
    "code": "TX-04.01.01",
    "label": "Tintura in fiocco",
    "parentCode": "TX-04.01",
    "level": 3
  },
  {
    "code": "TX-04.01.02",
    "label": "Tintura in filato",
    "parentCode": "TX-04.01",
    "level": 3
  },
  {
    "code": "TX-04.01.03",
    "label": "Tintura in pezza",
    "parentCode": "TX-04.01",
    "level": 3
  },
  {
    "code": "TX-05.01.01",
    "label": "Orditura sezionale",
    "parentCode": "TX-05.01",
    "level": 3
  },
  {
    "code": "TX-06.01.01",
    "label": "Tessitura di campionature",
    "parentCode": "TX-06.01",
    "level": 3
  },
  {
    "code": "TX-06.01.02",
    "label": "Produzione di tessuti operati",
    "parentCode": "TX-06.01",
    "level": 3
  },
  {
    "code": "TX-07.01.01",
    "label": "Smacchinatura di pannelli",
    "parentCode": "TX-07.01",
    "level": 3
  },
  {
    "code": "TX-08.01.01",
    "label": "Garzatura",
    "parentCode": "TX-08.01",
    "level": 3
  },
  {
    "code": "TX-08.01.02",
    "label": "Cimatura",
    "parentCode": "TX-08.01",
    "level": 3
  },
  {
    "code": "TX-09.01.01",
    "label": "Controllo tessuto finito",
    "parentCode": "TX-09.01",
    "level": 3
  },
  {
    "code": "TX-10.01.01",
    "label": "Taglio industriale",
    "parentCode": "TX-10.01",
    "level": 3
  },
  {
    "code": "TX-11.01.01",
    "label": "Gestione di filiera produttiva esternalizzata",
    "parentCode": "TX-11.01",
    "level": 3
  },
  {
    "code": "TX-12.01.01",
    "label": "Commercio all’ingrosso di tessuti",
    "parentCode": "TX-12.01",
    "level": 3
  }
];

export const materials: DictionaryItem[] = [
  {
    "code": "WO",
    "label": "Lana"
  },
  {
    "code": "CO",
    "label": "Cotone"
  },
  {
    "code": "PES",
    "label": "Poliestere"
  },
  {
    "code": "PA",
    "label": "Poliammide"
  },
  {
    "code": "LI",
    "label": "Lino"
  },
  {
    "code": "VI",
    "label": "Viscosa"
  },
  {
    "code": "OTHER",
    "label": "Altro"
  }
];

export const technologies: DictionaryItem[] = [
  {
    "code": "JACQUARD",
    "label": "Jacquard"
  },
  {
    "code": "DOBBY",
    "label": "Ratiera/licci"
  },
  {
    "code": "RAPIER",
    "label": "Pinza"
  },
  {
    "code": "AIR_JET",
    "label": "Getto d’aria"
  },
  {
    "code": "RING",
    "label": "Ring spinning"
  },
  {
    "code": "OPEN_END",
    "label": "Open-end"
  }
];

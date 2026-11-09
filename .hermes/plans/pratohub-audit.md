# PratoHub Audit — WP00-WP08 (9 nov 2026)
Base: Studio 03 (16 pagine) + ciclo unico (World04+06+07+Loom12). Git main 9887bf6, clean.
Baseline: 50 file html/js/css/ts, bundle hero 1.35M (three), cycle main 737KB, 9.1M totale.
P0: doppio context WebGL evitato, ma nessun handler contextlost; nessun lazy-load hero; worlds legacy duplicate (world04/05/06/07) ancora su disco.
P1: nessuna suite test nel repo pubblicato (solo in loom12 source); a11y ok ridotto motion; CLS ok (canvas fixed height 48%).
P2: design: flash titolo + hero meta ok.
WP02-07: autoplay + drag hero, loom-final unico, orchestrator fault interlock gia attivo.
WP06: build tsc passata prima di loom-final; browser test manuale curl 200; screenshot pendenti.
Dettagli completi in report finale.

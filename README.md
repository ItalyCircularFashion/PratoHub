# PratoHub — Unificato CHat (01→07)

Build unificata in ordine cronologico da `C:\Users\ACER\Documents\PratoHub Sviluppo\CHat`:

1. `PratoHub_Motion_Prototype.zip` (01) — 7 pagine motion early
2. `PratoHub_Studio_02_Advanced_Motion.zip` (02) — 16 pagine
3. `PratoHub_Studio_03_WebGL.zip` (03) — 16 pagine + WebGL2 nativo (base di questo sito)
4. `PratoHub_World_04_Immersive.zip` → `world04/` — Three.js, 4 pagine
5. `PratoTextile_Immersive_05_Source.zip` → `world05/` — Three.js
6. `PratoTextile_World_06_GLb_Scroll.zip` → `world06/` — Three.js + GLB scroll, 4 modelli `models/`
7. `PratoTextile_Loom_07_Focus_Telaio.zip` → `world07/` — Three.js focus telaio, `models/loom-reference.glb`

La base statica (16 pagine: index, news, article, aziende, company, market, community, discussions, thread, questions, question, events, research, ecobalyse, notifications, 404) è Studio 03, superset delle 01 e 02.
I 4 mondi TS sono build Vite separate composte come sottositi con base relativa `./`.

Font Google rimossi (system stack) per offline/CSP self-only. CSP self-only iniettata nelle 16 pagine.

## Sviluppo
```sh
python3 -m http.server 8814 --bind 127.0.0.1
```

## Contenuti
Prototipo grafico / contenuti dimostrativi dichiarati in pagina (`CONTENUTI DIMOSTRATIVI / NO LIVE DATA`). Nessun database.

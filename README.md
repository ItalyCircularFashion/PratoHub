# PratoHub Local Alpha — WP00 / WP01

Monorepo npm: `apps/web` React/TypeScript/Vite, `apps/api` Nest/TypeScript, `packages/shared`, `database` Prisma/PostgreSQL. Il frontend statico può funzionare senza backend e non contiene aziende o articoli approvati. L'API è un prototipo locale e non è un servizio di produzione.

## Frontend statico / Pages

`npm ci --ignore-scripts`, `npm run build --workspace @pratohub/web`, `node scripts/check-public-build.mjs`, poi `npm run test:e2e` (dopo installazione Chromium di Playwright). L'anteprima dei test usa la build con base `/PratoHub/` e navigazione a hash, così ricariche e link condivisi restano compatibili con Pages. I percorsi inesistenti a livello server usano `404.html`.

Il workflow `.github/workflows/deploy-pages.yml` verifica il frontend e pubblica solo `apps/web/dist`: richiede in GitHub Settings → Pages → Source: GitHub Actions. La directory e l'archivio sono vuoti; il catalogo statico non contiene bozza aziendale né dati amministrativi. Il repository e la sua cronologia sono pubblici: escludere i file dalla build non li rende privati. Il seed e i riferimenti alla bozza già versionati restano pubblicamente consultabili finché non si interviene separatamente sulla visibilità o sul contenuto del repository; la storia e le copie già pubbliche non vengono cancellate dal deploy.

## Avvio locale
Prerequisiti: Node 24, npm 11, Docker Compose, porte 127.0.0.1:55432, 3000 e 5173 libere. Non usare un database preesistente. Da questa directory:

1. Copiare `.env.example` in `.env`, generare una password casuale locale e sostituire **entrambi** i segnaposto (password e URL) con lo stesso valore esadecimale. Impostare `PRATOHUB_ADMIN_ACTOR` all'identità reale dell'operatore locale (es. un nome scelto dall'operatore, quotato se contiene spazi). Generare nel file un token amministrativo casuale senza stamparlo: `node -e "const fs=require('fs'),c=require('crypto');let s=fs.readFileSync('.env','utf8');s=s.replace(/^PRATOHUB_ADMIN_TOKEN=.*$/m,'PRATOHUB_ADMIN_TOKEN='+c.randomBytes(32).toString('hex'));fs.writeFileSync('.env',s,{mode:0o600})"` e `chmod 600 .env`. Non condividere né committare `.env`. Il DB conserva la password iniziale nel volume; cambiare `.env` non la aggiorna nel DB. Se token o attore non sono configurati l'admin rifiuta ogni richiesta; nell'ambiente preparato il token esiste ma l'attore deve essere impostato dall'operatore.
2. `npm ci` (il lockfile è incluso); `docker compose up -d --wait db`.
3. `npm run db:migrate`, `npm run db:generate`, `npm run db:seed`. Le migration SQL Prisma sono l'unica modalità di creazione schema: non eseguire anche il DDL della baseline esterna.
4. `npm run build`; `npm run start --workspace @pratohub/api`. API su 127.0.0.1:3000. In altro terminale `npm run dev --workspace @pratohub/web` per la UI statica web, sotto `http://127.0.0.1:5173/PratoHub/`. La UI non accede al DB locale.
5. Per i test DB usare `.env` del DB dedicato: `set -a; . ./.env; set +a; npm run test` (non usare `set -x`); quindi `npm run lint`, `npm run typecheck`, `npm run build`. Le variabili già esportate hanno precedenza su `.env` nei comandi Prisma e nell'avvio Node: verificare sempre che `DATABASE_URL` punti a `127.0.0.1:55432/pratohub` prima di migrazioni/seed; se necessario `env -u DATABASE_URL npm run db:migrate` e analogamente per `db:seed` e l'avvio API. Per lo smoke browser: `PLAYWRIGHT_BROWSERS_PATH=./.playwright-browsers npx playwright install chromium --only-shell` e `npm run test:e2e`.

`docker compose stop db` arresta solo questo DB senza rimuoverne i dati. `docker compose start db` lo riavvia. Non usare `down -v` se i dati devono essere conservati. `.env`, database, dipendenze, artefatti di build e browser sono locali/ignorati da Git. Il progetto Compose è `pratohub-local-alpha`, non altera i servizi Docker esterni.

I test autonomi `node database/seeds/test_manteco_isolated.js` e `node tests/concurrency-db.cjs` usano container PostgreSQL effimeri dedicati e richiedono Docker. Le scritture DB su tassonomia, capability e sedi sono ammesse soltanto in transazioni READ COMMITTED; isolamento REPEATABLE READ e SERIALIZABLE viene rifiutato per evitare snapshot incoerenti.

## API WP01
- `GET /api/v1/taxonomy` → `{items:[...]}`, solo nodi attivi della versione `PRATOHUB-TX-1.0`, ordine per codice; opzionale `?level=1|2|3`.
- `GET /api/v1/taxonomy/{code}/children` → figli diretti attivi; foglia nota: lista vuota; codice inesistente: 404; codice malformato o query non valida: 400.
- `GET /api/v1/admin/taxonomy` e `GET /api/v1/admin/taxonomy/{code}`: lettura amministrativa anche degli inattivi. Tutte le rotte admin richiedono `Authorization: Bearer <token>`.
- `POST /api/v1/admin/taxonomy`: JSON `code`, `label_it`, per L2/L3 `parent_code` pari al prefisso, opzionali `label_en`, `description_it`, `sort_order`. La versione è fissa; `PATCH /api/v1/admin/taxonomy/{code}` modifica solo etichette, descrizione e ordine. Identità e parent non cambiano.
- `DELETE /api/v1/admin/taxonomy/{code}` disattiva definitivamente; rifiutato se ci sono figli attivi o capability. Nessuna cancellazione fisica, riattivazione o riutilizzo codice. Create/update/disattivazione scrivono evento audit nella stessa transazione con l'identità configurata; nessun evento per update senza cambiamenti.
- Massimo 120 richieste admin per minuto per processo (condiviso, anche per errori); il confronto del token è timing-safe. È una protezione **solo localhost**: segreto condiviso, un solo attore configurato, limite in memoria, niente TLS, account individuali, sessioni o audit DB immutabile. Non distribuire né esporre in rete: deployment non sicuro.
- Nessuna API aziende, pubblicazione o esposizione bozze. Materiali e tecnologie sono dizionari DB, non endpoint.

## Documenti
- `docs/WP00.md`: ambiente, decisioni, rischi e verifica.
- `docs/WP01.md`: modello, evidenze, constraint e verifiche.
- `PROJECT_STATUS.md`: stato, limiti e fasi rinviate.

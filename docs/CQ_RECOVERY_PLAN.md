# PratoHub — consolidamento CQ e piano cronologico

## Mandato e limiti

Consolidare il lavoro locale senza cancellare la nuova dashboard né sostituire alla cieca il sito online. Implementazione locale autorizzata; nessun commit, push o deploy implicito. Non modificare dati o schema DB senza una necessità documentata e un percorso Prisma approvato. Non inventare informazioni riferite ad aziende reali.

Baseline: working tree su `main`, HEAD `e86ae37cc26a7401a252433b8c0604b73dba548e`. Prima dell'intervento esistevano cinque file modificati e il controller companies non tracciato. Il deploy online verificato nell'audit precedente era `c83ab74fb70dca62f6cb42d5b152b58da2ac735d`; questo lavoro non cambia il sito pubblico.

## Sequenza e dipendenze

| Fase | Obiettivo | Condizione di chiusura | Stato |
| --- | --- | --- | --- |
| 0 | Conservare working tree, untracked e Git | Backup con checksum e confronto HEAD/status | COMPLETATA |
| 1 | Proteggere il confine pubblico API | Solo PUBLISHED; email pubbliche; bozze non interrogabili; test e HTTP reale | COMPLETATA nel perimetro sotto |
| 2 | Separare dati pubblici, DEMO e configurazione API | Nessun fallback sintetico ambiguo; nessun token nel bundle; nessun localhost imposto ai visitatori; stati vuoti/errore/riprova verificati | DA FARE |
| 3 | Rendere la dashboard usabile e verificabile | CSS compatibile collegato, citazioni JSX, filtri coerenti anche ARIA, responsive | DA FARE |
| 4 | Riconciliare l'interfaccia con i percorsi esistenti | Filiera/Network/Brief raggiungibili; parametri mantenuti; link informativo dati non interrotto | DA FARE |
| 5 | Verificare la versione candidata | Build/typecheck/lint, test dei percorsi e dati, revisione fonti, anteprima; separata autorizzazione al deploy | DA FARE |

Le fasi 2 e 3 devono seguire il contratto pubblico della fase 1: ripristinare le 13 bozze su un endpoint anonimo per riempire la UI non è una correzione ammessa.

## Fase 0 — backup verificato

Percorso: `/home/indigo/PratoHub-backups/20261030T170542/repo-snapshot`.
Manifesto esterno allo snapshot: `/home/indigo/PratoHub-backups/20261030T170542/MANIFEST.json`.
Verificati SHA-256 di 124 file regolari, stesso HEAD e stesso stato dirty dell'originale. Conservati anche `.git`, file locali e artefatti presenti; escluse directory rigenerabili `node_modules`, `.pgvenv`, `.playwright-browsers`, `test-results`, `playwright-report`. Backup esterno al repository e directory superiore con permessi 700.

## Fase 1 — analisi preventiva CQ + cybersecurity

| Area | Finding | Rischio | Mitigazione | Verdetto iniziale |
| --- | --- | --- | --- | --- |
| Lista/detail aziende | Le query anonime potevano leggere DRAFT | Medio locale, alto in caso di esposizione pubblica | Vincolo PUBLISHED nella query di entrambe le route | CLEAN_WITH_LIMITS |
| Contatti | Il primo contact_value non veniva filtrato per is_public o tipo | Medio | Selezionare solo PUBLIC_EMAIL con is_public=true | CLEAN_WITH_LIMITS |
| Filtri | Parametri ripetuti, sconosciuti o tipizzati male potevano essere ignorati | Medio | Validazione prima della query; nessun override della visibilità | CLEAN_WITH_LIMITS |
| Ambiente | Server statico su 0.0.0.0:5174 | Medio secondo rete/firewall WSL | Anteprima su 127.0.0.1 | CLEAN_WITH_LIMITS |
| Conservazione dati | Correzione della visibilità poteva essere confusa con cancellazione/publishing | Medio operativo | Nessuna scrittura DB e conteggio read-only separato | CLEAN_WITH_LIMITS |

## Fase 1 — implementazione

- `apps/api/src/companies.controller.ts`: lista e dettaglio usano una proiezione comune e un vincolo `publication_status=PUBLISHED` non modificabile dal chiamante.
- Un record DRAFT e uno assente producono lo stesso 404 sul dettaglio; nessuna query preliminare che carichi la bozza.
- `contact_email` deriva solo da `contact_type=PUBLIC_EMAIL AND is_public=true`. Non si caricano telefoni, contact page o contatti privati nel DTO.
- Sede e contatto scelti con ordine deterministico; sede primaria preferita.
- La lista accetta esclusivamente `publication_status=PUBLISHED`, `claim_status`, `role_code`, `search`. Enum ammessi trattati in modo coerente; query duplicate, sconosciute, strutturate, vuote o fuori contratto rifiutate. Ricerca parametrizzata Prisma su denominazione legale/commerciale, massimo 120 caratteri.
- Nessuna route di scrittura, pubblicazione o anteprima anonima aggiunta. Nessun token inserito nel frontend.
- Rimossi i due elementi API inutilizzati che causavano lint.
- Aggiunti test HTTP isolati e aggiornata l'asserzione del test DB precedentemente ferma all'assenza totale della route companies. README aggiornato sul contratto pubblico.
- Compilata API e sostituito il processo locale sulla porta 3000. Terminato il processo temporaneo su 3001.
- Riavviata anteprima statica preesistente su 5174 con bind `127.0.0.1`; nessuna modifica al frontend in questa fase.

## Fase 1 — prove eseguite

1. RED: nuova suite companies contro il codice precedente: 17 test falliti e 6 passati, 23 totali. Dimostrati i difetti su scope pubblico, contatti e validazione.
2. GREEN: `npm run test --workspace @pratohub/api -- --runTestsByPath test/companies-public.spec.ts test/taxonomy-unit.spec.ts`: 26 test passati, 2 suite.
3. `npm run typecheck --workspace @pratohub/api`: PASS.
4. `npm run build --workspace @pratohub/api`: PASS.
5. ESLint sui due file della nuova implementazione/test: PASS. Lint globale: rimane 1 errore preesistente frontend, `onRefetch` inutilizzato in App.tsx, da trattare nella fase 2.
6. Integrazione HTTP con PostgreSQL reale: eseguito soltanto il caso `restricts public companies` in `taxonomy.spec.ts`: 1 passato, 8 saltati. Non eseguiti gli altri test che tentano scritture DB.
7. Processo API temporaneo: 9 controlli HTTP passati, inclusi lista vuota 200, richiesta DRAFT 400, dettaglio Manteco 404, filtri ripetuti e parametri sconosciuti 400, tassonomia L1 200 con 12 nodi.
8. Porta standard 3000 dopo sostituzione: lista 200 con `{items:[]}`, richiesta DRAFT 400, dettaglio della bozza 404.
9. Query Prisma read-only: 13 aziende DRAFT/UNCLAIMED ancora presenti. Nessuna migrazione, seed o scrittura effettuata dal lavoro di consolidamento.
10. Browser Chromium 156.0.8078.47 su `http://localhost:5174/`: nessun pageerror, nessun errore di caricamento aziende, 0 schede pubbliche. Zero stylesheet rimane un difetto noto della fase 3, non è stato dichiarato corretto.
11. Listener verificati: API 127.0.0.1:3000; anteprima 127.0.0.1:5174; porta 3001 chiusa.

## Limiti e rischi residui

La protezione API della fase 1 è verificata, non una certificazione dell'intero progetto. Nel DB attuale non vi sono aziende pubblicate: il ramo con risposta positiva e la selezione dei contatti pubblici sono verificati con fixture esplicitamente DEMO e asserzioni sulla query Prisma; l'HTTP su PostgreSQL reale verifica soprattutto il blocco delle bozze e il catalogo vuoto. Non sono stati pubblicati record per costruire una prova artificiale.

Il sito locale resta graficamente incompleto; il CORS supporta ancora solo `http://localhost:5174`, mentre il frontend conserva un API_BASE loopback. Questi sono punti della fase 2, non corretti implicitamente dalla chiusura della fase 1. Nessun endpoint protetto per visualizzare bozze è stato implementato.

Il seed locale già modificato prima del consolidamento non è stato rieseguito né validato come idempotente. I test unitari/HTTP isolati non sostituiscono quel collaudo.

La homepage contiene indicatori e schede provenienti dal precedente lavoro: le rispettive fonti non diventano verificate perché il codice compila. La revisione del contenuto rimane un gate di rilascio.

## Registro di provenienza delle evidenze numeriche

| Affermazione | Valore/unità | Segno | Periodo | Fonte | Livello |
| --- | --- | --- | --- | --- | --- |
| Schede DB preservate | 13 aziende | n/a | snapshot locale della fase 1 | Prisma groupBy publication_status/claim_status | confermato, tutte DRAFT/UNCLAIMED; non aziende verificate |
| Schede anonime | 0 aziende | n/a | API locale dopo fix | GET /api/v1/companies, DB attuale | confermato; non cancellazione |
| Macroaree di controllo | 12 nodi | n/a | catalogo locale PRATOHUB-TX-1.0 | GET /api/v1/taxonomy?level=1 | confermato come conteggio locale |
| Esempio di contatto positivo | demo@example.invalid | n/a | solo suite isolata | companies-public.spec.ts | DEMO, non contatto aziendale reale |

## Ripresa e gate di rilascio — 30 ottobre 2026

Il registro sopra conserva le evidenze della prima sessione; le voci DA FARE e i limiti frontend descrivono quel momento, non la versione candidata seguente. L'utente ha ora autorizzato esplicitamente commit e push.

- Dashboard integrata con stile dedicato, catalogo pubblico statico separato e modalità DEMO esplicita. Il sito Pages non contatta API localhost e non carica bozze DB.
- Conteggi derivati dal catalogo e dai risultati: non vengono pubblicate le statistiche economiche o le attribuzioni aziendali del vecchio modulo `data.ts`, che non è importato dalla nuova applicazione.
- Filiera, Network e Brief collegati; filtri gerarchici persistenti nell'URL; esportazioni CSV e JSON locali; navigazione mobile e gestione focus collaudate.
- Verifica eseguita sulla working tree: typecheck di tutti i workspace, lint, 12 test frontend, 26 test API isolati, build frontend e API: PASS. Scanner build pubblico: PASS, 5 file. Playwright: 9 test PASS, incluse larghezze 1440/768/390/320, filtri, reset, download e navigazione. Nessuna migrazione, seed o test con scritture DB eseguito.
- Backup pre-rilascio con confronto dei byte: `/home/indigo/PratoHub-backups/pre-publish-20261030T182140`, 22 file modificati/nuovi.
- Escluse dal commit le modifiche pregresse a `database/seeds/05_companies.sql` (non collaudate, contatti sintetici non sicuri da presentare come reali) e `apps/web/src/data.ts` (modulo legacy non utilizzato). Restano locali e nel backup; non vengono cancellate.
- Il repository pubblico e la sua cronologia sono una superficie diversa dal sito Pages: l'esclusione dal bundle non rende privati i sorgenti storici. La bonifica dei vecchi seed e delle informazioni legacy non fa parte di questo rilascio.

Verdetto candidato: CLEAN_WITH_LIMITS. Perimetro pubblicabile: frontend statico, DEMO dichiarata e codice/test di protezione API; non un servizio B2B con aziende approvate o invio richieste. La pubblicazione sarà verificata sul commit remoto, sull'esito Actions e sulla pagina live; un push da solo non prova il deploy.

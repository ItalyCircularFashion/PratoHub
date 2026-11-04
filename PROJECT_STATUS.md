# Stato progetto

## Frontend distribuito e candidata CQ locale

Il frontend è una SPA React/Vite pubblica con Dashboard, Filiera, Network, Brief locale, Intelligence, Presentazione e Dati/trasparenza. La descrizione del vecchio segnaposto non rappresenta più l’interfaccia corrente.

La release pubblica verificata è `ab672b792a46f9123b0b96b8107f2c9efbe7107e`, con build/deploy riusciti nel workflow `41712166860`. Il CQ del 4 novembre 2026 corregge localmente i difetti riprodotti su quella baseline; non costituisce una nuova pubblicazione. Evidenze, test e riserve sono registrati in `docs/CQ_SENIOR_2026-11-04.md`.

Il catalogo pubblico statico non contatta il localhost dei visitatori e contiene attualmente zero aziende e zero articoli approvati. La DEMO è separata: 12 schede sintetiche, non imprese reali. Tassonomia, materiali e tecnologie provengono dal catalogo versionato; i conteggi non sono statistiche economiche sul distretto. Nessun nuovo record aziendale è stato inventato o pubblicato dal CQ.

Il Brief è un documento transitorio nella memoria della pagina, esportabile TXT/JSON, non una richiesta inviata. Le correzioni locali distinguono la data incompleta da quella omessa, mantengono il documento navigando nella stessa sezione e associano gli errori ai campi. Uscire dalla sezione o ricaricare la pagina continua a far perdere i dati non esportati: non è stata aggiunta persistenza.

## Backend e database

WP00/WP01 comprendono scaffold, tassonomia/dizionari, vincoli Prisma e CRUD amministrativo della tassonomia con bearer locale. La company API esiste: lista e dettaglio sono limitati a PUBLISHED e ai soli contatti esplicitamente pubblici. Il catalogo Pages è distinto da quell’API.

Il backend non è pronto per un’esposizione di produzione: mancano identità multiutente e autenticazione di produzione, audit DB append-only e un flusso completo di revisione/pubblicazione dei profili. Il blocco di pubblicazione WP01 non è un gate definitivo di prodotto. I documenti `docs/WP00.md`, `docs/WP01.md` e il registro storico `docs/CQ_RECOVERY_PLAN.md` conservano le evidenze delle rispettive fasi, non un collaudo attuale dell’intero sistema.

Nessuna migrazione, seed, query di scrittura o prova con effetti sul DB è stata eseguita dal CQ corrente. Le modifiche pregresse ai dati legacy e al seed aziende sono state preservate ed escluse dalla candidata verificata.

## Sicurezza e limiti residui

`npm audit --omit=dev`: zero segnalazioni. Audit completo verificato: 35 pacchetti coinvolti (4 high, 27 moderate, 4 low), derivanti da 4 advisory distinti nella toolchain di sviluppo. Non sono 35 CVE differenti e non dimostrano uno sfruttamento nel sito statico. Nessun aggiornamento major, override incompatibile o audit fix forzato è stato applicato: la bonifica della toolchain richiede un intervento mirato e un collaudo dedicato.

Il repository e la sua storia sono pubblici, inclusi sorgenti/seed esclusi dal bundle. La dicitura DRAFT non è un controllo di riservatezza. La revisione della policy dei dati e ogni eventuale rimozione, cambio visibilità o riscrittura della storia richiedono autorizzazione distinta; non sono stati eseguiti implicitamente.

Restano non implementati: multilingua completo, invio email del Brief, account utenti e servizio B2B con aziende approvate. Le copie editoriali separate non sono state integrate né alterate. I test browser, lo scanner per pattern e la revisione dei sorgenti non equivalgono a una certificazione completa di sicurezza o accessibilità.

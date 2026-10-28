# Stato progetto

WP00 e WP01 nel perimetro locale: scaffold, persistenza, tassonomia pubblica in lettura e CRUD amministrativo della tassonomia autenticato con bearer locale. Materiali e tecnologie sono dizionari nel DB, non endpoint. Nessuna UI della directory o migrazione grafica.

WP00: scaffold e verifiche tecniche eseguite, dettagli in `docs/WP00.md`. WP01: tassonomia, dizionari, constraint e CRUD admin verificati, con limiti in `docs/WP01.md`. E2E è uno smoke del segnaposto, non un test di directory.

Quality gate locale 28/10/2026: migration 001–005 applicate; validazione Prisma, build, typecheck, lint, 16 Jest, 1 Vitest e 1 Playwright smoke superati. Test autonomi su PostgreSQL isolato: 12 collisioni seed con rollback, ripetibilità e sei interleaving concorrenti. Le scritture su tassonomia, capability e sedi richiedono READ COMMITTED; l'accesso admin resta chiuso fino alla configurazione dell'identità reale.

**Non implementati / non verificati:** autenticazione di produzione o multiutente, audit append-only garantito dal DB e audit generale, company API, ricerca/filtri directory, presentazione pubblica e pubblicazione con verifica delle evidenze, validazione privacy/media, UI e relativi E2E di prodotto. I constraint WP01 proibiscono qualsiasi `PUBLISHED` finché non saranno sostituiti con un gate reale in una fase autorizzata. Non confondere questo blocco temporaneo con un gate di pubblicazione completo.

**Sicurezza:** autenticazione minima solo localhost; il deployment in rete non è sicuro, non farlo. L'operatore deve impostare il proprio identificativo reale nel file `.env`; fino ad allora l'admin resta chiuso. Audit limitato alle scritture tramite questa API, non alle operazioni SQL dirette; test e database sono locali e non contengono credenziali reali versionate. `npm audit --omit=dev` 0 vulnerabilità; audit completo 11 segnalazioni (4 high e 7 low) nelle dipendenze di sviluppo, incluse Prisma/config, deepmerge-ts, effect e strumenti Jest: non ignorarle prima di CI o produzione. Nessuna migrazione di altri repository o dati.

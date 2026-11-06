# PratoHub

Portale editoriale statico in italiano per GitHub Pages:
https://italycircularfashion.github.io/PratoHub/

## Struttura pubblica

- `news/` con `distretto-prato/`, `sostenibilita/`, `tecnologie-tessili/` e schede articolo permanenti
- `aziende/` con `filature/`, `tessiture/`, `tintorie/`, `rifinizioni/` e schede azienda da siti ufficiali
- `market/` (fonti e osservatori, senza quotazioni simulate), `events/` (calendari degli organizzatori)
- `community/`, `community/discussions/`, `community/questions/` (spazio dichiarato non attivo: nessun form, nessun fake)
- `ecobalyse/` (collegamento al simulatore ufficiale; nessun embed né API dal browser)
- `progetto/` (metodo, limiti e registro delle fonti primarie) e `privacy/`

I percorsi esistenti di PratoTextile sotto `it/`, `en/`, `fr/`, `es/`, `pt/`, `ja/`, `ko/`, `zh/`, `ar/` sono conservati.

## Fonti primarie

Il registro in `progetto/` e in `market/` elenca sette riferimenti ricorrenti:
Internet Archive, Textile Exchange, EURATEX, Commissione europea, ISTAT,
Confindustria Toscana Nord, Google Scholar — con utilizzo editoriale e priorità
(`portal/lib/core.mjs`, `PRIMARY_SOURCES`). Ogni articolo e ogni scheda azienda
riportano le fonti concrete consultate, con data.

## Comandi (solo Node 22, nessuna dipendenza installata per la build)

```
node --test tests/unit.test.mjs
node scripts/lint.mjs
node scripts/build.mjs
node scripts/check.mjs
node scripts/serve.mjs   # anteprima locale http://127.0.0.1:4187/PratoHub/
```

Il workflow Pages esegue lint + build + check e pubblica `dist/`.

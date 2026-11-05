// PratoHub — locale keys e motore di traduzione (evoluzione struttura frontend).
// MVP: struttura + motore (no switch d'idioma attivo, nessuna traduzione di
// prodotto verificata). Italiano = lingua sorgente. Inglese = segnaposto
// (non dati inventati, solo riferimento per futuri revisori). Nessuna stringa
// di prodotto viene rimossa: i valori sono sostituiti solo nel listino
// `LOCALES` e qui stesso; il listato italiano è la fonte autorizzata.

export type Locale = 'it' | 'en';

/** Punto di partenza del locale: preferisce `en` (navigator) altrimenti `it`. */
export function getLocale(): Locale {
  if (typeof navigator !== 'undefined' && navigator.language.startsWith('en')) return 'en';
  return 'it';
}

/** Applica il locale all'elemento radice: compo componenti e CSS possono leggerlo. */
export function setLocale(locale: Locale): void {
  document.documentElement.dataset.locale = locale;
}

// Listato. Chiavi italiane autorizzate; inglese = fallback visivo (segnaposto).
// Aggiungere qui una nuova voce prima di usare `t` in un nuovo componente.
export const LOCALES = {
  it: {
    'app.name': 'PratoHub',
    'app.subtitle': 'TEXTILE INTELLIGENCE & NETWORK',
    'nav.home': 'Home',
    'nav.dashboard': 'Dashboard',
    'nav.filiera': 'Filiera',
    'nav.network': 'Network',
    'nav.brief': 'Brief',
    'nav.intelligence': 'Intelligence',
    'nav.project': 'Il progetto',
    'nav.privacy': 'Dati e trasparenza',
    'hero.intro': 'La filiera tessile, a colpo d’occhio',
    'hero.intro_sub': 'Dai processi alle richieste. Un punto di partenza concreto, senza attribuire competenze non verificate.',
    'hero.esplora': 'Esplora la filiera',
    'hero.brief': 'Prepara un brief',
    'footer.progetto': 'Il progetto',
    'footer.privacy': 'Dati e trasparenza',
    'progetto.title': 'Strumenti per leggere la filiera e preparare richieste più chiare.',
    'privacy.title': 'Dati e strumenti, senza ambiguità',
    'brief.empty': 'Nessun risultato per questi filtri',
    'brief.loading': 'Caricamento del catalogo…',
    'error.load': 'Il caricamento del catalogo non è riuscito.',
  },
  en: {
    'app.name': 'PratoHub',
    'app.subtitle': 'TEXTILE INTELLIGENCE & NETWORK',
    'nav.home': 'Home',
    'nav.dashboard': 'Dashboard',
    'nav.filiera': 'Supply chain',
    'nav.network': 'Network',
    'nav.brief': 'Brief',
    'nav.intelligence': 'Intelligence',
    'nav.project': 'About',
    'nav.privacy': 'Data & transparency',
    'hero.intro': 'The textile supply chain at a glance',
    'hero.intro_sub': 'Explore processes, prepare a brief, orient research. A concrete starting point, without assuming unverified skills.',
    'hero.esplora': 'Explore the supply chain',
    'hero.brief': 'Prepare a brief',
    'footer.progetto': 'About',
    'footer.privacy': 'Data & transparency',
    'progetto.title': 'Tools to read the supply chain and prepare clearer requests.',
    'privacy.title': 'Data and tools, without ambiguity',
    'brief.empty': 'No result for these filters',
    'brief.loading': 'Loading the catalog…',
    'error.load': 'The catalog could not be loaded.',
  },
} as const;

/** Ritorna la traduzione di `key` nella `locale` data; se manca, torna `key` (nessun valore inventato). */
export function t(locale: Locale, key: keyof (typeof LOCALES)['it']): string {
  const table = LOCALES[locale];
  if (!table) return key;
  const entry = table[key];
  return entry ?? key;
}

// Vicendelink tra route e chiave di navigazione (usato da Shell).
export const NAV_KEYS: Record<string, keyof (typeof LOCALES)['it']> = {
  '/': 'nav.home',
  '/dashboard': 'nav.dashboard',
  '/filiera': 'nav.filiera',
  '/network': 'nav.network',
  '/brief': 'nav.brief',
  '/intelligence': 'nav.intelligence',
};

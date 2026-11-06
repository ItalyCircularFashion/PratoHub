import { escapeHtml as e } from './core.mjs';
import { layout, external, crumbs, intro, status } from './layout.mjs';

export function ecobalysePage() {
  return layout({
    path: 'ecobalyse/',
    title: 'Ecobalyse · Misurare, prima di dichiarare',
    description: 'Collegamento al simulatore ufficiale Ecobalyse per il costo ambientale dei prodotti tessili, con metodo, versioni e condizioni del gestore.',
    section: 'ecobalyse',
    content: `${crumbs([{ label: 'Ecobalyse' }])}${intro({
      label: 'Strumento / Ecobalyse',
      title: 'Misurare, prima di dichiarare.',
      description: 'Ecobalyse è il simulatore pubblico francese per stimare il costo ambientale dei prodotti tessili. Da qui si raggiunge il servizio ufficiale e la sua documentazione; PratoHub non calcola e non ripubblica punteggi.',
    })}<div class="tool-layout"><section class="tool-panel"><p class="eyebrow">Simulatore ufficiale</p><h2>Il calcolo avviene sul sito del gestore</h2><p>Apri il simulatore nella versione corrente oppure nella versione stabile v7.0.0. I dati che inserisci e i risultati che ottieni restano nel servizio ufficiale, secondo le sue condizioni d’uso.</p><div class="tool-actions">${external('https://ecobalyse.beta.gouv.fr/#/textile/simulator', 'Apri la versione corrente', 'button')}${external('https://ecobalyse.beta.gouv.fr/versions/v7.0.0/#/textile/simulator', 'Apri la versione stabile v7.0.0', 'button button-secondary')}</div><p class="caption">Verifica tecnica del 2026-11-06: gli header ufficiali negano l’incorporamento in iframe (SAMEORIGIN) e la chiamata browser all’API richiede CORS non concesso. Per questo questa pagina non incorpora il simulatore e non lo invoca.</p></section><aside class="tool-notes"><p class="eyebrow">Metodo e versioni</p><h2>Un numero ha una versione</h2><p>Ogni risultato dipende dal modello, dai dati e dalla versione del simulatore. PratoHub non attribuisce a Ecobalyse simulazioni locali e non presenta stime come certificazioni.</p><ul><li>Leggi la documentazione e il metodo prima di confrontare risultati.</li><li>Distingui versione corrente e versione stabile v7.0.0.</li><li>Verifica le condizioni d’uso sul sito del gestore.</li></ul><div class="tool-actions">${external('https://fabrique-numerique.gitbook.io/ecobalyse', 'Documentazione ufficiale', 'text-link')}${external('https://github.com/MTES-MCT/ecobalyse', 'Codice sorgente', 'text-link')}</div></aside></div>${status('Nessun calcolo locale, nessun embed.', 'PratoHub non reproduce punteggi, non chiama l’API Ecobalyse dal browser e non conserva le simulazioni. Per calcoli, condivisione e confronto usa il simulatore ufficiale.', 'Trasparenza del servizio')}<section class="text-columns home-section"><div><h2>Cosa consegnare al gestore</h2><p>Il simulatore richiede scelte sui materiali, sulle fasi e sulle condizioni d’uso: rispondi alle sue domande sul sito ufficiale. Questa pagina non raccoglie quei dati.</p></div><div><h2>Come citarlo</h2><p>Cita la versione usata e la data di consultazione. Un punteggio senza versione e senza perimetro non è confrontabile con un altro.</p></div></section>`,
  });
}

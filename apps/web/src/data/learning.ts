import { taxonomy } from './catalog';

export type LearningMacroareaCode = `TX-${'01' | '02' | '03' | '04' | '05' | '06' | '07' | '08' | '09' | '10' | '11' | '12'}`;

export interface LearningFamily {
  id: string;
  title: string;
  description: string;
  macroareaCodes: readonly LearningMacroareaCode[];
}

// Raggruppamenti editoriali: le etichette delle macroaree restano nel catalogo canonico.
export const learningFamilies: readonly LearningFamily[] = [
  {
    id: 'materia-recupero',
    title: 'Materia e recupero',
    description: 'Si parte dalla materia disponibile: fibre, materiali recuperati e selezione delle risorse da trasformare.',
    macroareaCodes: ['TX-01'],
  },
  {
    id: 'preparazione-filati',
    title: 'Preparazione e filati',
    description: 'Le fibre diventano filati; le lavorazioni successive ne preparano le caratteristiche per gli impieghi tessili.',
    macroareaCodes: ['TX-02', 'TX-03'],
  },
  {
    id: 'strutture-tessili',
    title: 'Strutture tessili',
    description: 'Preparare i fili e costruire una struttura: tessitura e maglieria sono strade differenti, non tappe da percorrere entrambe.',
    macroareaCodes: ['TX-05', 'TX-06', 'TX-07'],
  },
  {
    id: 'colore-rifinizione',
    title: 'Colore e rifinizione',
    description: 'Colore, mano e superficie prendono forma con trattamenti scelti secondo il materiale e il risultato cercato.',
    macroareaCodes: ['TX-04', 'TX-08'],
  },
  {
    id: 'qualita-confezione',
    title: 'Qualità e confezione',
    description: 'Controllare, riparare e confezionare sono attività distinte. Il controllo può accompagnare anche le altre lavorazioni.',
    macroareaCodes: ['TX-09', 'TX-10'],
  },
  {
    id: 'servizi-mercato',
    title: 'Servizi e mercato',
    description: 'Coordinamento industriale, servizi e scambi collegano competenze produttive e destinazioni commerciali.',
    macroareaCodes: ['TX-11', 'TX-12'],
  },
];

export const learningOrientationNote = 'Raggruppamento orientativo, non sequenza obbligatoria: le lavorazioni possono alternarsi, ripetersi o seguire percorsi diversi. Le famiglie non sostituiscono la tassonomia del catalogo.';

export function getLearningMacroareas(family: LearningFamily) {
  return taxonomy.filter(node => node.level === 1 && family.macroareaCodes.some(code => code === node.code));
}

export function learningTaxonomyRoute(code: string): string {
  return `/filiera?node=${encodeURIComponent(code)}`;
}

export const learningManuals = {
  moretti: {
    author: 'Alberto Moretti',
    title: 'Composizione, analisi e fabbricazione dei tessuti — I tessuti semplici',
    publisher: 'Franco Cesati Editore',
  },
} as const;

export interface LearningSource {
  manualId: keyof typeof learningManuals;
  chapter: string;
  section: string;
  pdfPages: readonly number[];
}

export interface TextileTerm {
  id: string;
  term: string;
  aliases: readonly string[];
  definition: string;
  macroareaCode: LearningMacroareaCode;
  source: LearningSource;
}

// Definizioni riscritte per questa guida, verificate su moretti-layout.txt e moretti-raw.txt.
// pdfPages indica la pagina del PDF a partire da 1, non la numerazione a stampa:
// l'OCR non conserva sempre i numeri stampati. I manuali e le estrazioni restano fuori dal repository.
export const textileGlossary: readonly TextileTerm[] = [
  {
    id: 'ordito',
    term: 'Ordito',
    aliases: ['catena'],
    definition: 'In un tessuto ortogonale, è l’insieme dei fili orientati lungo la lunghezza della pezza. Le trame li attraversano nel senso trasversale.',
    macroareaCode: 'TX-05',
    source: { manualId: 'moretti', chapter: 'IV · Il tessuto', section: 'Generalità', pdfPages: [64, 66] },
  },
  {
    id: 'trama',
    term: 'Trama',
    aliases: ['tessimento', 'inserzione'],
    definition: 'Nel tessuto ortogonale, è il sistema di elementi inseriti trasversalmente rispetto all’ordito. Ogni inserzione partecipa alla costruzione dell’intreccio.',
    macroareaCode: 'TX-06',
    source: { manualId: 'moretti', chapter: 'IV · Il tessuto', section: 'Generalità', pdfPages: [64, 66] },
  },
  {
    id: 'armatura',
    term: 'Armatura',
    aliases: ['intreccio'],
    definition: 'È lo schema con cui ordito e trama passano sopra e sotto l’uno all’altra. La sua rappresentazione permette di leggere come si costruisce il tessuto; non va confusa con il solo comando dei licci.',
    macroareaCode: 'TX-06',
    source: { manualId: 'moretti', chapter: 'IV · Il tessuto; VI · Gli intrecci', section: 'Rappresentazione grafica dell’intreccio; Intrecci fondamentali', pdfPages: [72, 90] },
  },
  {
    id: 'tela',
    term: 'Tela',
    aliases: ['piana', 'taffettà'],
    definition: 'È l’armatura fondamentale in cui ogni filo alterna un passaggio sopra e uno sotto le trame; il filo vicino segue l’alternanza opposta. Il modulo comprende due fili e due trame.',
    macroareaCode: 'TX-06',
    source: { manualId: 'moretti', chapter: 'VI · Gli intrecci', section: 'Tela, figura 31', pdfPages: [91] },
  },
  {
    id: 'saia',
    term: 'Saia',
    aliases: ['spina'],
    definition: 'È un’armatura fondamentale i cui punti di legatura avanzano regolarmente da un filo al successivo, formando una direzione diagonale. La struttura minima comprende tre fili e tre trame.',
    macroareaCode: 'TX-06',
    source: { manualId: 'moretti', chapter: 'VI · Gli intrecci', section: 'Spina o Saia, figura 32', pdfPages: [91] },
  },
  {
    id: 'raso',
    term: 'Raso',
    aliases: ['satino'],
    definition: 'È un’armatura fondamentale con punti di legatura separati e distribuiti secondo un ordine. Rispetto alla saia, evita l’allineamento continuo dei punti su una diagonale; diritto e rovescio sono differenti.',
    macroareaCode: 'TX-06',
    source: { manualId: 'moretti', chapter: 'VI · Gli intrecci', section: 'Raso o Satino, figura 33', pdfPages: [91, 92] },
  },
  {
    id: 'rapporto',
    term: 'Rapporto d’intreccio',
    aliases: ['rapporto', 'modulo'],
    definition: 'È il modulo più piccolo che descrive l’intera alternanza dell’intreccio. Ripetendolo lungo i fili e lungo le trame si ricostruisce la struttura; può essere quadrato oppure rettangolare.',
    macroareaCode: 'TX-06',
    source: { manualId: 'moretti', chapter: 'IV · Il tessuto', section: 'Rapporto d’intreccio', pdfPages: [73] },
  },
  {
    id: 'rimettaggio',
    term: 'Rimettaggio',
    aliases: ['rincorsatura'],
    definition: 'È l’assegnazione ordinata dei fili d’ordito alle maglie dei licci. Collega lo schema del tessuto ai gruppi di fili che il telaio deve muovere insieme.',
    macroareaCode: 'TX-05',
    source: { manualId: 'moretti', chapter: 'V · Analisi dei tessuti', section: 'Rimettaggio', pdfPages: [83, 84] },
  },
  {
    id: 'filato',
    term: 'Filato',
    aliases: ['filo'],
    definition: 'È un elemento tessile continuo utilizzabile nelle lavorazioni. Può derivare da fibre discontinue riunite mediante filatura oppure essere costituito da uno o più filamenti continui.',
    macroareaCode: 'TX-02',
    source: { manualId: 'moretti', chapter: 'III · Filati', section: 'Generalità sui filati semplici; filati a bava continua e monobava', pdfPages: [42, 43] },
  },
  {
    id: 'titolo',
    term: 'Titolo del filato',
    aliases: ['titolo', 'titolazione', 'finezza'],
    definition: 'È la misura convenzionale della grossezza di un filato ottenuta mettendo in relazione massa e lunghezza. Il significato di un valore più alto dipende dal sistema di titolazione: occorre sempre specificarlo.',
    macroareaCode: 'TX-02',
    source: { manualId: 'moretti', chapter: 'III · Filati', section: 'Titolazione dei filati', pdfPages: [44, 45] },
  },
];

export function normalizeLearningSearch(value: string): string {
  return value.normalize('NFD').replace(/\p{M}/gu, '').toLocaleLowerCase('it').trim().replace(/\s+/g, ' ');
}

export function filterGlossaryTerms(query: string, terms: readonly TextileTerm[] = textileGlossary): readonly TextileTerm[] {
  const words = normalizeLearningSearch(query).split(' ').filter(Boolean);
  if (words.length === 0) return terms;
  return terms.filter(entry => {
    const node = taxonomy.find(item => item.code === entry.macroareaCode);
    const text = normalizeLearningSearch([entry.term, ...entry.aliases, entry.definition, entry.macroareaCode, node?.label ?? ''].join(' '));
    return words.every(word => text.includes(word));
  });
}

export function formatLearningSource(source: LearningSource): string {
  const manual = learningManuals[source.manualId];
  return `${manual.author}, ${manual.title} (${manual.publisher}), cap. ${source.chapter}, ${source.section}; pagine PDF ${source.pdfPages.join(', ')}.`;
}

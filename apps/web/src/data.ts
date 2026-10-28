// PratoHub content data — ported from pf7-en-7.2.1/data.js
// Sources: { n: label, u: url }
export interface Source {
  n: string;
  u: string;
}

// { v: number, l: label, s: sourceKey, y?: year }
export interface Stat {
  v: string;
  l: string;
  s: string;
  y?: string;
}

// { t: title, d: description }
export interface Step {
  t: string;
  d: string;
}

// { l: label, p: period, v: pct, s: sourceKey }
export interface Variazione {
  l: string;
  p: string;
  v: number;
  s: string;
}

// { n: name, c: category, m: city, d: description, s?: sourceKey }
export interface Azienda {
  n: string;
  c: string;
  m: string;
  d: string;
  s?: string;
}

export interface PHData {
  sources: Record<string, Source>;
  stats: Stat[];
  steps: Step[];
  variazioni: Variazione[];
  aziende: Azienda[];
}

export const PH_DATA: PHData = {
  sources: {
    cr: { n: "Controradio, missione a Bruxelles", u: "https://www.controradio.it/podcast/tessile-prato-porta-a-bruxelles-la-sfida-del-riciclo-a-rischio-diecimila-posti/" },
    irpet: { n: "IRPET, rapporto su Prato (dic. 2023)", u: "https://irpet.it/wp-content/uploads/2023/12/Report-PRATO-Duranti-Faraoni-12.2023.pdf" },
    qn43: { n: "Quotidiano Nazionale, intervista a Confindustria (2025)", u: "https://www.quotidiano.net/speciali/distretti/tessile/tessile-tra-crisi-e-speranza-9f2d9cfc" },
    naz26: { n: "La Nazione, dati IRPET su Istat (2026)", u: "https://www.lanazione.it/prato/cronaca/distretto-addetti-in-calo-prato-43078924" },
    mf: { n: "Milano Finanza (ago. 2025)", u: "https://www.milanofinanza.it/fashion/il-tessile-cerca-la-ripartenza-dal-2026-202507251704324918" },
    qf: { n: "QuiFinanza, progetto TIPO", u: "https://quifinanza.it/green/riciclo/prato-tipo-distretto-tessile-ecosostenibile/833054/" },
    cc: { n: "Camera di Commercio di Prato, comunicato sul cardato", u: "https://www.ptpo.camcom.it/doc/trasparenzaPO/2300_altr_cont/040_stampa/2010/comu020.pdf" },
    uni: { n: "Rivista Groundbreaking, Università di Milano (marchio Cardato Recycled)", u: "https://riviste.unimi.it/index.php/groundbreaking/article/download/9242/8741/27433" },
    didip: { n: "La Nazione, nascita di Didip", u: "https://www.lanazione.it/prato/cronaca/didip-la-piattaforma-del-distretto-e083ae26" },
    intl: { n: "Internazionale (28 maggio 2026)", u: "https://www.internazionale.it/reportage/annalisa-camilli/2026/05/28/sciopero-industria-tessile-cinesi-prato" },
    qnr: { n: "Quotidiano Nazionale, dati Commissione europea", u: "https://www.quotidiano.net/economia/tastava-i-vecchi-vestiti-con-le-dita-oggi-quel-mestiere-vale-milioni-moda-cenciaiolo-55778100" },
    rr: { n: "Osservatorio Textile Intelligence (fasi del ciclo ed elenco aziende)", u: "https://italycircularfashion.github.io/RonaldoRiskaCV/" },
  },
  stats: [
    { v: "7.000", l: "imprese nel distretto", s: "cr" },
    { v: "43.000", l: "addetti", s: "cr" },
    { v: "2,8 mld €", l: "di export all'anno", s: "cr" },
    { v: "43%", l: "degli addetti della provincia lavora nella manifattura", s: "qn43", y: "2025" },
    { v: "22.000 t", l: "di stracci e scarti tessili riciclati ogni anno", s: "cc" },
    { v: "100 mln m", l: "di tessuto cardato l'anno, da 35-40 mila t di filato", s: "qf" },
    { v: "80", l: "aziende di filati, con 2.000 addetti e 670 mln € di fatturato", s: "mf", y: "2023" },
    { v: "5,8 mln t", l: "di vestiti buttati ogni anno in Ue, 11 kg a persona", s: "qnr" },
  ],
  steps: [
    { t: "Fibra", d: "Lana vergine, cotone, sintetiche o lana rigenerata da capi e scarti. È la scelta che decide l'impatto di tutto il resto." },
    { t: "Filato", d: "Le fibre diventano filo. Il cardato usa fibre corte e rigenerate, il pettinato fibre lunghe per filati più fini." },
    { t: "Tessuto", d: "Il telaio incrocia ordito e trama. L'armatura (taffettà, saia, raso) dà aspetto e mano al tessuto." },
    { t: "Nobilitazione", d: "Tintura, follatura, lavaggi e finissaggi trasformano il tessuto grezzo in prodotto finito, entro i limiti REACH." },
    { t: "Confezione", d: "Modellistica, taglio, cucitura e controllo qualità. A Prato spesso è vicina a tessitura e finissaggio." },
    { t: "Distribuzione", d: "Logistica, negozi e online. Con il passaporto digitale dei prodotti ogni capo dovrà dichiarare composizione e tracciabilità." },
  ],
  variazioni: [
    { l: "Export di macchine", p: "1° semestre 2026", v: -25.2, s: "naz26" },
    { l: "Addetti all'abbigliamento", p: "1° trim. 2026", v: -5.2, s: "naz26" },
    { l: "Export di filati e tessuti", p: "1° semestre 2026", v: -4.4, s: "naz26" },
    { l: "Addetti del sistema moda", p: "1° trim. 2026", v: -4.0, s: "naz26" },
    { l: "Produzione manifatturiera", p: "2° trim. 2025", v: -2.9, s: "qn43" },
    { l: "Produzione tessile", p: "2° trim. 2025", v: -2.5, s: "qn43" },
    { l: "Addetti totali in provincia", p: "1° trim. 2026", v: -1.1, s: "naz26" },
    { l: "Export di abbigliamento", p: "1° semestre 2026", v: 2.7, s: "naz26" },
  ],
  aziende: [
    { n: "Lanificio Mario Bellucci", c: "Tessitura", m: "Prato", d: "Tessuti di lana per abbigliamento e arredamento" },
    { n: "Pecci Filati", c: "Filatura", m: "Prato", d: "Filati di lana e cotone riciclati e rigenerati" },
    { n: "Filati Biagioli Modesto", c: "Filatura", m: "Prato", d: "Lana merino e superfine per maglieria" },
    { n: "Marini Industrie", c: "Tessitura", m: "Prato", d: "Tessuti in cotone e fibre rigenerate" },
    { n: "Tintoria Cometa", c: "Tintoria", m: "Prato", d: "Tintoria e nobilitazione di filati" },
    { n: "Jersey Mode", c: "Tintoria", m: "Prato", d: "Nobilitazione di jersey e maglieria" },
    { n: "Gruppo Bisentino", c: "Filatura", m: "Prato", d: "Filatura e tessitura integrate" },
    { n: "Ritorcitura Grazia", c: "Tessitura", m: "Prato", d: "Ritorcitura di cotone e sintetico" },
    { n: "Woven Color", c: "Tessitura", m: "Prato", d: "Tessuti tecnici per arredamento e contract" },
    { n: "Tergotex", c: "Finissaggio", m: "Prato", d: "Tintura, finissaggio e lavaggio dei tessuti" },
    { n: "Unitech Textile Machinery", c: "Macchine", m: "Montemurlo", d: "Macchine tessili e automazione" },
    { n: "Gruppo Colle", c: "Filatura", m: "Cantagallo", d: "Filatura e lanificio, lana vergine e rigenerata" },
    { n: "Filati Omega", c: "Filatura", m: "Prato", d: "Cotone e fibre riciclate per maglieria" },
    { n: "Tessitura Innocenti e Nesi", c: "Tessitura", m: "Poggio a Caiano", d: "Tessuti di lana e cotone" },
    { n: "Didip", c: "Consorzio", m: "Prato", d: "Piattaforma digitale consortile di 31 imprese", s: "didip" },
    { n: "Filatura Valfilo", c: "Filatura", m: "Vaiano", d: "Filati di cotone e lana ritorti" },
    { n: "Lanificio dell'Olivo", c: "Filatura", m: "Prato", d: "Filati di lana vergine e rigenerata" },
    { n: "Tintoria Alessandrini", c: "Tintoria", m: "Prato", d: "Nobilitazione di filati" },
    { n: "Tintoria Fiordiluce", c: "Tintoria", m: "Prato", d: "Nobilitazione di filati e tessuti" },
    { n: "Progetto Lana", c: "Filatura", m: "Prato", d: "Lana vergine e rigenerata, fibre naturali" },
    { n: "Rifinizione Alan", c: "Finissaggio", m: "Prato", d: "Sanforizzazione, calandratura, vaporatura" },
    { n: "Tintoria Martelli", c: "Tintoria", m: "Prato", d: "Tintoria di filati e tessuti" },
    { n: "Lane di Prato", c: "Filatura", m: "Prato", d: "Filatura e cardatura di lana vergine e rigenerata" },
    { n: "Manifattura del Prato", c: "Tessitura", m: "Prato", d: "Tessuti stampati e tinti in filo" },
  ],
};

// 12 synthetic companies — invented names for dashboard testing (DRAFT/UNCLAIMED).
// Derived from the PratoHub test fixture (companies table) + mapping to categories/cities.
export const TEST_AZIERE: Azienda[] = [
  { n: "Aurora Tessuti S.r.l.", c: "Tessitura", m: "Montemurlo", d: "Industria tessile. Produzione di filamenti di settore tessile per tessitura operata." },
  { n: "Borea Wool S.r.l.", c: "Filatura", m: "Prato", d: "Lana di pascolo. Preparazione e trasformazione del lana tessile." },
  { n: "Cina Color S.r.l.", c: "Tintoria", m: "Prato", d: "Tintura e colorazione tessuti naturali e sintetici." },
  { n: "Cimenta Prato S.r.l.", c: "Filatura", m: "Prato", d: "Preparazione alla tessitura. Orditura di filati tessili." },
  { n: "Controluce S.p.A.", c: "Finissaggio", m: "Prato", d: "Laboratorio di controllo qualità del tessuto finito." },
  { n: "Emanuele Tessuti S.r.l.", c: "Tessitura", m: "Prato", d: "Produzione di tessuti operati per settore moda e casa." },
  { n: "Finestra Tessuti S.r.l.", c: "Tessitura", m: "Prato", d: "Tessitura di tessuti operati su misura per tessitura industriale." },
  { n: "Garzatura Uno S.r.l.", c: "Macchine", m: "Prato", d: "Impianti di garzatura tessile per tessitura e rifinizione." },
  { n: "Ichnusa Lavoro S.r.l.", c: "Finissaggio", m: "Prato", d: "Smacchinatura di pannelli tessili per rifinitura." },
  { n: "Lagna Tessuti S.r.l.", c: "Filatura", m: "Cantagallo", d: "Taglio industriale di tessuti per settore moda." },
  { n: "Recupero Tessile S.r.l.", c: "Filatura", m: "Prato", d: "Cernita di materiali tessili post-consumo e selezione del recupero." },
  { n: "Servizio Tessile S.r.l.", c: "Consorzio", m: "Prato", d: "Gestione di filiera produttiva tessile esternalizzata per aziende del distretto." },
];

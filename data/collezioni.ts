// ---------------------------------------------------------------------------
// Fornitori – catalogo centralizzato
// ---------------------------------------------------------------------------
export interface Fornitore {
  id: string;
  nome: string;
  logo?: string;          // percorso logo in /public – se assente si mostra iniziale
  website: string;        // homepage di default
}

export const fornitori: Record<string, Fornitore> = {
  // --- Pavimenti & Rivestimenti ---
  porcelanosa:    { id: "porcelanosa",    nome: "Porcellanosa",        logo: "/img/marchi/porcelanosa.png",    website: "https://www.porcelanosa.com/" },
  gardenia:       { id: "gardenia",       nome: "Gardenia",                                                    website: "https://www.gardenia.it/" },
  cerdomus:       { id: "cerdomus",       nome: "Cerdomus",                                                    website: "https://www.cerdomus.com/" },
  versace:        { id: "versace",        nome: "Versace Tiles",       logo: "/img/marchi/versace.png",        website: "https://www.versace-tiles.com/" },
  abk:            { id: "abk",            nome: "ABK",                                                         website: "https://www.abk.it/" },
  bardelli:       { id: "bardelli",       nome: "Bardelli",            logo: "/img/marchi/bardelli.png",       website: "https://www.bardelli.it/" },
  casalgrande:    { id: "casalgrande",    nome: "Casalgrande Padana",  logo: "/img/marchi/casalgrande.png",    website: "https://www.casalgrandepadana.it/" },
  ariana:         { id: "ariana",         nome: "Ariana",                                                      website: "https://www.ariana.it/" },
  francescodemaio:{ id: "francescodemaio",nome: "Francesco De Maio",                                           website: "https://www.francescodemaio.it/" },
  sintesi:        { id: "sintesi",        nome: "Sintesi",                                                     website: "https://www.gresmalt.it/" },
  rex:            { id: "rex",            nome: "Rex",                 logo: "/img/marchi/rex.png",            website: "https://www.rex.it/" },
  fap:            { id: "fap",            nome: "FAP Ceramiche",       logo: "/img/marchi/fap.png",            website: "https://www.fapceramiche.com/" },
  floorgres:      { id: "floorgres",      nome: "Floorgres",           logo: "/img/marchi/floorgres.png",      website: "https://www.floorgres.it/" },
  panaria:        { id: "panaria",        nome: "Panaria",             logo: "/img/marchi/panaria.png",        website: "https://www.panaria.it/" },
  appiani:        { id: "appiani",        nome: "Appiani",             logo: "/img/marchi/appiani.png",        website: "https://www.appiani.it/" },

  // --- Sanitari ---
  dolomite:       { id: "dolomite",       nome: "Ceramica Dolomite",   logo: "/img/marchi/dolomite.png",       website: "https://www.ceramicadolomite.it/" },
  idealstandard:  { id: "idealstandard",  nome: "Ideal Standard",      logo: "/img/marchi/idealstandard.png",  website: "https://www.idealstandard.it/" },
  devondevon:     { id: "devondevon",     nome: "Devon & Devon",       logo: "/img/marchi/devondevon.png",     website: "https://www.devon-devon.com/" },
  globo:          { id: "globo",          nome: "Ceramica Globo",      logo: "/img/marchi/globo.png",          website: "https://www.ceramicaglobo.com/" },
  gessi:          { id: "gessi",          nome: "Gessi",               logo: "/img/marchi/gessi.png",          website: "https://www.gessi.com/" },
  villeroyeboch:  { id: "villeroyeboch",  nome: "Villeroy & Boch",     logo: "/img/marchi/villeroyeboch.png",  website: "https://www.villeroy-boch.it/" },
  gsi:            { id: "gsi",            nome: "GSI Sanitari",                                                website: "https://www.gsisanitari.it/" },
  pontegiulio:    { id: "pontegiulio",    nome: "Ponte Giulio",                                                website: "https://www.pontegiulio.it/" },
  scarabeo:       { id: "scarabeo",       nome: "Scarabeo",            logo: "/img/marchi/scarabeo.png",       website: "https://www.scarabeosrl.com/" },
  catalano:       { id: "catalano",       nome: "Catalano",            logo: "/img/marchi/catalano.png",       website: "https://www.catalano.it/" },
  laufen:         { id: "laufen",         nome: "Laufen",              logo: "/img/marchi/laufen.png",         website: "https://www.laufen.com/" },

  // --- Vasche & Docce ---
  titan:          { id: "titan",          nome: "Titan",               logo: "/img/marchi/titan.png",          website: "https://www.titan.it/" },
  jacuzzi:        { id: "jacuzzi",        nome: "Jacuzzi",             logo: "/img/marchi/jacuzzi.png",        website: "https://www.jacuzzi.it/" },
  novellini:      { id: "novellini",      nome: "Novellini",           logo: "/img/marchi/novellini.png",      website: "https://www.novellini.it/" },
  megius:         { id: "megius",         nome: "Megius",                                                      website: "https://www.megius.com/" },

  // --- Rubinetterie ---
  zucchetti:      { id: "zucchetti",      nome: "Zucchetti",           logo: "/img/marchi/zucchetti.png",      website: "https://www.zucchettidesign.it/" },
  paini:          { id: "paini",          nome: "Paini",               logo: "/img/marchi/paini.png",          website: "https://www.paini.com/" },
  fantini:        { id: "fantini",        nome: "Fantini",             logo: "/img/marchi/fantini.png",        website: "https://www.fantini.it/" },

  // --- Arredo Bagno ---
  arbi:           { id: "arbi",           nome: "Arbi",                                                       website: "https://www.arbiarredobagno.it/" },
  inda:           { id: "inda",           nome: "Inda",                                                       website: "https://www.inda.net/" },
  xilon:          { id: "xilon",          nome: "Xilon",                                                      website: "https://www.xilon.it/" },
  milldue:        { id: "milldue",        nome: "Milldue",                                                    website: "https://www.milldue.it/" },

  // --- Accessori ---
  colombo:        { id: "colombo",        nome: "Colombo Design",      logo: "/img/marchi/colombo.png",        website: "https://www.colombodesign.com/" },
  lineabeta:      { id: "lineabeta",      nome: "Lineabeta",                                                   website: "https://www.lineabeta.com/" },

  // --- Mosaici ---
  sicis:          { id: "sicis",          nome: "SICIS",               logo: "/img/marchi/sicis.png",          website: "https://www.sicis.com/" },
  petraantiqua:   { id: "petraantiqua",   nome: "Petra Antiqua",                                               website: "https://www.petraantiqua.com/" },

  // --- Pietre ---
  biopietra:      { id: "biopietra",      nome: "Biopietra",                                                   website: "https://www.biopietra.com/" },
  anticcolonial:  { id: "anticcolonial",  nome: "Antic Colonial",                                              website: "https://www.anticcolonial.com/" },

  // --- Parquet ---
  itlas:          { id: "itlas",          nome: "Itlas",               logo: "/img/marchi/itlas.png",          website: "https://www.itlas.it/" },
  alloc:          { id: "alloc",          nome: "Alloc",               logo: "/img/marchi/alloc.png",          website: "https://www.alloc.com/" },
  laborlegno:     { id: "laborlegno",     nome: "Labor Legno",         logo: "/img/marchi/laborlegno.png",     website: "https://www.laborlegno.it/" },

  // --- Camini & Stufe ---
  palazzetti:     { id: "palazzetti",     nome: "Palazzetti",          logo: "/img/marchi/palazzetti.png",     website: "https://www.palazzetti.it/" },
  nordica:        { id: "nordica",        nome: "La Nordica Extraflame", logo: "/img/marchi/nordica.png",      website: "https://www.lanordica-extraflame.com/" },
  royal:          { id: "royal",          nome: "Royal",                                                       website: "https://www.royal1915.it/" },
  thun:           { id: "thun",           nome: "Stufe Originali Thun",                                        website: "https://www.stufeoriginalithun.it/" },

  // --- Collanti / Pitture ---
  kerakoll:       { id: "kerakoll",       nome: "Kerakoll",                                                    website: "https://www.kerakoll.com/" },
  terragena:      { id: "terragena",      nome: "Terragena",                                                   website: "https://www.terragena.eu/" },
  mapei:          { id: "mapei",          nome: "Mapei",               logo: "/img/marchi/mapei.png",          website: "https://www.mapei.com/" },

  // --- Saune ---
  effegibi:       { id: "effegibi",       nome: "Effegibi",            logo: "/img/marchi/effegibi.png",       website: "https://www.effegibi.it/" },

  // --- Termoarredo ---
  tubes:          { id: "tubes",          nome: "Tubes Radiatori",     logo: "/img/marchi/tubes.png",          website: "https://www.tubesradiatori.com/" },
};

// ---------------------------------------------------------------------------
// Associazione categoria → fornitori
// Ogni entry può avere un `url` opzionale che sovrascrive il website di default
// per puntare alla sezione specifica del sito del fornitore.
// ---------------------------------------------------------------------------
export interface CollezioneFornitoreRef {
  id: string;     // chiave in `fornitori`
  url?: string;   // URL specifico per questa categoria (opzionale)
}

export interface Collezione {
  id: string;
  nome: string;
  immagine: string;
  /** Testo alternativo SEO per l’immagine della card (se assente si usa `nome`). */
  immagineAlt?: string;
  fornitori: CollezioneFornitoreRef[];
}

export const collezioni: Collezione[] = [
  {
    id: "pavimenti",
    nome: "Pavimenti & Rivestimenti",
    immagine: "/img/wrapper/2.jpg",
    fornitori: [
      { id: "porcelanosa" },
      { id: "gardenia" },
      { id: "cerdomus" },
      { id: "versace" },
      { id: "abk" },
      { id: "bardelli" },
      { id: "casalgrande" },
      { id: "ariana" },
      { id: "francescodemaio" },
      { id: "sintesi" },
      { id: "rex" },
      { id: "fap" },
      { id: "floorgres" },
      { id: "panaria" },
      { id: "appiani" },
    ],
  },
  {
    id: "sanitari",
    nome: "Sanitari",
    immagine: "/img/collezioni/bg/sanitari.jpg",
    fornitori: [
      { id: "dolomite" },
      { id: "idealstandard" },
      { id: "devondevon" },
      { id: "globo" },
      { id: "gessi" },
      { id: "villeroyeboch" },
      { id: "gsi" },
      { id: "pontegiulio" },
      { id: "scarabeo" },
      { id: "catalano" },
      { id: "laufen" },
    ],
  },
  {
    id: "arredobagno",
    nome: "Arredo Bagno",
    immagine: "/img/wrapper/9.jpg",
    fornitori: [
      { id: "devondevon" },
      { id: "arbi" },
      { id: "inda" },
      { id: "xilon" },
      { id: "milldue" },
    ],
  },
  {
    id: "rubinetterie",
    nome: "Rubinetterie",
    immagine: "/img/wrapper/14.jpg",
    fornitori: [
      { id: "gessi" },
      { id: "zucchetti" },
      { id: "paini" },
      { id: "idealstandard" },
      { id: "fantini" },
    ],
  },
  {
    id: "vasche",
    nome: "Vasche & Docce",
    immagine: "/img/wrapper/6.jpg",
    fornitori: [
      { id: "devondevon" },
      { id: "titan" },
      { id: "villeroyeboch" },
      { id: "idealstandard" },
      { id: "jacuzzi" },
      { id: "novellini" },
      { id: "megius" },
    ],
  },
  {
    id: "mosaici",
    nome: "Mosaici",
    immagine: "/img/wrapper/23.jpg",
    fornitori: [
      { id: "sicis" },
      { id: "petraantiqua" },
      { id: "appiani" },
    ],
  },
  {
    id: "camini",
    nome: "Camini & Stufe",
    immagine: "/img/wrapper/22.jpg",
    fornitori: [
      { id: "palazzetti" },
      { id: "nordica" },
      { id: "royal" },
      { id: "thun" },
    ],
  },
  {
    id: "parquet",
    nome: "Parquet & Laminati",
    immagine: "/img/wrapper/13.jpg",
    fornitori: [
      { id: "itlas" },
      { id: "alloc" },
      { id: "laborlegno" },
    ],
  },
  {
    id: "pietre",
    nome: "Pietre Naturali",
    immagine: "/img/wrapper/15.jpg",
    fornitori: [
      { id: "biopietra" },
      { id: "anticcolonial" },
    ],
  },
  {
    id: "accessori",
    nome: "Accessori Bagno",
    immagine: "/img/wrapper/12.jpg",
    fornitori: [
      { id: "gessi" },
      { id: "inda" },
      { id: "colombo" },
      { id: "lineabeta" },
    ],
  },
  {
    id: "saune",
    nome: "Saune & Idromassaggio",
    immagine: "/img/collezioni/bg/saune.jpg",
    fornitori: [
      { id: "effegibi" },
      { id: "jacuzzi" },
    ],
  },
  {
    id: "termoarredo",
    nome: "Termoarredo",
    immagine: "/img/collezioni/bg/termoarredo.jpg",
    fornitori: [
      { id: "tubes" },
    ],
  },
];

// ---------------------------------------------------------------------------
// Marchi (usato nel marquee / griglia)
// ---------------------------------------------------------------------------
export const marchi = [
  { nome: "Porcellanosa", logo: "/img/marchi/porcelanosa.png" },
  { nome: "Jacuzzi", logo: "/img/marchi/jacuzzi.png" },
  { nome: "Devon & Devon", logo: "/img/marchi/devondevon.png" },
  { nome: "Villeroy & Boch", logo: "/img/marchi/villeroyeboch.png" },
  { nome: "SICIS", logo: "/img/marchi/sicis.png" },
  { nome: "Ideal Standard", logo: "/img/marchi/idealstandard.png" },
  { nome: "Gessi", logo: "/img/marchi/gessi.png" },
  { nome: "Dolomite", logo: "/img/marchi/dolomite.png" },
  { nome: "Bardelli", logo: "/img/marchi/bardelli.png" },
  { nome: "Appiani", logo: "/img/marchi/appiani.png" },
  { nome: "Itlas", logo: "/img/marchi/itlas.png" },
  { nome: "Labor Legno", logo: "/img/marchi/laborlegno.png" },
  { nome: "Mapei", logo: "/img/marchi/mapei.png" },
  { nome: "Fantini", logo: "/img/marchi/fantini.png" },
  { nome: "Zucchetti", logo: "/img/marchi/zucchetti.png" },
  { nome: "Laufen", logo: "/img/marchi/laufen.png" },
  { nome: "Catalano", logo: "/img/marchi/catalano.png" },
  { nome: "Versace Tiles", logo: "/img/marchi/versace.png" },
  { nome: "Rex", logo: "/img/marchi/rex.png" },
  { nome: "Effegibi", logo: "/img/marchi/effegibi.png" },
  { nome: "Tubes", logo: "/img/marchi/tubes.png" },
  { nome: "Palazzetti", logo: "/img/marchi/palazzetti.png" },
  { nome: "Novellini", logo: "/img/marchi/novellini.png" },
  { nome: "Titan", logo: "/img/marchi/titan.png" },
];

// ---------------------------------------------------------------------------
// Showroom & Hero
// ---------------------------------------------------------------------------
export const showroomImages = [
  { src: "/img/showroom/scutti_showroom_1.jpg", alt: "Showroom pavimenti e arredo bagno Scutti — Villa Santa Maria, Chieti", span: "col-span-2 row-span-2" },
  { src: "/img/showroom/scutti_showroom_2.jpg", alt: "Esposizione ceramiche e rivestimenti Scutti Abruzzo", span: "" },
  { src: "/img/showroom/scutti_showroom_3.jpg", alt: "Sanitari e rubinetterie in esposizione — showroom Scutti Chieti", span: "" },
  { src: "/img/showroom/scutti_showroom_4.jpg", alt: "Arredo bagno marchi internazionali — Scutti Villa Santa Maria", span: "" },
  { src: "/img/showroom/scutti_showroom_5.jpg", alt: "Pavimenti parquet e laminati in esposizione Scutti Abruzzo", span: "" },
  { src: "/img/showroom/scutti_showroom_6.jpg", alt: "Showroom camini e stufe Scutti — provincia di Chieti", span: "" },
];

/** Slide hero: modifica `alt`, `titolo` e `sottotitolo` qui per ogni immagine. */
export const heroImages: { src: string; alt: string; titolo: [string, string]; sottotitolo: string }[] = [
  {
    src: "/img/wrapper/8.jpg",
    alt: "Ambientazione pavimenti e rivestimenti in showroom Scutti — Villa Santa Maria, Chieti",
    titolo: ["Il tuo progetto", "inizia qui"],
    sottotitolo: "Dall’idea alla posa, ti accompagniamo in ogni scelta.",
  },
  {
    src: "/img/wrapper/3.jpg",
    alt: "Dettaglio ceramiche e superfici esposte — showroom Scutti Abruzzo",
    titolo: ["Ogni superficie", "racconta una storia"],
    sottotitolo: "Ceramiche e rivestimenti che trasformano uno spazio in un’emozione.",
  },
  {
    src: "/img/wrapper/15.jpg",
    alt: "Pietre naturali e rivestimenti in esposizione — Scutti Chieti",
    titolo: ["La materia", "nella sua forma più pura"],
    sottotitolo: "Pietre naturali che portano calore e carattere in ogni ambiente.",
  },
  {
    src: "/img/wrapper/6.jpg",
    alt: "Vasche & docce e arredo bagno in showroom — Scutti",
    titolo: ["Il bagno", "che hai sempre desiderato"],
    sottotitolo: "Vasche, docce e arredo bagno dei migliori marchi internazionali.",
  },
  {
    src: "/img/wrapper/7.jpg",
    alt: "Ambientazione bagno e finiture — Scutti Villa Santa Maria",
    titolo: ["I dettagli", "fanno la differenza"],
    sottotitolo: "Finiture, rubinetterie e accessori scelti con cura da oltre 50 anni.",
  },
  {
    src: "/img/wrapper/21.jpg",
    alt: "Esposizione materiali e design d’interni — showroom Scutti",
    titolo: ["Tutto questo", "sotto un solo tetto"],
    sottotitolo: "Uno showroom completo a Villa Santa Maria, cuore dell’Abruzzo.",
  },
];

/** Ulteriori foto showroom (seconda riga sotto la griglia principale). */
export const showroomExtraImages: { src: string; alt: string }[] = [
  {
    src: "/img/showroom/scutti_showroom_7.jpg",
    alt: "Dettaglio esposizione materiali e consulenza — showroom Scutti Chieti",
  },
  {
    src: "/img/showroom/scutti_showroom_8.jpg",
    alt: "Ambienti bagno e living in esposizione — Scutti Abruzzo",
  },
];

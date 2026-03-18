export const collezioni = [
  {
    id: "pavimenti",
    nome: "Pavimenti & Rivestimenti",
    immagine: "/img/wrapper/2.jpg",
  },
  {
    id: "sanitari",
    nome: "Sanitari",
    immagine: "/img/wrapper/24.jpg",
  },
  {
    id: "arredobagno",
    nome: "Arredo Bagno",
    immagine: "/img/wrapper/9.jpg",
  },
  {
    id: "rubinetterie",
    nome: "Rubinetterie",
    immagine: "/img/wrapper/14.jpg",
  },
  {
    id: "vasche",
    nome: "Vasche & Docce",
    immagine: "/img/wrapper/6.jpg",
  },
  {
    id: "mosaici",
    nome: "Mosaici",
    immagine: "/img/wrapper/23.jpg",
  },
  {
    id: "camini",
    nome: "Camini & Stufe",
    immagine: "/img/wrapper/22.jpg",
  },
  {
    id: "parquet",
    nome: "Parquet & Laminati",
    immagine: "/img/wrapper/13.jpg",
  },
  {
    id: "pietre",
    nome: "Pietre Naturali",
    immagine: "/img/wrapper/15.jpg",
  },
  {
    id: "accessori",
    nome: "Accessori Bagno",
    immagine: "/img/wrapper/12.jpg",
  },
  {
    id: "saune",
    nome: "Saune & Idromassaggio",
    immagine: "/img/collezioni/bg/saune.jpg",
  },
  {
    id: "termoarredo",
    nome: "Termoarredo",
    immagine: "/img/collezioni/bg/termoarredo.jpg",
  },
];

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

export const showroomImages = [
  {
    src: "/img/showroom/scutti_showroom_1.jpg",
    alt: "Showroom Scutti",
    span: "col-span-2 row-span-2",
  },
  {
    src: "/img/showroom/scutti_showroom_2.jpg",
    alt: "Showroom Scutti",
    span: "",
  },
  {
    src: "/img/showroom/scutti_showroom_3.jpg",
    alt: "Showroom Scutti",
    span: "",
  },
  {
    src: "/img/showroom/scutti_showroom_4.jpg",
    alt: "Showroom Scutti",
    span: "",
  },
  {
    src: "/img/showroom/scutti_showroom_5.jpg",
    alt: "Showroom Scutti",
    span: "",
  },
  {
    src: "/img/showroom/scutti_showroom_6.jpg",
    alt: "Showroom Scutti",
    span: "",
  },
];

// Tutte le 25 foto del wrapper per l'hero slideshow
export const heroImages = Array.from(
  { length: 25 },
  (_, i) => `/img/wrapper/${i + 1}.jpg`
);

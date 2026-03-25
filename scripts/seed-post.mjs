import { createClient } from "@sanity/client";
import { readFileSync } from "fs";

// Leggi .env.local manualmente
const envFile = readFileSync(".env.local", "utf-8");
const env = Object.fromEntries(
  envFile.split("\n").filter(l => l.includes("=") && !l.startsWith("#")).map(l => {
    const [k, ...v] = l.split("=");
    return [k.trim(), v.join("=").trim().replace(/^["']|["']$/g, "")];
  })
);

const client = createClient({
  projectId: env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: "2026-03-25",
  token: env.SANITY_WRITE_TOKEN,
  useCdn: false,
});

const post = {
  _type: "post",
  title: "Come scegliere il pavimento perfetto per la tua casa: guida completa",
  slug: { _type: "slug", current: "come-scegliere-pavimento-perfetto-casa" },
  excerpt:
    "Gres porcellanato, parquet o pietra naturale? Scopri i pro e i contro di ogni materiale, i criteri di scelta stanza per stanza e i consigli dei nostri esperti per un risultato che dura nel tempo.",
  publishedAt: new Date().toISOString(),
  body: [
    // Introduzione
    {
      _type: "block",
      _key: "intro1",
      style: "normal",
      children: [
        {
          _type: "span",
          _key: "intro1s",
          text: "Il pavimento è uno degli elementi più importanti dell'interior design: definisce il carattere di ogni ambiente, influenza la percezione dello spazio e accompagna la vita quotidiana per decenni. Scegliere quello giusto non è solo una questione estetica, ma un investimento che richiede attenzione a materiali, prestazioni e stile di vita.",
          marks: [],
        },
      ],
    },
    {
      _type: "block",
      _key: "intro2",
      style: "normal",
      children: [
        {
          _type: "span",
          _key: "intro2s",
          text: "In questa guida analizziamo i materiali più diffusi, i criteri tecnici da valutare e i consigli pratici che condividiamo ogni giorno con i clienti del nostro showroom.",
          marks: [],
        },
      ],
    },

    // Sezione 1
    {
      _type: "block",
      _key: "h2_1",
      style: "h2",
      children: [
        {
          _type: "span",
          _key: "h2_1s",
          text: "Gres porcellanato: versatilità senza compromessi",
          marks: [],
        },
      ],
    },
    {
      _type: "block",
      _key: "gres1",
      style: "normal",
      children: [
        {
          _type: "span",
          _key: "gres1s",
          text: "Il gres porcellanato è il materiale più richiesto nelle ristrutturazioni moderne, e non a caso. Resistente all'usura, impermeabile, facile da pulire e disponibile in una gamma praticamente infinita di finiture — dall'effetto legno all'effetto marmo, dal cemento alla pietra.",
          marks: [],
        },
      ],
    },
    {
      _type: "block",
      _key: "gres2",
      style: "normal",
      children: [
        {
          _type: "span",
          _key: "gres2a",
          text: "I formati grandi (60×120, 80×80 e oltre) donano continuità visiva e ampliano otticamente gli ambienti. ",
          marks: [],
        },
        {
          _type: "span",
          _key: "gres2b",
          text: "Il nostro consiglio:",
          marks: ["strong"],
        },
        {
          _type: "span",
          _key: "gres2c",
          text: " per le zone giorno e i bagni, il gres è quasi sempre la scelta più equilibrata tra estetica, prestazione e budget.",
          marks: [],
        },
      ],
    },
    {
      _type: "block",
      _key: "gres3",
      style: "normal",
      children: [
        {
          _type: "span",
          _key: "gres3s",
          text: "Nel nostro showroom proponiamo le collezioni di brand come Porcellanosa, Rex e FAP Ceramiche, che si distinguono per qualità delle texture e coerenza cromatica tra i diversi formati.",
          marks: [],
        },
      ],
    },

    // Sezione 2
    {
      _type: "block",
      _key: "h2_2",
      style: "h2",
      children: [
        {
          _type: "span",
          _key: "h2_2s",
          text: "Parquet: il calore del legno autentico",
          marks: [],
        },
      ],
    },
    {
      _type: "block",
      _key: "parquet1",
      style: "normal",
      children: [
        {
          _type: "span",
          _key: "parquet1s",
          text: "Nessun materiale regala la stessa sensazione di comfort del legno sotto i piedi. Il parquet prefinito — con uno strato nobile in legno massello su supporto multistrato — offre stabilità dimensionale e tempi di posa ridotti rispetto al massello tradizionale.",
          marks: [],
        },
      ],
    },
    {
      _type: "block",
      _key: "parquet2",
      style: "normal",
      children: [
        {
          _type: "span",
          _key: "parquet2s",
          text: "Le essenze più amate? Il rovere nelle sue declinazioni — naturale, spazzolato, affumicato — domina il mercato per la sua durabilità e neutralità cromatica. Per chi cerca qualcosa di più caratteristico, il noce e il teak offrono toni caldi e profondi.",
          marks: [],
        },
      ],
    },
    {
      _type: "block",
      _key: "parquet3",
      style: "normal",
      children: [
        {
          _type: "span",
          _key: "parquet3a",
          text: "Attenzione: ",
          marks: ["strong"],
        },
        {
          _type: "span",
          _key: "parquet3b",
          text: "il parquet richiede una manutenzione periodica (oliatura o verniciatura) e non è indicato per ambienti molto umidi come il bagno. Per camere da letto e zone living, invece, è imbattibile.",
          marks: [],
        },
      ],
    },
    {
      _type: "block",
      _key: "parquet4",
      style: "normal",
      children: [
        {
          _type: "span",
          _key: "parquet4s",
          text: "Tra i nostri partner, Itlas e Labor Legno rappresentano l'eccellenza italiana del parquet, con filiere controllate e finiture artigianali.",
          marks: [],
        },
      ],
    },

    // Sezione 3
    {
      _type: "block",
      _key: "h2_3",
      style: "h2",
      children: [
        {
          _type: "span",
          _key: "h2_3s",
          text: "Pietra naturale e mosaico: per chi non vuole passare inosservato",
          marks: [],
        },
      ],
    },
    {
      _type: "block",
      _key: "pietra1",
      style: "normal",
      children: [
        {
          _type: "span",
          _key: "pietra1s",
          text: "Marmo, travertino, ardesia: la pietra naturale porta in casa un pezzo di natura, con venature e variazioni uniche che nessuna replica industriale può eguagliare. È la scelta d'elezione per ingressi, bagni padronali e ambienti di rappresentanza.",
          marks: [],
        },
      ],
    },
    {
      _type: "block",
      _key: "pietra2",
      style: "normal",
      children: [
        {
          _type: "span",
          _key: "pietra2s",
          text: "Il mosaico — in vetro, marmo o ceramica — aggiunge un livello di personalizzazione estremo. Un rivestimento a mosaico in un bagno può trasformare una stanza funzionale in un piccolo capolavoro. SICIS e Appiani, presenti nel nostro catalogo, sono tra i riferimenti mondiali del settore.",
          marks: [],
        },
      ],
    },
    {
      _type: "block",
      _key: "pietra3",
      style: "blockquote",
      children: [
        {
          _type: "span",
          _key: "pietra3s",
          text: "\"Un pavimento non si cambia ogni anno. Scegliete con la testa, ma lasciatevi guidare anche dall'emozione che un materiale vi trasmette quando lo toccate.\"",
          marks: [],
        },
      ],
    },

    // Sezione 4
    {
      _type: "block",
      _key: "h2_4",
      style: "h2",
      children: [
        {
          _type: "span",
          _key: "h2_4s",
          text: "Come scegliere stanza per stanza",
          marks: [],
        },
      ],
    },
    {
      _type: "block",
      _key: "stanza1",
      style: "normal",
      children: [
        {
          _type: "span",
          _key: "stanza1a",
          text: "Ingresso e corridoi: ",
          marks: ["strong"],
        },
        {
          _type: "span",
          _key: "stanza1b",
          text: "zone ad alto calpestio. Serve un materiale resistente ai graffi e facile da pulire. Il gres porcellanato effetto pietra è la soluzione ideale.",
          marks: [],
        },
      ],
    },
    {
      _type: "block",
      _key: "stanza2",
      style: "normal",
      children: [
        {
          _type: "span",
          _key: "stanza2a",
          text: "Zona giorno: ",
          marks: ["strong"],
        },
        {
          _type: "span",
          _key: "stanza2b",
          text: "qui potete osare. Un grande formato in gres, un parquet a lisca di pesce o una combinazione di materiali diversi tra cucina e soggiorno creano ambienti con personalità.",
          marks: [],
        },
      ],
    },
    {
      _type: "block",
      _key: "stanza3",
      style: "normal",
      children: [
        {
          _type: "span",
          _key: "stanza3a",
          text: "Bagno: ",
          marks: ["strong"],
        },
        {
          _type: "span",
          _key: "stanza3b",
          text: "impermeabilità e antiscivolosità sono requisiti non negoziabili. Il gres porcellanato con finitura strutturata (coefficiente R10 o R11) è lo standard. Per le pareti, il mosaico offre possibilità creative illimitate.",
          marks: [],
        },
      ],
    },
    {
      _type: "block",
      _key: "stanza4",
      style: "normal",
      children: [
        {
          _type: "span",
          _key: "stanza4a",
          text: "Camere da letto: ",
          marks: ["strong"],
        },
        {
          _type: "span",
          _key: "stanza4b",
          text: "il comfort acustico e tattile è prioritario. Il parquet è il re indiscusso, ma anche un gres effetto legno con sistema di riscaldamento a pavimento può regalare un'ottima esperienza.",
          marks: [],
        },
      ],
    },
    {
      _type: "block",
      _key: "stanza5",
      style: "normal",
      children: [
        {
          _type: "span",
          _key: "stanza5a",
          text: "Esterno e terrazze: ",
          marks: ["strong"],
        },
        {
          _type: "span",
          _key: "stanza5b",
          text: "servono piastrelle con resistenza al gelo e coefficiente antiscivolo elevato (R11-R13). Il gres porcellanato da 20mm posato a secco su ghiaia è una soluzione moderna e di facile manutenzione.",
          marks: [],
        },
      ],
    },

    // Sezione 5
    {
      _type: "block",
      _key: "h2_5",
      style: "h2",
      children: [
        {
          _type: "span",
          _key: "h2_5s",
          text: "I 5 errori da evitare",
          marks: [],
        },
      ],
    },
    {
      _type: "block",
      _key: "errore1",
      style: "normal",
      children: [
        {
          _type: "span",
          _key: "errore1a",
          text: "1. Scegliere solo da catalogo. ",
          marks: ["strong"],
        },
        {
          _type: "span",
          _key: "errore1b",
          text: "Le foto non rendono mai giustizia a texture e colore. Venite in showroom, toccate i campioni, vedeteli alla luce naturale.",
          marks: [],
        },
      ],
    },
    {
      _type: "block",
      _key: "errore2",
      style: "normal",
      children: [
        {
          _type: "span",
          _key: "errore2a",
          text: "2. Ignorare la fuga. ",
          marks: ["strong"],
        },
        {
          _type: "span",
          _key: "errore2b",
          text: "Il colore e lo spessore della fuga cambiano radicalmente l'effetto finale. Una fuga minimale dello stesso tono della piastrella crea continuità; una fuga a contrasto diventa un elemento decorativo.",
          marks: [],
        },
      ],
    },
    {
      _type: "block",
      _key: "errore3",
      style: "normal",
      children: [
        {
          _type: "span",
          _key: "errore3a",
          text: "3. Non considerare la manutenzione. ",
          marks: ["strong"],
        },
        {
          _type: "span",
          _key: "errore3b",
          text: "Un pavimento bellissimo che richiede cure impegnative rischia di diventare fonte di frustrazione. Siate onesti con voi stessi su quanto tempo dedicherete alla cura del pavimento.",
          marks: [],
        },
      ],
    },
    {
      _type: "block",
      _key: "errore4",
      style: "normal",
      children: [
        {
          _type: "span",
          _key: "errore4a",
          text: "4. Sottovalutare il sottofondo. ",
          marks: ["strong"],
        },
        {
          _type: "span",
          _key: "errore4b",
          text: "Un sottofondo irregolare o non adeguatamente preparato compromette la posa e la durata del pavimento. È un costo nascosto che può costare caro.",
          marks: [],
        },
      ],
    },
    {
      _type: "block",
      _key: "errore5",
      style: "normal",
      children: [
        {
          _type: "span",
          _key: "errore5a",
          text: "5. Seguire solo le tendenze. ",
          marks: ["strong"],
        },
        {
          _type: "span",
          _key: "errore5b",
          text: "Le mode passano, il pavimento resta. Scegliete qualcosa che vi piacerà anche tra dieci anni. I colori neutri e i materiali classici sono sempre una garanzia.",
          marks: [],
        },
      ],
    },

    // Conclusione
    {
      _type: "block",
      _key: "h2_6",
      style: "h2",
      children: [
        {
          _type: "span",
          _key: "h2_6s",
          text: "Vieni a trovarci in showroom",
          marks: [],
        },
      ],
    },
    {
      _type: "block",
      _key: "concl1",
      style: "normal",
      children: [
        {
          _type: "span",
          _key: "concl1s",
          text: "La scelta del pavimento è un momento importante. Nel nostro showroom di oltre 1.200 m² a Villa Santa Maria puoi vedere, toccare e confrontare centinaia di soluzioni dei migliori brand internazionali. I nostri consulenti ti guideranno nella scelta più adatta al tuo progetto, al tuo stile e al tuo budget.",
          marks: [],
        },
      ],
    },
    {
      _type: "block",
      _key: "concl2",
      style: "normal",
      children: [
        {
          _type: "span",
          _key: "concl2a",
          text: "Contattaci per fissare un appuntamento o passa a trovarci — siamo aperti dal lunedì al venerdì dalle 9:00 alle 19:00 e il sabato mattina.",
          marks: [],
        },
      ],
    },
  ],
};

async function seed() {
  console.log("Creazione post di esempio...");
  const result = await client.create(post);
  console.log(`Post creato con ID: ${result._id}`);
  console.log(`Slug: ${post.slug.current}`);
  console.log("Vai su /studio per visualizzarlo e aggiungere un'immagine di copertina.");
}

seed().catch((err) => {
  console.error("Errore:", err.message);
  process.exit(1);
});

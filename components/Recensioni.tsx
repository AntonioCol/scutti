"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const recensioni = [
  {
    nome: "Marco R.",
    citta: "Lanciano",
    testo:
      "Abbiamo rifatto completamente il bagno. Dalla scelta dei sanitari alla posa, ci hanno seguito in ogni fase. Risultato impeccabile e nei tempi previsti.",
    stelle: 5,
  },
  {
    nome: "Valentina D.",
    citta: "Ortona",
    testo:
      "Showroom incredibile, non pensavo di trovare tutti questi marchi in Abruzzo. Il personale è competente e ci ha consigliato senza pressione. Consigliatissimi.",
    stelle: 5,
  },
  {
    nome: "Giuseppe L.",
    citta: "Vasto",
    testo:
      "Parquet in tutta la casa, posato a regola d'arte. Prezzo competitivo rispetto a preventivi che avevamo chiesto altrove. Torneremo per il bagno.",
    stelle: 5,
  },
  {
    nome: "Anna M.",
    citta: "Chieti",
    testo:
      "Professionalità e disponibilità. Ci hanno aiutato a scegliere i pavimenti per la ristrutturazione completa. Tutto perfetto, dalla consulenza in showroom alla consegna.",
    stelle: 5,
  },
];

export default function Recensioni() {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-xs tracking-[0.3em] uppercase text-primary font-medium mb-4">
            La voce dei nostri clienti
          </p>
          <h2 className="font-script text-5xl md:text-6xl font-normal text-dark">
            <span className="font-script">Recensioni</span>
          </h2>
          <div className="w-12 h-[1px] bg-primary mx-auto mt-6" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {recensioni.map((r, i) => (
            <motion.div
              key={r.nome}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="border border-[#e0dbd3] p-6 flex flex-col"
            >
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: r.stelle }).map((_, j) => (
                  <Star
                    key={j}
                    size={16}
                    className="fill-primary text-primary"
                  />
                ))}
              </div>
              <p className="text-sm text-dark/80 leading-relaxed flex-1">
                &ldquo;{r.testo}&rdquo;
              </p>
              <div className="mt-5 pt-4 border-t border-[#e0dbd3]">
                <p className="text-sm font-medium text-dark">{r.nome}</p>
                <p className="text-xs text-midgray">{r.citta}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const recensioni = [
  {
    nome: "Michele De Laurentiis",
    citta: "",
    testo:
      "Vastissimo assortimento per l'edilizia, io ci vado per il pellet: ha molti buoni marchi, basta scelta anche di stufe.",
    stelle: 5,
  },
  {
    nome: "Luigi Di Nunzio",
    citta: "",
    testo:
      "Personale qualificato, disponibilità immediata, showroom ben fornito e con ottima visibilità, prezzi accessibili e con promozioni in corso. Consigliato.",
    stelle: 5,
  },
  {
    nome: "Giancarlo Simongini",
    citta: "",
    testo:
      "Ottima attività, ben fornita di materiali, personale molto cordiale e disponibile. Consigliata.",
    stelle: 5,
  },
  {
    nome: "Joseph DL",
    citta: "",
    testo:
      "Grande disponibilità di prodotti. Personale gentile. Tempi di attesa nella norma.",
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
          <a
            href="https://www.google.com/maps/place/Scutti+Gilberto+S.r.l./@41.9519,14.3517,17z"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-6 text-sm text-primary hover:underline"
          >
            Vedi tutte le 82 recensioni su Google →
          </a>
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
                {r.citta && <p className="text-xs text-midgray">{r.citta}</p>}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

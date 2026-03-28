"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink, TriangleAlert } from "lucide-react";
import { Button } from "@/components/ui/button";
import { trackFornitoreClick } from "@/lib/analytics";
import { collezioni, fornitori } from "@/data/collezioni";
import type { Collezione } from "@/data/collezioni";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

export default function Collezioni() {
  const [selected, setSelected] = useState<Collezione | null>(null);
  const [exitLink, setExitLink] = useState<{ nome: string; url: string } | null>(null);

  return (
    <section id="collezioni" className="py-24 md:py-32 bg-[#1C1C1C]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-xs tracking-[0.3em] uppercase text-[#EF8C00] font-medium mb-4">
            Pavimenti, arredo bagno, ceramiche e molto altro
          </p>
          <h2 className="font-script text-5xl md:text-6xl font-normal text-white">
            Le <span className="font-script">Collezioni</span>
          </h2>
          <div className="w-12 h-[1px] bg-[#EF8C00] mx-auto mt-6" />
          <p className="text-white/60 mt-6 max-w-xl mx-auto text-sm leading-relaxed">
            12 categorie di prodotto, oltre 60 fornitori. Scegli la collezione che ti interessa
            e <strong className="text-white/80">richiedi un preventivo gratuito</strong> — ti rispondiamo entro 24 ore.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {collezioni.map((cat, i) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.6, delay: (i % 4) * 0.1 }}
              className="group relative aspect-square overflow-hidden cursor-pointer bg-white"
              onClick={() => setSelected(cat)}
            >
              {/* Image */}
              <Image
                src={cat.immagine}
                alt={cat.immagineAlt ?? cat.nome}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/30 group-hover:bg-[#EF8C00]/15 transition-colors duration-500" />
              {/* Label */}
              <div className="absolute inset-0 flex flex-col items-center justify-end p-5">
                <div className="w-6 h-[1px] bg-[#EF8C00] mb-3 transition-all duration-300 group-hover:w-10" />
                <p className="text-white text-sm tracking-[0.15em] uppercase font-medium text-center">
                  {cat.nome}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal fornitori */}
      <Dialog open={!!selected} onOpenChange={(open) => !open && setSelected(null)}>
        <DialogContent className="max-w-2xl">
          {selected && (
            <>
              <DialogHeader>
                <DialogTitle>{selected.nome}</DialogTitle>
                <DialogDescription>
                  I nostri fornitori selezionati per {selected.nome.toLowerCase()}
                </DialogDescription>
              </DialogHeader>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2">
                {selected.fornitori.map((ref) => {
                  const f = fornitori[ref.id];
                  if (!f) return null;
                  const href = ref.url || f.website;

                  return (
                    <button
                      key={f.id}
                      type="button"
                      onClick={() => setExitLink({ nome: f.nome, url: href })}
                      className="group/card flex items-center gap-4 rounded-lg border border-[#e0dbd3] bg-white p-4 transition-all duration-200 hover:border-[#EF8C00]/40 hover:shadow-md text-left cursor-pointer"
                    >
                      {/* Logo o iniziale */}
                      <div className="relative flex-shrink-0 w-16 h-16 rounded-md bg-[#F5F2ED] flex items-center justify-center overflow-hidden">
                        {f.logo ? (
                          <Image
                            src={f.logo}
                            alt={f.nome}
                            width={56}
                            height={56}
                            className="object-contain p-1 grayscale group-hover/card:grayscale-0 transition-all duration-300"
                          />
                        ) : (
                          <span className="text-xl font-bold text-[#6B6B6B] group-hover/card:text-[#EF8C00] transition-colors duration-300">
                            {f.nome.charAt(0)}
                          </span>
                        )}
                      </div>

                      {/* Info */}
                      <div className="flex-1 min-w-0">
                        <p className="font-medium text-[#2B2B2B] text-sm truncate">
                          {f.nome}
                        </p>
                        <p className="text-xs text-[#6B6B6B] mt-0.5 flex items-center gap-1">
                          Visita il sito
                          <ExternalLink className="w-3 h-3 opacity-0 group-hover/card:opacity-100 transition-opacity duration-200" />
                        </p>
                      </div>
                    </button>
                  );
                })}
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      {/* Modal avvertimento uscita sito */}
      <Dialog open={!!exitLink} onOpenChange={(open) => !open && setExitLink(null)}>
        <DialogContent className="max-w-2xl text-center">
          {exitLink && (
            <>
              <div className="flex justify-center mb-2">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <TriangleAlert size={24} className="text-primary" />
                </div>
              </div>
              <DialogHeader className="text-center">
                <DialogTitle className="text-center">Apertura sito esterno</DialogTitle>
                <DialogDescription className="text-center">
                  Verrà aperta una nuova scheda del browser con il sito ufficiale di <span className="font-medium text-dark">{exitLink.nome}</span>. Scutti non è responsabile dei contenuti esterni.
                </DialogDescription>
              </DialogHeader>
              <div className="flex flex-col gap-3 mt-4">
                <Button variant="dark" asChild>
                  <a
                    href={exitLink.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => { trackFornitoreClick(exitLink.nome, "collezioni"); setExitLink(null); }}
                  >
                    <ExternalLink size={16} />
                    Vai al sito di {exitLink.nome}
                  </a>
                </Button>
                <Button variant="outline" onClick={() => setExitLink(null)}>
                  Resta su Scutti
                </Button>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}

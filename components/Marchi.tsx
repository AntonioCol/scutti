"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink, TriangleAlert } from "lucide-react";
import { Button } from "@/components/ui/button";
import { trackFornitoreClick } from "@/lib/analytics";
import { marchi, fornitori } from "@/data/collezioni";
import type { Fornitore } from "@/data/collezioni";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

// Lookup: trova il fornitore corrispondente al marchio tramite logo o nome
function findFornitore(brand: { nome: string; logo: string }): Fornitore | null {
  for (const f of Object.values(fornitori)) {
    if (f.logo === brand.logo || f.nome === brand.nome) return f;
  }
  return null;
}

export default function Marchi() {
  const doubled = [...marchi, ...marchi];
  const [selected, setSelected] = useState<Fornitore | null>(null);

  return (
    <section id="marchi" className="py-24 md:py-32 bg-[#F5F2ED]">
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <p className="text-xs tracking-[0.3em] uppercase text-[#EF8C00] font-medium mb-4">
            I nostri partner
          </p>
          <h2 className="font-script text-5xl md:text-6xl font-normal text-[#2B2B2B]">
            I <span className="font-script">Marchi</span>
          </h2>
          <div className="w-12 h-[1px] bg-[#EF8C00] mx-auto mt-6" />
          <p className="text-[#6B6B6B] mt-6 max-w-xl mx-auto text-sm leading-relaxed">
            Selezioniamo solo i brand più prestigiosi del panorama
            internazionale per garantire qualità, design e innovazione.
          </p>
        </motion.div>
      </div>

      {/* Logo marquee */}
      <div className="overflow-hidden border-y border-[#e0dbd3] py-6 bg-white">
        <div className="flex animate-marquee items-center">
          {doubled.map((brand, i) => (
            <div
              key={i}
              className="flex-shrink-0 mx-8 flex items-center justify-center"
              style={{ width: 119, height: 60 }}
            >
              <Image
                src={brand.logo}
                alt={brand.nome}
                width={119}
                height={60}
                className="object-contain grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Logo grid */}
      <div className="max-w-7xl mx-auto px-6 mt-16">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-8 gap-px bg-[#e0dbd3]">
          {marchi.map((brand, i) => {
            const fornitore = findFornitore(brand);
            return (
              <motion.div
                key={brand.nome}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.4, delay: (i % 8) * 0.05 }}
                className="bg-[#F5F2ED] hover:bg-white transition-colors duration-300 flex items-center justify-center p-4 aspect-square group cursor-pointer"
                onClick={() => fornitore && setSelected(fornitore)}
              >
                <Image
                  src={brand.logo}
                  alt={brand.nome}
                  width={100}
                  height={60}
                  className="object-contain grayscale group-hover:grayscale-0 opacity-60 group-hover:opacity-100 transition-all duration-300"
                />
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Modal avvertimento uscita sito */}
      <Dialog open={!!selected} onOpenChange={(open) => !open && setSelected(null)}>
        <DialogContent className="max-w-sm text-center">
          {selected && (
            <>
              <div className="flex justify-center mb-2">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <TriangleAlert size={24} className="text-primary" />
                </div>
              </div>
              <DialogHeader className="text-center">
                <DialogTitle className="text-center">Apertura sito esterno</DialogTitle>
                <DialogDescription className="text-center">
                  Verrà aperta una nuova scheda del browser con il sito ufficiale di <span className="font-medium text-dark">{selected.nome}</span>. Scutti non è responsabile dei contenuti esterni.
                </DialogDescription>
              </DialogHeader>
              <div className="flex flex-col gap-3 mt-4">
                <Button variant="dark" asChild>
                  <a
                    href={selected.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => { trackFornitoreClick(selected.nome, "marchi"); setSelected(null); }}
                  >
                    <ExternalLink size={16} />
                    Vai al sito di {selected.nome}
                  </a>
                </Button>
                <Button variant="outline" onClick={() => setSelected(null)}>
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

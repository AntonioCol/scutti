"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { showroomImages, showroomExtraImages } from "@/data/collezioni";
import { Button } from "@/components/ui/button";

export default function Showroom() {
  return (
    <section id="showroom" className="py-24 md:py-32 bg-darkbg">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-xs tracking-[0.3em] uppercase text-primary font-medium mb-4">
            Vieni a vedere, toccare, scegliere
          </p>
          <h2 className="font-script text-5xl md:text-6xl font-normal text-white">
            Lo <span className="font-script">Showroom</span>
          </h2>
          <div className="w-12 h-[1px] bg-primary mx-auto mt-6" />
          <p className="text-white/60 mt-6 max-w-2xl mx-auto text-sm leading-relaxed">
            <strong className="text-white/80">1.200 m² di esposizione</strong> a Villa Santa Maria (Chieti) — il pi&ugrave; grande
            showroom di arredo bagno e pavimenti della provincia. Qui non scegli da una foto:
            tocchi i materiali, confronti le finiture e un consulente ti aiuta a trovare
            la soluzione giusta per il tuo budget.
            <span className="text-primary font-medium"> Prenota una visita gratuita.</span>
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-3 grid-rows-2 gap-3 h-[500px] md:h-[600px]">
          {showroomImages.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className={`relative overflow-hidden group ${img.span}`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-colors duration-500" />
            </motion.div>
          ))}
        </div>

        {/* Extra row with remaining showroom images */}
        <div className="grid grid-cols-2 gap-3 mt-3 h-[220px] md:h-[260px]">
          {showroomExtraImages.map((img, i) => (
            <motion.div
              key={img.src}
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="relative overflow-hidden group"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-colors duration-500" />
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mt-12"
        >
          <Button variant="outline" size="lg" asChild>
            <a href="#contatti">Prenota una Visita Gratuita</a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

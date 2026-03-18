"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { showroomImages } from "@/data/collezioni";

export default function Showroom() {
  return (
    <section id="showroom" className="py-24 md:py-32 bg-[#1C1C1C]">
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
            Un&apos;esperienza sensoriale
          </p>
          <h2 className="font-script text-5xl md:text-6xl font-normal text-white">
            Lo <span className="font-script">Showroom</span>
          </h2>
          <div className="w-12 h-[1px] bg-[#EF8C00] mx-auto mt-6" />
          <p className="text-white/60 mt-6 max-w-xl mx-auto text-sm leading-relaxed">
            Oltre 1.200 m² a Villa Santa Maria (CH) dove potrete toccare
            con mano materiali, texture e finiture dei migliori brand internazionali.
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
          {[7, 8].map((n, i) => (
            <motion.div
              key={n}
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="relative overflow-hidden group"
            >
              <Image
                src={`/img/showroom/scutti_showroom_${n}.jpg`}
                alt={`Showroom Scutti ${n}`}
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
          <a
            href="#contatti"
            className="inline-block border border-[#EF8C00] text-[#EF8C00] text-xs tracking-[0.2em] uppercase px-10 py-4 hover:bg-[#EF8C00] hover:text-white transition-all duration-300"
          >
            Prenota una visita
          </a>
        </motion.div>
      </div>
    </section>
  );
}

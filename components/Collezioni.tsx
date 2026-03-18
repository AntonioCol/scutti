"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { collezioni } from "@/data/collezioni";

export default function Collezioni() {
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
            Il nostro catalogo
          </p>
          <h2 className="font-script text-5xl md:text-6xl font-normal text-white">
            Le <span className="font-script">Collezioni</span>
          </h2>
          <div className="w-12 h-[1px] bg-[#EF8C00] mx-auto mt-6" />
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
            >
              {/* Image */}
              <Image
                src={cat.immagine}
                alt={cat.nome}
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
    </section>
  );
}

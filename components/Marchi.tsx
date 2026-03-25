"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { marchi } from "@/data/collezioni";

export default function Marchi() {
  const doubled = [...marchi, ...marchi];

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
          {marchi.map((brand, i) => (
            <motion.div
              key={brand.nome}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.4, delay: (i % 8) * 0.05 }}
              className="bg-[#F5F2ED] hover:bg-white transition-colors duration-300 flex items-center justify-center p-4 aspect-square group"
            >
              <Image
                src={brand.logo}
                alt={brand.nome}
                width={100}
                height={60}
                className="object-contain grayscale group-hover:grayscale-0 opacity-60 group-hover:opacity-100 transition-all duration-300"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

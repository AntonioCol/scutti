"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { heroImages } from "@/data/collezioni";

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="home"
      className="relative h-screen w-full overflow-hidden flex items-center justify-center"
    >
      {/* Slideshow */}
      <AnimatePresence mode="sync">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
        >
          <Image
            src={heroImages[current]}
            alt="Scutti — Gli interni che desideri"
            fill
            priority={current === 0}
            className="object-cover"
          />
        </motion.div>
      </AnimatePresence>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/35 to-black/65 z-10" />

      {/* Dots */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-20 flex gap-1.5">
        {heroImages.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
              i === current ? "bg-[#EF8C00] w-4" : "bg-white/40"
            }`}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-xs tracking-[0.3em] uppercase mb-6 text-[#EF8C00] font-medium"
        >
          Villa Santa Maria · Abruzzo · Dal 1970
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="font-script text-6xl md:text-8xl font-normal leading-tight mb-6"
        >
          Gli interni
          <br />
          <span className="font-script">che desideri</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-base md:text-lg text-white/80 mb-10 max-w-xl mx-auto leading-relaxed"
        >
          Showroom di arredo bagno, pavimenti, ceramiche, camini, parquet e molto altro.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#collezioni"
            className="bg-[#EF8C00] text-white text-xs tracking-[0.2em] uppercase px-8 py-4 hover:bg-[#D87C00] transition-colors duration-300"
          >
            Scopri le Collezioni
          </a>
          <a
            href="#contatti"
            className="border border-white text-white text-xs tracking-[0.2em] uppercase px-8 py-4 hover:bg-white hover:text-[#2B2B2B] transition-all duration-300"
          >
            Contattaci
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-white/50"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ChevronDown size={18} />
        </motion.div>
      </motion.div>
    </section>
  );
}

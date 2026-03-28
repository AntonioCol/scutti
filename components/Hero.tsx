"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { heroImages } from "@/data/collezioni";
import { Button } from "@/components/ui/button";

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const slide = heroImages[current];

  return (
    <section
      id="home"
      className="relative h-screen w-full overflow-hidden flex flex-col"
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
            src={slide.src}
            alt={slide.alt}
            fill
            priority={current === 0}
            className="object-cover"
          />
        </motion.div>
      </AnimatePresence>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/35 to-black/65 z-10" />

      {/* Dots – sempre verticali a sinistra */}
      <div className="absolute z-20 left-4 md:left-6 top-1/2 -translate-y-1/2 flex flex-col gap-1.5">
        {heroImages.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`rounded-full transition-all duration-300 ${
              i === current
                ? "bg-primary w-1.5 h-4"
                : "bg-white/40 w-1.5 h-1.5"
            }`}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Tagline fissa sotto il menu */}
      <div className="relative z-10 text-center text-white px-6 pt-[calc(4rem+1.5rem)] md:pt-[calc(5rem+1.5rem)]">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-xs tracking-[0.3em] uppercase text-primary font-medium"
        >
          Villa Santa Maria · Chieti · Abruzzo · Dal 1970
        </motion.p>
      </div>

      {/* Testi animati — occupano lo spazio centrale */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center text-white px-6">
        <AnimatePresence mode="wait">
          <motion.h1
            key={`title-${current}`}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.7 }}
            className="font-script text-5xl md:text-8xl font-normal leading-tight mb-6"
          >
            {slide.titolo[0]}
            <br />
            <span className="font-script">{slide.titolo[1]}</span>
          </motion.h1>
        </AnimatePresence>

        <AnimatePresence mode="wait">
          <motion.p
            key={`sub-${current}`}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-base md:text-lg text-white/80 max-w-2xl mx-auto leading-relaxed"
          >
            {slide.sottotitolo}
          </motion.p>
        </AnimatePresence>
      </div>

      {/* Buttons fissi in basso */}
      <div className="relative z-10 pb-[43px] md:pb-12 px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button asChild>
            <a href="#contatti">Richiedi Preventivo Gratuito</a>
          </Button>
          <Button variant="outlineWhite" asChild>
            <a href="#collezioni">Scopri le Collezioni</a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

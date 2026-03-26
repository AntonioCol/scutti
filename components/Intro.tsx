"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const stats = [
  { value: "50+", label: "Anni di esperienza" },
  { value: "24+", label: "Brand selezionati" },
  { value: "1.200m²", label: "Di showroom" },
];

export default function Intro() {
  return (
    <section className="py-24 md:py-32 bg-[#F5F2ED]">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-xs tracking-[0.3em] uppercase text-[#EF8C00] font-medium mb-4">
            Perch&eacute; scegliere Scutti
          </p>
          <h2 className="font-script text-5xl md:text-6xl font-normal leading-tight mb-8 text-[#2B2B2B]">
            Non un negozio.
            <br />
            <span className="font-script">Il tuo consulente.</span>
          </h2>
          <p className="text-[#6B6B6B] leading-relaxed mb-6 text-base">
            Stai ristrutturando casa o costruendo da zero? <strong className="text-dark">Non scegliere da un catalogo online.</strong> Nel
            nostro showroom di 1.200 m² a Villa Santa Maria (Chieti) tocchi con mano
            pavimenti, ceramiche, sanitari e rubinetterie dei migliori marchi
            internazionali — e un consulente dedicato ti segue dalla scelta
            dei materiali fino alla posa.
          </p>
          <p className="text-[#6B6B6B] leading-relaxed mb-4 text-base">
            <strong className="text-dark">Oltre 60 brand, un unico interlocutore.</strong> Invece
            di girare tra cinque rivenditori diversi, da Scutti trovi tutto: arredo bagno,
            pavimenti, parquet, camini, stufe, mosaici e molto altro. Con un preventivo
            chiaro, senza sorprese.
          </p>
          <p className="text-[#EF8C00] leading-relaxed mb-10 text-sm font-medium">
            Serviamo tutta la provincia di Chieti, l&apos;Abruzzo e il Molise. Preventivo gratuito e senza impegno.
          </p>

          {/* Stats */}
          <div className="flex gap-10 border-t border-[#e0dbd3] pt-8">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="font-script text-4xl font-normal text-[#EF8C00]">
                  {s.value}
                </p>
                <p className="text-xs text-[#6B6B6B] tracking-wide mt-1">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="relative h-[520px] w-full overflow-hidden">
            <Image
              src="/img/showroom/scutti_showroom_1.jpg"
              alt="Showroom arredo bagno e ceramiche Scutti — Villa Santa Maria, Chieti"
              fill
              className="object-cover"
            />
          </div>
          {/* Decorative border offset */}
          <div className="absolute -bottom-4 -right-4 w-full h-full border border-[#EF8C00] -z-10" />
        </motion.div>
      </div>
    </section>
  );
}

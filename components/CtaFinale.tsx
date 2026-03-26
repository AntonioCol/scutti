"use client";

import { motion } from "framer-motion";
import { Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { trackWhatsAppClick } from "@/lib/analytics";

export default function CtaFinale() {
  return (
    <section className="py-20 md:py-28 bg-[#1C1C1C]">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-xs tracking-[0.3em] uppercase text-[#EF8C00] font-medium mb-4">
            Inizia il tuo progetto
          </p>
          <h2 className="font-script text-4xl md:text-5xl text-white mb-4">
            Vuoi rifare pavimenti o bagno?
          </h2>
          <p className="text-white/60 text-sm leading-relaxed max-w-xl mx-auto mb-10">
            Visita in showroom gratuita, preventivo dettagliato entro 24 ore e nessun obbligo.
            Siamo il tuo unico punto di riferimento dalla scelta dei materiali alla posa.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="default" size="lg" asChild>
              <a href="#contatti">
                Richiedi Preventivo Gratuito
              </a>
            </Button>
            <Button variant="whatsapp" size="lg" asChild>
              <a
                href="https://wa.me/393345062792"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWhatsAppClick()}
              >
                <MessageCircle size={18} />
                WhatsApp
              </a>
            </Button>
            <Button variant="outlineWhite" size="lg" asChild>
              <a href="tel:0872944160">
                <Phone size={18} />
                Chiama ora
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

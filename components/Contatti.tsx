"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";

export default function Contatti() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ nome: "", email: "", telefono: "", messaggio: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contatti" className="py-24 md:py-32 bg-[#F5F2ED]">
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
            Siamo a tua disposizione
          </p>
          <h2 className="font-script text-5xl md:text-6xl font-normal text-[#2B2B2B]">
            <span className="font-script">Contattaci</span>
          </h2>
          <div className="w-12 h-[1px] bg-[#EF8C00] mx-auto mt-6" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
          {/* Left: info + form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
          >
            {/* Contact info */}
            <div className="space-y-5 mb-10">
              <div className="flex items-start gap-4">
                <MapPin size={18} className="text-[#EF8C00] mt-0.5 shrink-0" />
                <div>
                  <p className="text-sm font-medium text-[#2B2B2B]">Indirizzo</p>
                  <p className="text-sm text-[#6B6B6B] mt-1 leading-relaxed">
                    Scutti Gilberto S.r.l.<br />
                    C.da Poggio, 25<br />
                    66047 Villa Santa Maria (CH) — Abruzzo
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone size={18} className="text-[#EF8C00] mt-0.5 shrink-0" />
                <div>
                  <p className="text-sm font-medium text-[#2B2B2B]">Telefono</p>
                  <p className="text-sm text-[#6B6B6B] mt-1">
                    <a href="tel:0872944160" className="hover:text-[#EF8C00] transition-colors">
                      0872.944160
                    </a>
                    {" "}·{" "}
                    <a href="tel:3345062792" className="hover:text-[#EF8C00] transition-colors">
                      334.5062792
                    </a>
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail size={18} className="text-[#EF8C00] mt-0.5 shrink-0" />
                <div>
                  <p className="text-sm font-medium text-[#2B2B2B]">Email</p>
                  <a
                    href="mailto:info@scutti.it"
                    className="text-sm text-[#6B6B6B] hover:text-[#EF8C00] transition-colors mt-1 block"
                  >
                    info@scutti.it
                  </a>
                </div>
              </div>
            </div>

            {/* WhatsApp */}
            <a
              href="https://wa.me/393345062792"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#25D366] text-white text-xs tracking-[0.15em] uppercase px-6 py-3 hover:bg-[#1eba57] transition-colors duration-300 mb-10"
            >
              <MessageCircle size={16} />
              Scrivici su WhatsApp
            </a>

            {/* Form */}
            {sent ? (
              <div className="border border-[#EF8C00] p-8 text-center">
                <p className="font-script text-2xl text-[#2B2B2B] mb-2">Grazie!</p>
                <p className="text-sm text-[#6B6B6B]">
                  Il tuo messaggio è stato inviato. Ti risponderemo al più presto.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs tracking-[0.1em] uppercase text-[#6B6B6B] block mb-1">
                      Nome *
                    </label>
                    <input
                      type="text"
                      required
                      value={form.nome}
                      onChange={(e) => setForm({ ...form, nome: e.target.value })}
                      className="w-full border border-[#e0dbd3] bg-white px-4 py-3 text-sm text-[#2B2B2B] focus:outline-none focus:border-[#EF8C00] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="text-xs tracking-[0.1em] uppercase text-[#6B6B6B] block mb-1">
                      Telefono
                    </label>
                    <input
                      type="tel"
                      value={form.telefono}
                      onChange={(e) => setForm({ ...form, telefono: e.target.value })}
                      className="w-full border border-[#e0dbd3] bg-white px-4 py-3 text-sm text-[#2B2B2B] focus:outline-none focus:border-[#EF8C00] transition-colors"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-xs tracking-[0.1em] uppercase text-[#6B6B6B] block mb-1">
                    Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full border border-[#e0dbd3] bg-white px-4 py-3 text-sm text-[#2B2B2B] focus:outline-none focus:border-[#EF8C00] transition-colors"
                  />
                </div>
                <div>
                  <label className="text-xs tracking-[0.1em] uppercase text-[#6B6B6B] block mb-1">
                    Messaggio *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={form.messaggio}
                    onChange={(e) => setForm({ ...form, messaggio: e.target.value })}
                    className="w-full border border-[#e0dbd3] bg-white px-4 py-3 text-sm text-[#2B2B2B] focus:outline-none focus:border-[#EF8C00] transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#2B2B2B] text-white text-xs tracking-[0.2em] uppercase py-4 hover:bg-[#EF8C00] transition-colors duration-300"
                >
                  Invia Messaggio
                </button>
              </form>
            )}
          </motion.div>

          {/* Right: map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col gap-6"
          >
            <div className="flex-1 min-h-[400px] overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2956.1!2d14.3539!3d41.9452!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1331d9a59f8ef%3A0x4053da8f0!2sVilla%20Santa%20Maria%2C%20CH%2C%20Italia!5e0!3m2!1sit!2sit!4v1"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "400px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mappa Scutti"
              />
            </div>
            <div className="bg-white border border-[#e0dbd3] p-6">
              <p className="text-xs tracking-[0.2em] uppercase text-[#EF8C00] mb-3">Orari showroom</p>
              <div className="space-y-1 text-sm text-[#6B6B6B]">
                <div className="flex justify-between">
                  <span>Lunedì – Venerdì</span>
                  <span className="font-medium text-[#2B2B2B]">9:00 – 13:00 / 15:00 – 19:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Sabato</span>
                  <span className="font-medium text-[#2B2B2B]">9:00 – 13:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Domenica</span>
                  <span className="font-medium text-[#2B2B2B]">Chiuso</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

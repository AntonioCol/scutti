"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export default function Contatti() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ nome: "", email: "", telefono: "", messaggio: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contatti" className="py-24 md:py-32 bg-sand">
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
            Siamo a tua disposizione
          </p>
          <h2 className="font-script text-5xl md:text-6xl font-normal text-dark">
            <span className="font-script">Contattaci</span>
          </h2>
          <div className="w-12 h-[1px] bg-primary mx-auto mt-6" />
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
                <MapPin size={18} className="text-primary mt-0.5 shrink-0" />
                <div>
                  <p className="text-sm font-medium text-dark">Indirizzo</p>
                  <p className="text-sm text-midgray mt-1 leading-relaxed">
                    Scutti Gilberto S.r.l.<br />
                    C.da Poggio, 25<br />
                    66047 Villa Santa Maria (CH) — Abruzzo
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone size={18} className="text-primary mt-0.5 shrink-0" />
                <div>
                  <p className="text-sm font-medium text-dark">Telefono</p>
                  <p className="text-sm text-midgray mt-1">
                    <a href="tel:0872944160" className="hover:text-primary transition-colors">
                      0872.944160
                    </a>
                    {" "}·{" "}
                    <a href="tel:3345062792" className="hover:text-primary transition-colors">
                      334.5062792
                    </a>
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail size={18} className="text-primary mt-0.5 shrink-0" />
                <div>
                  <p className="text-sm font-medium text-dark">Email</p>
                  <a
                    href="mailto:info@scutti.it"
                    className="text-sm text-midgray hover:text-primary transition-colors mt-1 block"
                  >
                    info@scutti.it
                  </a>
                </div>
              </div>
            </div>

            {/* Form card */}
            <div className="bg-white border border-[#e0dbd3] shadow-lg shadow-black/5 p-8 md:p-10">
              <p className="text-xs tracking-[0.2em] uppercase text-primary font-medium mb-1">
                Richiedi informazioni
              </p>
              <h3 className="font-script text-2xl text-dark mb-6">
                Scrivici un messaggio
              </h3>

              {sent ? (
                <div className="py-12 text-center">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Mail size={24} className="text-primary" />
                  </div>
                  <p className="font-script text-2xl text-dark mb-2">Grazie!</p>
                  <p className="text-sm text-midgray">
                    Il tuo messaggio è stato inviato. Ti risponderemo al più presto.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="nome">Nome *</Label>
                      <Input
                        id="nome"
                        type="text"
                        placeholder="Il tuo nome"
                        required
                        value={form.nome}
                        onChange={(e) => setForm({ ...form, nome: e.target.value })}
                      />
                    </div>
                    <div>
                      <Label htmlFor="telefono">Telefono</Label>
                      <Input
                        id="telefono"
                        type="tel"
                        placeholder="333 1234567"
                        value={form.telefono}
                        onChange={(e) => setForm({ ...form, telefono: e.target.value })}
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="nome@email.it"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                    />
                  </div>
                  <div>
                    <Label htmlFor="messaggio">Messaggio *</Label>
                    <Textarea
                      id="messaggio"
                      placeholder="Raccontaci cosa stai cercando..."
                      required
                      rows={5}
                      value={form.messaggio}
                      onChange={(e) => setForm({ ...form, messaggio: e.target.value })}
                    />
                  </div>
                  <Button variant="dark" type="submit" className="w-full">
                    Invia Messaggio
                  </Button>

                  {/* Divider */}
                  <div className="flex items-center gap-4 pt-1">
                    <div className="flex-1 h-px bg-[#e0dbd3]" />
                    <span className="text-xs text-midgray uppercase tracking-wider">oppure</span>
                    <div className="flex-1 h-px bg-[#e0dbd3]" />
                  </div>

                  {/* WhatsApp */}
                  <Button variant="whatsapp" asChild className="w-full py-4">
                    <a
                      href="https://wa.me/393345062792"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MessageCircle size={18} />
                      Scrivici su WhatsApp
                    </a>
                  </Button>
                </form>
              )}
            </div>
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
                src="https://maps.google.com/maps?q=Scutti+Gilberto+Srl+Contrada+Poggio+25+66047+Villa+Santa+Maria+CH&t=&z=16&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "400px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mappa Scutti"
              />
            </div>
            <div className="bg-white border border-input p-6">
              <p className="text-xs tracking-[0.2em] uppercase text-primary mb-3">Orari showroom</p>
              <div className="space-y-1 text-sm text-midgray">
                <div className="flex justify-between">
                  <span>Lunedì – Venerdì</span>
                  <span className="font-medium text-dark">9:00 – 13:00 / 15:00 – 19:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Sabato</span>
                  <span className="font-medium text-dark">9:00 – 13:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Domenica</span>
                  <span className="font-medium text-dark">Chiuso</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

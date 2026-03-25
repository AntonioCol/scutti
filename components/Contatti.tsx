"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, MessageCircle, Clock, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";

type Errors = Partial<Record<"nome" | "email" | "telefono" | "messaggio", string>>;

function validate(form: { nome: string; email: string; telefono: string; messaggio: string }): Errors {
  const errors: Errors = {};

  const nome = form.nome.trim();
  // \p{L} accetta qualsiasi lettera Unicode (latino, cirillico, arabo, ecc.)
  const nomeRegex = /^[\p{L}' -]+$/u;
  const parole = nome.split(/\s+/).filter(Boolean);
  // Parole generiche / senza senso da bloccare
  const paroleBlocco = ["test", "prova", "asd", "asdf", "abc", "xxx", "zzz", "aaa", "bbb", "ccc", "nome", "cognome", "pippo", "pluto", "foo", "bar", "baz", "qwerty", "admin", "user", "guest", "ciao", "hello"];
  // Controlla lettere ripetute 3+ volte consecutive (es. "aaaa", "bbbbb")
  const haRipetizioni = /(.)\1{2,}/.test(nome.toLowerCase());
  const haParolaBlocco = parole.some((p) => paroleBlocco.includes(p.toLowerCase()));

  if (!nome) {
    errors.nome = "Il nome è obbligatorio";
  } else if (!nomeRegex.test(nome)) {
    errors.nome = "Inserisci nome e cognome validi";
  } else if (nome.length < 3 || parole.length < 2 || parole.some((p) => p.length < 2)) {
    errors.nome = "Inserisci nome e cognome validi";
  } else if (haParolaBlocco || haRipetizioni) {
    errors.nome = "Inserisci nome e cognome validi";
  }

  const email = form.email.trim().toLowerCase();
  // Domini email temporanei/usa e getta più comuni
  const disposableDomains = ["mailinator.com", "guerrillamail.com", "tempmail.com", "throwaway.email", "yopmail.com", "10minutemail.com", "trashmail.com", "fakeinbox.com", "sharklasers.com", "guerrillamailblock.com", "grr.la", "dispostable.com", "maildrop.cc"];
  // Estensioni dominio reali (non esaustivo ma copre i casi comuni)
  const validTlds = /\.(it|com|net|org|eu|info|biz|co|me|io|dev|edu|gov|name|pro|tel|mobi|asia|cat|jobs|travel|aero|coop|museum|int|mil|fr|de|es|uk|ch|at|be|nl|pt|pl|ro|bg|hr|cz|dk|fi|gr|hu|ie|lt|lv|lu|mt|se|si|sk|no|ru|us|ca|br|ar|mx|au|nz|jp|cn|in|kr|za)$/;

  if (!email) {
    errors.email = "L'email è obbligatoria";
  } else if (!/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/.test(email)) {
    errors.email = "Inserisci un indirizzo email valido";
  } else if (/\.{2,}/.test(email) || email.startsWith(".") || email.includes(".@")) {
    errors.email = "L'indirizzo email contiene caratteri non validi";
  } else {
    const domain = email.split("@")[1];
    if (disposableDomains.includes(domain)) {
      errors.email = "Non sono ammesse email temporanee o usa e getta";
    } else if (!validTlds.test(domain)) {
      errors.email = "Il dominio dell'email non sembra valido";
    }
  }

  // Telefono italiano: mobile (3xx) o fisso (0x/0xx) con o senza prefisso +39
  const telefono = form.telefono.trim().replace(/[\s\-().]/g, "");
  if (form.telefono.trim()) {
    // Rimuovi +39 o 0039 iniziale se presente
    const numPulito = telefono.replace(/^(\+39|0039)/, "");
    // Mobile: 3xx xxxxxxx (9-10 cifre) — Fisso: 0x/0xx xxxxxxx (6-11 cifre)
    const isMobile = /^3\d{8,9}$/.test(numPulito);
    const isFisso = /^0\d{5,10}$/.test(numPulito);
    if (!isMobile && !isFisso) {
      errors.telefono = "Inserisci un numero italiano valido (fisso o cellulare)";
    }
  }

  const messaggio = form.messaggio.trim();
  if (!messaggio) {
    errors.messaggio = "Il messaggio è obbligatorio";
  } else if (messaggio.length < 10) {
    errors.messaggio = "Il messaggio deve avere almeno 10 caratteri";
  }

  return errors;
}

export default function Contatti() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ nome: "", email: "", telefono: "", messaggio: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const handleBlur = (field: keyof typeof form) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    const fieldErrors = validate(form);
    setErrors((prev) => ({ ...prev, [field]: fieldErrors[field] }));
  };

  const handleChange = (field: keyof typeof form, value: string) => {
    const next = { ...form, [field]: value };
    setForm(next);
    if (touched[field]) {
      const fieldErrors = validate(next);
      setErrors((prev) => ({ ...prev, [field]: fieldErrors[field] }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const allErrors = validate(form);
    setErrors(allErrors);
    setTouched({ nome: true, email: true, telefono: true, messaggio: true });
    if (Object.keys(allErrors).length > 0) return;
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

        {/* Info + Orari row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-2 gap-8 lg:gap-20 mb-12"
        >
          {/* Indirizzo + Telefono + Email */}
          <div className="grid grid-cols-2 gap-6">
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
            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <Phone size={18} className="text-primary mt-0.5 shrink-0" />
                <div>
                  <p className="text-sm font-medium text-dark">Telefono</p>
                  <p className="text-sm text-midgray mt-1">
                    <a href="tel:0872944160" className="hover:text-primary transition-colors">
                      0872.944160
                    </a>
                    <br />
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
          </div>

          {/* Orari showroom */}
          <div className="flex items-start gap-4">
            <Clock size={18} className="text-primary mt-0.5 shrink-0" />
            <div>
              <p className="text-sm font-medium text-dark">Orari showroom</p>
              <div className="text-sm text-midgray mt-1 space-y-0.5 leading-relaxed">
                <p>Lunedì – Venerdì: <span className="font-medium text-dark">9:00 – 13:00 / 15:00 – 19:00</span></p>
                <p>Sabato: <span className="font-medium text-dark">9:00 – 13:00</span></p>
                <p>Domenica: <span className="font-medium text-dark">Chiuso</span></p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Form + Map row */}
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
          {/* Form card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
          >
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
                <TooltipProvider>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="flex items-center gap-1.5 mb-1">
                        <Label htmlFor="nome" className="mb-0">Nome *</Label>
                        <Tooltip>
                          <TooltipTrigger type="button" tabIndex={-1}>
                            <Info size={13} className="text-muted-foreground" />
                          </TooltipTrigger>
                          <TooltipContent>Inserisci il tuo nome e cognome</TooltipContent>
                        </Tooltip>
                      </div>
                      <Input
                        id="nome"
                        type="text"
                        placeholder="Il tuo nome"
                        value={form.nome}
                        onChange={(e) => handleChange("nome", e.target.value)}
                        onBlur={() => handleBlur("nome")}
                        aria-invalid={!!errors.nome}
                      />
                      {touched.nome && errors.nome && (
                        <p className="text-xs text-destructive mt-1">{errors.nome}</p>
                      )}
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5 mb-1">
                        <Label htmlFor="telefono" className="mb-0">Telefono</Label>
                        <Tooltip>
                          <TooltipTrigger type="button" tabIndex={-1}>
                            <Info size={13} className="text-muted-foreground" />
                          </TooltipTrigger>
                          <TooltipContent>Facoltativo — per essere ricontattato più rapidamente</TooltipContent>
                        </Tooltip>
                      </div>
                      <Input
                        id="telefono"
                        type="tel"
                        placeholder="333 1234567"
                        value={form.telefono}
                        onChange={(e) => handleChange("telefono", e.target.value)}
                        onBlur={() => handleBlur("telefono")}
                        aria-invalid={!!errors.telefono}
                      />
                      {touched.telefono && errors.telefono && (
                        <p className="text-xs text-destructive mt-1">{errors.telefono}</p>
                      )}
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5 mb-1">
                      <Label htmlFor="email" className="mb-0">Email *</Label>
                      <Tooltip>
                        <TooltipTrigger type="button" tabIndex={-1}>
                          <Info size={13} className="text-muted-foreground" />
                        </TooltipTrigger>
                        <TooltipContent>Ti risponderemo a questo indirizzo email</TooltipContent>
                      </Tooltip>
                    </div>
                    <Input
                      id="email"
                      type="email"
                      placeholder="nome@email.it"
                      value={form.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                      onBlur={() => handleBlur("email")}
                      aria-invalid={!!errors.email}
                    />
                    {touched.email && errors.email && (
                      <p className="text-xs text-destructive mt-1">{errors.email}</p>
                    )}
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5 mb-1">
                      <Label htmlFor="messaggio" className="mb-0">Messaggio *</Label>
                      <Tooltip>
                        <TooltipTrigger type="button" tabIndex={-1}>
                          <Info size={13} className="text-muted-foreground" />
                        </TooltipTrigger>
                        <TooltipContent>Descrivi cosa stai cercando o richiedi un preventivo</TooltipContent>
                      </Tooltip>
                    </div>
                    <Textarea
                      id="messaggio"
                      placeholder="Raccontaci cosa stai cercando..."
                      rows={5}
                      value={form.messaggio}
                      onChange={(e) => handleChange("messaggio", e.target.value)}
                      onBlur={() => handleBlur("messaggio")}
                      aria-invalid={!!errors.messaggio}
                    />
                    {touched.messaggio && errors.messaggio && (
                      <p className="text-xs text-destructive mt-1">{errors.messaggio}</p>
                    )}
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
                </TooltipProvider>
              )}
            </div>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="min-h-[400px] h-full overflow-hidden">
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
          </motion.div>
        </div>
      </div>
    </section>
  );
}

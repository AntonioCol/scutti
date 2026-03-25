"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

const links = [
  { label: "Home", href: "#home" },
  { label: "Collezioni", href: "#collezioni" },
  { label: "Marchi", href: "#marchi" },
  { label: "Showroom", href: "#showroom" },
  // { label: "Blog", href: "/blog" },  // da attivare dopo ok cliente
  { label: "Contatti", href: "#contatti" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Blocca lo scroll del body quando il menu è aperto
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const close = useCallback(() => setOpen(false), []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled || open ? "bg-sand shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2" onClick={close}>
          <Image
            src="/img/logo.png"
            alt="Scutti"
            width={24}
            height={24}
            className="h-[24px] w-[24px] object-contain"
          />
          <span
            className={`font-logo text-[24px] font-black tracking-[-0.05em] leading-none transition-colors duration-300 ${
              scrolled || open ? "text-dark" : "text-white"
            }`}
          >
            Scutti
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-xs tracking-[0.15em] uppercase font-medium transition-colors duration-300 hover:text-primary ${
                scrolled ? "text-dark" : "text-white"
              }`}
            >
              {link.label}
            </a>
          ))}
          <Button variant="outline" size="sm" asChild>
            <a href="#contatti">Richiedi Appuntamento</a>
          </Button>
        </nav>

        {/* Mobile hamburger */}
        <button
          type="button"
          className={`md:hidden p-2 -mr-2 transition-colors duration-300 relative z-50 touch-manipulation ${
            scrolled || open ? "text-dark" : "text-white"
          }`}
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Chiudi menu" : "Apri menu"}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu – no portals, no Radix */}
      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-black/40 md:hidden"
              onClick={close}
            />

            {/* Panel */}
            <motion.nav
              initial={{ y: "-100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-100%" }}
              transition={{ type: "tween", duration: 0.3, ease: "easeInOut" }}
              className="fixed inset-x-0 top-0 z-40 bg-sand pt-20 px-6 pb-8 shadow-lg md:hidden"
            >
              <div className="flex flex-col gap-6">
                {links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={close}
                    className="text-base tracking-[0.15em] uppercase font-medium text-dark hover:text-primary active:text-primary transition-colors border-b border-input pb-4 touch-manipulation"
                  >
                    {link.label}
                  </a>
                ))}
                <Button variant="outline" className="mt-2 py-4 text-center" asChild>
                  <a href="#contatti" onClick={close}>
                    Richiedi Appuntamento
                  </a>
                </Button>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}

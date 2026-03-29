"use client";

import { useState, useEffect, useCallback } from "react";
import { usePathname } from "next/navigation";
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
  const pathname = usePathname();
  const isHome = pathname === "/";
  const href = (anchor: string) => (isHome ? anchor : `/${anchor}`);
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    setScrolled(window.scrollY > 60);
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Traccia sezione attiva sulla home
  useEffect(() => {
    if (!isHome) return;
    const ids = ["home", "collezioni", "marchi", "showroom", "contatti"];
    const observers = ids.map((id) => {
      const el = document.getElementById(id);
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
        { threshold: 0.3, rootMargin: "-60px 0px 0px 0px" }
      );
      obs.observe(el);
      return obs;
    });
    return () => observers.forEach((o) => o?.disconnect());
  }, [isHome]);

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
        <a href={href("#home")} className="flex flex-col leading-none w-fit" onClick={close}>
          <div className="flex items-end gap-1">
            <Image
              src="/img/logo.png"
              alt="Scutti"
              width={24}
              height={24}
              className="h-[24px] w-[24px] object-contain"
            />
            <span
              className={`font-logo text-[30px] font-bold leading-none translate-y-[4px] transition-colors duration-300 ${
                scrolled || open ? "text-dark" : "text-white"
              }`}
            >
              Scutti
            </span>
          </div>
          <span
            className={`font-script text-[9px] font-normal mt-1 w-full transition-colors duration-300 ${
              scrolled || open ? "text-midgray" : "text-white/70"
            }`}
            style={{ textAlign: "justify", textAlignLast: "justify", textJustify: "inter-character" }}
          >
            Gli interni che desideri
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => {
            const isActive = isHome && `#${activeSection}` === link.href;
            return (
              <a
                key={link.href}
                href={href(link.href)}
                className={`relative text-xs tracking-[0.15em] uppercase font-medium transition-colors duration-300 hover:text-primary pb-1 ${
                  scrolled ? "text-dark" : "text-white"
                }`}
              >
                {link.label}
                <motion.span
                  className="absolute bottom-0 left-0 right-0 h-px bg-primary origin-center"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: isActive ? 1 : 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                />
              </a>
            );
          })}
          <Button variant="outline" size="sm" asChild>
            <a href={href("#contatti")}>Richiedi Appuntamento</a>
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
                    href={href(link.href)}
                    onClick={close}
                    className="text-base tracking-[0.15em] uppercase font-medium text-dark hover:text-primary active:text-primary transition-colors border-b border-input pb-4 touch-manipulation"
                  >
                    {link.label}
                  </a>
                ))}
                <Button variant="outline" className="mt-2 py-4 text-center" asChild>
                  <a href={href("#contatti")} onClick={close}>
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

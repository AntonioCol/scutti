"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Home", href: "#home" },
  { label: "Collezioni", href: "#collezioni" },
  { label: "Marchi", href: "#marchi" },
  { label: "Showroom", href: "#showroom" },
  { label: "Contatti", href: "#contatti" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Blocca scroll body quando menu aperto
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-[#F5F2ED] shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2" onClick={() => setOpen(false)}>
          <Image
            src="/img/logo.png"
            alt="Scutti"
            width={24}
            height={24}
            className="h-[24px] w-[24px] object-contain"
          />
          <span
            className={`font-logo text-[24px] font-black tracking-[-0.05em] leading-none transition-colors duration-300 ${
              scrolled ? "text-[#2B2B2B]" : "text-white"
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
              className={`text-xs tracking-[0.15em] uppercase font-medium transition-colors duration-300 hover:text-[#EF8C00] ${
                scrolled ? "text-[#2B2B2B]" : "text-white"
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contatti"
            className="text-xs tracking-[0.15em] uppercase font-medium border border-[#EF8C00] text-[#EF8C00] px-5 py-2 hover:bg-[#EF8C00] hover:text-white transition-all duration-300"
          >
            Richiedi Appuntamento
          </a>
        </nav>

        {/* Mobile burger */}
        <button
          className={`md:hidden p-2 -mr-2 transition-colors duration-300 ${
            scrolled || open ? "text-[#2B2B2B]" : "text-white"
          }`}
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu — full screen overlay */}
      <div
        className={`md:hidden fixed inset-0 top-16 bg-[#F5F2ED] z-40 flex flex-col px-6 py-8 gap-6 transition-all duration-300 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={() => setOpen(false)}
            className="text-base tracking-[0.15em] uppercase font-medium text-[#2B2B2B] hover:text-[#EF8C00] transition-colors border-b border-[#e8e4de] pb-4"
          >
            {link.label}
          </a>
        ))}
        <a
          href="#contatti"
          onClick={() => setOpen(false)}
          className="mt-2 text-sm tracking-[0.15em] uppercase font-medium border border-[#EF8C00] text-[#EF8C00] px-5 py-4 text-center hover:bg-[#EF8C00] hover:text-white transition-all"
        >
          Richiedi Appuntamento
        </a>
      </div>
    </header>
  );
}

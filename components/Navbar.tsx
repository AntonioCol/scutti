"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";

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

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-sand shadow-sm" : "bg-transparent"
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
              scrolled ? "text-dark" : "text-white"
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

        {/* Mobile menu */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <button
              className={`md:hidden p-2 -mr-2 transition-colors duration-300 ${
                scrolled || open ? "text-dark" : "text-white"
              }`}
              aria-label="Menu"
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </SheetTrigger>
          <SheetContent
            side="top"
            showCloseButton={false}
            className="bg-sand pt-20 px-6 pb-8"
          >
            <SheetTitle className="sr-only">Menu di navigazione</SheetTitle>
            <nav className="flex flex-col gap-6">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-base tracking-[0.15em] uppercase font-medium text-dark hover:text-primary transition-colors border-b border-input pb-4"
                >
                  {link.label}
                </a>
              ))}
              <Button variant="outline" className="mt-2 py-4 text-center" asChild>
                <a href="#contatti" onClick={() => setOpen(false)}>
                  Richiedi Appuntamento
                </a>
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}

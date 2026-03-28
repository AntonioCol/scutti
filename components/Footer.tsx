"use client";

import Image from "next/image";
import Link from "next/link";

const links = [
  { label: "Home", href: "#home" },
  { label: "Collezioni", href: "#collezioni" },
  { label: "Marchi", href: "#marchi" },
  { label: "Showroom", href: "#showroom" },
  { label: "Contatti", href: "#contatti" },
];

export default function Footer() {
  return (
    <footer className="bg-[#2B2B2B] text-white/70">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Image
                src="/img/logo.png"
                alt="Scutti"
                width={24}
                height={24}
                className="h-[24px] w-[24px] object-contain"
              />
              <span className="font-logo text-[24px] font-bold tracking-[-0.02em] leading-none text-white">
                Scutti
              </span>
            </div>
            <p className="text-sm leading-relaxed text-white/50">
              Gli interni che desideri.<br />
              Showroom a Villa Santa Maria (CH), Abruzzo.
            </p>
          </div>

          {/* Nav */}
          <div>
            <p className="text-xs tracking-[0.2em] uppercase text-[#EF8C00] mb-5">
              Navigazione
            </p>
            <ul className="space-y-3">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-sm text-white/60 hover:text-white transition-colors duration-200"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs tracking-[0.2em] uppercase text-[#EF8C00] mb-5">
              Contatti
            </p>
            <div className="space-y-2 text-sm text-white/60">
              <p>Scutti Gilberto S.r.l.</p>
              <p>C.da Poggio, 25</p>
              <p>66047 Villa Santa Maria (CH)</p>
              <p className="pt-2">
                <a href="tel:0872944160" className="hover:text-white transition-colors">
                  Tel. 0872.944160
                </a>
              </p>
              <p>
                <a href="mailto:info@scutti.it" className="hover:text-white transition-colors">
                  info@scutti.it
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-white/30">
          <p>© {new Date().getFullYear()} Scutti Gilberto S.r.l. — Tutti i diritti riservati</p>
          <p className="flex gap-2">
            <Link href="/privacy" className="hover:text-white/60 transition-colors">Privacy Policy</Link>
            <span>·</span>
            <button
              type="button"
              onClick={() => window.dispatchEvent(new Event("open-cookie-settings"))}
              className="hover:text-white/60 transition-colors cursor-pointer"
            >
              Cookie Policy
            </button>
          </p>
        </div>
      </div>
    </footer>
  );
}

"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cookie, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getConsent, setConsent } from "@/lib/analytics";
import Link from "next/link";

type View = "banner" | "preferences" | null;

export default function CookieBanner() {
  const [view, setView] = useState<View>(null);
  const [analyticsEnabled, setAnalyticsEnabled] = useState(false);

  useEffect(() => {
    const consent = getConsent();
    if (!consent) {
      setView("banner");
    }
  }, []);

  // Ascolta evento per riaprire le preferenze cookie (dal footer)
  useEffect(() => {
    const handler = () => setView("preferences");
    window.addEventListener("open-cookie-settings", handler);
    return () => window.removeEventListener("open-cookie-settings", handler);
  }, []);

  const handleAcceptAll = () => {
    setConsent(true);
    setView(null);
  };

  const handleRejectAll = () => {
    setConsent(false);
    setView(null);
  };

  const handleSavePreferences = () => {
    setConsent(analyticsEnabled);
    setView(null);
  };

  return (
    <AnimatePresence>
      {view && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="fixed bottom-0 inset-x-0 z-50 border-t border-[#e0dbd3] bg-white shadow-2xl shadow-black/10"
        >
          <div className="max-w-5xl mx-auto px-6 py-6">
            {view === "banner" && (
              <div className="flex flex-col md:flex-row md:items-center gap-6">
                <div className="flex items-start gap-4 flex-1">
                  <Cookie size={24} className="text-primary shrink-0 mt-0.5" />
                  <div>
                    <p className="font-script text-lg text-dark mb-1">
                      Informativa sui cookie
                    </p>
                    <p className="text-sm text-midgray leading-relaxed">
                      Questo sito utilizza cookie tecnici necessari e, con il tuo consenso, cookie
                      analitici per migliorare la tua esperienza. Per saperne di più, consulta la
                      nostra{" "}
                      <Link href="/privacy" className="text-primary hover:underline">
                        Privacy Policy
                      </Link>
                      .
                    </p>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-2 sm:shrink-0">
                  <Button variant="default" onClick={handleAcceptAll}>
                    Accetta tutti
                  </Button>
                  <Button variant="outline" onClick={handleRejectAll}>
                    Rifiuta
                  </Button>
                  <Button
                    variant="ghost"
                    onClick={() => setView("preferences")}
                    className="text-midgray"
                  >
                    Gestisci preferenze
                  </Button>
                </div>
              </div>
            )}

            {view === "preferences" && (
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <Shield size={20} className="text-primary" />
                  <p className="font-script text-lg text-dark">
                    Gestisci le preferenze cookie
                  </p>
                </div>

                <div className="space-y-4 mb-6">
                  {/* Cookie necessari */}
                  <div className="flex items-center justify-between border border-[#e0dbd3] p-4">
                    <div>
                      <p className="text-sm font-medium text-dark">Cookie necessari</p>
                      <p className="text-xs text-midgray mt-0.5">
                        Indispensabili per il funzionamento del sito. Non possono essere disattivati.
                      </p>
                    </div>
                    <div className="w-11 h-6 rounded-full bg-primary/30 flex items-center justify-end px-0.5 cursor-not-allowed">
                      <div className="w-5 h-5 rounded-full bg-primary" />
                    </div>
                  </div>

                  {/* Cookie analitici */}
                  <div className="flex items-center justify-between border border-[#e0dbd3] p-4">
                    <div>
                      <p className="text-sm font-medium text-dark">Cookie analitici</p>
                      <p className="text-xs text-midgray mt-0.5">
                        Google Analytics — ci aiutano a capire come viene utilizzato il sito.
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => setAnalyticsEnabled(!analyticsEnabled)}
                      className={`w-11 h-6 rounded-full flex items-center px-0.5 transition-colors duration-200 cursor-pointer ${
                        analyticsEnabled ? "bg-primary/30 justify-end" : "bg-[#e0dbd3] justify-start"
                      }`}
                    >
                      <div
                        className={`w-5 h-5 rounded-full transition-colors duration-200 ${
                          analyticsEnabled ? "bg-primary" : "bg-midgray"
                        }`}
                      />
                    </button>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-2">
                  <Button variant="dark" onClick={handleSavePreferences}>
                    Salva preferenze
                  </Button>
                  <Button variant="outline" onClick={handleAcceptAll}>
                    Accetta tutti
                  </Button>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

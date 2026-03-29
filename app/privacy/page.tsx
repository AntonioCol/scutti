import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Informativa sulla privacy e sui cookie di Scutti Gilberto S.r.l. — trattamento dei dati personali ai sensi del GDPR.",
};

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      {/* Fascia scura fissa sotto la navbar — rende leggibili le scritte chiare */}
      <div className="fixed top-0 left-0 right-0 h-16 sm:h-20 bg-[#2B2B2B] z-40" />
      <main className="bg-sand pt-28 sm:pt-32 pb-24">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-xs tracking-[0.3em] uppercase text-primary font-medium mb-4">
            Informativa legale
          </p>
          <h1 className="font-script text-4xl md:text-5xl text-dark mb-8">
            Privacy Policy
          </h1>
          <div className="w-12 h-[1px] bg-primary mb-12" />

          <div className="prose-scutti space-y-10 text-sm text-midgray leading-relaxed">
            {/* 1 */}
            <section>
              <h2 className="text-lg font-medium text-dark mb-3">
                1. Titolare del trattamento
              </h2>
              <p>
                Il titolare del trattamento dei dati personali è{" "}
                <strong className="text-dark">Scutti Gilberto S.r.l.</strong>, con sede
                in C.da Poggio 25, 66047 Villa Santa Maria (CH), Abruzzo.
              </p>
              <p className="mt-2">
                Email di contatto:{" "}
                <a href="mailto:info@scutti.it" className="text-primary hover:underline">
                  info@scutti.it
                </a>{" "}
                — Telefono:{" "}
                <a href="tel:0872944160" className="text-primary hover:underline">
                  0872.944160
                </a>
              </p>
            </section>

            {/* 2 */}
            <section>
              <h2 className="text-lg font-medium text-dark mb-3">
                2. Tipologie di dati raccolti
              </h2>
              <p className="font-medium text-dark mb-1">Dati forniti volontariamente</p>
              <p>
                Attraverso il modulo di contatto del sito vengono raccolti: nome, cognome,
                indirizzo email, numero di telefono (facoltativo) e il testo del messaggio.
              </p>
              <p className="font-medium text-dark mt-4 mb-1">Dati raccolti automaticamente</p>
              <p>
                Previo consenso dell&apos;utente, il sito utilizza Google Analytics 4 che raccoglie
                dati anonimi e aggregati sulla navigazione: pagine visitate, durata della
                sessione, provenienza del traffico, tipo di dispositivo e browser.
              </p>
            </section>

            {/* 3 */}
            <section>
              <h2 className="text-lg font-medium text-dark mb-3">
                3. Cookie utilizzati
              </h2>
              <div className="border border-[#e0dbd3] overflow-hidden">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-[#F5F2ED]">
                      <th className="text-left px-4 py-2 text-dark font-medium">Cookie</th>
                      <th className="text-left px-4 py-2 text-dark font-medium">Tipo</th>
                      <th className="text-left px-4 py-2 text-dark font-medium">Durata</th>
                      <th className="text-left px-4 py-2 text-dark font-medium">Scopo</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#e0dbd3]">
                    <tr>
                      <td className="px-4 py-2 font-mono text-xs">scutti_cookie_consent</td>
                      <td className="px-4 py-2">Necessario</td>
                      <td className="px-4 py-2">Permanente</td>
                      <td className="px-4 py-2">Salva le preferenze cookie dell&apos;utente</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 font-mono text-xs">_ga</td>
                      <td className="px-4 py-2">Analitico</td>
                      <td className="px-4 py-2">2 anni</td>
                      <td className="px-4 py-2">Google Analytics — distingue gli utenti</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 font-mono text-xs">_ga_*</td>
                      <td className="px-4 py-2">Analitico</td>
                      <td className="px-4 py-2">2 anni</td>
                      <td className="px-4 py-2">Google Analytics — mantiene lo stato della sessione</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="mt-3">
                I cookie analitici vengono installati <strong className="text-dark">solo dopo il
                consenso esplicito</strong> dell&apos;utente tramite il banner cookie.
              </p>
            </section>

            {/* 4 */}
            <section>
              <h2 className="text-lg font-medium text-dark mb-3">
                4. Base giuridica del trattamento
              </h2>
              <ul className="list-disc pl-5 space-y-1">
                <li>
                  <strong className="text-dark">Cookie necessari:</strong> legittimo interesse del
                  titolare al funzionamento del sito (Art. 6(1)(f) GDPR).
                </li>
                <li>
                  <strong className="text-dark">Cookie analitici:</strong> consenso dell&apos;utente
                  (Art. 6(1)(a) GDPR), espresso tramite il banner cookie.
                </li>
                <li>
                  <strong className="text-dark">Dati del modulo di contatto:</strong> esecuzione di
                  misure precontrattuali su richiesta dell&apos;interessato (Art. 6(1)(b) GDPR).
                </li>
              </ul>
            </section>

            {/* 5 */}
            <section>
              <h2 className="text-lg font-medium text-dark mb-3">
                5. Periodo di conservazione
              </h2>
              <p>
                I dati raccolti tramite il modulo di contatto vengono conservati per il tempo
                necessario a gestire la richiesta e comunque non oltre 12 mesi.
                I dati analitici sono conservati da Google per un massimo di 26 mesi.
              </p>
            </section>

            {/* 6 */}
            <section>
              <h2 className="text-lg font-medium text-dark mb-3">
                6. Diritti dell&apos;interessato
              </h2>
              <p>
                Ai sensi degli articoli 15-22 del GDPR, l&apos;utente ha diritto di:
              </p>
              <ul className="list-disc pl-5 space-y-1 mt-2">
                <li>Accedere ai propri dati personali</li>
                <li>Richiederne la rettifica o la cancellazione</li>
                <li>Limitare od opporsi al trattamento</li>
                <li>Richiedere la portabilità dei dati</li>
                <li>Revocare il consenso in qualsiasi momento</li>
                <li>Proporre reclamo al Garante per la protezione dei dati personali</li>
              </ul>
              <p className="mt-3">
                Per esercitare i propri diritti, scrivere a{" "}
                <a href="mailto:info@scutti.it" className="text-primary hover:underline">
                  info@scutti.it
                </a>
                .
              </p>
            </section>

            {/* 7 */}
            <section>
              <h2 className="text-lg font-medium text-dark mb-3">
                7. Gestione dei cookie
              </h2>
              <p>
                L&apos;utente può modificare le proprie preferenze in qualsiasi momento
                cliccando su &quot;Cookie Policy&quot; nel footer del sito, oppure tramite le
                impostazioni del proprio browser.
              </p>
            </section>

            {/* 8 */}
            <section>
              <h2 className="text-lg font-medium text-dark mb-3">
                8. Aggiornamenti
              </h2>
              <p>
                La presente informativa può essere aggiornata periodicamente. L&apos;ultima
                modifica risale a <strong className="text-dark">marzo 2026</strong>.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import legal from "@/components/Utils/Legal";

const Section = ({ section }) => (
  <div className="mb-8">
    <h3 className="text-xl font-semibold text-accent mb-3">{section.heading}</h3>
    {section.paragraphs?.map((p, i) => (
      <p key={i} className="text-white/70 leading-relaxed mb-3">
        {p}
      </p>
    ))}
    {section.bullets && (
      <ul className="list-disc pl-6 space-y-2 text-white/70 leading-relaxed">
        {section.bullets.map((b, i) => (
          <li key={i}>{b}</li>
        ))}
      </ul>
    )}
  </div>
);

const LegalDocument = ({ initialLang = "pt" }) => {
  const [lang, setLang] = useState(initialLang === "en" ? "en" : "pt");
  const t = legal.ui[lang];
  const toggle = () => setLang((l) => (l === "pt" ? "en" : "pt"));

  return (
    <section className="min-h-[70vh] py-12 xl:py-16">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 0.4, duration: 0.4, ease: "easeIn" } }}
        className="container mx-auto max-w-3xl"
      >
        {/* Header */}
        <div className="flex items-start justify-between gap-4 mb-2">
          <h1 className="text-3xl xl:text-4xl font-semibold text-white leading-tight">
            {t.title}
          </h1>
          <button
            onClick={toggle}
            aria-label={t.toggleAria}
            className="shrink-0 px-4 py-2 rounded-full border border-accent text-accent
              hover:bg-accent hover:text-primary transition-all duration-300 text-sm font-medium"
          >
            {t.toggle}
          </button>
        </div>

        <p className="text-white/50 text-sm mb-6">
          {t.updatedLabel}: {legal.updated[lang]}
        </p>

        {/* Anchor nav */}
        <nav className="flex flex-wrap gap-4 mb-10 text-sm">
          <a href="#termos" className="text-white/70 hover:text-accent transition-colors underline underline-offset-4">
            {t.tocTerms}
          </a>
          <a href="#privacidade" className="text-white/70 hover:text-accent transition-colors underline underline-offset-4">
            {t.tocPrivacy}
          </a>
        </nav>

        {/* Terms */}
        <div id="termos" className="scroll-mt-24 mb-14">
          <h2 className="text-2xl xl:text-3xl font-semibold text-white mb-6 border-b border-white/20 pb-3">
            {t.tocTerms}
          </h2>
          {legal.terms[lang].map((section, i) => (
            <Section key={i} section={section} />
          ))}
        </div>

        {/* Privacy */}
        <div id="privacidade" className="scroll-mt-24 mb-14">
          <h2 className="text-2xl xl:text-3xl font-semibold text-white mb-6 border-b border-white/20 pb-3">
            {t.tocPrivacy}
          </h2>
          {legal.privacy[lang].map((section, i) => (
            <Section key={i} section={section} />
          ))}
        </div>

        {/* Contact footer */}
        <div className="border-t border-white/20 pt-6 text-white/70">
          <span className="font-semibold text-white">{t.contactLabel}: </span>
          {t.contactText}{" "}
          <a href={`mailto:${legal.contact}`} className="text-accent hover:underline">
            {legal.contact}
          </a>
          .
        </div>
      </motion.div>
    </section>
  );
};

export default LegalDocument;

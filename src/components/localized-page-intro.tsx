"use client";

import { motion } from "framer-motion";

import { useLanguage } from "@/contexts/language-context";
import { premiumEase } from "@/lib/motion-presets";

type LocalizedPageIntroProps = {
  eyebrowKey: string;
  titleKey: string;
  descriptionKey: string;
  bodyKey?: string;
};

export function LocalizedPageIntro({
  eyebrowKey,
  titleKey,
  descriptionKey,
  bodyKey,
}: LocalizedPageIntroProps) {
  const { t } = useLanguage();

  return (
    <motion.div
      className="container mx-auto max-w-6xl px-4 pb-10 pt-10 sm:px-6 sm:pb-12 sm:pt-14 lg:px-8 lg:pt-16"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, ease: premiumEase }}
    >
      <p className="section-eyebrow">{t(eyebrowKey)}</p>
      <h1 className="section-title mt-4 max-w-3xl text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
        {t(titleKey)}
      </h1>
      <p className="mt-8 max-w-2xl text-lg leading-relaxed tracking-wide text-muted-foreground">
        {t(descriptionKey)}
      </p>
      {bodyKey ? (
        <p className="mt-4 max-w-2xl text-base leading-relaxed tracking-wide text-muted-foreground">
          {t(bodyKey)}
        </p>
      ) : null}
    </motion.div>
  );
}

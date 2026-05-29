"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/language-context";
import { heroFadeUp, heroImageReveal, premiumButtonHover } from "@/lib/motion-presets";
import { cn } from "@/lib/utils";

export function Hero() {
  const { t, locale } = useLanguage();

  return (
    <section className="relative -mt-14 flex min-h-[calc(100dvh-0px)] w-full items-center justify-center overflow-hidden sm:-mt-16">
      <motion.div
        className="absolute inset-0"
        variants={heroImageReveal}
        initial="hidden"
        animate="visible"
      >
        <Image
          src="/Images/exterior/exterior-mainframe.jpg"
          alt={t("hero.imageAlt")}
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
      </motion.div>

      <div
        className="absolute inset-0 bg-gradient-to-b from-brand-navy/90 via-brand-navy/75 to-black/95 dark:from-black/95 dark:via-black/85 dark:to-black"
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-black/25 dark:bg-black/50"
        aria-hidden
      />

      <div
        key={locale}
        className="container relative z-10 mx-auto w-full max-w-2xl px-4 pb-16 pt-24 sm:px-6 sm:pb-20 sm:pt-28 md:pt-32 lg:px-8"
      >
        <motion.h1
          className={cn(
            "section-title text-2xl leading-tight text-white sm:text-4xl md:text-5xl lg:text-6xl",
            locale === "AM" && "leading-snug"
          )}
          variants={heroFadeUp}
          initial="hidden"
          animate="visible"
          custom={0.08}
        >
          {t("hero.greeting")}
        </motion.h1>

        <motion.p
          className={cn(
            "mt-4 text-sm leading-relaxed text-zinc-100 sm:mt-5 sm:text-base md:text-lg lg:text-xl",
            locale === "AM" && "leading-loose"
          )}
          variants={heroFadeUp}
          initial="hidden"
          animate="visible"
          custom={0.18}
        >
          {t("hero.intro")}
        </motion.p>

        <motion.ul
          className="mt-5 space-y-2.5 text-sm leading-relaxed text-zinc-200 sm:mt-6 sm:space-y-3 sm:text-base md:text-lg"
          variants={heroFadeUp}
          initial="hidden"
          animate="visible"
          custom={0.28}
        >
          <li className="flex gap-2">
            <span className="shrink-0 text-brand-gold" aria-hidden>
              ✓
            </span>
            <span className="min-w-0">{t("hero.bullet1")}</span>
          </li>
          <li className="flex gap-2">
            <span className="shrink-0 text-brand-gold" aria-hidden>
              ✓
            </span>
            <span className="min-w-0">{t("hero.bullet2")}</span>
          </li>
        </motion.ul>

        <motion.address
          className="mt-6 space-y-2 text-sm not-italic leading-relaxed text-zinc-300 sm:mt-8 sm:text-base"
          variants={heroFadeUp}
          initial="hidden"
          animate="visible"
          custom={0.38}
        >
          <p className="break-words">{t("hero.address")}</p>
          <p className="flex flex-col gap-1 sm:flex-row sm:flex-wrap sm:gap-4">
            <a
              href={`tel:${t("hero.phone1")}`}
              className="font-medium text-white transition-colors duration-300 hover:text-brand-gold"
            >
              {t("hero.phone1")}
            </a>
            <a
              href={`tel:${t("hero.phone2")}`}
              className="font-medium text-white transition-colors duration-300 hover:text-brand-gold"
            >
              {t("hero.phone2")}
            </a>
          </p>
        </motion.address>

        <motion.div
          className="mt-8 sm:mt-10"
          variants={heroFadeUp}
          initial="hidden"
          animate="visible"
          custom={0.48}
        >
          <Button
            nativeButton={false}
            render={<Link href="/contact" />}
            size="lg"
            className={cn(
              "btn-cta h-11 w-full rounded-full px-6 text-sm sm:h-12 sm:w-auto sm:min-w-[160px] sm:px-8 sm:text-base",
              premiumButtonHover
            )}
          >
            {t("bookNow")}
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

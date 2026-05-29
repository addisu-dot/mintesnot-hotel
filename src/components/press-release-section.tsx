"use client";

import Image from "next/image";
import { ExternalLink, Newspaper } from "lucide-react";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/language-context";
import {
  PRESS_RELEASE_FACEBOOK_URL,
  PRESS_RELEASE_SOURCE,
} from "@/lib/press-release";
import { premiumEase } from "@/lib/motion-presets";
import { cn } from "@/lib/utils";

export function PressReleaseSection() {
  const { t } = useLanguage();

  return (
    <section
      className="border-y border-stone-200/80 bg-stone-100/60 py-20 dark:border-zinc-800/80 dark:bg-zinc-950 sm:py-24 lg:py-28"
      aria-labelledby="press-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="section-eyebrow">{t("press.eyebrow")}</p>
          <h2
            id="press-heading"
            className="section-title mt-4 text-2xl sm:text-3xl md:text-4xl"
          >
            {t("press.title")}
          </h2>
          <p className="mt-6 text-base leading-relaxed tracking-wide text-muted-foreground">
            {t("press.subtitle")}
          </p>
        </div>

        <motion.article
          className={cn(
            "bento-card bento-card-hover group relative mx-auto mt-12 max-w-4xl",
            "ring-1 ring-stone-200/60 dark:ring-zinc-800"
          )}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55, ease: premiumEase }}
        >
          <div
            className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-brand-gold/80 to-transparent"
            aria-hidden
          />

          <div className="relative h-40 w-full overflow-hidden sm:h-48">
            <Image
              src="/Images/exterior/exterior-name.jpg"
              alt=""
              fill
              className="object-cover object-center opacity-90"
              sizes="(max-width: 896px) 100vw, 896px"
            />
            <div
              className="absolute inset-0 bg-gradient-to-t from-stone-100 via-stone-100/80 to-transparent dark:from-stone-900 dark:via-stone-900/85"
              aria-hidden
            />
          </div>

          <div className="relative grid gap-8 p-6 sm:p-8 md:grid-cols-[minmax(0,1fr)_auto] md:gap-10 md:p-10 md:pt-8">
            <div className="space-y-6">
              <div className="flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center gap-2 rounded-full border border-brand-burgundy/25 bg-brand-burgundy/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-navy dark:border-brand-gold/30 dark:bg-brand-gold/10 dark:text-brand-gold">
                  <Newspaper className="size-3.5" aria-hidden />
                  {PRESS_RELEASE_SOURCE}
                </span>
                <span className="text-xs tracking-wide text-muted-foreground">
                  {t("press.featured")}
                </span>
              </div>

              <blockquote className="relative border-l-4 border-brand-gold/50 pl-4 sm:pl-5 dark:border-brand-gold/40">
                <span
                  className="pointer-events-none absolute -left-1 -top-2 font-serif text-5xl leading-none text-brand-gold/20"
                  aria-hidden
                >
                  &ldquo;
                </span>
                <h3 className="section-title text-base leading-snug sm:text-lg md:text-xl lg:text-2xl">
                  <span>{t("press.headlineHotel")}</span>{" "}
                  {t("press.headlineRest")}
                </h3>
                <p className="mt-5 text-sm leading-relaxed tracking-wide text-muted-foreground sm:text-base md:text-lg">
                  <span className="font-bold text-foreground">
                    {t("press.bodyLead")}
                  </span>{" "}
                  {t("press.bodyRest")}
                </p>
              </blockquote>

              <Button
                nativeButton={false}
                render={
                  <a
                    href={PRESS_RELEASE_FACEBOOK_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                  />
                }
                variant="outline"
                className="h-11 w-full rounded-full border-brand-navy/20 bg-stone-50/80 px-6 text-sm font-medium tracking-wide hover:border-brand-gold/40 hover:bg-brand-gold/5 sm:w-auto dark:border-brand-gold/30 dark:bg-zinc-950 dark:hover:bg-brand-gold/10"
              >
                {t("press.viewPost")}
                <ExternalLink data-icon="inline-end" className="size-4" />
              </Button>
            </div>

            <div
              className="hidden flex-col items-center justify-center border-l border-stone-200/80 pl-8 md:flex dark:border-stone-700/50"
              aria-hidden
            >
              <div className="flex size-20 items-center justify-center rounded-2xl border border-brand-gold/20 bg-brand-gold/5 dark:border-brand-gold/25 dark:bg-brand-gold/10">
                <Newspaper className="size-9 text-brand-navy/80 dark:text-brand-gold/90" />
              </div>
              <p className="mt-4 max-w-[8rem] text-center text-xs leading-relaxed tracking-wide text-muted-foreground">
                {t("press.asFeatured")}
              </p>
            </div>
          </div>
        </motion.article>
      </div>
    </section>
  );
}

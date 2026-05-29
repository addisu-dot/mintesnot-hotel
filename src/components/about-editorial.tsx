"use client";

import Link from "next/link";
import { Playfair_Display } from "next/font/google";
import { motion } from "framer-motion";

import { LightboxImage } from "@/components/lightbox-image";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/language-context";
import { cn } from "@/lib/utils";

const ease = [0.22, 1, 0.36, 1] as const;

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-playfair",
});

function EditorialBlock({
  label,
  title,
  paragraphs,
  imageSrc,
  imageAlt,
  imageFirst,
  className,
}: {
  label: string;
  title: string;
  paragraphs: [string, string];
  imageSrc: string;
  imageAlt: string;
  imageFirst: boolean;
  className?: string;
}) {
  const textBlock = (
    <div className="flex flex-col justify-center py-4 lg:py-8">
      <p className="section-eyebrow tracking-[0.24em]">
        {label}
      </p>
      <h2
        className={cn(
          playfair.className,
          "section-title mt-4 text-3xl leading-tight sm:text-4xl lg:text-[2.5rem] lg:leading-[1.15]"
        )}
      >
        {title}
      </h2>
      <div className="mt-6 space-y-5">
        {paragraphs.map((paragraph) => (
          <p
            key={paragraph.slice(0, 24)}
            className="text-base leading-[1.75] text-muted-foreground sm:text-lg"
          >
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  );

  const imageBlock = (
    <motion.div
      className="relative"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.75, ease }}
    >
      <LightboxImage
        src={imageSrc}
        alt={imageAlt}
        caption={imageAlt}
        sizes="(max-width: 1024px) 100vw, 50vw"
        containerClassName="aspect-[4/5] overflow-hidden rounded-sm bg-muted shadow-md ring-1 ring-border/60 dark:ring-border"
        imageClassName="object-cover object-center"
      />
      <div
        className="pointer-events-none absolute -bottom-3 -right-3 -z-10 hidden h-full w-full rounded-sm border border-primary/20 bg-primary/5 lg:block dark:border-primary/30 dark:bg-primary/10"
        aria-hidden
      />
    </motion.div>
  );

  return (
    <div
      className={cn(
        "grid items-center gap-10 lg:grid-cols-2 lg:gap-16 xl:gap-20",
        className
      )}
    >
      <div className={cn(imageFirst ? "lg:order-1" : "lg:order-2")}>
        {imageBlock}
      </div>
      <motion.div
        className={cn(imageFirst ? "lg:order-2" : "lg:order-1")}
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.75, delay: 0.1, ease }}
      >
        {textBlock}
      </motion.div>
    </div>
  );
}

export function AboutEditorial() {
  const { t, locale } = useLanguage();

  return (
    <div className={cn("bg-background text-foreground", playfair.variable)}>
      <div className="mx-auto max-w-6xl px-4 pb-20 sm:px-6 sm:pb-28 lg:px-8">
        <EditorialBlock
          label={t("pages.about.vision.label")}
          title={t("pages.about.vision.title")}
          paragraphs={[
            t("pages.about.vision.paragraph1"),
            t("pages.about.vision.paragraph2"),
          ]}
          imageSrc="/Images/owner/owner-suit.jpg"
          imageAlt={t("pages.about.images.suit")}
          imageFirst
          className="border-b border-border/50 pb-16 pt-4 sm:pb-20 lg:pt-8"
        />

        <motion.blockquote
          className="relative my-16 border-y border-border/60 bg-muted/40 px-6 py-12 text-center dark:bg-muted/20 sm:my-20 sm:px-12 sm:py-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease }}
        >
          <div
            className="mx-auto mb-6 h-px w-12 bg-primary"
            aria-hidden
          />
          <p
            className={cn(
              playfair.className,
              "mx-auto max-w-3xl text-xl leading-relaxed text-foreground sm:text-2xl md:text-3xl md:leading-snug",
              locale === "AM" && "leading-loose"
            )}
          >
            &ldquo;{t("pages.about.pullQuote")}&rdquo;
          </p>
          <footer className="mt-6 text-sm font-medium tracking-wide text-muted-foreground">
            — {t("pages.about.pullQuoteAttribution")}
          </footer>
        </motion.blockquote>

        <div className="my-16 grid gap-8 rounded-2xl border border-border/70 bg-card px-6 py-10 text-center shadow-sm sm:my-20 sm:grid-cols-3 sm:gap-4 sm:px-10 sm:py-12 dark:border-border dark:bg-card">
          <div className="sm:col-span-3">
            <p className="text-5xl font-extralight tracking-tight text-primary sm:text-6xl md:text-7xl">
              {t("pages.about.statValue")}
            </p>
            <p className="mt-2 text-lg font-semibold text-foreground sm:text-xl">
              {t("pages.about.statUnit")}
            </p>
            <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-muted-foreground sm:text-base">
              {t("pages.about.statCaption")}
            </p>
          </div>
        </div>

        <EditorialBlock
          label={t("pages.about.investment.label")}
          title={t("pages.about.investment.title")}
          paragraphs={[
            t("pages.about.investment.paragraph1"),
            t("pages.about.investment.paragraph2"),
          ]}
          imageSrc="/Images/owner/owner-couple.jpg"
          imageAlt={t("pages.about.images.couple")}
          imageFirst={false}
          className="border-b border-border/50 pb-16 sm:pb-20"
        />

        <motion.section
          className="mx-auto max-w-2xl pt-16 text-center sm:pt-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.65, ease }}
        >
          <h2
            className={cn(
              playfair.className,
              "text-2xl font-semibold tracking-tight text-foreground sm:text-3xl"
            )}
          >
            {t("pages.about.closing.title")}
          </h2>
          <p className="mt-5 text-base leading-[1.75] text-muted-foreground sm:text-lg">
            {t("pages.about.closing.paragraph")}
          </p>
          <Button
            nativeButton={false}
            render={<Link href="/contact" />}
            className="mt-10 h-11 rounded-full px-8 text-base font-medium"
          >
            {t("pages.about.cta")}
          </Button>
        </motion.section>
      </div>
    </div>
  );
}

"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/language-context";
import { premiumEase } from "@/lib/motion-presets";
import { cn } from "@/lib/utils";

const exteriorImages = [
  {
    src: "/Images/exterior/exterior-nightview.jpg",
    alt: "Mintesnot Hotel night view under the stars",
    title: "exterior.nightView",
  },
  {
    src: "/Images/exterior/exterior-mainframe.jpg",
    alt: "Mintesnot Hotel main building exterior",
    title: "exterior.mainBuilding",
  },
  {
    src: "/Images/exterior/exterior-afternoonview.jpg",
    alt: "Mintesnot Hotel afternoon view",
    title: "exterior.afternoonView",
  },
  {
    src: "/Images/exterior/exterior-from-inside.jpg",
    alt: "View from inside Mintesnot Hotel",
    title: "exterior.fromInside",
  },
  {
    src: "/Images/exterior/exterior-name.jpg",
    alt: "Mintesnot Hotel signage",
    title: "exterior.signage",
  },
];

// Reusable component for directional scroll animations
function DirectionalText({ children, className }: { children: React.ReactNode; className?: string }) {
  const { scrollY } = useScroll();
  const scrollVelocity = useTransform(scrollY, [0, 100], [0, 1]);
  
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, x: 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: false, margin: "-100px" }}
      transition={{ duration: 0.7, ease: premiumEase }}
    >
      {children}
    </motion.div>
  );
}

export default function ExteriorPage() {
  const { t } = useLanguage();

  return (
    <main className="flex-1">
      {/* Hero Section with Night View */}
      <section className="relative min-h-screen w-full overflow-hidden">
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: premiumEase }}
        >
          <Image
            src="/Images/exterior/exterior-nightview.jpg"
            alt={t("exterior.nightView")}
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
        </motion.div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-brand-navy/90 dark:from-black/70 dark:via-black/50 dark:to-black" />

        {/* Content */}
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 py-32 sm:px-6 sm:py-40 md:py-48 lg:px-8">
          <motion.div
            className="max-w-4xl text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: premiumEase }}
          >
            <motion.p 
              className="section-eyebrow text-brand-gold"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: premiumEase }}
            >
              {t("exterior.eyebrow")}
            </motion.p>
            <motion.h1 
              className="section-title mt-4 text-4xl font-bold text-white sm:text-5xl md:text-6xl lg:text-7xl"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease: premiumEase }}
            >
              {t("exterior.title")}
            </motion.h1>
            <motion.p 
              className="mt-6 text-lg leading-relaxed text-zinc-200 sm:text-xl md:text-2xl"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: premiumEase }}
            >
              {t("exterior.subtitle")}
            </motion.p>
            <motion.div
              className="mt-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7, ease: premiumEase }}
            >
              <Button
                nativeButton={false}
                render={<a href="#gallery" />}
                size="lg"
                className="rounded-full px-8 text-base sm:px-10 sm:text-lg"
              >
                {t("exterior.viewGallery")}
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      <section
        id="gallery"
        className="border-y border-stone-200/80 bg-stone-100/60 py-20 dark:border-zinc-800/80 dark:bg-zinc-950 sm:py-24 lg:py-28"
        aria-labelledby="gallery-heading"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <DirectionalText className="mx-auto max-w-3xl text-center">
            <p className="section-eyebrow">{t("exterior.galleryEyebrow")}</p>
            <h2
              id="gallery-heading"
              className="section-title mt-4 text-2xl sm:text-3xl md:text-4xl"
            >
              {t("exterior.galleryTitle")}
            </h2>
            <motion.p 
              className="mt-6 text-base leading-relaxed tracking-wide text-muted-foreground"
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, margin: "-100px" }}
              transition={{ duration: 0.7, delay: 0.1, ease: premiumEase }}
            >
              {t("exterior.gallerySubtitle")}
            </motion.p>
          </DirectionalText>

          <div className="mt-12 grid gap-6 sm:mt-16 sm:grid-cols-2 lg:grid-cols-3">
            {exteriorImages.map((image, index) => (
              <motion.div
                key={image.src}
                className="group relative overflow-hidden rounded-2xl bg-stone-200 dark:bg-zinc-900"
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, margin: "-60px" }}
                transition={{ duration: 0.55, delay: index * 0.1, ease: premiumEase }}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={image.src}
                    alt={t(image.title)}
                    fill
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <p className="text-sm font-medium text-white sm:text-base">
                      {t(image.title)}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-y border-stone-200/80 bg-stone-50/80 py-20 dark:border-zinc-800/80 dark:bg-zinc-900/50 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <DirectionalText>
            <h2 className="section-title text-2xl sm:text-3xl md:text-4xl">
              {t("exterior.ctaTitle")}
            </h2>
            <motion.p 
              className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg"
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, margin: "-100px" }}
              transition={{ duration: 0.7, delay: 0.1, ease: premiumEase }}
            >
              {t("exterior.ctaSubtitle")}
            </motion.p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button
                nativeButton={false}
                render={<a href="/contact#booking" />}
                size="lg"
                className="w-full rounded-full px-8 text-base sm:w-auto sm:px-10 sm:text-lg"
              >
                {t("bookNow")}
              </Button>
              <Button
                nativeButton={false}
                render={<a href="/rooms" />}
                variant="outline"
                size="lg"
                className="w-full rounded-full px-8 text-base sm:w-auto sm:px-10 sm:text-lg"
              >
                {t("exterior.viewRooms")}
              </Button>
            </div>
          </DirectionalText>
        </div>
      </section>
    </main>
  );
}

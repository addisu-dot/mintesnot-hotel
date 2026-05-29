"use client";

import { motion } from "framer-motion";

import { LightboxImage } from "@/components/lightbox-image";
import { useLanguage } from "@/contexts/language-context";
import { fadeUp } from "@/lib/motion-presets";
import { cn } from "@/lib/utils";

const sectionKeys = [
  { key: "mainHall", image: "/Images/restaurant/restaurant-1.jpg" },
  { key: "breakfast", image: "/Images/restaurant/restaurant-2.jpg" },
  { key: "localFlavors", image: "/Images/restaurant/restaurant-3.jpg" },
  { key: "eveningBar", image: "/Images/restaurant/restaurant-4.jpg" },
  { key: "private", image: "/Images/restaurant/restaurant-5.jpg" },
] as const;

const bentoSpans = [
  "md:col-span-2 md:row-span-2",
  "md:col-span-1",
  "md:col-span-1",
  "md:col-span-1",
  "md:col-span-2",
] as const;

export function RestaurantShowcase() {
  const { t } = useLanguage();

  return (
    <section className="mx-auto max-w-6xl px-4 pb-24 sm:px-6 sm:pb-32 lg:px-8">
      <motion.div
        className="grid grid-cols-1 gap-4 md:grid-cols-3 md:auto-rows-[minmax(220px,auto)] md:gap-5"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-48px" }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.08 } },
        }}
      >
        {sectionKeys.map(({ key, image }, index) => {
          const title = t(`dining.sections.${key}.title`);
          const description = t(`dining.sections.${key}.description`);
          const isFeatured = index === 0;

          return (
            <motion.article
              key={key}
              variants={fadeUp}
              custom={index * 0.06}
              className={cn(
                "group bento-card bento-card-hover flex flex-col",
                bentoSpans[index]
              )}
            >
              <LightboxImage
                src={image}
                alt={title}
                caption={title}
                sizes="(max-width: 768px) 100vw, 33vw"
                containerClassName={cn(
                  "bg-stone-200/60 dark:bg-zinc-950",
                  isFeatured ? "aspect-[16/10] min-h-[200px]" : "aspect-[4/3]"
                )}
                imageClassName="image-zoom-hover object-cover"
              />
              <div className="flex flex-1 flex-col justify-center p-5 sm:p-6">
                <p className="section-eyebrow">{t("dining.label")}</p>
                <h2 className="section-title mt-2 text-xl md:text-2xl">
                  {title}
                </h2>
                <p className="mt-3 text-sm leading-relaxed tracking-wide text-muted-foreground dark:text-zinc-400 sm:text-base">
                  {description}
                </p>
              </div>
            </motion.article>
          );
        })}
      </motion.div>
    </section>
  );
}

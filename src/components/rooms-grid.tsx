"use client";

import { motion } from "framer-motion";

import { LightboxImage } from "@/components/lightbox-image";
import { useLanguage } from "@/contexts/language-context";
import { fadeUp } from "@/lib/motion-presets";
import { ROOM_TYPE_KEYS, type RoomTypeKey } from "@/lib/room-types";
import { cn } from "@/lib/utils";

const roomImages: Record<RoomTypeKey, string> = {
  gardenStandard: "/Images/bed/bed-1.jpg",
  highlandDeluxe: "/Images/bed/bed-2.jpg",
  twinComfort: "/Images/bed/bed-3.jpg",
  familySuite: "/Images/bed/bed-4.jpg",
  executiveRoom: "/Images/bed/bed-5.jpg",
  premiumSuite: "/Images/bed/bed-6.jpg",
};

const bentoSpans = [
  "md:col-span-2 md:row-span-2",
  "md:col-span-1 md:row-span-1",
  "md:col-span-1 md:row-span-1",
  "md:col-span-2 md:row-span-1",
  "md:col-span-1 md:row-span-1",
  "md:col-span-1 md:row-span-1",
] as const;

export function RoomsGrid() {
  const { t } = useLanguage();

  return (
    <section className="mx-auto max-w-6xl px-4 pb-20 sm:px-6 sm:pb-28 lg:px-8">
      <motion.div
        className="grid grid-cols-1 gap-4 md:grid-cols-4 md:auto-rows-[minmax(200px,auto)] md:gap-5"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-40px" }}
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.07, delayChildren: 0.04 },
          },
        }}
      >
        {ROOM_TYPE_KEYS.map((key, index) => (
          <motion.article
            key={key}
            variants={fadeUp}
            custom={index * 0.05}
            className={cn(
              "group bento-card bento-card-hover flex flex-col",
              bentoSpans[index]
            )}
          >
            <LightboxImage
              src={roomImages[key]}
              alt={t(`rooms.types.${key}`)}
              caption={t(`rooms.types.${key}`)}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
              containerClassName={cn(
                "bg-stone-200/60 dark:bg-zinc-950",
                index === 0 ? "aspect-[4/3] md:min-h-[280px]" : "aspect-[4/3]"
              )}
              imageClassName="image-zoom-hover"
            />
            <div className="flex flex-1 flex-col gap-2 p-5 lg:p-6">
              <h2 className="section-title text-lg md:text-xl">
                {t(`rooms.types.${key}`)}
              </h2>
              <p className="text-sm leading-relaxed tracking-wide text-muted-foreground dark:text-zinc-400">
                {t(`rooms.descriptions.${key}`)}
              </p>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}

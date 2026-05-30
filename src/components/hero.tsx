"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform, useMotionValue } from "framer-motion";

import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/language-context";
import { premiumEase, premiumButtonHover } from "@/lib/motion-presets";
import { cn } from "@/lib/utils";

export function Hero() {
  const { t, locale } = useLanguage();

  const { scrollY } = useScroll();
  const scrollYProgress = useMotionValue(0);
  
  // Horizontal scroll OUT animations for Hero elements
  const welcomeX = useTransform(scrollY, [0, 300], [0, -100]);
  const welcomeOpacity = useTransform(scrollY, [0, 300], [1, 0]);
  
  // Title relocation animation - moves up and shrinks to navbar position
  const titleY = useTransform(scrollY, [0, 400], [0, -350]);
  const titleScale = useTransform(scrollY, [0, 400], [1, 0.25]);
  const titleOpacity = useTransform(scrollY, [0, 300], [1, 0]);
  const titleX = useTransform(scrollY, [0, 300], [0, 100]);
  
  const buttonX = useTransform(scrollY, [0, 300], [0, -50]);
  const buttonOpacity = useTransform(scrollY, [0, 300], [1, 0]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: premiumEase,
      },
    },
  };

  return (
    <section className="relative -mt-14 flex min-h-[calc(100dvh-0px)] w-full items-center justify-center overflow-hidden sm:-mt-16">
      {/* Blurred logo watermark background */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 0.15, scale: 1 }}
          transition={{ duration: 1.2, ease: premiumEase }}
          className="relative w-[80vw] max-w-[800px]"
        >
          <Image
            src="/Images/logo/oval-logo.jpg"
            alt=""
            width={0}
            height={0}
            priority
            className="w-auto h-auto object-contain blur-3xl opacity-20"
            sizes="(max-width: 768px) 80vw, 800px"
            style={{ width: 'auto', height: 'auto' }}
          />
        </motion.div>
      </div>

      {/* Subtle gradient overlay for text readability */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60"
        aria-hidden
      />

      <div
        key={locale}
        className="container relative z-10 mx-auto w-full max-w-4xl px-4 pb-16 pt-24 sm:px-6 sm:pb-20 sm:pt-28 md:pt-32 lg:px-8"
      >
        <motion.div
          className="flex flex-col items-center text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Welcome text */}
          <motion.p
            style={{ x: welcomeX, opacity: welcomeOpacity }}
            className="text-sm font-medium tracking-widest uppercase text-brand-gold sm:text-base"
            variants={itemVariants}
          >
            {t("hero.greeting")}
          </motion.p>

          {/* Hotel title - with scroll-triggered relocation */}
          <motion.h1
            layoutId="hero-title"
            style={{ 
              y: titleY, 
              scale: titleScale,
              x: titleX,
              opacity: titleOpacity 
            }}
            className={cn(
              "section-title mt-6 text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl",
              locale === "AM" && "leading-snug"
            )}
            variants={itemVariants}
          >
            {t("brand")}
          </motion.h1>

          {/* Book Now button */}
          <motion.div
            style={{ x: buttonX, opacity: buttonOpacity }}
            className="mt-10"
            variants={itemVariants}
          >
            <Button
              nativeButton={false}
              render={<Link href="/contact#booking" />}
              size="lg"
              className={cn(
                "btn-cta h-12 rounded-full px-8 text-base sm:h-14 sm:min-w-[180px] sm:px-10 sm:text-lg",
                premiumButtonHover
              )}
            >
              {t("bookNow")}
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

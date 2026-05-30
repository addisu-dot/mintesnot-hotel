"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

import { useSplash } from "@/contexts/splash-context";
import { useLanguage } from "@/contexts/language-context";
import { premiumEase } from "@/lib/motion-presets";

const ANIMATION_DURATION = 1500; // Logo scale and move to header
const TEXT_REVEAL_DURATION = 800; // Text fade in
const FINISH_DURATION = 500; // Fade out

export function SplashScreen() {
  const { splashActive, finishSplash } = useSplash();
  const { t, locale } = useLanguage();
  const [phase, setPhase] = useState(1);

  useEffect(() => {
    if (!splashActive) return;

    // Phase 1: Logo animation to header (1.5s)
    const phase2Timer = window.setTimeout(() => {
      setPhase(2);
    }, ANIMATION_DURATION);

    // Phase 2: Text reveal (0.8s)
    const finishTimer = window.setTimeout(() => {
      finishSplash();
    }, ANIMATION_DURATION + TEXT_REVEAL_DURATION);

    return () => {
      window.clearTimeout(phase2Timer);
      window.clearTimeout(finishTimer);
    };
  }, [splashActive, finishSplash]);

  if (!splashActive) return null;

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-white dark:bg-black"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: FINISH_DURATION / 1000, ease: premiumEase }}
      aria-hidden
    >
      <AnimatePresence mode="wait">
        {/* Phase 1: Logo scales down and moves to header position */}
        {phase === 1 && (
          <motion.div
            key="phase1"
            className="absolute inset-0 flex items-center justify-center"
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: premiumEase }}
          >
            <motion.div
              layoutId="brand-logo-image"
              className="relative w-[70vw] max-w-[600px] sm:w-[60vw] sm:max-w-[700px]"
              initial={{ scale: 3, y: 0 }}
              animate={{ scale: 0.4, y: "-45vh" }}
              transition={{
                duration: ANIMATION_DURATION / 1000,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <Image
                src="/Images/logo/oval-logo.jpg"
                alt="Mintesnot Hotel Logo"
                width={0}
                height={0}
                className="w-auto h-auto object-contain"
                sizes="(max-width: 768px) 70vw, 700px"
                priority
                style={{ width: 'auto', height: 'auto' }}
              />
            </motion.div>
          </motion.div>
        )}

        {/* Phase 2: Text reveal after logo settles */}
        {phase === 2 && (
          <motion.div
            key="phase2"
            className="absolute inset-0 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: premiumEase }}
          >
            <motion.div
              className="flex flex-col items-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: TEXT_REVEAL_DURATION / 1000,
                ease: premiumEase,
              }}
            >
              <motion.p
                className="text-4xl font-bold text-brand-navy dark:text-brand-gold sm:text-5xl md:text-6xl text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: TEXT_REVEAL_DURATION / 1000,
                  delay: 0.2,
                  ease: premiumEase,
                }}
              >
                {locale === "AM" ? "ምንተስኖት ሆቴል" : "MINTESNOT HOTEL"}
              </motion.p>
              <motion.p
                className="text-2xl font-medium text-foreground dark:text-zinc-200 sm:text-3xl md:text-4xl text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: TEXT_REVEAL_DURATION / 1000,
                  delay: 0.4,
                  ease: premiumEase,
                }}
              >
                {locale === "AM" ? "MINTESNOT HOTEL" : "ምንተስኖት ሆቴል"}
              </motion.p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

import { useSplash } from "@/contexts/splash-context";
import { useLanguage } from "@/contexts/language-context";
import { premiumEase } from "@/lib/motion-presets";

const PHASE_1_DURATION = 1500; // Fade in
const PHASE_2_DURATION = 1500; // Ascend to header
const PHASE_3_DURATION = 800; // Text slide out

export function SplashScreen() {
  const { splashActive, finishSplash } = useSplash();
  const { t, locale } = useLanguage();
  const [phase, setPhase] = useState(1);

  useEffect(() => {
    if (!splashActive) return;

    // Phase 1: Fade in (1.5s)
    const phase2Timer = window.setTimeout(() => {
      setPhase(2);
    }, PHASE_1_DURATION);

    // Phase 2: Ascend to header (1.5s)
    const phase3Timer = window.setTimeout(() => {
      setPhase(3);
    }, PHASE_1_DURATION + PHASE_2_DURATION);

    // Phase 3: Text slide out and finish (0.8s)
    const finishTimer = window.setTimeout(() => {
      finishSplash();
    }, PHASE_1_DURATION + PHASE_2_DURATION + PHASE_3_DURATION);

    return () => {
      window.clearTimeout(phase2Timer);
      window.clearTimeout(phase3Timer);
      window.clearTimeout(finishTimer);
    };
  }, [splashActive, finishSplash]);

  if (!splashActive) return null;

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: premiumEase }}
      aria-hidden
    >
      {/* Phase 1: Full screen logo fade in */}
      <AnimatePresence mode="wait">
        {phase === 1 && (
          <motion.div
            key="phase1"
            className="absolute inset-0 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: PHASE_1_DURATION / 1000, ease: premiumEase }}
          >
            <motion.div
              className="relative aspect-[4/3] w-[70vw] h-[70vw] max-w-[600px] max-h-[600px] sm:w-[60vw] sm:h-[60vw] sm:max-w-[700px] sm:max-h-[700px] overflow-hidden rounded-[40px]"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: PHASE_1_DURATION / 1000, ease: premiumEase }}
            >
              <Image
                src="/Images/logo/logo.png"
                alt="Mintesnot Hotel Logo"
                fill
                className="object-cover mix-blend-multiply p-0"
                sizes="(max-width: 768px) 70vw, 700px"
                priority
              />
            </motion.div>
          </motion.div>
        )}

        {/* Phase 2: Logo ascends to header position */}
        {phase === 2 && (
          <motion.div
            key="phase2"
            className="absolute inset-0 flex items-center justify-center"
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: premiumEase }}
          >
            <motion.div
              layoutId="brand-logo-image"
              className="relative aspect-[4/3] h-40 w-40 overflow-hidden rounded-[40px] sm:h-48 sm:w-48 md:h-56 md:w-56"
              initial={{ y: 0, scale: 1 }}
              animate={{ y: "-45vh", scale: 0.4 }}
              transition={{ 
                duration: PHASE_2_DURATION / 1000, 
                ease: [0.22, 1, 0.36, 1] 
              }}
            >
              <Image
                src="/Images/logo/logo.png"
                alt="Mintesnot Hotel Logo"
                fill
                className="object-cover mix-blend-multiply p-0"
                sizes="224px"
                priority
              />
            </motion.div>
          </motion.div>
        )}

        {/* Phase 3: Text slides out from logo */}
        {phase === 3 && (
          <motion.div
            key="phase3"
            className="absolute inset-0 flex items-center justify-center pt-32"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: premiumEase }}
          >
            <motion.div
              className="flex flex-col items-center gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: PHASE_3_DURATION / 1000, ease: premiumEase }}
            >
              {/* Amharic text slides from left */}
              <motion.p
                className="text-2xl font-bold text-brand-gold sm:text-3xl md:text-4xl"
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: PHASE_3_DURATION / 1000, ease: premiumEase }}
              >
                {locale === "AM" ? "ምንተስኖት ሆቴል" : ""}
              </motion.p>

              {/* English text slides from right */}
              <motion.p
                className="text-xl font-bold text-white sm:text-2xl md:text-3xl"
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: PHASE_3_DURATION / 1000, ease: premiumEase }}
              >
                {locale === "EN" ? "MINTESNOT HOTEL" : ""}
              </motion.p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

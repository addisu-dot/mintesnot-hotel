"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

import { useSplash } from "@/contexts/splash-context";
import { useLanguage } from "@/contexts/language-context";
import { premiumEase } from "@/lib/motion-presets";

const WOBBLE_DURATION = 2000; // 2 seconds wobble
const TRANSITION_DURATION = 1200; // Move to header
const CRACK_DURATION = 800; // Crack effect
const REVEAL_DURATION = 1000; // Text reveal
const FINISH_DURATION = 500; // Fade out

export function SplashScreen() {
  const { splashActive, finishSplash } = useSplash();
  const { t, locale } = useLanguage();
  const [phase, setPhase] = useState(1);

  useEffect(() => {
    if (!splashActive) return;

    // Phase 1: Wobble (2s)
    const phase2Timer = window.setTimeout(() => {
      setPhase(2);
    }, WOBBLE_DURATION);

    // Phase 2: Transition to header (1.2s)
    const phase3Timer = window.setTimeout(() => {
      setPhase(3);
    }, WOBBLE_DURATION + TRANSITION_DURATION);

    // Phase 3: Crack effect (0.8s)
    const phase4Timer = window.setTimeout(() => {
      setPhase(4);
    }, WOBBLE_DURATION + TRANSITION_DURATION + CRACK_DURATION);

    // Phase 4: Text reveal (1s)
    const finishTimer = window.setTimeout(() => {
      finishSplash();
    }, WOBBLE_DURATION + TRANSITION_DURATION + CRACK_DURATION + REVEAL_DURATION);

    return () => {
      window.clearTimeout(phase2Timer);
      window.clearTimeout(phase3Timer);
      window.clearTimeout(phase4Timer);
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
        {/* Phase 1: Logo wobble at center */}
        {phase === 1 && (
          <motion.div
            key="phase1"
            className="absolute inset-0 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: premiumEase }}
          >
            <motion.div
              className="relative w-[70vw] max-w-[600px] sm:w-[60vw] sm:max-w-[700px]"
              initial={{ scale: 1 }}
              animate={{
                rotate: [0, -3, 3, -2, 2, -1, 1, 0],
                y: [0, -5, 5, -3, 3, -2, 2, 0],
              }}
              transition={{
                duration: WOBBLE_DURATION / 1000,
                times: [0, 0.125, 0.25, 0.375, 0.5, 0.625, 0.75, 1],
                ease: "easeInOut",
                repeat: 0,
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

        {/* Phase 2: Logo transitions to header position */}
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
              className="relative h-40 w-auto sm:h-48 md:h-56"
              initial={{ y: 0, scale: 1 }}
              animate={{ y: "-45vh", scale: 0.4 }}
              transition={{
                duration: TRANSITION_DURATION / 1000,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <Image
                src="/Images/logo/oval-logo.jpg"
                alt="Mintesnot Hotel Logo"
                width={0}
                height={0}
                className="w-auto h-auto object-contain"
                sizes="224px"
                priority
                style={{ width: 'auto', height: 'auto' }}
              />
            </motion.div>
          </motion.div>
        )}

        {/* Phase 3: Crack effect - split logo into two halves */}
        {phase === 3 && (
          <motion.div
            key="phase3"
            className="absolute inset-0 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: premiumEase }}
          >
            <div className="relative w-[70vw] max-w-[600px] sm:w-[60vw] sm:max-w-[700px]">
              {/* Left half */}
              <motion.div
                className="absolute inset-0 overflow-hidden"
                initial={{ x: 0 }}
                animate={{ x: "-20%" }}
                transition={{
                  duration: CRACK_DURATION / 1000,
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

              {/* Right half */}
              <motion.div
                className="absolute inset-0 overflow-hidden"
                initial={{ x: 0 }}
                animate={{ x: "20%" }}
                transition={{
                  duration: CRACK_DURATION / 1000,
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

              {/* Hidden layer behind crack */}
              <motion.div
                className="absolute inset-0 flex items-center justify-center bg-white dark:bg-black"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: CRACK_DURATION / 1000,
                  delay: CRACK_DURATION / 2000,
                  ease: premiumEase,
                }}
              />
            </div>
          </motion.div>
        )}

        {/* Phase 4: Text reveal from center */}
        {phase === 4 && (
          <motion.div
            key="phase4"
            className="absolute inset-0 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: premiumEase }}
          >
            <motion.div
              className="flex flex-col items-center gap-4"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: REVEAL_DURATION / 1000,
                ease: premiumEase,
              }}
            >
              <motion.p
                className="text-4xl font-bold text-brand-navy dark:text-brand-gold sm:text-5xl md:text-6xl text-center"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: REVEAL_DURATION / 1000,
                  delay: 0.2,
                  ease: premiumEase,
                }}
              >
                {locale === "AM" ? "ምንተስኖት ሆቴል" : "MINTESNOT HOTEL"}
              </motion.p>
              <motion.p
                className="text-2xl font-medium text-foreground dark:text-zinc-200 sm:text-3xl md:text-4xl text-center"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: REVEAL_DURATION / 1000,
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

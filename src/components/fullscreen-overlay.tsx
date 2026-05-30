"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

import { useFullScreen } from "@/contexts/fullscreen-context";
import { premiumEase } from "@/lib/motion-presets";

export function FullScreenOverlay() {
  const { isFullScreen, closeFullScreen } = useFullScreen();

  return (
    <AnimatePresence>
      {isFullScreen && (
        <>
          <motion.button
            type="button"
            aria-label="Close full screen"
            className="fixed inset-0 z-[200] bg-black/95 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: premiumEase }}
            onClick={closeFullScreen}
          />

          <motion.div
            className="fixed inset-0 z-[201] flex items-center justify-center p-8"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.4, ease: premiumEase }}
          >
            <button
              type="button"
              className="absolute top-6 right-6 size-12 flex items-center justify-center rounded-full bg-white/10 text-white transition-all duration-300 hover:bg-white/20 hover:scale-110"
              onClick={closeFullScreen}
              aria-label="Close"
            >
              <X className="size-6" />
            </button>

            <div className="relative w-full max-w-2xl">
              <Image
                src="/Images/logo/oval-logo.jpg"
                alt="Mintesnot Hotel Logo"
                width={0}
                height={0}
                className="w-auto h-auto object-contain"
                priority
                sizes="(max-width: 768px) 100vw, 800px"
                style={{ width: 'auto', height: 'auto' }}
              />
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

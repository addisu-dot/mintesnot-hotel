"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { X, ZoomIn } from "lucide-react";
import { useState } from "react";

import {
  Dialog,
  DialogClose,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
} from "@/components/ui/dialog";
import { useLanguage } from "@/contexts/language-context";
import {
  lightboxBackdrop,
  lightboxImage,
  premiumImageZoom,
} from "@/lib/motion-presets";
import { cn } from "@/lib/utils";

export type LightboxImageProps = {
  src: string;
  alt: string;
  sizes?: string;
  priority?: boolean;
  containerClassName?: string;
  imageClassName?: string;
  caption?: string;
};

function toRawPublicPath(src: string): string {
  if (src.startsWith("/")) return src;
  return `/${src.replace(/^\/+/, "")}`;
}

export function LightboxImage({
  src,
  alt,
  sizes = "100vw",
  priority = false,
  containerClassName,
  imageClassName,
  caption,
}: LightboxImageProps) {
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);
  const title = caption ?? alt;
  const rawSrc = toRawPublicPath(src);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={cn(
          "group/lightbox relative block w-full cursor-zoom-in overflow-hidden text-left transition-all duration-300 ease-in-out focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-none",
          containerClassName
        )}
        aria-label={`${t("lightbox.viewLarger")}: ${alt}`}
      >
        <Image
          src={rawSrc}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          className={cn(
            "object-cover",
            premiumImageZoom.replace("group-hover:", "group-hover/lightbox:"),
            imageClassName
          )}
        />
        <span
          className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition-all duration-300 ease-in-out group-hover/lightbox:bg-black/25 group-hover/lightbox:opacity-100 group-focus-visible/lightbox:bg-black/25 group-focus-visible/lightbox:opacity-100"
          aria-hidden
        >
          <span className="flex size-10 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur-sm transition-transform duration-300 ease-in-out group-hover/lightbox:scale-105">
            <ZoomIn className="size-5" />
          </span>
        </span>
      </button>

      <AnimatePresence>
        {open && (
          <DialogPortal>
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center"
              role="presentation"
              initial="initial"
              animate="animate"
              exit="exit"
              variants={lightboxBackdrop}
            >
              <DialogOverlay
                className="absolute inset-0 bg-black/92 backdrop-blur-md dark:bg-black/95"
                onClick={() => setOpen(false)}
              />

              <div
                className="relative z-10 flex h-full w-full items-center justify-center p-3 sm:p-6"
                onClick={() => setOpen(false)}
              >
                <DialogTitle className="sr-only">{title}</DialogTitle>

                <DialogClose
                  className={cn(
                    "absolute top-4 right-4 z-20 flex size-14 items-center justify-center rounded-full",
                    "border border-zinc-600/50 bg-zinc-950/80 text-zinc-100 shadow-lg backdrop-blur-md",
                    "transition-all duration-300 ease-in-out hover:-translate-y-0.5 hover:border-brand-gold/40 hover:bg-zinc-900 focus-visible:ring-2 focus-visible:ring-brand-gold/50 focus-visible:outline-none",
                    "sm:top-6 sm:right-6"
                  )}
                  onClick={(event) => event.stopPropagation()}
                >
                  <X className="size-7 stroke-[1.75]" aria-hidden />
                  <span className="sr-only">{t("lightbox.close")}</span>
                </DialogClose>

                <motion.div
                  key={rawSrc}
                  className="w-full"
                  onClick={(event) => event.stopPropagation()}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  variants={lightboxImage}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={rawSrc}
                    alt={alt}
                    draggable={false}
                    decoding="sync"
                    fetchPriority="high"
                    className="mx-auto h-auto max-h-[90vh] w-full max-w-5xl object-contain"
                  />
                </motion.div>
              </div>
            </motion.div>
          </DialogPortal>
        )}
      </AnimatePresence>
    </Dialog>
  );
}

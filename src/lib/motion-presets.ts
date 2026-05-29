/** Shared easing & spring presets for premium micro-interactions */
export const premiumEase = [0.22, 1, 0.36, 1] as const;

export const springSnappy = {
  type: "spring" as const,
  stiffness: 400,
  damping: 34,
  mass: 0.8,
};

export const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.48,
      delay,
      ease: premiumEase,
    },
  }),
};

/** Hero — slightly slower, cinematic */
export const heroFadeUp = {
  hidden: { opacity: 0, y: 22 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.62,
      delay,
      ease: premiumEase,
    },
  }),
};

export const heroImageReveal = {
  hidden: { opacity: 0, scale: 1.05 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.9, ease: premiumEase },
  },
};

export const lightboxBackdrop = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: { duration: 0.28, ease: premiumEase },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.2, ease: premiumEase },
  },
};

export const lightboxImage = {
  initial: { opacity: 0, scale: 0.92 },
  animate: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.35, ease: premiumEase },
  },
  exit: {
    opacity: 0,
    scale: 0.96,
    transition: { duration: 0.22, ease: premiumEase },
  },
};

export const mobileMenuPanel = {
  initial: { opacity: 0, y: -28 },
  animate: {
    opacity: 1,
    y: 0,
    transition: springSnappy,
  },
  exit: {
    opacity: 0,
    y: -16,
    transition: { duration: 0.22, ease: premiumEase },
  },
};

export const mobileMenuItem = {
  initial: { opacity: 0, x: -12 },
  animate: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: 0.04 + i * 0.04, ...springSnappy },
  }),
};

/** Tailwind class bundles — fast, GPU-friendly hovers */
export const premiumCardHover =
  "transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg hover:shadow-stone-900/8 dark:hover:shadow-black/80 dark:hover:border-zinc-700/80";

export const premiumImageZoom =
  "transition-transform duration-300 ease-in-out group-hover:scale-[1.04]";

export const premiumButtonHover =
  "transition-all duration-300 ease-in-out hover:-translate-y-0.5 hover:shadow-md hover:shadow-brand-navy/10 dark:hover:shadow-black/60 active:translate-y-0 active:scale-[0.98]";

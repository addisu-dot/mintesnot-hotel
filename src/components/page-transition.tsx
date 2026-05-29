"use client";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

import { premiumEase } from "@/lib/motion-presets";

export function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <motion.div
      key={pathname}
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.38, ease: premiumEase }}
      className="flex flex-1 flex-col"
    >
      {children}
    </motion.div>
  );
}

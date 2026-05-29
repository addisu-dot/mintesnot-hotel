"use client";

import { motion } from "framer-motion";

import { SITE_CONTACT } from "@/lib/site-contact";
import { cn } from "@/lib/utils";

type FacebookLinkProps = {
  className?: string;
  iconClassName?: string;
};

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden
      className={className}
      fill="currentColor"
    >
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

export function FacebookLink({ className, iconClassName }: FacebookLinkProps) {
  return (
    <motion.a
      href={SITE_CONTACT.facebookUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Mintesnot Hotel on Facebook"
      className={cn(
        "inline-flex size-11 items-center justify-center rounded-full border border-white/15 bg-white/5",
        className
      )}
      initial="rest"
      whileHover="hover"
      whileTap={{ scale: 0.96 }}
      variants={{
        rest: { scale: 1 },
        hover: { scale: 1.12 },
      }}
      transition={{ type: "spring", stiffness: 400, damping: 18 }}
    >
      <motion.span
        className="flex items-center justify-center"
        variants={{
          rest: { color: "rgba(255, 255, 255, 0.9)" },
          hover: { color: "oklch(0.72 0.1 130)" },
        }}
        transition={{ duration: 0.2 }}
      >
        <FacebookIcon className={cn("size-5", iconClassName)} />
      </motion.span>
    </motion.a>
  );
}

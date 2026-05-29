"use client";

import { MapPin, Phone } from "lucide-react";
import { motion } from "framer-motion";

import { ContactForm } from "@/components/contact-form";
import { MapEmbed } from "@/components/map-embed";
import { useLanguage } from "@/contexts/language-context";
import { premiumEase } from "@/lib/motion-presets";
import { formatPhoneDisplay, SITE_CONTACT } from "@/lib/site-contact";

export function ContactSection() {
  const { t } = useLanguage();

  return (
    <section
      className="mx-auto max-w-6xl px-4 pb-20 sm:px-6 lg:px-8 lg:pb-28"
      aria-labelledby="contact-heading"
    >
      <div className="grid gap-6 lg:grid-cols-2 lg:gap-6">
        <motion.div
          className="bento-card bento-card-hover flex flex-col gap-8 p-6 sm:p-8 lg:p-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.48, ease: premiumEase }}
        >
          <div>
            <p className="section-eyebrow">{t("contact.findUs")}</p>
            <h2
              id="contact-heading"
              className="section-title mt-3 text-2xl sm:text-3xl"
            >
              {t("contact.visitTitle")}
            </h2>
            <p className="mt-4 max-w-md text-base leading-relaxed tracking-wide text-muted-foreground">
              {t("contact.visitDescription")}
            </p>
          </div>

          <ul className="space-y-5 text-sm sm:text-base">
            <li className="flex gap-3">
              <MapPin
                className="mt-0.5 size-5 shrink-0 text-brand-gold dark:text-brand-gold"
                aria-hidden
              />
              <div>
                <p className="font-medium tracking-wide text-foreground">
                  {t("contact.addressLabel")}
                </p>
                <p className="mt-1 leading-relaxed tracking-wide text-muted-foreground">
                  {t("contact.address")}
                </p>
              </div>
            </li>
            <li className="flex gap-3">
              <Phone
                className="mt-0.5 size-5 shrink-0 text-brand-gold dark:text-brand-gold"
                aria-hidden
              />
              <div>
                <p className="font-medium tracking-wide text-foreground">
                  {t("contact.phoneLabel")}
                </p>
                <ul className="mt-1 flex flex-col gap-1">
                  {SITE_CONTACT.phones.map((phone) => (
                    <li key={phone}>
                      <a
                        href={`tel:${phone}`}
                        className="text-muted-foreground transition-colors duration-300 hover:text-brand-gold"
                      >
                        {formatPhoneDisplay(phone)}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          </ul>

          <ContactForm />
        </motion.div>

        <motion.div
          className="bento-card bento-card-hover flex min-h-[280px] flex-col overflow-hidden p-2 lg:min-h-[520px]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.48, delay: 0.08, ease: premiumEase }}
        >
          <MapEmbed />
          <p className="px-4 pb-3 text-center text-xs tracking-wide text-muted-foreground lg:text-left">
            {t("contact.mapNote")}
          </p>
        </motion.div>
      </div>
    </section>
  );
}

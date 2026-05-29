"use client";

import { BookingForm } from "@/components/booking-form";
import { ContactSection } from "@/components/contact-section";
import { LocalizedPageIntro } from "@/components/localized-page-intro";
import { useLanguage } from "@/contexts/language-context";

export function ContactPageContent() {
  const { t } = useLanguage();

  return (
    <>
      <LocalizedPageIntro
        eyebrowKey="pages.contact.eyebrow"
        titleKey="pages.contact.title"
        descriptionKey="pages.contact.description"
      />
      <ContactSection />

      <section
        className="mx-auto max-w-xl border-t border-border/60 px-4 py-14 sm:px-6 lg:px-8 lg:py-20"
        aria-labelledby="booking-heading"
      >
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
          {t("pages.contact.reservationsEyebrow")}
        </p>
        <h2
          id="booking-heading"
          className="mt-3 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl"
        >
          {t("pages.contact.reservationsTitle")}
        </h2>
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">
          {t("pages.contact.reservationsDescription")}
        </p>
        <div className="mt-8">
          <BookingForm />
        </div>
      </section>
    </>
  );
}

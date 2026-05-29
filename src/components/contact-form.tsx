"use client";

import { useMemo, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { useLanguage } from "@/contexts/language-context";
import {
  createContactSchema,
  type ContactFormValues,
} from "@/lib/contact-schema";
import { sendContactEmail } from "@/lib/send-contact";
import { cn } from "@/lib/utils";

export function ContactForm({ className }: { className?: string }) {
  const { t } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const contactSchema = useMemo(
    () =>
      createContactSchema({
        fullNameMin: t("contact.form.validation.fullNameMin"),
        fullNameMax: t("contact.form.validation.fullNameMax"),
        emailInvalid: t("contact.form.validation.emailInvalid"),
        phoneMax: t("contact.form.validation.phoneMax"),
        phoneInvalid: t("contact.form.validation.phoneInvalid"),
        messageMin: t("contact.form.validation.messageMin"),
        messageMax: t("contact.form.validation.messageMax"),
      }),
    [t]
  );

  const defaultValues: ContactFormValues = useMemo(
    () => ({
      fullName: "",
      email: "",
      phone: "",
      message: "",
    }),
    []
  );

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues,
  });

  async function onSubmit(data: ContactFormValues) {
    setIsSubmitting(true);

    try {
      await sendContactEmail(data);
      toast.success(t("contact.form.successTitle"), {
        description: t("contact.form.successDescription"),
      });
      reset(defaultValues);
    } catch {
      toast.error(t("contact.form.errorTitle"), {
        description: t("contact.form.errorDescription"),
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={cn(
        "rounded-2xl border border-border/80 bg-card p-5 shadow-sm sm:p-6 md:p-8",
        className
      )}
      noValidate
    >
      <FieldGroup className="gap-4 sm:gap-5">
        <Field data-invalid={!!errors.fullName}>
          <FieldLabel htmlFor="contact-fullName">
            {t("contact.form.fullName")}
          </FieldLabel>
          <Input
            id="contact-fullName"
            autoComplete="name"
            placeholder={t("contact.form.fullNamePlaceholder")}
            aria-invalid={!!errors.fullName}
            {...register("fullName")}
          />
          <FieldError errors={[errors.fullName]} />
        </Field>

        <div className="grid gap-4 sm:grid-cols-2 sm:gap-5">
          <Field data-invalid={!!errors.email}>
            <FieldLabel htmlFor="contact-email">
              {t("contact.form.email")}
            </FieldLabel>
            <Input
              id="contact-email"
              type="email"
              autoComplete="email"
              placeholder={t("contact.form.emailPlaceholder")}
              aria-invalid={!!errors.email}
              {...register("email")}
            />
            <FieldError errors={[errors.email]} />
          </Field>

          <Field data-invalid={!!errors.phone}>
            <FieldLabel htmlFor="contact-phone">
              {t("contact.form.phone")}{" "}
              <span className="font-normal text-muted-foreground">
                {t("contact.form.phoneOptional")}
              </span>
            </FieldLabel>
            <Input
              id="contact-phone"
              type="tel"
              autoComplete="tel"
              placeholder={t("contact.form.phonePlaceholder")}
              aria-invalid={!!errors.phone}
              {...register("phone")}
            />
            <FieldError errors={[errors.phone]} />
          </Field>
        </div>

        <Field data-invalid={!!errors.message}>
          <FieldLabel htmlFor="contact-message">
            {t("contact.form.message")}
          </FieldLabel>
          <textarea
            id="contact-message"
            rows={4}
            placeholder={t("contact.form.messagePlaceholder")}
            aria-invalid={!!errors.message}
            className="flex min-h-[120px] w-full resize-y rounded-lg border border-input bg-transparent px-2.5 py-2 text-base transition-colors outline-none placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 md:text-sm dark:bg-input/30"
            {...register("message")}
          />
          <FieldError errors={[errors.message]} />
        </Field>

        <Button
          type="submit"
          disabled={isSubmitting}
          className="h-11 w-full rounded-full text-base font-medium sm:w-auto sm:min-w-[180px]"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="animate-spin" data-icon="inline-start" />
              {t("contact.form.sending")}
            </>
          ) : (
            t("contact.form.sendMessage")
          )}
        </Button>
      </FieldGroup>
    </form>
  );
}

import { z } from "zod";

export type ContactValidationMessages = {
  fullNameMin: string;
  fullNameMax: string;
  emailInvalid: string;
  phoneMax: string;
  phoneInvalid: string;
  messageMin: string;
  messageMax: string;
};

export function createContactSchema(messages: ContactValidationMessages) {
  return z.object({
    fullName: z
      .string()
      .min(2, messages.fullNameMin)
      .max(120, messages.fullNameMax),
    email: z.email(messages.emailInvalid),
    phone: z
      .string()
      .max(24, messages.phoneMax)
      .refine(
        (value) => value === "" || /^[\d\s+\-()]+$/.test(value),
        messages.phoneInvalid
      ),
    message: z
      .string()
      .min(10, messages.messageMin)
      .max(2000, messages.messageMax),
  });
}

export type ContactFormValues = z.infer<ReturnType<typeof createContactSchema>>;

import emailjs from "@emailjs/browser";

import type { ContactFormValues } from "@/lib/contact-schema";
import { getEmailJsConfig } from "@/lib/emailjs-config";

/** Sends a general contact message via EmailJS. Recipient is set in the EmailJS dashboard. */
export async function sendContactEmail(data: ContactFormValues): Promise<void> {
  const contactTemplateId =
    process.env.NEXT_PUBLIC_EMAILJS_CONTACT_TEMPLATE_ID ??
    process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
  const { serviceId, templateId, publicKey } =
    getEmailJsConfig(contactTemplateId);

  await emailjs.send(
    serviceId,
    templateId,
    {
      guest_name: data.fullName,
      from_email: data.email,
      phone: data.phone ?? "Not provided",
      message: data.message,
    },
    { publicKey }
  );
}

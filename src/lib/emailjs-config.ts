export function getEmailJsConfig(templateId?: string) {
  const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
  const resolvedTemplateId =
    templateId ?? process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
  const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

  if (!serviceId || !resolvedTemplateId || !publicKey) {
    throw new Error(
      "Email service is not configured. Add EmailJS environment variables."
    );
  }

  return {
    serviceId,
    templateId: resolvedTemplateId,
    publicKey,
  };
}

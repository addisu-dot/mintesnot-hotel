import type { Metadata } from "next";

import { ContactPageContent } from "@/components/contact-page-content";

export const metadata: Metadata = {
  title: "Contact & Book",
  description:
    "Get in touch with Mintesnot Hotel in Durame. Visit us near Abune Teklehaimanot Church or send a message.",
};

export default function ContactPage() {
  return (
    <main className="flex-1">
      <ContactPageContent />
    </main>
  );
}

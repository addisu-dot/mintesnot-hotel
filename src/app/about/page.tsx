import type { Metadata } from "next";

import { AboutEditorial } from "@/components/about-editorial";
import { LocalizedPageIntro } from "@/components/localized-page-intro";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Discover the vision of Ato Tilahun Welde and the story behind Mintesnot Hotel in Durame.",
};

export default function AboutPage() {
  return (
    <main className="flex-1 bg-background text-foreground">
      <LocalizedPageIntro
        eyebrowKey="pages.about.eyebrow"
        titleKey="pages.about.title"
        descriptionKey="pages.about.description"
      />
      <AboutEditorial />
    </main>
  );
}

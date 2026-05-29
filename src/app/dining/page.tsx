import type { Metadata } from "next";

import { LocalizedPageIntro } from "@/components/localized-page-intro";
import { RestaurantShowcase } from "@/components/restaurant-showcase";

export const metadata: Metadata = {
  title: "Restaurant & Bar",
  description:
    "Local flavors, morning coffee, and an easy evening bar at Mintesnot Hotel in Durame.",
};

export default function DiningPage() {
  return (
    <main className="flex-1">
      <LocalizedPageIntro
        eyebrowKey="pages.dining.eyebrow"
        titleKey="pages.dining.title"
        descriptionKey="pages.dining.description"
      />
      <RestaurantShowcase />
    </main>
  );
}

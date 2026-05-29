import type { Metadata } from "next";

import { LocalizedPageIntro } from "@/components/localized-page-intro";
import { RoomsGrid } from "@/components/rooms-grid";

export const metadata: Metadata = {
  title: "Rooms & Suites",
  description:
    "Comfortable rooms and suites at Mintesnot Hotel — your clean, breezy home in Durame.",
};

export default function RoomsPage() {
  return (
    <main className="flex-1">
      <LocalizedPageIntro
        eyebrowKey="pages.rooms.eyebrow"
        titleKey="pages.rooms.title"
        descriptionKey="pages.rooms.description"
      />
      <RoomsGrid />
    </main>
  );
}

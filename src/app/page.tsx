import { Hero } from "@/components/hero";
import { PressReleaseSection } from "@/components/press-release-section";

export default function HomePage() {
  return (
    <main className="flex-1">
      <Hero />
      <PressReleaseSection />
    </main>
  );
}

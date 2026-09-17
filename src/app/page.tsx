import Hero from "@/components/Hero";
import OurStory from "@/components/OurStory";
import MenuHighlights from "@/components/MenuHighlights";
import ReservationBanner from "@/components/ReservationBanner";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <Hero />
      <OurStory />
      <MenuHighlights />
      <ReservationBanner />
    </div>
  );
}

import Hero from "@/components/Hero";
import OurStory from "@/components/OurStory";
import MenuHighlights from "@/components/MenuHighlights";
import Testimonials from "@/components/Testimonials";
import ReservationBanner from "@/components/ReservationBanner";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <Hero />
      <OurStory />
      <MenuHighlights />
      <Testimonials />
      <ReservationBanner />
    </div>
  );
}

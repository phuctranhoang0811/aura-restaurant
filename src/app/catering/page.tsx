import PageHero from "@/components/PageHero";
import Link from "next/link";

export default function CateringPage() {
  return (
    <div className="bg-charcoal text-white min-h-screen">
      <PageHero 
        title="Catering"
        subtitle="Bring the exquisite taste of Aura to your chosen venue."
        imageSrc="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=2000&auto=format&fit=crop"
        imageAlt="Restaurant catering service"
      />

      <div className="max-w-4xl mx-auto px-6 py-20 animate-fade-in-up">
        <div className="bg-charcoal-light p-10 md:p-16 border border-white/5">
          <h2 className="font-serif text-3xl md:text-4xl text-gold mb-6 text-center">Off-site Excellence</h2>
          <p className="text-white/80 mb-10 leading-relaxed text-center max-w-2xl mx-auto">
            Whether you are planning a corporate gala, an elegant wedding, or an intimate private home dinner, our catering team ensures a seamless delivery of the Aura experience. We provide custom menu curation, professional staff, and aesthetic plating that matches our restaurant standards.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="border-l-2 border-gold pl-6">
              <h3 className="font-serif text-xl text-gold-light mb-2">Custom Tasting Menus</h3>
              <p className="text-sm text-white/60">Tailored courses designed specifically for your event&apos;s theme and dietary needs.</p>
            </div>
            <div className="border-l-2 border-gold pl-6">
              <h3 className="font-serif text-xl text-gold-light mb-2">Live Stations</h3>
              <p className="text-sm text-white/60">Interactive Sushi and Robata Grill stations featuring our expert chefs.</p>
            </div>
            <div className="border-l-2 border-gold pl-6">
              <h3 className="font-serif text-xl text-gold-light mb-2">Premium Pairings</h3>
              <p className="text-sm text-white/60">Curated sake, wine, and craft cocktail packages selected by our sommelier.</p>
            </div>
            <div className="border-l-2 border-gold pl-6">
              <h3 className="font-serif text-xl text-gold-light mb-2">Full Service</h3>
              <p className="text-sm text-white/60">Complete setup, breakdown, and dedicated service staff for a flawless event.</p>
            </div>
          </div>

          <div className="text-center">
            <Link href="/contact" className="inline-block bg-crimson hover:bg-red-800 text-white px-10 py-4 uppercase tracking-widest text-sm transition-colors shadow-lg">
              Request a Proposal
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

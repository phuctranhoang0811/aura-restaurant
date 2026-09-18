import PageHero from "@/components/PageHero";
import Link from "next/link";

export default function BanquetFacilitiesPage() {
  return (
    <div className="bg-charcoal text-white min-h-screen">
      <PageHero 
        title="Banquet Facilities"
        subtitle="Elegant private spaces for your most cherished celebrations."
        imageSrc="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2000&auto=format&fit=crop"
        imageAlt="Banquet Dining Room"
      />

      <div className="max-w-5xl mx-auto px-6 py-20 animate-fade-in-up">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-charcoal-light p-10 border border-white/5 hover:border-gold/30 transition-colors">
            <h2 className="font-serif text-3xl text-gold mb-2">The Lotus Room</h2>
            <p className="text-sm text-white/50 mb-6 uppercase tracking-widest">Capacity: up to 20 Guests</p>
            <p className="text-white/80 mb-6 leading-relaxed">
              An intimate setting enclosed by authentic shoji screens, perfect for family gatherings, private tasting menus, or high-level executive dinners. Features a dedicated service staff and customizable lighting.
            </p>
          </div>
          <div className="bg-charcoal-light p-10 border border-white/5 hover:border-gold/30 transition-colors">
            <h2 className="font-serif text-3xl text-gold mb-2">The Bamboo Pavilion</h2>
            <p className="text-sm text-white/50 mb-6 uppercase tracking-widest">Capacity: up to 60 Guests</p>
            <p className="text-white/80 mb-6 leading-relaxed">
              A sprawling room offering panoramic views of our indoor Zen garden. Ideal for wedding receptions, large corporate milestones, or product launches. Includes full audiovisual capabilities.
            </p>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <Link href="/contact" className="inline-block bg-transparent border border-gold text-gold hover:bg-gold hover:text-charcoal px-10 py-4 uppercase tracking-widest transition-colors">
            Inquire for Availability
          </Link>
        </div>
      </div>
    </div>
  );
}

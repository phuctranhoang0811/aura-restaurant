import PageHero from "@/components/PageHero";
import Image from "next/image";
import Link from "next/link";

export default function MenuKitsPage() {
  return (
    <div className="bg-charcoal text-white min-h-screen">
      <PageHero 
        title="Menu Kits"
        subtitle="Bring the Aura experience to your own kitchen."
        imageSrc="https://images.unsplash.com/photo-1627308595229-7830f5c90683?q=80&w=2000&auto=format&fit=crop"
        imageAlt="Aura At Home Menu Kits"
      />

      <div className="max-w-6xl mx-auto px-6 py-20 animate-fade-in-up">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="relative aspect-[4/3] w-full overflow-hidden border border-white/10">
            <Image 
              src="https://images.unsplash.com/photo-1547592180-85f173990554?q=80&w=800&auto=format&fit=crop" 
              alt="Beautifully packaged Menu Kit" 
              fill
              className="object-cover" 
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="flex flex-col justify-center">
            <span className="text-gold tracking-[0.3em] uppercase text-xs font-sans mb-4 block">Aura At Home</span>
            <h2 className="font-serif text-4xl text-white mb-6">Master Chef Quality, <br/><span className="italic text-gold-light">Delivered</span></h2>
            <p className="text-white/80 mb-6 leading-relaxed">
              Our curated Menu Kits include pre-measured premium ingredients, signature sauces, and step-by-step instructions from Chef Kenji. Perfect for a special date night or a thoughtful culinary gift.
            </p>
            <ul className="space-y-3 mb-8 text-white/70">
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 bg-gold rounded-full"></span> Signature Wagyu Kit (Serves 2)
              </li>
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 bg-gold rounded-full"></span> Premium Sushi Making Kit (Serves 2-4)
              </li>
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 bg-gold rounded-full"></span> Vegetarian Truffle Dim Sum Kit
              </li>
            </ul>
            <p className="text-white/40 text-xs mb-8">
              * Kits are available for pick-up only. No online payments are processed on this site.
            </p>
            <div>
              <Link href="/contact" className="inline-block border border-gold text-gold hover:bg-gold hover:text-charcoal px-10 py-4 uppercase tracking-widest text-sm transition-colors">
                Inquire to Order
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

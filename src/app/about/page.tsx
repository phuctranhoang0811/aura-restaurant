import Image from "next/image";
import PageHero from "@/components/PageHero";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="bg-charcoal text-white">
      <PageHero
        title="Our Story"
        subtitle="A harmonious blend of centuries-old tradition and modern culinary innovation."
        imageSrc="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070&auto=format&fit=crop"
        imageAlt="Elegant restaurant dining table with dim lighting"
      />

      <div className="max-w-5xl mx-auto px-6 py-20 animate-fade-in-up">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-24">
          <div className="relative aspect-[3/4] overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1581299894007-aaa50297cf16?q=80&w=800&auto=format&fit=crop"
              alt="Chef Kenji Yamamoto preparing a dish"
              fill
              className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div>
            <span className="text-gold tracking-[0.3em] uppercase text-xs font-sans mb-4 block">Our Philosophy</span>
            <h2 className="font-serif text-3xl text-gold-light mb-6">Zen Minimalism Meets Bold Flavors</h2>
            <p className="text-white/75 leading-relaxed mb-6">
              At Aura, we believe that food is an art form that speaks to the soul. Rooted in the rich culinary heritage of Asia, our approach is defined by Zen minimalism—where every ingredient is purposeful, and every flavor profile is meticulously balanced.
            </p>
            <p className="text-white/75 leading-relaxed">
              We source the finest seasonal ingredients, ensuring that our Modern Asian Fusion concept remains deeply rooted in respect for nature, tradition, and craftsmanship.
            </p>
          </div>
        </div>

        <div className="border-t border-white/10 pt-20 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-gold tracking-[0.3em] uppercase text-xs font-sans mb-4 block">The Chef</span>
            <h2 className="font-serif text-3xl text-gold-light mb-6">Master Chef Kenji Yamamoto</h2>
            <p className="text-white/75 leading-relaxed mb-6">
              With over two decades of experience in Michelin-starred kitchens across Kyoto, Tokyo, and Hong Kong, Chef Kenji&apos;s vision is to present dishes that are as visually breathtaking as they are delicious.
            </p>
            <p className="text-white/75 leading-relaxed mb-8">
              His philosophy: strip away the unnecessary, honor the ingredient, and let the culture speak through every plate.
            </p>
            <Link
              href="/reservations"
              className="inline-block border border-gold text-gold uppercase tracking-widest text-xs px-8 py-3 hover:bg-gold hover:text-charcoal transition-all duration-300"
            >
              Reserve Your Evening
            </Link>
          </div>
          <div className="relative aspect-[3/4] overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?q=80&w=800&auto=format&fit=crop"
              alt="Beautifully plated Asian fusion dish"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

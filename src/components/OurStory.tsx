import Link from "next/link";
import Image from "next/image";

export default function OurStory() {
  return (
    <section className="py-24 px-6 bg-charcoal relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Image Side */}
          <div className="w-full lg:w-1/2 relative">
            <div className="aspect-[4/5] relative w-full overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=2000&auto=format&fit=crop"
                alt="Aura restaurant interior with elegant Asian decor"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            {/* Gold accent decoration — desktop */}
            <div className="hidden md:block absolute -bottom-8 -right-8 w-48 h-48 border-r-2 border-b-2 border-gold z-0" />
            {/* Gold accent decoration — mobile replacement */}
            <div className="md:hidden mt-6 flex justify-center">
              <div className="w-16 h-px bg-gold" />
            </div>
          </div>

          {/* Text Side */}
          <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left z-10">
            <span className="text-gold tracking-[0.3em] uppercase text-xs font-sans mb-4 block">
              Discover Our Roots
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-white mb-8">
              A Legacy of <br />
              <span className="italic text-gold-light">Taste & Tradition</span>
            </h2>
            <p className="text-white/70 font-sans leading-relaxed mb-6">
              Born from a passion for authentic Asian culinary arts, Aura seamlessly blends centuries-old techniques with contemporary flair. Every dish is a testament to the balance of flavors, textures, and aromas.
            </p>
            <p className="text-white/70 font-sans leading-relaxed mb-10">
              We source the finest seasonal ingredients, ensuring that our Modern Asian Fusion concept remains deeply rooted in respect for nature and craftsmanship.
            </p>
            <Link
              href="/about"
              className="uppercase tracking-[0.2em] text-sm text-gold border-b border-gold pb-1 hover:text-white hover:border-white transition-colors"
            >
              Read Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

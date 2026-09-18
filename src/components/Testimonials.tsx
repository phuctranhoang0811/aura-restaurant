import Link from "next/link";

const TESTIMONIALS = [
  {
    quote: "An extraordinary dining experience. Aura redefines what modern Asian cuisine can be — every dish is a work of art.",
    author: "James Lin",
    role: "Food Critic, Asian Culinary Review",
  },
  {
    quote: "The Miso Glazed Black Cod alone is worth the trip. Aura is, without doubt, one of the finest restaurants in the city.",
    author: "Sophie Chambers",
    role: "Editor, Gourmet & Travel Magazine",
  },
  {
    quote: "Zen-like ambiance, impeccable service, and flavors that transport you straight to Kyoto. A truly unforgettable evening.",
    author: "Marcus Nguyen",
    role: "Michelin Guide Inspector",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 px-6 bg-charcoal">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-gold tracking-[0.3em] uppercase text-xs font-sans mb-4 block">
            Press & Praise
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-white">
            What They&apos;re <span className="italic text-gold-light">Saying</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, i) => (
            <div
              key={i}
              className="flex flex-col justify-between bg-charcoal-light p-8 border border-white/5 hover:border-gold/30 transition-colors duration-300"
            >
              <p className="font-serif text-lg text-white/80 leading-relaxed mb-8 italic">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div>
                <div className="w-8 h-px bg-gold mb-4" />
                <p className="font-sans text-sm text-gold tracking-wide">{t.author}</p>
                <p className="font-sans text-xs text-white/40 mt-1">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

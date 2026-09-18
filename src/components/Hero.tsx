import Link from "next/link";

export default function Hero() {
  return (
    <div className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1553621042-f6e147245754?q=80&w=2525&auto=format&fit=crop')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/60 to-charcoal/30" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto flex flex-col items-center animate-fade-in-up">
        <span className="text-gold tracking-[0.4em] uppercase text-xs font-sans mb-6 block">
          A Culinary Journey
        </span>

        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white mb-6 leading-tight drop-shadow-xl">
          Elegance in <br />
          <span className="text-gold italic">Every Bite</span>
        </h1>

        <p className="font-sans text-white/75 text-base md:text-lg max-w-xl mx-auto mb-10 leading-relaxed">
          Experience the harmony of traditional Asian flavors reimagined with a modern, minimalist touch.
        </p>

        <Link
          href="/reservations"
          className="inline-block bg-crimson hover:bg-red-800 text-white font-sans text-xs tracking-widest uppercase px-10 py-4 transition-all duration-300 border border-crimson hover:border-red-800 hover:shadow-lg hover:shadow-crimson/20"
        >
          Book a Table
        </Link>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce-scroll">
        <span className="text-white/40 text-[0.6rem] tracking-[0.2em] uppercase">Scroll</span>
        <svg className="w-5 h-5 text-gold/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </div>
  );
}

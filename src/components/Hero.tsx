import Link from "next/link";

export default function Hero() {
  return (
    <div className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image Setup */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1553621042-f6e147245754?q=80&w=2525&auto=format&fit=crop')"
        }}
      >
        {/* Dark overlay for cinematic effect */}
        <div className="absolute inset-0 bg-charcoal/70 bg-gradient-to-t from-charcoal via-transparent to-charcoal/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto flex flex-col items-center">
        <span className="text-gold tracking-[0.4em] uppercase text-sm font-sans mb-6 block">
          A Culinary Journey
        </span>
        
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white mb-6 leading-tight drop-shadow-xl">
          Elegance in <br />
          <span className="text-gold italic">Every Bite</span>
        </h1>
        
        <p className="font-sans text-white/80 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          Experience the harmony of traditional Asian flavors reimagined with a modern, minimalist touch.
        </p>

        <Link 
          href="/reservations"
          className="inline-block bg-crimson hover:bg-red-800 text-white font-sans text-sm tracking-widest uppercase px-10 py-4 transition-all duration-300 border border-crimson hover:border-red-800"
        >
          Book a Table
        </Link>
      </div>
    </div>
  );
}

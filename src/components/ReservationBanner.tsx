import Link from "next/link";

export default function ReservationBanner() {
  return (
    <section className="relative py-32 px-6 overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?q=80&w=2000&auto=format&fit=crop')" }}
      />
      <div className="absolute inset-0 bg-black/70" />
      
      <div className="relative z-10 max-w-3xl mx-auto text-center flex flex-col items-center">
        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-tight">
          Join Us for an <br className="hidden md:block" />
          <span className="italic text-gold">Unforgettable Evening</span>
        </h2>
        <p className="font-sans text-white/80 mb-10 text-lg">
          Reserve your table now to secure a spot at our highly acclaimed dining room.
        </p>
        <Link 
          href="/reservations"
          className="bg-crimson hover:bg-red-800 text-white font-sans text-sm tracking-widest uppercase px-12 py-4 transition-all duration-300 border border-crimson hover:border-red-800"
        >
          Book Your Table
        </Link>
      </div>
    </section>
  );
}

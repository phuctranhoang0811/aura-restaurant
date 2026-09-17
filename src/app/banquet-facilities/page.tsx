
export default function Page() {
  return (
    <div className="min-h-screen bg-charcoal text-white pt-32 pb-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="font-serif text-4xl md:text-6xl text-gold mb-6">{ "Banquet Facilities" }</h1>
          <p className="font-sans text-lg text-white/70 max-w-2xl mx-auto">{ "Elegant private spaces for your most cherished celebrations." }</p>
        </div>
        <div className="animate-fade-in-up">
          
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
      <div className="bg-charcoal-light p-8 border border-white/10">
        <h2 className="font-serif text-3xl text-gold mb-2">The Lotus Room</h2>
        <p className="text-sm text-white/50 mb-6 uppercase tracking-widest">Capacity: 20 Guests</p>
        <p className="text-white/80 mb-6">An intimate setting enclosed by shoji screens, perfect for family gatherings or high-level executive dinners. Features a dedicated service staff.</p>
      </div>
      <div className="bg-charcoal-light p-8 border border-white/10">
        <h2 className="font-serif text-3xl text-gold mb-2">The Bamboo Pavilion</h2>
        <p className="text-sm text-white/50 mb-6 uppercase tracking-widest">Capacity: 60 Guests</p>
        <p className="text-white/80 mb-6">A sprawling room offering panoramic views of our indoor Zen garden. Ideal for wedding receptions or large corporate milestones.</p>
      </div>
    </div>
    <div className="mt-12 text-center">
      <a href="/contact" className="inline-block bg-transparent border border-gold text-gold hover:bg-gold hover:text-charcoal px-8 py-3 uppercase tracking-widest transition-colors">Inquire for Availability</a>
    </div>
    
        </div>
      </div>
    </div>
  );
}

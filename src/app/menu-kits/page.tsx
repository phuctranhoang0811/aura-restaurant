
export default function Page() {
  return (
    <div className="min-h-screen bg-charcoal text-white pt-32 pb-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="font-serif text-4xl md:text-6xl text-gold mb-6">{ "Menu Kits" }</h1>
          <p className="font-sans text-lg text-white/70 max-w-2xl mx-auto">{ "Bring the Aura experience to your own kitchen." }</p>
        </div>
        <div className="animate-fade-in-up">
          
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
      <div>
        <img src="https://images.unsplash.com/photo-1627308595229-7830f5c90683?q=80&w=800&auto=format&fit=crop" alt="Menu Kit" className="w-full h-80 object-cover mb-6" />
      </div>
      <div className="flex flex-col justify-center">
        <h2 className="font-serif text-3xl text-gold mb-4">Aura At Home</h2>
        <p className="text-white/80 mb-6 leading-relaxed">Our curated Menu Kits include pre-measured premium ingredients, signature sauces, and step-by-step instructions from Chef Kenji. Perfect for a special date night or a thoughtful gift.</p>
        <p className="text-white/60 text-sm mb-8">* Kits are available for pick-up only. No online payments are processed on this site.</p>
        <a href="/contact" className="inline-block text-center border border-gold text-gold hover:bg-gold hover:text-charcoal px-8 py-4 uppercase tracking-widest transition-colors">Inquire to Order</a>
      </div>
    </div>
    
        </div>
      </div>
    </div>
  );
}

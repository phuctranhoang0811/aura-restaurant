
export default function Page() {
  return (
    <div className="min-h-screen bg-charcoal text-white pt-32 pb-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="font-serif text-4xl md:text-6xl text-gold mb-6">{ "Gallery" }</h1>
          <p className="font-sans text-lg text-white/70 max-w-2xl mx-auto">{ "A visual journey through the Aura experience." }</p>
        </div>
        <div className="animate-fade-in-up">
          
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <img src="https://images.unsplash.com/photo-1553621042-f6e147245754?q=80&w=600&auto=format&fit=crop" className="w-full h-64 object-cover hover:opacity-75 transition-opacity" />
      <img src="https://images.unsplash.com/photo-1559314809-0d155014e29e?q=80&w=600&auto=format&fit=crop" className="w-full h-64 object-cover hover:opacity-75 transition-opacity" />
      <img src="https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=600&auto=format&fit=crop" className="w-full h-64 object-cover hover:opacity-75 transition-opacity" />
      <img src="https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?q=80&w=600&auto=format&fit=crop" className="w-full h-64 object-cover md:col-span-2 hover:opacity-75 transition-opacity" />
      <img src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=600&auto=format&fit=crop" className="w-full h-64 object-cover hover:opacity-75 transition-opacity" />
    </div>
    
        </div>
      </div>
    </div>
  );
}


export default function Page() {
  return (
    <div className="min-h-screen bg-charcoal text-white pt-32 pb-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="font-serif text-4xl md:text-6xl text-gold mb-6">{ "Hosting Services" }</h1>
          <p className="font-sans text-lg text-white/70 max-w-2xl mx-auto">{ "Comprehensive event planning at Aura." }</p>
        </div>
        <div className="animate-fade-in-up">
          
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="font-serif text-3xl text-gold mb-8">Beyond Dining</h2>
      <p className="text-white/80 text-lg leading-relaxed mb-12">When you choose Aura for your private event, you receive more than just an exquisite venue. Our dedicated events team provides comprehensive hosting services to ensure your gathering is flawless from conception to execution.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="p-6 border border-white/10 bg-charcoal-light">
          <h3 className="text-gold font-serif text-xl mb-4">Event Planning</h3>
          <p className="text-sm text-white/70">A dedicated coordinator to manage timelines, decor, and special requests.</p>
        </div>
        <div className="p-6 border border-white/10 bg-charcoal-light">
          <h3 className="text-gold font-serif text-xl mb-4">Custom Menus</h3>
          <p className="text-sm text-white/70">Work directly with our Chef to design a menu tailored to your guests' preferences.</p>
        </div>
        <div className="p-6 border border-white/10 bg-charcoal-light">
          <h3 className="text-gold font-serif text-xl mb-4">A/V & Tech</h3>
          <p className="text-sm text-white/70">State-of-the-art audiovisual equipment for presentations and entertainment.</p>
        </div>
      </div>
    </div>
    
        </div>
      </div>
    </div>
  );
}


export default function Page() {
  return (
    <div className="min-h-screen bg-charcoal text-white pt-32 pb-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="font-serif text-4xl md:text-6xl text-gold mb-6">{ "Catering" }</h1>
          <p className="font-sans text-lg text-white/70 max-w-2xl mx-auto">{ "Bring the exquisite taste of Aura to your chosen venue." }</p>
        </div>
        <div className="animate-fade-in-up">
          
    <div className="max-w-3xl mx-auto bg-charcoal-light p-10 border border-white/10">
      <h2 className="font-serif text-3xl text-gold mb-6">Off-site Excellence</h2>
      <p className="text-white/80 mb-8 leading-relaxed">Whether you are planning a corporate gala, an elegant wedding, or a private home dinner, our catering team ensures a seamless delivery of the Aura experience. We provide custom menu curation, professional staff, and aesthetic plating that matches our restaurant standards.</p>
      <ul className="list-disc pl-5 mb-8 text-white/70 space-y-2">
        <li>Customizable Tasting Menus</li>
        <li>Live Sushi & Robata Grill Stations</li>
        <li>Premium Beverage & Sake Pairing</li>
        <li>Full Setup & Breakdown Services</li>
      </ul>
      <a href="/contact" className="inline-block bg-crimson hover:bg-red-800 text-white px-8 py-3 uppercase tracking-widest transition-colors">Request a Proposal</a>
    </div>
    
        </div>
      </div>
    </div>
  );
}

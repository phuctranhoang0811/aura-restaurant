
export default function Page() {
  return (
    <div className="min-h-screen bg-charcoal text-white pt-32 pb-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="font-serif text-4xl md:text-6xl text-gold mb-6">{ "Online Reservation" }</h1>
          <p className="font-sans text-lg text-white/70 max-w-2xl mx-auto">{ "Secure your table for an unforgettable dining experience." }</p>
        </div>
        <div className="animate-fade-in-up">
          
    <div className="max-w-3xl mx-auto">
      <p className="text-center text-white/70 mb-10">Please note that this form submits a reservation inquiry. Our team will contact you to confirm your table.</p>
      <form className="bg-charcoal-light p-8 md:p-12 border border-white/10 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input type="text" placeholder="Full Name" className="w-full bg-transparent border border-white/20 p-4 text-white focus:outline-none focus:border-gold" />
          <input type="tel" placeholder="Phone Number" className="w-full bg-transparent border border-white/20 p-4 text-white focus:outline-none focus:border-gold" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <input type="date" className="w-full bg-transparent border border-white/20 p-4 text-white focus:outline-none focus:border-gold" />
          <input type="time" className="w-full bg-transparent border border-white/20 p-4 text-white focus:outline-none focus:border-gold" />
          <select className="w-full bg-transparent border border-white/20 p-4 text-white focus:outline-none focus:border-gold appearance-none">
            <option className="bg-charcoal">2 Guests</option>
            <option className="bg-charcoal">3 Guests</option>
            <option className="bg-charcoal">4 Guests</option>
            <option className="bg-charcoal">5+ Guests</option>
          </select>
        </div>
        <textarea placeholder="Special Requests (Allergies, Occasion, etc.)" rows="3" className="w-full bg-transparent border border-white/20 p-4 text-white focus:outline-none focus:border-gold"></textarea>
        <button type="button" className="w-full bg-crimson hover:bg-red-800 text-white font-bold px-8 py-4 uppercase tracking-widest transition-colors">Submit Request</button>
      </form>
    </div>
    
        </div>
      </div>
    </div>
  );
}

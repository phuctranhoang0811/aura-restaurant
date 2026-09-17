
export default function Page() {
  return (
    <div className="min-h-screen bg-charcoal text-white pt-32 pb-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="font-serif text-4xl md:text-6xl text-gold mb-6">{ "Visiting Hours" }</h1>
          <p className="font-sans text-lg text-white/70 max-w-2xl mx-auto">{ "Plan your visit to Aura." }</p>
        </div>
        <div className="animate-fade-in-up">
          
    <div className="max-w-2xl mx-auto bg-charcoal-light p-10 border border-white/10 text-center">
      <h2 className="font-serif text-3xl text-gold mb-8">Operating Schedule</h2>
      <div className="space-y-6 text-lg">
        <div className="flex justify-between border-b border-white/10 pb-2">
          <span className="text-white/80">Monday - Thursday</span>
          <span className="text-gold">5:00 PM - 10:00 PM</span>
        </div>
        <div className="flex justify-between border-b border-white/10 pb-2">
          <span className="text-white/80">Friday & Saturday</span>
          <span className="text-gold">5:00 PM - 11:30 PM</span>
        </div>
        <div className="flex justify-between border-b border-white/10 pb-2">
          <span className="text-white/80">Sunday</span>
          <span className="text-gold">4:00 PM - 9:30 PM</span>
        </div>
      </div>
      <p className="mt-8 text-sm text-white/50">* We are closed on major national holidays. For special event hours, please contact us directly.</p>
    </div>
    
        </div>
      </div>
    </div>
  );
}

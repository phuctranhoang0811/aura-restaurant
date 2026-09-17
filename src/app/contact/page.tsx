
export default function Page() {
  return (
    <div className="min-h-screen bg-charcoal text-white pt-32 pb-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="font-serif text-4xl md:text-6xl text-gold mb-6">{ "Contact Us" }</h1>
          <p className="font-sans text-lg text-white/70 max-w-2xl mx-auto">{ "We are here to assist you with any inquiries." }</p>
        </div>
        <div className="animate-fade-in-up">
          
    <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
      <div>
        <h3 className="font-serif text-2xl text-gold mb-4">Get in Touch</h3>
        <p className="text-white/70 mb-8">For general questions, feedback, or special requests, please use the form or reach out directly.</p>
        <p className="text-white/80 mb-2"><strong>Address:</strong> 123 Culinary Avenue, Metro City, 90210</p>
        <p className="text-white/80 mb-2"><strong>Email:</strong> reservations@aurarestaurant.com</p>
        <p className="text-white/80 mb-8"><strong>Phone:</strong> +1 (555) 123-4567</p>
      </div>
      <form className="space-y-4">
        <input type="text" placeholder="Full Name" className="w-full bg-transparent border border-white/20 p-4 text-white focus:outline-none focus:border-gold" />
        <input type="email" placeholder="Email Address" className="w-full bg-transparent border border-white/20 p-4 text-white focus:outline-none focus:border-gold" />
        <textarea placeholder="Your Message" rows="5" className="w-full bg-transparent border border-white/20 p-4 text-white focus:outline-none focus:border-gold"></textarea>
        <button type="button" className="w-full bg-gold hover:bg-white text-charcoal font-bold px-8 py-4 uppercase tracking-widest transition-colors">Send Message</button>
      </form>
    </div>
    
        </div>
      </div>
    </div>
  );
}

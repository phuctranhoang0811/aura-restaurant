"use client";

import { useState } from "react";
import PageHero from "@/components/PageHero";

export default function ReservationsPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 2000);
  };

  return (
    <div className="bg-charcoal text-white min-h-screen">
      <PageHero 
        title="Reservations"
        subtitle="Secure your table for an unforgettable dining experience."
        imageSrc="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2000&auto=format&fit=crop"
        imageAlt="Restaurant reservations"
      />

      <div className="max-w-3xl mx-auto px-6 py-20 animate-fade-in-up">
        {isSuccess ? (
          <div className="bg-charcoal-light p-12 border border-gold/30 text-center animate-fade-in-up">
            <svg className="w-20 h-20 text-gold mx-auto mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
            <h2 className="font-serif text-3xl text-gold mb-4">Request Received</h2>
            <p className="text-white/80 text-lg leading-relaxed mb-8">
              Thank you for choosing Aura. Your reservation request has been successfully submitted. Our concierge team will review availability and contact you shortly to confirm your booking.
            </p>
            <button onClick={() => setIsSuccess(false)} className="border border-gold text-gold hover:bg-gold hover:text-charcoal px-8 py-3 uppercase tracking-widest text-sm transition-colors">
              Make Another Request
            </button>
          </div>
        ) : (
          <>
            <p className="text-center text-white/70 mb-10">
              Please note that this form submits a reservation inquiry. Our team will contact you to confirm your table.
            </p>
            <form onSubmit={handleSubmit} className="bg-charcoal-light p-8 md:p-12 border border-white/5 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="sr-only">Full Name</label>
                  <input required type="text" placeholder="Full Name *" className="w-full bg-transparent border border-white/20 p-4 text-white focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-all" />
                </div>
                <div>
                  <label className="sr-only">Phone Number</label>
                  <input required type="tel" placeholder="Phone Number *" className="w-full bg-transparent border border-white/20 p-4 text-white focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-all" />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="sr-only">Date</label>
                  <input required type="date" className="w-full bg-transparent border border-white/20 p-4 text-white focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-all" />
                </div>
                <div>
                  <label className="sr-only">Time</label>
                  <input required type="time" className="w-full bg-transparent border border-white/20 p-4 text-white focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-all" />
                </div>
                <div>
                  <label className="sr-only">Guests</label>
                  <select required className="w-full bg-transparent border border-white/20 p-4 text-white focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold appearance-none transition-all">
                    <option value="" disabled selected className="bg-charcoal text-white/50">Party Size *</option>
                    <option value="1" className="bg-charcoal">1 Guest</option>
                    <option value="2" className="bg-charcoal">2 Guests</option>
                    <option value="3" className="bg-charcoal">3 Guests</option>
                    <option value="4" className="bg-charcoal">4 Guests</option>
                    <option value="5" className="bg-charcoal">5 Guests</option>
                    <option value="6+" className="bg-charcoal">6+ Guests (Contact us)</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="sr-only">Special Requests</label>
                <textarea placeholder="Special Requests (Allergies, Occasions, etc.)" rows={3} className="w-full bg-transparent border border-white/20 p-4 text-white focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-all"></textarea>
              </div>
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-crimson hover:bg-red-800 text-white font-bold px-8 py-4 uppercase tracking-widest transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Processing..." : "Submit Request"}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

"use client";

import { useState } from "react";
import PageHero from "@/components/PageHero";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call for form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      // Reset form success state after 5 seconds
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  };

  return (
    <div className="bg-charcoal text-white min-h-screen">
      <PageHero 
        title="Contact Us"
        subtitle="We are here to assist you with any inquiries."
        imageSrc="https://images.unsplash.com/photo-1576867757603-05b134ebcb79?q=80&w=2000&auto=format&fit=crop"
        imageAlt="Contact aura restaurant"
      />

      <div className="max-w-5xl mx-auto px-6 py-20 animate-fade-in-up">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h3 className="font-serif text-2xl text-gold mb-4">Get in Touch</h3>
            <p className="text-white/70 mb-8 leading-relaxed">
              For general questions, feedback, or special requests, please use the form or reach out directly. Our concierge team responds within 24 hours.
            </p>
            <div className="space-y-6">
              <div>
                <span className="block text-gold text-xs uppercase tracking-widest mb-1">Address</span>
                <p className="text-white/80">123 Culinary Avenue, Metro City, 90210</p>
              </div>
              <div>
                <span className="block text-gold text-xs uppercase tracking-widest mb-1">Email</span>
                <a href="mailto:reservations@aurarestaurant.com" className="text-white/80 hover:text-white transition-colors">reservations@aurarestaurant.com</a>
              </div>
              <div>
                <span className="block text-gold text-xs uppercase tracking-widest mb-1">Phone</span>
                <a href="tel:+15551234567" className="text-white/80 hover:text-white transition-colors">+1 (555) 123-4567</a>
              </div>
            </div>
          </div>
          
          <div className="bg-charcoal-light p-8 border border-white/5 relative overflow-hidden">
            {isSuccess ? (
              <div className="absolute inset-0 bg-charcoal-light flex flex-col items-center justify-center p-8 text-center animate-fade-in-up">
                <svg className="w-16 h-16 text-gold mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <h3 className="font-serif text-2xl text-white mb-2">Message Sent</h3>
                <p className="text-white/60">Thank you for reaching out. We will get back to you shortly.</p>
              </div>
            ) : (
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="name" className="sr-only">Full Name</label>
                  <input id="name" required type="text" placeholder="Full Name *" className="w-full bg-transparent border border-white/20 p-4 text-white focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-all" />
                </div>
                <div>
                  <label htmlFor="email" className="sr-only">Email Address</label>
                  <input id="email" required type="email" placeholder="Email Address *" className="w-full bg-transparent border border-white/20 p-4 text-white focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-all" />
                </div>
                <div>
                  <label htmlFor="message" className="sr-only">Your Message</label>
                  <textarea id="message" required placeholder="Your Message *" rows={5} className="w-full bg-transparent border border-white/20 p-4 text-white focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-all"></textarea>
                </div>
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-gold hover:bg-white text-charcoal font-bold px-8 py-4 uppercase tracking-widest transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

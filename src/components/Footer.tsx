import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-charcoal pt-20 pb-10 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left mb-16">
        
        {/* Brand Side */}
        <div className="flex flex-col items-center md:items-start">
          <Link href="/" className="mb-6">
            <h2 className="font-serif text-3xl text-gold tracking-widest font-bold">AURA</h2>
            <p className="text-[0.6rem] tracking-[0.3em] uppercase text-white/50 mt-1">Modern Asian</p>
          </Link>
          <p className="font-sans text-sm text-white/60 leading-relaxed max-w-xs">
            Redefining the essence of traditional Asian cuisine through a modern, elegant, and immersive dining experience.
          </p>
        </div>

        {/* Contact Information */}
        <div className="flex flex-col items-center md:items-start">
          <h4 className="font-sans uppercase text-gold text-xs tracking-[0.2em] mb-6">Contact & Location</h4>
          <p className="font-sans text-sm text-white/70 mb-2">123 Culinary Avenue, Metro City, 90210</p>
          <p className="font-sans text-sm text-white/70 mb-2">reservations@aurarestaurant.com</p>
          <p className="font-sans text-sm text-white/70 mb-6">+1 (555) 123-4567</p>
        </div>

        {/* Hours */}
        <div className="flex flex-col items-center md:items-start">
          <h4 className="font-sans uppercase text-gold text-xs tracking-[0.2em] mb-6">Opening Hours</h4>
          <p className="font-sans text-sm text-white/70 mb-2">Mon - Thu: 5:00 PM - 10:00 PM</p>
          <p className="font-sans text-sm text-white/70 mb-2">Fri - Sat: 5:00 PM - 11:30 PM</p>
          <p className="font-sans text-sm text-white/70 mb-2">Sunday: 4:00 PM - 9:30 PM</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-white/40 font-sans">
        <p>© {new Date().getFullYear()} Aura Modern Asian Fusion. All rights reserved.</p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <Link href="#" className="hover:text-gold transition-colors">Privacy Policy</Link>
          <Link href="#" className="hover:text-gold transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-charcoal pt-20 pb-28 xl:pb-10 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 text-center md:text-left mb-16">

        {/* Brand */}
        <div className="md:col-span-1 flex flex-col items-center md:items-start">
          <Link href="/" className="mb-5">
            <h2 className="font-serif text-3xl text-gold tracking-widest font-bold">AURA</h2>
            <p className="text-[0.6rem] tracking-[0.3em] uppercase text-white/40 mt-1">Modern Asian</p>
          </Link>
          <p className="font-sans text-sm text-white/55 leading-relaxed max-w-xs">
            Redefining Asian cuisine through a modern, elegant, and immersive dining experience.
          </p>
          {/* Social Icons */}
          <div className="flex items-center gap-4 mt-6">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-white/40 hover:text-gold transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="text-white/40 hover:text-gold transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a
              href="https://tripadvisor.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TripAdvisor"
              className="text-white/40 hover:text-gold transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.006 4.295c-2.67 0-5.044.57-6.985 1.566L2 5.813l2.502 2.555A6.27 6.27 0 0 0 2 12.93a6.28 6.28 0 0 0 6.274 6.274 6.248 6.248 0 0 0 4.347-1.752L12 18l-.621.452a6.248 6.248 0 0 0 4.347 1.752A6.28 6.28 0 0 0 22 12.93a6.27 6.27 0 0 0-2.502-4.562L22 5.813l-3.022-.013c-1.94-.995-4.314-1.505-6.972-1.505zm0 1.5c2.347 0 4.49.453 6.165 1.328l.494.26 1.66.007-1.595 1.63-.283.288.319.253a4.77 4.77 0 0 1 1.963 3.369 4.774 4.774 0 0 1-4.774 4.774 4.748 4.748 0 0 1-3.393-1.414L12 15.14l-.562.556a4.748 4.748 0 0 1-3.393 1.414A4.774 4.774 0 0 1 3.27 12.93a4.77 4.77 0 0 1 1.963-3.369l.318-.253-.282-.288-1.595-1.63 1.66-.007.494-.26c1.675-.875 3.818-1.328 6.178-1.328zM8.274 8.5a4.43 4.43 0 1 0 0 8.86 4.43 4.43 0 0 0 0-8.86zm7.452 0a4.43 4.43 0 1 0 0 8.86 4.43 4.43 0 0 0 0-8.86zm-7.452 1.5a2.93 2.93 0 1 1 0 5.86 2.93 2.93 0 0 1 0-5.86zm7.452 0a2.93 2.93 0 1 1 0 5.86 2.93 2.93 0 0 1 0-5.86z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col items-center md:items-start">
          <h4 className="font-sans uppercase text-gold text-xs tracking-[0.2em] mb-6">Explore</h4>
          <div className="space-y-3">
            {[
              { name: "About Us", href: "/about" },
              { name: "Menu", href: "/menu" },
              { name: "Gallery", href: "/gallery" },
              { name: "Banquet Facilities", href: "/banquet-facilities" },
              { name: "Hosting Services", href: "/hosting-services" },
            ].map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="block font-sans text-sm text-white/55 hover:text-gold transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Contact Information */}
        <div className="flex flex-col items-center md:items-start">
          <h4 className="font-sans uppercase text-gold text-xs tracking-[0.2em] mb-6">Contact</h4>
          <div className="space-y-2">
            <p className="font-sans text-sm text-white/55">123 Culinary Avenue</p>
            <p className="font-sans text-sm text-white/55">Metro City, 90210</p>
            <a href="mailto:reservations@aurarestaurant.com" className="block font-sans text-sm text-white/55 hover:text-gold transition-colors mt-3">
              reservations@aurarestaurant.com
            </a>
            <a href="tel:+15551234567" className="block font-sans text-sm text-white/55 hover:text-gold transition-colors">
              +1 (555) 123-4567
            </a>
          </div>
        </div>

        {/* Hours */}
        <div className="flex flex-col items-center md:items-start">
          <h4 className="font-sans uppercase text-gold text-xs tracking-[0.2em] mb-6">Opening Hours</h4>
          <div className="space-y-2">
            <p className="font-sans text-sm text-white/55">Mon – Thu: 5:00 PM – 10:00 PM</p>
            <p className="font-sans text-sm text-white/55">Fri – Sat: 5:00 PM – 11:30 PM</p>
            <p className="font-sans text-sm text-white/55">Sunday: 4:00 PM – 9:30 PM</p>
          </div>
          <Link
            href="/reservations"
            className="mt-6 inline-block border border-gold text-gold hover:bg-gold hover:text-charcoal text-xs tracking-widest uppercase px-6 py-3 transition-all duration-300"
          >
            Book a Table
          </Link>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="max-w-7xl mx-auto border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-white/30 font-sans gap-4">
        <p>© {new Date().getFullYear()} Aura Modern Asian Fusion. All rights reserved.</p>
        <div className="flex space-x-6">
          <Link href="#" className="hover:text-gold transition-colors">Privacy Policy</Link>
          <Link href="#" className="hover:text-gold transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}

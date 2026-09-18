"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Utensils, CalendarCheck, Grip } from "lucide-react"; // Mobile App Icons

const LEFT_LINKS = [
  { name: "About Us", href: "/about" },
  { name: "Menu", href: "/menu" },
  { name: "Banquet", href: "/banquet-facilities" },
  { name: "Gallery", href: "/gallery" },
  { name: "Catering", href: "/catering" },
];

const RIGHT_LINKS = [
  { name: "Hours", href: "/visiting-hours" },
  { name: "Reservations", href: "/reservations" },
  { name: "Menu Kits", href: "/menu-kits" },
  { name: "Hosting", href: "/hosting-services" },
  { name: "Contact", href: "/contact" },
];

const ALL_LINKS = [{ name: "Home", href: "/" }, ...LEFT_LINKS, ...RIGHT_LINKS];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const linkClass = (href: string) =>
    `relative text-xs tracking-widest uppercase transition-colors duration-200 pb-1 group ${
      pathname === href ? "text-gold" : "text-white/80 hover:text-gold"
    }`;

  const mobileTabClass = (href: string) =>
    `flex flex-col items-center justify-center w-1/4 space-y-1 transition-colors ${
      pathname === href ? "text-gold" : "text-white/50"
    }`;

  return (
    <>
      {/* 
        ========================================
        DESKTOP NAVBAR (Hidden on Mobile)
        ========================================
      */}
      <nav
        className={`hidden xl:block fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
          isScrolled
            ? "bg-charcoal/95 backdrop-blur-md py-3 shadow-lg"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-screen-2xl mx-auto px-6 flex items-center justify-center relative">
          {/* Left Navigation */}
          <div className="flex flex-1 justify-end items-center gap-6 pr-10">
            {LEFT_LINKS.map((link) => (
              <Link key={link.name} href={link.href} className={linkClass(link.href)}>
                {link.name}
                <span className={`absolute bottom-0 left-0 h-px bg-gold transition-all duration-300 ${pathname === link.href ? "w-full" : "w-0 group-hover:w-full"}`} />
              </Link>
            ))}
          </div>

          {/* Center Logo */}
          <Link href="/" className="flex-shrink-0 text-center">
            <h1 className="font-serif text-4xl text-gold tracking-widest font-bold leading-none">AURA</h1>
            <p className="text-[0.6rem] tracking-[0.3em] uppercase text-white/60 mt-1">Modern Asian</p>
          </Link>

          {/* Right Navigation */}
          <div className="flex flex-1 justify-start items-center gap-6 pl-10">
            {RIGHT_LINKS.map((link) => (
              <Link key={link.name} href={link.href} className={linkClass(link.href)}>
                {link.name}
                <span className={`absolute bottom-0 left-0 h-px bg-gold transition-all duration-300 ${pathname === link.href ? "w-full" : "w-0 group-hover:w-full"}`} />
              </Link>
            ))}
          </div>
        </div>
      </nav>

      {/* 
        ========================================
        MOBILE APP SHELL (Hidden on Desktop)
        ========================================
      */}

      {/* 1. Mobile Top Bar (Just Logo) */}
      <nav
        className={`xl:hidden fixed top-0 left-0 right-0 z-50 flex items-center justify-center transition-all duration-300 ${
          isScrolled ? "bg-charcoal/95 backdrop-blur-md py-3 shadow-lg" : "bg-gradient-to-b from-charcoal/80 to-transparent py-4"
        }`}
      >
        <Link href="/" className="text-center">
          <h1 className="font-serif text-3xl text-gold tracking-widest font-bold leading-none">AURA</h1>
        </Link>
      </nav>

      {/* 2. Mobile Bottom Tab Bar (App-like Navigation) */}
      <div className="xl:hidden fixed bottom-0 left-0 right-0 z-50 bg-charcoal/98 backdrop-blur-lg border-t border-white/10 h-20 flex flex-row items-center justify-around pb-4 pt-2 px-2 shadow-[0_-5px_15px_rgba(0,0,0,0.3)]">
        
        {/* Tab 1: Home */}
        <Link href="/" className={mobileTabClass("/")} onClick={() => setMobileMenuOpen(false)}>
          <Home size={22} strokeWidth={pathname === "/" ? 2.5 : 1.5} />
          <span className="text-[10px] tracking-wider uppercase mt-1">Home</span>
        </Link>

        {/* Tab 2: Menu */}
        <Link href="/menu" className={mobileTabClass("/menu")} onClick={() => setMobileMenuOpen(false)}>
          <Utensils size={22} strokeWidth={pathname === "/menu" ? 2.5 : 1.5} />
          <span className="text-[10px] tracking-wider uppercase mt-1">Menu</span>
        </Link>

        {/* Tab 3: Reservations */}
        <Link href="/reservations" className={mobileTabClass("/reservations")} onClick={() => setMobileMenuOpen(false)}>
          <CalendarCheck size={22} strokeWidth={pathname === "/reservations" ? 2.5 : 1.5} />
          <span className="text-[10px] tracking-wider uppercase mt-1">Reserve</span>
        </Link>

        {/* Tab 4: More / Explore */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className={`flex flex-col items-center justify-center w-1/4 space-y-1 transition-colors ${mobileMenuOpen ? "text-gold" : "text-white/50"}`}
        >
          <Grip size={22} strokeWidth={mobileMenuOpen ? 2.5 : 1.5} />
          <span className="text-[10px] tracking-wider uppercase mt-1">Explore</span>
        </button>

      </div>

      {/* 3. Mobile "Explore" Drawer (Slides up when clicking "Explore" tab) */}
      {mobileMenuOpen && (
        <div className="xl:hidden fixed inset-0 z-40 bg-charcoal/98 backdrop-blur-xl pt-24 pb-24 px-8 flex flex-col overflow-y-auto animate-fade-in-up">
          <h3 className="text-gold text-xs tracking-[0.3em] uppercase text-center mb-8">Explore Aura</h3>
          
          <div className="grid grid-cols-2 gap-y-6 gap-x-4">
            {ALL_LINKS.filter(l => !['/', '/menu', '/reservations'].includes(l.href)).map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-sm tracking-widest uppercase text-center py-4 border border-white/5 bg-white/5 rounded-lg transition-colors ${
                  pathname === link.href ? "text-gold border-gold/30" : "text-white/80 active:bg-white/10"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="mt-auto pt-8 flex flex-col items-center">
            <p className="text-xs text-white/40 font-sans tracking-widest">123 Culinary Ave, Metro City</p>
            <p className="text-xs text-white/40 font-sans tracking-widest mt-2">+1 (555) 123-4567</p>
          </div>
        </div>
      )}
    </>
  );
}

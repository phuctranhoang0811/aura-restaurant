"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

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

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
          isScrolled
            ? "bg-charcoal/95 backdrop-blur-md py-3 shadow-lg"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-screen-2xl mx-auto px-6 flex items-center justify-between xl:justify-center relative">

          {/* Mobile / Tablet Menu Button (shown below xl) */}
          <button
            className="xl:hidden text-gold focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Left Navigation */}
          <div className="hidden xl:flex flex-1 justify-end items-center gap-6 pr-10">
            {LEFT_LINKS.map((link) => (
              <Link key={link.name} href={link.href} className={linkClass(link.href)}>
                {link.name}
                <span className={`absolute bottom-0 left-0 h-px bg-gold transition-all duration-300 ${pathname === link.href ? "w-full" : "w-0 group-hover:w-full"}`} />
              </Link>
            ))}
          </div>

          {/* Center Logo */}
          <Link href="/" className="flex-shrink-0 text-center">
            <h1 className="font-serif text-3xl xl:text-4xl text-gold tracking-widest font-bold leading-none">AURA</h1>
            <p className="text-[0.6rem] tracking-[0.3em] uppercase text-white/60 mt-1">Modern Asian</p>
          </Link>

          {/* Right Navigation */}
          <div className="hidden xl:flex flex-1 justify-start items-center gap-6 pl-10">
            {RIGHT_LINKS.map((link) => (
              <Link key={link.name} href={link.href} className={linkClass(link.href)}>
                {link.name}
                <span className={`absolute bottom-0 left-0 h-px bg-gold transition-all duration-300 ${pathname === link.href ? "w-full" : "w-0 group-hover:w-full"}`} />
              </Link>
            ))}
          </div>

          <div className="xl:hidden w-7" />
        </div>
      </nav>

      {/* Mobile / Tablet Fullscreen Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-charcoal/97 backdrop-blur-sm pt-24 px-8 flex flex-col xl:hidden overflow-y-auto">
          {ALL_LINKS.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`text-base tracking-widest uppercase text-center py-4 border-b border-white/10 transition-colors ${
                pathname === link.href ? "text-gold" : "text-white hover:text-gold"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </>
  );
}

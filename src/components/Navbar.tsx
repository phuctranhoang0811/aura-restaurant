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
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
          isScrolled
            ? "bg-charcoal/95 backdrop-blur-md py-4 shadow-lg"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between lg:justify-center relative">
          
          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-gold-light focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Left Navigation */}
          <div className="hidden lg:flex flex-1 justify-end space-x-8 pr-12">
            {LEFT_LINKS.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm tracking-widest uppercase transition-colors hover:text-gold ${
                  pathname === link.href ? "text-gold" : "text-white"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Center Logo */}
          <Link href="/" className="flex-shrink-0 text-center mx-auto lg:mx-0">
            <h1 className="font-serif text-3xl md:text-4xl text-gold tracking-widest font-bold">AURA</h1>
            <p className="text-[0.65rem] tracking-[0.3em] uppercase text-white/70 mt-1">Modern Asian</p>
          </Link>

          {/* Right Navigation */}
          <div className="hidden lg:flex flex-1 justify-start space-x-8 pl-12">
            {RIGHT_LINKS.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm tracking-widest uppercase transition-colors hover:text-gold ${
                  pathname === link.href ? "text-gold" : "text-white"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Empty Spacer for Flex Alignment */}
          <div className="lg:hidden w-8"></div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-charcoal bg-opacity-95 pt-24 px-6 flex flex-col space-y-6 lg:hidden overflow-y-auto">
          {ALL_LINKS.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`text-lg tracking-widest uppercase text-center pb-4 border-b border-white/10 ${
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

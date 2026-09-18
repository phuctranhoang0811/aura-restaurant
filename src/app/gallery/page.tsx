"use client";

import { useState } from "react";
import Image from "next/image";
import PageHero from "@/components/PageHero";

const GALLERY_IMAGES = [
  { src: "https://images.unsplash.com/photo-1553621042-f6e147245754?q=80&w=800&auto=format&fit=crop", alt: "Sushi Boat" },
  { src: "https://images.unsplash.com/photo-1559314809-0d155014e29e?q=80&w=800&auto=format&fit=crop", alt: "Asian Food Spread" },
  { src: "https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=800&auto=format&fit=crop", alt: "Restaurant Interior details" },
  { src: "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?q=80&w=1200&auto=format&fit=crop", alt: "Elegant dining room", span: "md:col-span-2" },
  { src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800&auto=format&fit=crop", alt: "Main Dining Area" },
  { src: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?q=80&w=800&auto=format&fit=crop", alt: "Sushi Platter" },
  { src: "https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?q=80&w=800&auto=format&fit=crop", alt: "Dumplings" },
  { src: "https://images.unsplash.com/photo-1563245372-f21724e3856d?q=80&w=800&auto=format&fit=crop", alt: "Sashimi setup" },
];

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="bg-charcoal text-white min-h-screen">
      <PageHero 
        title="Gallery"
        subtitle="A visual journey through the Aura experience."
        imageSrc="https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?q=80&w=2000&auto=format&fit=crop"
        imageAlt="Aura Restaurant Interior"
      />

      <div className="max-w-6xl mx-auto px-6 py-20 animate-fade-in-up">
        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {GALLERY_IMAGES.map((img, idx) => (
            <div 
              key={idx} 
              className={`relative h-64 md:h-72 w-full cursor-pointer group overflow-hidden bg-charcoal-light ${img.span || ""}`}
              onClick={() => setSelectedImage(img.src)}
            >
              <Image 
                src={img.src} 
                alt={img.alt} 
                fill 
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110 group-hover:opacity-80" 
              />
              <div className="absolute inset-0 bg-charcoal/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white bg-black/50 px-4 py-2 text-xs tracking-widest uppercase backdrop-blur-sm">Expand</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[100] bg-charcoal/95 backdrop-blur-md flex items-center justify-center p-4 animate-fade-in-up"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-8 right-8 text-white/50 hover:text-white"
            onClick={() => setSelectedImage(null)}
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/></svg>
          </button>
          <div className="relative w-full max-w-5xl aspect-video md:aspect-[21/9]">
            <Image 
              src={selectedImage} 
              alt="Expanded gallery view" 
              fill 
              sizes="100vw"
              className="object-contain" 
            />
          </div>
        </div>
      )}
    </div>
  );
}

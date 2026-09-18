import PageHero from "@/components/PageHero";
import Link from "next/link";

export default function HostingServicesPage() {
  return (
    <div className="bg-charcoal text-white min-h-screen">
      <PageHero 
        title="Hosting Services"
        subtitle="Comprehensive event planning at Aura."
        imageSrc="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=2000&auto=format&fit=crop"
        imageAlt="Event Hosting Services"
      />

      <div className="max-w-5xl mx-auto px-6 py-20 animate-fade-in-up text-center">
        <span className="text-gold tracking-[0.3em] uppercase text-xs font-sans mb-4 block">Beyond Dining</span>
        <h2 className="font-serif text-4xl md:text-5xl text-white mb-8">Flawless <span className="italic text-gold-light">Execution</span></h2>
        <p className="text-white/80 text-lg leading-relaxed mb-16 max-w-3xl mx-auto">
          When you choose Aura for your private event, you receive more than just an exquisite venue. Our dedicated events team provides comprehensive hosting services to ensure your gathering is flawless from conception to execution.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="p-10 border border-white/5 bg-charcoal-light hover:border-gold/30 transition-colors">
            <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
            </div>
            <h3 className="text-white font-serif text-2xl mb-4">Event Planning</h3>
            <p className="text-sm text-white/60 leading-relaxed">A dedicated coordinator to manage timelines, decor, seating arrangements, and special requests.</p>
          </div>
          
          <div className="p-10 border border-white/5 bg-charcoal-light hover:border-gold/30 transition-colors">
            <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
            </div>
            <h3 className="text-white font-serif text-2xl mb-4">Custom Menus</h3>
            <p className="text-sm text-white/60 leading-relaxed">Work directly with our Chef to design a menu tailored perfectly to your guests&apos; preferences and dietary needs.</p>
          </div>
          
          <div className="p-10 border border-white/5 bg-charcoal-light hover:border-gold/30 transition-colors">
            <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>
            </div>
            <h3 className="text-white font-serif text-2xl mb-4">A/V & Tech</h3>
            <p className="text-sm text-white/60 leading-relaxed">State-of-the-art audiovisual equipment for corporate presentations, speeches, and ambient entertainment.</p>
          </div>
        </div>

        <Link href="/contact" className="inline-block bg-gold hover:bg-white text-charcoal font-bold px-10 py-4 uppercase tracking-widest text-sm transition-colors">
          Discuss Your Event
        </Link>
      </div>
    </div>
  );
}

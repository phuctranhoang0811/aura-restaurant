import PageHero from "@/components/PageHero";

export default function VisitingHoursPage() {
  return (
    <div className="bg-charcoal text-white min-h-screen">
      <PageHero 
        title="Visiting Hours"
        subtitle="Plan your visit to Aura."
        imageSrc="https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?q=80&w=2000&auto=format&fit=crop"
        imageAlt="Aura Restaurant Entrance"
      />

      <div className="max-w-6xl mx-auto px-6 py-20 animate-fade-in-up">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="bg-charcoal-light p-10 md:p-14 border border-white/5 h-full flex flex-col justify-center">
            <h2 className="font-serif text-3xl text-gold mb-8">Operating Schedule</h2>
            <div className="space-y-6 text-base md:text-lg">
              <div className="flex justify-between border-b border-white/10 pb-4">
                <span className="text-white/80">Monday - Thursday</span>
                <span className="text-gold font-medium">5:00 PM - 10:00 PM</span>
              </div>
              <div className="flex justify-between border-b border-white/10 pb-4">
                <span className="text-white/80">Friday & Saturday</span>
                <span className="text-gold font-medium">5:00 PM - 11:30 PM</span>
              </div>
              <div className="flex justify-between border-b border-white/10 pb-4">
                <span className="text-white/80">Sunday</span>
                <span className="text-gold font-medium">4:00 PM - 9:30 PM</span>
              </div>
            </div>
            <p className="mt-8 text-sm text-white/50 leading-relaxed">
              * We are closed on major national holidays. For special event hours and private bookings outside of regular operating hours, please contact us directly.
            </p>
          </div>

          <div className="relative h-96 md:h-auto min-h-[400px] border border-white/5 p-2 bg-charcoal-light/50">
            {/* Embedded Map using a generic placeholder for the aesthetic */}
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.733248043701!2d-118.24368492361732!3d34.05223417315694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c648fa1d4803%3A0xdec27bf11f9fd336!2sLos%20Angeles%2C%20CA!5e0!3m2!1sen!2sus!4v1689269784310!5m2!1sen!2sus" 
              className="w-full h-full grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

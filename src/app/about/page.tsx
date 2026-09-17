
export default function Page() {
  return (
    <div className="min-h-screen bg-charcoal text-white pt-32 pb-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="font-serif text-4xl md:text-6xl text-gold mb-6">{ "Our Story" }</h1>
          <p className="font-sans text-lg text-white/70 max-w-2xl mx-auto">{ "A harmonious blend of centuries-old tradition and modern culinary innovation." }</p>
        </div>
        <div className="animate-fade-in-up">
          
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      <div>
        <img src="https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=800&auto=format&fit=crop" alt="Our Chef" className="w-full h-auto object-cover grayscale hover:grayscale-0 transition-all duration-500" />
      </div>
      <div>
        <h2 className="font-serif text-3xl text-gold-light mb-4">Philosophy</h2>
        <p className="mb-6 text-white/80 leading-relaxed">At Aura, we believe that food is an art form that speaks to the soul. Rooted in the rich culinary heritage of Asia, our approach is defined by Zen minimalism—where every ingredient is purposeful, and every flavor profile is meticulously balanced.</p>
        <h2 className="font-serif text-3xl text-gold-light mb-4">The Chef</h2>
        <p className="text-white/80 leading-relaxed">Master Chef Kenji Yamamoto brings over two decades of experience from Michelin-starred kitchens across Kyoto and Hong Kong. His vision is to strip away the unnecessary, presenting dishes that are as visually breathtaking as they are delicious.</p>
      </div>
    </div>
    
        </div>
      </div>
    </div>
  );
}

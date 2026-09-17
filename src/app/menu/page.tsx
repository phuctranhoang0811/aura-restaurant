
export default function Page() {
  return (
    <div className="min-h-screen bg-charcoal text-white pt-32 pb-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="font-serif text-4xl md:text-6xl text-gold mb-6">{ "The Menu" }</h1>
          <p className="font-sans text-lg text-white/70 max-w-2xl mx-auto">{ "Curated seasonal offerings highlighting the finest ingredients." }</p>
        </div>
        <div className="animate-fade-in-up">
          
    <div className="space-y-16">
      <section>
        <h2 className="font-serif text-3xl text-gold border-b border-white/20 pb-4 mb-8">Starters</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            { name: "Truffle Edamame", desc: "Steamed with white truffle salt.", price: "$12" },
            { name: "Wagyu Beef Tataki", desc: "Seared A5 Wagyu, ponzu, crispy garlic.", price: "$32" },
            { name: "Spicy Tuna Crispy Rice", desc: "Pan-fried sushi rice, jalapeño.", price: "$24" }
          ].map((item, i) => (
            <div key={i} className="flex justify-between border-b border-white/5 pb-4">
              <div><h3 className="font-serif text-xl">{item.name}</h3><p className="text-sm text-white/60">{item.desc}</p></div>
              <span className="text-gold">{item.price}</span>
            </div>
          ))}
        </div>
      </section>
      <section>
        <h2 className="font-serif text-3xl text-gold border-b border-white/20 pb-4 mb-8">Main Courses</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            { name: "Miso Glazed Black Cod", desc: "Sustainably caught, sweet saikyo miso.", price: "$45" },
            { name: "Peking Duck Roast", desc: "Half duck, cucumber, hoisin, handmade pancakes.", price: "$65" },
            { name: "Lemongrass Wagyu Short Rib", desc: "Braised for 48 hours, ginger glaze.", price: "$55" }
          ].map((item, i) => (
            <div key={i} className="flex justify-between border-b border-white/5 pb-4">
              <div><h3 className="font-serif text-xl">{item.name}</h3><p className="text-sm text-white/60">{item.desc}</p></div>
              <span className="text-gold">{item.price}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
    
        </div>
      </div>
    </div>
  );
}

import Link from "next/link";

const HIGHLIGHTS = [
  {
    name: "Wagyu Beef Tataki",
    description: "Seared A5 Wagyu, ponzu truffle dressing, crispy garlic, micro herbs.",
    price: "$32",
  },
  {
    name: "Miso Glazed Black Cod",
    description: "Sustainably caught black cod, sweet saikyo miso, pickled ginger shoot.",
    price: "$45",
  },
  {
    name: "Spicy Tuna Crispy Rice",
    description: "Pan-fried sushi rice, spicy bluefin tuna tartare, jalapeño slice.",
    price: "$24",
  },
  {
    name: "Truffle Edamame Dumplings",
    description: "Steamed crystal skin dumplings, edamame purée, white truffle oil.",
    price: "$18",
  },
  {
    name: "Matcha Lava Cake",
    description: "Warm matcha cake, white chocolate molten center, black sesame ice cream.",
    price: "$16",
  },
  {
    name: "Lemongrass Lychee Martini",
    description: "Premium vodka, fresh lychee purée, lemongrass syrup, lime juice.",
    price: "$19",
  },
];

export default function MenuHighlights() {
  return (
    <section className="py-24 px-6 bg-charcoal-light">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-gold tracking-[0.3em] uppercase text-xs font-sans mb-4 block">
            Culinary Masterpieces
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-white">
            Signature <span className="italic text-gold-light">Selections</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-4 mb-16">
          {HIGHLIGHTS.map((item, idx) => (
            <div
              key={idx}
              className="group flex flex-col border-b border-white/10 pb-6 pt-2 pl-0 transition-all duration-200 hover:pl-3 hover:border-l-2 hover:border-l-gold"
            >
              <div className="flex justify-between items-baseline mb-2">
                <h3 className="font-serif text-xl text-white tracking-wide group-hover:text-gold-light transition-colors">
                  {item.name}
                </h3>
                <span className="font-sans text-gold font-medium flex-shrink-0 ml-4">{item.price}</span>
              </div>
              <p className="font-sans text-sm text-white/60 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/menu"
            className="inline-block border border-gold text-gold uppercase tracking-widest text-sm px-10 py-4 hover:bg-gold hover:text-charcoal transition-all duration-300"
          >
            View Full Menu
          </Link>
        </div>
      </div>
    </section>
  );
}

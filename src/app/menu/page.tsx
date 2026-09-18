import PageHero from "@/components/PageHero";

const MENU_CATEGORIES = [
  {
    title: "Starters",
    items: [
      { name: "Truffle Edamame", desc: "Steamed with white truffle salt.", price: "$12", tags: ["V", "GF"] },
      { name: "Wagyu Beef Tataki", desc: "Seared A5 Wagyu, ponzu, crispy garlic, micro herbs.", price: "$32", tags: [] },
      { name: "Spicy Tuna Crispy Rice", desc: "Pan-fried sushi rice, jalapeño slice.", price: "$24", tags: ["GF"] },
      { name: "Miso Soup", desc: "White miso, tofu, wakame, scallion.", price: "$8", tags: ["V", "GF"] },
    ]
  },
  {
    title: "Main Courses",
    items: [
      { name: "Miso Glazed Black Cod", desc: "Sustainably caught, sweet saikyo miso.", price: "$45", tags: ["GF"] },
      { name: "Peking Duck Roast", desc: "Half duck, cucumber, hoisin, handmade pancakes.", price: "$65", tags: [] },
      { name: "Lemongrass Wagyu Short Rib", desc: "Braised for 48 hours, ginger glaze.", price: "$55", tags: [] },
      { name: "Wild Mushroom Toban Yaki", desc: "Assorted wild mushrooms, yuzu soy, sizzling plate.", price: "$28", tags: ["V", "GF"] },
    ]
  },
  {
    title: "Desserts",
    items: [
      { name: "Matcha Lava Cake", desc: "Warm matcha cake, white chocolate molten center, black sesame ice cream.", price: "$16", tags: ["V"] },
      { name: "Yuzu Cheesecake", desc: "Light Japanese cheesecake, yuzu curd, graham crumble.", price: "$14", tags: ["V"] },
      { name: "Mochi Ice Cream Trio", desc: "Seasonal chef selections.", price: "$12", tags: ["V", "GF"] },
    ]
  },
  {
    title: "Beverages & Sake",
    items: [
      { name: "Lemongrass Lychee Martini", desc: "Premium vodka, fresh lychee purée, lemongrass syrup.", price: "$19", tags: [] },
      { name: "Tokyo Old Fashioned", desc: "Japanese whisky, plum wine, angostura bitters.", price: "$22", tags: [] },
      { name: "Dassai 23 Junmai Daiginjo", desc: "Ultra-premium sake, notes of melon and peach. (300ml)", price: "$95", tags: [] },
      { name: "Sencha Green Tea", desc: "Premium loose leaf tea from Shizuoka.", price: "$8", tags: ["V", "GF"] },
    ]
  }
];

export default function MenuPage() {
  return (
    <div className="bg-charcoal text-white">
      <PageHero 
        title="The Menu"
        subtitle="Curated seasonal offerings highlighting the finest ingredients and culinary artistry."
        imageSrc="https://images.unsplash.com/photo-1541606969542-f81d1139df31?q=80&w=2000&auto=format&fit=crop"
        imageAlt="A beautifully arranged Asian meal"
      />

      <div className="max-w-4xl mx-auto px-6 py-20 animate-fade-in-up">
        <div className="flex gap-4 justify-center mb-16 text-xs text-white/50 tracking-widest uppercase">
          <span className="flex items-center gap-1"><span className="w-2 h-2 bg-green-500 rounded-full inline-block"></span> V - Vegetarian</span>
          <span className="flex items-center gap-1"><span className="w-2 h-2 bg-blue-400 rounded-full inline-block"></span> GF - Gluten Free</span>
        </div>

        <div className="space-y-20">
          {MENU_CATEGORIES.map((category, idx) => (
            <section key={idx}>
              <h2 className="font-serif text-3xl text-gold border-b border-white/20 pb-4 mb-8">
                {category.title}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                {category.items.map((item, i) => (
                  <div key={i} className="flex flex-col border-b border-white/5 pb-4 group">
                    <div className="flex justify-between items-baseline mb-2">
                      <h3 className="font-serif text-xl text-white group-hover:text-gold-light transition-colors">
                        {item.name}
                        {item.tags.length > 0 && (
                          <span className="ml-2 text-[0.6rem] tracking-wider text-white/40 align-top">
                            ({item.tags.join(", ")})
                          </span>
                        )}
                      </h3>
                      <span className="text-gold font-sans ml-4 flex-shrink-0">{item.price}</span>
                    </div>
                    <p className="text-sm text-white/60 leading-relaxed font-sans">{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}

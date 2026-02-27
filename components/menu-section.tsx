"use client"

import { useState } from "react"

const categories = ["Antipasti", "Primi", "Secondi", "Dolci"] as const

type Category = (typeof categories)[number]

interface MenuItem {
  name: string
  description: string
  price: string
}

const menuItems: Record<Category, MenuItem[]> = {
  Antipasti: [
    {
      name: "Burrata Pugliese",
      description: "Creamy burrata, heirloom tomatoes, basil, aged balsamic",
      price: "18",
    },
    {
      name: "Carpaccio di Manzo",
      description: "Thinly sliced beef, arugula, capers, Parmigiano",
      price: "22",
    },
    {
      name: "Bruschetta Classica",
      description: "Toasted ciabatta, fresh tomatoes, garlic, extra virgin olive oil",
      price: "14",
    },
    {
      name: "Polpo alla Griglia",
      description: "Grilled octopus, roasted potatoes, Taggiasca olives, lemon",
      price: "24",
    },
  ],
  Primi: [
    {
      name: "Tagliatelle al Ragu",
      description: "Handmade egg pasta, slow-cooked Bolognese, Parmigiano",
      price: "26",
    },
    {
      name: "Risotto ai Funghi Porcini",
      description: "Carnaroli rice, wild porcini mushrooms, truffle oil",
      price: "28",
    },
    {
      name: "Cacio e Pepe",
      description: "Tonnarelli, Pecorino Romano, freshly cracked black pepper",
      price: "22",
    },
    {
      name: "Ravioli di Ricotta e Spinaci",
      description: "House-made ravioli, sage brown butter, pine nuts",
      price: "24",
    },
  ],
  Secondi: [
    {
      name: "Branzino al Forno",
      description: "Oven-roasted sea bass, fennel, capers, cherry tomatoes",
      price: "38",
    },
    {
      name: "Ossobuco alla Milanese",
      description: "Braised veal shank, saffron risotto, gremolata",
      price: "42",
    },
    {
      name: "Pollo alla Parmigiana",
      description: "Breaded chicken, San Marzano tomato, mozzarella, basil",
      price: "32",
    },
    {
      name: "Tagliata di Manzo",
      description: "Grilled ribeye, arugula, cherry tomatoes, Parmigiano",
      price: "44",
    },
  ],
  Dolci: [
    {
      name: "Tiramisu della Casa",
      description: "Mascarpone, espresso-soaked savoiardi, cocoa",
      price: "14",
    },
    {
      name: "Panna Cotta",
      description: "Vanilla bean cream, seasonal berry compote",
      price: "12",
    },
    {
      name: "Cannoli Siciliani",
      description: "Crispy shells, sweet ricotta, pistachios, chocolate",
      price: "13",
    },
    {
      name: "Affogato al Caffe",
      description: "Vanilla gelato, freshly pulled espresso, amaretti",
      price: "10",
    },
  ],
}

export function MenuSection() {
  const [activeCategory, setActiveCategory] = useState<Category>("Antipasti")

  return (
    <section id="menu" className="bg-secondary py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-accent">
            Il Menu
          </p>
          <h2 className="font-serif text-4xl leading-tight tracking-tight text-foreground md:text-5xl">
            Crafted with Love
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Each dish is a tribute to the regions of Italy, prepared with the freshest
            seasonal ingredients.
          </p>
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`rounded-sm px-6 py-2.5 text-sm uppercase tracking-widest transition-colors ${
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-background text-muted-foreground hover:text-foreground"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="mt-12 grid gap-0 divide-y divide-border md:grid-cols-2 md:divide-y-0">
          {menuItems[activeCategory].map((item, index) => (
            <div
              key={item.name}
              className={`flex items-start justify-between gap-4 py-6 md:px-6 ${
                index < 2 ? "md:border-b md:border-border" : ""
              }`}
            >
              <div>
                <h3 className="font-serif text-xl text-foreground">{item.name}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
              <p className="shrink-0 font-serif text-xl text-accent">
                {"$"}{item.price}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

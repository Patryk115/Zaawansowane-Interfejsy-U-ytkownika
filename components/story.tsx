import Image from "next/image"

export function Story() {
  return (
    <section id="story" className="bg-background py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-2 md:items-center md:gap-16">
        <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
          <Image
            src="/images/antipasti.jpg"
            alt="Beautifully prepared Italian antipasti with burrata and prosciutto"
            fill
            className="object-cover"
          />
        </div>
        <div>
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-accent">
            Our Story
          </p>
          <h2 className="font-serif text-4xl leading-tight tracking-tight text-foreground md:text-5xl">
            A Tradition of Passion and Craft
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Nestled in the heart of the city, La Dolce Vita brings the warmth and spirit
            of an Italian trattoria to your table. Our kitchen is guided by generations of
            culinary wisdom, where every dish tells a story of the land it comes from.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            From hand-rolled pasta made fresh each morning to produce sourced from local
            artisans, we believe the finest meals are born from the simplest, most
            exceptional ingredients.
          </p>
          <div className="mt-8 flex gap-12">
            <div>
              <p className="font-serif text-4xl text-foreground">25+</p>
              <p className="mt-1 text-sm uppercase tracking-widest text-muted-foreground">
                Years of Tradition
              </p>
            </div>
            <div>
              <p className="font-serif text-4xl text-foreground">100%</p>
              <p className="mt-1 text-sm uppercase tracking-widest text-muted-foreground">
                Fresh Ingredients
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

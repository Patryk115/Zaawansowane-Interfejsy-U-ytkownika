import Image from "next/image"

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-end overflow-hidden">
      <Image
        src="/images/hero.jpg"
        alt="Warm interior of La Dolce Vita restaurant with ambient candlelight"
        fill
        className="object-cover"
        priority
        quality={90}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-20 pt-40 md:pb-28">
        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-white/70">
          Authentic Italian Cuisine
        </p>
        <h1 className="font-serif text-6xl leading-none tracking-tight text-white md:text-8xl lg:text-9xl">
          La Dolce Vita
        </h1>
        <p className="mt-6 max-w-lg text-lg leading-relaxed text-white/80">
          A timeless celebration of Italian culinary tradition.
          Handmade pasta, seasonal ingredients, and recipes passed down through generations.
        </p>
        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <a
            href="#menu"
            className="rounded-sm bg-white px-8 py-3.5 text-center text-sm font-medium uppercase tracking-widest text-black transition-colors hover:bg-white/90"
          >
            View Menu
          </a>
          <a
            href="#contact"
            className="rounded-sm border border-white/40 px-8 py-3.5 text-center text-sm font-medium uppercase tracking-widest text-white transition-colors hover:bg-white/10"
          >
            Book a Table
          </a>
        </div>
      </div>
    </section>
  )
}

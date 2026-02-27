import Image from "next/image"

const images = [
  {
    src: "/images/pasta.jpg",
    alt: "Handmade tagliatelle with rich bolognese sauce",
    span: "md:col-span-2 md:row-span-2",
  },
  {
    src: "/images/antipasti.jpg",
    alt: "Italian antipasti platter with burrata and prosciutto",
    span: "",
  },
  {
    src: "/images/dolci.jpg",
    alt: "Classic Italian tiramisu dessert",
    span: "",
  },
]

export function Gallery() {
  return (
    <section id="gallery" className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-accent">
            Gallery
          </p>
          <h2 className="font-serif text-4xl leading-tight tracking-tight text-foreground md:text-5xl">
            A Feast for the Eyes
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-4 md:grid-rows-2">
          {images.map((image) => (
            <div
              key={image.src}
              className={`relative aspect-square img-hover rounded-sm ${image.span}`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
              />
              <span className="caption">{image.alt}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

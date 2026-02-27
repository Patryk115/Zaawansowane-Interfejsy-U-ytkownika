import Image from "next/image"
import * as React from "react"
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"
import { ChevronLeft, ChevronRight } from "lucide-react"

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
  const [open, setOpen] = React.useState(false)
  const [index, setIndex] = React.useState(0)

  React.useEffect(() => {
    if (!open) return

    function onKey(e: KeyboardEvent) {
      if (e.key === "ArrowRight") {
        setIndex((i) => (i + 1) % images.length)
      } else if (e.key === "ArrowLeft") {
        setIndex((i) => (i - 1 + images.length) % images.length)
      }
    }

    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [open])

  function openAt(i: number) {
    setIndex(i)
    setOpen(true)
  }

  function next() {
    setIndex((i) => (i + 1) % images.length)
  }

  function prev() {
    setIndex((i) => (i - 1 + images.length) % images.length)
  }

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
          {images.map((image, i) => (
            <button
              key={image.src}
              onClick={() => openAt(i)}
              aria-label={`Open image ${i + 1}: ${image.alt}`}
              className={`relative aspect-square img-hover rounded-sm ${image.span} p-0 border-0 bg-transparent`}
            >
              <Image src={image.src} alt={image.alt} fill className="object-cover" />
              <span className="caption">{image.alt}</span>
            </button>
          ))}
        </div>
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-5xl w-[min(96vw,1100px)] p-0 overflow-hidden bg-transparent border-0 shadow-none">
          <div className="relative w-full h-[70vh] md:h-[80vh] bg-black rounded-md">
            <Image src={images[index].src} alt={images[index].alt} fill className="object-contain bg-black" />

            <button
              onClick={prev}
              aria-label="Previous image"
              className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white hover:bg-black/70 focus:outline-none"
            >
              <ChevronLeft />
            </button>

            <button
              onClick={next}
              aria-label="Next image"
              className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white hover:bg-black/70 focus:outline-none"
            >
              <ChevronRight />
            </button>

            <div className="absolute left-1/2 bottom-4 -translate-x-1/2 rounded-md bg-black/50 px-3 py-1 text-sm text-white">
              {index + 1} / {images.length}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  )
}

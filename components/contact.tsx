import { MapPin, Phone, Clock } from "lucide-react"

const details = [
  {
    icon: MapPin,
    title: "Location",
    lines: ["42 Via Roma", "New York, NY 10013"],
  },
  {
    icon: Phone,
    title: "Reservations",
    lines: ["+1 (212) 555-0142", "info@ladolcevita.com"],
  },
  {
    icon: Clock,
    title: "Hours",
    lines: ["Tue - Sat: 5:30 PM - 11:00 PM", "Sun: 5:00 PM - 10:00 PM"],
  },
]

export function Contact() {
  return (
    <section id="contact" className="bg-primary py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-primary-foreground/70">
            Visit Us
          </p>
          <h2 className="font-serif text-4xl leading-tight tracking-tight text-primary-foreground md:text-5xl">
            Reserve Your Table
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-primary-foreground/80">
            Join us for an unforgettable evening of authentic Italian dining.
            We look forward to welcoming you.
          </p>
        </div>

        <div className="mt-16 grid gap-12 md:grid-cols-3">
          {details.map((detail) => (
            <div key={detail.title} className="text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-primary-foreground/20">
                <detail.icon className="h-5 w-5 text-primary-foreground" />
              </div>
              <h3 className="mt-4 font-serif text-xl text-primary-foreground">
                {detail.title}
              </h3>
              {detail.lines.map((line) => (
                <p
                  key={line}
                  className="mt-1 text-sm leading-relaxed text-primary-foreground/70"
                >
                  {line}
                </p>
              ))}
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href="tel:+12125550142"
            className="inline-block rounded-sm border border-primary-foreground/40 bg-primary-foreground px-10 py-4 text-sm font-medium uppercase tracking-widest text-primary transition-colors hover:bg-primary-foreground/90"
          >
            Call to Reserve
          </a>
        </div>
      </div>
    </section>
  )
}

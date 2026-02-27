export function Footer() {
  return (
    <footer className="border-t border-border bg-background py-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-6 md:flex-row md:justify-between">
        <a href="#" className="font-serif text-xl tracking-tight text-foreground">
          La Dolce Vita
        </a>

        <nav className="flex flex-wrap justify-center gap-6" aria-label="Footer navigation">
          {["Menu", "Our Story", "Gallery", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(" ", "-").replace("our-", "")}`}
              className="text-sm uppercase tracking-widest text-muted-foreground transition-colors hover:text-foreground"
            >
              {item}
            </a>
          ))}
        </nav>

        <p className="text-sm text-muted-foreground">
          {"© 2026 La Dolce Vita. All rights reserved."}
        </p>
      </div>
    </footer>
  )
}

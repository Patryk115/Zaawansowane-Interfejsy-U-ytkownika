import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Story } from "@/components/story"
import { MenuSection } from "@/components/menu-section"
import { Gallery } from "@/components/gallery"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Story />
      <MenuSection />
      <Gallery />
      <Contact />
      <Footer />
    </main>
  )
}

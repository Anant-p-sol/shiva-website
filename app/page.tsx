import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Services } from "@/components/services"
import { EventsPreview } from "@/components/events-preview"
import { Tablescapes } from "@/components/tablescapes"
import { Team } from "@/components/team"
import { Testimonials } from "@/components/testimonials"
import { ContactForm } from "@/components/contact-form"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Shiva Events | Premium Event Design & Decor",
  description:
    "Bespoke event planning, design, and decoration services for weddings, corporate events, and celebrations.",
}

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Services />
      <EventsPreview />
      <Tablescapes />
      <Team />
      <Testimonials />
      <ContactForm />
      <Footer />
    </main>
  )
}

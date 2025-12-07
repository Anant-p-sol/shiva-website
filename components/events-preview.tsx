import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from "lucide-react"

export function EventsPreview() {
  const events = [
    {
      title: "Luxury Buffet Pavilion",
      description: "Expansive, well-lit buffet setup for lavish wedding dining",
      image: "101.jpg",
    },
    {
      title: "Elegant Lounge Experience",
      description: "Plush seating with chandeliers and greenery ambience",
      image: "202.jpg",
    },
    {
      title: "Grand Gourmet Buffet Counter",
      description: "Classically styled buffet adorned with drapes and chandeliers",
      image: "303.jpg",
    },
  ]

  return (
    <section className="dark-section py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">Event Highlights</h2>
          <p className="text-lg text-gray-300 mb-6">
            With an extensive inventory and deep industry experience, we have successfully delivered high-profile luxury
            weddings, government ceremonies, and major concerts. Our capability to adapt to any event scale or style
            makes us a trusted partner for clients who demand excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {events.map((event) => (
            <div key={event.title} className="bg-gray-800 rounded-lg overflow-hidden card-shadow hover-lift group">
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={event.image || "/placeholder.svg"}
                  alt={event.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-serif font-bold text-white mb-2">{event.title}</h3>
                <p className="text-gray-400 leading-relaxed">{event.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/events"
            className="inline-flex items-center gap-2 bg-yellow-600 hover:bg-yellow-700 text-white px-8 py-4 rounded-lg font-medium transition-colors"
          >
            View All Events
            <ChevronRight size={20} />
          </Link>
        </div>
      </div>
    </section>
  )
}

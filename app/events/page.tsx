import Image from "next/image"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Events Gallery | Shiva Events",
  description: "Explore our curated portfolio of beautifully designed events and celebrations.",
}

const events = [
  {
    title: "Vibrant Outdoor Reception",
    category: "Wedding",
    image: "404.jpg?height=400&width=400",
  },
  {
    title: "Royal Indoor Mandap",
    category: "Wedding",
    image: "505.jpg?height=400&width=400",
  },
  {
    title: "Floral Selfie Entrance",
    category: "Wedding",
    image: "606.jpg?height=400&width=400",
  },
  {
    title: "Floral Entrance Boulevard",
    category: "Wedding",
    image: "707.jpg?height=400&width=400",
  },
  {
    title: "Outdoor Luxe Lounge Pavilion",
    category: "Wedding",
    image: "808.jpg?height=400&width=400",
  },
  {
    title: "Enchanting Varmala Stage",
    category: "Wedding",
    image: "909.jpg?height=400&width=400",
  },
  {
    title: "Green Floral Wedding Mandap",
    category: "Wedding",
    image: "1010.jpg?height=400&width=400",
  },
  {
    title: "Chandelier Floral Walkway",
    category: "Wedding",
    image: "1111.jpg?height=400&width=400",
  },
  {
    title: "Regal Varmala Ceremony Stage",
    category: "Wedding",
    image: "202.jpg?height=400&width=400",
  },
]

export default function EventsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />

      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-gray-900 mb-4">Events Gallery</h1>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Explore our portfolio of beautifully designed and executed events
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event, index) => (
              <div
                key={index}
                className="group rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-64 overflow-hidden bg-gray-100">
                  <Image
                    src={event.image || "/placeholder.svg"}
                    alt={event.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <div>
                      <p className="text-sm font-medium text-yellow-400 mb-1">{event.category}</p>
                      <h3 className="text-lg font-serif font-bold text-white">{event.title}</h3>
                    </div>
                  </div>
                </div>
                <div className="p-6 bg-white">
                  <p className="text-sm font-medium text-yellow-600 mb-2">{event.category}</p>
                  <h3 className="text-lg font-serif font-bold text-gray-900">{event.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

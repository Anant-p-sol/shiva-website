import Image from "next/image"
import { Star } from "lucide-react"

export function Testimonials() {
  const testimonials = [
    {
      name: "Priya & Arjun",
      event: "Wedding Celebration",
      quote: "Shiva Events transformed our dream into reality. Every detail was perfect!",
      avatar: "/indian-woman-client-1.jpg",
    },
    {
      name: "Rajesh Patel",
      event: "Corporate Gala",
      quote: "Professional, creative, and absolutely flawless execution. Highly recommended!",
      avatar: "/indian-man-client-2.jpg",
    },
    {
      name: "Kavya Sharma",
      event: "Birthday Celebration",
      quote: "The attention to detail and creative vision exceeded all expectations.",
      avatar: "/indian-woman-client-3.jpg",
    },
  ]

  return (
    <section className="py-20 md:py-32 dark-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span
            className="text-sm font-medium uppercase tracking-wider px-3 py-1 rounded-full"
            style={{ backgroundColor: "#d4a85a", color: "#2a1f17" }}
          >
            Client Stories
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mt-4 mb-4" style={{ color: "#d4a85a" }}>
            What Our Clients Say
          </h2>
          <p className="text-lg" style={{ color: "#e8c695" }}>
            Hear from those who experienced our artistry
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="p-8 rounded-lg card-shadow border-l-4"
              style={{ backgroundColor: "#3b2a20", borderLeftColor: "#d4a85a" }}
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="#d4a85a" style={{ color: "#d4a85a" }} />
                ))}
              </div>
              <p className="text-lg leading-relaxed mb-6 italic" style={{ color: "#e8c695" }}>
                "{testimonial.quote}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2" style={{ borderColor: "#d4a85a" }}>
                  <Image
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={testimonial.name}
                    width={48}
                    height={48}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-serif font-bold" style={{ color: "#e8c695" }}>
                    {testimonial.name}
                  </p>
                  <p className="text-sm" style={{ color: "#d4a85a" }}>
                    {testimonial.event}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

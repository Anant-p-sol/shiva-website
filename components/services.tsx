import Image from "next/image"

export function Services() {
  const services = [
    {
      title: "End-to-end Event Rentals & Complete Event Management",
      description: "For luxury weddings with comprehensive rental services and full event management.",
      image: "/wedding-design-flowers-ceremony.jpg",
    },
    {
      title: "Professional Support for Government Projects & Large-Scale Concerts",
      description: "Expert handling of government events and major concert logistics.",
      image: "/corporate-event-setup-professional.jpg",
    },
    {
      title: "Seamless Event Tenders",
      description: "For corporate and social functions with smooth tender management processes.",
      image: "/luxe-table-setting-gold-decor.jpg",
    },
    {
      title: "Customized Décor & Theme Design",
      description: "Tailored décor and theme design crafted to match your unique vision.",
      image: "/luxury-floral-arrangement-wedding.jpg",
    },
    {
      title: "Flawless Execution of High-Profile Government Events",
      description: "Meticulous attention to detail for prestigious government occasions.",
      image: "/event-lighting-elegant-ambiance.jpg",
    },
    {
      title: "Large Concert Management with Complex Logistics",
      description: "Expert handling of large-scale concert events with intricate technical requirements.",
      image: "/event-planning-coordination-luxury.jpg",
    },
  ]

  return (
    <section id="services" className="py-20 md:py-32" style={{ backgroundColor: "#f5f1ed" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span
            className="text-sm font-medium uppercase tracking-wider px-3 py-1 rounded-full"
            style={{ backgroundColor: "#e8c695", color: "#2a1f17" }}
          >
            Our Expertise
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold block mt-4 mb-4" style={{ color: "#2a1f17" }}>
            Our Services
          </h2>
          <p className="text-lg" style={{ color: "#3b2a20" }}>
            Comprehensive event solutions tailored to your needs and vision
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white rounded-lg overflow-hidden transition-all duration-300 hover:scale-105"
              style={{
                boxShadow: "0 10px 30px rgba(42, 31, 23, 0.15)",
                borderLeft: "4px solid #d4a85a",
                borderBottom: "4px solid #1fa089",
              }}
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-serif font-bold mb-2" style={{ color: "#2a1f17" }}>
                  {service.title}
                </h3>
                <p className="leading-relaxed" style={{ color: "#3b2a20" }}>
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

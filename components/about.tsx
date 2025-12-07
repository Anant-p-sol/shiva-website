import Image from "next/image"

export function About() {
  return (
    <section id="about" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div>
              <h2
                className="text-4xl md:text-5xl font-serif font-bold mt-4 relative inline-block"
                style={{ color: "#2a1f17" }}
              >
                About Company
                <div
                  style={{
                    position: "absolute",
                    bottom: "-12px",
                    left: 0,
                    width: "80px",
                    height: "4px",
                    background: "linear-gradient(90deg, #d4a85a 0%, #1fa089 100%)",
                    borderRadius: "2px",
                  }}
                ></div>
              </h2>
            </div>
            <p className="text-lg leading-relaxed pt-4" style={{ color: "#3b2a20" }}>
              We are a leading event rental and wedding services company with extensive inventory and three spacious
              warehouses, serving government events, concerts, and luxury weddings. We provide both rental services and
              full event partnerships through tenders for luxury weddings and other grand occasions.
            </p>
            <p className="text-lg leading-relaxed" style={{ color: "#3b2a20" }}>
              Our dedication to quality, precision, and flawless execution ensures that every event becomes a stunning
              and memorable experience.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-xl overflow-hidden image-shadow h-48 border-4" style={{ borderColor: "#d4a85a" }}>
              <Image
                src="/wedding-ceremony-outdoor-setup.jpg"
                alt="Wedding ceremony"
                width={192}
                height={192}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="rounded-xl overflow-hidden image-shadow h-48 border-4" style={{ borderColor: "#1fa089" }}>
              <Image
                src="/corporate-event-decoration-elegant.jpg"
                alt="Corporate event"
                width={192}
                height={192}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="rounded-xl overflow-hidden image-shadow h-48 border-4" style={{ borderColor: "#1fa089" }}>
              <Image
                src="/luxury-dinner-setup-gold-accents.jpg"
                alt="Dinner setup"
                width={192}
                height={192}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="rounded-xl overflow-hidden image-shadow h-48 border-4" style={{ borderColor: "#d4a85a" }}>
              <Image
                src="/floral-arrangement-event-design.jpg"
                alt="Floral arrangement"
                width={192}
                height={192}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

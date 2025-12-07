"use client"

import Image from "next/image"
import { Phone } from "lucide-react"

export function Team() {
  return (
    <section id="managed-by" className="py-20 md:py-32 bg-gradient-to-b from-white via-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-amber-100 rounded-full mb-4">
            <p className="text-sm font-semibold text-amber-800">LEADERSHIP</p>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6 text-balance">Managed By</h2>
        </div>

        {/* Managed By Section - Shiva Verma */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          {/* Image - Left on desktop, top on mobile */}
          <div className="order-1 lg:order-1 flex justify-center">
            <div className="relative w-full max-w-md">
                <div className="aspect-[3/4.5] overflow-hidden rounded-2xl shadow-2xl">
                <Image
                  src="IMG_5291.JPG"
                  alt="Shiva Verma"
                  width={500}
                  height={700}
                  className="w-full h-auto object-cover"
                  priority
                />
                </div>
              {/* Decorative accent */}
              <div
                className="absolute -bottom-4 -right-4 w-32 h-32 rounded-full opacity-20"
                style={{ backgroundColor: "var(--color-gold)" }}
              />
            </div>
          </div>

          {/* Content - Right on desktop, bottom on mobile */}
          <div className="order-2 lg:order-2 space-y-6">
            {/* Name */}
            <div>
              <h3 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-2">Shiva Verma</h3>
              <p className="text-lg font-bold tracking-wide" style={{ color: "var(--color-gold)" }}>
                Founder & Event Director
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-3 py-4 border-y border-gray-200">
              <div className="flex items-center gap-3">
                <Phone size={20} style={{ color: "var(--color-gold)" }} />
                <a href="tel:+919217283863" className="text-gray-700 hover:text-gray-900 font-medium">
                  +91 9217283863
                </a>
              </div>
            </div>

            {/* Bio */}
            <div className="space-y-4">
              <p className="text-gray-700 leading-relaxed text-lg">
                Shiva Verma is the driving force behind Shiva Events, bringing years of hands-on experience in managing
                luxury weddings, government functions, and large-scale concerts. With a passion for perfection and an
                eye for detail, he believes that every event should be a memorable story, crafted with elegance,
                discipline, and creativity. His commitment to client satisfaction and flawless execution has helped
                build Shiva Events into a trusted name in the industry.
              </p>
            </div>

            {/* Expertise Tags */}
            <div className="flex flex-wrap gap-2 pt-4">
              {["Luxury Weddings", "Event Management", "Corporate Functions", "Perfection", "Creativity"].map(
                (expertise) => (
                  <span
                    key={expertise}
                    className="px-4 py-2 rounded-full text-sm font-medium"
                    style={{
                      backgroundColor: "rgba(200, 137, 46, 0.1)",
                      color: "var(--color-gold)",
                    }}
                  >
                    {expertise}
                  </span>
                ),
              )}
            </div>

            {/* CTA */}
            <div className="pt-6">
              <a
                href="#contact"
                className="inline-block px-8 py-3 rounded-lg font-semibold transition-all duration-300"
                style={{
                  backgroundColor: "var(--color-gold)",
                  color: "white",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-2px)"
                  e.currentTarget.style.boxShadow = "0 8px 20px rgba(200, 137, 46, 0.3)"
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)"
                  e.currentTarget.style.boxShadow = "none"
                }}
              >
                Start Your Event Journey
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

"use client"

import Image from "next/image"
import { ChevronRight } from "lucide-react"

export function Hero() {
  const handleScroll = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="home" className="hero-gradient relative py-20 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-6 md:space-y-8">
            <div className="inline-block">
              <span
                className="text-sm font-medium uppercase tracking-wider px-4 py-2 rounded-full"
                style={{ backgroundColor: "#e8c695", color: "#2a1f17" }}
              >
                Bespoke Event Design
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-serif font-bold leading-tight" style={{ color: "#2a1f17" }}>
              Elegance in Every Detail, <span style={{ color: "#d4a85a" }}>Excellence in Every Event</span>
            </h1>
            <p className="text-lg md:text-xl leading-relaxed max-w-xl" style={{ color: "#3b2a20" }}>
              From intimate gatherings to grand celebrations, we craft unforgettable moments with meticulous attention
              to every detail. Our expert team brings your vision to life with elegance and creativity.
            </p>
            <button
              onClick={() => handleScroll("contact")}
              className="inline-flex items-center gap-2 text-white px-8 py-4 rounded-lg font-medium transition-all shadow-lg hover:shadow-xl hover:scale-105"
              style={{ background: "linear-gradient(135deg, #d4a85a 0%, #1fa089 100%)" }}
            >
              Explore Services
              <ChevronRight size={20} />
            </button>
          </div>

          {/* Right Image Collage */}
          <div className="relative h-96 md:h-[500px]">
            <div
              className="absolute bottom-0 left-0 w-48 md:w-64 h-56 md:h-72 rounded-2xl overflow-hidden image-shadow z-10 border-4"
              style={{ borderColor: "#d4a85a" }}
            >
              <Image
                src="/elegant-wedding-table-setting-flowers.jpg"
                alt="Wedding table decor"
                fill
                className="object-cover"
              />
            </div>

            <div
              className="absolute top-0 right-0 w-40 md:w-56 h-48 md:h-64 rounded-2xl overflow-hidden image-shadow z-20 border-4"
              style={{ borderColor: "#1fa089" }}
            >
              <Image
                src="/luxury-event-centerpiece-flowers-gold.jpg"
                alt="Event centerpiece"
                fill
                className="object-cover"
              />
            </div>

            <div
              className="absolute top-32 right-16 md:right-24 w-44 md:w-52 h-52 md:h-60 rounded-2xl overflow-hidden image-shadow z-15 border-4"
              style={{ borderColor: "#e8c695" }}
            >
              <Image
                src="/decorative-event-setup-green-teal-gold.jpg"
                alt="Event decoration"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

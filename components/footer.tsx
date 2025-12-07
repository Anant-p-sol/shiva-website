import Image from "next/image"
import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react"

export function Footer() {
  return (
    <footer className="dark-section py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center mb-12">
          <div className="w-16 h-16 relative">
            <Image src="/images/logo1.png" alt="Shiva Events Logo" width={64} height={64} className="object-contain" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <p className="text-sm leading-relaxed">Crafting unforgettable celebrations with elegance and precision.</p>
            <p className="text-xs" style={{ color: "#d4a85a" }}>
              Luxury. Precision. Excellence.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-serif font-bold" style={{ color: "#d4a85a" }}>
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#home" className="transition-colors hover:text-teal-400" style={{ color: "#e8c695" }}>
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="transition-colors hover:text-teal-400" style={{ color: "#e8c695" }}>
                  About
                </a>
              </li>
              <li>
                <a href="#services" className="transition-colors hover:text-teal-400" style={{ color: "#e8c695" }}>
                  Services
                </a>
              </li>
              <li>
                <a href="/events" className="transition-colors hover:text-teal-400" style={{ color: "#e8c695" }}>
                  Events
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-serif font-bold" style={{ color: "#d4a85a" }}>
              Contact Us
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex gap-2">
                <Phone size={16} className="flex-shrink-0 mt-0.5" style={{ color: "#d4a85a" }} />
                <a
                  href="tel:+919217283863"
                  className="transition-colors hover:text-teal-400"
                  style={{ color: "#e8c695" }}
                >
                  +91 9217283863
                </a>
              </li>
              <li className="flex gap-2">
                <Mail size={16} className="flex-shrink-0 mt-0.5" style={{ color: "#d4a85a" }} />
                <a
                  href="mailto:shivaevents07@gmail.com"
                  className="transition-colors hover:text-teal-400"
                  style={{ color: "#e8c695" }}
                >
                  shivaevents07@gmail.com
                </a>
              </li>
              <li className="flex gap-2">
                <MapPin size={16} className="flex-shrink-0 mt-0.5" style={{ color: "#d4a85a" }} />
                <span style={{ color: "#e8c695" }}>Plot no. 601, Village Sarfabad, Noida Sec 73</span>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div className="space-y-4">
            <h3 className="font-serif font-bold" style={{ color: "#d4a85a" }}>
              Follow Us
            </h3>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/share/1BqvFynX11/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:scale-110"
                style={{ color: "#d4a85a" }}
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://www.instagram.com/shivaevents07?igsh=YmRsMTVncW95OWwx&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:scale-110"
                style={{ color: "#d4a85a" }}
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="mailto:shivaevents07@gmail.com"
                className="transition-colors hover:scale-110"
                style={{ color: "#d4a85a" }}
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t py-8 text-center text-sm" style={{ borderTopColor: "#d4a85a" }}>
          <p>&copy; 2025 Shiva Events. All rights reserved. | Designed with elegance and luxury</p>
        </div>
      </div>
    </footer>
  )
}

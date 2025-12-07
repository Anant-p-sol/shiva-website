"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { useRouter, usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()
  const pathname = usePathname()

  const handleNavClick = (href: string) => {
    setIsOpen(false)

    if (href.startsWith("#")) {
      if (pathname !== "/") {
        router.push("/")
        setTimeout(() => {
          const element = document.querySelector(href)
          element?.scrollIntoView({ behavior: "smooth" })
        }, 500)
      } else {
        const element = document.querySelector(href)
        element?.scrollIntoView({ behavior: "smooth" })
      }
    } else {
      router.push(href)
    }
  }

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "/events", label: "Events" },
    { href: "#contact", label: "Contact" },
  ]

  return (
    <nav
      className="sticky top-0 z-50 bg-white border-b-2 shadow-md transition-all duration-300"
      style={{ borderBottomColor: "#d4a85a" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" onClick={() => setIsOpen(false)} className="flex items-center gap-3">
            <div className="w-14 h-14 relative flex-shrink-0">
              <Image
                src="/images/logo1.png"
                alt="Shiva Events Logo"
                width={56}
                height={56}
                className="object-contain"
              />
            </div>
            <span className="text-xl font-serif font-bold hidden sm:inline" style={{ color: "#d4a85a" }}>
              Shiva Events
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-sm font-medium transition-colors cursor-pointer bg-none border-none hover:text-teal-600"
                style={{ color: "#2a1f17", "--tw-text-opacity": 1 }}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg transition-colors"
            style={{ color: "#2a1f17" }}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t-2" style={{ borderTopColor: "#d4a85a" }}>
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="w-full text-left py-3 px-4 text-sm font-medium transition-colors bg-none border-none cursor-pointer"
                style={{ color: "#2a1f17" }}
              >
                {link.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}

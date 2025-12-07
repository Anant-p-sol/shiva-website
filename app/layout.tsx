import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Montserrat } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
})
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "Shiva Events | Premium Event Design & Decor",
  description:
    "Bespoke event planning, design, and decoration services for weddings, corporate events, and celebrations.",
  generator: "Next.js",
  icons: {
    icon: [
      {
        url: "/images/logo1.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/images/logo1.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/images/logo1.png",
        type: "image/svg+xml",
      },
    ],
    apple: "/images/logo1.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} ${playfairDisplay.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}

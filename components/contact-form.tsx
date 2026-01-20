"use client"

import type React from "react"
import { useState } from "react"
import { Mail, Phone, MapPin, Check, AlertCircle, Loader } from "lucide-react"

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [errorMessage, setErrorMessage] = useState("")

  /* ---------------- VALIDATION ---------------- */

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.name.trim()) {
      newErrors.name = "Name is required"
    } else if (formData.name.length < 2) {
      newErrors.name = "Name must be at least 2 characters"
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email"
    }

    if (formData.phone && formData.phone.length < 7) {
      newErrors.phone = "Phone must be at least 7 digits"
    }

    if (!formData.message.trim() || formData.message.length < 10) {
      newErrors.message = "Message must be at least 10 characters"
    }

    return newErrors
  }

  /* ---------------- SUBMIT ---------------- */

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const newErrors = validateForm()
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      setStatus("error")
      return
    }

    setErrors({})
    setStatus("loading")
    setErrorMessage("")

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "Failed to send email")
      }

      setStatus("success")
      setTimeout(() => {
        setFormData({ name: "", email: "", phone: "", message: "" })
        setStatus("idle")
      }, 3000)
    } catch (error) {
      setStatus("error")
      setErrorMessage(
        error instanceof Error ? error.message : "Failed to send email. Please try again."
      )
    }
  }

  /* ---------------- INPUT CONTROL (IMPORTANT PART) ---------------- */

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target

    // NAME: only letters + space, max 20 chars
    if (name === "name") {
      if (!/^[a-zA-Z\s]*$/.test(value)) return
      if (value.length > 20) return
    }

    // EMAIL: max 30 characters
    if (name === "email") {
      if (value.length > 30) return
    }

    // PHONE: only digits, max 15 digits
    if (name === "phone") {
      if (!/^\d*$/.test(value)) return
      if (value.length > 15) return
    }

    setFormData((prev) => ({ ...prev, [name]: value }))

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }))
    }
  }

  /* ---------------- UI ---------------- */

  return (
    <section id="contact" className="py-20 md:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16">

          {/* CONTACT INFO (unchanged) */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
                Get In Touch
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Ready to bring your event to life? We'd love to hear about your vision.
              </p>
            </div>

            <div className="space-y-6">
              <InfoItem icon={<Phone />} title="Phone" value="+91 9217283863" link="tel:+919217283863" />
              <InfoItem icon={<Mail />} title="Email" value="shivaevents07@gmail.com" link="mailto:shivaevents07@gmail.com" />
              <InfoItem
                icon={<MapPin />}
                title="Location"
                value={`Plot no. 601, Village Sarfabad,
Noida Sec 73, near Amrapali Zodiac,
Gate No. 2`}
              />
            </div>
          </div>

          {/* FORM */}
          <form onSubmit={handleSubmit} className="space-y-6">

            <Input
              label="Full Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              error={errors.name}
              placeholder="Your name"
              disabled={status === "loading"}
            />

            <Input
              label="Email Address"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              error={errors.email}
              placeholder="your@email.com"
              disabled={status === "loading"}
            />

            <Input
              label="Phone Number (Optional)"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              error={errors.phone}
              placeholder="Digits only"
              disabled={status === "loading"}
            />

            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                disabled={status === "loading"}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-yellow-600 focus:outline-none"
                placeholder="Tell us about your event..."
              />
              {errors.message && <ErrorText text={errors.message} />}
            </div>

            {status === "success" && <SuccessBox />}
            {status === "error" && errorMessage && <ErrorBox text={errorMessage} />}

            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full bg-yellow-600 hover:bg-yellow-700 disabled:bg-yellow-400 text-white py-3 rounded-lg font-medium flex items-center justify-center gap-2"
            >
              {status === "loading" && <Loader size={20} className="animate-spin" />}
              {status === "loading" ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

/* ---------------- SMALL REUSABLE UI PARTS ---------------- */

function InfoItem({ icon, title, value, link }: any) {
  return (
    <div className="flex gap-4">
      <div className="w-12 h-12 rounded-lg bg-yellow-100 flex items-center justify-center text-yellow-600">
        {icon}
      </div>
      <div>
        <h3 className="font-serif font-bold text-gray-900 mb-1">{title}</h3>
        {link ? (
          <a href={link} className="text-gray-700 hover:text-yellow-600">
            {value}
          </a>
        ) : (
          <p className="text-gray-700 whitespace-pre-line">{value}</p>
        )}
      </div>
    </div>
  )
}

function Input({ label, error, ...props }: any) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-900 mb-2">{label}</label>
      <input
        {...props}
        className={`w-full px-4 py-3 rounded-lg border ${
          error ? "border-red-500 bg-red-50" : "border-gray-300"
        } focus:outline-none focus:border-yellow-600`}
      />
      {error && <ErrorText text={error} />}
    </div>
  )
}

function ErrorText({ text }: { text: string }) {
  return (
    <p className="mt-2 text-sm text-red-600 flex items-center gap-1">
      <AlertCircle size={16} /> {text}
    </p>
  )
}

function SuccessBox() {
  return (
    <div className="p-4 bg-green-50 border border-green-200 rounded-lg flex items-center gap-3">
      <Check size={20} className="text-green-600" />
      <div>
        <p className="font-medium text-green-900">Message sent successfully!</p>
        <p className="text-sm text-green-700">We'll get back to you soon.</p>
      </div>
    </div>
  )
}

function ErrorBox({ text }: { text: string }) {
  return (
    <div className="p-4 bg-red-50 border border-red-200 rounded-lg flex items-center gap-3">
      <AlertCircle size={20} className="text-red-600" />
      <div>
        <p className="font-medium text-red-900">Error sending message</p>
        <p className="text-sm text-red-700">{text}</p>
      </div>
    </div>
  )
}

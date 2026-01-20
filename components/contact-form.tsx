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

  // ---------------- VALIDATION ----------------
  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.name.trim() || formData.name.length < 2) {
      newErrors.name = "Name must be at least 2 characters"
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!formData.email.trim() || !emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email"
    }

    if (formData.phone && !/^\d{7,15}$/.test(formData.phone.replace(/\s/g, ""))) {
      newErrors.phone = "Phone must be 7–15 digits"
    }

    if (!formData.message.trim() || formData.message.length < 10) {
      newErrors.message = "Message must be at least 10 characters"
    }

    return newErrors
  }

  // ---------------- SUBMIT ----------------
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
      setErrorMessage(error instanceof Error ? error.message : "Failed to send email. Please try again.")
    }
  }

  // ---------------- INPUT CHANGE (UPDATED PART) ----------------
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target

    // 🔒 PHONE INPUT HARD CONTROL
    if (name === "phone") {
      const sanitizedValue = value.replace(/[^0-9\s]/g, "")

      if (value !== sanitizedValue) {
        setErrors((prev) => ({
          ...prev,
          phone: "Phone number can contain digits only",
        }))
      } else if (errors.phone) {
        setErrors((prev) => ({ ...prev, phone: "" }))
      }

      setFormData((prev) => ({ ...prev, phone: sanitizedValue }))
      return
    }

    // Default behavior
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }))
    }
  }

  return (
    <section id="contact" className="py-20 md:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16">
          {/* CONTACT INFO */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">Get In Touch</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Ready to bring your event to life? We'd love to hear about your vision.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-yellow-100 flex items-center justify-center">
                  <Phone size={24} className="text-yellow-600" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-gray-900 mb-1">Phone</h3>
                  <a href="tel:+919217283863" className="text-gray-700 hover:text-yellow-600">
                    +91 9217283863
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-yellow-100 flex items-center justify-center">
                  <Mail size={24} className="text-yellow-600" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-gray-900 mb-1">Email</h3>
                  <a href="mailto:shivaevents07@gmail.com" className="text-gray-700 hover:text-yellow-600">
                    shivaevents07@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-yellow-100 flex items-center justify-center">
                  <MapPin size={24} className="text-yellow-600" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-gray-900 mb-1">Location</h3>
                  <p className="text-gray-700">
                    Plot no. 601, Village Sarfabad<br />
                    Noida Sec 73, near Amrapali Zodiac<br />
                    Gate No. 2
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CONTACT FORM */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* NAME */}
            <Input
              label="Full Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              error={errors.name}
              disabled={status === "loading"}
              placeholder="Your name"
            />

            {/* EMAIL */}
            <Input
              label="Email Address"
              name="email"
              value={formData.email}
              onChange={handleChange}
              error={errors.email}
              disabled={status === "loading"}
              placeholder="your@email.com"
            />

            {/* PHONE */}
            <Input
              label="Phone Number (Optional)"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              error={errors.phone}
              disabled={status === "loading"}
              placeholder="+91 9876543210"
              inputMode="numeric"
            />

            {/* MESSAGE */}
            <Textarea
              label="Message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              error={errors.message}
              disabled={status === "loading"}
              placeholder="Tell us about your event..."
            />

            {/* STATUS */}
            {status === "success" && (
              <div className="p-4 bg-green-50 border border-green-200 rounded-lg flex gap-3">
                <Check size={20} className="text-green-600" />
                <div>
                  <p className="font-medium text-green-900">Message sent successfully!</p>
                  <p className="text-sm text-green-700">We'll get back to you soon.</p>
                </div>
              </div>
            )}

            {status === "error" && errorMessage && (
              <div className="p-4 bg-red-50 border border-red-200 rounded-lg flex gap-3">
                <AlertCircle size={20} className="text-red-600" />
                <div>
                  <p className="font-medium text-red-900">Error sending message</p>
                  <p className="text-sm text-red-700">{errorMessage}</p>
                </div>
              </div>
            )}

            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full bg-yellow-600 hover:bg-yellow-700 disabled:bg-yellow-400 text-white py-3 rounded-lg font-medium flex justify-center gap-2"
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

/* --------- SMALL INPUT HELPERS (NO LOGIC CHANGE) --------- */

function Input({
  label,
  error,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement> & { label: string; error?: string }) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-900 mb-2">{label}</label>
      <input
        {...props}
        className={`w-full px-4 py-3 rounded-lg border ${
          error ? "border-red-500 bg-red-50" : "border-gray-300"
        } focus:outline-none`}
      />
      {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
    </div>
  )
}

function Textarea({
  label,
  error,
  ...props
}: React.TextareaHTMLAttributes<HTMLTextAreaElement> & { label: string; error?: string }) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-900 mb-2">{label}</label>
      <textarea
        {...props}
        className={`w-full px-4 py-3 rounded-lg border resize-none ${
          error ? "border-red-500 bg-red-50" : "border-gray-300"
        } focus:outline-none`}
      />
      {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
    </div>
  )
}

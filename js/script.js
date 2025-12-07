// Mobile Menu Toggle
const hamburger = document.getElementById("hamburger")
const navMenu = document.getElementById("navMenu")

if (hamburger && navMenu) {
  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active")
    navMenu.classList.toggle("active")
  })

  // Close menu when link is clicked
  const navLinks = navMenu.querySelectorAll(".nav-link")
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      hamburger.classList.remove("active")
      navMenu.classList.remove("active")
    })
  })
}

// Form Validation
const contactForm = document.getElementById("contactForm")

if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault()

    if (validateForm()) {
      // Show success message
      alert("Thank you for your message! We'll get back to you soon.")
      contactForm.reset()
      clearErrors()
    }
  })
}

function validateForm() {
  clearErrors()

  const name = document.getElementById("name")
  const email = document.getElementById("email")
  const phone = document.getElementById("phone")
  const message = document.getElementById("message")

  let isValid = true

  // Name validation
  if (name.value.trim() === "") {
    showError("name", "Please enter your name")
    isValid = false
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (email.value.trim() === "") {
    showError("email", "Please enter your email")
    isValid = false
  } else if (!emailRegex.test(email.value)) {
    showError("email", "Please enter a valid email address")
    isValid = false
  }

  // Phone validation
  const phoneRegex = /^\d{10,}$/
  const cleanPhone = phone.value.replace(/\D/g, "")
  if (phone.value.trim() === "") {
    showError("phone", "Please enter your phone number")
    isValid = false
  } else if (!phoneRegex.test(cleanPhone)) {
    showError("phone", "Please enter a valid phone number (at least 10 digits)")
    isValid = false
  }

  // Message validation
  if (message.value.trim() === "") {
    showError("message", "Please enter your message")
    isValid = false
  }

  return isValid
}

function showError(fieldId, message) {
  const field = document.getElementById(fieldId)
  const errorElement = document.getElementById(fieldId + "Error")

  field.classList.add("error")
  errorElement.textContent = message
}

function clearErrors() {
  const inputs = document.querySelectorAll(".form-group input, .form-group textarea")
  inputs.forEach((input) => {
    input.classList.remove("error")
  })

  const errorMessages = document.querySelectorAll(".error-message")
  errorMessages.forEach((error) => {
    error.textContent = ""
  })
}

// Smooth scroll behavior for older browsers
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const href = this.getAttribute("href")
    if (href !== "#" && document.querySelector(href)) {
      e.preventDefault()
      document.querySelector(href).scrollIntoView({
        behavior: "smooth",
      })
    }
  })
})

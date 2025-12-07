import nodemailer from "nodemailer"

export async function POST(request: Request) {
  try {
    const { name, email, phone, message } = await request.json()

    // Validate input
    if (!name || !email || !message) {
      return Response.json({ error: "Missing required fields" }, { status: 400 })
    }

    console.log("[v0] Sending email with:", { name, email, phone })

    // Create transporter using Gmail SMTP
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    })

    const submissionTime = new Date().toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    })

    // Send confirmation email to user
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Thank you for contacting Shiva Events",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1f2937;">Thank you for reaching out!</h2>
          <p>Hi ${name},</p>
          <p>We've received your message and will get back to you as soon as possible.</p>
          <p style="margin-top: 20px;">Best regards,<br><strong>Shiva Events Team</strong></p>
        </div>
      `,
    })

    // Send admin notification email
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.ADMIN_EMAIL,
      subject: `New Inquiry from Shiva Events Website - ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1f2937;">New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
          <p><strong>Date & Time:</strong> ${submissionTime}</p>
          <p><strong>Message:</strong></p>
          <p style="background-color: #f3f4f6; padding: 15px; border-radius: 5px;">
            ${message.replace(/\n/g, "<br>")}
          </p>
        </div>
      `,
    })

    console.log("[v0] Email sent successfully to user and admin")

    return Response.json({ success: true, message: "Email sent successfully" }, { status: 200 })
  } catch (error) {
    console.error("[v0] Email send error:", error)
    return Response.json({ error: error instanceof Error ? error.message : "Failed to send email" }, { status: 500 })
  }
}

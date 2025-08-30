"use server"

import nodemailer from "nodemailer"

interface ContactFormData {
  name: string
  email: string
  subject: string
  message: string
  queryCategory?: string    // optional
  queryOption?: string      // optional
}

export async function submitContactForm(data: ContactFormData) {
  try {
    // Update the transporter auth and email addresses
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    })

    // Update the email template
    const mailOptions = {
      from: `"${data.name}" <${data.email}>`,
      envelope: {
        from: process.env.EMAIL_USER,
        to: "easeanimateux@gmail.com",
      },
      to: "easeanimateux@gmail.com",
      subject: `New Contact Form Submission: ${data.subject}`,
      html: `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px;">
      <div style="text-align: center; margin-bottom: 30px;">
        <h1 style="color: #f97316; margin: 0;">EaseAnimateUX</h1>
        <p style="color: #666; margin: 5px 0;">New Contact Form Submission</p>
      </div>
      
      <div style="background: #f9f9f9; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
        <h2 style="color: #333; margin-top: 0;">Contact Details</h2>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Subject:</strong> ${data.subject}</p>
        ${
          data.queryCategory
            ? `<p><strong>Inquiry Type:</strong> ${data.queryCategory}</p>`
            : ""
        }
        ${
          data.queryOption
            ? `<p><strong>Selected Option:</strong> ${data.queryOption}</p>`
            : ""
        }
      </div>
      
      <div style="background: #fff; padding: 20px; border: 1px solid #eee; border-radius: 8px;">
        <h3 style="color: #333; margin-top: 0;">Message</h3>
        <p style="line-height: 1.6; color: #555;">${data.message}</p>
      </div>
      
      <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee;">
        <p style="color: #888; font-size: 14px;">
          This email was sent from the EaseAnimateUX contact form.<br>
          Reply directly to this email to respond to ${data.name}.
        </p>
      </div>
    </div>
  `,
      replyTo: data.email,
    }

    // Send email
    await transporter.sendMail(mailOptions)

    return { success: true }
  } catch (error) {
    console.error("Error sending email:", error)
    return {
      success: false,
      error: "Failed to send message. Please try again or contact us directly.",
    }
  }
}

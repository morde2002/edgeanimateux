"use server"

import { sendWhatsAppContactMessage } from "@/lib/whatsapp"

interface ContactFormData {
  name: string
  email: string
  subject: string
  message: string
  queryCategory?: string
  queryOption?: string
}

export async function submitContactForm(data: ContactFormData) {
  try {
    const extraDetails = [
      data.queryCategory && `Inquiry type: ${data.queryCategory}`,
      data.queryOption && `Selected option: ${data.queryOption}`,
    ].filter(Boolean)

    await sendWhatsAppContactMessage({
      name: data.name.trim(),
      email: data.email.trim(),
      subject: data.subject.trim(),
      message: [data.message.trim(), ...extraDetails].filter(Boolean).join("\n\n"),
    })

    return { success: true }
  } catch (error) {
    console.error("WhatsApp contact-form delivery error:", error)
    return {
      success: false,
      error: error instanceof Error ? error.message : "Failed to send message. Please try again.",
    }
  }
}

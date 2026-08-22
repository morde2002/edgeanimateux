type ContactMessage = {
  name: string
  email: string
  subject: string
  message: string
}

export async function sendWhatsAppContactMessage(data: ContactMessage) {
  const apiKey = process.env.CALLMEBOT_API_KEY
  const phone = process.env.CALLMEBOT_PHONE || "+254115588218"

  if (!apiKey) {
    console.error("CallMeBot is not configured. Missing CALLMEBOT_API_KEY.")
    throw new Error("Message delivery is not configured yet.")
  }

  const text = [
    "*New website enquiry*",
    `*Name:* ${data.name}`,
    `*Email:* ${data.email}`,
    `*Subject:* ${data.subject}`,
    "*Message:*",
    data.message,
  ].join("\n")
  const url = new URL("https://api.callmebot.com/whatsapp.php")
  url.searchParams.set("phone", phone)
  url.searchParams.set("text", text)
  url.searchParams.set("apikey", apiKey)

  const response = await fetch(url, { cache: "no-store", signal: AbortSignal.timeout(10_000) })
  const responseText = await response.text()

  if (!response.ok || responseText.toLowerCase().includes("error")) {
    console.error("CallMeBot API error:", response.status, responseText)
    throw new Error("Unable to deliver your message. Please try again.")
  }
}

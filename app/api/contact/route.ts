import { NextResponse } from "next/server"
import { sendWhatsAppContactMessage } from "@/lib/whatsapp"

const WINDOW_MS = 10 * 60 * 1000
const MAX_SUBMISSIONS_PER_WINDOW = 3
const submissionsByIp = new Map<string, number[]>()

function isRateLimited(ip: string) {
  const now = Date.now()
  const recent = (submissionsByIp.get(ip) || []).filter((time) => now - time < WINDOW_MS)

  if (recent.length >= MAX_SUBMISSIONS_PER_WINDOW) {
    submissionsByIp.set(ip, recent)
    return true
  }

  recent.push(now)
  submissionsByIp.set(ip, recent)
  return false
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const data = {
      name: typeof body.name === "string" ? body.name.trim() : "",
      email: typeof body.email === "string" ? body.email.trim() : "",
      subject: typeof body.subject === "string" ? body.subject.trim() : "",
      message: typeof body.message === "string" ? body.message.trim() : "",
    }
    const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown"

    // Hidden field: real visitors never fill it, while simple form bots commonly do.
    if (typeof body.website === "string" && body.website.trim()) {
      return NextResponse.json({ success: true })
    }

    if (!data.name || !data.email || !data.subject || !data.message) {
      return NextResponse.json({ error: "Please complete all required fields." }, { status: 400 })
    }

    if (!/^\S+@\S+\.\S+$/.test(data.email)) {
      return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 })
    }

    if (data.name.length > 100 || data.email.length > 254 || data.subject.length > 200 || data.message.length > 2_000) {
      return NextResponse.json({ error: "One or more fields are too long." }, { status: 400 })
    }

    if (isRateLimited(ip)) {
      return NextResponse.json({ error: "Too many messages. Please try again in 10 minutes." }, { status: 429 })
    }

    await sendWhatsAppContactMessage(data)
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Contact form delivery error:", error)
    const message = error instanceof Error ? error.message : "Unable to deliver your message."
    return NextResponse.json({ error: message }, { status: 500 })
  }
}

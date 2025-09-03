import type React from "react"
import type { Metadata } from "next"
import { Inter, Poppins } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Analytics } from "@vercel/analytics/next"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Xelerated Tech - Your Digital Solutions Partner",
  description:
    "Professional web development, digital solutions, and technology consulting services. Transform your business with cutting-edge digital experiences.",
  keywords: "web development, digital solutions, technology consulting, software development, UI/UX design",
  authors: [{ name: "Xelerated Tech" }],
  metadataBase: new URL('https://xeleratedtech.com'),
  creator: "Xelerated Tech",
  publisher: "Xelerated Tech",
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" }
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: "Xelerated Tech - Your Digital Solutions Partner",
    description: "Professional web development, digital solutions, and technology consulting services.",
    url: "https://xeleratedtech.com",
    siteName: "Xelerated Tech",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Xelerated Tech - Digital Solutions Partner",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Xelerated Tech - Your Digital Solutions Partner",
    description: "Professional web development, digital solutions, and technology consulting services.",
    images: ["/XeleratedTech-logo.png"],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${poppins.variable}`}>
      <body className="font-sans antialiased">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}

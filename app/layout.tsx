import type React from "react"
import type { Metadata } from "next"
import { Inter, Poppins } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

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
    icon: "/images/xelerated-logo-light.jpg",
    shortcut: "/images/xelerated-logo-light.jpg",
    apple: "/images/xelerated-logo-light.jpg",
  },
  openGraph: {
    title: "Xelerated Tech - Your Digital Solutions Partner",
    description: "Professional web development, digital solutions, and technology consulting services.",
    url: "https://xeleratedtech.com",
    siteName: "Xelerated Tech",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Xelerated Tech - Your Digital Solutions Partner",
    description: "Professional web development, digital solutions, and technology consulting services.",
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
        </ThemeProvider>
      </body>
    </html>
  )
}

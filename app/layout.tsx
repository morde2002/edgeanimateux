import type React from "react"
import type { Metadata } from "next"
import { Inter, Poppins } from "next/font/google"
import Script from "next/script"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Analytics } from "@vercel/analytics/next"
import { TawkTo } from "@/components/tawk-to"

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
  title: {
    default: "Xelerated Tech - Professional Web Design & Development in Kenya | Mobile Apps | UI/UX",
    template: "%s | Xelerated Tech"
  },
  description:
    "Leading web design & development company in Kenya. We build stunning websites, mobile apps, and UI/UX designs from KES 8,000. Serving Mombasa, Nairobi & across Kenya. ✓ Affordable ✓ Fast ✓ Professional. Get your free quote today!",
  keywords: [
    // Primary keywords
    "web design kenya", "web development kenya", "website design kenya", "web designer kenya",
    "website developer kenya", "web development company kenya", "website design company kenya",
    // Location-based
    "web design mombasa", "web developer mombasa", "website design nairobi", "web development nairobi",
    "web design services kenya", "affordable web design kenya", "cheap website design kenya",
    // Service-specific
    "mobile app development kenya", "ui ux design kenya", "ecommerce website kenya",
    "business website kenya", "portfolio website design", "landing page design kenya",
    // Long-tail
    "professional website design kenya", "custom website development kenya",
    "responsive web design kenya", "modern website design kenya", "website developer near me",
    // Related services
    "graphic design kenya", "logo design kenya", "digital marketing kenya",
    "seo services kenya", "wordpress developer kenya", "react developer kenya"
  ],
  authors: [{ name: "Xelerated Tech", url: "https://xeleratedtech.com" }],
  metadataBase: new URL('https://xeleratedtech.com'),
  creator: "Xelerated Tech",
  publisher: "Xelerated Tech",
  applicationName: "Xelerated Tech",
  category: "Technology",
  classification: "Web Development & Design Services",
  verification: {
    google: 'h2-ENtgUsjrxHbZVDWebG2mOhih3HUN4KDXsmGb7G6Q'
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
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
    type: "website",
    locale: "en_KE",
    url: "https://xeleratedtech.com",
    siteName: "Xelerated Tech",
    title: "Xelerated Tech - Professional Web Design & Development Services in Kenya",
    description: "Transform your business with stunning websites and mobile apps. Based in Kenya, serving clients nationwide. Affordable packages from KES 8,000. Free consultation available!",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Xelerated Tech - Professional Web Design & Development in Kenya",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@xeleratedtech",
    creator: "@xeleratedtech",
    title: "Xelerated Tech - Web Design & Development Kenya",
    description: "Professional websites & mobile apps from KES 8,000. ✓ Modern designs ✓ Fast delivery ✓ Kenyan-based. Get your free quote!",
    images: ["/XeleratedTech-logo.png"],
  },
  alternates: {
    canonical: "https://xeleratedtech.com",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${poppins.variable}`}>
      <head>
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9386442300245924"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </head>
      <body className="font-sans antialiased">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
          <Analytics />
          <TawkTo />
        </ThemeProvider>
      </body>
    </html>
  )
}
"use client"

import { useEffect } from 'react'

export function TawkTo() {
  useEffect(() => {
    // Check if already loaded
    if ((window as any).Tawk_API) {
      return
    }

    // Initialize Tawk_API
    ;(window as any).Tawk_API = (window as any).Tawk_API || {}
    ;(window as any).Tawk_LoadStart = new Date()

    // Create script
    const script = document.createElement('script')
    script.async = true
    script.src = 'https://embed.tawk.to/69654879895de4198b9001a5/1jepq67hn'
    script.charset = 'UTF-8'
    script.setAttribute('crossorigin', '*')

    // Append to body
    document.body.appendChild(script)

    // Log for debugging
    console.log('Tawk.to script loaded')
  }, [])

  return null
}

"use client"

import { useEffect } from 'react'

export function TawkTo() {
  useEffect(() => {
    // Tawk.to configuration
    const tawkToPropertyId = '69654879895de4198b9001a5'
    const tawkToWidgetId = '1jeppt9ct'

    // Check if Tawk.to script is already loaded
    if (document.getElementById('tawk-to-script')) {
      return
    }

    // Initialize Tawk_API
    ;(window as any).Tawk_API = (window as any).Tawk_API || {}
    ;(window as any).Tawk_LoadStart = new Date()

    // Create and inject script
    const script = document.createElement('script')
    script.id = 'tawk-to-script'
    script.async = true
    script.src = `https://embed.tawk.to/${tawkToPropertyId}/${tawkToWidgetId}`
    script.charset = 'UTF-8'
    script.setAttribute('crossorigin', '*')

    // Insert script
    const firstScript = document.getElementsByTagName('script')[0]
    firstScript.parentNode?.insertBefore(script, firstScript)

    // Cleanup on unmount
    return () => {
      const tawkScript = document.getElementById('tawk-to-script')
      if (tawkScript) {
        tawkScript.remove()
      }
      // Remove Tawk widget
      const tawkWidget = document.getElementById('tawk-to-chat-widget')
      if (tawkWidget) {
        tawkWidget.remove()
      }
    }
  }, [])

  return null
}

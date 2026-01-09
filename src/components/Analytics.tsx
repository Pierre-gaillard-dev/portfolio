"use client"

import { FC, useEffect } from "react"

const Analytics: FC = () => {
  useEffect(() => {
    // Load gtag.js
    const script1 = document.createElement("script")
    script1.src = "https://www.googletagmanager.com/gtag/js?id=G-X3HYVT2GZV"
    script1.async = true
    document.head.appendChild(script1)

    // Initialize Google Analytics
    const script2 = document.createElement("script")
    script2.innerHTML = `
			window.dataLayer = window.dataLayer || [];
			function gtag() {
				window.dataLayer.push(arguments);
			}
			gtag('js', new Date());
			gtag('config', 'G-X3HYVT2GZV');
		`
    document.head.appendChild(script2)

    // Cleanup on component unmount
    return () => {
      document.head.removeChild(script1)
      document.head.removeChild(script2)
    }
  }, [])

  return null
}

export default Analytics

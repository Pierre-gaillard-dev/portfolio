import type { Metadata } from "next"
import { ThemeProvider } from "@/contexts/ThemeContext"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import Analytics from "@/components/Analytics"
import CookieBanner from "@/components/CookieBanner"
import "@/styles/global.css"

export const metadata: Metadata = {
  title: {
    default: "Pierre Gaillard — Portfolio",
    template: "%s — Pierre Gaillard",
  },
  description: "Portfolio de Pierre Gaillard, développeur web passionné.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body>
        <ThemeProvider>
          <Header sticky />
          {children}
          <Footer />
          <Analytics />
          <CookieBanner />
        </ThemeProvider>
      </body>
    </html>
  )
}

import type { Metadata } from 'next'
import { ThemeProvider } from '@/contexts/ThemeContext'
import '@/styles/global.css'
import Analytics from '@/components/Analytics'
import CookieBanner from '@/components/CookieBanner'
import Footer from '@/components/Footer'
import Header from '@/components/Header'

export const metadata: Metadata = {
  title: {
    default: 'Pierre Gaillard — Portfolio',
    template: '%s — Pierre Gaillard',
  },
  description: 'Portfolio de Pierre Gaillard, développeur web passionné.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='fr' data-scroll-behaviour='smooth'>
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

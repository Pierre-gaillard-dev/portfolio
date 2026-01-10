'use client'

import { createContext, useContext, useEffect, useState } from 'react'
import { setCookie, getCookie } from '../util/cookiesHandler'

type Theme = 'light' | 'dark'

interface ThemeContextType {
  theme: Theme
  toggleTheme: () => void
}

export const ThemeContext = createContext<ThemeContextType>({
  theme: 'light',
  toggleTheme: () => {},
})

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<Theme | null>(null)
  const [mounted, setMounted] = useState(false)

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'))
  }

  useEffect(() => {
    const mount = async () => {
      setMounted(true)
      const savedTheme = getCookie('theme-preference') as Theme | null
      setTheme(savedTheme || 'light')
    }
    mount()
  }, [])

  useEffect(() => {
    if (!mounted || !theme) return
    const root = document.documentElement
    root.classList.toggle('dark-mode', theme === 'dark')
    setCookie('theme-preference', theme, 365)
  }, [theme, mounted])

  const contextValue: ThemeContextType = {
    theme: theme || 'light',
    toggleTheme,
  }

  // Éviter flash de contenu non stylé pendant SSR
  if (!mounted) {
    return <>{children}</>
  }

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}

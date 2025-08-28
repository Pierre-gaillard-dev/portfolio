import { useState, useEffect } from "react"

const BREAKPOINTS = {
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1400,
}

const useBreakpoints = () => {
  const [windowWidth, setWindowWidth] = useState<number>(0)

  useEffect(() => {
    if (typeof window === "undefined") return
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
    }

    window.addEventListener("resize", handleResize)
    handleResize()

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  const isAbove = (breakpoint: keyof typeof BREAKPOINTS) => {
    return windowWidth >= BREAKPOINTS[breakpoint]
  }

  const isBelow = (breakpoint: keyof typeof BREAKPOINTS) => {
    return windowWidth < BREAKPOINTS[breakpoint]
  }

  const isBetween = (
    min: keyof typeof BREAKPOINTS,
    max: keyof typeof BREAKPOINTS
  ) => {
    return windowWidth >= BREAKPOINTS[min] && windowWidth < BREAKPOINTS[max]
  }

  return { windowWidth, isAbove, isBelow, isBetween }
}

export type { BREAKPOINTS }

export default useBreakpoints

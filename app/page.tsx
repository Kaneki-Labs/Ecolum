"use client"

import { useEffect, useState } from "react"
import HeroSection from "@/components/home/hero-section"
import HowItWorks from "@/components/home/how-it-works"

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // Use requestAnimationFrame to ensure smooth initial render
    const frame = requestAnimationFrame(() => {
      setIsLoaded(true)
    })

    return () => cancelAnimationFrame(frame)
  }, [])

  return (
    <div
      className={`flex flex-col gap-16 pb-16 transition-opacity duration-500 ${isLoaded ? "opacity-100" : "opacity-0"}`}
    >
      <HeroSection />
      <HowItWorks />
    </div>
  )
}


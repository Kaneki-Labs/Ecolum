"use client"

import type React from "react"

import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"

export function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const [isLoading, setIsLoading] = useState(true)
  const [content, setContent] = useState(children)
  const [prevPathname, setPrevPathname] = useState("")

  // Handle initial page load
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 300)

    return () => clearTimeout(timer)
  }, [])

  // Handle page transitions
  useEffect(() => {
    if (prevPathname !== "" && prevPathname !== pathname) {
      setIsLoading(true)

      const timer = setTimeout(() => {
        setContent(children)
        setIsLoading(false)
      }, 300)

      return () => clearTimeout(timer)
    } else {
      setPrevPathname(pathname)
      setContent(children)
    }
  }, [pathname, children, prevPathname])

  return (
    <div className={`transition-opacity duration-500 ease-in-out ${isLoading ? "opacity-0" : "opacity-100"}`}>
      {content}
    </div>
  )
}


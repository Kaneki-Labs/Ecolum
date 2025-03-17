import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/layout/navbar"
import { PageTransition } from "@/components/layout/page-transition"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Ecolum - Recycle and Earn Rewards",
  description: "Our secure QR code system makes recycling rewarding with blockchain technology",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className}`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <div className="min-h-screen bg-[#FFFFFF] text-foreground relative overflow-hidden">
            {/* Subtle decorative elements */}
            <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-b from-[#f0f9ff]/30 to-transparent"></div>
            <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-[#e6f7ff]/20 to-transparent rounded-full blur-3xl -translate-y-1/4 translate-x-1/4"></div>
            <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-[#e1f5fe]/20 to-transparent rounded-full blur-3xl translate-y-1/4 -translate-x-1/4"></div>

            <div className="relative">
              <div className="bg-[#0B8A82] text-white text-xs md:text-sm py-2 overflow-hidden">
                <div className="relative flex overflow-x-hidden">
                  <div className="animate-marquee whitespace-nowrap py-1">
                    <span className="mx-4">RECYCLE SUSTAINABLY</span>
                    <span className="mx-4">•</span>
                    <span className="mx-4">EARN REWARDS</span>
                    <span className="mx-4">•</span>
                    <span className="mx-4">JOIN THE MOVEMENT</span>
                    <span className="mx-4">•</span>
                    <span className="mx-4">RECYCLE SUSTAINABLY</span>
                    <span className="mx-4">•</span>
                    <span className="mx-4">EARN REWARDS</span>
                    <span className="mx-4">•</span>
                    <span className="mx-4">JOIN THE MOVEMENT</span>
                  </div>
                  <div className="absolute top-0 animate-marquee2 whitespace-nowrap py-1">
                    <span className="mx-4">RECYCLE SUSTAINABLY</span>
                    <span className="mx-4">•</span>
                    <span className="mx-4">EARN REWARDS</span>
                    <span className="mx-4">•</span>
                    <span className="mx-4">JOIN THE MOVEMENT</span>
                    <span className="mx-4">•</span>
                    <span className="mx-4">RECYCLE SUSTAINABLY</span>
                    <span className="mx-4">•</span>
                    <span className="mx-4">EARN REWARDS</span>
                    <span className="mx-4">•</span>
                    <span className="mx-4">JOIN THE MOVEMENT</span>
                  </div>
                </div>
              </div>
              <Navbar />
              <main className="relative z-10">
                <PageTransition>{children}</PageTransition>
              </main>
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'
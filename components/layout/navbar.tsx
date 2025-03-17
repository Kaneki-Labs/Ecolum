"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { RecycleIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { useState } from "react"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { QrCode, Coins } from "lucide-react"

export default function Navbar() {
  const pathname = usePathname()
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  return (
    <nav className="border-b border-border/40 backdrop-blur-sm">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2 transition-all duration-300 hover:opacity-80">
          <div className="bg-[#0B8A82] p-1.5 rounded-md transition-transform duration-300 hover:scale-110">
            <RecycleIcon className="h-6 w-6 text-white" />
          </div>
          <span className="font-bold text-xl">Ecolum</span>
        </Link>

        <div className="hidden md:flex items-center gap-6">
          <Link
            href="/"
            className={cn(
              "text-sm font-medium transition-all duration-300 hover:text-[#0B8A82] relative after:absolute after:bottom-[-5px] after:left-0 after:h-[2px] after:w-0 after:bg-[#0B8A82] after:transition-all after:duration-300 hover:after:w-full",
              pathname === "/" ? "text-[#0B8A82] after:w-full" : "text-muted-foreground",
            )}
          >
            About
          </Link>
          <button
            onClick={() => setIsDialogOpen(true)}
            className={cn(
              "text-sm font-medium transition-all duration-300 hover:text-[#0B8A82] relative after:absolute after:bottom-[-5px] after:left-0 after:h-[2px] after:w-0 after:bg-[#0B8A82] after:transition-all after:duration-300 hover:after:w-full",
              pathname === "/#how-it-works" ? "text-[#0B8A82] after:w-full" : "text-muted-foreground",
            )}
          >
            How It Works
          </button>
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogContent className="sm:max-w-[500px] p-0 overflow-hidden border-[#0B8A82]/20 animate-scale-in">
              <DialogHeader className="bg-[#0B8A82] text-white p-4">
                <DialogTitle className="flex items-center gap-2 text-xl">
                  <RecycleIcon className="h-5 w-5" />
                  How Ecolum Works
                </DialogTitle>
              </DialogHeader>
              <div className="p-6 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-[#f8f9fa] p-4 rounded-lg border border-[#0B8A82]/10 flex flex-col items-center text-center space-y-3 transition-all duration-300 hover:shadow-md hover:border-[#0B8A82]/30">
                    <div className="bg-[#0B8A82]/10 p-3 rounded-full">
                      <QrCode className="h-6 w-6 text-[#0B8A82]" />
                    </div>
                    <h3 className="font-medium">Generate QR Code</h3>
                    <p className="text-sm text-muted-foreground">Create your unique QR code linked to your wallet</p>
                  </div>

                  <div className="bg-[#f8f9fa] p-4 rounded-lg border border-[#0B8A82]/10 flex flex-col items-center text-center space-y-3 transition-all duration-300 hover:shadow-md hover:border-[#0B8A82]/30">
                    <div className="bg-[#0B8A82]/10 p-3 rounded-full">
                      <RecycleIcon className="h-6 w-6 text-[#0B8A82]" />
                    </div>
                    <h3 className="font-medium">Recycle</h3>
                    <p className="text-sm text-muted-foreground">
                      Visit any Ecolum partner recycling center and scan your code
                    </p>
                  </div>

                  <div className="bg-[#f8f9fa] p-4 rounded-lg border border-[#0B8A82]/10 flex flex-col items-center text-center space-y-3 transition-all duration-300 hover:shadow-md hover:border-[#0B8A82]/30">
                    <div className="bg-[#0B8A82]/10 p-3 rounded-full">
                      <Coins className="h-6 w-6 text-[#0B8A82]" />
                    </div>
                    <h3 className="font-medium">Earn Rewards</h3>
                    <p className="text-sm text-muted-foreground">
                      Receive XLM tokens based on your recycling contribution
                    </p>
                  </div>
                </div>

                <div className="flex justify-center pt-2">
                  <Link
                    href="/#how-it-works"
                    onClick={() => setIsDialogOpen(false)}
                    className="bg-[#0B8A82] hover:bg-[#0B8A82]/90 text-white px-4 py-2 rounded-md transition-all duration-300 hover:translate-y-[-2px] hover:shadow-md"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </DialogContent>
          </Dialog>
          <Link href="/dashboard">
            <Button className="bg-[#0B8A82] hover:bg-[#0B8A82]/90 text-white transition-all duration-300 hover:translate-y-[-3px] hover:shadow-lg">
              Dashboard
            </Button>
          </Link>
        </div>

        <div className="md:hidden flex items-center gap-2">
          <Link href="/dashboard">
            <Button
              size="sm"
              className="bg-[#0B8A82] hover:bg-[#0B8A82]/90 text-white transition-all duration-300 hover:translate-y-[-2px] hover:shadow-md"
            >
              Dashboard
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  )
}


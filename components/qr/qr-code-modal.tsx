"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { QrCode, Download, Share2 } from "lucide-react"

export function QrCodeModal() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <Button
        variant="outline"
        className="border-[#0B8A82] text-[#0B8A82] hover:bg-[#0B8A82]/10 gap-2"
        onClick={() => setIsOpen(true)}
      >
        <QrCode className="h-4 w-4" />
        <span>Your Daily QR</span>
      </Button>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Your Daily QR Code</DialogTitle>
          <DialogDescription>Scan this code at any Ecolum recycling point</DialogDescription>
        </DialogHeader>
        <div className="flex flex-col items-center pt-4">
          <div className="bg-white p-4 rounded-lg mb-4 border">
            <img src="/placeholder.svg?height=200&width=200" alt="QR Code" className="h-[200px] w-[200px]" />
          </div>
          <p className="text-sm text-muted-foreground mb-4 text-center">Valid until: March 17, 2025 (24 hours)</p>
          <div className="flex gap-3 w-full">
            <Button className="flex-1 bg-[#0B8A82] hover:bg-[#0B8A82]/90 text-white gap-2">
              <Download className="h-4 w-4" />
              Download
            </Button>
            <Button variant="outline" className="flex-1 gap-2">
              <Share2 className="h-4 w-4" />
              Share
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}


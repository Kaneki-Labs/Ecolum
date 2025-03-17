"use client"

import type React from "react"

import { useState } from "react"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Wallet, ChevronRight } from "lucide-react"

export function ConnectWallet({ children }: { children?: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)
  const [isConnected, setIsConnected] = useState(false)

  const handleConnect = (walletType: string) => {
    // Simulate wallet connection
    console.log(`Connecting to ${walletType}...`)
    setIsConnected(true)
    setIsOpen(false)
  }

  if (isConnected && children) {
    return <>{children}</>
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      {children ? (
        <div className="w-full h-full flex flex-col items-center justify-center p-8" onClick={() => setIsOpen(true)}>
          <Wallet className="h-16 w-16 text-[#0B8A82] mb-4" />
          <h2 className="text-2xl font-bold mb-2">Connect Your Wallet</h2>
          <p className="text-muted-foreground text-center mb-6 max-w-md">
            Connect your wallet to access your dashboard, view your recycling history, and manage your rewards.
          </p>
          <Button className="bg-[#0B8A82] hover:bg-[#0B8A82]/90 text-white">Connect Wallet</Button>
        </div>
      ) : (
        <Button className="bg-[#0B8A82] hover:bg-[#0B8A82]/90 text-white gap-2" onClick={() => setIsOpen(true)}>
          <Wallet className="h-4 w-4" />
          Connect Wallet
        </Button>
      )}
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Connect Your Wallet</DialogTitle>
          <DialogDescription>Choose a wallet to connect to Ecolum</DialogDescription>
        </DialogHeader>
        <div className="pt-4 space-y-3">
          {[
            { name: "Stellar Wallet", icon: "⭐" },
            { name: "MetaMask", icon: "🦊" },
            { name: "Coinbase Wallet", icon: "🔵" },
            { name: "WalletConnect", icon: "🔗" },
          ].map((wallet) => (
            <button
              key={wallet.name}
              className="w-full flex items-center justify-between p-3 rounded-lg border hover:bg-muted/50 transition-colors"
              onClick={() => handleConnect(wallet.name)}
            >
              <div className="flex items-center gap-3">
                <div className="text-2xl">{wallet.icon}</div>
                <span>{wallet.name}</span>
              </div>
              <ChevronRight className="h-5 w-5 text-muted-foreground" />
            </button>
          ))}
          <p className="text-xs text-muted-foreground text-center pt-2">
            By connecting your wallet, you agree to our Terms of Service and Privacy Policy.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  )
}


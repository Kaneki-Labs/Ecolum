"use client"

import { useState, useEffect, useRef } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { QrCode, History, Wallet, Leaf, MapPin, TrendingUp, ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ConnectWallet } from "@/components/wallet/connect-wallet"

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("qr")
  const [mounted, setMounted] = useState(false)
  const [balance, setBalance] = useState(0)
  const [isBalanceVisible, setIsBalanceVisible] = useState(false)
  const initialRenderRef = useRef(true)

  // This ensures animations only run after component is mounted
  useEffect(() => {
    // Use requestAnimationFrame to ensure smooth initial render
    const frame = requestAnimationFrame(() => {
      setMounted(true)
    })

    return () => cancelAnimationFrame(frame)
  }, [])

  // Animation for counting up the balance
  useEffect(() => {
    if (!mounted) return

    if (activeTab === "wallet") {
      // Delay to ensure smooth transition
      const timer = setTimeout(() => {
        setIsBalanceVisible(true)
        const interval = setInterval(() => {
          setBalance((prev) => {
            if (prev >= 125) {
              clearInterval(interval)
              return 125
            }
            return prev + 1
          })
        }, 15)

        return () => clearInterval(interval)
      }, 300)

      return () => clearTimeout(timer)
    } else {
      setBalance(0)
      setIsBalanceVisible(false)
    }
  }, [activeTab, mounted])

  // Prevent animation on initial render
  useEffect(() => {
    if (initialRenderRef.current) {
      initialRenderRef.current = false
    }
  }, [])

  // Use a skeleton loader while content is mounting
  if (!mounted) {
    return (
      <div className="container py-8 animate-pulse">
        <div className="h-10 w-48 bg-gray-200 rounded-md mb-8"></div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-32 bg-gray-200 rounded-lg"></div>
          ))}
        </div>
        <div className="h-8 w-full bg-gray-200 rounded-md mb-8"></div>
        <div className="h-64 bg-gray-200 rounded-lg"></div>
      </div>
    )
  }

  return (
    <div className="container py-8">
      <ConnectWallet>
        <h1 className="text-3xl font-bold mb-8 animate-fade-in">Your Dashboard</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* Stats Card 1 */}
          <Card className="bg-[#f8f9fa] border-[#0B8A82]/20 shadow-[0_0_10px_rgba(11,138,130,0.1)] transition-all duration-500 hover:shadow-[0_5px_20px_rgba(11,138,130,0.2)] animate-slide-in-left">
            <CardHeader className="pb-2">
              <CardDescription>Total Recycled</CardDescription>
              <CardTitle className="text-3xl">24.5 kg</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-xs text-muted-foreground">+2.3 kg this week</div>
            </CardContent>
          </Card>

          {/* Stats Card 2 */}
          <Card className="bg-[#f8f9fa] border-[#0B8A82]/20 shadow-[0_0_10px_rgba(11,138,130,0.1)] transition-all duration-500 hover:shadow-[0_5px_20px_rgba(11,138,130,0.2)] animate-slide-in-up delay-100">
            <CardHeader className="pb-2">
              <CardDescription>XLM Earned</CardDescription>
              <CardTitle className="text-3xl">125 XLM</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-xs text-muted-foreground">≈ $12.50 USD</div>
            </CardContent>
          </Card>

          {/* Stats Card 3 */}
          <Card className="bg-[#f8f9fa] border-[#0B8A82]/20 shadow-[0_0_10px_rgba(11,138,130,0.1)] transition-all duration-500 hover:shadow-[0_5px_20px_rgba(11,138,130,0.2)] animate-slide-in-right delay-200">
            <CardHeader className="pb-2">
              <CardDescription>CO₂ Saved</CardDescription>
              <CardTitle className="text-3xl">12.3 kg</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-xs text-muted-foreground">Equivalent to planting 0.6 trees</div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="qr" className="w-full animate-fade-in delay-300" onValueChange={setActiveTab}>
          <TabsList className="grid grid-cols-3 mb-8">
            <TabsTrigger
              value="qr"
              className="data-[state=active]:bg-[#0B8A82] data-[state=active]:text-white transition-all duration-300"
            >
              <QrCode className="h-4 w-4 mr-2" />
              QR Code
            </TabsTrigger>
            <TabsTrigger
              value="history"
              className="data-[state=active]:bg-[#0B8A82] data-[state=active]:text-white transition-all duration-300"
            >
              <History className="h-4 w-4 mr-2" />
              History
            </TabsTrigger>
            <TabsTrigger
              value="wallet"
              className="data-[state=active]:bg-[#0B8A82] data-[state=active]:text-white transition-all duration-300"
            >
              <Wallet className="h-4 w-4 mr-2" />
              Wallet
            </TabsTrigger>
          </TabsList>

          {/* QR Tab Content */}
          <TabsContent value="qr" className="mt-0 animate-scale-in">
            <Card className="border-[#0B8A82]/20 shadow-[0_0_15px_rgba(11,138,130,0.15)] transition-all duration-500 hover:shadow-[0_5px_30px_rgba(11,138,130,0.2)]">
              <CardHeader>
                <CardTitle>Your Daily QR Code</CardTitle>
                <CardDescription>Scan this code at any Ecolum recycling point</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col items-center">
                <div className="bg-white p-4 rounded-lg mb-4 border transition-all duration-300 hover:shadow-lg">
                  <img src="/placeholder.svg?height=200&width=200" alt="QR Code" className="h-[200px] w-[200px]" />
                </div>
                <Button className="bg-[#0B8A82] hover:bg-[#0B8A82]/90 text-white transition-all duration-300 hover:translate-y-[-3px] hover:shadow-lg">
                  Download QR Code
                </Button>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <Card className="transition-all duration-500 hover:shadow-[0_5px_20px_rgba(11,138,130,0.15)] animate-slide-in-left delay-100">
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Leaf className="h-5 w-5 text-[#0B8A82]" />
                    <CardTitle className="text-lg">Recycling Tips</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 transition-all duration-300 hover:translate-x-1">
                      <span className="text-[#0B8A82] font-bold">•</span>
                      <span>Rinse containers before recycling to prevent contamination</span>
                    </li>
                    <li className="flex items-start gap-2 transition-all duration-300 hover:translate-x-1">
                      <span className="text-[#0B8A82] font-bold">•</span>
                      <span>Remove caps from plastic bottles</span>
                    </li>
                    <li className="flex items-start gap-2 transition-all duration-300 hover:translate-x-1">
                      <span className="text-[#0B8A82] font-bold">•</span>
                      <span>Flatten cardboard boxes to save space</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="transition-all duration-500 hover:shadow-[0_5px_20px_rgba(11,138,130,0.15)] animate-slide-in-right delay-200">
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-[#0B8A82]" />
                    <CardTitle className="text-lg">Nearby Centers</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex justify-between p-2 rounded-md transition-all duration-300 hover:bg-[#0B8A82]/5 hover:translate-x-1">
                      <span>EcoCenter Downtown</span>
                      <span className="text-sm text-muted-foreground">0.8 mi</span>
                    </li>
                    <li className="flex justify-between p-2 rounded-md transition-all duration-300 hover:bg-[#0B8A82]/5 hover:translate-x-1">
                      <span>Green Point Recycling</span>
                      <span className="text-sm text-muted-foreground">1.2 mi</span>
                    </li>
                    <li className="flex justify-between p-2 rounded-md transition-all duration-300 hover:bg-[#0B8A82]/5 hover:translate-x-1">
                      <span>Community Recycle Hub</span>
                      <span className="text-sm text-muted-foreground">2.5 mi</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* History Tab Content */}
          <TabsContent value="history" className="mt-0 animate-fade-in">
            <Card className="transition-all duration-500 hover:shadow-[0_5px_20px_rgba(11,138,130,0.15)]">
              <CardHeader>
                <CardTitle>Recycling History</CardTitle>
                <CardDescription>Your recent recycling activities</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { date: "Mar 15, 2025", type: "Plastic", weight: "1.2 kg", reward: "5 XLM" },
                    { date: "Mar 10, 2025", type: "Paper", weight: "3.5 kg", reward: "12 XLM" },
                    { date: "Mar 5, 2025", type: "Glass", weight: "2.8 kg", reward: "10 XLM" },
                    { date: "Feb 28, 2025", type: "Aluminum", weight: "0.5 kg", reward: "8 XLM" },
                  ].map((item, index) => (
                    <div
                      key={index}
                      style={{ animationDelay: `${index * 100}ms` }}
                      className="flex justify-between items-center p-3 rounded-lg bg-[#f8f9fa] border border-border/50 transition-all duration-300 hover:shadow-md hover:border-[#0B8A82]/30 hover:translate-x-1 animate-slide-in-up opacity-0"
                    >
                      <div>
                        <div className="font-medium">{item.date}</div>
                        <div className="text-sm text-muted-foreground">
                          {item.type} • {item.weight}
                        </div>
                      </div>
                      <div className="text-[#0B8A82] font-semibold transition-all duration-300 group-hover:scale-110">
                        +{item.reward}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Wallet Tab Content - Enhanced */}
          <TabsContent value="wallet" className="mt-0">
            <div className="animate-gentle-scale origin-top">
              <Card className="transition-all duration-500 hover:shadow-[0_5px_20px_rgba(11,138,130,0.15)] overflow-hidden">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Wallet className="h-5 w-5 text-[#0B8A82]" />
                    <span>Your Wallet</span>
                  </CardTitle>
                  <CardDescription>Manage your XLM rewards</CardDescription>
                </CardHeader>
                <CardContent>
                  {/* Enhanced Balance Card */}
                  <div className="relative overflow-hidden bg-gradient-to-br from-[#0B8A82]/5 to-[#0B8A82]/20 p-6 rounded-lg border border-[#0B8A82]/20 mb-6 transition-all duration-500 hover:shadow-[0_5px_20px_rgba(11,138,130,0.15)] transform hover:scale-[1.02] origin-center">
                    {/* Decorative elements */}
                    <div className="absolute top-0 right-0 w-24 h-24 bg-[#0B8A82]/5 rounded-full blur-xl -translate-y-1/2 translate-x-1/2"></div>
                    <div className="absolute bottom-0 left-0 w-16 h-16 bg-[#0B8A82]/5 rounded-full blur-lg translate-y-1/2 -translate-x-1/2"></div>

                    {/* Animated graph line in background */}
                    <div className="absolute bottom-0 left-0 right-0 h-12 opacity-20">
                      <svg viewBox="0 0 100 20" className="w-full h-full">
                        <path
                          d="M0,10 Q10,5 20,10 T40,10 T60,10 T80,5 T100,10"
                          fill="none"
                          stroke="#0B8A82"
                          strokeWidth="1"
                          className="animate-draw-path"
                        />
                      </svg>
                    </div>

                    {/* Content */}
                    <div className="relative z-10">
                      <div className="text-sm text-muted-foreground mb-1 animate-fade-in">Available Balance</div>
                      <div className="flex items-baseline gap-2 mb-2">
                        <div
                          className={`text-3xl font-bold transition-opacity duration-500 ${isBalanceVisible ? "opacity-100" : "opacity-0"}`}
                        >
                          <span className="inline-flex items-center">
                            <span>{balance}</span>
                            <span className="ml-2 text-[#0B8A82]">XLM</span>
                            <TrendingUp className="ml-2 h-4 w-4 text-green-500" />
                          </span>
                        </div>
                      </div>
                      <div className="text-sm text-muted-foreground animate-fade-in flex items-center">
                        <span>≈ $12.50 USD</span>
                        <span className="inline-flex items-center ml-2 text-xs px-2 py-0.5 bg-green-100 text-green-800 rounded-full animate-fade-in delay-500">
                          <ArrowUpRight className="h-3 w-3 mr-1" />
                          +2.4%
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Transaction Summary */}
                  <div className="mb-6 animate-fade-in" style={{ animationDelay: "300ms" }}>
                    <h3 className="text-sm font-medium mb-3">Recent Activity</h3>
                    <div className="grid grid-cols-3 gap-2">
                      <div className="bg-[#f8f9fa] p-3 rounded-lg border border-border/50 text-center transition-all duration-300 hover:border-[#0B8A82]/30 hover:shadow-sm">
                        <div className="text-xs text-muted-foreground">This Week</div>
                        <div className="font-semibold text-[#0B8A82]">+15 XLM</div>
                      </div>
                      <div className="bg-[#f8f9fa] p-3 rounded-lg border border-border/50 text-center transition-all duration-300 hover:border-[#0B8A82]/30 hover:shadow-sm">
                        <div className="text-xs text-muted-foreground">This Month</div>
                        <div className="font-semibold text-[#0B8A82]">+42 XLM</div>
                      </div>
                      <div className="bg-[#f8f9fa] p-3 rounded-lg border border-border/50 text-center transition-all duration-300 hover:border-[#0B8A82]/30 hover:shadow-sm">
                        <div className="text-xs text-muted-foreground">Total</div>
                        <div className="font-semibold text-[#0B8A82]">125 XLM</div>
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="grid grid-cols-2 gap-4 animate-slide-in-up" style={{ animationDelay: "400ms" }}>
                    <Button className="bg-[#0B8A82] hover:bg-[#0B8A82]/90 text-white transition-all duration-300 hover:translate-y-[-3px] hover:shadow-lg relative overflow-hidden group">
                      <span className="relative z-10">Withdraw</span>
                      <span className="absolute inset-0 w-full h-full bg-white/20 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></span>
                    </Button>
                    <Button
                      variant="outline"
                      className="border-[#0B8A82] text-[#0B8A82] hover:bg-[#0B8A82]/10 transition-all duration-300 hover:translate-y-[-3px] hover:shadow-lg relative overflow-hidden group"
                    >
                      <span className="relative z-10">Transaction History</span>
                      <span className="absolute inset-0 w-full h-full bg-[#0B8A82]/5 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></span>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </ConnectWallet>
    </div>
  )
}


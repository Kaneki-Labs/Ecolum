import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { QrCode } from "lucide-react"

export default function HeroSection() {
  return (
    <section className="container pt-16 md:pt-24">
      <div className="flex flex-col items-center text-center gap-6">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight animate-fade-in">
          Recycle and <span className="text-[#0B8A82]">Earn Rewards</span>
        </h1>
        <p className="text-lg text-muted-foreground max-w-[700px] animate-fade-in delay-200">
          Our secure QR code system makes recycling rewarding with blockchain technology
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mt-4 animate-fade-in delay-300">
          <Button
            size="lg"
            className="bg-[#0B8A82] hover:bg-[#0B8A82]/90 text-white hover:translate-y-[-3px] hover:shadow-lg transition-all duration-300"
          >
            Get Started
          </Button>
        </div>

        <Card className="mt-8 max-w-[800px] w-full backdrop-blur-md bg-[#f8f9fa] border-[#0B8A82]/20 shadow-[0_0_15px_rgba(11,138,130,0.15)] animate-scale-in delay-400 hover:shadow-[0_5px_30px_rgba(11,138,130,0.2)] transition-all duration-500">
          <CardContent className="p-6 md:p-8">
            <div className="flex flex-col md:flex-row gap-6 items-center">
              <div className="bg-[#0B8A82]/10 p-4 rounded-full animate-pulse-slow">
                <QrCode className="h-12 w-12 text-[#0B8A82]" />
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-xl font-semibold mb-2">Blockchain-Powered Recycling</h3>
                <p className="text-muted-foreground">
                  Ecolum connects your recycling efforts directly to cryptocurrency rewards on the Stellar blockchain.
                  Scan your unique QR code at recycling points, verify your contribution, and earn XLM tokens while
                  helping the environment.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}


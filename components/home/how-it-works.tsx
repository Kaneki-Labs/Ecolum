import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { QrCode, RecycleIcon, Coins, Sparkles } from "lucide-react"

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="container py-16">
      <div className="flex flex-col items-center text-center gap-8">
        <div className="flex items-center gap-2 animate-fade-in">
          <Sparkles className="h-5 w-5 text-[#0B8A82]" />
          <h2 className="text-3xl font-bold">How It Works</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-[1000px]">
          {/* Card 1 */}
          <Card className="border-t-4 border-t-[#0B8A82] bg-[#f8f9fa] backdrop-blur-sm transition-all duration-500 hover:shadow-[0_10px_30px_rgba(11,138,130,0.2)] hover:translate-y-[-5px] animate-slide-in-left delay-100">
            <CardContent className="p-6 flex flex-col items-center gap-4">
              <div className="bg-[#0B8A82]/10 p-4 rounded-full transition-all duration-300 hover:bg-[#0B8A82]/20 group">
                <QrCode className="h-8 w-8 text-[#0B8A82] transition-transform duration-300 group-hover:scale-110" />
              </div>
              <h3 className="text-xl font-semibold">Generate QR Code</h3>
              <p className="text-muted-foreground">
                Create your unique QR code through the Ecolum app or website. This code is linked to your personal
                wallet.
              </p>
            </CardContent>
          </Card>

          {/* Card 2 */}
          <Card className="border-t-4 border-t-[#0B8A82] bg-[#f8f9fa] backdrop-blur-sm transition-all duration-500 hover:shadow-[0_10px_30px_rgba(11,138,130,0.2)] hover:translate-y-[-5px] animate-slide-in-up delay-200">
            <CardContent className="p-6 flex flex-col items-center gap-4">
              <div className="bg-[#0B8A82]/10 p-4 rounded-full transition-all duration-300 hover:bg-[#0B8A82]/20 group">
                <RecycleIcon className="h-8 w-8 text-[#0B8A82] transition-transform duration-300 group-hover:scale-110" />
              </div>
              <h3 className="text-xl font-semibold">Recycle</h3>
              <p className="text-muted-foreground">
                Visit any Ecolum partner recycling center. Scan your QR code and deposit your recyclable materials.
              </p>
            </CardContent>
          </Card>

          {/* Card 3 */}
          <Card className="border-t-4 border-t-[#0B8A82] bg-[#f8f9fa] backdrop-blur-sm transition-all duration-500 hover:shadow-[0_10px_30px_rgba(11,138,130,0.2)] hover:translate-y-[-5px] animate-slide-in-right delay-300">
            <CardContent className="p-6 flex flex-col items-center gap-4">
              <div className="bg-[#0B8A82]/10 p-4 rounded-full transition-all duration-300 hover:bg-[#0B8A82]/20 group">
                <Coins className="h-8 w-8 text-[#0B8A82] transition-transform duration-300 group-hover:scale-110" />
              </div>
              <h3 className="text-xl font-semibold">Earn Rewards</h3>
              <p className="text-muted-foreground">
                Receive XLM tokens directly to your wallet based on the weight and type of materials you've recycled.
              </p>
            </CardContent>
          </Card>
        </div>

        <Button className="mt-4 bg-[#0B8A82] hover:bg-[#0B8A82]/90 text-white hover:translate-y-[-3px] hover:shadow-lg transition-all duration-300 animate-fade-in delay-400">
          Learn More
        </Button>
      </div>
    </section>
  )
}


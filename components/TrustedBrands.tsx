"use client"

import Image from "next/image"

export default function TrustedBrands() {
  const partners = [
    {
      name: "Aditya Birla Capital",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/aditiya-uWiiG8s2k6m2X9V5cMSNnrKiSQWVJn.png",
    },
    {
      name: "Fullerton India",
      logo: "/images/fullerton-india.png",
    },
    {
      name: "Axis Bank",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Axis%20Bank-Jw9zVU0zjejnXPTBQqgCOEcL5mU8eK.jpeg",
    },
    {
      name: "HDFC Bank",
      logo: "/HDFC-Bank-Logo.png",
    },
    {
      name: "ICICI Bank",
      logo: "/images/icici-bank.png",
    },
    {
      name: "Yes Bank",
      logo: "/abstract-geometric-logo.png",
    },
    {
      name: "Tata Capital",
      logo: "/tata-capital-abstract.png",
    },
    {
      name: "Poonawalla Fincorp",
      logo: "/images/poonawalla-fincorp.jpeg",
    },
    {
      name: "UGRO Capital",
      logo: "/ugro-capital-abstract.png",
    },
    {
      name: "Federal Bank",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Federal%20Bank-02lO0n5lnuBSn8kMCX6R08RKBr4qWG.png",
    },
    {
      name: "IndusInd Bank",
      logo: "/images/indusind-bank.png",
    },
    {
      name: "CLX",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CLX-ky5cAfkT0aKDE6JBjUXuWovR18l8rR.jpeg",
    },
    {
      name: "Hero FinCorp",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Hero%20FinCorp-yqpSwnlLMQkWsv5kbRukzWg8Cx2EMZ.jpeg",
    },
    {
      name: "IntelleGrow",
      logo: "/images/intellegrow.png",
    },
    {
      name: "SME Corner",
      logo: "/abstract-sme-growth.png",
    },
    {
      name: "IDFC First Bank",
      logo: "/images/idfc-first-bank.png",
    },
    {
      name: "Standard Chartered",
      logo: "/placeholder.svg?height=60&width=120&query=Standard+Chartered+logo",
    },
    {
      name: "Kotak Mahindra Bank",
      logo: "/images/kotak-mahindra-bank.png",
    },
    {
      name: "Centrum",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Centrum-RbBfrfb6wAjQCyGmjFQfzNmF77LhaH.jpeg",
    },
    {
      name: "Chola",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Chola-nnef06fzHCnAVDaWuxqH3EZVDN2Ytu.jpeg",
    },
    {
      name: "Growth Source",
      logo: "/placeholder.svg?height=60&width=120&query=Growth+Source+logo",
    },
    {
      name: "Dhanvarsha",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Dhanvarsha-wsgtkgAK8AX1A5ckTOrWFGjiFKAGH7.jpeg",
    },
    {
      name: "Indifi",
      logo: "/images/indifi.jpeg",
    },
    {
      name: "Lendingkart",
      logo: "/images/lendingkart.jpeg",
    },
    {
      name: "Edelweiss",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Edelweiss-UxrNlYFBWnEtGa1KNdoq3q80KY4Mnh.png",
    },
    {
      name: "Bajaj Finserv",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Bajaj%20Finserv-S7yPjT3gMilYw0OSU8Bwzh1C3VIV3D.png",
    },
    {
      name: "Axis Finance",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Axis%20Finance-JN4QJzEC6hHDL0iV5ej0Yv1AxXlrMq.png",
    },
    {
      name: "Finplex",
      logo: "/placeholder.svg?height=60&width=120&query=Finplex+logo",
    },
    {
      name: "Mahindra Finance",
      logo: "/images/mahindra-finance.jpeg",
    },
    {
      name: "Bandhan Bank",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Bandhan%20Bank-BAPMo03DM8eRyMZ2uN5O7wjlxLSlf4.jpeg",
    },
    {
      name: "Ambit",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Ambit-RQgzSOdLALuSxS0xlkgj598d1RCOWZ.jpeg",
    },
    {
      name: "MAS Financial",
      logo: "/images/mas-financial.png",
    },
    {
      name: "SMC Finance",
      logo: "/placeholder.svg?height=60&width=120&query=SMC+Finance+logo",
    },
    {
      name: "Piramal Capital & Housing Finance",
      logo: "/images/piramal-capital-housing-finance.jpeg",
    },
    {
      name: "Finree Finance Pvt. Ltd.",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/finetree-d7pmen1tKMOywhoVrtigQc33XOCVHd.png",
    },
    {
      name: "Inditrade",
      logo: "/images/inditrade.jpeg",
    },
  ]

  return (
    <section className="py-20 bg-secondary/50 w-full">
      <div className="w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Our Banking Partners</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {partners.map((partner) => (
            <div key={partner.name} className="flex justify-center items-center p-4 bg-white rounded-lg shadow-md">
              {partner.logo ? (
                <Image
                  src={partner.logo || "/placeholder.svg"}
                  alt={partner.name}
                  width={120}
                  height={60}
                  className="object-contain"
                  style={{
                    width: "auto", // Make sure width is auto
                    height: "auto", // Make sure height is auto
                    maxWidth: "100%", // Ensure it doesn't exceed its container
                    maxHeight: "100%", // Ensure it doesn't exceed its container
                  }}
                />
              ) : (
                <span>{partner.name}</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

import HeroSection from "@/components/HeroSection"
import WhatWeProvide from "@/components/WhatWeProvide"
import WhyChooseFinonest from "@/components/WhyChooseFinonest"
import OurServices from "@/components/OurServices"
import BecomePartner from "@/components/BecomePartner"
import TrustedBrands from "@/components/TrustedBrands"
import Testimonials from "@/components/Testimonials"
import LatestNews from "@/components/LatestNews"
import ContactSupport from "@/components/ContactSupport"
import GabsWidget from "@/components/GabsWidget"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />
      <WhatWeProvide />
      <WhyChooseFinonest />
      <OurServices />
      <BecomePartner />
      <TrustedBrands />
      <GabsWidget />
      <Testimonials />
      <LatestNews />
      <ContactSupport />
    </div>
  )
}

import HeroSection from "@/components/HeroSection"
import OurServices from "@/components/OurServices"
import WhyChooseUs from "@/components/WhyChooseUs"
import Testimonials from "@/components/Testimonials"
import LatestNews from "@/components/LatestNews"
import TrustedBrands from "@/components/TrustedBrands"
import OurProducts from "@/components/OurProducts"
import GabsWidget from "@/components/GabsWidget"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />
      <OurProducts />
      <OurServices />
      <WhyChooseUs />
      <GabsWidget />
      <TrustedBrands />
      <Testimonials />
      <LatestNews />
    </div>
  )
}

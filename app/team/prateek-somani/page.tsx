import PageLayout from "@/components/PageLayout"
import Image from "next/image"
import { LinkedinIcon, MailIcon, PhoneIcon } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function PrateekSomaniPage() {
  return (
    <PageLayout title="Prateek Somani">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="relative w-64 h-64 mx-auto mb-8">
            <div className="absolute inset-0 rounded-full border-4 border-[#40CDB2]" />
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-02-10%20at%204.12.33%20PM%20(2)-iHkJ5Xu26dmYZiUHpdT4Xhadqmut5h.jpeg"
              alt="Prateek Somani"
              fill
              className="rounded-full object-cover"
            />
          </div>
          <h1 className="text-4xl font-bold mb-4">Prateek Somani</h1>
          <p className="text-xl text-gray-600 mb-6">Chief Financial Officer</p>
          <div className="flex justify-center gap-4">
            <Button variant="outline" size="icon">
              <LinkedinIcon className="h-5 w-5" />
            </Button>
            <Button variant="outline" size="icon">
              <MailIcon className="h-5 w-5" />
            </Button>
            <Button variant="outline" size="icon">
              <PhoneIcon className="h-5 w-5" />
            </Button>
          </div>
        </div>

        <div className="prose max-w-none">
          <h2>About</h2>
          <p>
            Prateek Somani is the Chief Financial Officer at Finonest, bringing over a decade of experience in financial
            services and strategic planning. He plays a crucial role in shaping the company's financial strategy and
            growth initiatives.
          </p>

          <h2>Experience</h2>
          <ul>
            <li>Over 10 years of experience in financial services</li>
            <li>Expert in strategic financial planning and risk management</li>
            <li>Led multiple successful financial transformations</li>
            <li>Strong background in investment management and advisory</li>
          </ul>

          <h2>Education</h2>
          <ul>
            <li>MBA in Finance from prestigious institution</li>
            <li>Chartered Financial Analyst (CFA)</li>
            <li>Bachelor's in Commerce with honors</li>
          </ul>

          <h2>Vision</h2>
          <p>
            Prateek's vision is to make financial services more accessible and transparent for everyone. He believes in
            leveraging technology to simplify complex financial processes and empower individuals to make better
            financial decisions.
          </p>
        </div>
      </div>
    </PageLayout>
  )
}

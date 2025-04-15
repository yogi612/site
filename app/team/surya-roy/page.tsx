import PageLayout from "@/components/PageLayout"
import Image from "next/image"
import { LinkedinIcon, MailIcon, PhoneIcon } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function SuryaRoyPage() {
  return (
    <PageLayout title="Surya Roy">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="relative w-64 h-64 mx-auto mb-8">
            <div className="absolute inset-0 rounded-full border-4 border-[#40CDB2]" />
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-02-10%20at%204.12.33%20PM-iLuR8P4Oj75MR4oWfRjJlqb60IIN7a.jpeg"
              alt="Surya Roy"
              fill
              className="rounded-full object-cover"
            />
          </div>
          <h1 className="text-4xl font-bold mb-4">Surya Roy</h1>
          <p className="text-xl text-gray-600 mb-6">Chief Executive Officer</p>
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
            Surya Roy is the Chief Executive Officer at Finonest, bringing extensive experience in financial services
            and leadership. Under his guidance, Finonest has grown to become a leading provider of innovative financial
            solutions.
          </p>

          <h2>Experience</h2>
          <ul>
            <li>Over 15 years of experience in financial services</li>
            <li>Proven track record in business growth and expansion</li>
            <li>Expert in strategic planning and execution</li>
            <li>Strong focus on customer-centric solutions</li>
          </ul>

          <h2>Vision</h2>
          <p>
            Surya's vision is to make financial services accessible to everyone through innovative technology and
            customer-centric solutions. He believes in creating lasting value for customers, partners, and stakeholders.
          </p>

          <h2>Leadership Philosophy</h2>
          <p>
            As a leader, Surya emphasizes the importance of innovation, integrity, and inclusive growth. He believes in
            building strong teams and fostering a culture of excellence and continuous learning.
          </p>
        </div>
      </div>
    </PageLayout>
  )
}

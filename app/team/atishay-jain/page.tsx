import PageLayout from "@/components/PageLayout"
import Image from "next/image"
import { LinkedinIcon, MailIcon, PhoneIcon } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function AtishayJainPage() {
  return (
    <PageLayout title="Atishay Jain">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="relative w-64 h-64 mx-auto mb-8">
            <div className="absolute inset-0 rounded-full border-4 border-[#40CDB2]" />
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-02-10%20at%204.12.34%20PM-PPfYmTmOpcUFfKoDC2wReIjWjxRj0o.jpeg"
              alt="Atishay Jain"
              fill
              className="rounded-full object-cover"
            />
          </div>
          <h1 className="text-4xl font-bold mb-4">Atishay Jain</h1>
          <p className="text-xl text-gray-600 mb-6">Chief Technology Officer</p>
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
            Atishay Jain serves as the Chief Technology Officer at Finonest, where he leads the technological innovation
            and digital transformation initiatives. His expertise in fintech has been instrumental in building
            Finonest's cutting-edge digital platform.
          </p>

          <h2>Experience</h2>
          <ul>
            <li>15+ years of experience in technology and fintech</li>
            <li>Expert in digital transformation and innovation</li>
            <li>Led development of multiple successful fintech platforms</li>
            <li>Strong background in cybersecurity and data protection</li>
          </ul>

          <h2>Education</h2>
          <ul>
            <li>Master's in Computer Science</li>
            <li>Multiple certifications in fintech and cybersecurity</li>
            <li>Bachelor's in Technology</li>
          </ul>

          <h2>Vision</h2>
          <p>
            Atishay's vision is to leverage technology to revolutionize the financial services industry. He believes in
            creating seamless, secure, and user-friendly digital experiences that make financial services accessible to
            all.
          </p>
        </div>
      </div>
    </PageLayout>
  )
}

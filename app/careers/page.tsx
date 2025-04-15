import Image from "next/image"
import Link from "next/link"
import PageLayout from "@/components/PageLayout"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const jobOpenings = [
  { title: "Financial Advisor", department: "Advisory Services", location: "Mumbai", id: "FA001" },
  { title: "Software Engineer", department: "Technology", location: "Bangalore", id: "SE001" },
  { title: "Risk Analyst", department: "Risk Management", location: "Delhi", id: "RA001" },
  { title: "Customer Support Specialist", department: "Customer Service", location: "Hyderabad", id: "CS001" },
  { title: "Marketing Manager", department: "Marketing", location: "Mumbai", id: "MM001" },
  { title: "Data Scientist", department: "Analytics", location: "Pune", id: "DS001" },
]

export default function CareersPage() {
  return (
    <PageLayout title="Careers at Finonest">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-12">
          <Image
            src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3"
            alt="Finonest team"
            width={1000}
            height={500}
            className="rounded-lg shadow-md mb-8 w-full object-cover"
          />
          <h2 className="text-2xl font-bold mb-4">Join Our Team</h2>
          <p className="text-lg mb-4">
            At Finonest, we're revolutionizing the financial services industry. Join our dynamic team and be part of a
            company that's making a real impact on people's financial lives.
          </p>
          <h3 className="text-xl font-semibold mb-2">Why Work at Finonest?</h3>
          <ul className="list-disc list-inside space-y-2 mb-4">
            <li>Innovative and fast-paced work environment</li>
            <li>Opportunities for professional growth and development</li>
            <li>Competitive salary and benefits package</li>
            <li>Work with cutting-edge technologies</li>
            <li>Make a positive impact on people's financial lives</li>
          </ul>
        </div>

        <h2 className="text-2xl font-bold mb-6">Current Openings</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {jobOpenings.map((job) => (
            <Card key={job.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>{job.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-2">Department: {job.department}</p>
                <p className="text-gray-600 mb-4">Location: {job.location}</p>
                <Link href={`/careers/${job.id}`}>
                  <Button>View Details</Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-primary/10 rounded-lg p-6 mt-8">
          <h2 className="text-2xl font-bold mb-4">Don't See a Perfect Fit?</h2>
          <p className="mb-4">
            We're always on the lookout for talented individuals to join our team. If you don't see a position that
            matches your skills, send us your resume anyway. We'd love to know more about you and how you could
            contribute to Finonest's mission.
          </p>
          <Link href="/careers/apply">
            <Button variant="default">Submit Your Resume</Button>
          </Link>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-4">Life at Finonest</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Image
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3"
              alt="Finonest team collaboration"
              width={500}
              height={300}
              className="rounded-lg shadow-md"
            />
            <div>
              <h3 className="text-xl font-semibold mb-2">Collaborative Environment</h3>
              <p className="mb-4">
                At Finonest, we believe in the power of teamwork. Our open and collaborative work environment fosters
                creativity, innovation, and personal growth.
              </p>
              <h3 className="text-xl font-semibold mb-2">Work-Life Balance</h3>
              <p className="mb-4">
                We understand the importance of maintaining a healthy work-life balance. Finonest offers flexible work
                arrangements and promotes a culture that respects personal time.
              </p>
              <h3 className="text-xl font-semibold mb-2">Continuous Learning</h3>
              <p className="mb-4">
                We're committed to helping our employees grow both personally and professionally. Finonest provides
                numerous opportunities for skill development, including workshops, training programs, and mentorship
                initiatives.
              </p>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}

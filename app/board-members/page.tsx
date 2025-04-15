import PageLayout from "@/components/PageLayout"
import Image from "next/image"

const boardMembers = [
  {
    name: "Surya Mohan Roy",
    position: "CEO",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-02-10%20at%204.12.33%20PM-rb3j2GQ1RWMXhREW12RVswO471iONF.jpeg",
  },
  {
    name: "Prateek Somani",
    position: "CFO",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-02-10%20at%204.12.33%20PM%20(2)-iHkJ5Xu26dmYZiUHpdT4Xhadqmut5h.jpeg",
  },
  {
    name: "Atishay Jain",
    position: "CTO",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-02-10%20at%204.12.34%20PM-PPfYmTmOpcUFfKoDC2wReIjWjxRj0o.jpeg",
  },
  // Add more board members as needed
]

export default function BoardMembersPage() {
  return (
    <PageLayout title="Board Members">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {boardMembers.map((member) => (
          <div key={member.name} className="text-center">
            <Image
              src={member.image || null}
              alt={member.name}
              width={200}
              height={200}
              className="rounded-full mx-auto mb-4"
            />
            <h2 className="text-xl font-semibold">{member.name}</h2>
            <p className="text-gray-600">{member.position}</p>
          </div>
        ))}
      </div>
    </PageLayout>
  )
}

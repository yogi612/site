import PageLayout from "@/components/PageLayout"

export default function PrivacyPolicyPage() {
  return (
    <PageLayout title="Privacy Policy">
      <p>
        At Finonest, we are committed to protecting your privacy and ensuring the security of your personal information.
        This Privacy Policy outlines how we collect, use, disclose, and safeguard your data when you use our services or
        visit our website.
      </p>
      <h2 className="text-2xl font-semibold mt-6 mb-4">Information We Collect</h2>
      <p>We collect various types of information to provide and improve our services, including:</p>
      <ul className="list-disc pl-6 mt-2">
        <li>Personal identification information (Name, email address, phone number, etc.)</li>
        <li>Financial information (Income details, credit history, etc.)</li>
        <li>Usage data (How you interact with our website and services)</li>
      </ul>
      <h2 className="text-2xl font-semibold mt-6 mb-4">How We Use Your Information</h2>
      <p>We use the collected information for various purposes, including:</p>
      <ul className="list-disc pl-6 mt-2">
        <li>Providing and maintaining our services</li>
        <li>Improving and personalizing user experience</li>
        <li>Processing loan applications and financial assessments</li>
        <li>Communicating with you about our services and updates</li>
      </ul>
      <p className="mt-4">
        For more detailed information about our privacy practices, please contact our customer support team.
      </p>
    </PageLayout>
  )
}

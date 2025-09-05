import PageLayout from "@/components/PageLayout"

export default function PrivacyPolicyPage() {
  return (
    <PageLayout title="Privacy Policy">
      <p className="mt-4">
        When you visit the <strong>Finonest</strong> website or send emails to us, you are 
        communicating with us electronically. We may communicate with you by email, SMS, 
        RCS, or by posting notices on the website. For contractual purposes, you consent 
        to receive communications from us electronically, and you agree that all 
        agreements, notices, disclosures, and other communications that we provide to you 
        electronically satisfy any legal requirement that such communications be in 
        writing. This condition does not affect your statutory rights.
      </p>

      <p className="mt-4">
        You understand that once you register as a Finonest user on the Finonest platform, 
        and upon placing any order on our website, we shall be entitled to use your 
        registered mobile number on the website to send transaction-related SMS or RCS to 
        you, irrespective of DND services being activated on your mobile. We may 
        occasionally send promotional SMS or RCS to your registered mobile number.
      </p>

      <p className="mt-4">
        The customer hereby authorizes Finonest to send transactional SMS or RCS to 
        their registered number, even if the number is registered under the DND 
        ("Do Not Disturb") service.
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
        For more detailed information about our privacy practices, please contact our 
        customer support team.
      </p>
    </PageLayout>
  )
}

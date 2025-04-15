import PageLayout from "@/components/PageLayout"

export default function DisclaimerPage() {
  return (
    <PageLayout title="Disclaimer">
      <p>
        The information provided on Finonest's website and through our services is for general informational purposes
        only. While we strive to keep the information up to date and correct, we make no representations or warranties
        of any kind, express or implied, about the completeness, accuracy, reliability, suitability or availability with
        respect to the website or the information, products, services, or related graphics contained on the website for
        any purpose.
      </p>
      <h2 className="text-2xl font-semibold mt-6 mb-4">Financial Decisions</h2>
      <p>
        Any reliance you place on such information is therefore strictly at your own risk. In no event will we be liable
        for any loss or damage including without limitation, indirect or consequential loss or damage, or any loss or
        damage whatsoever arising from loss of data or profits arising out of, or in connection with, the use of this
        website or our services.
      </p>
      <h2 className="text-2xl font-semibold mt-6 mb-4">Third-Party Links</h2>
      <p>
        Through this website you are able to link to other websites which are not under the control of Finonest. We have
        no control over the nature, content and availability of those sites. The inclusion of any links does not
        necessarily imply a recommendation or endorse the views expressed within them.
      </p>
      <h2 className="text-2xl font-semibold mt-6 mb-4">Content Accuracy</h2>
      <p>
        We take all reasonable steps to ensure the accuracy of the content on our website. However, we do not guarantee
        or warrant the accuracy, completeness, or usefulness of any information on the site and disclaim all liability
        and responsibility arising from any reliance placed on such materials by any visitor to our website, or by
        anyone who may be informed of any of its contents.
      </p>
      <p className="mt-4">For more information about our disclaimer, please contact our customer support team.</p>
    </PageLayout>
  )
}

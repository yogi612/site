import { JoinNowForm } from "./JoinNowForm"

export default function BecomePartner() {
  return (
    <section className="py-20 bg-primary text-black w-full">
      <div className="w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Start Your Own Business – Be Our DSA Partner</h2>
          <p className="text-xl mb-8">
            Join our network of Direct Selling Agents and unlock a world of opportunities. Enjoy competitive
            commissions, comprehensive training, and ongoing support to build your successful financial services
            business.
          </p>
          <JoinNowForm />
        </div>
      </div>
    </section>
  )
}

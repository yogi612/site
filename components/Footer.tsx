import Link from "next/link"
import { MapPin, Phone, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Finonest</h3>
            <p className="text-gray-400 mb-4">
              Your trusted partner for all financial solutions. We help you make smarter financial decisions.
            </p>
            <div className="flex items-start space-y-2 flex-col">
              <div className="flex items-center">
                <MapPin className="h-5 w-5 mr-2 text-primary" />
                <address className="text-gray-400 not-italic text-sm">
                  AA-15, Basement Floor,
                  <br />
                  Opposite Jaipur Hospital,
                  <br />
                  Near Gopalpura Bypass,
                  <br />
                  Tonk Road, Jai Ambey Nagar,
                  <br />
                  Jaipur, Rajasthan 302018
                </address>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-white transition-colors">
                  Our Services
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-gray-400 hover:text-white transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-400 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services/personal-loans" className="text-gray-400 hover:text-white transition-colors">
                  Personal Loans
                </Link>
              </li>
              <li>
                <Link href="/services/business-loans" className="text-gray-400 hover:text-white transition-colors">
                  Business Loans
                </Link>
              </li>
              <li>
                <Link href="/services/home-loans" className="text-gray-400 hover:text-white transition-colors">
                  Home Loans
                </Link>
              </li>
              <li>
                <Link href="/services/vehicle-loans" className="text-gray-400 hover:text-white transition-colors">
                  Vehicle Loans
                </Link>
              </li>
              <li>
                <Link href="/services/credit-score" className="text-gray-400 hover:text-white transition-colors">
                  Credit Score
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-primary" />
                <p className="text-gray-400">+91 9057778111</p>
                <p className="text-gray-400">+91 9057778222</p>
                <p className="text-gray-400">+91 9057778333</p>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-primary" />
                <p className="text-gray-400">info@finonest.com</p>
              </div>
            </div>
            <div className="mt-4">
              <h4 className="text-lg font-semibold mb-2">Follow Us</h4>
              <div className="flex space-x-4">{/* Social media icons would go here */}</div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Finonest. All rights reserved.</p>
          <div className="flex justify-center space-x-4 mt-4">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-conditions" className="hover:text-white transition-colors">
              Terms & Conditions
            </Link>
            <Link href="/disclaimer" className="hover:text-white transition-colors">
              Disclaimer
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

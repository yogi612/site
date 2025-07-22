"use client"

import { Target, Shield, Trophy, Heart, MapPin, DollarSign, Users, Star, TrendingUp, Award, Clock } from "lucide-react"
import Image from "next/image"
import PageLayout from "@/components/PageLayout"
import { useState } from "react"
import { motion } from "framer-motion"

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const stats = [
  { number: "7+", label: "Years Experience", icon: Clock },
  { number: "50K+", label: "Happy Customers", icon: Users },
  { number: "₹10Cr+", label: "Annual Turnover", icon: DollarSign },
  { number: "18", label: "Branches", icon: MapPin },
]

const values = [
  {
    icon: Shield,
    title: "Integrity",
    description: "We uphold the highest standards of ethics and transparency in all our dealings.",
  },
  {
    icon: Target,
    title: "Innovation",
    description: "We continuously strive to develop new and better ways to serve our customers.",
  },
  {
    icon: Heart,
    title: "Customer-Centric",
    description: "Our customers' needs and satisfaction are at the heart of everything we do.",
  },
  {
    icon: Trophy,
    title: "Excellence",
    description: "We are committed to delivering the highest quality of service in all aspects.",
  },
]

const milestones = [
  {
    year: "2017",
    title: "Foundation",
    description: "Finonest India Pvt. Ltd. was established with a vision to revolutionize financial services",
    icon: Star,
  },
  {
    year: "2019",
    title: "Expansion",
    description: "Expanded services to include multiple loan products across Rajasthan",
    icon: TrendingUp,
  },
  {
    year: "2021",
    title: "Growth",
    description: "Reached top 3 position in used car loans in Rajasthan",
    icon: Award,
  },
  {
    year: "2023",
    title: "Major Milestone",
    description: "Achieved 60.77% YoY growth with ₹10 crore projected turnover",
    icon: Trophy,
  },
  {
    year: "2024",
    title: "Future Plans",
    description: "Expanding to Gujarat and Madhya Pradesh markets",
    icon: Target,
  },
]

const coreBusinessAreas = [
  { name: "Personal Loans", code: "PL", color: "bg-blue-500" },
  { name: "Business Loans", code: "BL", color: "bg-green-500" },
  { name: "Unsecured Credit Lines", code: "UCL", color: "bg-purple-500" },
  { name: "Mortgage Loans", code: "ML", color: "bg-yellow-500" },
  { name: "Home Loans", code: "HL", color: "bg-red-500" },
  { name: "Working Capital Loans", code: "WC", color: "bg-teal-500" },
]

const leadershipTeam = [
  {
    name: "Surya Mohan Roy",
    role: "Leadership, Financial Analysis, Business Development",
    experience: "Experience with top 3 Pvt Banks (ex-HDFC, ICICI, AXIS)",
    image: "/images/surya-roy.jpeg",
    quote: "Our mission is to democratize financial services across India.",
  },
  {
    name: "Atishay Jain",
    role: "Analytics, Quantitative Strategy",
    experience: "7 years experience (Used Car Loans lead)",
    image: "/images/atishay-jain.jpeg",
    quote: "Data-driven decisions are at the heart of our success story.",
  },
  {
    name: "Prateek Somani",
    role: "Finance & Unsecured Loans",
    experience: "8+ years experience (ex-CFO, Man Singh Hotels)",
    image: "/images/prateek-somani.jpeg",
    quote: "We're building financial solutions that truly serve our customers' needs.",
  },
]


const branchLocations = [
  { name: "Dausa" },
  { name: "Palsana" },
  { name: "Sikandra" },
  { name: "Mansarovar" },
  { name: "Gopalpura Bypass" },
  { name: "Kanakpura" },
  { name: "Udaipur I" },
  { name: "Udaipur II" },
  { name: "Pratap Nagar" },
  { name: "Kaladera" },
  { name: "Govindpura" },
  { name: "Malpura" },
  { name: "Pali" },
  { name: "Vaishali Nagar" },
  { name: "Vidhyadhar Nagar" },
  { name: "Bandikui" },
  { name: "Sirsi Road" },
  { name: "Udaipur III" },
  {
    name: "Pune",
    address: `Finonest India (Pune)
Geo Workspace, 2nd Floor, Anandi Complex,
Near Ganapati Chowk,
Vishal Nagar (Pimple Nilakh),
Pune 411027`,
  },
]


const testimonials = [
  {
    name: "Rajesh Sharma",
    position: "Business Owner",
    quote: "Finonest helped me secure a business loan when I needed it most. Their process was smooth and efficient.",
    image: "/confident-indian-professional.png",
  },
  {
    name: "Priya Patel",
    position: "Homeowner",
    quote: "The team at Finonest made my home loan journey stress-free. I'm grateful for their expert guidance.",
    image: "/vibrant-indian-smile.png",
  },
  {
    name: "Vikram Singh",
    position: "Entrepreneur",
    quote: "Their working capital solutions helped my business grow exponentially. Highly recommended!",
    image: "/confident-indian-businessman.png",
  },
]

export default function AboutPage() {
  const [activeLeader, setActiveLeader] = useState(0)

  return (
    <PageLayout title="About Finonest">
      <div className="space-y-20">
        {/* Hero Section */}
        <section className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70 rounded-3xl"></div>
          <div className="relative z-10 py-16 px-8 text-white">
            <motion.div initial="hidden" animate="visible" variants={fadeIn} className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Transforming Financial Services Since 2017</h1>
              <p className="text-xl opacity-90 mb-8">
                One of the top 3 used car loan providers in Rajasthan, with 19 branches and counting
              </p>
              <div className="flex justify-center">
                <a
                  href="#leadership"
                  className="bg-white text-primary font-medium px-6 py-3 rounded-full hover:bg-opacity-90 transition-all"
                >
                  Meet Our Team
                </a>
              </div>
            </motion.div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
        </section>

        {/* Stats */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="py-8"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                className="bg-white rounded-xl shadow-lg p-6 text-center transform hover:scale-105 transition-transform duration-300"
              >
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-8 w-8 text-primary" />
                </div>
                <p className="text-4xl font-bold text-primary mb-1">{stat.number}</p>
                <p className="text-gray-600">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Company Overview */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/10 rounded-lg"></div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/10 rounded-lg"></div>
            <Image
              src="https://images.unsplash.com/photo-1560472355-536de3962603?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3"
              alt="Finonest team"
              width={1000}
              height={600}
              className="rounded-lg shadow-xl relative z-10"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-6 inline-block relative">
              Company Overview
              <span className="absolute bottom-0 left-0 w-1/2 h-1 bg-primary"></span>
            </h2>
            <div className="space-y-4">
              <p className="text-lg">
                <strong>Finonest India Pvt. Ltd.</strong> was established in 2017 and has quickly grown to become one of
                the top 3 used car loan providers in Rajasthan.
              </p>
              <p className="text-lg">
                We specialize in used car loans and broader financial services, with plans to expand to Gujarat and
                Madhya Pradesh in the next quarter.
              </p>
              <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-primary mt-6">
                <h3 className="font-bold text-lg mb-2">Our Key Strengths</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <div className="bg-primary/20 p-1 rounded mr-2 mt-1">
                      <Shield className="h-4 w-4 text-primary" />
                    </div>
                    <span>In-house operations and sales team</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-primary/20 p-1 rounded mr-2 mt-1">
                      <Shield className="h-4 w-4 text-primary" />
                    </div>
                    <span>360° service across multiple loan products</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-primary/20 p-1 rounded mr-2 mt-1">
                      <Shield className="h-4 w-4 text-primary" />
                    </div>
                    <span>Strong post-sales support and client retention</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Core Business Areas */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="py-8"
        >
          <h2 className="text-3xl font-bold mb-8 text-center">
            <span className="inline-block relative">
              Core Business Areas
              <span className="absolute bottom-0 left-0 w-full h-1 bg-primary"></span>
            </span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {coreBusinessAreas.map((area, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 flex flex-col items-center text-center"
              >
                <div
                  className={`${area.color} text-white font-bold rounded-full h-16 w-16 flex items-center justify-center mb-4`}
                >
                  {area.code}
                </div>
                <span className="font-semibold text-lg">{area.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Financials */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="relative overflow-hidden rounded-3xl"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5"></div>
          <div className="relative z-10 p-12">
            <h2 className="text-3xl font-bold mb-8 text-center">
              <span className="inline-block relative">
                Financial Performance
                <span className="absolute bottom-0 left-0 w-full h-1 bg-primary"></span>
              </span>
            </h2>
            <div className="flex flex-col md:flex-row justify-center items-center gap-8">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white px-8 py-6 rounded-xl shadow-lg text-center w-full md:w-auto"
              >
                <p className="text-gray-500 mb-2">FY 2023-24 Turnover (projected)</p>
                <div className="flex items-center justify-center">
                  <DollarSign className="h-8 w-8 text-primary mr-2" />
                  <p className="text-4xl font-bold text-primary">₹10 crore</p>
                </div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white px-8 py-6 rounded-xl shadow-lg text-center w-full md:w-auto"
              >
                <p className="text-gray-500 mb-2">YoY Growth</p>
                <div className="flex items-center justify-center">
                  <TrendingUp className="h-8 w-8 text-green-600 mr-2" />
                  <p className="text-4xl font-bold text-green-600">60.77%</p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Leadership Team */}
        <motion.section
          id="leadership"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="py-8"
        >
          <h2 className="text-3xl font-bold mb-8 text-center">
            <span className="inline-block relative">
              Leadership Team
              <span className="absolute bottom-0 left-0 w-full h-1 bg-primary"></span>
            </span>
          </h2>

          <div className="mb-12">
            <div className="flex justify-center mb-8">
              {leadershipTeam.map((leader, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveLeader(idx)}
                  className={`mx-2 p-2 rounded-full transition-all duration-300 ${
                    activeLeader === idx ? "bg-primary text-white" : "bg-gray-200 text-gray-600 hover:bg-gray-300"
                  }`}
                >
                  <span className="sr-only">{leader.name}</span>
                  <div className="w-12 h-12 rounded-full overflow-hidden">
                    <Image
                      src={leader.image || "/placeholder.svg"}
                      alt={leader.name}
                      width={48}
                      height={48}
                      className="object-cover"
                    />
                  </div>
                </button>
              ))}
            </div>

            <motion.div
              key={activeLeader}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <div className="md:flex">
                <div className="md:w-1/3 bg-primary/10 p-8 flex items-center justify-center">
                  <div className="text-center">
                    <div className="relative inline-block">
                      <div className="absolute inset-0 bg-primary/20 rounded-full transform -rotate-6"></div>
                      <Image
                        src={leadershipTeam[activeLeader].image || "/placeholder.svg"}
                        alt={leadershipTeam[activeLeader].name}
                        width={200}
                        height={200}
                        className="rounded-full relative z-10"
                      />
                    </div>
                    <h3 className="text-2xl font-bold mt-4">{leadershipTeam[activeLeader].name}</h3>
                    <p className="text-primary font-medium">{leadershipTeam[activeLeader].role}</p>
                  </div>
                </div>
                <div className="md:w-2/3 p-8">
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold mb-2">Experience</h4>
                    <p className="text-gray-700">{leadershipTeam[activeLeader].experience}</p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Vision</h4>
                    <blockquote className="italic text-gray-700 border-l-4 border-primary pl-4 py-2">
                      "{leadershipTeam[activeLeader].quote}"
                    </blockquote>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Department Heads */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="py-8 bg-gray-50 rounded-3xl p-8"
        >
          <h2 className="text-3xl font-bold mb-8 text-center">
            <span className="inline-block relative">
              Department Heads
              <span className="absolute bottom-0 left-0 w-full h-1 bg-primary"></span>
            </span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {departmentHeads.map((head, index) => (
              <motion.div key={index} whileHover={{ y: -5 }} className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="h-2 bg-primary"></div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{head.name}</h3>
                  <p className="text-primary font-medium mb-3">{head.division}</p>
                  <p className="text-gray-600 text-sm">{head.experience}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Testimonials */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="py-8"
        >
          <h2 className="text-3xl font-bold mb-8 text-center">
            <span className="inline-block relative">
              What Our Clients Say
              <span className="absolute bottom-0 left-0 w-full h-1 bg-primary"></span>
            </span>
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div key={index} whileHover={{ scale: 1.03 }} className="bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center mb-4">
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    width={60}
                    height={60}
                    className="rounded-full mr-4"
                  />
                  <div>
                    <h3 className="font-bold">{testimonial.name}</h3>
                    <p className="text-gray-600 text-sm">{testimonial.position}</p>
                  </div>
                </div>
                <blockquote className="italic text-gray-700">"{testimonial.quote}"</blockquote>
                <div className="mt-4 flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-500 fill-current" />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Branch Locations */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="py-8"
        >
          <h2 className="text-3xl font-bold mb-8 text-center">
            <span className="inline-block relative">
              Our Branch Network
              <span className="absolute bottom-0 left-0 w-full h-1 bg-primary"></span>
            </span>
          </h2>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-primary/5 rounded-3xl"></div>
            <div className="relative z-10 p-8">
              <p className="text-lg text-center mb-6">We operate 18 branches across Rajasthan:</p>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {branchLocations.map((location, index) => {
                  const name = typeof location === "string" ? location : location.name;
                  const address = typeof location === "object" ? location.address : null;

                  return (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.05 }}
                      className="group relative bg-white p-3 rounded-lg shadow-md border border-gray-100 flex items-center justify-center text-center"
                    >
                      <MapPin className="h-4 w-4 text-primary mr-2" />
                      <span>{name}</span>

                      {address && (
                        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-72 bg-black/90 text-white text-sm p-3 rounded-lg shadow-xl whitespace-pre-line opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-30">
                          {address}
                        </div>
                      )}
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </motion.section>

        {/* Our Journey */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="py-8"
        >
          <h2 className="text-3xl font-bold mb-8 text-center">
            <span className="inline-block relative">
              Our Journey
              <span className="absolute bottom-0 left-0 w-full h-1 bg-primary"></span>
            </span>
          </h2>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary/20 z-0"></div>

            <div className="relative z-10">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`flex items-center mb-12 ${index % 2 === 0 ? "flex-row-reverse" : ""}`}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? "pl-8 text-right" : "pr-8"}`}>
                    <div
                      className={`bg-white p-6 rounded-xl shadow-lg ${
                        index % 2 === 0 ? "rounded-tr-none" : "rounded-tl-none"
                      }`}
                    >
                      <div className="flex items-center mb-2">
                        <milestone.icon className={`h-6 w-6 text-primary ${index % 2 === 0 ? "ml-2" : "mr-2"}`} />
                        <h3 className="text-xl font-bold">{milestone.title}</h3>
                      </div>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>

                  <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                    <div className="bg-primary text-white font-bold rounded-full h-12 w-12 flex items-center justify-center z-20 shadow-lg">
                      {milestone.year.substring(2)}
                    </div>
                  </div>

                  <div className="w-1/2"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Values */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="py-8"
        >
          <h2 className="text-3xl font-bold mb-8 text-center">
            <span className="inline-block relative">
              Our Values
              <span className="absolute bottom-0 left-0 w-full h-1 bg-primary"></span>
            </span>
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                whileHover={{ y: -10 }}
                className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 flex flex-col items-center text-center"
              >
                <div className="bg-primary/10 p-4 rounded-full mb-6">
                  <value.icon className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Team Image */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="py-8"
        >
          <div className="relative">
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/10 rounded-lg"></div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-lg"></div>
            <Image
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3"
              alt="Finonest team meeting"
              width={1000}
              height={600}
              className="rounded-xl shadow-2xl relative z-10"
            />
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="bg-gradient-to-r from-primary to-primary/80 rounded-3xl p-12 text-white text-center"
        >
          <h2 className="text-3xl font-bold mb-4">Ready to Partner With Us?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who have transformed their financial journey with Finonest
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/contact"
              className="bg-white text-primary font-medium px-8 py-3 rounded-full hover:bg-opacity-90 transition-all"
            >
              Contact Us
            </a>
            <a
              href="/become-partner"
              className="bg-transparent border-2 border-white text-white font-medium px-8 py-3 rounded-full hover:bg-white hover:text-primary transition-all"
            >
              Become a Partner
            </a>
          </div>
        </motion.section>
      </div>
    </PageLayout>
  )
}

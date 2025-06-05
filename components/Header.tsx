"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, LogOut, Search, ChevronDown, ChevronRight } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useRouter } from "next/navigation"
import { useAuth } from "@/components/AuthProvider"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

const navItems = [
  { title: "Home", href: "/" },
  {
    title: "Products",
    href: "/products",
    subItems: [
      { title: "Loan Assistance", href: "/products/loan-assistance" },
      { title: "Investment & Wealth", href: "/products/investment-wealth" },
      { title: "Credit Score", href: "/products/credit-score" },
      { title: "Home & Vehicle Loans", href: "/products/home-vehicle-loans" },
      { title: "All Products", href: "/products" },
    ],
  },
  {
    title: "Tools",
    href: "/tools",
    subItems: [
      { title: "Check CIBIL Score", href: "/check-cibil" },
      { title: "EMI Calculator", href: "/emi-calculator" },
      { title: "Compare Loans", href: "/compare-loans" },
    ],
  },
  { title: "About", href: "/about" },
  { title: "Contact", href: "/contact" },
  { title: "Careers", href: "/careers" },
]

export default function Header() {
  const router = useRouter()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { user, signOut } = useAuth()
  const [searchQuery, setSearchQuery] = useState("")
  const [expandedItems, setExpandedItems] = useState<string[]>([])
  const menuRef = useRef<HTMLDivElement>(null)

  // Handle click outside to close mobile menu
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMobileMenuOpen(false)
      }
    }

    if (mobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside)
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [mobileMenuOpen])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close mobile menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileMenuOpen(false)
      }
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const handleLinkClick = (href: string) => {
    setMobileMenuOpen(false)
    router.push(href)
  }

  const handleLogout = () => {
    signOut()
  }

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    router.push(`/search?q=${encodeURIComponent(searchQuery)}`)
    setMobileMenuOpen(false)
  }

  const toggleExpandItem = (title: string) => {
    setExpandedItems((prev) => (prev.includes(title) ? prev.filter((item) => item !== title) : [...prev, title]))
  }

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 w-full ${
        isScrolled || mobileMenuOpen ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-4 h-16 md:h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250212-WA0006.jpg-mLUw8vsQNdZXFXUtNiEh0Y19Meyh7B.jpeg"
            alt="Finonest Logo"
            width={48}
            height={48}
            className="rounded-full w-[48px] h-[48px] sm:w-[44px] sm:h-[44px] md:w-[40px] md:h-[40px]"
          />
          <span className="ml-2 text-xl md:text-lg lg:text-xl font-bold text-primary">Finonest</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-4 xl:space-x-6">
          {navItems.map((item) =>
            item.subItems ? (
              <DropdownMenu key={item.title}>
                <DropdownMenuTrigger className="nav-link text-foreground font-medium hover:text-primary transition-colors focus:outline-none flex items-center">
                  {item.title} <ChevronDown className="inline-block ml-1 h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  {item.subItems.map((subItem) => (
                    <DropdownMenuItem key={subItem.title} onSelect={() => handleLinkClick(subItem.href)}>
                      {subItem.title}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link
                key={item.title}
                href={item.href}
                className="nav-link text-foreground font-medium hover:text-primary transition-colors"
              >
                {item.title}
              </Link>
            ),
          )}
        </div>

        {/* Desktop Search and Auth */}
        <div className="hidden lg:flex items-center space-x-4">
          <form onSubmit={handleSearch} className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
            <Input
              type="search"
              placeholder="Search..."
              className="pl-10 w-48 xl:w-64 h-9"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </form>
          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm">
                  My Account
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem onSelect={() => handleLinkClick("/dashboard")}>Dashboard</DropdownMenuItem>
                <DropdownMenuItem onSelect={() => handleLinkClick("/profile")}>Profile</DropdownMenuItem>
                {user?.role === "admin" && (
                  <DropdownMenuItem onSelect={() => handleLinkClick("/admin")}>Admin Dashboard</DropdownMenuItem>
                )}
                <DropdownMenuItem onSelect={handleLogout}>Logout</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Button onClick={() => handleLinkClick("/employee")} variant="default" size="sm">
              Employee Portal
            </Button>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-primary"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            ref={menuRef}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden bg-white shadow-lg overflow-hidden max-h-[80vh] overflow-y-auto"
          >
            <div className="container mx-auto px-4 py-4">
              <form onSubmit={handleSearch} className="relative mb-4">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                <Input
                  type="search"
                  placeholder="Search products..."
                  className="pl-10 w-full"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </form>

              {/* Mobile Navigation Items */}
              <div className="space-y-1">
                {navItems.map((item) => (
                  <div key={item.title} className="border-b border-gray-100 last:border-0">
                    {item.subItems ? (
                      <div>
                        <button
                          onClick={() => toggleExpandItem(item.title)}
                          className="flex items-center justify-between w-full py-3 px-2 text-left font-medium text-gray-800 hover:bg-gray-50 rounded-md"
                        >
                          <span>{item.title}</span>
                          {expandedItems.includes(item.title) ? (
                            <ChevronDown className="h-5 w-5 text-gray-500" />
                          ) : (
                            <ChevronRight className="h-5 w-5 text-gray-500" />
                          )}
                        </button>

                        <AnimatePresence>
                          {expandedItems.includes(item.title) && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.2 }}
                              className="overflow-hidden"
                            >
                              <div className="pl-4 py-2 space-y-1 bg-gray-50 rounded-md mb-2">
                                {item.subItems.map((subItem) => (
                                  <Link
                                    key={subItem.title}
                                    href={subItem.href}
                                    className="block py-2 px-3 text-gray-700 hover:text-primary hover:bg-gray-100 rounded-md transition-colors"
                                    onClick={() => setMobileMenuOpen(false)}
                                  >
                                    {subItem.title}
                                  </Link>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link
                        href={item.href}
                        className="block py-3 px-2 font-medium text-gray-800 hover:text-primary hover:bg-gray-50 rounded-md transition-colors"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.title}
                      </Link>
                    )}
                  </div>
                ))}
              </div>

              {/* Mobile Auth */}
              <div className="mt-4 pt-4 border-t border-gray-100">
                {user ? (
                  <div className="space-y-2">
                    <div className="px-2 py-2 mb-2 bg-gray-50 rounded-md">
                      <p className="text-sm text-gray-500 mb-1">Logged in as:</p>
                      <p className="font-medium">{user.email}</p>
                    </div>
                    <Link
                      href="/dashboard"
                      className="block py-2 px-3 text-gray-800 font-medium hover:text-primary hover:bg-gray-50 rounded-md transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Dashboard
                    </Link>
                    <Link
                      href="/profile"
                      className="block py-2 px-3 text-gray-800 font-medium hover:text-primary hover:bg-gray-50 rounded-md transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Profile
                    </Link>
                    {user?.role === "admin" && (
                      <Link
                        href="/admin"
                        className="block py-2 px-3 text-gray-800 font-medium hover:text-primary hover:bg-gray-50 rounded-md transition-colors"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        Admin Dashboard
                      </Link>
                    )}
                    <Button className="w-full mt-2" variant="outline" onClick={handleLogout}>
                      <LogOut className="w-4 h-4 mr-2" />
                      Logout
                    </Button>
                  </div>
                ) : (
                  <Button className="w-full" variant="default" onClick={() => handleLinkClick("/employee")}>
                    Employee Portal
                  </Button>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

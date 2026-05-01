"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Car, Menu, X, ChevronDown, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { label: "Home", href: "#" },
  {
    label: "Vehicles",
    href: "#vehicles",
    submenu: [
      { label: "Luxury Cars", href: "#" },
      { label: "Popular Cars", href: "#" },
      { label: "Superbikes", href: "#" },
      { label: "Adventure", href: "#" },
    ],
  },
  { label: "Wedding", href: "#wedding" },
  { label: "Services", href: "#services" },
  { label: "VIP", href: "#vip" },
  { label: "Contact", href: "#contact" },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed left-0 right-0 top-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-card/95 shadow-luxury backdrop-blur-md"
            : "bg-gradient-to-b from-black/40 to-transparent backdrop-blur-none"
        }`}
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            {/* Logo */}
            <a href="#" className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary shadow-[0_0_16px_rgba(255,140,0,0.4)]">
                <Car className="h-6 w-6 text-primary-foreground" />
              </div>
              <span className={`text-xl font-bold transition-colors duration-300 ${isScrolled ? "text-foreground" : "text-white"}`}>
                PrimeGo
              </span>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden items-center gap-1 lg:flex">
              {navLinks.map((link) => (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => link.submenu && setActiveSubmenu(link.label)}
                  onMouseLeave={() => setActiveSubmenu(null)}
                >
                  <a
                    href={link.href}
                    className="flex items-center gap-1 rounded-lg px-4 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-secondary hover:text-foreground"
                  >
                    {link.label}
                    {link.submenu && <ChevronDown className="h-4 w-4" />}
                  </a>

                  {/* Submenu */}
                  {link.submenu && (
                    <AnimatePresence>
                      {activeSubmenu === link.label && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute left-0 top-full mt-2 w-48 rounded-xl bg-card p-2 shadow-luxury"
                        >
                          {link.submenu.map((sublink) => (
                            <a
                              key={sublink.label}
                              href={sublink.href}
                              className="block rounded-lg px-4 py-2 text-sm text-foreground/80 transition-colors hover:bg-secondary hover:text-foreground"
                            >
                              {sublink.label}
                            </a>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              ))}
            </nav>

            {/* Right Actions */}
            <div className="hidden items-center gap-4 lg:flex">
              <a
                href="tel:+919876543210"
                className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                <Phone className="h-4 w-4" />
                <span>+91 98765 43210</span>
              </a>
              <Button className="btn-premium">Book Now</Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="rounded-lg p-2 text-foreground lg:hidden"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-x-0 top-20 z-40 lg:hidden"
          >
            <div className="mx-4 rounded-2xl bg-card p-6 shadow-luxury">
              <nav className="space-y-2">
                {navLinks.map((link) => (
                  <div key={link.label}>
                    <a
                      href={link.href}
                      onClick={() => !link.submenu && setIsMobileMenuOpen(false)}
                      className="flex items-center justify-between rounded-lg px-4 py-3 text-foreground transition-colors hover:bg-secondary"
                    >
                      {link.label}
                      {link.submenu && <ChevronDown className="h-4 w-4" />}
                    </a>
                    {link.submenu && (
                      <div className="ml-4 space-y-1 pt-1">
                        {link.submenu.map((sublink) => (
                          <a
                            key={sublink.label}
                            href={sublink.href}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="block rounded-lg px-4 py-2 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                          >
                            {sublink.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </nav>

              <div className="mt-6 space-y-3">
                <a
                  href="tel:+919876543210"
                  className="flex items-center justify-center gap-2 text-sm text-muted-foreground"
                >
                  <Phone className="h-4 w-4" />
                  <span>+91 98765 43210</span>
                </a>
                <Button className="btn-premium w-full">Book Now</Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

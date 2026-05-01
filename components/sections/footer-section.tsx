"use client"

import { motion } from "framer-motion"
import {
  Car,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Youtube,
  Send,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const footerLinks = {
  company: [
    { label: "About Us", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Press", href: "#" },
    { label: "Blog", href: "#" },
  ],
  services: [
    { label: "Car Rentals", href: "#" },
    { label: "Superbike Rentals", href: "#" },
    { label: "Wedding Cars", href: "#" },
    { label: "Corporate Rentals", href: "#" },
    { label: "Chauffeur Service", href: "#" },
  ],
  support: [
    { label: "Help Center", href: "#" },
    { label: "Safety", href: "#" },
    { label: "Cancellation Policy", href: "#" },
    { label: "Insurance Info", href: "#" },
    { label: "FAQs", href: "#" },
  ],
  legal: [
    { label: "Terms of Service", href: "#" },
    { label: "Privacy Policy", href: "#" },
    { label: "Cookie Policy", href: "#" },
  ],
}

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Youtube, href: "#", label: "YouTube" },
]

export function FooterSection() {
  return (
    <footer className="relative w-full bg-secondary/50">
      {/* Top Section - Newsletter */}
      <div className="border-b border-border/50">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass mx-auto max-w-3xl rounded-3xl p-8 text-center shadow-luxury md:p-12"
          >
            <h3 className="mb-4 text-2xl font-bold text-foreground sm:text-3xl">
              Subscribe to Our Newsletter
            </h3>
            <p className="mb-6 text-muted-foreground">
              Get exclusive offers, new vehicle alerts, and luxury travel tips delivered to your inbox.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
              <div className="relative flex-1 sm:max-w-sm">
                <Mail className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="h-14 rounded-xl border-border/50 bg-background pl-12 text-foreground"
                />
              </div>
              <Button size="lg" className="btn-premium h-14 px-8">
                Subscribe
                <Send className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-6">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {/* Logo */}
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary">
                  <Car className="h-7 w-7 text-primary-foreground" />
                </div>
                <span className="text-2xl font-bold text-foreground">PrimeGo</span>
              </div>

              <p className="mb-6 text-muted-foreground">
                Premium luxury vehicle rentals for discerning travelers. Experience excellence
                with our curated fleet of cars, superbikes, and wedding vehicles.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <a
                  href="tel:+1234567890"
                  className="flex items-center gap-3 text-muted-foreground transition-colors hover:text-accent"
                >
                  <Phone className="h-5 w-5" />
                  <span>+1 (800) PRIME-GO</span>
                </a>
                <a
                  href="mailto:hello@primego.com"
                  className="flex items-center gap-3 text-muted-foreground transition-colors hover:text-accent"
                >
                  <Mail className="h-5 w-5" />
                  <span>hello@primego.com</span>
                </a>
                <div className="flex items-start gap-3 text-muted-foreground">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0" />
                  <span>123 Luxury Lane, Premium City, PC 10001</span>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="mt-6">
                <Button
                  variant="outline"
                  className="gap-2 border-green-500/30 text-green-600 hover:bg-green-500/10"
                >
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  WhatsApp Support
                </Button>
              </div>
            </motion.div>
          </div>

          {/* Links Columns */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 lg:col-span-4">
            {/* Company */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h4 className="mb-4 font-semibold text-foreground">Company</h4>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-muted-foreground transition-colors hover:text-accent"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Services */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h4 className="mb-4 font-semibold text-foreground">Services</h4>
              <ul className="space-y-3">
                {footerLinks.services.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-muted-foreground transition-colors hover:text-accent"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Support */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h4 className="mb-4 font-semibold text-foreground">Support</h4>
              <ul className="space-y-3">
                {footerLinks.support.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-muted-foreground transition-colors hover:text-accent"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Legal */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h4 className="mb-4 font-semibold text-foreground">Legal</h4>
              <ul className="space-y-3">
                {footerLinks.legal.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-muted-foreground transition-colors hover:text-accent"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>

              {/* App Downloads */}
              <div className="mt-6 space-y-2">
                <p className="text-sm font-medium text-foreground">Get the App</p>
                <div className="flex gap-2">
                  <a
                    href="#"
                    className="flex h-10 w-10 items-center justify-center rounded-lg bg-foreground/5 transition-colors hover:bg-foreground/10"
                  >
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="flex h-10 w-10 items-center justify-center rounded-lg bg-foreground/5 transition-colors hover:bg-foreground/10"
                  >
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 010 1.73l-2.807 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z" />
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border/50">
        <div className="mx-auto max-w-7xl px-6 py-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            {/* Copyright */}
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} PrimeGo. All rights reserved.
            </p>

            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-foreground/5 text-muted-foreground transition-all hover:bg-accent hover:text-accent-foreground"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

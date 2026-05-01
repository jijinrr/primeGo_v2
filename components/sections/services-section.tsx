"use client"

import { motion } from "framer-motion"
import {
  Car,
  Plane,
  MapPin,
  Crown,
  Building2,
  Heart,
  Calendar,
  Key,
  ChevronRight,
} from "lucide-react"
import { Button } from "@/components/ui/button"

const services = [
  {
    icon: Car,
    title: "Chauffeur Service",
    description: "Professional uniformed drivers for a luxurious, stress-free journey.",
    color: "accent",
  },
  {
    icon: Plane,
    title: "Airport Pickup",
    description: "Seamless airport transfers with flight tracking and meet & greet.",
    color: "accent",
  },
  {
    icon: MapPin,
    title: "Doorstep Delivery",
    description: "We bring your vehicle directly to your location, anywhere.",
    color: "accent",
  },
  {
    icon: Crown,
    title: "VIP Membership",
    description: "Exclusive benefits, priority booking, and premium discounts.",
    color: "gold",
  },
  {
    icon: Building2,
    title: "Corporate Rentals",
    description: "Fleet solutions for businesses with dedicated account management.",
    color: "accent",
  },
  {
    icon: Heart,
    title: "Wedding Rentals",
    description: "Luxury decorated vehicles for your special day.",
    color: "gold",
  },
  {
    icon: Calendar,
    title: "Long-Term Rentals",
    description: "Monthly packages with significant savings and flexibility.",
    color: "accent",
  },
  {
    icon: Key,
    title: "Self Drive",
    description: "Freedom to explore at your own pace with our premium fleet.",
    color: "accent",
  },
]

export function ServicesSection() {
  return (
    <section className="relative w-full bg-background py-24">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 top-40 h-[500px] w-[500px] rounded-full bg-gradient-to-br from-accent/5 to-transparent blur-3xl" />
        <div className="absolute -right-40 bottom-40 h-[400px] w-[400px] rounded-full bg-gradient-to-tl from-gold/5 to-transparent blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-accent">
            Premium Services
          </span>
          <h2 className="mb-4 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Exceptional <span className="gradient-text">Experiences</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Beyond just rentals, we deliver complete luxury mobility solutions tailored to your needs.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="glass group cursor-pointer rounded-2xl p-6 shadow-luxury transition-all duration-300 hover:shadow-orange-glow"
            >
              {/* Icon */}
              <div
                className={`mb-4 inline-flex rounded-xl p-3 transition-colors ${
                  service.color === "gold"
                    ? "bg-gold/10 group-hover:bg-gold/20"
                    : "bg-accent/10 group-hover:bg-accent/20"
                }`}
              >
                <service.icon
                  className={`h-6 w-6 ${
                    service.color === "gold" ? "text-gold" : "text-accent"
                  }`}
                />
              </div>

              {/* Content */}
              <h3 className="mb-2 text-lg font-semibold text-foreground">
                {service.title}
              </h3>
              <p className="mb-4 text-sm text-muted-foreground">
                {service.description}
              </p>

              {/* Link */}
              <div className="flex items-center text-sm font-medium text-accent transition-transform group-hover:translate-x-1">
                Learn More
                <ChevronRight className="ml-1 h-4 w-4" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

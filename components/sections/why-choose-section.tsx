"use client"

import { useEffect, useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import {
  Shield,
  Clock,
  ThumbsUp,
  Headphones,
  Sparkles,
  CreditCard,
  Heart,
  Award,
} from "lucide-react"

const features = [
  {
    icon: Shield,
    title: "Verified Premium Fleet",
    description: "Every vehicle undergoes rigorous inspection and certification.",
  },
  {
    icon: Award,
    title: "Fully Insured",
    description: "Comprehensive insurance coverage for complete peace of mind.",
  },
  {
    icon: Clock,
    title: "Instant Booking",
    description: "Book your vehicle in seconds with real-time confirmation.",
  },
  {
    icon: Headphones,
    title: "24/7 Luxury Support",
    description: "Round-the-clock concierge service for all your needs.",
  },
  {
    icon: Sparkles,
    title: "Best Condition",
    description: "Pristine, well-maintained vehicles with luxury detailing.",
  },
  {
    icon: ThumbsUp,
    title: "Flexible Rentals",
    description: "Daily, weekly, or monthly options to suit your schedule.",
  },
  {
    icon: CreditCard,
    title: "Transparent Pricing",
    description: "No hidden fees. What you see is what you pay.",
  },
  {
    icon: Heart,
    title: "Wedding Support",
    description: "Specialized wedding packages with decoration services.",
  },
]

const stats = [
  { value: 500, suffix: "+", label: "Premium Vehicles" },
  { value: 50, suffix: "K+", label: "Happy Customers" },
  { value: 99, suffix: "%", label: "Satisfaction Rate" },
  { value: 24, suffix: "/7", label: "Support Available" },
]

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (isInView) {
      const duration = 2000
      const steps = 60
      const stepValue = value / steps
      let current = 0

      const timer = setInterval(() => {
        current += stepValue
        if (current >= value) {
          setCount(value)
          clearInterval(timer)
        } else {
          setCount(Math.floor(current))
        }
      }, duration / steps)

      return () => clearInterval(timer)
    }
  }, [isInView, value])

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  )
}

export function WhyChooseSection() {
  return (
    <section className="relative w-full bg-secondary/30 py-24">
      {/* Background Pattern */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-accent/5 to-primary/5 blur-3xl" />
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
            Why PrimeGo
          </span>
          <h2 className="mb-4 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Why Choose <span className="gradient-text">PrimeGo</span>?
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Experience the difference with our commitment to excellence and customer satisfaction.
          </p>
        </motion.div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16 grid grid-cols-2 gap-6 md:grid-cols-4"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className="glass rounded-2xl p-6 text-center shadow-luxury"
            >
              <p className="mb-1 text-4xl font-bold text-foreground md:text-5xl">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Features Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="glass group rounded-2xl p-6 shadow-luxury transition-all duration-300 hover:shadow-orange-glow"
            >
              {/* Icon */}
              <div className="mb-4 inline-flex rounded-xl bg-accent/10 p-3 transition-colors group-hover:bg-accent/20">
                <feature.icon className="h-6 w-6 text-accent" />
              </div>

              {/* Content */}
              <h3 className="mb-2 font-semibold text-foreground">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

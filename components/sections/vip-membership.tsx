"use client"

import { motion } from "framer-motion"
import { Crown, Check, Star, Zap, Shield, Users, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const membershipTiers = [
  {
    name: "Silver",
    price: 4999,
    period: "month",
    description: "Perfect for occasional travelers",
    features: [
      "5% discount on all rentals",
      "Priority booking access",
      "Free vehicle upgrades (subject to availability)",
      "24/7 customer support",
      "Flexible cancellation",
    ],
    color: "silver",
    popular: false,
  },
  {
    name: "Gold Elite",
    price: 14999,
    period: "month",
    description: "For frequent renters who demand excellence",
    features: [
      "15% discount on all rentals",
      "Guaranteed priority booking",
      "Complimentary vehicle upgrades",
      "Dedicated account manager",
      "Airport lounge access",
      "Wedding package discounts",
      "Unlimited booking priority",
      "Exclusive member events",
    ],
    color: "gold",
    popular: true,
  },
  {
    name: "Platinum",
    price: 29999,
    period: "month",
    description: "Ultimate luxury experience",
    features: [
      "25% discount on all rentals",
      "First access to new vehicles",
      "Personal concierge service",
      "Chauffeur service included",
      "VIP wedding packages",
      "International rental benefits",
      "Exclusive supercar access",
      "Complimentary detailing",
      "Private member lounge",
    ],
    color: "accent",
    popular: false,
  },
]

export function VIPMembership() {
  return (
    <section className="relative w-full overflow-hidden bg-background py-24">
      {/* Luxurious Background */}
      <div className="absolute inset-0">
        <div className="absolute left-0 top-0 h-full w-full bg-gradient-to-b from-primary/3 via-transparent to-primary/3" />
        <div className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-gradient-to-b from-primary/10 to-transparent blur-3xl" />
        <div className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-gradient-to-tr from-primary/5 to-transparent blur-3xl" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-gradient-to-tl from-primary/5 to-transparent blur-3xl" />
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
          <span className="mb-4 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-primary">
            <Crown className="h-4 w-4" />
            Exclusive Membership
          </span>
          <h2 className="mb-4 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            PrimeGo <span className="gradient-text-gold">Elite VIP</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Unlock exclusive benefits, priority access, and premium discounts with our VIP membership program.
          </p>
        </motion.div>

        {/* Membership Cards */}
        <div className="grid gap-8 lg:grid-cols-3">
          {membershipTiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -10 }}
              className={`relative overflow-hidden rounded-3xl bg-card shadow-luxury transition-all duration-300 ${
                tier.popular ? "shadow-glow ring-2 ring-primary/30" : "hover:shadow-orange-glow"
              }`}
            >
              {/* Popular Badge */}
              {tier.popular && (
                <div className="absolute -right-12 top-6 rotate-45 bg-primary px-12 py-1 text-sm font-semibold text-primary-foreground">
                  Most Popular
                </div>
              )}

              <div className="p-8">
                {/* Tier Badge */}
                <Badge
                  className={`mb-4 ${
                    tier.color === "gold"
                      ? "bg-primary/10 text-primary"
                      : tier.color === "silver"
                      ? "bg-silver/20 text-foreground"
                      : "bg-primary/10 text-primary"
                  }`}
                >
                  <Star className="mr-1 h-3 w-3" />
                  {tier.name}
                </Badge>

                {/* Pricing */}
                <div className="mb-4">
                  <span className="text-4xl font-bold text-foreground">₹{tier.price.toLocaleString("en-IN")}</span>
                  <span className="text-muted-foreground">/{tier.period}</span>
                </div>

                <p className="mb-6 text-sm text-muted-foreground">{tier.description}</p>

                {/* Features */}
                <ul className="mb-8 space-y-3">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm">
                      <Check
                        className={`mt-0.5 h-4 w-4 shrink-0 ${
                          tier.color === "gold" || tier.color === "accent"
                            ? "text-primary"
                            : "text-muted-foreground"
                        }`}
                      />
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Button
                  className={`btn-premium w-full h-12 ${
                    tier.popular ? 'shadow-orange-glow-lg' : ''
                  }`}
                >
                  Get Started
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 flex flex-wrap items-center justify-center gap-8"
        >
          <div className="flex items-center gap-2 text-muted-foreground">
            <Shield className="h-5 w-5" />
            <span className="text-sm">Secure Payment</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Zap className="h-5 w-5" />
            <span className="text-sm">Instant Activation</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Users className="h-5 w-5" />
            <span className="text-sm">10,000+ Members</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

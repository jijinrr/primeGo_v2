"use client"

import { motion } from "framer-motion"
import { Heart, Crown, Users, Camera, Clock, ChevronRight, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

const weddingFeatures = [
  { icon: Users, title: "VIP Chauffeur", description: "Professional uniformed drivers" },
  { icon: Heart, title: "Floral Decoration", description: "Premium boutique flowers" },
  { icon: Crown, title: "Royal Entry", description: "Grand arrival experience" },
  { icon: Camera, title: "Photo Ready", description: "Picture-perfect styling" },
  { icon: Clock, title: "Flexible Hours", description: "Full-day availability" },
]

const weddingCars = [
  {
    id: 1,
    name: "BMW 7 Series White",
    tagline: "The Ultimate Wedding Sedan",
    hourlyPrice: 14999,
    fullDayPrice: 119999,
    rating: 5.0,
    features: ["Floral Decoration", "VIP Chauffeur", "Red Carpet Service"],
    popular: true,
    image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=400&h=300&fit=crop",
  },
  {
    id: 2,
    name: "Audi A8 Luxury White",
    tagline: "Elegance Redefined",
    hourlyPrice: 12999,
    fullDayPrice: 99999,
    rating: 4.9,
    features: ["Premium Decor", "Professional Driver", "Photography Support"],
    popular: false,
    image: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=400&h=300&fit=crop",
  },
  {
    id: 3,
    name: "Mercedes S-Class Pearl",
    tagline: "Timeless Sophistication",
    hourlyPrice: 17999,
    fullDayPrice: 139999,
    rating: 5.0,
    features: ["Luxury Florals", "VIP Treatment", "Complimentary Champagne"],
    popular: true,
    image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=400&h=300&fit=crop",
  },
  {
    id: 4,
    name: "Fortuner Premium White",
    tagline: "Commanding Presence",
    hourlyPrice: 8999,
    fullDayPrice: 69999,
    rating: 4.8,
    features: ["Wedding Decor", "Experienced Driver", "Multiple Trips"],
    popular: false,
    image: "https://images.unsplash.com/photo-1625231334168-29c0e0fd3ff0?w=400&h=300&fit=crop",
  },
]

function formatPrice(price: number) {
  if (price >= 100000) {
    return `${(price / 100000).toFixed(price % 100000 === 0 ? 0 : 1)}L`
  }
  return price.toLocaleString("en-IN")
}

export function WeddingSection() {
  return (
    <section className="relative w-full overflow-hidden bg-background py-24">
      {/* Elegant Background */}
      <div className="absolute inset-0">
        {/* Soft Orange Gradient */}
        <div className="absolute left-1/2 top-0 h-[800px] w-[800px] -translate-x-1/2 rounded-full bg-gradient-to-b from-primary/5 to-transparent blur-3xl" />
        <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-gradient-to-tr from-primary/5 to-transparent blur-3xl" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-gradient-to-tl from-primary/5 to-transparent blur-3xl" />
        
        {/* Floating Petals Effect - Decorative Elements */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-4 w-4 rounded-full bg-primary/10"
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + (i % 3) * 20}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.6, 0.3],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              delay: i * 0.5,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center"
        >
          <span className="mb-4 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-primary">
            <Heart className="h-4 w-4" />
            Wedding Collection
            <Heart className="h-4 w-4" />
          </span>
          <h2 className="mb-4 text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
            Luxury <span className="gradient-text-gold">Wedding Arrivals</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Make Your Special Day Unforgettable with Our Premium Wedding Vehicle Collection
          </p>
        </motion.div>

        {/* Featured Wedding Car Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-20"
        >
          <div className="relative overflow-hidden rounded-3xl bg-card p-8 shadow-luxury md:p-12">
            <div className="grid items-center gap-8 lg:grid-cols-2">
              {/* Left - Image */}
              <div className="relative">
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                  <Image
                    src="https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&h=600&fit=crop"
                    alt="BMW 7 Series White Wedding Edition"
                    fill
                    className="object-cover"
                  />
                  {/* Decorative Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 to-transparent" />
                </div>
                
                {/* Floating Badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="absolute -right-4 top-8 rounded-2xl bg-primary px-6 py-3 text-primary-foreground shadow-orange-glow"
                >
                  <p className="text-xs font-medium">Most Popular</p>
                  <p className="text-xl font-bold">Wedding Choice</p>
                </motion.div>
              </div>

              {/* Right - Content */}
              <div>
                <Badge className="mb-4 bg-primary/10 text-primary">Featured Wedding Vehicle</Badge>
                <h3 className="mb-2 text-3xl font-bold text-foreground">
                  BMW 7 Series White Edition
                </h3>
                <p className="mb-6 text-lg text-muted-foreground">
                  Decorated with premium boutique flowers, ribbons, and royal styling. 
                  The perfect choice for your grand wedding entrance.
                </p>

                {/* Features List */}
                <div className="mb-8 grid grid-cols-2 gap-4">
                  {weddingFeatures.slice(0, 4).map((feature, index) => (
                    <motion.div
                      key={feature.title}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <div className="rounded-lg bg-primary/10 p-2">
                        <feature.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground">{feature.title}</p>
                        <p className="text-sm text-muted-foreground">{feature.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Pricing */}
                <div className="mb-8 flex flex-wrap gap-6">
                  <div>
                    <p className="text-sm text-muted-foreground">Hourly Rate</p>
                    <p className="text-3xl font-bold text-foreground">₹14,999<span className="text-base font-normal text-muted-foreground">/hr</span></p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Full Day Package</p>
                    <p className="text-3xl font-bold text-primary">₹1,19,999</p>
                  </div>
                </div>

                {/* CTA */}
                <div className="flex flex-wrap gap-4">
                  <Button size="lg" className="btn-premium h-14 px-8 shadow-orange-glow">
                    Book for Wedding
                    <Heart className="ml-2 h-5 w-5" />
                  </Button>
                  <Button size="lg" variant="outline" className="h-14 px-8">
                    View Details
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Wedding Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h3 className="mb-8 text-center text-2xl font-bold text-foreground">
            Premium Wedding Services
          </h3>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {weddingFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="flex flex-col items-center gap-3 rounded-2xl bg-card p-6 text-center shadow-luxury transition-all hover:shadow-orange-glow"
              >
                <div className="rounded-xl bg-primary/10 p-3">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">{feature.title}</h4>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Other Wedding Cars Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="mb-8 text-center text-2xl font-bold text-foreground">
            More Wedding Vehicles
          </h3>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {weddingCars.map((car, index) => (
              <motion.div
                key={car.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group relative flex flex-col overflow-hidden rounded-2xl bg-card shadow-luxury transition-all hover:shadow-orange-glow"
              >
                {car.popular && (
                  <div className="absolute left-4 top-4 z-10">
                    <span className="rounded-full bg-primary px-3 py-1 text-xs font-semibold text-white">Popular</span>
                  </div>
                )}

                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={car.image}
                    alt={car.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col p-5">
                  <div className="mb-2 flex items-start justify-between">
                    <div>
                      <h4 className="font-semibold text-foreground">{car.name}</h4>
                      <p className="text-xs text-muted-foreground">{car.tagline}</p>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-primary text-primary" />
                      <span className="text-sm font-medium">{car.rating}</span>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mb-4 flex flex-wrap gap-1">
                    {car.features.slice(0, 2).map((feature) => (
                      <span
                        key={feature}
                        className="rounded-full bg-primary/10 px-2.5 py-1 text-[11px] font-medium text-primary"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* Pricing */}
                  <div className="mb-4 rounded-xl bg-secondary/60 px-4 py-3 space-y-1">
                    <div className="flex items-baseline justify-between">
                      <span className="text-xs text-muted-foreground">Hourly</span>
                      <span className="font-bold text-foreground">₹{formatPrice(car.hourlyPrice)}/hr</span>
                    </div>
                    <div className="flex items-baseline justify-between">
                      <span className="text-xs text-muted-foreground">Full Day</span>
                      <span className="font-bold text-primary">₹{formatPrice(car.fullDayPrice)}</span>
                    </div>
                  </div>

                  <div className="mt-auto">
                    <Button className="btn-premium w-full h-10">
                      Book for Wedding
                      <Heart className="ml-1 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

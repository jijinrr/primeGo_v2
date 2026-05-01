"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Fuel, Settings, Users, Star, Zap, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

const categories = [
  { id: "all", label: "All Vehicles" },
  { id: "luxury", label: "Luxury Cars" },
  { id: "popular", label: "Popular Cars" },
  { id: "superbikes", label: "Superbikes" },
  { id: "adventure", label: "Adventure" },
]

const vehicles = [
  // Luxury Cars
  {
    id: 1,
    name: "BMW 7 Series",
    category: "luxury",
    dailyPrice: 24999,
    weeklyPrice: 149999,
    monthlyPrice: 499999,
    fuel: "Petrol",
    transmission: "Automatic",
    seats: 5,
    horsepower: 335,
    rating: 4.9,
    available: true,
    featured: true,
    image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=400&h=300&fit=crop",
  },
  {
    id: 2,
    name: "Mercedes S-Class",
    category: "luxury",
    dailyPrice: 29999,
    weeklyPrice: 179999,
    monthlyPrice: 599999,
    fuel: "Hybrid",
    transmission: "Automatic",
    seats: 5,
    horsepower: 429,
    rating: 4.9,
    available: true,
    featured: true,
    image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=400&h=300&fit=crop",
  },
  {
    id: 3,
    name: "Audi A8",
    category: "luxury",
    dailyPrice: 22999,
    weeklyPrice: 139999,
    monthlyPrice: 449999,
    fuel: "Petrol",
    transmission: "Automatic",
    seats: 5,
    horsepower: 340,
    rating: 4.8,
    available: true,
    featured: false,
    image: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=400&h=300&fit=crop",
  },
  {
    id: 4,
    name: "Toyota Fortuner",
    category: "luxury",
    dailyPrice: 12999,
    weeklyPrice: 79999,
    monthlyPrice: 279999,
    fuel: "Diesel",
    transmission: "Automatic",
    seats: 7,
    horsepower: 204,
    rating: 4.7,
    available: true,
    featured: false,
    image: "https://images.unsplash.com/photo-1625231334168-29c0e0fd3ff0?w=400&h=300&fit=crop",
  },
  {
    id: 5,
    name: "Tata Harrier",
    category: "luxury",
    dailyPrice: 9999,
    weeklyPrice: 64999,
    monthlyPrice: 224999,
    fuel: "Diesel",
    transmission: "Automatic",
    seats: 5,
    horsepower: 170,
    rating: 4.6,
    available: true,
    featured: false,
    image: "https://images.unsplash.com/photo-1609521263047-f8f205293f24?w=400&h=300&fit=crop",
  },
  // Popular Cars
  {
    id: 6,
    name: "Hyundai Creta",
    category: "popular",
    dailyPrice: 5999,
    weeklyPrice: 39999,
    monthlyPrice: 139999,
    fuel: "Petrol",
    transmission: "Automatic",
    seats: 5,
    horsepower: 140,
    rating: 4.5,
    available: true,
    featured: false,
    image: "https://images.unsplash.com/photo-1619682817481-e994891cd1f5?w=400&h=300&fit=crop",
  },
  {
    id: 7,
    name: "Maruti Swift",
    category: "popular",
    dailyPrice: 2999,
    weeklyPrice: 19999,
    monthlyPrice: 69999,
    fuel: "Petrol",
    transmission: "Manual",
    seats: 5,
    horsepower: 90,
    rating: 4.4,
    available: true,
    featured: false,
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=400&h=300&fit=crop",
  },
  {
    id: 8,
    name: "Maruti Baleno",
    category: "popular",
    dailyPrice: 3499,
    weeklyPrice: 22999,
    monthlyPrice: 79999,
    fuel: "Petrol",
    transmission: "Automatic",
    seats: 5,
    horsepower: 90,
    rating: 4.4,
    available: true,
    featured: false,
    image: "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?w=400&h=300&fit=crop",
  },
  {
    id: 9,
    name: "Hyundai i20",
    category: "popular",
    dailyPrice: 3999,
    weeklyPrice: 24999,
    monthlyPrice: 89999,
    fuel: "Petrol",
    transmission: "Automatic",
    seats: 5,
    horsepower: 120,
    rating: 4.5,
    available: false,
    featured: false,
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=400&h=300&fit=crop",
  },
  {
    id: 10,
    name: "Hyundai Venue",
    category: "popular",
    dailyPrice: 4999,
    weeklyPrice: 32999,
    monthlyPrice: 114999,
    fuel: "Petrol",
    transmission: "Automatic",
    seats: 5,
    horsepower: 120,
    rating: 4.4,
    available: true,
    featured: false,
    image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=400&h=300&fit=crop",
  },
  {
    id: 11,
    name: "Tata Nexon",
    category: "popular",
    dailyPrice: 4499,
    weeklyPrice: 29999,
    monthlyPrice: 104999,
    fuel: "Petrol",
    transmission: "Manual",
    seats: 5,
    horsepower: 120,
    rating: 4.5,
    available: true,
    featured: false,
    image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=400&h=300&fit=crop",
  },
  {
    id: 12,
    name: "Mahindra Thar Roxx",
    category: "adventure",
    dailyPrice: 11999,
    weeklyPrice: 74999,
    monthlyPrice: 264999,
    fuel: "Diesel",
    transmission: "Automatic",
    seats: 5,
    horsepower: 175,
    rating: 4.7,
    available: true,
    featured: true,
    image: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=400&h=300&fit=crop",
  },
  {
    id: 13,
    name: "Hyundai Verna",
    category: "popular",
    dailyPrice: 5499,
    weeklyPrice: 35999,
    monthlyPrice: 124999,
    fuel: "Petrol",
    transmission: "Automatic",
    seats: 5,
    horsepower: 140,
    rating: 4.5,
    available: true,
    featured: false,
    image: "https://images.unsplash.com/photo-1590362891991-f776e747a588?w=400&h=300&fit=crop",
  },
  {
    id: 14,
    name: "Honda City",
    category: "popular",
    dailyPrice: 5999,
    weeklyPrice: 39999,
    monthlyPrice: 139999,
    fuel: "Petrol",
    transmission: "CVT",
    seats: 5,
    horsepower: 121,
    rating: 4.6,
    available: true,
    featured: false,
    image: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=400&h=300&fit=crop",
  },
  // Superbikes
  {
    id: 15,
    name: "Suzuki Hayabusa",
    category: "superbikes",
    dailyPrice: 15999,
    weeklyPrice: 99999,
    monthlyPrice: 324999,
    fuel: "Petrol",
    transmission: "Manual",
    seats: 2,
    horsepower: 190,
    rating: 4.9,
    available: true,
    featured: true,
    image: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=400&h=300&fit=crop",
  },
  {
    id: 16,
    name: "Kawasaki Ninja ZX-10R",
    category: "superbikes",
    dailyPrice: 19999,
    weeklyPrice: 119999,
    monthlyPrice: 399999,
    fuel: "Petrol",
    transmission: "Manual",
    seats: 2,
    horsepower: 203,
    rating: 4.9,
    available: true,
    featured: true,
    image: "https://images.unsplash.com/photo-1449426468159-d96dbf08f19f?w=400&h=300&fit=crop",
  },
  {
    id: 17,
    name: "Ducati Panigale V4",
    category: "superbikes",
    dailyPrice: 29999,
    weeklyPrice: 179999,
    monthlyPrice: 599999,
    fuel: "Petrol",
    transmission: "Manual",
    seats: 2,
    horsepower: 214,
    rating: 5.0,
    available: true,
    featured: true,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
  },
  {
    id: 18,
    name: "BMW S1000RR",
    category: "superbikes",
    dailyPrice: 24999,
    weeklyPrice: 149999,
    monthlyPrice: 499999,
    fuel: "Petrol",
    transmission: "Manual",
    seats: 2,
    horsepower: 205,
    rating: 4.9,
    available: false,
    featured: false,
    image: "https://images.unsplash.com/photo-1609630875171-b1321377ee65?w=400&h=300&fit=crop",
  },
  // Adventure
  {
    id: 19,
    name: "Mahindra Thar",
    category: "adventure",
    dailyPrice: 8999,
    weeklyPrice: 57999,
    monthlyPrice: 199999,
    fuel: "Diesel",
    transmission: "Manual",
    seats: 4,
    horsepower: 130,
    rating: 4.6,
    available: true,
    featured: false,
    image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=400&h=300&fit=crop",
  },
  {
    id: 20,
    name: "Land Rover Defender",
    category: "adventure",
    dailyPrice: 34999,
    weeklyPrice: 209999,
    monthlyPrice: 699999,
    fuel: "Diesel",
    transmission: "Automatic",
    seats: 7,
    horsepower: 300,
    rating: 4.8,
    available: true,
    featured: true,
    image: "https://images.unsplash.com/photo-1606016159991-dfe4f2746ad5?w=400&h=300&fit=crop",
  },
]

function formatPrice(price: number) {
  if (price >= 100000) {
    return `${(price / 100000).toFixed(price % 100000 === 0 ? 0 : 1)}L`
  }
  return price.toLocaleString("en-IN")
}

export function VehicleCollection() {
  const [activeCategory, setActiveCategory] = useState("all")

  const filteredVehicles = vehicles.filter(
    (v) => activeCategory === "all" || v.category === activeCategory
  )

  return (
    <section id="vehicles" className="relative w-full bg-background py-24">
      {/* Soft background orbs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute right-0 top-0 h-[600px] w-[600px] rounded-full bg-gradient-to-bl from-primary/4 to-transparent blur-3xl" />
        <div className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-gradient-to-tr from-primary/4 to-transparent blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">

        {/* ── Section header ────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-14 text-center"
        >
          <span className="mb-3 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-primary">
            Premium Fleet
          </span>
          <h2 className="mb-4 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Our{" "}
            <span className="gradient-text-gold">Vehicle Collection</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            From luxury sedans to powerful superbikes, discover our meticulously curated fleet.
          </p>
        </motion.div>

        {/* ── Category filter tabs ──────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mb-12 flex flex-wrap justify-center gap-2.5"
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setActiveCategory(category.id)}
              className={`rounded-full px-6 py-2.5 text-sm font-semibold transition-all duration-250 ${
                activeCategory === category.id
                  ? "bg-primary text-white shadow-orange-glow"
                  : "border border-border bg-white text-muted-foreground hover:border-primary/40 hover:text-foreground"
              }`}
            >
              {category.label}
            </motion.button>
          ))}
        </motion.div>

        {/* ── Vehicle grid ──────────────────────────────────── */}
        <motion.div
          layout
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
          <AnimatePresence mode="popLayout">
            {filteredVehicles.map((vehicle, index) => (
              <motion.div
                key={vehicle.id}
                layout
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.92 }}
                transition={{ duration: 0.35, delay: Math.min(index * 0.04, 0.3) }}
                whileHover={{ y: -6 }}
                /* flex flex-col is the key fix — makes the card a column container
                   so the button wrapper with mt-auto sticks to the bottom */
                className="group relative flex flex-col overflow-hidden rounded-2xl bg-white transition-all duration-300 hover:shadow-orange-glow"
                style={{ boxShadow: "0 4px 24px rgba(0,0,0,0.07)" }}
              >
                {/* Featured badge */}
                {vehicle.featured && (
                  <div className="absolute left-3 top-3 z-10">
                    <span className="inline-flex items-center rounded-full bg-primary px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-white shadow">
                      Featured
                    </span>
                  </div>
                )}

                {/* Availability pill */}
                <div className="absolute right-3 top-3 z-10">
                  <span
                    className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[10px] font-semibold ${
                      vehicle.available
                        ? "bg-green-50 text-green-700 ring-1 ring-green-200"
                        : "bg-red-50 text-red-600 ring-1 ring-red-200"
                    }`}
                  >
                    <span className={`h-1.5 w-1.5 rounded-full ${vehicle.available ? "bg-green-500" : "bg-red-500"}`} />
                    {vehicle.available ? "Available" : "Booked"}
                  </span>
                </div>

                {/* Vehicle image */}
                <div className="relative aspect-[4/3] overflow-hidden bg-secondary/50">
                  <Image
                    src={vehicle.image}
                    alt={vehicle.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-108"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </div>

                {/* Card body — flex-1 so it grows to fill, flex-col to stack children */}
                <div className="flex flex-1 flex-col p-5">

                  {/* Name + rating */}
                  <div className="mb-3 flex items-start justify-between gap-2">
                    <h3 className="text-[15px] font-bold leading-snug text-foreground">
                      {vehicle.name}
                    </h3>
                    <div className="flex flex-shrink-0 items-center gap-1">
                      <Star className="h-3.5 w-3.5 fill-primary text-primary" />
                      <span className="text-sm font-semibold text-foreground">{vehicle.rating}</span>
                    </div>
                  </div>

                  {/* Specs — compact pills */}
                  <div className="mb-4 flex flex-wrap gap-1.5">
                    {[
                      { icon: Fuel,     label: vehicle.fuel },
                      { icon: Settings, label: vehicle.transmission },
                      { icon: Users,    label: `${vehicle.seats} Seats` },
                      { icon: Zap,      label: `${vehicle.horsepower} HP` },
                    ].map(({ icon: Icon, label }) => (
                      <span
                        key={label}
                        className="inline-flex items-center gap-1 rounded-full bg-secondary px-2.5 py-1 text-[11px] font-medium text-muted-foreground"
                      >
                        <Icon className="h-3 w-3" />
                        {label}
                      </span>
                    ))}
                  </div>

                  {/* Pricing */}
                  <div className="mb-4 rounded-xl bg-secondary/60 px-4 py-3">
                    <div className="flex items-baseline justify-between">
                      <span className="text-xs font-medium text-muted-foreground">Daily</span>
                      <span className="text-xl font-bold text-foreground">
                        ₹{formatPrice(vehicle.dailyPrice)}
                      </span>
                    </div>
                    <div className="mt-1.5 flex gap-4 border-t border-border/60 pt-1.5">
                      <div className="flex flex-1 items-baseline justify-between">
                        <span className="text-[10px] text-muted-foreground">Weekly</span>
                        <span className="text-xs font-semibold text-foreground">₹{formatPrice(vehicle.weeklyPrice)}</span>
                      </div>
                      <div className="flex flex-1 items-baseline justify-between">
                        <span className="text-[10px] text-muted-foreground">Monthly</span>
                        <span className="text-xs font-semibold text-foreground">₹{formatPrice(vehicle.monthlyPrice)}</span>
                      </div>
                    </div>
                  </div>

                  {/* Book Now — mt-auto pins this to the card bottom regardless of content height */}
                  <div className="mt-auto">
                    <Button
                      className={`btn-premium w-full py-3 text-sm ${
                        !vehicle.available ? "opacity-50" : ""
                      }`}
                      disabled={!vehicle.available}
                    >
                      {vehicle.available ? (
                        <>
                          Book Now
                          <ChevronRight className="ml-1.5 h-4 w-4" />
                        </>
                      ) : (
                        "Not Available"
                      )}
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* ── View All CTA ──────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-14 text-center"
        >
          <button className="btn-primary-outline inline-flex h-13 items-center gap-2 px-10 text-base">
            View All Vehicles
            <ChevronRight className="h-5 w-5" />
          </button>
        </motion.div>
      </div>
    </section>
  )
}

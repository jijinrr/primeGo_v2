"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

const testimonials = [
  {
    id: 1,
    name: "Rahul Sharma",
    role: "Business Executive",
    avatar: "RS",
    rating: 5,
    type: "Business",
    content:
      "PrimeGo transformed our corporate travel experience. The BMW 7 Series was immaculate, and the chauffeur service was exceptionally professional. Highly recommend for business travelers.",
  },
  {
    id: 2,
    name: "Priya Patel",
    role: "Bride",
    avatar: "PP",
    rating: 5,
    type: "Wedding",
    content:
      "Our wedding day was made extra special with the beautifully decorated Mercedes S-Class. The flowers, ribbons, and attention to detail were beyond our expectations. A truly royal experience!",
  },
  {
    id: 3,
    name: "Arjun Mehta",
    role: "Adventure Enthusiast",
    avatar: "AM",
    rating: 5,
    type: "Adventure",
    content:
      "Rented the Hayabusa for a weekend ride to the mountains. The bike was in pristine condition and the booking process was seamless. PrimeGo is now my go-to for superbikes.",
  },
  {
    id: 4,
    name: "Sneha Reddy",
    role: "Event Planner",
    avatar: "SR",
    rating: 5,
    type: "Wedding",
    content:
      "As an event planner, I recommend PrimeGo to all my clients. Their wedding car collection is stunning, and the team is incredibly responsive. Five-star service every time.",
  },
  {
    id: 5,
    name: "Vikram Singh",
    role: "CEO, TechStart",
    avatar: "VS",
    rating: 5,
    type: "Business",
    content:
      "We have a corporate account with PrimeGo for all our executive travel needs. The VIP membership pays for itself with the priority booking and premium discounts. Outstanding service.",
  },
  {
    id: 6,
    name: "Anita Desai",
    role: "Travel Blogger",
    avatar: "AD",
    rating: 5,
    type: "Adventure",
    content:
      "Explored the countryside in a Fortuner from PrimeGo. The vehicle was spotless, well-maintained, and perfect for off-road adventures. Will definitely rent again!",
  },
]

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  useEffect(() => {
    if (!autoplay) return

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [autoplay])

  const nextTestimonial = () => {
    setAutoplay(false)
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setAutoplay(false)
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="relative w-full bg-secondary/30 py-24">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-1/2 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-accent/5 to-primary/3 blur-3xl" />
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
            Testimonials
          </span>
          <h2 className="mb-4 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            What Our <span className="gradient-text">Customers Say</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Hear from thousands of satisfied customers who have experienced the PrimeGo difference.
          </p>
        </motion.div>

        {/* Main Testimonial Carousel */}
        <div className="relative mx-auto max-w-4xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="glass rounded-3xl p-8 shadow-luxury md:p-12"
            >
              {/* Quote Icon */}
              <Quote className="mb-6 h-12 w-12 text-accent/20" />

              {/* Rating */}
              <div className="mb-6 flex gap-1">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-gold text-gold" />
                ))}
              </div>

              {/* Content */}
              <p className="mb-8 text-xl leading-relaxed text-foreground md:text-2xl">
                &ldquo;{testimonials[currentIndex].content}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <Avatar className="h-14 w-14 border-2 border-accent/20">
                  <AvatarFallback className="bg-accent/10 text-accent">
                    {testimonials[currentIndex].avatar}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold text-foreground">
                    {testimonials[currentIndex].name}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonials[currentIndex].role}
                  </p>
                </div>
                <div className="ml-auto">
                  <span className="rounded-full bg-accent/10 px-4 py-1 text-sm font-medium text-accent">
                    {testimonials[currentIndex].type}
                  </span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="mt-8 flex items-center justify-center gap-4">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              className="rounded-full"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setAutoplay(false)
                    setCurrentIndex(index)
                  }}
                  className={`h-2 rounded-full transition-all ${
                    index === currentIndex
                      ? "w-8 bg-accent"
                      : "w-2 bg-accent/20 hover:bg-accent/40"
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="rounded-full"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Mini Testimonial Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="glass rounded-2xl p-6 shadow-luxury transition-all hover:shadow-orange-glow"
            >
              <div className="mb-3 flex gap-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-gold text-gold" />
                ))}
              </div>
              <p className="mb-4 line-clamp-3 text-sm text-foreground">
                &ldquo;{testimonial.content}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <Avatar className="h-8 w-8">
                  <AvatarFallback className="bg-accent/10 text-xs text-accent">
                    {testimonial.avatar}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-medium text-foreground">{testimonial.name}</p>
                  <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

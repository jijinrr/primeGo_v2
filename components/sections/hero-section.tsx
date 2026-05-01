"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  ArrowRight, Car, Clock, Users, Shield, Star,
  ChevronDown, MapPin, Calendar, ChevronLeft, ChevronRight,
} from "lucide-react"
import Image from "next/image"

const stats = [
  { icon: Car,    value: "500+",    label: "Premium Vehicles" },
  { icon: Clock,  value: "24/7",    label: "Concierge" },
  { icon: Users,  value: "50K+",    label: "Happy Clients" },
  { icon: Shield, value: "100%",    label: "Insured Fleet" },
  { icon: Star,   value: "4.9★",    label: "Avg Rating" },
]

const heroSlides = [
  {
    id: "luxury-bmw",
    category: "Luxury Cars",
    tag: "From ₹24,999/day",
    src: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=1600&h=900&fit=crop",
    alt: "Luxury BMW 7 Series",
  },
  {
    id: "ducati",
    category: "Super Bikes",
    tag: "From ₹15,999/day",
    src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&h=900&fit=crop",
    alt: "Ducati Panigale Superbike",
  },
  {
    id: "mercedes",
    category: "Premium Sedans",
    tag: "From ₹29,999/day",
    src: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=1600&h=900&fit=crop",
    alt: "Mercedes S-Class",
  },
  {
    id: "suv-offroad",
    category: "Adventure SUVs",
    tag: "From ₹11,999/day",
    src: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=1600&h=900&fit=crop",
    alt: "Off-road Adventure SUV",
  },
  {
    id: "kawasaki",
    category: "Performance Bikes",
    tag: "From ₹19,999/day",
    src: "https://images.unsplash.com/photo-1449426468159-d96dbf08f19f?w=1600&h=900&fit=crop",
    alt: "Kawasaki Ninja",
  },
  {
    id: "bmw-bike",
    category: "Sports Bikes",
    tag: "From ₹24,999/day",
    src: "https://images.unsplash.com/photo-1609630875171-b1321377ee65?w=1600&h=900&fit=crop",
    alt: "BMW S1000RR Sports Bike",
  },
  {
    id: "fortuner",
    category: "Premium SUVs",
    tag: "From ₹12,999/day",
    src: "https://images.unsplash.com/photo-1625231334168-29c0e0fd3ff0?w=1600&h=900&fit=crop",
    alt: "Toyota Fortuner",
  },
  {
    id: "exotic",
    category: "Wedding & Events",
    tag: "Book for Events",
    src: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=1600&h=900&fit=crop",
    alt: "Exotic Luxury Wedding Car",
  },
]

const cities = ["Mumbai", "Delhi", "Bangalore", "Hyderabad", "Pune", "Chennai", "Kolkata", "Gurgaon"]

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [pickupDate, setPickupDate] = useState<Date | null>(null)
  const [showDatePicker, setShowDatePicker] = useState(false)
  const [calendarMonth, setCalendarMonth] = useState(new Date())
  const dateRef = useRef<HTMLDivElement>(null)

  /* ── Slide cycling ─────────────────────────────────────────── */
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 3000)
    return () => clearInterval(timer)
  }, [])

  /* ── Close date picker on outside click ────────────────────── */
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dateRef.current && !dateRef.current.contains(e.target as Node)) {
        setShowDatePicker(false)
      }
    }
    if (showDatePicker) document.addEventListener("mousedown", handler)
    return () => document.removeEventListener("mousedown", handler)
  }, [showDatePicker])

  /* ── Calendar helpers ──────────────────────────────────────── */
  const getDaysInMonth = (d: Date) => new Date(d.getFullYear(), d.getMonth() + 1, 0).getDate()
  const getFirstDayOfMonth = (d: Date) => new Date(d.getFullYear(), d.getMonth(), 1).getDay()

  const renderCalendarGrid = () => {
    const today = new Date()
    today.setHours(0, 0, 0, 0)
    const daysInMonth = getDaysInMonth(calendarMonth)
    const firstDay = getFirstDayOfMonth(calendarMonth)
    const cells: React.ReactNode[] = []

    for (let i = 0; i < firstDay; i++) {
      cells.push(<div key={`e-${i}`} />)
    }

    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(calendarMonth.getFullYear(), calendarMonth.getMonth(), day)
      const isPast = date < today
      const isSelected = pickupDate?.toDateString() === date.toDateString()
      const isToday = date.toDateString() === today.toDateString()

      cells.push(
        <button
          key={day}
          disabled={isPast}
          onClick={() => {
            setPickupDate(date)
            setShowDatePicker(false)
          }}
          className={`h-9 w-full rounded-lg text-sm font-medium transition-all duration-150 ${
            isPast
              ? "cursor-not-allowed text-white/20"
              : isSelected
              ? "bg-primary text-white font-bold shadow-[0_0_12px_rgba(255,140,0,0.5)]"
              : isToday
              ? "bg-primary/25 text-primary font-bold ring-1 ring-primary/40"
              : "text-white/80 hover:bg-white/15 hover:text-white"
          }`}
        >
          {day}
        </button>
      )
    }
    return cells
  }

  return (
    <section className="relative min-h-screen w-full overflow-hidden">

      {/* ── Cycling background images with zoom‑fade ─────────── */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="sync">
          <motion.div
            key={heroSlides[currentSlide].id}
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.97 }}
            transition={{ duration: 1.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="absolute inset-0"
          >
            <Image
              src={heroSlides[currentSlide].src}
              alt={heroSlides[currentSlide].alt}
              fill
              className="object-cover"
              priority={currentSlide === 0}
              sizes="100vw"
            />
          </motion.div>
        </AnimatePresence>

        {/* Layered dark overlays for cinematic depth */}
        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-black/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/10 to-transparent" />
        <div className="absolute inset-0 bg-[rgba(10,20,60,0.22)]" />
      </div>

      {/* ── Main content ──────────────────────────────────────── */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 pb-52 pt-28 lg:px-8">

        {/* Premium badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-6"
        >
          <div className="inline-flex items-center gap-2.5 rounded-full border border-white/20 bg-white/10 px-5 py-2 backdrop-blur-md">
            <span className="h-2 w-2 animate-pulse rounded-full bg-primary" />
            <span className="text-sm font-semibold tracking-wide text-white/90">
              Premium Luxury Rentals · India
            </span>
          </div>
        </motion.div>

        {/* Animated vehicle category */}
        <AnimatePresence mode="wait">
          <motion.p
            key={`cat-${currentSlide}`}
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 16 }}
            transition={{ duration: 0.35 }}
            className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-primary"
          >
            {heroSlides[currentSlide].category}
          </motion.p>
        </AnimatePresence>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.1 }}
          className="mb-5 max-w-3xl text-balance text-5xl font-bold tracking-tight text-white sm:text-6xl md:text-7xl lg:text-[5.5rem] lg:leading-[1.05]"
        >
          Drive{" "}
          <span className="text-primary drop-shadow-[0_0_24px_rgba(255,140,0,0.6)]">
            Excellence
          </span>
        </motion.h1>

        {/* Sub-headline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.2 }}
          className="mb-10 max-w-lg text-base text-white/65 sm:text-lg leading-relaxed"
        >
          Premium cars, superbikes &amp; wedding rentals. Instant confirmation
          with 24/7 concierge support.
        </motion.p>

        {/* CTA row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.3 }}
          className="mb-16 flex flex-wrap gap-4"
        >
          <a
            href="#booking"
            className="btn-primary group flex h-13 items-center gap-2 px-8 text-base shadow-[0_0_30px_rgba(255,140,0,0.4)]"
          >
            Book Now
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#vehicles"
            className="flex h-13 items-center gap-2 rounded-[var(--btn-radius)] border border-white/30 bg-white/10 px-8 text-base font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:border-white/60 hover:bg-white/20"
          >
            Explore Fleet
          </a>
        </motion.div>

        {/* Stats — glassmorphism pills */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.45 }}
          className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5 md:max-w-3xl"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.55 + i * 0.07 }}
              whileHover={{ y: -4, scale: 1.04 }}
              className="flex flex-col items-center rounded-2xl border border-white/14 bg-white/10 p-4 text-center backdrop-blur-md transition-all duration-300 hover:border-primary/40 hover:bg-white/16"
            >
              <stat.icon className="mb-1.5 h-4 w-4 text-primary" />
              <p className="text-lg font-bold leading-none text-white">{stat.value}</p>
              <p className="mt-1 text-[10px] font-medium uppercase tracking-wide text-white/55">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* ── Slide indicators — left side ─────────────────────── */}
      <div className="absolute bottom-[13rem] left-6 z-20 flex gap-2 lg:left-8">
        {heroSlides.map((_, i) => (
          <button
            key={i}
            aria-label={`Slide ${i + 1}`}
            onClick={() => setCurrentSlide(i)}
            className={`h-1 rounded-full transition-all duration-400 ${
              i === currentSlide
                ? "w-8 bg-primary shadow-[0_0_8px_rgba(255,140,0,0.8)]"
                : "w-2 bg-white/35 hover:bg-white/60"
            }`}
          />
        ))}
      </div>

      {/* ── Price tag — right side ────────────────────────────── */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`tag-${currentSlide}`}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.35 }}
          className="absolute bottom-[13rem] right-6 z-20 lg:right-8"
        >
          <div className="rounded-xl border border-white/18 bg-white/10 px-4 py-2.5 text-right backdrop-blur-md">
            <p className="text-[10px] font-medium uppercase tracking-wide text-white/55">Starting</p>
            <p className="text-sm font-bold text-white">{heroSlides[currentSlide].tag}</p>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* ── Scroll hint ───────────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-[13rem] left-1/2 z-20 hidden -translate-x-1/2 flex-col items-center gap-1 md:flex"
      >
        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{ duration: 1.8, repeat: Infinity }}
        >
          <ChevronDown className="h-5 w-5 text-white/40" />
        </motion.div>
      </motion.div>

      {/* ── Glassmorphism quick‑search strip ─────────────────── */}
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.7 }}
        className="absolute bottom-0 left-0 right-0 z-20 px-4 pb-6 lg:px-8"
      >
        <div className="mx-auto max-w-5xl">
          <div className="rounded-2xl border border-white/14 bg-black/40 p-3 shadow-2xl backdrop-blur-xl sm:p-4">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-3">

              {/* ── Pick-up city ─── */}
              <div className="flex flex-1 items-center gap-2.5 rounded-xl border border-white/15 bg-white/8 px-4 py-3.5 transition-colors focus-within:border-primary/60 hover:border-white/30">
                <MapPin className="h-4 w-4 flex-shrink-0 text-primary" />
                <select className="flex-1 bg-transparent text-sm font-medium text-white outline-none cursor-pointer [&>option]:text-foreground [&>option]:bg-neutral-900">
                  <option value="">Pick-up City</option>
                  {cities.map((c) => <option key={c}>{c}</option>)}
                </select>
              </div>

              {/* ── Pick-up date with calendar popup ─── */}
              <div className="relative flex-1" ref={dateRef}>
                <button
                  onClick={() => setShowDatePicker(!showDatePicker)}
                  className={`flex w-full items-center gap-2.5 rounded-xl border px-4 py-3.5 text-left transition-all duration-200 ${
                    showDatePicker || pickupDate
                      ? "border-primary/60 bg-primary/10"
                      : "border-white/15 bg-white/8 hover:border-white/30"
                  }`}
                >
                  <Calendar className="h-4 w-4 flex-shrink-0 text-primary" />
                  {pickupDate ? (
                    <div className="flex flex-col">
                      <span className="text-[10px] font-semibold uppercase tracking-wider text-primary leading-none mb-0.5">
                        Pick-Up Date
                      </span>
                      <span className="text-sm font-bold text-white">
                        {pickupDate.toLocaleDateString("en-IN", {
                          weekday: "short",
                          day: "numeric",
                          month: "short",
                          year: "numeric",
                        })}
                      </span>
                    </div>
                  ) : (
                    <span className="text-sm font-medium text-white/65">Pick-Up Date</span>
                  )}
                </button>

                {/* ── Calendar popup — slides up from field ─── */}
                <AnimatePresence>
                  {showDatePicker && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.97 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.97 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      className="absolute bottom-full left-0 z-50 mb-3 min-w-[320px] rounded-2xl border border-white/15 bg-neutral-900/98 p-5 shadow-[0_-8px_40px_rgba(0,0,0,0.6)] backdrop-blur-2xl"
                    >
                      {/* Calendar header */}
                      <div className="mb-4 flex items-center justify-between">
                        <button
                          onClick={() =>
                            setCalendarMonth(
                              new Date(calendarMonth.getFullYear(), calendarMonth.getMonth() - 1, 1)
                            )
                          }
                          className="flex h-8 w-8 items-center justify-center rounded-lg text-white/60 transition-colors hover:bg-white/10 hover:text-white"
                        >
                          <ChevronLeft className="h-4 w-4" />
                        </button>
                        <span className="text-sm font-bold text-white">
                          {calendarMonth.toLocaleString("default", {
                            month: "long",
                            year: "numeric",
                          })}
                        </span>
                        <button
                          onClick={() =>
                            setCalendarMonth(
                              new Date(calendarMonth.getFullYear(), calendarMonth.getMonth() + 1, 1)
                            )
                          }
                          className="flex h-8 w-8 items-center justify-center rounded-lg text-white/60 transition-colors hover:bg-white/10 hover:text-white"
                        >
                          <ChevronRight className="h-4 w-4" />
                        </button>
                      </div>

                      {/* Day of week headers */}
                      <div className="mb-2 grid grid-cols-7">
                        {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((d) => (
                          <div
                            key={d}
                            className="py-1 text-center text-[10px] font-semibold uppercase tracking-wide text-white/35"
                          >
                            {d}
                          </div>
                        ))}
                      </div>

                      {/* Days grid */}
                      <div className="grid grid-cols-7 gap-0.5">
                        {renderCalendarGrid()}
                      </div>

                      {/* Quick clear */}
                      {pickupDate && (
                        <button
                          onClick={() => setPickupDate(null)}
                          className="mt-4 w-full rounded-xl border border-white/10 py-2 text-xs font-semibold text-white/50 transition-colors hover:border-white/20 hover:text-white/80"
                        >
                          Clear date
                        </button>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* ── Vehicle type ─── */}
              <div className="flex flex-1 items-center gap-2.5 rounded-xl border border-white/15 bg-white/8 px-4 py-3.5 transition-colors focus-within:border-primary/60 hover:border-white/30">
                <Car className="h-4 w-4 flex-shrink-0 text-primary" />
                <select className="flex-1 bg-transparent text-sm font-medium text-white outline-none cursor-pointer [&>option]:text-foreground [&>option]:bg-neutral-900">
                  <option value="">Vehicle Type</option>
                  <option>Luxury Cars</option>
                  <option>Popular Cars</option>
                  <option>Superbikes</option>
                  <option>Adventure SUVs</option>
                  <option>Wedding Cars</option>
                </select>
              </div>

              {/* ── Search CTA ─── */}
              <button className="btn-primary flex h-[52px] flex-shrink-0 items-center gap-2 px-8 text-sm font-bold shadow-[0_4px_24px_rgba(255,140,0,0.45)] sm:px-10">
                Search
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

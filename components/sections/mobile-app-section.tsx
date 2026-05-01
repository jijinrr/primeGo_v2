"use client"

import { motion } from "framer-motion"
import { Smartphone, Download, Star, Zap, Calendar, MapPin, Bell, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"

const appFeatures = [
  { icon: Calendar, title: "Instant Booking", description: "Book in seconds" },
  { icon: MapPin, title: "Live Tracking", description: "Real-time updates" },
  { icon: Bell, title: "Smart Alerts", description: "Never miss a deal" },
  { icon: Shield, title: "Secure Payments", description: "Safe transactions" },
]

export function MobileAppSection() {
  return (
    <section className="relative w-full bg-background py-24">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute right-0 top-0 h-[600px] w-[600px] rounded-full bg-gradient-to-bl from-accent/5 to-transparent blur-3xl" />
        <div className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-gradient-to-tr from-gold/5 to-transparent blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left - Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-accent">
              Mobile Experience
            </span>
            <h2 className="mb-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              PrimeGo in <span className="gradient-text">Your Pocket</span>
            </h2>
            <p className="mb-8 text-lg text-muted-foreground">
              Download the PrimeGo app for the ultimate luxury rental experience. 
              Book vehicles, track your rides, manage rentals, and access exclusive 
              member benefits - all from your smartphone.
            </p>

            {/* App Features */}
            <div className="mb-8 grid grid-cols-2 gap-4">
              {appFeatures.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="rounded-lg bg-accent/10 p-2">
                    <feature.icon className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">{feature.title}</p>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* App Store Buttons */}
            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                className="btn-premium h-14 gap-3 px-6"
              >
                <svg className="h-7 w-7" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
                </svg>
                <div className="text-left">
                  <p className="text-xs opacity-80">Download on the</p>
                  <p className="text-sm font-semibold">App Store</p>
                </div>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="h-14 gap-3 px-6"
              >
                <svg className="h-7 w-7" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 010 1.73l-2.807 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z" />
                </svg>
                <div className="text-left">
                  <p className="text-xs opacity-80">Get it on</p>
                  <p className="text-sm font-semibold">Google Play</p>
                </div>
              </Button>
            </div>

            {/* App Stats */}
            <div className="mt-8 flex flex-wrap gap-6">
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-gold text-gold" />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">4.9 Rating</span>
              </div>
              <div className="flex items-center gap-2">
                <Download className="h-4 w-4 text-accent" />
                <span className="text-sm text-muted-foreground">100K+ Downloads</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="h-4 w-4 text-accent" />
                <span className="text-sm text-muted-foreground">Lightning Fast</span>
              </div>
            </div>
          </motion.div>

          {/* Right - Phone Mockups */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex justify-center"
          >
            <div className="relative">
              {/* Main Phone */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="relative z-20"
              >
                <div className="glass rounded-[3rem] border-8 border-foreground/10 p-4 shadow-luxury">
                  <div className="relative aspect-[9/19] w-64 overflow-hidden rounded-[2rem] bg-gradient-to-br from-accent/10 via-background to-gold/10">
                    {/* Screen Content Mockup */}
                    <div className="absolute inset-0 flex flex-col">
                      {/* Status Bar */}
                      <div className="flex items-center justify-between px-6 py-3">
                        <span className="text-xs text-foreground/60">9:41</span>
                        <div className="h-6 w-20 rounded-full bg-foreground/10" />
                        <div className="flex gap-1">
                          <div className="h-3 w-3 rounded-sm bg-foreground/30" />
                          <div className="h-3 w-3 rounded-sm bg-foreground/30" />
                        </div>
                      </div>
                      
                      {/* App Content */}
                      <div className="flex-1 p-4">
                        <div className="mb-4 flex items-center gap-3">
                          <Smartphone className="h-8 w-8 text-accent" />
                          <span className="text-lg font-bold text-foreground">PrimeGo</span>
                        </div>
                        <div className="mb-4 rounded-xl bg-foreground/5 p-4">
                          <p className="mb-2 text-xs text-muted-foreground">Your next ride</p>
                          <p className="font-semibold text-foreground">BMW 7 Series</p>
                          <p className="text-xs text-accent">Tomorrow, 10:00 AM</p>
                        </div>
                        <div className="space-y-2">
                          {[1, 2, 3].map((i) => (
                            <div key={i} className="h-12 rounded-lg bg-foreground/5" />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Secondary Phone (Behind) */}
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
                className="absolute -right-16 top-16 z-10 opacity-60"
              >
                <div className="glass rounded-[2.5rem] border-4 border-foreground/5 p-3 shadow-luxury">
                  <div className="aspect-[9/19] w-48 rounded-[2rem] bg-gradient-to-br from-gold/10 via-background to-accent/10" />
                </div>
              </motion.div>

              {/* Decorative Elements */}
              <div className="absolute -left-8 top-1/2 -translate-y-1/2">
                <motion.div
                  animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="h-20 w-20 rounded-full bg-accent/20 blur-xl"
                />
              </div>
              <div className="absolute -bottom-8 right-8">
                <motion.div
                  animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0.8, 0.5] }}
                  transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                  className="h-24 w-24 rounded-full bg-gold/20 blur-xl"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

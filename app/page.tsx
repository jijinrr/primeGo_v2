import { Header } from "@/components/sections/header"
import { HeroSection } from "@/components/sections/hero-section"
import { BookingSection } from "@/components/sections/booking-section"
import { VehicleCollection } from "@/components/sections/vehicle-collection"
import { WeddingSection } from "@/components/sections/wedding-section"
import { ServicesSection } from "@/components/sections/services-section"
import { WhyChooseSection } from "@/components/sections/why-choose-section"
import { VIPMembership } from "@/components/sections/vip-membership"
import { TestimonialsSection } from "@/components/sections/testimonials-section"
import { MobileAppSection } from "@/components/sections/mobile-app-section"
import { FAQSection } from "@/components/sections/faq-section"
import { FooterSection } from "@/components/sections/footer-section"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Navigation */}
      <Header />

      {/* Hero Section */}
      <HeroSection />

      {/* Smart Booking */}
      <BookingSection />

      {/* Vehicle Collection */}
      <section id="vehicles">
        <VehicleCollection />
      </section>

      {/* Wedding Rentals */}
      <section id="wedding">
        <WeddingSection />
      </section>

      {/* Why Choose PrimeGo */}
      <WhyChooseSection />

      {/* Premium Services */}
      <section id="services">
        <ServicesSection />
      </section>

      {/* VIP Membership */}
      <section id="vip">
        <VIPMembership />
      </section>

      {/* Testimonials */}
      <TestimonialsSection />

      {/* Mobile App */}
      <MobileAppSection />

      {/* FAQ */}
      <FAQSection />

      {/* Footer */}
      <section id="contact">
        <FooterSection />
      </section>
    </main>
  )
}

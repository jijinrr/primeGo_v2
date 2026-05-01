"use client"

import { motion } from "framer-motion"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "What documents do I need to rent a vehicle?",
    answer:
      "You will need a valid driving license (minimum 1 year old), a government-issued ID proof (Aadhar/Passport), and a credit/debit card for the security deposit. International customers need an International Driving Permit along with their original license.",
  },
  {
    question: "What is the minimum age requirement to rent?",
    answer:
      "The minimum age to rent a standard vehicle is 21 years. For luxury and sports vehicles, the minimum age is 25 years. For superbikes, you must be at least 25 years old with a valid two-wheeler license.",
  },
  {
    question: "How does the booking process work?",
    answer:
      "Simply select your vehicle, choose your rental dates, and complete the booking online. You will receive instant confirmation. On the pickup day, present your documents and complete the security deposit. For doorstep delivery, we bring the vehicle to your location.",
  },
  {
    question: "What is included in the rental price?",
    answer:
      "All rentals include comprehensive insurance, 24/7 roadside assistance, regular maintenance, and unlimited kilometers (subject to daily limits on certain vehicles). Fuel is not included and should be returned at the same level as pickup.",
  },
  {
    question: "Can I modify or cancel my booking?",
    answer:
      "Yes, you can modify or cancel your booking up to 24 hours before the pickup time for a full refund. Cancellations within 24 hours may incur a cancellation fee. VIP members enjoy more flexible cancellation policies.",
  },
  {
    question: "Do you offer chauffeur services?",
    answer:
      "Yes, we offer professional chauffeur services for all vehicles. Our chauffeurs are trained, uniformed, and background-verified. Chauffeur service can be added during booking or as an upgrade.",
  },
  {
    question: "What are the wedding rental packages?",
    answer:
      "Our wedding packages include the vehicle, professional chauffeur, luxury floral decoration, ribbons, and photography-ready styling. We offer hourly, half-day, and full-day packages. Convoy options with multiple vehicles are also available.",
  },
  {
    question: "Is there a security deposit required?",
    answer:
      "Yes, a refundable security deposit is required for all rentals. The amount varies based on the vehicle category. VIP members enjoy reduced deposit requirements. The deposit is fully refunded within 3-5 business days after the vehicle is returned.",
  },
]

export function FAQSection() {
  return (
    <section className="relative w-full bg-background py-24">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-gradient-to-b from-accent/5 to-transparent blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-accent">
            Support
          </span>
          <h2 className="mb-4 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Everything you need to know about renting with PrimeGo.
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="glass rounded-3xl p-6 shadow-luxury md:p-8"
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <AccordionItem value={`item-${index}`} className="border-border/50">
                  <AccordionTrigger className="py-5 text-left text-foreground hover:text-accent hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="pb-5 text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="mb-4 text-muted-foreground">
            Still have questions? We&apos;re here to help.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center text-accent hover:underline"
          >
            Contact our support team
            <svg
              className="ml-2 h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  )
}

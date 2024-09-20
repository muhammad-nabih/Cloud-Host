// File: app/about/components/CTASection.tsx
"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Section from './Section'

const CTASection = () => (
  <Section className="bg-gradient-to-r from-blue-500 to-blue-900 text-white" direction="left">
    <div className="container mx-auto text-center">
      <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
      <p className="mb-8 text-xl">Join thousands of satisfied customers and experience the future of cloud hosting today.</p>
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Button size="lg" className="bg-white text-blue-800 hover:bg-blue-100">
          Start Your Free Trial
        </Button>
      </motion.div>
    </div>
  </Section>
)

export default CTASection

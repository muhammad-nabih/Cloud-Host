// File: app/about/components/ChooseUsSection.tsx
"use client"

import { motion } from "framer-motion"
import { Users, Headphones, Rocket, Shield } from "lucide-react"
import Section from './Section'

const items = [
  { icon: Users, text: "10,000+ Satisfied Clients" },
  { icon: Headphones, text: "24/7 Expert Support" },
  { icon: Rocket, text: "Scalable Solutions" },
  { icon: Shield, text: "99.99% Uptime Guarantee" },
]

const ChooseUsSection = () => (
  <Section className="bg-gradient-to-r from-blue-500 to-blue-900 text-white" direction="left">
    <div className="container mx-auto text-center">
      <h2 className="text-3xl font-bold mb-8">Why Choose Us?</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {items.map((item, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <item.icon className="w-12 h-12 mb-4" />
            <p className="text-lg">{item.text}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </Section>
)

export default ChooseUsSection

// File: app/about/components/HeroSection.tsx
"use client"

import { motion } from "framer-motion"
import Section from './Section'

const HeroSection = () => (
  <Section className="bg-gradient-to-r from-blue-400 to-blue-950 text-white">
    <div className="container mx-auto text-center">
      <motion.h1
        className="text-5xl font-bold mb-6"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        About CloudHosting
      </motion.h1>
      <motion.p
        className="text-xl max-w-2xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        Empowering your digital presence with cutting-edge cloud solutions since 2023. We&apos;re not just hosting; we&apos;re revolutionizing the way you connect with the world.
      </motion.p>
    </div>
  </Section>
)

export default HeroSection

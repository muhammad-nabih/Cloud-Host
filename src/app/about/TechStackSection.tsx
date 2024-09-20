// File: app/about/components/TechStackSection.tsx
"use client"

import { motion } from "framer-motion"
import Section from './Section'

const technologies = ["Next.js", "React", "Node.js", "Docker", "Kubernetes", "AWS", "Azure", "Google Cloud"]

const TechStackSection = () => (
  <Section direction="right">
    <div className="container mx-auto text-center">
      <h2 className="text-3xl font-bold mb-8 text-blue-800">Our Technology Stack</h2>
      <div className="flex flex-wrap justify-center gap-8">
        {technologies.map((tech, index) => (
          <motion.div
            key={index}
            className="bg-blue-200 rounded-full px-6 py-2 text-blue-800 font-semibold"
            initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            {tech}
          </motion.div>
        ))}
      </div>
    </div>
  </Section>
)

export default TechStackSection

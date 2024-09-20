// File: app/about/components/ServicesSection.tsx
"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Cloud, Shield, Zap } from "lucide-react"
import Section from './Section'

const services = [
  { icon: Cloud, title: "Cloud Infrastructure", description: "State-of-the-art data centers ensuring 99.99% uptime." },
  { icon: Shield, title: "Advanced Security", description: "Multi-layered security protocols and real-time threat detection." },
  { icon: Zap, title: "High Performance", description: "Optimized configurations for unparalleled speed and reliability." },
]

const ServicesSection = () => (
  <Section direction="right">
    <div className="container mx-auto">
      <h2 className="text-3xl font-bold text-center mb-12 text-blue-800">Our Core Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.3 }}
          >
            <Card className="h-full shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white">
              <CardHeader>
                <CardTitle className="flex items-center text-blue-700">
                  <service.icon className="mr-2" /> {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>{service.description}</CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  </Section>
)

export default ServicesSection

'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ThemeToggle } from '@/components/theme-toggle'
import { Navigation } from '@/components/navigation'
import { HeroSection } from '@/components/sections/hero-section'
import { FeaturesSection } from '@/components/sections/features-section'
import { StatsSection } from '@/components/sections/stats-section'
import { ProjectsSection } from '@/components/sections/projects-section'
import { TestimonialsSection } from '@/components/sections/testimonials-section'
import { NewsletterSection } from '@/components/sections/newsletter-section'
import { FooterSection } from '@/components/sections/footer-section'

export default function HomePage() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <FeaturesSection />
        <StatsSection />
        <ProjectsSection />
        <TestimonialsSection />
        <NewsletterSection />
      </main>
      <FooterSection />
    </div>
  )
}
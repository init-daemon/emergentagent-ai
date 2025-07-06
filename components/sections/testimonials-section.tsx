'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Star, Quote, TrendingUp, Shield, Coins } from 'lucide-react'

export function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      name: 'Marie Dubois',
      role: 'Investisseur',
      company: 'Tech Investor',
      image: '/api/placeholder/80/80',
      rating: 5,
      testimonial: 'CryptoFund a révolutionné ma façon d\'investir dans les crypto. Interface intuitive et projets de qualité exceptionnelle.',
      investment: '€50,000',
      roi: '+24%',
      featured: true
    },
    {
      id: 2,
      name: 'Jean Martin',
      role: 'Entrepreneur',
      company: 'StartUp Founder',
      image: '/api/placeholder/80/80',
      rating: 5,
      testimonial: 'Grâce à CryptoFund, j\'ai pu financer mon projet DeFi. La communauté est fantastique et le support exceptionnel.',
      investment: '€25,000',
      roi: '+18%',
      featured: false
    },
    {
      id: 3,
      name: 'Sophie Laurent',
      role: 'Analyste Financier',
      company: 'Financial Analyst',
      image: '/api/placeholder/80/80',
      rating: 5,
      testimonial: 'La transparence et la sécurité de CryptoFund sont inégalées. C\'est ma plateforme de référence pour les investissements crypto.',
      investment: '€100,000',
      roi: '+32%',
      featured: true
    },
    {
      id: 4,
      name: 'Pierre Lefèvre',
      role: 'Développeur',
      company: 'Blockchain Developer',
      image: '/api/placeholder/80/80',
      rating: 5,
      testimonial: 'J\'ai lancé mon projet sur CryptoFund et l\'expérience a été parfaite. La communauté comprend vraiment l\'innovation.',
      investment: '€15,000',
      roi: '+15%',
      featured: false
    },
    {
      id: 5,
      name: 'Emma Moreau',
      role: 'Consultante',
      company: 'Crypto Consultant',
      image: '/api/placeholder/80/80',
      rating: 5,
      testimonial: 'CryptoFund offre les meilleurs projets avec une analyse de risque détaillée. Mes clients sont toujours satisfaits.',
      investment: '€75,000',
      roi: '+28%',
      featured: true
    },
    {
      id: 6,
      name: 'Lucas Bernard',
      role: 'Investisseur',
      company: 'Angel Investor',
      image: '/api/placeholder/80/80',
      rating: 5,
      testimonial: 'Interface moderne, projets innovants et rendements excellents. CryptoFund est un game-changer dans le crowdfunding crypto.',
      investment: '€200,000',
      roi: '+35%',
      featured: false
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  }

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-primary/5 via-background to-blue-600/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4">
            Témoignages
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Ce que disent nos{' '}
            <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
              investisseurs
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Découvrez les témoignages de nos investisseurs satisfaits qui ont fait confiance 
            à CryptoFund pour leurs investissements crypto.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              variants={itemVariants}
              className="group"
            >
              <Card className="h-full transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1 border-border/50 hover:border-primary/20 overflow-hidden">
                <CardContent className="p-6">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <Avatar className="h-12 w-12 border-2 border-primary/20">
                        <AvatarImage src={testimonial.image} alt={testimonial.name} />
                        <AvatarFallback className="bg-primary/10 text-primary">
                          {testimonial.name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="font-semibold text-foreground">
                          {testimonial.name}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                    {testimonial.featured && (
                      <Badge variant="secondary" className="bg-gradient-to-r from-primary/20 to-blue-600/20 text-primary">
                        Featured
                      </Badge>
                    )}
                  </div>

                  {/* Rating */}
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                    <span className="ml-2 text-sm text-muted-foreground">
                      {testimonial.rating}.0
                    </span>
                  </div>

                  {/* Quote */}
                  <div className="relative mb-6">
                    <Quote className="h-8 w-8 text-primary/20 absolute -top-2 -left-2" />
                    <p className="text-muted-foreground leading-relaxed pl-4">
                      "{testimonial.testimonial}"
                    </p>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-4 pt-4 border-t border-border/50">
                    <div className="flex items-center space-x-2">
                      <Coins className="h-4 w-4 text-primary" />
                      <div>
                        <p className="text-xs text-muted-foreground">Investi</p>
                        <p className="text-sm font-medium">{testimonial.investment}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <TrendingUp className="h-4 w-4 text-green-500" />
                      <div>
                        <p className="text-xs text-muted-foreground">ROI</p>
                        <p className="text-sm font-medium text-green-500">{testimonial.roi}</p>
                      </div>
                    </div>
                  </div>

                  {/* Company badge */}
                  <div className="mt-4 pt-4 border-t border-border/50">
                    <Badge variant="outline" className="text-xs">
                      {testimonial.company}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20"
        >
          <div className="bg-gradient-to-r from-primary/10 via-blue-600/10 to-purple-600/10 rounded-2xl p-8 md:p-12">
            <div className="text-center mb-8">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Ils nous font confiance
              </h3>
              <p className="text-muted-foreground">
                Plus de 10,000 investisseurs satisfaits dans le monde entier
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="flex items-center justify-center space-x-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <div className="text-2xl font-bold text-primary mb-1">4.9/5</div>
                <div className="text-sm text-muted-foreground">Satisfaction</div>
              </div>
              <div className="text-center">
                <Shield className="h-8 w-8 text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold text-primary mb-1">100%</div>
                <div className="text-sm text-muted-foreground">Sécurisé</div>
              </div>
              <div className="text-center">
                <TrendingUp className="h-8 w-8 text-green-500 mx-auto mb-2" />
                <div className="text-2xl font-bold text-primary mb-1">+25%</div>
                <div className="text-sm text-muted-foreground">ROI Moyen</div>
              </div>
              <div className="text-center">
                <Coins className="h-8 w-8 text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold text-primary mb-1">500M+</div>
                <div className="text-sm text-muted-foreground">Investis</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
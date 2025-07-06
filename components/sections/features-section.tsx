'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { 
  Shield, 
  TrendingUp, 
  Users, 
  Zap, 
  Lock, 
  Globe, 
  BarChart3, 
  Coins,
  Wallet,
  Target
} from 'lucide-react'

export function FeaturesSection() {
  const features = [
    {
      icon: Shield,
      title: 'Sécurité Blockchain',
      description: 'Protection maximale grâce à la technologie blockchain et aux smart contracts audités.',
      badge: 'Sécurisé',
      image: 'https://images.pexels.com/photos/9169180/pexels-photo-9169180.jpeg?auto=compress&cs=tinysrgb&w=500'
    },
    {
      icon: TrendingUp,
      title: 'Croissance Optimisée',
      description: 'Algorithmes d\'IA pour maximiser le potentiel de rendement de vos investissements.',
      badge: 'IA',
      image: 'https://images.pexels.com/photos/7789849/pexels-photo-7789849.jpeg?auto=compress&cs=tinysrgb&w=500'
    },
    {
      icon: Users,
      title: 'Communauté Active',
      description: 'Rejoignez une communauté de plus de 10 000 investisseurs passionnés.',
      badge: 'Communauté',
      image: 'https://images.unsplash.com/photo-1495908333425-29a1e0918c5f?auto=format&fit=crop&w=500&q=80'
    },
    {
      icon: Zap,
      title: 'Transactions Instantanées',
      description: 'Processus de financement et de retrait ultra-rapides sur notre réseau.',
      badge: 'Rapide',
      image: 'https://images.pexels.com/photos/9169180/pexels-photo-9169180.jpeg?auto=compress&cs=tinysrgb&w=500'
    },
    {
      icon: Lock,
      title: 'Portefeuille Sécurisé',
      description: 'Stockage à froid et authentification multi-facteur pour vos actifs.',
      badge: 'Sécurisé',
      image: 'https://images.pexels.com/photos/7789849/pexels-photo-7789849.jpeg?auto=compress&cs=tinysrgb&w=500'
    },
    {
      icon: Globe,
      title: 'Accès Global',
      description: 'Plateforme accessible 24/7 depuis n\'importe où dans le monde.',
      badge: 'Global',
      image: 'https://images.unsplash.com/photo-1495908333425-29a1e0918c5f?auto=format&fit=crop&w=500&q=80'
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
    <section id="features" className="py-20 bg-gradient-to-br from-background via-accent/5 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4">
            Fonctionnalités
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Pourquoi choisir{' '}
            <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
              CryptoFund
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Découvrez les fonctionnalités qui font de CryptoFund la plateforme de crowdfunding 
            crypto la plus avancée du marché.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              className="group"
            >
              <Card className="h-full transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1 border-border/50 hover:border-primary/20">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                      <feature.icon className="h-6 w-6" />
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {feature.badge}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                  <div className="mt-4 relative overflow-hidden rounded-lg bg-gradient-to-br from-primary/5 to-blue-600/5 p-4">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="relative flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                      <span className="text-sm font-medium text-primary">
                        Fonctionnalité active
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional info section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 text-center"
        >
          <div className="bg-gradient-to-r from-primary/10 via-blue-600/10 to-purple-600/10 rounded-2xl p-8 md:p-12">
            <div className="max-w-3xl mx-auto">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Une technologie de pointe
              </h3>
              <p className="text-muted-foreground mb-6">
                Notre plateforme utilise les dernières innovations blockchain et IA pour 
                offrir une expérience d'investissement inégalée, sécurisée et rentable.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="flex flex-col items-center space-y-2">
                  <Wallet className="h-8 w-8 text-primary" />
                  <span className="text-sm font-medium">Multi-Wallet</span>
                </div>
                <div className="flex flex-col items-center space-y-2">
                  <BarChart3 className="h-8 w-8 text-primary" />
                  <span className="text-sm font-medium">Analytics</span>
                </div>
                <div className="flex flex-col items-center space-y-2">
                  <Target className="h-8 w-8 text-primary" />
                  <span className="text-sm font-medium">Précision</span>
                </div>
                <div className="flex flex-col items-center space-y-2">
                  <Coins className="h-8 w-8 text-primary" />
                  <span className="text-sm font-medium">Multi-Crypto</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
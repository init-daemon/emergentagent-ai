'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { TrendingUp, Users, Coins, Shield, Globe, Target } from 'lucide-react'
import { useEffect, useState } from 'react'

export function StatsSection() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const stats = [
    {
      icon: TrendingUp,
      value: '500M+',
      label: 'Investis',
      description: 'Volume total investi sur la plateforme',
      color: 'from-green-500 to-emerald-600'
    },
    {
      icon: Users,
      value: '10k+',
      label: 'Investisseurs',
      description: 'Communauté active d\'investisseurs',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Coins,
      value: '250+',
      label: 'Projets',
      description: 'Projets financés avec succès',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Shield,
      value: '98%',
      label: 'Sécurité',
      description: 'Taux de sécurité des transactions',
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: Globe,
      value: '50+',
      label: 'Pays',
      description: 'Présence internationale',
      color: 'from-teal-500 to-teal-600'
    },
    {
      icon: Target,
      value: '15%',
      label: 'ROI Moyen',
      description: 'Retour sur investissement moyen',
      color: 'from-red-500 to-red-600'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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

  if (!mounted) return null

  return (
    <section id="stats" className="py-20 bg-gradient-to-br from-primary/5 via-background to-blue-600/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4">
            Statistiques
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Des chiffres qui{' '}
            <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
              parlent
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Découvrez l'impact de CryptoFund sur l'écosystème du crowdfunding crypto 
            à travers nos statistiques clés.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              variants={itemVariants}
              className="group"
            >
              <Card className="h-full transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1 border-border/50 hover:border-primary/20">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${stat.color} text-white`}>
                      <stat.icon className="h-6 w-6" />
                    </div>
                    <div className="relative">
                      <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: index * 0.1 }}
                      className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent"
                    >
                      {stat.value}
                    </motion.div>
                    <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                      {stat.label}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {stat.description}
                    </p>
                  </div>

                  <div className="mt-4 pt-4 border-t border-border/50">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-muted-foreground">Mise à jour</span>
                      <span className="text-xs font-medium text-primary">En temps réel</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20"
        >
          <div className="bg-gradient-to-r from-primary/10 via-blue-600/10 to-purple-600/10 rounded-2xl p-8 md:p-12">
            <div className="text-center mb-8">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Performance exceptionnelle
              </h3>
              <p className="text-muted-foreground">
                Notre plateforme affiche des résultats constants et une croissance soutenue
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-2">24/7</div>
                <div className="text-sm text-muted-foreground">Disponibilité</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-2">{'<'}1s</div>
                <div className="text-sm text-muted-foreground">Temps de réponse</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-2">99.9%</div>
                <div className="text-sm text-muted-foreground">Uptime</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-2">256-bit</div>
                <div className="text-sm text-muted-foreground">Encryption</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
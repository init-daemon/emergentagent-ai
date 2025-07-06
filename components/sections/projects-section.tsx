'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import { 
  Calendar, 
  TrendingUp, 
  Users, 
  Target, 
  Star, 
  Clock,
  Zap,
  Shield,
  Coins
} from 'lucide-react'

export function ProjectsSection() {
  const projects = [
    {
      id: 1,
      title: 'DeFi Protocol V2',
      description: 'Protocole de finance décentralisée de nouvelle génération avec yield farming optimisé.',
      category: 'DeFi',
      raised: 2500000,
      goal: 5000000,
      progress: 50,
      backers: 1247,
      daysLeft: 15,
      roi: '12-18%',
      risk: 'Modéré',
      image: 'https://images.unsplash.com/photo-1639815188546-c43c240ff4df?auto=format&fit=crop&w=500&q=80',
      featured: true,
      tags: ['DeFi', 'Yield Farming', 'Smart Contracts']
    },
    {
      id: 2,
      title: 'MetaVerse Gaming',
      description: 'Plateforme de jeu blockchain avec NFT et économie virtuelle intégrée.',
      category: 'Gaming',
      raised: 1800000,
      goal: 3000000,
      progress: 60,
      backers: 892,
      daysLeft: 22,
      roi: '15-25%',
      risk: 'Élevé',
      image: 'https://images.pexels.com/photos/9169180/pexels-photo-9169180.jpeg?auto=compress&cs=tinysrgb&w=500',
      featured: false,
      tags: ['Gaming', 'NFT', 'Metaverse']
    },
    {
      id: 3,
      title: 'Green Energy Chain',
      description: 'Blockchain dédiée aux énergies renouvelables avec token de récompense écologique.',
      category: 'Green Tech',
      raised: 3200000,
      goal: 4000000,
      progress: 80,
      backers: 2156,
      daysLeft: 8,
      roi: '10-15%',
      risk: 'Faible',
      image: 'https://images.unsplash.com/photo-1495908333425-29a1e0918c5f?auto=format&fit=crop&w=500&q=80',
      featured: true,
      tags: ['Green Tech', 'Sustainability', 'Rewards']
    },
    {
      id: 4,
      title: 'AI Trading Bot',
      description: 'Bot de trading automatisé avec intelligence artificielle pour maximiser les profits.',
      category: 'AI',
      raised: 950000,
      goal: 2000000,
      progress: 47,
      backers: 634,
      daysLeft: 30,
      roi: '20-30%',
      risk: 'Élevé',
      image: 'https://images.pexels.com/photos/7789849/pexels-photo-7789849.jpeg?auto=compress&cs=tinysrgb&w=500',
      featured: false,
      tags: ['AI', 'Trading', 'Automation']
    },
    {
      id: 5,
      title: 'Crypto Payment Gateway',
      description: 'Solution de paiement crypto pour e-commerce avec intégration simplifiée.',
      category: 'Payments',
      raised: 1500000,
      goal: 2500000,
      progress: 60,
      backers: 823,
      daysLeft: 18,
      roi: '8-12%',
      risk: 'Faible',
      image: 'https://images.unsplash.com/photo-1639815188546-c43c240ff4df?auto=format&fit=crop&w=500&q=80',
      featured: false,
      tags: ['Payments', 'E-commerce', 'Integration']
    },
    {
      id: 6,
      title: 'Decentralized Cloud',
      description: 'Réseau de stockage décentralisé avec récompenses pour les fournisseurs.',
      category: 'Infrastructure',
      raised: 2800000,
      goal: 4500000,
      progress: 62,
      backers: 1456,
      daysLeft: 12,
      roi: '14-20%',
      risk: 'Modéré',
      image: 'https://images.pexels.com/photos/9169180/pexels-photo-9169180.jpeg?auto=compress&cs=tinysrgb&w=500',
      featured: true,
      tags: ['Cloud', 'Storage', 'Decentralized']
    }
  ]

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case 'Faible': return 'text-green-500'
      case 'Modéré': return 'text-yellow-500'
      case 'Élevé': return 'text-red-500'
      default: return 'text-gray-500'
    }
  }

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('fr-FR', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount)
  }

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
    <section id="projects" className="py-20 bg-gradient-to-br from-background via-accent/5 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4">
            Projets
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Projets{' '}
            <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
              en cours
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Découvrez les projets crypto les plus prometteurs et investissez dans l'avenir 
            de la technologie blockchain.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="group"
            >
              <Card className="h-full transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1 border-border/50 hover:border-primary/20 overflow-hidden">
                <div className="relative">
                  <div 
                    className="h-48 bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: `url(${project.image})` }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                    <div className="absolute top-4 left-4 flex gap-2">
                      <Badge variant="secondary" className="bg-black/50 text-white">
                        {project.category}
                      </Badge>
                      {project.featured && (
                        <Badge className="bg-gradient-to-r from-primary to-blue-600">
                          <Star className="h-3 w-3 mr-1" />
                          Featured
                        </Badge>
                      )}
                    </div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex items-center justify-between text-white">
                        <span className="text-sm font-medium">
                          {project.progress}% financé
                        </span>
                        <span className="text-sm">
                          {formatCurrency(project.raised)} / {formatCurrency(project.goal)}
                        </span>
                      </div>
                      <Progress value={project.progress} className="mt-2 bg-white/20" />
                    </div>
                  </div>
                </div>

                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      {project.title}
                    </CardTitle>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Clock className="h-4 w-4 mr-1" />
                      {project.daysLeft}j
                    </div>
                  </div>
                  <CardDescription className="text-sm leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div className="flex flex-wrap gap-1">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="grid grid-cols-2 gap-4 py-3 border-t border-border/50">
                    <div className="flex items-center space-x-2">
                      <Users className="h-4 w-4 text-primary" />
                      <span className="text-sm">
                        {project.backers.toLocaleString()} investisseurs
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <TrendingUp className="h-4 w-4 text-green-500" />
                      <span className="text-sm font-medium">
                        ROI: {project.roi}
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Target className="h-4 w-4 text-blue-500" />
                      <span className="text-sm">
                        Objectif: {formatCurrency(project.goal)}
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Shield className={`h-4 w-4 ${getRiskColor(project.risk)}`} />
                      <span className={`text-sm ${getRiskColor(project.risk)}`}>
                        {project.risk}
                      </span>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button 
                      className="flex-1 bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90"
                      size="sm"
                    >
                      <Coins className="h-4 w-4 mr-2" />
                      Investir
                    </Button>
                    <Button variant="outline" size="sm">
                      Détails
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 text-center"
        >
          <div className="bg-gradient-to-r from-primary/10 via-blue-600/10 to-purple-600/10 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Prêt à investir ?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Rejoignez des milliers d'investisseurs qui font confiance à CryptoFund 
              pour leurs investissements crypto.
            </p>
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90"
            >
              <Zap className="h-5 w-5 mr-2" />
              Commencer maintenant
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { 
  Mail, 
  Bell, 
  TrendingUp, 
  Shield, 
  Zap,
  CheckCircle,
  ArrowRight
} from 'lucide-react'
import { useState } from 'react'

export function NewsletterSection() {
  const [email, setEmail] = useState('')
  const [isSubscribed, setIsSubscribed] = useState(false)

  const benefits = [
    {
      icon: Bell,
      title: 'Alertes projets',
      description: 'Soyez le premier informé des nouveaux projets'
    },
    {
      icon: TrendingUp,
      title: 'Analyses exclusives',
      description: 'Recevez nos analyses détaillées des tendances'
    },
    {
      icon: Shield,
      title: 'Conseils sécurité',
      description: 'Tips pour sécuriser vos investissements'
    },
    {
      icon: Zap,
      title: 'Opportunités flash',
      description: 'Accès prioritaire aux offres limitées'
    }
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setIsSubscribed(true)
      setTimeout(() => setIsSubscribed(false), 3000)
      setEmail('')
    }
  }

  return (
    <section id="newsletter" className="py-20 bg-gradient-to-br from-background via-primary/5 to-blue-600/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <Card className="overflow-hidden border-border/50 shadow-xl">
            <CardContent className="p-0">
              <div className="relative">
                {/* Background pattern */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-blue-600/10 to-purple-600/10" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]" />
                
                <div className="relative z-10 p-8 md:p-12">
                  <div className="text-center mb-8">
                    <Badge variant="outline" className="mb-4">
                      Newsletter
                    </Badge>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                      Restez informé des{' '}
                      <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                        opportunités
                      </span>
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                      Recevez les dernières actualités crypto, analyses de marché et opportunités 
                      d'investissement directement dans votre boîte mail.
                    </p>
                  </div>

                  {/* Benefits grid */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
                  >
                    {benefits.map((benefit, index) => (
                      <motion.div
                        key={benefit.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 * index }}
                        className="text-center group"
                      >
                        <div className="p-4 rounded-lg bg-background/50 backdrop-blur-sm border border-border/50 hover:border-primary/20 transition-all duration-300 hover:shadow-md">
                          <benefit.icon className="h-8 w-8 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform" />
                          <h3 className="font-semibold text-foreground mb-2">
                            {benefit.title}
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            {benefit.description}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>

                  {/* Newsletter form */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="max-w-md mx-auto"
                  >
                    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                      <div className="flex-1">
                        <Input
                          type="email"
                          placeholder="Votre adresse email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="h-12 bg-background/50 backdrop-blur-sm border-border/50 focus:border-primary/50 transition-colors"
                          required
                        />
                      </div>
                      <Button
                        type="submit"
                        size="lg"
                        className="h-12 bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90 transition-all duration-300"
                        disabled={isSubscribed}
                      >
                        {isSubscribed ? (
                          <>
                            <CheckCircle className="h-5 w-5 mr-2" />
                            Inscrit !
                          </>
                        ) : (
                          <>
                            <Mail className="h-5 w-5 mr-2" />
                            S'inscrire
                          </>
                        )}
                      </Button>
                    </form>
                    
                    <p className="text-xs text-muted-foreground mt-4 text-center">
                      En vous inscrivant, vous acceptez nos{' '}
                      <a href="#" className="text-primary hover:underline">
                        conditions d'utilisation
                      </a>{' '}
                      et notre{' '}
                      <a href="#" className="text-primary hover:underline">
                        politique de confidentialité
                      </a>
                      .
                    </p>
                  </motion.div>

                  {/* Social proof */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="mt-12 text-center"
                  >
                    <div className="flex items-center justify-center space-x-4 text-sm text-muted-foreground">
                      <div className="flex items-center space-x-1">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                        <span>5,000+ abonnés</span>
                      </div>
                      <div className="w-1 h-1 bg-muted-foreground rounded-full" />
                      <div className="flex items-center space-x-1">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>0 spam</span>
                      </div>
                      <div className="w-1 h-1 bg-muted-foreground rounded-full" />
                      <div className="flex items-center space-x-1">
                        <Shield className="h-4 w-4 text-blue-500" />
                        <span>Données sécurisées</span>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Additional CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <h3 className="text-xl md:text-2xl font-bold mb-4">
            Prêt à commencer ?
          </h3>
          <p className="text-muted-foreground mb-6">
            Rejoignez CryptoFund aujourd'hui et découvrez les meilleures opportunités d'investissement crypto.
          </p>
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90 transition-all duration-300"
          >
            Commencer maintenant
            <ArrowRight className="h-5 w-5 ml-2" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
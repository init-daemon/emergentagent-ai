'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'
import { 
  Coins, 
  Twitter, 
  Linkedin, 
  Github, 
  Mail, 
  MapPin, 
  Phone,
  ArrowRight,
  TrendingUp,
  Shield,
  Users,
  Globe
} from 'lucide-react'

export function FooterSection() {
  const footerSections = [
    {
      title: 'Produit',
      links: [
        { name: 'Fonctionnalités', href: '#features' },
        { name: 'Projets', href: '#projects' },
        { name: 'Tarifs', href: '#pricing' },
        { name: 'API', href: '#api' }
      ]
    },
    {
      title: 'Entreprise',
      links: [
        { name: 'À propos', href: '#about' },
        { name: 'Carrières', href: '#careers' },
        { name: 'Presse', href: '#press' },
        { name: 'Partenaires', href: '#partners' }
      ]
    },
    {
      title: 'Ressources',
      links: [
        { name: 'Documentation', href: '#docs' },
        { name: 'Blog', href: '#blog' },
        { name: 'Support', href: '#support' },
        { name: 'Communauté', href: '#community' }
      ]
    },
    {
      title: 'Légal',
      links: [
        { name: 'Confidentialité', href: '#privacy' },
        { name: 'Conditions', href: '#terms' },
        { name: 'Cookies', href: '#cookies' },
        { name: 'Sécurité', href: '#security' }
      ]
    }
  ]

  const socialLinks = [
    { name: 'Twitter', icon: Twitter, href: 'https://twitter.com/cryptofund' },
    { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/company/cryptofund' },
    { name: 'Github', icon: Github, href: 'https://github.com/cryptofund' },
    { name: 'Email', icon: Mail, href: 'mailto:contact@cryptofund.com' }
  ]

  const stats = [
    { icon: TrendingUp, value: '500M+', label: 'Investis' },
    { icon: Users, value: '10k+', label: 'Utilisateurs' },
    { icon: Shield, value: '99.9%', label: 'Uptime' },
    { icon: Globe, value: '50+', label: 'Pays' }
  ]

  return (
    <footer className="bg-background border-t border-border/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer content */}
        <div className="py-16">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Company info */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="flex items-center space-x-2 mb-6">
                  <div className="relative">
                    <Coins className="h-8 w-8 text-primary" />
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full animate-pulse" />
                  </div>
                  <span className="text-xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                    CryptoFund
                  </span>
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  La plateforme de crowdfunding crypto la plus avancée. Investissez dans l'avenir 
                  avec sécurité et transparence.
                </p>
                
                {/* Contact info */}
                <div className="space-y-3 mb-6">
                  <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                    <Mail className="h-4 w-4 text-primary" />
                    <span>contact@cryptofund.com</span>
                  </div>
                  <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                    <Phone className="h-4 w-4 text-primary" />
                    <span>+33 1 23 45 67 89</span>
                  </div>
                  <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4 text-primary" />
                    <span>Paris, France</span>
                  </div>
                </div>

                {/* Social links */}
                <div className="flex space-x-4">
                  {socialLinks.map((social) => (
                    <Button
                      key={social.name}
                      variant="outline"
                      size="icon"
                      className="hover:bg-primary/10 hover:border-primary/20 transition-colors"
                      asChild
                    >
                      <a href={social.href} target="_blank" rel="noopener noreferrer">
                        <social.icon className="h-4 w-4" />
                        <span className="sr-only">{social.name}</span>
                      </a>
                    </Button>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Footer links */}
            <div className="lg:col-span-3">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {footerSections.map((section, index) => (
                  <motion.div
                    key={section.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.1 * index }}
                  >
                    <h3 className="font-semibold text-foreground mb-4">
                      {section.title}
                    </h3>
                    <ul className="space-y-3">
                      {section.links.map((link) => (
                        <li key={link.name}>
                          <a
                            href={link.href}
                            className="text-muted-foreground hover:text-primary transition-colors text-sm"
                          >
                            {link.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Stats section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="py-12 border-t border-border/50"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="text-center"
              >
                <div className="flex items-center justify-center mb-2">
                  <stat.icon className="h-6 w-6 text-primary" />
                </div>
                <div className="text-2xl font-bold text-primary mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Newsletter signup */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="py-12 border-t border-border/50"
        >
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-xl font-bold mb-4">
              Restez informé des dernières actualités
            </h3>
            <p className="text-muted-foreground mb-6">
              Recevez notre newsletter hebdomadaire avec les meilleures opportunités d'investissement.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Votre email"
                className="flex-1"
              />
              <Button className="bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90">
                S'inscrire
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Bottom footer */}
        <Separator />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="py-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
              <span>© 2024 CryptoFund. Tous droits réservés.</span>
            </div>
            <div className="flex items-center space-x-6 text-sm">
              <a href="#privacy" className="text-muted-foreground hover:text-primary transition-colors">
                Politique de confidentialité
              </a>
              <a href="#terms" className="text-muted-foreground hover:text-primary transition-colors">
                Conditions d'utilisation
              </a>
              <a href="#cookies" className="text-muted-foreground hover:text-primary transition-colors">
                Cookies
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
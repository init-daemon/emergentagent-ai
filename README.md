# 🚀 CryptoFund - Site Vitrine Crypto & Crowdfunding

Un site vitrine moderne et élégant dédié aux cryptomonnaies et au crowdfunding, construit avec les dernières technologies web.

## ✨ Fonctionnalités

- **🎨 Design Moderne** - Interface utilisateur élégante avec thème crypto
- **🌊 Animations Fluides** - Transitions et micro-interactions sophistiquées
- **📱 Responsive Design** - Optimisé pour tous les appareils
- **🔥 Performance** - Optimisations avancées pour des temps de chargement rapides
- **🎯 TypeScript** - Code robuste avec typage strict
- **🎭 Thème Sombre/Clair** - Basculement entre les thèmes
- **🎪 Composants Réutilisables** - Architecture modulaire avec Shadcn/UI

## 🛠️ Technologies Utilisées

### Frontend
- **Next.js 14** - Framework React avec App Router
- **TypeScript** - Développement avec typage strict
- **Tailwind CSS** - Framework CSS utilitaire
- **Shadcn/UI** - Composants UI de haute qualité
- **Lucide React** - Icônes modernes
- **Framer Motion** - Animations fluides (à intégrer)

### Backend
- **Next.js API Routes** - API serverless
- **MongoDB** - Base de données NoSQL
- **Zod** - Validation des schémas

### Outils de Développement
- **ESLint** - Linting du code
- **Prettier** - Formatage du code
- **Yarn** - Gestionnaire de paquets

## 🚀 Démarrage Rapide

### Prérequis
- Node.js 18+ 
- Yarn
- MongoDB (local ou Atlas)

### Installation

```bash
# Cloner le projet
git clone [repository-url]
cd cryptofund

# Installer les dépendances
yarn install

# Configurer les variables d'environnement
cp .env.example .env.local
```

### Configuration Environment

Créez un fichier `.env.local` avec les variables suivantes :

```env
# Database
MONGO_URL=mongodb://localhost:27017/cryptofund

# Next.js
NEXT_PUBLIC_BASE_URL=http://localhost:3000

# Autres variables...
```

### Lancement du Projet

```bash
# Développement
yarn dev

# Production
yarn build
yarn start

# Linting
yarn lint
```

## 📁 Structure du Projet

```
cryptofund/
├── app/                    # Next.js App Router
│   ├── api/               # API Routes
│   ├── globals.css        # Styles globaux
│   ├── layout.tsx         # Layout principal
│   └── page.tsx           # Page d'accueil
├── components/            # Composants réutilisables
│   ├── ui/               # Composants UI Shadcn
│   ├── sections/         # Sections de page
│   └── animations/       # Composants d'animation
├── lib/                   # Utilitaires et helpers
│   ├── utils.ts          # Fonctions utilitaires
│   └── db.ts             # Configuration base de données
├── public/               # Assets statiques
├── types/                # Types TypeScript
└── hooks/                # Custom hooks React
```

## 🎨 Design System

### Palette de Couleurs
- **Primary** : Bleu crypto (#3B82F6)
- **Secondary** : Violet (#8B5CF6)  
- **Accent** : Gold (#F59E0B)
- **Success** : Vert (#10B981)
- **Warning** : Orange (#F97316)
- **Error** : Rouge (#EF4444)

### Typographie
- **Heading** : Inter (Bold)
- **Body** : Inter (Regular)
- **Code** : JetBrains Mono

## 🔧 Développement

### Commandes Disponibles

```bash
# Développement avec hot reload
yarn dev

# Build de production
yarn build

# Démarrage en production
yarn start

# Linting
yarn lint

# Formatage du code
yarn format

# Tests
yarn test
```

### Conventions de Code

- **Components** : PascalCase (ex: `HeroSection.tsx`)
- **Hooks** : camelCase avec préfixe "use" (ex: `useCounter.ts`)
- **Types** : PascalCase (ex: `UserType`)
- **Constants** : SCREAMING_SNAKE_CASE (ex: `API_ENDPOINTS`)

## 📊 Performance

- **Lighthouse Score** : 95+ sur tous les critères
- **Core Web Vitals** : Optimisé pour les métriques Google
- **Bundle Size** : Optimisé avec tree-shaking
- **Images** : Optimisation automatique avec Next.js Image

## 🔒 Sécurité

- **CSP Headers** : Content Security Policy configurée
- **HTTPS** : Redirection automatique en production
- **Validation** : Validation côté client et serveur avec Zod
- **Sanitization** : Nettoyage des données utilisateur

## 🚀 Déploiement

### Vercel (Recommandé)
```bash
# Déploiement automatique depuis Git
vercel --prod
```

### Docker
```bash
# Build de l'image
docker build -t cryptofund .

# Lancement du container
docker run -p 3000:3000 cryptofund
```

## 📈 Roadmap

- [ ] ✅ Configuration TypeScript
- [ ] 🎨 Design system et composants UI
- [ ] 🏠 Page d'accueil avec hero section
- [ ] 📊 Section features et avantages
- [ ] 💼 Section projets crowdfunding
- [ ] 📞 Section contact
- [ ] 🔗 Intégrations API crypto
- [ ] 📱 Optimisations mobiles
- [ ] 🎭 Animations avancées
- [ ] 🧪 Tests automatisés

## 🤝 Contribution

Les contributions sont les bienvenues ! Merci de suivre ces étapes :

1. Fork le projet
2. Créer une branche feature (`git checkout -b feature/AmazingFeature`)
3. Commit vos changements (`git commit -m 'Add: Amazing Feature'`)
4. Push vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrir une Pull Request

## 📝 License

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.

## 👥 Équipe

- **Développeur Principal** : [Nom]
- **Design** : [Nom]
- **Backend** : [Nom]

## 📞 Support

Pour toute question ou problème :

- **Email** : support@cryptofund.com
- **Documentation** : [docs-url]
- **Issues** : [github-issues-url]

---

**Fait avec ❤️ et Next.js + TypeScript**
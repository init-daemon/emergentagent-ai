import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'CryptoFund - L\'avenir du Crowdfunding Crypto',
  description: 'Plateforme moderne de crowdfunding crypto avec des projets innovants et des opportunités d\'investissement exceptionnelles.',
  keywords: 'crypto, crowdfunding, blockchain, investissement, DeFi, cryptomonnaie',
  authors: [{ name: 'CryptoFund Team' }],
  openGraph: {
    title: 'CryptoFund - L\'avenir du Crowdfunding Crypto',
    description: 'Plateforme moderne de crowdfunding crypto avec des projets innovants et des opportunités d\'investissement exceptionnelles.',
    type: 'website',
    url: 'https://cryptofund.com',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'CryptoFund - Plateforme de Crowdfunding Crypto'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CryptoFund - L\'avenir du Crowdfunding Crypto',
    description: 'Plateforme moderne de crowdfunding crypto avec des projets innovants et des opportunités d\'investissement exceptionnelles.',
    images: ['/og-image.jpg']
  },
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
  alternates: {
    canonical: 'https://cryptofund.com'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={true}
          disableTransitionOnChange={false}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
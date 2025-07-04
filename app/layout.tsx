import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '../components/ThemeProvider'
import { Header } from '../components/Header'
import { GitTimestamps } from '../components/GitTimestamps'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Doublement Aliéné - Plateforme Théâtrale Collaborative',
  description: 'Prototype de performance théâtrale dans un espace public avec interface web collaborative',
  keywords: 'théâtre, performance, art, Bruxelles, CIFAS, collaboration',
  authors: [{ name: 'Chris-Armel Iradukunda' }],
  openGraph: {
    title: 'Doublement Aliéné',
    description: 'Plateforme théâtrale collaborative',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className={inter.className}>
        <ThemeProvider>
          <div className="min-h-screen bg-theater-background flex flex-col">
            <Header />
            <main className="flex-1">
              {children}
            </main>
            <footer className="theater-container py-6 mt-12 border-t border-theater-muted/20">
              <GitTimestamps />
            </footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}

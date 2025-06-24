import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Doublement Aliéné - Performance Théâtrale',
  description: 'Prototype de performance théâtrale dans un espace public par daqhris',
  keywords: ['théâtre', 'performance', 'art', 'Bruxelles', 'CIFAS', 'Constellations'],
  authors: [{ name: 'Chris A. Iradukunda (daqhris)', url: 'https://daqhris.com' }],
  openGraph: {
    title: 'Doublement Aliéné - Performance Théâtrale',
    description: 'Prototype de performance théâtrale dans un espace public',
    url: 'https://daqhris.com/DoublementAliene',
    siteName: 'DoublementAliene',
    locale: 'fr_FR',
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
      <body className={`${inter.className} antialiased bg-white dark:bg-theater-primary text-gray-900 dark:text-theater-secondary transition-colors duration-300`}>
        <div className="min-h-screen flex flex-col">
          {children}
        </div>
      </body>
    </html>
  )
}

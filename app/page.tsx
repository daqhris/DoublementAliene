import React from 'react'
import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Doublement Aliéné - Accueil',
  description: 'Plateforme théâtrale collaborative - Prototype de performance dans un espace public',
}

export default function HomePage() {
  return (
    <div className="theater-container py-16 md:py-24">
      <section className="text-center mb-16">
        <h1 className="theater-heading mb-6 text-balance">
          Pièce de Théâtre: «Doublement Aliéné»
        </h1>
        <p className="theater-text mb-8 max-w-3xl mx-auto text-balance">
          Plateforme théâtrale collaborative explorant l&apos;aliénation contemporaine à travers la performance expérimentale et les technologies décentralisées.
        </p>
        <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4 mb-8 max-w-2xl mx-auto">
          <p className="text-yellow-800 dark:text-yellow-200 font-medium">
            <strong>Interface Web:</strong> Plateforme collaborative en développement actif
          </p>
        </div>
      </section>

      <section className="mb-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Link href="/performance" className="theater-card hover:shadow-lg transition-shadow">
            <div className="text-center">
              <div className="text-4xl mb-4">🎭</div>
              <h3 className="text-xl font-semibold mb-2 text-theater-primary dark:text-theater-secondary">
                Performance
              </h3>
              <p className="theater-text">
                Découvrez les représentations et enregistrements de la pièce
              </p>
            </div>
          </Link>

          <Link href="/gallery" className="theater-card hover:shadow-lg transition-shadow">
            <div className="text-center">
              <div className="text-4xl mb-4">📸</div>
              <h3 className="text-xl font-semibold mb-2 text-theater-primary dark:text-theater-secondary">
                Galerie
              </h3>
              <p className="theater-text">
                Explorez les contenus visuels et créations artistiques
              </p>
            </div>
          </Link>

          <Link href="/research" className="theater-card hover:shadow-lg transition-shadow">
            <div className="text-center">
              <div className="text-4xl mb-4">🔬</div>
              <h3 className="text-xl font-semibold mb-2 text-theater-primary dark:text-theater-secondary">
                Recherche
              </h3>
              <p className="theater-text">
                Laboratoire de recherche artistique et méthodologies IA
              </p>
            </div>
          </Link>

          <Link href="/timeline" className="theater-card hover:shadow-lg transition-shadow">
            <div className="text-center">
              <div className="text-4xl mb-4">📅</div>
              <h3 className="text-xl font-semibold mb-2 text-theater-primary dark:text-theater-secondary">
                Chronologie
              </h3>
              <p className="theater-text">
                Suivez l&apos;évolution du projet depuis sa conception
              </p>
            </div>
          </Link>

          <Link href="/about" className="theater-card hover:shadow-lg transition-shadow">
            <div className="text-center">
              <div className="text-4xl mb-4">ℹ️</div>
              <h3 className="text-xl font-semibold mb-2 text-theater-primary dark:text-theater-secondary">
                À Propos
              </h3>
              <p className="theater-text">
                Informations sur le projet, CIFAS et philosophie collaborative
              </p>
            </div>
          </Link>
        </div>
      </section>
    </div>
  )
}

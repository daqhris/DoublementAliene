import React from 'react'
import { Metadata } from 'next'
import Link from 'next/link'
import NotificationBanner from './components/NotificationBanner'

export const metadata: Metadata = {
  title: 'Doublement Aliéné - Accueil',
  description: 'Plateforme théâtrale collaborative - Prototype de performance dans un espace public',
}

export default function HomePage() {
  return (
    <div className="theater-container py-12">
      <NotificationBanner />
      <section className="theater-section">
        <div className="theater-section-header">
          <h1 className="theater-heading-lg">
            Pièce de Théâtre: «Doublement Aliéné»
          </h1>
          <p className="theater-subtitle">
            Plateforme théâtrale collaborative explorant l&apos;aliénation contemporaine à travers la performance expérimentale et les technologies décentralisées.
          </p>
        </div>
      </section>

      <section className="theater-section">
        <h2 className="theater-heading-md">Sections</h2>
        <div className="theater-nav-list">
          <div className="theater-nav-item">
            <div>
              <div className="theater-nav-title">
                <Link href="/performance" className="theater-link">Performance</Link>
              </div>
              <div className="theater-nav-description">
                Découvrez les représentations et enregistrements de la pièce
              </div>
            </div>
          </div>
          <div className="theater-nav-item">
            <div>
              <div className="theater-nav-title">
                <Link href="/research" className="theater-link">Recherche</Link>
              </div>
              <div className="theater-nav-description">
                Laboratoire de recherche artistique et méthodologies IA
              </div>
            </div>
          </div>
          <div className="theater-nav-item">
            <div>
              <div className="theater-nav-title">
                <Link href="/timeline" className="theater-link">Chronologie</Link>
              </div>
              <div className="theater-nav-description">
                Suivez l&apos;évolution du projet depuis sa conception
              </div>
            </div>
          </div>
          <div className="theater-nav-item">
            <div>
              <div className="theater-nav-title">
                <Link href="/about" className="theater-link">À Propos</Link>
              </div>
              <div className="theater-nav-description">
                Informations sur le projet, CIFAS et philosophie collaborative
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

import React from 'react'
import { Metadata } from 'next'
import Link from 'next/link'
import NotificationBanner from './components/NotificationBanner'

export const metadata: Metadata = {
  title: 'Doublement Aliéné - Accueil',
  description: 'Plateforme numérique et open-source dédiée à un spectacle théâtral dans un espace public',
}

export default function HomePage() {
  return (
    <div className="theater-container py-12">
      <NotificationBanner />
      <section className="theater-section">
        <div className="theater-section-header">
          <h1 className="theater-heading-lg">
            Spectacle: «Doublement Aliéné»
          </h1>
          <p className="theater-subtitle">
            Plateforme numérique érigée par un binôme pour explorer des thématiques abordant l&apos;aliénation et l&apos;IA à travers une performance théâtrale jouée par des personnes physiques.
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
                La documentation en accès public du protoype et autres souvenirs
              </div>
            </div>
          </div>
          <div className="theater-nav-item">
            <div>
              <div className="theater-nav-title">
                <Link href="/research" className="theater-link">Recherche</Link>
              </div>
              <div className="theater-nav-description">
                Laboratoire numérique de recherche artistique, scénique et méthodologique
              </div>
            </div>
          </div>
          <div className="theater-nav-item">
            <div>
              <div className="theater-nav-title">
                <Link href="/timeline" className="theater-link">Chronologie</Link>
              </div>
              <div className="theater-nav-description">
                Les étapes qui ont façonné l&apos;évolution du projet de sa conception à maintenant
              </div>
            </div>
          </div>
          <div className="theater-nav-item">
            <div>
              <div className="theater-nav-title">
                <Link href="/about" className="theater-link">À Propos</Link>
              </div>
              <div className="theater-nav-description">
                Informations sur ce projet, ses lignes directrices et la philosophie de l&apos;artiste
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

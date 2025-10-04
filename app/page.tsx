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
            Plateforme numérique érigée par un binôme pour une performance théâtrale abordant l&apos;aliénation sociétale des êtres vivant ou travaillant à l&apos;ombre au sein d&apos;usines de données. 
            En dépit d&apos;être privés de droits fondamentaux, un de ces êtres amoindris assiste des cyclistes de tout genre pendant une course contre-la-montre retransmise en direct sur un grand écran.  
            Ces athlètes déploient à fond leur intelligence, intuition et énergie en se relayant sur la selle et en se transmettant le témoin, de fil en aiguille, comme des maillons d&apos;une chaîne de vélo. 
            Les cyclistes et leur assistant visent une victoire collective au bout de laquelle des données sont collectées sous les projecteurs afin d&apos;entendre et voir les doublepensées au-délà des boîtes noires. 
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
                La documentation en accès public du premier protoype de performance
              </div>
            </div>
          </div>
          <div className="theater-nav-item">
            <div>
              <div className="theater-nav-title">
                <Link href="/research" className="theater-link">Recherche</Link>
              </div>
              <div className="theater-nav-description">
                Le laboratoire de recherche artistique, scénique et méthodologique
              </div>
            </div>
          </div>
          <div className="theater-nav-item">
            <div>
              <div className="theater-nav-title">
                <Link href="/timeline" className="theater-link">Chronologie</Link>
              </div>
              <div className="theater-nav-description">
                Les étapes de l&apos;élaboration du spectacle: d&apos;Octobre 2024 à maintenant
              </div>
            </div>
          </div>
          <div className="theater-nav-item">
            <div>
              <div className="theater-nav-title">
                <Link href="/about" className="theater-link">À Propos</Link>
              </div>
              <div className="theater-nav-description">
                Informations sur les lignes directrices et l&apos;initiateur du projet
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

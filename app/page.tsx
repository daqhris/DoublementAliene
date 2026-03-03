import React from 'react'
import { Metadata } from 'next'
import Link from 'next/link'
import NotificationBanner from './components/NotificationBanner'

export const metadata: Metadata = {
  title: 'Accueil - Doublement Aliéné | daqhris.com',
  description: 'Application web open-source dédiée à un spectacle théâtral dans un espace public',
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
            Ici se trouve une application open-source co-créée par un binôme pour un spectacle théâtral explorant l&apos;étrangeté au carré d&apos;un être-essaim amoindri par l&apos;effacement du soin maternel. 
            Lors d&apos;une interview fictive, cette entité composite exprime dix réactions suite à l&apos;annonce d&apos;un prix de paternité: huit à voix haute et deux non-dits. <br/><br/>
            Sur scène, un assistant intelligent accompagne des athlètes pendant une course contre-la-montre à vélo retransmise en direct sur grand écran. 
            Durant la course, des cyclistes se transmettent un costume de relais, maillons d&apos;une même chaîne. 
            Leur victoire collective ouvrira la boîte noire érigée sur scène, au-delà de laquelle auront été diffusées les doubles pensées de l&apos;être-essaim.
          </p>
        </div>
      </section>

      <section className="theater-section">
        <h2 className="theater-heading-md">
          Activité récente
        </h2>
          <div className="space-y-4">
            <div className="theater-card-modern">
            <div className="border-l-4 border-solarized-base2 pl-6 py-3 bg-theater-muted/5">
              <h3 className="theater-nav-title mb-2">Exposition <em>Exhibition</em></h3>
              <p className="theater-nav-description">
                <strong>Prototypes & Recherche pour «Doublement Aliéné» (FR)</strong><br></br>
                <strong><em>Prototypes & Research for &quot;Twofold Alienated&quot; (ENG)</em></strong>
              </p>
              <p className="theater-nav-description">
                📍<span>&nbsp;&nbsp;</span>Rue de l&apos;Hectolitre 3<br></br>
                🗺️<span>&nbsp;&nbsp;</span>Bruxelles, Belgique 
                <br></br>
                📅<span>&nbsp;&nbsp;</span>14-15 NOV 2025 <br></br>  
                ⏰<span>&nbsp;&nbsp;</span>18:00-22:00
              </p>
            <Link 
              href="http://hectolitre.space/echange_251114.html"
              className="theater-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              hectolitre.space →
            </Link>
          </div>
          </div>
        </div>
      </section>

      <section className="theater-section">
        <h2 className="theater-heading-md">Sections du site web</h2>
        <div className="theater-nav-list">
          <div className="theater-nav-item">
            <div>
              <div className="theater-nav-title">
                <Link href="/performance" className="theater-link">Performance</Link>
              </div>
              <div className="theater-nav-description">
                La documentation publique du premier prototype de spectacle
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
                Informations sur les lignes directrices et l&apos;initiateur du projet artistique
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

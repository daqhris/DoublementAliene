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
            Performance: «Doublement Aliéné»
          </h1>
          <p className="theater-subtitle">
            Ici se trouve une application open-source co-créée par un binôme pour un spectacle théâtral racontant l&apos;aliénation sociétale des êtres travaillant à l&apos;ombre au sein d&apos;usines de données IA. 
            En dépit d&apos;être privé de droits fondamentaux, un des êtres amoindris assiste des cyclistes de tout genre pendant une course contre-la-montre retransmise en direct sur grand écran.<br/><br/>  
            Durant le spectacle, ces athlètes déploient à fond leur intelligence, se relaient sur une selle et se transmettent un témoin, de fil en aiguille, comme des maillons d&apos;une chaîne de vélo. 
            Les cyclistes visent une victoire d&apos;équipe au bout de laquelle des données sont collectées afin de diffuser les double-pensées de leur assistant au-délà d&apos;une boîte noire érigée sur scène. 
          </p>
        </div>
      </section>

      
      <section className="theater-section">
        <h2 className="theater-heading-md">
          Invitation
        </h2>
          <div className="space-y-4">
            <div className="theater-card-modern">
            <div className="border-l-4 border-solarized-base2 pl-6 py-3 bg-theater-muted/5">
              <h3 className="theater-nav-title mb-2">EXPOSITION</h3>
              <p className="theater-nav-description">
                Performative Installation: Prototypes & Research for &quot;Twofold Alienated&quot; (ENG)<br></br>
                Installation Performative: Prototypes & Recherche pour «Doublement Aliéné» (FR)
              </p>
              <p className="theater-nav-description">
                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 2 21 20" fill="none" aria-hidden="true">
                    <path d="M16.5385 5.23077H14.6923V4.61538C14.6923 4.45217 14.6275 4.29565 14.5121 4.18024C14.3967 4.06483 14.2401 4 14.0769 4C13.9137 4 13.7572 4.06483 13.6418 4.18024C13.5264 4.29565 13.4615 4.45217 13.4615 4.61538V5.23077H7.30769V4.61538C7.30769 4.45217 7.24286 4.29565 7.12745 4.18024C7.01204 4.06483 6.85552 4 6.69231 4C6.5291 4 6.37257 4.06483 6.25717 4.18024C6.14176 4.29565 6.07692 4.45217 6.07692 4.61538V5.23077H4.23077C3.90435 5.23077 3.5913 5.36044 3.36048 5.59125C3.12967 5.82207 3 6.13512 3 6.46154V18.7692C3 19.0957 3.12967 19.4087 3.36048 19.6395C3.5913 19.8703 3.90435 20 4.23077 20H16.5385C16.8649 20 17.1779 19.8703 17.4087 19.6395C17.6396 19.4087 17.7692 19.0957 17.7692 18.7692V6.46154C17.7692 6.13512 17.6396 5.82207 17.4087 5.59125C17.1779 5.36044 16.8649 5.23077 16.5385 5.23077ZM16.5385 8.92308H4.23077V6.46154H6.07692V7.07692C6.07692 7.24013 6.14176 7.39666 6.25717 7.51207C6.37257 7.62747 6.5291 7.69231 6.69231 7.69231C6.85552 7.69231 7.01204 7.62747 7.12745 7.51207C7.24286 7.39666 7.30769 7.24013 7.30769 7.07692V6.46154H13.4615V7.07692C13.4615 7.24013 13.5264 7.39666 13.6418 7.51207C13.7572 7.62747 13.9137 7.69231 14.0769 7.69231C14.2401 7.69231 14.3967 7.62747 14.5121 7.51207C14.6275 7.39666 14.6923 7.24013 14.6923 7.07692V6.46154H16.5385V8.92308Z"></path>
                </svg> Rue de l&apos;Hectolitre 3, Bruxelles, Belgium
                <br></br>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <path d="M10 1.25C8.17727 1.25207 6.42979 1.97706 5.14092 3.26592C3.85206 4.55479 3.12707 6.30227 3.125 8.125C3.125 14.0078 9.375 18.4508 9.64141 18.6367C9.74649 18.7103 9.87169 18.7498 10 18.7498C10.1283 18.7498 10.2535 18.7103 10.3586 18.6367C10.625 18.4508 16.875 14.0078 16.875 8.125C16.8729 6.30227 16.1479 4.55479 14.8591 3.26592C13.5702 1.97706 11.8227 1.25207 10 1.25ZM10 5.625C10.4945 5.625 10.9778 5.77162 11.3889 6.04633C11.8 6.32103 12.1205 6.71148 12.3097 7.16829C12.4989 7.62511 12.5484 8.12777 12.452 8.61273C12.3555 9.09768 12.1174 9.54314 11.7678 9.89277C11.4181 10.2424 10.9727 10.4805 10.4877 10.577C10.0028 10.6734 9.50011 10.6239 9.04329 10.4347C8.58648 10.2455 8.19603 9.92505 7.92133 9.51393C7.64662 9.1028 7.5 8.61945 7.5 8.125C7.5 7.46196 7.76339 6.82607 8.23223 6.35723C8.70107 5.88839 9.33696 5.625 10 5.625Z"></path>
                </svg> 14-15 NOV 2025, 6-10 PM
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
        <h2 className="theater-heading-md">Sections</h2>
        <div className="theater-nav-list">
          <div className="theater-nav-item">
            <div>
              <div className="theater-nav-title">
                <Link href="/performance" className="theater-link">Performance</Link>
              </div>
              <div className="theater-nav-description">
                La documentation publique du premier protoype de performance
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
                <Link href="/about" className="theater-link">À propos</Link>
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

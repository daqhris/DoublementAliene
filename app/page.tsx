import React from 'react'
import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Doublement Aliéné - Accueil',
  description: 'Prototype de performance théâtrale dans un espace public - Page d\'accueil',
}

export default function HomePage() {
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="theater-container py-16 md:py-24">
        <div className="text-center">
          <h1 className="theater-heading mb-6 text-balance">
            Pièce de Théâtre: «Doublement Aliéné»
          </h1>
          <p className="theater-text mb-8 max-w-3xl mx-auto text-balance">
            Prototype de performance théâtrale dans un espace public
          </p>
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4 mb-8 max-w-2xl mx-auto">
            <p className="text-yellow-800 dark:text-yellow-200 font-medium">
              <strong>NB:</strong> Travaux de construction d'une interface web en cours (codage informatique)
            </p>
          </div>
        </div>
      </section>

      {/* Project Description */}
      <section className="theater-container py-16">
        <div className="max-w-4xl mx-auto">
          <div className="theater-card">
            <p className="theater-text mb-6">
              Projet initié à <strong>Bruxelles</strong> par un artiste ayant participé au programme de co-apprentissage{' '}
              <Link 
                href="https://cifas.be/fr/event/2025/constellations-2025/constellations-2025.html"
                className="text-theater-accent hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Constellations
              </Link>{' '}
              du Centre International de Formation en Arts du Spectacle ({' '}
              <Link 
                href="https://cifas.be/fr/pages/a-propos.html"
                className="text-theater-accent hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                CIFAS
              </Link>
              ) de <strong>Janvier à Avril</strong> en <strong>2025</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="theater-container py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-theater-primary dark:text-theater-secondary">
            Historique et chronologie:
          </h2>
          
          <div className="space-y-6">
            <TimelineItem
              date="24 Juin 2025"
              description="Publication de fichiers documentant la préparation du prototype performé le 17 Mars (situés dans le dossier Constellations2025)."
            />
            
            <TimelineItem
              date="22 Juin 2025"
              description="Naissance du sous-projet ResearchLab qui regroupe des réponses variées des IA à des questions de recherche artistique."
            />
            
            <TimelineItem
              date="16 Avril 2025"
              description="Clôture festive des rencontres mensuelles d'artistes dans le cadre des Constellations 2025 à Molenbeek, Bruxelles."
            />
            
            <TimelineItem
              date="4 Avril 2025"
              description="Début des travaux visant à construire ce dépôt de code avec du logiciel libre sur une platforme numérique publique."
            />
            
            <TimelineItem
              date="17 Mars 2025"
              description="Première interprétation théâtrale de l'œuvre par des comédien.ne.s, sous forme de deux spectacles expérimentaux en Français, sur scène dans le Musée bruxellois de l'industrie et du travail (La Fonderie)."
            />
          </div>
        </div>
      </section>
    </main>
  )
}

function TimelineItem({ date, description }: { date: string; description: string }) {
  return (
    <div className="theater-card">
      <div className="flex flex-col md:flex-row md:items-start gap-4">
        <div className="flex-shrink-0">
          <span className="inline-block px-3 py-1 text-sm font-semibold text-theater-accent bg-theater-accent/10 rounded-full">
            {date}
          </span>
        </div>
        <p className="theater-text flex-1">
          {description}
        </p>
      </div>
    </div>
  )
}

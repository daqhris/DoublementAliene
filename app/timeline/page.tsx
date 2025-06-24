import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Chronologie - Doublement Aliéné',
  description: 'Historique et chronologie détaillée du projet théâtral',
};

function TimelineItem({ date, description, details }: { 
  date: string; 
  description: string; 
  details?: string;
}) {
  return (
    <div className="theater-card">
      <div className="flex flex-col md:flex-row md:items-start gap-4">
        <div className="flex-shrink-0">
          <span className="inline-block px-3 py-1 text-sm font-semibold text-theater-accent bg-theater-accent/10 rounded-full">
            {date}
          </span>
        </div>
        <div className="flex-1">
          <p className="theater-text mb-2">
            {description}
          </p>
          {details && (
            <p className="text-sm text-theater-muted">
              {details}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default function TimelinePage() {
  return (
    <div className="theater-container py-16 md:py-24">
      <section className="mb-16">
        <h1 className="theater-heading mb-6">Historique et Chronologie</h1>
        <p className="theater-text mb-8 max-w-3xl mx-auto">
          Suivez l&apos;évolution du projet &ldquo;Doublement Aliéné&rdquo; depuis sa conception jusqu&apos;à sa réalisation.
        </p>
      </section>
      
      <section className="mb-16">
        <div className="space-y-6">
          <TimelineItem
            date="24 Juin 2025"
            description="Publication de fichiers documentant la préparation du prototype performé le 17 Mars (situés dans le dossier Constellations2025)."
            details="Mise en ligne des documents de travail et matériaux de préparation"
          />
          
          <TimelineItem
            date="22 Juin 2025"
            description="Naissance du sous-projet ResearchLab qui regroupe des réponses variées des IA à des questions de recherche artistique."
            details="Lancement de la méthodologie de recherche assistée par intelligence artificielle"
          />
          
          <TimelineItem
            date="16 Avril 2025"
            description="Clôture festive des rencontres mensuelles d'artistes dans le cadre des Constellations 2025 à Molenbeek, Bruxelles."
            details="Fin du programme de co-apprentissage CIFAS"
          />
          
          <TimelineItem
            date="4 Avril 2025"
            description="Début des travaux visant à construire ce dépôt de code avec du logiciel libre sur une platforme numérique publique."
            details="Initialisation du projet open-source sur GitHub"
          />
          
          <TimelineItem
            date="17 Mars 2025"
            description="Première interprétation théâtrale de l'œuvre par des comédien.ne.s, sous forme de deux spectacles expérimentaux en Français, sur scène dans le Musée bruxellois de l'industrie et du travail (La Fonderie)."
            details="Performance inaugurale avec public au musée La Fonderie"
          />
          
          <TimelineItem
            date="Janvier - Avril 2025"
            description="Participation au programme de co-apprentissage Constellations du CIFAS à Bruxelles."
            details="Formation et développement artistique au Centre International de Formation en Arts du Spectacle"
          />
        </div>
      </section>
    </div>
  );
}

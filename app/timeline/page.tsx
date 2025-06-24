import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Chronologie - Doublement Aliéné',
  description: 'Chronologie du développement du projet théâtral',
};

interface TimelineItemProps {
  date: string;
  title: string;
  description: string;
  details?: string;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ date, title, description, details }) => (
  <div className="mb-8">
    <div className="mb-2">
      <span className="text-sm font-medium text-theater-muted bg-theater-muted/10 px-2 py-1 rounded">
        {date}
      </span>
    </div>
    <h3 className="text-lg font-medium mb-2 text-theater-text">
      {title}
    </h3>
    <p className="text-theater-muted mb-3">
      {description}
    </p>
    {details && (
      <div className="bg-theater-muted/10 border-l-4 border-theater-muted/30 pl-4 py-2">
        <p className="text-sm text-theater-muted">
          {details}
        </p>
      </div>
    )}
  </div>
);

export default function TimelinePage() {
  return (
    <div className="theater-container py-12">
      <h1 className="text-3xl font-semibold mb-4 text-theater-text">Chronologie du Projet</h1>
      <p className="text-lg text-theater-muted mb-8 max-w-2xl">
        Suivez l&apos;évolution du projet &ldquo;Doublement Aliéné&rdquo; depuis sa conception jusqu&apos;à sa réalisation.
      </p>
      
      <section className="mb-8">
        <TimelineItem
          date="Janvier 2025"
          title="Lancement du ResearchLab"
          description="Début des recherches sur l'aliénation contemporaine et exploration des méthodologies IA pour le théâtre."
          details="Création du laboratoire de recherche artistique avec focus sur l'intégration d'intelligence artificielle dans le processus créatif théâtral."
        />
        
        <TimelineItem
          date="17 Mars 2025"
          title="Première Représentation Théâtrale"
          description="Performance expérimentale à La Fonderie - Musée Bruxellois de l'Industrie et du Travail."
          details="Deux spectacles expérimentaux en Français, interprétés par des comédien.ne.s dans un cadre muséal industriel, explorant les thèmes d'aliénation contemporaine."
        />
        
        <TimelineItem
          date="Développement Continu"
          title="Plateforme Collaborative"
          description="Développement de l'interface web collaborative et intégration des technologies décentralisées."
          details="Construction d'une plateforme open-source permettant la co-propriété transparente des contenus et le partage équitable des revenus entre participants."
        />
      </section>
    </div>
  );
}

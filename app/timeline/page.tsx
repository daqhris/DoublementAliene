import React from 'react';
import { Metadata } from 'next';
import NotificationBanner from '../components/NotificationBanner';

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
      <div className="bg-theater-muted/10 border-l-4 border-theater-muted/30 pl-6 py-2">
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
      <NotificationBanner />
      <section className="theater-section">
        <div className="theater-section-header">
          <h1 className="theater-heading-lg">
            Chronologie du Projet
          </h1>
          <p className="theater-subtitle">
            Suivez l&apos;évolution du projet &ldquo;Doublement Aliéné&rdquo; depuis sa conception jusqu&apos;à sa réalisation.
          </p>
        </div>

        <div className="space-y-6">
          <div className="theater-card-modern">
            <h3 className="theater-heading-md mb-2">Janvier 2025</h3>
            <h4 className="theater-nav-title mb-3">Lancement du ResearchLab</h4>
            <p className="text-theater-text mb-4 leading-relaxed">
              Début des recherches sur l&apos;aliénation contemporaine et exploration des méthodologies IA pour le théâtre.
            </p>
            <p className="theater-nav-description">
              Création du laboratoire de recherche artistique avec focus sur l&apos;intégration d&apos;intelligence artificielle dans le processus créatif théâtral.
            </p>
          </div>

          <div className="theater-card-modern">
            <h3 className="theater-heading-md mb-2">17 Mars 2025</h3>
            <h4 className="theater-nav-title mb-3">Première Représentation Théâtrale</h4>
            <p className="text-theater-text mb-4 leading-relaxed">
              Performance expérimentale à La Fonderie - Musée Bruxellois de l&apos;Industrie et du Travail.
            </p>
            <p className="theater-nav-description">
              Deux spectacles expérimentaux en Français, interprétés par des comédien.ne.s dans un cadre muséal industriel, explorant les thèmes d&apos;aliénation contemporaine.
            </p>
          </div>

          <div className="theater-card-modern">
            <h4 className="theater-nav-title mb-3">Développement Continu</h4>
            <h4 className="theater-heading-md mb-3">Plateforme Collaborative</h4>
            <p className="text-theater-text mb-4 leading-relaxed">
              Développement de l&apos;interface web collaborative et intégration des technologies décentralisées.
            </p>
            <p className="theater-nav-description">
              Construction d&apos;une plateforme open-source permettant la co-propriété transparente des contenus et le partage équitable des revenus entre participants.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

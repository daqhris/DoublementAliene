import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import NotificationBanner from '../components/NotificationBanner';
import ResearchQA from '../components/ResearchQA';

export const metadata: Metadata = {
  title: 'Recherche - Doublement Aliéné',
  description: 'Laboratoire de recherche artistique et méthodologies IA',
};

export default function ResearchPage() {
  return (
    <div className="theater-container py-12">
      <NotificationBanner />
      <section className="theater-section">
        <div className="theater-section-header">
          <h1 className="theater-heading-lg">
            Laboratoire de Recherche
          </h1>
          <p className="theater-subtitle">
            Découvrez en avant-première les méthodologies de recherche artistique et les réponses écrites rédigées des IA.
          </p>
        </div>

        <div className="theater-card-modern">
          <h2 className="theater-heading-md">
            Recherche Artistique
          </h2>
          <p className="text-theater-text mb-6 leading-relaxed">
            Ce laboratoire de recherche artistique explore les thèmes d&apos;aliénation et IA en tant qu&apos;être à travers des questions et réponses ainsi que l&apos;intégration d&apos;intelligences artificielles dans le processus créatif théâtral.
          </p>

          <div className="border-l-4 border-solarized-base2 pl-6">
            <h3 className="theater-nav-title mb-3">
              Méthodologies
            </h3>
            <p className="theater-nav-description mb-4">
              Utilisation d&apos;outils de discussion avec les IA pour un raisonnement créatif intégrant leurs idées, l&apos;analyse des concepts liés à l'emergence de vie numérique et de l&apos;aliénation du travail humain dans le théâtre contemporain.
            </p>
            <Link 
              href="https://github.com/daqhris/DoublementAliene/tree/main/ResearchLab"
              className="theater-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Consulter les documents de recherche →
            </Link>
          </div>
        </div>
      </section>

      <section className="theater-section" aria-labelledby="qa-section-title">
        <div className="theater-section-header">
          <h2 id="qa-section-title" className="theater-heading-md">
            Entretiens Q&amp;A avec des IA
          </h2>
          <p className="theater-subtitle">
            Exploration des concepts d&apos;aliénation et préfiguration de la mise en scène du spectacle à travers des conversations avec différents modèles d&apos;Intelligence Artificielle ayant eu lieu chez Duck.AI.
          </p>
        </div>
        <ResearchQA />
      </section>
    </div>
  );
}

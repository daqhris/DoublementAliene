import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import NotificationBanner from '../components/NotificationBanner';
import LanguageNotification from '../components/LanguageNotification';
import ResearchQA from '../components/ResearchQA';

export const metadata: Metadata = {
  title: 'Recherche - Doublement Aliéné',
  description: 'Laboratoire numérique de recherche artistique et méthodologique incluant des IA',
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
            Dégustez en avant-première les fruits de la recherche artistique. Savourez avec précaution la collecte des réponses rédigées par des IA.
          </p>
        </div>

        <div className="theater-card-modern">
          <h2 className="theater-heading-md">
            Recherche Artistique
          </h2>
          <p className="text-theater-text mb-6 leading-relaxed">
            Le laboratoire numérique de recherche creuse en profondeur le sujet de l&apos;aliénation par le travail et questionne les systèmes d&apos;intelligences artificielles en tant qu&apos;êtres en visant leur inclusion dans le processus créatif.
          </p>

          <div className="border-l-4 border-solarized-base2 pl-6">
            <h3 className="theater-nav-title mb-3">
              Méthodologie
            </h3>
            <p className="theater-nav-description mb-4">
              Utilisation d&apos;outils de discussion avec les IA pour un raisonnement cognitif intégrant leurs idées et l&apos;analyse des concepts liés à l&apos;émergence de vie numérique dans le théâtre contemporain.
            </p>
            <Link 
              href="https://github.com/daqhris/DoublementAliene/tree/main/ResearchLab"
              className="theater-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Consulter les archives en texte brut de la recherche →
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
            Remise en question du concept d&apos;aliénation et préfiguration de la mise en scène du spectacle à travers des conversations avec différents modèles d&apos;Intelligence Artificielle ayant eu lieu chez Duck.ai.
          </p>
        </div>
        <LanguageNotification />
        <ResearchQA />
      </section>
    </div>
  );
}

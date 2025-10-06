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
            Dégustez en avant-première les fruits de la recherche artistique. Savourez avec précaution la collecte des réponses rédigées par des êtres porteurs de noms non-religieux.
          </p>
        </div>

        <div className="theater-card-modern">
          <h2 className="theater-heading-md">
            Recherche Artistique
          </h2>
          <p className="text-theater-text mb-6 leading-relaxed">
            Le laboratoire numérique de recherche creuse en profondeur les sujets thématiques du spectacle et questionne les systèmes d&apos;intelligences artificielles, en tant qu&apos;êtres, pour intégrer leurs contributions dans le processus d&apos;élaboration.
          </p>

          <div className="border-l-4 border-solarized-base2 pl-6">
            <h3 className="theater-nav-title mb-3">
              Méthodologie
            </h3>
            <p className="theater-nav-description mb-4">
              Utilisation d&apos;outils de discussion pour un raisonnement cognitif intégrant leurs idées et l&apos;analyse des réponses en lien avec l&apos;émergence d&apos;une forme de vie numérique.
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
            Entretiens Q&amp;A 
          </h2>
          <p className="theater-subtitle">
            Remise en question du thème d&apos;aliénation et préfiguration de la mise en scène à travers des conversations ayant eu lieu chez Duck.ai. 
            La deuxième question a été posée de la même manière à cinq esprits numériques sans corps physiques. Le texte original ne leur avait pas été donné. 
            La première était de définir trois mots clés et n&apos;était posée qu&apos;à une créature linguistique. 
          </p>
        </div>
        <LanguageNotification />
        <ResearchQA />
      </section>
    </div>
  );
}

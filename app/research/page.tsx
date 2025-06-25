import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import NotificationBanner from '../components/NotificationBanner';

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
            Explorez les méthodologies de recherche artistique et les réponses IA du projet &ldquo;Doublement Aliéné&rdquo;.
          </p>
        </div>

        <div className="theater-card-modern">
          <h2 className="theater-heading-md">
            ResearchLab
          </h2>
          <p className="text-theater-text mb-6 leading-relaxed">
            Le laboratoire de recherche explore les thèmes d&apos;aliénation contemporaine à travers l&apos;analyse de performance et l&apos;intégration d&apos;intelligence artificielle dans le processus créatif théâtral.
          </p>

          <div className="border-l-4 border-solarized-base2 pl-6">
            <h3 className="theater-nav-title mb-3">
              Méthodologies IA
            </h3>
            <p className="theater-nav-description mb-4">
              Utilisation d&apos;outils d&apos;intelligence artificielle pour l&apos;exploration créative et l&apos;analyse des thèmes d&apos;aliénation dans le théâtre contemporain.
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
    </div>
  );
}

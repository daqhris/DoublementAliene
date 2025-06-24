import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Performance - Doublement Aliéné',
  description: 'Documentation de la performance théâtrale "Doublement Aliéné"',
};

export default function PerformancePage() {
  return (
    <div className="theater-container py-12">
      <section className="theater-section">
        <div className="theater-section-header">
          <h1 className="theater-heading-lg">
            Performance Théâtrale
          </h1>
          <p className="theater-subtitle">
            Découvrez les représentations de &ldquo;Doublement Aliéné&rdquo;, une exploration théâtrale de l&apos;aliénation contemporaine.
          </p>
        </div>

        <div className="theater-card-modern">
          <h2 className="theater-heading-md">
            Première Représentation
          </h2>
          <div className="mb-4">
            <p className="text-theater-muted mb-2 font-medium">17 Mars 2025</p>
            <h3 className="text-lg font-semibold text-theater-text mb-3">
              La Fonderie - Musée Bruxellois de l&apos;Industrie et du Travail
            </h3>
            <p className="text-theater-text mb-6 leading-relaxed">
              Première interprétation théâtrale de l&apos;œuvre par des comédien.ne.s, sous forme de deux spectacles expérimentaux en Français, sur scène dans le Musée bruxellois de l&apos;industrie et du travail.
            </p>
          </div>

          <div className="space-y-6">
            <div className="border-l-4 border-solarized-base2 pl-4">
              <h4 className="theater-nav-title mb-2">
                <Link href="/gallery" className="theater-link">
                  Galerie Photos
                </Link>
              </h4>
              <p className="theater-nav-description">
                Découvrez les moments forts de la performance à travers notre galerie photo.
              </p>
            </div>

            <div className="border-l-4 border-solarized-base2 pl-4">
              <h4 className="theater-nav-title mb-2">Enregistrements</h4>
              <p className="theater-nav-description mb-2">
                Accès aux enregistrements vidéo de la performance.
              </p>
              <p className="text-sm text-theater-muted">
                <strong>Accès restreint:</strong> Réservé aux co-auteurs et participants autorisés
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

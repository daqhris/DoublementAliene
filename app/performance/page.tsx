import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Performance - Doublement Aliéné',
  description: 'Documentation de la performance théâtrale "Doublement Aliéné"',
};

export default function PerformancePage() {
  return (
    <div className="theater-container py-16 md:py-24">
      <section className="mb-16">
        <h1 className="theater-heading mb-6">Performance Théâtrale</h1>
        <p className="theater-text mb-8 max-w-3xl mx-auto">
          Découvrez les représentations de &ldquo;Doublement Aliéné&rdquo;, une exploration théâtrale de l&apos;aliénation contemporaine.
        </p>
      </section>
      
      <section className="mb-16">
        <div className="theater-card mb-8">
          <h2 className="text-2xl font-bold mb-6 text-theater-primary dark:text-theater-secondary">
            Première Représentation
          </h2>
          <div className="space-y-4">
            <span className="inline-block px-3 py-1 text-sm font-semibold text-theater-accent bg-theater-accent/10 rounded-full">
              17 Mars 2025
            </span>
            <h3 className="text-xl font-semibold text-theater-primary dark:text-theater-secondary">
              La Fonderie - Musée Bruxellois de l&apos;Industrie et du Travail
            </h3>
            <p className="theater-text">
              Première interprétation théâtrale de l&apos;œuvre par des comédien.ne.s, sous forme de deux spectacles expérimentaux en Français, sur scène dans le Musée bruxellois de l&apos;industrie et du travail.
            </p>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="theater-card">
            <h3 className="text-xl font-semibold mb-4 text-theater-primary dark:text-theater-secondary">
              📸 Galerie Photos
            </h3>
            <p className="theater-text mb-4">
              Découvrez les moments forts de la performance à travers notre galerie photo.
            </p>
            <Link href="/gallery" className="theater-button">
              Voir la Galerie
            </Link>
          </div>
          <div className="theater-card">
            <h3 className="text-xl font-semibold mb-4 text-theater-primary dark:text-theater-secondary">
              🎬 Enregistrements
            </h3>
            <p className="theater-text mb-4">
              Accès aux enregistrements vidéo de la performance.
            </p>
            <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4">
              <p className="text-yellow-800 dark:text-yellow-200 text-sm">
                <strong>Accès restreint:</strong> Réservé aux co-auteurs et participants autorisés
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

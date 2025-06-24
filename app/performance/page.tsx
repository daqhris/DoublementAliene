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
      <h1 className="text-3xl font-semibold mb-4 text-theater-text">Performance Théâtrale</h1>
      <p className="text-lg text-theater-muted mb-8 max-w-2xl">
        Découvrez les représentations de &ldquo;Doublement Aliéné&rdquo;, une exploration théâtrale de l&apos;aliénation contemporaine.
      </p>
      
      <section className="mb-8">
        <h2 className="text-xl font-medium mb-4 text-theater-text">Première Représentation</h2>
        <div className="mb-4">
          <span className="text-sm font-medium text-theater-muted bg-theater-muted/10 px-2 py-1 rounded">
            17 Mars 2025
          </span>
        </div>
        <h3 className="text-lg font-medium mb-2 text-theater-text">
          La Fonderie - Musée Bruxellois de l&apos;Industrie et du Travail
        </h3>
        <p className="text-theater-muted mb-6">
          Première interprétation théâtrale de l&apos;œuvre par des comédien.ne.s, sous forme de deux spectacles expérimentaux en Français, sur scène dans le Musée bruxellois de l&apos;industrie et du travail.
        </p>
        
        <div className="space-y-4">
          <div>
            <Link href="/gallery" className="text-theater-text hover:underline font-medium">Galerie Photos</Link>
            <p className="text-theater-muted">Découvrez les moments forts de la performance à travers notre galerie photo.</p>
          </div>
          <div>
            <span className="text-theater-text font-medium">Enregistrements</span>
            <p className="text-theater-muted">Accès aux enregistrements vidéo de la performance.</p>
            <p className="text-sm text-theater-muted bg-theater-muted/10 p-2 rounded mt-2">
              <strong>Accès restreint:</strong> Réservé aux co-auteurs et participants autorisés
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Galerie - Doublement Aliéné',
  description: 'Galerie photos et contenus visuels de la performance théâtrale',
};

export default function GalleryPage() {
  return (
    <div className="theater-container py-16 md:py-24">
      <section className="mb-16">
        <h1 className="theater-heading mb-6">Galerie Visuelle</h1>
        <p className="theater-text mb-8 max-w-3xl mx-auto">
          Explorez les moments visuels de &ldquo;Doublement Aliéné&rdquo; à travers photos, documents et créations artistiques.
        </p>
      </section>
      
      <section className="mb-16">
        <div className="theater-card">
          <h2 className="text-2xl font-bold mb-6 text-theater-primary dark:text-theater-secondary">
            Photos de Performance
          </h2>
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-6">
            <p className="text-yellow-800 dark:text-yellow-200">
              <strong>En construction:</strong> La galerie photo sera bientôt disponible avec les images de la performance du 17 Mars 2025 à La Fonderie.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <div className="theater-card">
          <h2 className="text-2xl font-bold mb-6 text-theater-primary dark:text-theater-secondary">
            Documents et Créations
          </h2>
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-6">
            <p className="text-yellow-800 dark:text-yellow-200">
              <strong>En développement:</strong> Section dédiée aux documents PDF, créations artistiques et matériaux de recherche.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

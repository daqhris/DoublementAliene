import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Galerie - Doublement Aliéné',
  description: 'Galerie photos et contenus visuels de la performance théâtrale',
};

export default function GalleryPage() {
  return (
    <div className="theater-container py-12">
      <h1 className="text-3xl font-semibold mb-4 text-theater-text">Galerie Visuelle</h1>
      <p className="text-lg text-theater-muted mb-8 max-w-2xl">
        Explorez les moments visuels de &ldquo;Doublement Aliéné&rdquo; à travers photos, documents et créations artistiques.
      </p>
      
      <section className="mb-8">
        <h2 className="text-xl font-medium mb-4 text-theater-text">Photos de Performance</h2>
        <div className="bg-theater-muted/10 border-l-4 border-theater-muted/30 pl-6 py-2">
          <p className="text-theater-muted">
            <strong>En construction:</strong> La galerie photo sera bientôt disponible avec les images de la performance du 17 Mars 2025 à La Fonderie.
          </p>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-medium mb-4 text-theater-text">Documents et Créations</h2>
        <div className="bg-theater-muted/10 border-l-4 border-theater-muted/30 pl-6 py-2">
          <p className="text-theater-muted">
            <strong>En développement:</strong> Section dédiée aux documents PDF, créations artistiques et matériaux de recherche.
          </p>
        </div>
      </section>
    </div>
  );
}

import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import NotificationBanner from '../components/NotificationBanner';
import PDFViewer from '../components/PDFViewer';

export const metadata: Metadata = {
  title: 'Performance - Doublement Aliéné',
  description: 'Documentation complète de la performance théâtrale Doublement Aliéné avec guides de mise en scène',
};

export default function PerformancePage() {
  return (
    <div className="theater-container py-12">
      <NotificationBanner />
      
      <section className="theater-section mb-12">
        <div className="theater-section-header">
          <h1 className="theater-heading-lg">
            Performance Théâtrale
          </h1>
          <p className="theater-subtitle">
            Découvrez la documentation complète de &ldquo;Doublement Aliéné&rdquo; : 
            guides de mise en scène, script théâtral, et archives visuelles de la performance.
          </p>
        </div>

        <div className="theater-card-modern">
          <h2 className="theater-nav-title mb-6">
            Prototype d&apos;Interprétation Théâtrale
          </h2>
          <p className="theater-nav-description mb-8">
            Cette performance explore les thèmes de l&apos;intelligence artificielle en tant qu&apos;être étrange, 
            présentée le 17 Mars 2025 à La Fonderie dans le cadre du festival Zinneke. 
            La pièce met en scène des &ldquo;Athlètes Intelligent.e.s&rdquo; qui pédalent sur un vélo stationnaire 
            tout en lisant et dessinant, assistés par un.e &ldquo;Assistant.e Intelligent.e&rdquo;.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <div className="border-l-4 border-solarized-base2 pl-6">
              <h4 className="theater-nav-title mb-2">
                <Link href="/gallery" className="theater-link">
                  Galerie Créative
                </Link>
              </h4>
              <p className="theater-nav-description">
                Explorez la chronologie complète : construction, performance, et créations artistiques.
              </p>
            </div>

            <div className="border-l-4 border-solarized-base2 pl-6">
              <h4 className="theater-nav-title mb-2">
                <Link href="/gallery#construction" className="theater-link">
                  Processus de Construction
                </Link>
              </h4>
              <p className="theater-nav-description">
                Suivez la construction artisanale du support en bois pour vélo fixe (9-17 Mars 2025).
              </p>
            </div>

            <div className="border-l-4 border-solarized-base2 pl-6">
              <h4 className="theater-nav-title mb-2">Enregistrements Vidéo</h4>
              <p className="theater-nav-description">
                <strong>Accès restreint:</strong> Les enregistrements audiovisuels sont disponibles 
                pour les co-auteurs et collaborateurs du projet.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="theater-section">
        <div className="theater-section-header mb-8">
          <h2 className="theater-heading-md">Documentation de Performance</h2>
          <p className="theater-subtitle">
            Documents essentiels pour comprendre et reproduire la performance théâtrale.
          </p>
        </div>

        <div className="space-y-8">
          <PDFViewer
            src="/Constellations2025/MiseEnScène_DoublementAliéné.pdf"
            title="Guide de Mise en Scène"
            description="Mode d'emploi détaillé incluant la répartition des rôles (Assistant.e Intelligent.e et Athlètes Intelligent.e.s), le dispositif technique (vélo stationnaire, micro, crayons), et les instructions de performance."
          />

          <PDFViewer
            src="/Constellations2025/Théâtre_DoublementAliéné.pdf"
            title="Script Théâtral : 10 Doubles Réactions"
            description="Texte intégral de la pièce présentant les réactions vocales et visuelles d'un être étrange lors de l'annonce d'un prix noble de paternité, transcrites depuis Bruxelles le 10 octobre 2024."
          />
        </div>
      </section>
    </div>
  );
}

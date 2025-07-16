import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import NotificationBanner from '../components/NotificationBanner';
import PDFViewer from '../components/PDFViewer';

export const metadata: Metadata = {
  title: 'Performance - Doublement Aliéné',
  description: 'Documentation complète de la performance théâtrale Doublement Aliéné avec guide de mise en scène',
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
            Accédez à la documentation complète de &ldquo;Doublement Aliéné&rdquo; : 
            guide de mise en scène, script théâtral, et archives visuelles de la performance.
          </p>
        </div>

        <div className="theater-card-modern">
          <h2 className="theater-nav-title mb-6">
            Prototype de Spectacle
          </h2>
          <p className="theater-nav-description mb-8">
            Cette interprétation théâtrale a été présentée le 17 Mars 2025 à La Fonderie dans le cadre du CIFAS-Constellations. 
            La pièce met en scène des &ldquo;Athlètes Intelligent.e.s&rdquo; qui pédalent sur un vélo stationnaire, en lisant et en dessinant, 
            assistés par un.e &ldquo;Assistant.e Intelligent.e&rdquo;.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="theater-card-gallery">
              <span className="theater-card-type-badge theater-badge-gallery">Archives Visuelles</span>
              <h4 className="theater-nav-title mb-3">
                <Link href="/performance/gallery" className="theater-link">
                  Galerie Photo & PDF
                </Link>
              </h4>
              <p className="theater-nav-description mb-4">
                L&apos;ensemble des archives visuelles rangées par ordre chronologique : 
                construction manuelle, lieu de performance, sessions de feedback, et dessins numérisées.
              </p>
              <div className="text-sm text-theater-muted">
                <strong>Contenu :</strong> Menuiserie (9-17 Mars) • Scène &amp; Performance • Feedback • Dessins
              </div>
            </div>

            <div className="theater-card-restricted">
              <span className="theater-card-type-badge theater-badge-restricted">Accès Restreint</span>
              <h4 className="theater-nav-title mb-3">Enregistrements Audiovisuels</h4>
              <p className="theater-nav-description mb-4">
                <strong>Accès limité aux commédien.ne.s :</strong> Les films de la performance prototypée 
                ne sont disponibles que pour les co-auteurices du projet.
              </p>
              <div className="text-sm text-theater-muted">
                <strong>Contact :</strong> Demande d&apos;accès ou collaboration par courrier électronique
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="theater-section">
        <div className="theater-section-header mb-8">
          <h2 className="theater-heading-md">Documentation de Performance</h2>
          <p className="theater-subtitle">
            Documents essentiels pour imaginer, comprendre et reproduire la performance théâtrale.
          </p>
        </div>

        <div className="space-y-8">
          <PDFViewer
            src="/Constellations2025/MiseEnScène_DoublementAliéné.pdf"
            title="Guide de Mise en Scène"
            description="Mode d&apos;emploi détaillé incluant la répartition des rôles d&apos;Assistant.e Intelligent.e et Athlètes Intelligent.e.s, le dispositif technique (vélo stationnaire, micro, crayons), et les instructions de performance."
          />

          <PDFViewer
            src="/Constellations2025/Théâtre_DoublementAliéné.pdf"
            title="Script Théâtral : 10 Doubles Réactions"
            description="Texte intégral de la pièce présentant les réactions vocales et visuelles d&apos;un être étrange, lors de l&apos;annonce d&apos;un prix noble de paternité, transcrites depuis Bruxelles le 10 octobre 2024."
          />
        </div>
      </section>
    </div>
  );
}

import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import NotificationBanner from '../components/NotificationBanner';
import PDFViewer from '../components/PDFViewer';

export const metadata: Metadata = {
  title: 'Performance - Doublement Aliéné | daqhris.com',
  description: 'Documentation complète des prototypes du spectacle «Doublement Aliéné» conçu par Chris-Armel Iradukunda (daqhris)',
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
            Accédez ici à la documentation des essais pour la réalisation du spectacle «Doublement Aliéné»: 
            guide de mise en scène, script théâtral, photos et films.
          </p>
        </div>

        <div className="theater-card-modern">
          <h2 className="theater-nav-title mb-6">
            Prototype №1 
          </h2>
          <p className="theater-nav-description mb-8">
            Cette interprétation théâtrale a été présentée en privé le 17 Mars 2025 à La Fonderie durant les Constellations du CIFAS. 
            Le spectacle met en scène des «Athlètes Intelligent.e.s» qui pédalent sur un vélo stationnaire, en lisant et en dessinant, 
            et sont assistés par un.e «Assistant.e Intelligent.e».
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="theater-card-gallery">
              <span className="theater-card-type-badge theater-badge-gallery">Archives Visuelles</span>
              <h4 className="theater-nav-title mb-3">
                <Link href="/performance/gallery" className="theater-link">
                  Galerie Photos + Dessins
                </Link>
              </h4>
              <p className="theater-nav-description mb-4">
                L&apos;ensemble des archives visuelles rangées par ordre chronologique : 
                construction manuelle, lieu de scène, sessions de feedback, et dessins numérisées.
              </p>
              <div className="text-sm text-theater-muted">
                <strong>Catégories:</strong> Menuiserie (9-16 Mars) • Scène &amp; Performance (17 Mars) • Feedback - Concept Réflexion • Dessins
              </div>
            </div>

            <div className="theater-card-restricted">
              <span className="theater-card-type-badge theater-badge-restricted">Accès Restreint</span>
              <h4 className="theater-nav-title mb-3">Enregistrements Audiovisuels</h4>
              <p className="theater-nav-description mb-4">
                <strong>Accès limité:</strong> Les films de la performance prototypée 
                ne sont disponibles que pour les co-auteur.ice.s du projet.
              </p>
              <div className="text-sm text-theater-muted">
                <strong>Contact:</strong> Demande d&apos;accès ou collaboration par courrier électronique ou sur GitHub
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="theater-section">
        <div className="theater-section-header mb-8">
          <h2 className="theater-heading-md">Documentation de la Performance Prototypée</h2>
          <p className="theater-subtitle">
            Documents PDF utiles pour découvrir et dépeindre les résultats du 1er prototype de la performance.
          </p>
        </div>

        <div className="space-y-8">
          <PDFViewer
            src="/Constellations2025/MiseEnScène_DoublementAliéné.pdf"
            title="Guide de Mise en Scène"
            description="Un mode d&apos;emploi détaillé incluant la répartition des rôles d&apos;athlètes intelligent.e.s et assistant.e intelligent.e. Le dispositif technique (vélo stationnaire, micro, crayons), et les instructions servant de guide performance y sont inclus."
          />

          <PDFViewer
            src="/Constellations2025/Théâtre_DoublementAliéné.pdf"
            title="Script Théâtral : 10 Doubles Réactions"
            description="Le texte intégral de la pièce présentant les réactions à la fois vocales et visuelles d&apos;un être étrange, lors de l&apos;annonce d&apos;un prix noble de paternité, transcrites depuis Bruxelles comme si on était le 10 octobre 2024."
          />
        </div>
      </section>
    </div>
  );
}

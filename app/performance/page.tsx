import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import NotificationBanner from '../components/NotificationBanner';
import PDFViewer from '../components/PDFViewer';

export const metadata: Metadata = {
  title: 'Performance - Doublement Aliéné | daqhris.com',
  description: 'Documentation exhaustive des prototypes du spectacle «Doublement Aliéné» conçu par Chris-Armel Iradukunda (daqhris)',
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
            la mise en scène, le script théâtral, les photos et les films.
          </p>
        </div>

        <div className="theater-card-modern">
          <h2 className="theater-nav-title mb-6">
            Prototype №1 
          </h2>
          <p className="text-theater-text leading-relaxed mb-8">
            Cette interprétation théâtrale a été présentée en privé le 17 Mars 2025 au Musée Bruxellois des Industries et du Travail (La Fonderie) durant les Constellations du CIFAS. <br />
            Le spectacle met en scène des athlètes intelligent.e.s qui pédalent à toute allure un vélo stationnaire, en lisant et en dessinant, et en faisant corps uni avec un assistant intelligent.
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
                Les archives numérisées sont rangées chronologiquement: 
                construction manuelle, lieu de scène, sessions de feedback, et dessins d&apos;athlètes.
              </p>
              <div className="text-sm text-theater-muted">
                <strong>Catégories:</strong> Menuiserie (9-16 Mars) • Scène&amp;Performance (17 Mars) • Feedback: Concept-Réflexion • Dessins Numérisés
              </div>
            </div>

            <div className="theater-card-restricted">
              <span className="theater-card-type-badge theater-badge-restricted">Accès Restreint</span>
              <h4 className="theater-nav-title mb-3">Enregistrements Audiovisuels</h4>
              <p className="theater-nav-description mb-4">
                <strong>Accès restreint:</strong> Les films de la performance prototypée 
                ne sont disponibles que pour les co-auteur.ice.s du projet.
              </p>
              <div className="text-sm text-theater-muted">
                <strong>Fichiers:</strong> 2 court-métrages, de ±20 minutes chacun, enregistrés et projetés sur place
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="theater-card-modern">
        <div className="theater-section-header mb-8">
          <h2 className="theater-heading-md">Documentation du Prototype №1</h2>
          <p className="text-theater-text leading-relaxed">
            Documents PDF utiles pour découvrir et dépeindre les résultats du premier prototype du spectacle.
          </p>
        </div>

        <div className="space-y-8">
          <PDFViewer
            src="/Constellations2025/MiseEnScène_DoublementAliéné.pdf"
            title="Guide de Mise en Scène"
            description="Un mode d&apos;emploi détaillé incluant la répartition des rôles d&apos;athlètes intelligent.e.s et assistant.e intelligent.e. Le dispositif technique (vélo stationnaire, micro, crayons) et les instructions servant de guide pour le spectacle y figurent."
          />

          <PDFViewer
            src="/Constellations2025/Théâtre_DoublementAliéné.pdf"
            title="Script Théâtral Initial"
            description="Le texte intégral de la pièce consiste en 10 doubles réactions, à exprimer à tour de rôle vocalement et visuellement, qui proviennent d&apos;un être étrange lors de l&apos;annonce d&apos;un prix noble. Ces double pensées sont exprimées depuis Bruxelles comme si on était le 10 octobre 2024."
          />
        </div>
      </section>
    </div>
  );
}

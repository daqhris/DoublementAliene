import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'À Propos - Doublement Aliéné',
  description: 'Informations sur le projet, co-auteurs, CIFAS et philosophie collaborative',
};

export default function AboutPage() {
  return (
    <div className="theater-container py-12">
      <section className="theater-section">
        <div className="theater-section-header">
          <h1 className="theater-heading-lg">
            À Propos du Projet
          </h1>
          <p className="theater-subtitle">
            &ldquo;Doublement Aliéné&rdquo; est une exploration théâtrale collaborative de l&apos;aliénation contemporaine, développée dans une approche open-source et décentralisée.
          </p>
        </div>

        <div className="theater-card-modern">
          <h2 className="theater-heading-md">
            Programme CIFAS Constellations 2025
          </h2>
          <p className="text-theater-text leading-relaxed">
            Projet initié à Bruxelles par un artiste ayant participé au programme de co-apprentissage{' '}
            <Link 
              href="https://cifas.be/fr/event/2025/constellations-2025/constellations-2025.html"
              className="theater-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Constellations
            </Link>{' '}
            du Centre International de Formation en Arts du Spectacle ({' '}
            <Link 
              href="https://cifas.be/fr/pages/a-propos.html"
              className="theater-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              CIFAS
            </Link>
            ) de Janvier à Avril en 2025.
          </p>
        </div>
      </section>

      <section className="theater-section">
        <h2 className="theater-heading-md">
          Philosophie du Projet
        </h2>
        
        <div className="space-y-6">
          <div className="theater-card-modern">
            <h3 className="theater-nav-title mb-3">
              Philosophie Artistique
            </h3>
            <p className="theater-nav-description">
              Une approche expérimentale du théâtre contemporain explorant les thèmes d&apos;aliénation à travers la performance collaborative.
            </p>
          </div>

          <div className="theater-card-modern">
            <h3 className="theater-nav-title mb-3">
              Approche Open-Source
            </h3>
            <p className="theater-nav-description">
              Développement transparent et collaboratif avec documentation publique et partage des ressources créatives.
            </p>
          </div>

          <div className="theater-card-modern">
            <h3 className="theater-nav-title mb-3">
              Co-propriété et Blockchain
            </h3>
            <p className="text-theater-text mb-4 leading-relaxed">
              Le projet explore l&apos;intégration de technologies blockchain pour la co-propriété transparente des contenus tokenisés et le partage équitable des revenus entre participants.
            </p>
            <div className="border-l-4 border-solarized-base2 pl-4 py-3 bg-theater-muted/5">
              <h4 className="theater-nav-title mb-2">Mission Décentralisée</h4>
              <p className="theater-nav-description mb-2">
                Utilisation de contrats intelligents pour assurer la transparence dans la gestion des droits et revenus artistiques.
              </p>
              <p className="text-sm text-theater-muted">
                <strong>En développement:</strong> Intégration blockchain et système de co-propriété tokenisée
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="theater-section">
        <div className="theater-card-modern">
          <h2 className="theater-heading-md">
            Contact et Collaboration
          </h2>
          <p className="text-theater-text leading-relaxed">
            Pour toute question, collaboration ou participation au projet, n&apos;hésitez pas à consulter le{' '}
            <Link 
              href="https://github.com/daqhris/DoublementAliene"
              className="theater-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              dépôt GitHub
            </Link>{' '}
            ou à prendre contact via les canaux officiels.
          </p>
        </div>
      </section>
    </div>
  );
}

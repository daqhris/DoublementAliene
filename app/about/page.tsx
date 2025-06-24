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
      <h1 className="text-3xl font-semibold mb-4 text-theater-text">À Propos du Projet</h1>
      <p className="text-lg text-theater-muted mb-8 max-w-2xl">
        &ldquo;Doublement Aliéné&rdquo; est une exploration théâtrale collaborative de l&apos;aliénation contemporaine, développée dans une approche open-source et décentralisée.
      </p>
      
      <section className="mb-8">
        <h2 className="text-xl font-medium mb-4 text-theater-text">Programme CIFAS Constellations 2025</h2>
        <p className="text-theater-muted mb-6">
          Projet initié à Bruxelles par un artiste ayant participé au programme de co-apprentissage{' '}
          <Link 
            href="https://cifas.be/fr/event/2025/constellations-2025/constellations-2025.html"
            className="text-theater-text hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Constellations
          </Link>{' '}
          du Centre International de Formation en Arts du Spectacle ({' '}
          <Link 
            href="https://cifas.be/fr/pages/a-propos.html"
            className="text-theater-text hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            CIFAS
          </Link>
          ) de Janvier à Avril en 2025.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-medium mb-4 text-theater-text">Philosophie du Projet</h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-medium mb-2 text-theater-text">Philosophie Artistique</h3>
            <p className="text-theater-muted">
              Une approche expérimentale du théâtre contemporain explorant les thèmes d&apos;aliénation à travers la performance collaborative.
            </p>
          </div>
          <div>
            <h3 className="font-medium mb-2 text-theater-text">Approche Open-Source</h3>
            <p className="text-theater-muted">
              Développement transparent et collaboratif avec documentation publique et partage des ressources créatives.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-medium mb-4 text-theater-text">Co-propriété et Blockchain</h2>
        <p className="text-theater-muted mb-6">
          Le projet explore l&apos;intégration de technologies blockchain pour la co-propriété transparente des contenus tokenisés et le partage équitable des revenus entre participants.
        </p>
        <div className="bg-theater-muted/10 border-l-4 border-theater-muted/30 pl-4 py-2 mb-4">
          <h3 className="font-medium mb-2 text-theater-text">
            Vision Décentralisée
          </h3>
          <p className="text-theater-muted mb-4">
            Utilisation de contrats intelligents pour assurer la transparence dans la gestion des droits et revenus artistiques.
          </p>
          <p className="text-sm text-theater-muted bg-theater-muted/10 p-2 rounded">
            <strong>En développement:</strong> Intégration blockchain et système de co-propriété tokenisée
          </p>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-medium mb-4 text-theater-text">Contact et Collaboration</h2>
        <p className="text-theater-muted mb-4">
          Pour toute question, collaboration ou participation au projet, n&apos;hésitez pas à consulter le{' '}
          <Link 
            href="https://github.com/daqhris/DoublementAliene"
            className="text-theater-text hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            dépôt GitHub
          </Link>{' '}
          ou à prendre contact via les canaux officiels.
        </p>
      </section>
    </div>
  );
}

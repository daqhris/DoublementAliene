import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'À Propos - Doublement Aliéné',
  description: 'Informations sur le projet, co-auteurs, CIFAS et philosophie collaborative',
};

export default function AboutPage() {
  return (
    <div className="theater-container py-16 md:py-24">
      <section className="mb-16">
        <h1 className="theater-heading mb-6">À Propos du Projet</h1>
        <p className="theater-text mb-8 max-w-3xl mx-auto">
          &ldquo;Doublement Aliéné&rdquo; est une exploration théâtrale collaborative de l&apos;aliénation contemporaine, développée dans une approche open-source et décentralisée.
        </p>
      </section>
      
      <section className="mb-16">
        <div className="theater-card mb-8">
          <h2 className="text-2xl font-bold mb-6 text-theater-primary dark:text-theater-secondary">
            Programme CIFAS Constellations 2025
          </h2>
          <p className="theater-text mb-6">
            Projet initié à Bruxelles par un artiste ayant participé au programme de co-apprentissage{' '}
            <Link 
              href="https://cifas.be/fr/event/2025/constellations-2025/constellations-2025.html"
              className="text-theater-accent hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Constellations
            </Link>{' '}
            du Centre International de Formation en Arts du Spectacle ({' '}
            <Link 
              href="https://cifas.be/fr/pages/a-propos.html"
              className="text-theater-accent hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              CIFAS
            </Link>
            ) de Janvier à Avril en 2025.
          </p>
        </div>
      </section>

      <section className="mb-16">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="theater-card">
            <h3 className="text-xl font-semibold mb-4 text-theater-primary dark:text-theater-secondary">
              🎭 Philosophie Artistique
            </h3>
            <p className="theater-text mb-4">
              Une approche expérimentale du théâtre contemporain explorant les thèmes d&apos;aliénation à travers la performance collaborative.
            </p>
          </div>
          <div className="theater-card">
            <h3 className="text-xl font-semibold mb-4 text-theater-primary dark:text-theater-secondary">
              🌐 Approche Open-Source
            </h3>
            <p className="theater-text mb-4">
              Développement transparent et collaboratif avec documentation publique et partage des ressources créatives.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <div className="theater-card">
          <h2 className="text-2xl font-bold mb-6 text-theater-primary dark:text-theater-secondary">
            Co-propriété et Blockchain
          </h2>
          <p className="theater-text mb-6">
            Le projet explore l&apos;intégration de technologies blockchain pour la co-propriété transparente des contenus tokenisés et le partage équitable des revenus entre participants.
          </p>
          <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4 text-blue-800 dark:text-blue-200">
              🔗 Vision Décentralisée
            </h3>
            <p className="text-blue-700 dark:text-blue-300 mb-4">
              Utilisation de contrats intelligents pour assurer la transparence dans la gestion des droits et revenus artistiques.
            </p>
            <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4">
              <p className="text-yellow-800 dark:text-yellow-200 text-sm">
                <strong>En développement:</strong> Intégration blockchain et système de co-propriété tokenisée
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <div className="theater-card">
          <h2 className="text-2xl font-bold mb-6 text-theater-primary dark:text-theater-secondary">
            Contact et Collaboration
          </h2>
          <p className="theater-text mb-4">
            Pour toute question, collaboration ou participation au projet, n&apos;hésitez pas à consulter le{' '}
            <Link 
              href="https://github.com/daqhris/DoublementAliene"
              className="text-theater-accent hover:underline"
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

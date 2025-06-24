import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Recherche - Doublement Aliéné',
  description: 'Laboratoire de recherche artistique et réponses IA pour le projet théâtral',
};

export default function ResearchPage() {
  return (
    <div className="theater-container py-16 md:py-24">
      <section className="mb-16">
        <h1 className="theater-heading mb-6">Laboratoire de Recherche</h1>
        <p className="theater-text mb-8 max-w-3xl mx-auto">
          Explorez les recherches artistiques, méthodologies et réponses d&apos;intelligence artificielle qui nourrissent le projet &ldquo;Doublement Aliéné&rdquo;.
        </p>
      </section>
      
      <section className="mb-16">
        <div className="theater-card mb-8">
          <h2 className="text-2xl font-bold mb-6 text-theater-primary dark:text-theater-secondary">
            ResearchLab
          </h2>
          <p className="theater-text mb-6">
            Né le 22 Juin 2025, le sous-projet ResearchLab regroupe des réponses variées des IA à des questions de recherche artistique.
          </p>
          <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4 text-blue-800 dark:text-blue-200">
              🔬 Méthodologie de Recherche
            </h3>
            <p className="text-blue-700 dark:text-blue-300 mb-4">
              Utilisation d&apos;intelligences artificielles pour explorer les questions théoriques et pratiques du théâtre contemporain.
            </p>
            <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4">
              <p className="text-yellow-800 dark:text-yellow-200 text-sm">
                <strong>En développement:</strong> Interface pour consulter les réponses IA et méthodologies de recherche
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="theater-card">
            <h3 className="text-xl font-semibold mb-4 text-theater-primary dark:text-theater-secondary">
              📚 Questions de Recherche
            </h3>
            <p className="theater-text mb-4">
              Exploration des thématiques d&apos;aliénation, de performance et d&apos;art contemporain.
            </p>
          </div>
          <div className="theater-card">
            <h3 className="text-xl font-semibold mb-4 text-theater-primary dark:text-theater-secondary">
              🤖 Réponses IA
            </h3>
            <p className="theater-text mb-4">
              Analyse et compilation des réponses d&apos;intelligences artificielles sur les questions artistiques.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

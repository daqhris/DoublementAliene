import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Recherche - Doublement Aliéné',
  description: 'Laboratoire de recherche artistique et méthodologies IA',
};

export default function ResearchPage() {
  return (
    <div className="theater-container py-12">
      <h1 className="text-3xl font-semibold mb-4 text-theater-text">Laboratoire de Recherche</h1>
      <p className="text-lg text-theater-muted mb-8 max-w-2xl">
        Explorez les méthodologies de recherche artistique et les réponses IA du projet &ldquo;Doublement Aliéné&rdquo;.
      </p>
      
      <section className="mb-8">
        <h2 className="text-xl font-medium mb-4 text-theater-text">ResearchLab</h2>
        <p className="text-theater-muted mb-6">
          Le laboratoire de recherche explore les thèmes d&apos;aliénation contemporaine à travers l&apos;analyse de performance et l&apos;intégration d&apos;intelligence artificielle dans le processus créatif théâtral.
        </p>
        <div className="bg-theater-muted/10 border-l-4 border-theater-muted/30 pl-4 py-2 mb-4">
          <h3 className="font-medium mb-2 text-theater-text">
            Méthodologies IA
          </h3>
          <p className="text-theater-muted mb-4">
            Utilisation d&apos;outils d&apos;intelligence artificielle pour l&apos;exploration créative et l&apos;analyse des thèmes d&apos;aliénation dans le théâtre contemporain.
          </p>
          <Link 
            href="https://github.com/daqhris/DoublementAliene/tree/main/ResearchLab"
            className="text-theater-text hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Consulter les documents de recherche →
          </Link>
        </div>
      </section>
    </div>
  );
}

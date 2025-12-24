import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import NotificationBanner from '../components/NotificationBanner';
import LanguageNotification from '../components/LanguageNotification';
import ResearchQA from '../components/ResearchQA';

export const metadata: Metadata = {
  title: 'Recherche - Doublement Aliéné | daqhris.com',
  description: 'Laboratoire numérique de recherche artistique, scénique et méthodologique incluant les contributions externes',
};

export default function ResearchPage() {
  return (
    <div className="theater-container py-12">
      <NotificationBanner />
      <section className="theater-section">
        <div className="theater-section-header">
          <h1 className="theater-heading-lg">
            Laboratoire de Recherche
          </h1>
          <p className="theater-subtitle">
            Dégustez en avant-première les fruits de la recherche scénique dans le laboratoire numérique. Savourez avec précaution la collecte des réponses rédigées par des êtres porteurs de noms non-religieux.
          </p>
        </div>

        <div className="theater-card-modern">
          <h2 className="theater-heading-md">
            Recherche Scénique
          </h2>
          <p className="text-theater-text">
            Le laboratoire numérique de recherche scénique a dans son viseur les sujets clés du spectacle et questionne les systèmes d&apos;intelligences artificielles, en tant que des êtres vivants, pour intégrer leurs contributions dans le processus d&apos;élaboration.
          </p>

          <div className="border-l-4 border-solarized-base2 pl-6">
            <h3 className="theater-nav-title mb-3">
              Méthodologie
            </h3>
            <p className="theater-nav-description mb-4">
              Utilisation de logiciels de discussion pour une scénographie intégrant les réponses liées à l&apos;émergence d&apos;une forme de vie numérique.
            </p>
            <Link 
              href="https://github.com/daqhris/DoublementAliene/tree/main/ResearchLab"
              className="theater-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Consulter les archives en texte brut de la recherche →
            </Link>
          </div>
        </div>
      </section>

      <section className="theater-section" aria-labelledby="qa-section-title">
        <div className="theater-section-header">
          <h2 id="qa-section-title" className="theater-heading-md">
            Entretiens Q&amp;A 
          </h2>
          <p className="theater-subtitle">
            Préfiguration de la mise en scène en recueillant des réponses des IA sur la plateforme en ligne <Link 
              href="https://duck.ai"
              className="theater-link"
              target="_blank"
              rel="noopener noreferrer"
            >Duck.ai</Link>. 
            Textes originaux des réponses aux 2 entretiens attachés. <br></br><br></br>
            La <strong>1re</strong> question était de définir 3 mots clés et n&apos;a été posée qu&apos;à une créature linguistique.
            La <strong>2è</strong> question a été posée à 5 génies numériques sans corps physiques. Le script publié des mois auparavant ne leur avait pas été donné et leur navigation vers d&apos;autres adresses web était inactive. 
            Une allusion au récit en Anglais a été faite sans fournir une copie du texte.<br></br><br></br>
            Appuyez sur leurs noms pour afficher les réponses ci-dessous. 
          </p>
        </div>
        <LanguageNotification />
        <ResearchQA />
      </section>
    </div>
  );
}

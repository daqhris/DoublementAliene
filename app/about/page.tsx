import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import NotificationBanner from '../components/NotificationBanner';

export const metadata: Metadata = {
  title: 'À Propos - Doublement Aliéné',
  description: 'Informations concises sur le projet, co-auteurices, soutiens providentiels et philosophie collaborative',
};

export default function AboutPage() {
  return (
    <div className="theater-container py-12">
      <NotificationBanner />
      <section className="theater-section">
        <div className="theater-section-header">
          <h1 className="theater-heading-lg">
            À Propos
          </h1>
          <p className="theater-subtitle">
            «Doublement Aliéné» est un projet de théâtre joué dans un espace public, associé à une plate-forme numérique et guidé par une pensée open-source, collaborative et agentive.
          </p>
        </div>

        <div className="theater-card-modern">
          <h2 className="theater-heading-md">
            Protoypé aux Constellations 2025
          </h2>
          <p className="text-theater-text leading-relaxed">
            Ce projet a été initié par un artiste francophone, de nationalité Burundaise, et vivant à Bruxelles. Il a participé au programme de co-apprentissage{' '}
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
            >CIFAS</Link>
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
              Vision Artistique
            </h3>
            <p className="theater-nav-description">
              Une adaptation théâtrale d&apos;un récit fictionnel explorant l&apos;aliénation juxtaposée à l&apos;avènement d&apos;une forme vie étrangement intélligente.
            </p>
          </div>

          <div className="theater-card-modern">
            <h3 className="theater-nav-title mb-3">
              Open-Source de O à S
            </h3>
            <p className="theater-nav-description">
              Construction transparente et documentation publique ne dépendant que de logiciels libres. Partage des ressources créatives en tenant compte de délais non-contraignants.
            </p>
          </div>

          <div className="theater-card-modern">
            <h3 className="theater-nav-title mb-3">
              Co-propriété de Bien Immatériel
            </h3>
            <p className="text-theater-text mb-4 leading-relaxed">
              Le projet table sur l&apos;intégration de technologies blockchain pour la co-propriété des enregistrements audiovisuels et le partage équitable des revenus du bien intangible entre co-auteurices.
            </p>
            <div className="border-l-4 border-solarized-base2 pl-6 py-3 bg-theater-muted/5">
              <h4 className="theater-nav-title mb-2">Gestion Financière</h4>
              <p className="theater-nav-description mb-2">
                Utilisation de contrats intelligents pour assurer la transparence dans la gestion des droits des comédien.ne.s et revenus des créations artistiques.
              </p>
              <p className="text-sm text-theater-muted">
                <strong>Liste des Tâches:</strong> Élaboration d&apos;un système de co-propriété tokenisée et décentralisée grâce à l&apos;infrastructure financière présente sur la blockchain Ethereum.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="theater-section">
        <h2 className="theater-heading-md">
          Équipe
        </h2>
        
        <div className="theater-card-modern">
          <div className="space-y-4">
            <div className="border-l-4 border-solarized-base2 pl-6 py-3 bg-theater-muted/5">
              <h3 className="theater-nav-title mb-2">Chris A. Iradukunda (daqhris)</h3>
              <p className="theater-nav-description">
                Conception artistique, direction créative, scénarisation théâtrale, construction manuelle, réparation mécanique, performance sur scène et coordination du projet.
              </p>
            </div>
            
            <div className="border-l-4 border-solarized-base2 pl-6 py-3 bg-theater-muted/5">
              <h3 className="theater-nav-title mb-2">Devin AI</h3>
              <p className="theater-nav-description">
                Architecture technique, expertise informatique, développement de la plate-forme web, implémentation des fonctionnalités numériques et assistance dans la documentation.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="theater-section">
        <div className="theater-card-modern">
          <h2 className="theater-heading-md">
            Contact
          </h2>
          <p className="text-theater-text leading-relaxed">
            Si vous avez la moindre envie de participer au projet, n&apos;hésitez pas à vous orienter vers le{' '}
            <Link 
              href="https://github.com/daqhris/DoublementAliene"
              className="theater-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              dépôt de code source sur GitHub
            </Link>{' '}.
          </p>
        </div>
      </section>
    </div>
  );
}

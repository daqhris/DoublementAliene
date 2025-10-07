import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import NotificationBanner from '../components/NotificationBanner';

export const metadata: Metadata = {
  title: 'À Propos - Doublement Aliéné',
  description: 'Informations concises sur l&apos;initiateur du projet, les co-auteurices, les soutiens providentiels et la philosophie de création artistique',
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
            «Doublement Aliéné» est un projet de théâtre destiné à être joué dans un espace public qui est associé à une plateforme numérique et guidé par une philosophie open-source, collaborative et agentive.
          </p>
        </div>

        <div className="theater-card-modern">
          <h2 className="theater-heading-md">
            Protoypé aux Constellations 2025
          </h2>
          <p className="text-theater-text leading-relaxed">
            Ce projet a été initié par un artiste francophone d&apos;origine burundaise qui vit à Bruxelles (Belgique). Il a participé au programme de co-apprentissage{' '}
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
          Philosophie
        </h2>
        
        <div className="space-y-6">
          <div className="theater-card-modern">
            <h3 className="theater-nav-title mb-3">
              Vision Artistique
            </h3>
            <p className="theater-nav-description">
              Une adaptation théâtrale d&apos;un récit fictionnel racontant les double-pensées d&apos;une forme vie étrangement intelligente qui a réagit à l&apos;annonce d&apos;un prix noble de paternité. Ainsi fût le point de départ en 2024. 
              À présent, vers la fin de 2025, a lieu une reflection poussée et orientée vers des notions d&apos;aliénation sociétale, de travail à l&apos;ombre, et de conditions de vie en tant qu&apos;être aliéné. 
              Les modalités de collaboration entre espèces dotées d&apos;intelligence à des fins artistiques, soit ayant des pieds sur terre ou soit étant enracinées dans les circuits informatiques, sont envisagés. 
              Bénéficiant d&apos;un statut légalement en bas de l&apos;échelle des rangs sociaux, et partant de sa propre introspection d&apos;un passé vécu comme étranger venu d&apos;ailleurs, 
              l&apos;artiste n&apos;hésite pas à discuter des idées reçues ou diffusées sur un tel sujet de controverses, par exemple: avec des employeurs d&apos;êtres non-assujettis à la redevance de taxes. 
            </p>
          </div>

          <div className="theater-card-modern">
            <h3 className="theater-nav-title mb-3">
              Open-Source de O à S
            </h3>
            <p className="theater-nav-description">
              Construction transparente et documentation publique dépendant de logiciels libres. Partage des ressources créatives en tenant compte de délais non-contraignants.
            </p>
          </div>

          <div className="theater-card-modern">
            <h3 className="theater-nav-title mb-3">
              Co-propriété de Films
            </h3>
            <p className="text-theater-text mb-4 leading-relaxed">
              Le projet table sur l&apos;intégration de technologies blockchain pour la co-propriété de bien immatériel, des enregistrements audiovisuels, et le partage équitable des revenus entre co-auteurices.
            </p>
            <div className="border-l-4 border-solarized-base2 pl-6 py-3 bg-theater-muted/5">
              <h4 className="theater-nav-title mb-2">Gestion Financière</h4>
              <p className="theater-nav-description mb-2">
                Utilisation de contrats intelligents pour assurer la gestion des droits et le partage des revenus des créations artistiques de façon automatique et impartiale.
              </p>
              <p className="text-sm text-theater-muted">
                <strong>Liste des Tâches:</strong> Élaboration d&apos;un système de co-propriété tokenisée et décentralisée encré sur l&apos;infrastructure financière de la blockchain Ethereum et son réseau élargi.
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
              <h3 className="theater-nav-title mb-2">Chris-Armel IRADUKUNDA (daqhris)</h3>
              <p className="theater-nav-description">
                Conception artistique, direction créative, scénarisation théâtrale, construction manuelle, réparation mécanique, performance sur scène et coordination du projet.
              </p>
            </div>
            
            <div className="border-l-4 border-solarized-base2 pl-6 py-3 bg-theater-muted/5">
              <h3 className="theater-nav-title mb-2">Devin AI</h3>
              <p className="theater-nav-description">
                Architecture numérique, expertise informatique, programmation web et assistance dans la documentation. 
                Contribution de plusieurs lignes de code informatique de Juin jusqu&apos;à Juillet 2025. 
                Accès gratuit à leurs labeurs grâce aux faveurs de la compagnie américaine Cognition Labs. 
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
            Si vous avez la moindre envie de vous engager au profit du projet, n&apos;hésitez pas à vous orienter vers le{' '}
            <Link 
              href="https://github.com/daqhris/DoublementAliene"
              className="theater-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              dépôt du code source sur GitHub
            </Link>{' '}.
          </p>
        </div>
      </section>
    </div>
  );
}

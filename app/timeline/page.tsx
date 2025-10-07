import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import NotificationBanner from '../components/NotificationBanner';

export const metadata: Metadata = {
  title: 'Chronologie - Doublement Aliéné',
  description: 'Chronologie complète du développement du projet théâtral dès ses origines',
};

interface TimelineItemProps {
  date: string;
  title: string;
  description: string;
  details?: string;
  link?: {
    url: string;
    text: string;
    external?: boolean;
  };
  isHighlight?: boolean;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ 
  date, 
  title, 
  description, 
  details, 
  link, 
  isHighlight = false 
}) => (
  <div className="timeline-item">
    <div className="timeline-marker">
      <div className={`timeline-dot ${isHighlight ? 'timeline-dot-highlight' : ''}`}></div>
    </div>
    <div className="timeline-content">
      <div className="timeline-date">
        {date}
      </div>
      <div className={`theater-card-modern ${isHighlight ? 'timeline-card-highlight' : ''}`}>
        <h3 className="theater-nav-title mb-3">
          {title}
        </h3>
        <p className="text-theater-text mb-4 leading-relaxed">
          {description}
        </p>
        {details && (
          <div className="border-l-4 border-solarized-base2 pl-6 py-3 bg-theater-muted/5 mb-4">
            <p className="theater-nav-description">
              {details}
            </p>
          </div>
        )}
        {link && (
          <div className="mt-4">
            {link.external ? (
              <Link 
                href={link.url}
                className="theater-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.text} →
              </Link>
            ) : (
              <Link href={link.url} className="theater-link">
                {link.text} →
              </Link>
            )}
          </div>
        )}
      </div>
    </div>
  </div>
);

export default function TimelinePage() {
  const timelineData: TimelineItemProps[] = [
    {
      date: "10 Octobre 2024",
      title: "Genèse de l'Œuvre",
      description: "Première parution en ligne et sur blockchain de l'œuvre originale écrite en Anglais, «Twofold Alienated».",
      details: "Publication faite par daqhris grâce à Manifold.xyz sur la blockchain Base (dépendante d'Ethereum) et marquant le début officiel du projet artistique.",
      link: {
        url: "https://app.manifold.xyz/txt/twofold-alienated",
        text: "Lire le récit original en Anglais",
        external: true
      }
    },
    {
      date: "25 Novembre 2024",
      title: "Sélection par le CIFAS",
      description: "Annonce par le CIFAS d'artistes interdisciplinaires sélectionnés pour l'édition 2025 des Constellations.",
      details: "Chris A. IRADUKUNDA (daqhris) figurait parmi les artistes sélectionnés pour les sessions de co-apprentissage.",
      link: {
        url: "https://cifas.be/fr/event/2025/constellations-2025/constellations-2025.html",
        text: "Jeter un coup d'œil aux Constellations 2025",
        external: true
      }
    },
    {
      date: "Décembre 2024 - Janvier 2025",
      title: "Dépôt de Code: Twofoldd Alienated",
      description: "Création d'un dépôt de code public et open-source à l'aide du gestionnaire des versions de fichiers git sur GitHub.",
      details: "Recueil de tous les documents textuels associés au récit original en Anglais dans un cadre collaboratif et transparent.",
      link: {
        url: "https://github.com/daqhris/twofold-alienated",
        text: "Code source : twofold-alienated",
        external: true
      }
    },
    {
      date: "Janvier - Avril 2025",
      title: "Participation aux CIFAS-Constellations",
      description: "Déroulement du programme de co-apprentissage Constellations organisé par le Centre International de Formation en Arts du Spectacle.",
      details: "Rencontres mensuelles d'artistes de tous horizons à Bruxelles, apprentissage collaboratif et exploration des méthodologies artistiques contemporaines.",
      link: {
        url: "/about",
        text: "En savoir plus sur ce programme du CIFAS"
      },
      isHighlight: true
    },
    {
      date: "17 Mars 2025",
      title: "Prototype d'Interprétation Théâtrale",
      description: "Première réalisation théâtrale de l'œuvre par des comédien.ne.s sous forme de deux spectacles expérimentaux en Français.",
      details: "Performance au sein du Musée Bruxellois de l'Industrie et du Travail (La Fonderie) dans le cadre des activités du CIFAS.",
      link: {
        url: "/performance",
        text: "Accéder aux souvenirs visuels de ce spectacle prototypé"
      },
      isHighlight: true
    },
    {
      date: "4 Avril 2025",
      title: "Dépôt de Code Source: DoublementAliene",
      description: "Lancement des travaux visant à construire un dépôt de code avec du logiciel libre sur un espace numérique public.",
      details: "Création de l'infrastructure technique structurant les fondations de la plate-forme collaborative et l'interface web du projet.",
      link: {
        url: "https://github.com/daqhris/DoublementAliene",
        text: "Voir le code source du dépôt open-source sur GitHub",
        external: true
      }
    },
    {
      date: "16 Avril 2025",
      title: "Clôture des Constellations 2025",
      description: "Clôture festive des activités réunissant des artistes mettant en scène les prototypes de leurs spectacles dans le cadre des Constellations 2025 à Molenbeek, Bruxelles.",
      details: "Fin officielle des sessions mensuelles de co-apprentissage, accompagnée d'une consolidation des acquis et d'une réflexion sur des améliorations en vue d'une suite éventuelle."
    },
    {
      date: "22 Juin 2025",
      title: "Naissance du Laboratoire de Recherche",
      description: "Début du sous-projet ResearchLab qui regroupe des réponses variées des IA à des questions de recherche.",
      details: "Exploration des méthodologies de recherche et inclusion des avis d'intelligences artificielles dans le processus créatif.",
      link: {
        url: "/research",
        text: "Visiter le laboratoire numérique de recherche artistique"
      },
      isHighlight: true
    },
    {
      date: "24 Juin 2025",
      title: "Documentation de la Performance",
      description: "Publication de fichiers documentant le spectacle prototypé le 17 Mars.",
      details: "Mise à disposition du public des documents de travail, des notes de mise en scène et des instructions liées à la représentation théâtrale.",
      link: {
        url: "https://github.com/daqhris/DoublementAliene/tree/main/public/Constellations2025",
        text: "Consulter les outils utiles pour la réalisation du prototype",
        external: true
      }
    },
    {
      date: "25 Juin 2025 à Maintenant",
      title: "Plateforme Web du Spectacle",
      description: "Développement en collaboration avec Devin AI d'une interface web spéciale.",
      details: "Construction d'une plateforme open-source au caractère informatif et qui facilitera la co-gestion des films tokenisés et le partage équitable des droits et revenus artistiques",
      link: {
        url: "/about",
        text: "Lire la philosophie du projet en long et en large"
      }
    }
  ];

  return (
    <div className="theater-container py-12">
      <NotificationBanner />
      <section className="theater-section">
        <div className="theater-section-header">
          <h1 className="theater-heading-lg">
            Chronologie
          </h1>
          <p className="theater-subtitle">
            Voici l&apos;évolution chronologique de «Doublement Aliéné», depuis sa conception textuelle jusqu&apos;à la co-création de sa plateforme en ligne, en passant par la réalisation du prototype de ce spectacle et autres faits majeurs.
          </p>
        </div>

        <div className="timeline-container">
          {timelineData.map((item, index) => (
            <TimelineItem
              key={index}
              date={item.date}
              title={item.title}
              description={item.description}
              details={item.details}
              link={item.link}
              isHighlight={item.isHighlight}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

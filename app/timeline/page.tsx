import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import NotificationBanner from '../components/NotificationBanner';

export const metadata: Metadata = {
  title: 'Chronologie - Doublement Aliéné | daqhris.com',
  description: 'Résumé chronologique de l&apos;evolution du projet théâtral dès ses origines à maintenant',
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
      description: "Première parution en ligne et sur blockchain de l'œuvre originale en Anglais «Twofold Alienated»",
      details: "Publication sur la blockchain Base (dépendante d'Ethereum), grâce à Manifold.xyz, qui marque le début du projet artistique.",
      link: {
        url: "https://app.manifold.xyz/txt/twofold-alienated",
        text: "Lire le récit fictionnel et satirique en Anglais",
        external: true
      },
      isHighlight: true
    },
    {
      date: "25 Novembre 2024",
      title: "Sélection par le CIFAS",
      description: "Annonce par le CIFAS d'artistes interdisciplinaires sélectionnés pour l'édition 2025 des Constellations",
      details: "Chris-Armel Iradukunda (daqhris) figurait parmi les artistes sélectionnés pour les sessions de co-apprentissage.",
      link: {
        url: "https://cifas.be/fr/event/2025/constellations-2025/constellations-2025.html",
        text: "Jeter un coup d'œil aux Constellations 2025",
        external: true
      }
    },
    {
      date: "Décembre 2024 - Janvier 2025",
      title: "Dépôt de Code: Twofold Alienated",
      description: "Création d'un dépôt de code public et open-source à l'aide du gestionnaire des versions de fichiers GIT sur GitHub",
      details: "Rassemblement de tous les documents textuels associés au récit original sur les étagères numériques de la plus grande bibliothèque de logiciels libres.",
      link: {
        url: "https://github.com/daqhris/twofold-alienated",
        text: "Code source : twofold-alienated",
        external: true
      }
    },
    {
      date: "Janvier - Avril 2025",
      title: "CIFAS - Constellations",
      description: "Déroulement du programme de co-apprentissage Constellations organisé par le Centre International de Formation en Arts du Spectacle",
      details: "Rencontres mensuelles d'artistes de tous horizons à Bruxelles, apprentissage collaboratif et apprentissage des méthodologies artistiques contemporaines.",
      link: {
        url: "https://cifas.be/fr/event/2025/constellations-2025/constellations-2025.html",
        text: "En savoir plus sur ce programme du CIFAS", 
        external: true
      },
      isHighlight: true
    },
    {
      date: "17 Mars 2025",
      title: "Interprétation Théâtrale",
      description: "Première réalisation théâtrale de l'œuvre qui a abouti à deux spectacles expérimentaux en Français",
      details: "Performances au sein du Musée Bruxellois de l'Industrie et du Travail (La Fonderie) dans le cadre des activités du CIFAS.",
      link: {
        url: "/performance",
        text: "Accéder aux photos des prototypes filmés et réalisés en privé"
      },
    {
      date: "4 Avril 2025",
      title: "Dépôt de Code: Doublement Aliene",
      description: "Lancement des travaux visant à construire un dépôt de code avec du logiciel libre dans un espace numérique public",
      details: "Création de l'infrastructure technique structurant les fondations de l'interface web du projet et sa plateforme en ligne.",
      link: {
        url: "https://github.com/daqhris/DoublementAliene",
        text: "Voir le code du dépôt open-source sur GitHub",
        external: true
      }
    },
    {
      date: "16 Avril 2025",
      title: "Clôture des Constellations 2025",
      description: "Clôture festive des activités qui réunissaient des artistes mettant en scène les prototypes de leurs spectacles durant les Constellations 2025 à Molenbeek, Bruxelles",
      details: "Fin officielle des sessions mensuelles de co-apprentissage, accompagnée d'une consolidation des acquis et d'une réflexion sur des améliorations éventuelles."
    },
    {
      date: "22 Juin 2025",
      title: "Laboratoire de Recherche",
      description: "Début du sous-projet ResearchLab qui regroupe des réponses variées des IA à des questions de recherche",
      details: "Exploration des méthodologies de recherche et inclusion des avis variés d'intelligences artificielles dans le processus imaginatif et scénografique.",
      link: {
        url: "/research",
        text: "Visiter le laboratoire numérique de recherche artistique"
      },
      isHighlight: true
    },
    {
      date: "24 Juin 2025",
      title: "Documentation du Prototype №1",
      description: "Publication de divers fichiers documentant le spectacle prototypé le 17 Mars",
      details: "Mise à disposition du public des documents de préparation, des notes de mise en scène et des photos illustrant l'essai d'unr représentation théâtrale.",
      link: {
        url: "https://github.com/daqhris/DoublementAliene/tree/main/public/Constellations2025",
        text: "Consulter les documents associés à cette première réalisation",
        external: true
      }
    },
    {
      date: "25 Juin 2025",
      title: "Site Web du Projet",
      description: "Programmation en collaboration avec Devin AI d'une interface web adéquate",
      details: "Construction d'un site web open-source, au caractère informatif, qui facilitera la co-gestion des films tokenisés ainsi que le partage équitable des droits et revenus artistiques.",
      link: {
        url: "/about",
        text: "À propos de la philosophie du projet en long et en large"
        },
      isHighlight: true
    },
    {
      date: "Août 2025",
      title: "Résidence de Réflexion",
      description: "Démarrage d'une résidence de réflexion chez Hectolitre (Marolles, Bruxelles)",
      details: "La phase de recherche prend de l'ampleur avec une résidence d'artistes permettant d'approfondir les thèmes de réflexion, travailler dans un espace notoire et exposer des réalisations.",
      link: {
        url: "http://hectolitre.space/members.html",
        text: "Bienvenue chez Hectolitre!", 
        external: true
      },
      isHighlight: true
    },
    {
      date: "Septembre - Novembre 2025",
      title: "Portrait Portable d'IA",
      description: "Œuvre d'art textile et tactile présentée lors du Wonder Festival (Courtrai, Flandres)",
      details: "Il s'agit d'une œuvre inspirée d'un autoportrait dessiné par Gemini, brodée sur un tissu textile, encadrée à l'image d'une tablette Google et faite à l'aide de machines. Sa création s'est déroulée durant une formation centrée sur le textile comme matériel de design organisée par Open Design Lab au Budalab (Sept 15 - Oct 17), suivie d'une exposition de groupe lors d'un festival régional de design (Oct 16 - Nov 2).",
      link: {
        url: "https://wonderkortrijk.be/en/exhibitions/cohousing-ten-broele/odltextile",
        text: "Exposition d'une tablette encadrant l'auto-portrait de Gemini", 
        external: true
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
            Voici l&apos;évolution par ordre chronologique révelant les étapes marquantes. À partir de la conception textuelle jusqu&apos;à la co-création d&apos;un site web, en passant par la réalisation d&apos;un prototype du spectacle et autres faits majeurs.
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

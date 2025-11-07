import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import NotificationBanner from '../components/NotificationBanner';

export const metadata: Metadata = {
  title: 'Chronologie - Doublement Aliéné | daqhris.com',
  description: 'Résumé de l&apos;evolution du projet théâtral dès ses origines à maintenant',
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
      description: "Première parution en ligne de l'œuvre originale en Anglais «Twofold Alienated»",
      details: "Publication sur la blockchain Base (dépendante d'Ethereum), grâce à Manifold.xyz, qui a marqué le début du projet artistique.",
      link: {
        url: "https://app.manifold.xyz/txt/twofold-alienated",
        text: "Lire le récit fictionnel et satirique en Anglais",
        external: true
      },
      isHighlight: true
    },
    {
      date: "25 Novembre 2024",
      title: "Artiste sélectionné par le CIFAS",
      description: "Annonce par le CIFAS d'artistes interdisciplinaires sélectionnés pour l'édition 2025 des Constellations",
      details: "Chris-Armel Iradukunda (daqhris) fait parti des participants triés sur le volet pour assister aux sessions de co-apprentissage.",
      link: {
        url: "https://cifas.be/fr/event/2025/constellations-2025/constellations-2025.html",
        text: "Jeter un coup d'œil aux Constellations 2025",
        external: true
      }
    },
    {
      date: "15 Décembre 2024",
      title: "Dépôt de Code: Twofold Alienated",
      description: "Création d'un dépôt de code open source à l'aide du gestionnaire de logiciels GIT sur GitHub",
      details: "Rassemblement de tout document textuel associé au récit original sur les étagères numériques de la plus grande bibliothèque de logiciels libres.",
      link: {
        url: "https://github.com/daqhris/twofold-alienated",
        text: "Code source : twofold-alienated",
        external: true
      }
    },
    {
      date: "25 Décembre 2024",
      title: "Florilège de 2024 sur Manifold",
      description: "«Twofold Alienated» a été nommé comme une des 5 meilleures œuvres publiées avec l'outil Scribe sur la plateforme d'art numérique Manifold",
      details: "Une des parutions sur blockchain qui, étant mises à l'avant par l'équipe curatoriale de Manifold, ont été félicitées le jour de Noël en 2024 parce qu'étant les plus consultées en ligne durant cette année.",
      link: {
        url: "https://manifold.gallery/manifoldteam/curation/minted-2024",
        text: "Les meilleures œuvres de 2024 selon la maison de publication sur blockchain",
        external: true
      }
    },
    {
      date: "Janvier - Avril 2025",
      title: "Constellations 2025 du CIFAS",
      description: "Déroulement du programme de co-apprentissage Constellations organisé par le Centre International de Formation en Arts du Spectacle",
      details: "Rencontres mensuelles d'artistes de tous horizons à Bruxelles, apprentissage collaboratif et apprentissage des méthodologies contemporaines.",
      link: {
        url: "https://cifas.be/fr/event/2025/constellations-2025/constellations-2025.html",
        text: "En savoir plus sur ce programme du monde des arts du spectacle", 
        external: true
      },
      isHighlight: true
    },
    {
      date: "17 Mars 2025",
      title: "Interprétation Théâtrale",
      description: "Première réalisation théâtrale de l'œuvre ayant abouti à 2 spectacles expérimentaux en Français",
      details: "Performances au sein du Musée Bruxellois de l'Industrie et du Travail (La Fonderie) dans le cadre des activités du CIFAS.",
      link: {
        url: "/performance",
        text: "Accéder aux photos des prototypes du spectacle réalisés en privé"
        }
      },
    {
      date: "4 Avril 2025",
      title: "Dépôt de Code: Doublement Aliene",
      description: "Lancement des travaux visant à construire avec du logiciel libre un dépôt de code dans un espace numérique public",
      details: "Création de l'infrastructure technique structurant les fondations de l'interface web du projet et son application en ligne.",
      link: {
        url: "https://github.com/daqhris/DoublementAliene",
        text: "Voir le code open-source sur GitHub",
        external: true
      }
    },
    {
      date: "16 Avril 2025",
      title: "Clôture des Constellations 2025",
      description: "Clôture festive des activités qui réunissaient des artistes mettant en scène les prototypes de leurs spectacles durant les Constellations 2025 à Molenbeek, Bruxelles",
      details: "Fin des sessions mensuelles de co-apprentissage, accompagnée d'une consolidation des acquis et d'une réflexion sur des améliorations éventuelles."
    },
    {
      date: "22 Juin 2025",
      title: "Laboratoire de Recherche",
      description: "Début du sous-projet qui regroupe des réponses des IA à des questions de recherche",
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
      details: "Mise à disposition du public des documents de préparation, des notes de mise en scène et des photos illustrant l'essai d'une représentation théâtrale.",
      link: {
        url: "https://github.com/daqhris/DoublementAliene/tree/main/public/Constellations2025",
        text: "Consulter les documents associés à cette première réalisation",
        external: true
      }
    },
    {
      date: "25 Juin 2025",
      title: "Site Web du Spectacle",
      description: "Programmation en collaboration avec Devin AI d'une interface web adéquate",
      details: "Construction d'un site web open-source, au caractère informatif, qui facilitera la co-gestion des films tokenisés ainsi que le partage équitable des droits et revenus artistiques.",
      link: {
        url: "/about",
        text: "À propos de la philosophie du projet en long et en large"
        },
      isHighlight: true
    },
    {
      date: "1 Août 2025",
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
      date: "10 Octobre - 2 Novembre 2025",
      title: "Portrait Portable d'IA",
      description: "Œuvre d'art textile en forme de tablette conçue au Budalab et présentée au Wonder Festival de Courtrai",
      details: "À l'image d'une tablette Google, c'est une œuvre inspirée d'un autoportrait dessiné par l'IA Gemini, brodée sur un tissu Kvadrat de seconde main, encadrée par un textile phosphorescent et conçue avec des machines de pointe dans la ville flamande de Courtrai. Sa création s'est déroulée durant une formation de 5 semaines centrée sur le textile comme matériel de design qui était organisée par Open Design Lab au Budalab (Sept 15 - Oct 16), et puis suivie d'une exposition de groupe lors d'un festival régional de design (Oct 16 - Nov 2).",
      link: {
        url: "https://wonderkortrijk.be/en/exhibitions/cohousing-ten-broele/odltextile",
        text: "Exposition du groupe Open Design Lab Textile lors du Wonder Festival", 
        external: true
      }
    },
        {
      date: "14 - 15 Novembre 2025",
      title: "Installation Performative",
      description: "Présentation artistique sur l'état d'avancement de la recherche et du prototypage à Bruxelles",
      details: "Pendant deux jours successifs, Hectolitre est l'hôte d'une installation bilingue qui décrit les faits accomplis, raconte les prototypes construits et illumine la recherche effectuée au bout d'une année de travail sur le spectacle théâtral «Doublement Aliéné».",
      link: {
        url: "http://hectolitre.space/echange_251114.html",
        text: "La fête «101 Liters Alchemy» chez Hectolitre", 
        external: true
      },
      isHighlight: true
    },
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

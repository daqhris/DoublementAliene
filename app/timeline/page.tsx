import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import NotificationBanner from '../components/NotificationBanner';

export const metadata: Metadata = {
  title: 'Chronologie - Doublement Aliéné',
  description: 'Chronologie complète du développement du projet théâtral depuis ses origines',
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
      description: "Première parution en ligne et publication sur blockchain de l'œuvre originale écrite en Anglais, \"Twofold Alienated\".",
      details: "Publication via Manifold faite par l'artiste daqhris et marquant le début officiel du projet artistique.",
      link: {
        url: "https://app.manifold.xyz/txt/twofold-alienated",
        text: "Lire le récit original en Anglais",
        external: true
      }
    },
    {
      date: "25 Novembre 2024",
      title: "Sélection CIFAS Constellations",
      description: "Annonce par le CIFAS d'artistes pluridisciplinaires sélectionnés pour l'édition 2025 des Constellations.",
      details: "Chris A. Iradukunda (daqhris) figure parmi les artistes sélectionnés pour le programme de co-apprentissage.",
      link: {
        url: "https://cifas.be/fr/event/2025/constellations-2025/constellations-2025.html",
        text: "Jeter un coup d'œil un aux Constellations 2025",
        external: true
      }
    },
    {
      date: "Décembre 2024 - Janvier 2025",
      title: "Dépôt de Code: TwofoldAlienated",
      description: "Création d'un dépôt de code public sous la forme numérique git et open-source sur GitHub.",
      details: "Rassemblement de tous les documents liés au texte original en Anglais dans un environnement collaboratif et transparent.",
      link: {
        url: "https://github.com/daqhris/twofold-alienated",
        text: "Code source: twofold-alienated",
        external: true
      }
    },
    {
      date: "Janvier - Avril 2025",
      title: "Déroulement du CIFAS-Constellations",
      description: "Participation au programme de co-apprentissage Constellations du Centre International de Formation en Arts du Spectacle.",
      details: "Rencontres mensuelles d'artistes pluridisciplinaires à Bruxelles, développement collaboratif et exploration des méthodologies artistiques contemporaines.",
      link: {
        url: "/about",
        text: "En savoir plus sur le programme de co-apprentissage"
      },
      isHighlight: true
    },
    {
      date: "17 Mars 2025",
      title: "Prototype d'Interprétation Théâtrale",
      description: "Première réalisation théâtrale de l'œuvre par des comédien.ne.s sous forme de deux spectacles expérimentaux en Français.",
      details: "Performance au sein du Musée bruxellois de l'industrie et du travail (La Fonderie) dans le cadre des activités du CIFAS.",
      link: {
        url: "/performance",
        text: "Découvrir les enregistrements du prototype de performance"
      },
      isHighlight: true
    },
    {
      date: "4 Avril 2025",
      title: "Dépôt de Code: DoublementAliene",
      description: "Lancement des travaux visant à construire un dépôt de code avec du logiciel libre sur un espace numérique public.",
      details: "Création de l'infrastructure technique pour la plate-forme collaborative et l'interface web du projet.",
      link: {
        url: "https://github.com/daqhris/DoublementAliene",
        text: "Voir le code source du dépôt sur GitHub",
        external: true
      }
    },
    {
      date: "16 Avril 2025",
      title: "Clôture des Constellations 2025",
      description: "Clôture festive des rencontres mensuelles d'artistes dans le cadre des Constellations 2025 à Molenbeek, Bruxelles.",
      details: "Fin officielle des sessions de co-apprentissage, consolidation des acquis et préparation de la suite du projet."
    },
    {
      date: "22 Juin 2025",
      title: "Naissance du ResearchLab",
      description: "Début du sous-projet ResearchLab qui regroupe des réponses variées des IA à des questions de recherche artistique.",
      details: "Exploration des méthodologies de recherche artistique et intégration d'intelligences artificielles dans le processus créatif.",
      link: {
        url: "/research",
        text: "Visiter le laboratoire de recherche et les entretiens avec des IA"
      },
      isHighlight: true
    },
    {
      date: "24 Juin 2025",
      title: "Documentation de la Performance",
      description: "Publication de fichiers documentant la préparation du prototype performé le 17 Mars.",
      details: "Mise à disposition publique des documents de travail, notes de mise en scène et matériaux de préparation de la performance théâtrale.",
      link: {
        url: "https://github.com/daqhris/DoublementAliene/tree/main/public/Constellations2025",
        text: "Consulter la documentation utile pour la réalisation du prototype",
        external: true
      }
    },
    {
      date: "25 Juin 2025 à Maintenant",
      title: "Plate-forme Web Collaborative",
      description: "Développement d'une interface web faite sur mesure avec l'assistance de Devin AI.",
      details: "Construction d'une plate-forme numérique et open-source permettant la co-gestion des films tokenisés et le partage équitable des droits et revenus artistiques entre commédien.e.s.",
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
            Chronologie du Projet
          </h1>
          <p className="theater-subtitle">
            Suivez l&apos;évolution complète du projet &ldquo;Doublement Aliéné&rdquo; depuis sa conception textuelle jusqu&apos;à sa réalisation théâtrale en passant par la co-création de sa plate-forme numérique.
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

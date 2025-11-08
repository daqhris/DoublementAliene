import React from 'react';
import { Metadata } from 'next';
import TimelineGallery from '../../components/TimelineGallery';
import ImageGallery from '../../components/ImageGallery';
import PDFViewer from '../../components/PDFViewer';

export const metadata: Metadata = {
  title: 'Galerie - Doublement Aliéné | daqhris.com',
  description: 'Galerie des matériaux créatifs du prototype n°1 du spectacle',
};

export default function GalleryPage() {
  const constructionTimeline = [
    {
      date: '9 Mars 2025',
      title: 'Début de la Construction du Pied Fixateur',
      description: '1res étapes de construction du support en bois pour transformer le vélo en objet fixe',
      images: [
        {
          src: '/Constellations2025/Construction-SupportBois-VéloFixe/9Mars2025/9Mars-01.jpg',
          alt: 'Construction du support-trépied en bois - étape 1',
          caption: 'Début de construction de l\'ossature en bois'
        },
        {
          src: '/Constellations2025/Construction-SupportBois-VéloFixe/9Mars2025/9Mars-02.jpg',
          alt: 'Construction du support-trépied en bois - étape 2',
          caption: 'Rassemblement des pièces, découpe et prise de mesure'
        }
      ]
    },
    {
      date: '12 Mars 2025',
      title: 'Bricolage: Fixation du bois et Assemblage avec vélo',
      description: 'Assemblage des outils et composants de la structure vélo-trépied',
      images: [
        {
          src: '/Constellations2025/Construction-SupportBois-VéloFixe/12Mars2025/12Mars-01.jpg',
          alt: 'Assemblage principal - étape 1',
          caption: 'Assemblage de la structure fixant le vélo sur place'
        },
        {
          src: '/Constellations2025/Construction-SupportBois-VéloFixe/12Mars2025/12Mars-02.jpg',
          alt: 'Assemblage principal - étape 2',
          caption: 'Fixation sur vélo du trépied fait sur mesure'
        },
        {
          src: '/Constellations2025/Construction-SupportBois-VéloFixe/12Mars2025/12Mars-03.jpg',
          alt: 'Assemblage principal - étape 3',
          caption: 'Vérification de la stabilité du trépied'
        },
        {
          src: '/Constellations2025/Construction-SupportBois-VéloFixe/12Mars2025/12Mars-04.jpg',
          alt: 'Assemblage principal - étape 4',
          caption: 'Finalisation des découpes et de l\'assemblage'
        }
      ]
    },
    {
      date: '16 Mars 2025',
      title: 'Finitions et Tests du Vélo Fixe',
      description: 'Finitions du bricolage avec du bois de récup et 1ers tests de stabilité et d\'équilibre',
      images: [
        {
          src: '/Constellations2025/Construction-SupportBois-VéloFixe/16Mars2025/IMG_20250316_110808.jpg',
          alt: 'Tests de stabilité - vue 1',
          caption: 'Test de la structure assemblée'
        },
        {
          src: '/Constellations2025/Construction-SupportBois-VéloFixe/16Mars2025/IMG_20250316_110827.jpg',
          alt: 'Tests de stabilité - vue 2',
          caption: 'Vérification des fixations, vue de l\'arrière'
        },
        {
          src: '/Constellations2025/Construction-SupportBois-VéloFixe/16Mars2025/IMG_20250316_110840.jpg',
          alt: 'Tests de stabilité - vue 3',
          caption: 'Test de résistance et d\'équilibre du vélo'
        },
        {
          src: '/Constellations2025/Construction-SupportBois-VéloFixe/16Mars2025/IMG_20250316_110853.jpg',
          alt: 'Tests de stabilité - vue 4',
          caption: 'Contrôle de l\'alignement du trépied à l\'avant, vue du guidon'
        },
        {
          src: '/Constellations2025/Construction-SupportBois-VéloFixe/16Mars2025/IMG_20250316_110905.jpg',
          alt: 'Tests de stabilité - vue 5',
          caption: 'Validation semi-finale, alignement des roues, vue à ras du sol'
        },
        {
          src: '/Constellations2025/Construction-SupportBois-VéloFixe/16Mars2025/IMG_20250316_110916.jpg',
          alt: 'Tests de stabilité - vue 6',
          caption: 'Test d\'utilisation avec chaîne de vélo en mouvement'
        },
        {
          src: '/Constellations2025/Construction-SupportBois-VéloFixe/16Mars2025/IMG_20250316_110928.jpg',
          alt: 'Tests de stabilité - vue 7',
          caption: 'Derniers ajustements, vue en dessous du pédalier'
        }
      ]
    },
    {
      date: '17 Mars 2025',
      title: 'Préparation du Spectacle',
      description: 'Répétition matinale dans l\'atelier de bricolage le jour de la représentation théâtrale',
      images: [
        {
          src: '/Constellations2025/Construction-SupportBois-VéloFixe/17Mars2025/IMG_20250317_082337.jpg',
          alt: 'Préparation performance - vue 1',
          caption: 'Test d\'installation hors de l\'atelier, libre de vélo, vue de l\'avant'
        },
        {
          src: '/Constellations2025/Construction-SupportBois-VéloFixe/17Mars2025/IMG_20250317_082350.jpg',
          alt: 'Préparation performance - vue 2',
          caption: 'Positionnement final, vue d\'en haut du support-bois, sans vélo'
        },
        {
          src: '/Constellations2025/Construction-SupportBois-VéloFixe/17Mars2025/IMG_20250317_082356.jpg',
          alt: 'Préparation performance - vue 3',
          caption: 'Vérification de près des points d\'encrage des barres métalliques'
        },
        {
          src: '/Constellations2025/Construction-SupportBois-VéloFixe/17Mars2025/IMG_20250317_082444.jpg',
          alt: 'Préparation performance - vue 4',
          caption: 'Assemblage des pièces au complet'
        },
        {
          src: '/Constellations2025/Construction-SupportBois-VéloFixe/17Mars2025/IMG_20250317_082452.jpg',
          alt: 'Préparation performance - vue 5',
          caption: 'Prêt pour la représentation, la roue tourne!'
        },
        {
          src: '/Constellations2025/Construction-SupportBois-VéloFixe/17Mars2025/IMG_20250317_082509.jpg',
          alt: 'Préparation performance - vue 6',
          caption: 'Vue d\'en haut de la selle du vélo stationnaire'
        }
      ]
    }
  ];

  const stageSetupImages = [
    {
      src: '/Constellations2025/Scène-LieuPerformance/LieuPerformance_VestiaireAthlètes.jpg',
      alt: 'Lieu de performance - vestiaire athlètes',
      caption: 'Espace vestiaire des athlètes à La Fonderie'
    },
    {
      src: '/Constellations2025/Scène-LieuPerformance/LieuPerformance_EntréeScène.jpg',
      alt: 'Lieu de performance - entrée scène',
      caption: 'Entrée de l\'espace scénique: un centre de données'
    },
    {
      src: '/Constellations2025/Scène-LieuPerformance/LieuPerformance_ScèneVéloFixe.jpg',
      alt: 'Lieu de performance - scène avec vélo fixe',
      caption: 'Scène principale avec installation du vélo fixe'
    },
    {
      src: '/Constellations2025/Scène-LieuPerformance/LieuPerformance_SortieScène.jpg',
      alt: 'Lieu de performance - sortie scène',
      caption: 'Sortie de l\'espace de performance'
    },
    {
      src: '/Constellations2025/Scène-LieuPerformance/LieuPerformance_ProjectionAudience.jpg',
      alt: 'Lieu de performance - projection audience',
      caption: 'Espace de projection pour l\'audience'
    }
  ];

  const feedbackImages = [
    {
      src: '/Constellations2025/Feedback-ConceptReflexion/Notes_Détails_Reflections.jpg',
      alt: 'Session de feedback - notes et réflexions',
      caption: 'Notes détaillées et réflexions post-performance'
    },
    {
      src: '/Constellations2025/Feedback-ConceptReflexion/Post-Its_Cercles_Concepts.jpg',
      alt: 'Session de feedback - post-its conceptuels',
      caption: 'Post-its et cercles conceptuels des échanges'
    }
  ];

  return (
    <div className="theater-container py-12">
      <div className="theater-section-header mb-12">
        <h1 className="theater-heading-lg mb-4">Galerie Photos + Dessins</h1>
        <p className="theater-subtitle max-w-3xl">
          Ici est raconté le processus d&apos;élaboration du prototype n°1 du spectacle. 
          On part de la construction d&apos;un support-vélo en bois à l&apos;interprétation du 1er prototype en privé 
          pour aboutir à des réflexions conceptuelles et des dessins numérisés.
        </p>
      </div>

      <TimelineGallery
        title="Menuiserie Artisanale"
        description="La préparation scénique a commencé par la construction manuelle d'un support en bois pour rendre un vélo stationnaire l'élément central du spectacle théâtral."
        items={constructionTimeline}
      />

      <ImageGallery
        title="Scène et Lieu de Performance"
        description="Découvrez l'espace servant de scène de performance à La Fonderie où s'est déroulée la performance du 17 Mars 2025."
        images={stageSetupImages}
      />

      <ImageGallery
        title="Session de Feedback: Concept Réflexion"
        description="Moments de réflexion et d'échanges conceptuels à la fin des deux représentations théâtrales. Cette session était dirigée par l&apos;étoile polaire de l&apos;édition 2025 (et preneuse des images ci-dessous), l&apos;artiste et metteuse en scène Anna Rispoli. 
        La méthode de feedback choisie était celle du concept réflexion, écrit et imagé. Les réflexions ont été écrites sur papiers post-it par des artistes constellés et des organisatrices du CIFAS avant d&apos;être positionées par Chris Iradukunda au point approprié dans des cercles concentriques. 
        Toute personne présente a su contribuer volontairement de deux manières: en adossant le rôle de comédien sur scène et puis, en partageant les idées de critique bienveillante. La cérise sur le gâteau: la promesse d'octroyer les titres de co-auteur.ice.s a été honorée à la fin de la session."
        images={feedbackImages}
      />

      <section className="theater-section mb-12">
        <div className="theater-section-header mb-8">
          <h2 className="theater-heading-md mb-4">Dessins Artistiques</h2>
          <p className="theater-subtitle">
            Deux documents porteurs des réactions dessinées par les athlètes. Ils ont été numérisés par l&apos;assistant par après. Ces fichiers PDF sont à associer aux deux court-métrages filmés simultanément.
          </p>
        </div>
        
        <div className="space-y-8">
          <PDFViewer
            src="/Constellations2025/Dessins-PapiersNumérisés/1erGroupe-Dessins.pdf"
            title="Collection de Dessins - Partie 1"
            description="1re série de dessins créés pendant les spectacles, illustrant les réactions visuelles des athlètes."
          />

          <PDFViewer
            src="/Constellations2025/Dessins-PapiersNumérisés/2èmeGroupe-Dessins.pdf"
            title="Collection de Dessins - Partie 2"
            description="2de série de créations artistiques faites pendant la performance, accompagnant les courts-métrages."
          />
        </div>
      </section>

    </div>
  );
}

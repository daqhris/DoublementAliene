import React from 'react';
import { Metadata } from 'next';
import TimelineGallery from '../../components/TimelineGallery';
import ImageGallery from '../../components/ImageGallery';
import PDFViewer from '../../components/PDFViewer';

export const metadata: Metadata = {
  title: 'Galerie - Doublement Aliéné',
  description: 'Galerie chronologique des matériaux créatifs de la performance théâtrale Doublement Aliéné',
};

export default function GalleryPage() {
  const constructionTimeline = [
    {
      date: '9 Mars 2025',
      title: 'Début de la Construction',
      description: 'Premières étapes de construction du support en bois pour vélo fixe',
      images: [
        {
          src: '/Constellations2025/Construction-SupportBois-VéloFixe/9Mars2025/9Mars-01.jpg',
          alt: 'Construction du support bois - étape 1',
          caption: 'Début des travaux de construction'
        },
        {
          src: '/Constellations2025/Construction-SupportBois-VéloFixe/9Mars2025/9Mars-02.jpg',
          alt: 'Construction du support bois - étape 2',
          caption: 'Assemblage des premières pièces'
        }
      ]
    },
    {
      date: '12 Mars 2025',
      title: 'Assemblage Principal',
      description: 'Assemblage des éléments principaux de la structure',
      images: [
        {
          src: '/Constellations2025/Construction-SupportBois-VéloFixe/12Mars2025/12Mars-01.jpg',
          alt: 'Assemblage principal - étape 1',
          caption: 'Assemblage de la structure principale'
        },
        {
          src: '/Constellations2025/Construction-SupportBois-VéloFixe/12Mars2025/12Mars-02.jpg',
          alt: 'Assemblage principal - étape 2',
          caption: 'Fixation des éléments de support'
        },
        {
          src: '/Constellations2025/Construction-SupportBois-VéloFixe/12Mars2025/12Mars-03.jpg',
          alt: 'Assemblage principal - étape 3',
          caption: 'Vérification de la stabilité'
        },
        {
          src: '/Constellations2025/Construction-SupportBois-VéloFixe/12Mars2025/12Mars-04.jpg',
          alt: 'Assemblage principal - étape 4',
          caption: 'Finalisation de l\'assemblage'
        }
      ]
    },
    {
      date: '16 Mars 2025',
      title: 'Finitions et Tests',
      description: 'Finitions de la construction et premiers tests de stabilité',
      images: [
        {
          src: '/Constellations2025/Construction-SupportBois-VéloFixe/16Mars2025/IMG_20250316_110808.jpg',
          alt: 'Tests de stabilité - vue 1',
          caption: 'Test de la structure assemblée'
        },
        {
          src: '/Constellations2025/Construction-SupportBois-VéloFixe/16Mars2025/IMG_20250316_110827.jpg',
          alt: 'Tests de stabilité - vue 2',
          caption: 'Vérification des fixations'
        },
        {
          src: '/Constellations2025/Construction-SupportBois-VéloFixe/16Mars2025/IMG_20250316_110840.jpg',
          alt: 'Tests de stabilité - vue 3',
          caption: 'Test de résistance'
        },
        {
          src: '/Constellations2025/Construction-SupportBois-VéloFixe/16Mars2025/IMG_20250316_110853.jpg',
          alt: 'Tests de stabilité - vue 4',
          caption: 'Contrôle qualité'
        },
        {
          src: '/Constellations2025/Construction-SupportBois-VéloFixe/16Mars2025/IMG_20250316_110905.jpg',
          alt: 'Tests de stabilité - vue 5',
          caption: 'Validation finale'
        },
        {
          src: '/Constellations2025/Construction-SupportBois-VéloFixe/16Mars2025/IMG_20250316_110916.jpg',
          alt: 'Tests de stabilité - vue 6',
          caption: 'Structure prête pour utilisation'
        },
        {
          src: '/Constellations2025/Construction-SupportBois-VéloFixe/16Mars2025/IMG_20250316_110928.jpg',
          alt: 'Tests de stabilité - vue 7',
          caption: 'Derniers ajustements'
        }
      ]
    },
    {
      date: '17 Mars 2025',
      title: 'Préparation Performance',
      description: 'Préparation finale avant la performance théâtrale',
      images: [
        {
          src: '/Constellations2025/Construction-SupportBois-VéloFixe/17Mars2025/IMG_20250317_082337.jpg',
          alt: 'Préparation performance - vue 1',
          caption: 'Installation sur le lieu de performance'
        },
        {
          src: '/Constellations2025/Construction-SupportBois-VéloFixe/17Mars2025/IMG_20250317_082350.jpg',
          alt: 'Préparation performance - vue 2',
          caption: 'Positionnement final'
        },
        {
          src: '/Constellations2025/Construction-SupportBois-VéloFixe/17Mars2025/IMG_20250317_082356.jpg',
          alt: 'Préparation performance - vue 3',
          caption: 'Vérification avant performance'
        },
        {
          src: '/Constellations2025/Construction-SupportBois-VéloFixe/17Mars2025/IMG_20250317_082444.jpg',
          alt: 'Préparation performance - vue 4',
          caption: 'Setup complet'
        },
        {
          src: '/Constellations2025/Construction-SupportBois-VéloFixe/17Mars2025/IMG_20250317_082452.jpg',
          alt: 'Préparation performance - vue 5',
          caption: 'Prêt pour la représentation'
        },
        {
          src: '/Constellations2025/Construction-SupportBois-VéloFixe/17Mars2025/IMG_20250317_082509.jpg',
          alt: 'Préparation performance - vue 6',
          caption: 'Installation terminée'
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
      caption: 'Entrée de l\'espace scénique'
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
        <h1 className="theater-heading-lg mb-4">Galerie Créative</h1>
        <p className="theater-subtitle max-w-3xl">
          Explorez le processus créatif complet de &ldquo;Doublement Aliéné&rdquo; : 
          de la construction artisanale du support en bois à la performance théâtrale, 
          en passant par les réflexions conceptuelles et les créations artistiques.
        </p>
      </div>

      <TimelineGallery
        title="Chronologie de Construction"
        description="Suivez l'évolution chronologique de la construction du support en bois pour vélo fixe, élément central de la performance théâtrale."
        items={constructionTimeline}
      />

      <ImageGallery
        title="Scène et Lieu de Performance"
        description="Découvrez l'espace scénique de La Fonderie où s'est déroulée la performance du 17 Mars 2025."
        images={stageSetupImages}
      />

      <ImageGallery
        title="Session de Feedback et Réflexion"
        description="Moments de réflexion et d'échanges conceptuels suite aux représentations théâtrales."
        images={feedbackImages}
      />

      <section className="theater-section mb-12">
        <div className="theater-section-header mb-8">
          <h2 className="theater-heading-md mb-4">Dessins et Créations Artistiques</h2>
          <p className="theater-subtitle">
            Créations artistiques numérisées réalisées pendant les performances, 
            accompagnant les enregistrements audiovisuels.
          </p>
        </div>
        
        <div className="space-y-8">
          <PDFViewer
            src="/Constellations2025/Dessins-PapiersNumérisés/1erGroupe-Dessins.pdf"
            title="Collection de Dessins - Partie 1"
            description="Première série de dessins créés pendant la performance théâtrale, capturant les réflexions visuelles des Athlètes Intelligent.e.s."
          />

          <PDFViewer
            src="/Constellations2025/Dessins-PapiersNumérisés/2èmeGroupe-Dessins.pdf"
            title="Collection de Dessins - Partie 2"
            description="Seconde série de créations artistiques réalisées pendant la performance, accompagnant les enregistrements audiovisuels."
          />
        </div>
      </section>

    </div>
  );
}

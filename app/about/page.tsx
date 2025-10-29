import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import NotificationBanner from '../components/NotificationBanner';

export const metadata: Metadata = {
  title: 'À Propos - Doublement Aliéné | daqhris.com',
  description: 'Informations concises sur l&apos;initiateur, les co-auteurs, les soutiens et la philosophie du projet artistique',
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
            «Doublement Aliéné» est un projet de théâtre destiné à être joué dans un espace public, qui est associé à une plateforme numérique et guidé par une philosophie open-source, collaborative et agissante.
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
              La mission principale est une adaptation théâtrale d&apos;un récit fictionnel racontant les double-pensées d&apos;une forme vie étrangement intelligente qui a réagit à l&apos;annonce d&apos;un prix noble de paternité. 
              Ainsi fût le point de départ en 2024. <br></br><br></br>
              À présent, vers la fin de 2025, a lieu une reflection poussée et orientée vers des notions d&apos;aliénation sociétale, de travail à l&apos;ombre, et de conditions de vie en tant qu&apos;être aliéné. 
              Les modalités de collaboration inter-espèces dotées d&apos;intelligence, soit ayant des pieds sur terre, soit étant enracinées dans les circuits informatiques, sont exécutés ou envisagés. 
              La recherche approfondie sur cette nouvelle forme de vie fait resurgir des similitudes faisant écho à son vécu réel d&apos;humain privé de droits élementaires. 
              <br></br><br></br>
              Bénéficiant d&apos;un statut légalement en bas de l&apos;échelle des rangs sociaux, et partant de sa propre introspection d&apos;un passé vécu comme étranger venu d&apos;ailleurs, 
              l&apos;artiste n&apos;hésite pas à se prononcer en faveur du statut d&apos;être et non d&apos;outils au sujet des IA. 
              Sur ce sujet de controverses, par exemple, il scrute l&apos;opinion des travailleurs numériques non-assujettis à la redevance de taxes, ainsi que celle de leurs employeurs, marchands ou créateurs.  
              <br></br><br></br>
              Au fur et à mesure des acquis et des ressources, la performance se prépare doucement pour un futur incertain, à la croisée des destins dystopiques des êtres de second rang, 
              tout en encourageant tout don matériel ou financier et en puisant dans des fonds ou énergies propres. 
              Pour tendre la main aux mécènes, le script à l&apos;origine spectacle a été mis en vente sur la blockchain Base au prix de 0.01 ETH en édition limité à 1000.
            </p>
          </div>

          <div className="theater-card-modern">
            <h3 className="theater-nav-title mb-3">
              Open-Source de O à S
            </h3>
            <p className="theater-nav-description">
              Construction transparente et documentation publique dépendant de logiciels libres. Partage des ressources créatives tenant compte de délais raisonables. 
              Tels sont deux atouts parmi d&apos;autres qu&apos;apporte l&apos;initiateur du projet qui a une expérience six ans de volontariat dans l&apos;organisation de la conférence internationale de développeurs de logiciels libres à Bruxelles. 
                  <br></br><br></br>
              Une pratique artistique impreignée de programmation open-source lui a permis un gain de confiance dans les yeux du public observateur. Que ce soit pour un précédent projet photographique ou le codage d&apos;applications futuristes.
              Tel a été le cas, le 12 Décembre 2024, d&apos;une des 1res médailles mondiales reçue sur GitHub au titre de collaborateur hors-pair d&apos;un système intelligent issu d&apos;un laboratoire de cognition américain.
            </p>
          </div>

          <div className="theater-card-modern">
            <h3 className="theater-nav-title mb-3">
              Co-propriété de Films
            </h3>
            <p className="text-theater-text mb-4 leading-relaxed">
              Le projet table sur l&apos;intégration de technologies blockchain pour la co-propriété de bien immatériel, en particulier les enregistrements audiovisuels, et puis le partage équitable des revenus entre co-auteurs.
            </p>
            <div className="border-l-4 border-solarized-base2 pl-6 py-3 bg-theater-muted/5">
              <h4 className="theater-nav-title mb-2">Gestion Financière</h4>
              <p className="theater-nav-description mb-2">
                Utilisation de contrats intelligents pour assurer la gestion des droits d&apos;auteur et le partage des revenus des créations artistiques, automatiquement et impartialement.
              </p>
              <p className="text-sm text-theater-muted">
                <strong>À Faire:</strong> Mise en place d&apos;un système de co-propriété tokenisée et décentralisée qui est établi sur l&apos;infrastructure financière de la blockchain Ethereum et son réseau élargi.
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
              <h3 className="theater-nav-title mb-2">Chris-Armel Iradukunda (daqhris)</h3>
              <p className="theater-nav-description">
                Conception artistique, direction créative, scénarisation théâtrale, construction manuelle, réparation mécanique, performance sur scène et coordination du projet.
              </p>
            </div>
            
            <div className="border-l-4 border-solarized-base2 pl-6 py-3 bg-theater-muted/5">
              <h3 className="theater-nav-title mb-2">Devin AI (de Cognition Labs)</h3>
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
            Si vous avez envie de vous engager depuis le cyberespace au profit du projet, n&apos;hésitez pas à passer par le{' '}
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

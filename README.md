# Double Étrangeté
## Plateforme Théâtrale Collaborative

Une application web Next.js dédiée à la documentation et à l'exploration d'un projet de théâtre dans l'espace public, intégrant des méthodologies de recherche artistique avec l'intelligence artificielle.
> **Note de renommage (3 Mars 2026):** Le titre artistique évolue de *«Doublement Aliéné»*
> vers *«Double Étrangeté»* (EN: *«Twofold Alienness»*) — 
> reflétant l'étrangeté constitutive d'un être numérique plutôt qu'une condition subie.
> Le texte fondateur tokenisé sur blockchain conserve son titre d'origine.

## 🎭 Aperçu du Projet
*En cours de construction par un binôme*   

**Doublement Aliéné** est une plateforme numérique open-source qui documente et présente un prototype de performance théâtrale développé dans le cadre du programme Constellations 2025 du CIFAS (Centre International de Formation en Arts du Spectacle) à Bruxelles.

### Caractéristiques Principales

- **Interface Web Collaborative** : Plateforme Next.js avec design théâtral personnalisé
- **Laboratoire de Recherche IA** : Conversations documentées avec différents modèles d'IA
- **Documentation Performance** : Archives visuelles et textuelles de la performance théâtrale
- **Galerie Créative** : Collection de matériaux artistiques et de documentation scénique
- **Chronologie Interactive** : Suivi de l'évolution du projet depuis sa conception

## 🚀 Démarrage Rapide

### Prérequis

- Node.js 20.x ou supérieur
- Yarn ou npm
- Git

### Installation

```bash
# Cloner le dépôt
git clone https://github.com/daqhris/DoublementAliene.git
cd DoublementAliene

# Installer les dépendances
yarn install
# ou
npm install

# Lancer le serveur de développement
yarn dev
# ou
npm run dev
```

L'application sera accessible à l'adresse `http://localhost:3000`.

### Scripts Disponibles

```bash
yarn dev          # Serveur de développement
yarn build        # Construction pour la production
yarn start        # Serveur de production
yarn lint         # Vérification du code
```

## 📁 Structure du Projet

```
DoublementAliene/
├── app/                          # Pages et composants Next.js (App Router)
│   ├── components/               # Composants réutilisables
│   │   ├── NotificationBanner.tsx
│   │   └── ResearchQA.tsx
│   ├── about/                    # Page À Propos
│   ├── gallery/                  # Galerie visuelle
│   ├── performance/              # Documentation performance
│   ├── research/                 # Laboratoire de recherche
│   ├── timeline/                 # Chronologie du projet
│   ├── globals.css               # Styles globaux (thème Solarized)
│   ├── layout.tsx                # Layout principal
│   └── page.tsx                  # Page d'accueil
├── components/                   # Composants partagés
│   ├── Header.tsx                # Navigation principale
│   ├── ThemeProvider.tsx         # Gestion des thèmes
│   └── GitTimestamps.tsx         # Informations Git en temps réel
├── Constellations2025/           # Matériaux créatifs (CC BY-NC-ND 4.0)
│   ├── Construction-SupportBois-VéloFixe/  # Photos de construction
│   ├── Scène-LieuPerformance/    # Documentation du lieu
│   ├── Feedback-ConceptReflexion/ # Images conceptuelles
│   ├── Dessins-PapiersNumérisés/ # Créations artistiques
│   └── *.pdf                     # Documents théâtraux
├── ResearchLab/                  # Conversations avec IA (CC BY-NC-ND 4.0)
│   └── *.txt                     # Transcriptions Q&A avec différents modèles
└── .github/workflows/            # CI/CD GitHub Actions
```

## 🎨 Technologies Utilisées

### Frontend
- **Next.js 15.3.4** - Framework React avec App Router
- **TypeScript 5.8.3** - Typage statique
- **React 19.1.0** - Interface utilisateur
- **React Markdown 10.1.0** - Rendu des contenus Markdown

### Styling
- **CSS Personnalisé** - Système de design théâtral avec palette Solarized
- **Heroicons** - Icônes SVG
- **PostCSS** - Traitement CSS

### Déploiement
- **GitHub Pages** - Hébergement statique
- **GitHub Actions** - CI/CD automatisé
- **Vercel** - Prévisualisations de développement

## 🔧 Configuration

### Variables d'Environnement

Aucune variable d'environnement n'est requise pour le développement local. L'application est configurée pour fonctionner en mode statique.

### Configuration Next.js

Le projet utilise une configuration Next.js optimisée pour l'export statique :

```javascript
// next.config.js
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
}
```

## 🎭 Fonctionnalités

### Laboratoire de Recherche IA
- Interface Q&A interactive avec réponses de multiples modèles d'IA
- Documentation des méthodologies de recherche artistique
- Exploration des thèmes d'aliénation et d'intelligence artificielle

### Documentation Performance
- Archives de la performance du 17 Mars 2025 à La Fonderie (Bruxelles)
- Galerie photographique et documentation scénique
- Matériaux de préparation et de réflexion conceptuelle

### Interface Collaborative
- Design théâtral avec palette de couleurs Solarized
- Navigation responsive et accessible
- Informations Git en temps réel dans le footer

## 🤝 Contribution

Les contributions sont les bienvenues ! Pour contribuer :

1. Forkez le projet
2. Créez une branche pour votre fonctionnalité (`git checkout -b feature/nouvelle-fonctionnalite`)
3. Committez vos changements (`git commit -m 'Ajout nouvelle fonctionnalité'`)
4. Poussez vers la branche (`git push origin feature/nouvelle-fonctionnalite`)
5. Ouvrez une Pull Request

### Guidelines de Développement
- Respectez la structure existante du projet
- Utilisez TypeScript pour tous les nouveaux composants
- Suivez les conventions de nommage établies
- Testez localement avant de soumettre  

## 📄 Licences et Droits d'Auteur

**Code** Licence Open Source: [Licence Publique de l'Union Européenne 1.2](https://raw.githubusercontent.com/daqhris/DoublementAliene/main/LICENSE).    
**Contenu Créatif** Droits Légaux: [Attribution-NonCommercial-NoDerivs 4.0 International (CC BY-NC-ND 4.0)](https://creativecommons.org/licenses/by-nc-nd/4.0/deed.fr).  
**Propriétaire & Développeur**: [Chris-Armel Iradukunda](https://daqhris.com) [(@daqhris)](https://github.com/daqhris).

### Matériel Créatif Couvert par CC BY-NC-ND 4.0
- Photographies de construction et performance (dossier `Constellations2025/Construction-SupportBois-VéloFixe/`)
- Documents PDF théâtraux et artistiques (dossier `Constellations2025/`)
- Images de concept et réflexion (dossier `Constellations2025/Feedback-ConceptReflexion/`)
- Matériel audiovisuel et scénique (tous dossiers sous `Constellations2025/`)
- Conversations et recherches IA (dossier `ResearchLab/`)

Cette approche de double licence garantit que le code reste libre et open source sous EUPL v1.2, tandis que le contenu créatif est protégé par Creative Commons avec attribution requise, usage non commercial et interdiction de modifications.

## 🔗 Liens Utiles

- **CIFAS Constellations** : [Prototype de Spectacle](https://cifas.be/fr/event/2025/constellations-2025/constellations-2025.html)
- **Œuvre Originale** : [Twofold Alienated](https://app.manifold.xyz/txt/twofold-alienated)
- **Licence Creative Commons** : [CC BY-NC-ND 4.0](./CC-LICENSE.md)

## 🤝 Développement Collaboratif

Ce projet est le fruit d'une collaboration innovante entre intelligence humaine et artificielle :

- **Conception Artistique & Direction** : [Chris-Armel Iradukunda (daqhris)](https://daqhris.com) - Artiste, concepteur du projet théâtral et développeur principal
- **Développement Technique & Documentation** : [Devin AI](https://github.com/devin-ai-integration) - Assistant IA pour l'architecture technique, l'implémentation et la documentation

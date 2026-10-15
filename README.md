# FPTSD — Plateforme web institutionnelle

## Présentation

FPTSD (Formation Professionnelle en Travail Social et Développement) est un projet de plateforme web institutionnelle destiné à présenter l'établissement, ses activités et ses actualités.

Le projet vise à proposer une interface moderne, responsive et accessible, avec une architecture permettant de séparer le frontend de la partie backend.

**État du projet : en cours de développement.**

## Objectifs

* Présenter les informations institutionnelles.
* Faciliter la consultation des actualités.
* Préparer la gestion des contenus.
* Proposer une interface adaptée aux ordinateurs, tablettes et téléphones.
* Préparer la communication avec le backend au moyen d'une API REST.

## Technologies du frontend

* **React 19** — construction de l'interface utilisateur.
* **Vite 7** — environnement de développement et compilation.
* **Bootstrap 5** — mise en page responsive.
* **React Bootstrap** — composants d'interface.
* **React Router** — gestion de la navigation.
* **Axios** — communication HTTP avec les API.
* **Framer Motion** — animations.
* **React Icons** — icônes.

## Fonctionnalités prévues

* Présentation de l'établissement.
* Consultation des actualités.
* Navigation entre les rubriques institutionnelles.
* Interface d'administration.
* Gestion des contenus.
* Communication avec une API REST.
* Affichage responsive.

Les fonctionnalités disponibles et celles qui restent à développer seront précisées au fur et à mesure de l'avancement du projet.

## Architecture envisagée

* **Frontend :** React.js et Vite.
* **Backend :** Laravel et PHP.
* **Base de données :** MySQL.
* **Communication :** API REST avec Axios.

Le backend et la base de données doivent être configurés séparément du frontend.

## Prérequis

* Node.js et npm.
* Un environnement de développement compatible avec Vite.

## Installation du frontend

### 1. Récupérer le projet

Cloner le dépôt Git lorsque celui-ci sera publié, ou utiliser une copie locale du projet.

### 2. Installer les dépendances

```bash
npm install
```

### 3. Démarrer le serveur de développement

```bash
npm run dev
```

### 4. Compiler pour la production

```bash
npm run build
```

Les fichiers générés sont placés dans le dossier `dist/`.

### 5. Prévisualiser la version compilée

```bash
npm run preview
```

## Qualité du code

Pour lancer l'analyse ESLint :

```bash
npm run lint
```

## Configuration

Les paramètres de connexion à l'API devront être adaptés à l'environnement local ou à la production. Ne publiez jamais de mots de passe, de clés privées ou de secrets dans le dépôt.

## Auteur

Hasiniaina — Développeur Web Full-Stack.

## Licence et publication

La licence et les conditions de publication du code restent à définir. Avant toute publication publique, vérifier les autorisations relatives aux contenus, aux logos, aux données et aux éléments appartenant à l'établissement.


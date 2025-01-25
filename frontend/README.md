# Guide de déploiement

## 1. Introduction
* L'application "Sous l'Ocean" est 
* Expliquer les objectifs du guide
* Lister les prérequis pour suivre ce guide (matériel, logiciels, configuration minimale du serveur)
## 2. Préparation du serveur
* Étapes pour installer les outils nécessaires : 
    - **Node.js** (et npm/yarn)
    - **MongoDB**
    - Serveur web (exemple : **NGINX** ou **Apache**)
* Configuration réseau (ouverture des ports nécessaires)
* Paramètres de sécurité de base:
    - Mise à jour du système
    - Configuration du pare-feu (exemple : UFW ou iptables)
## 3. Configuration de la base de données MongoDB
* Installation et initialisation de MongoDB
* Création de l'utilisateur et de la base de données
* Configuration des permissions pour l'application
## 4. Déploiement de l'application React
* Compilation de l'application pour la production (build)
* Transfet des fichiers vers le serveur (exemple : SCP, rsync)
* Configuration d'un serveur web (NGINX ou Apache) pour servir les fichiers statiques
## 5. Backend et API
* Explication de la connexion entre l'application React et MongoDB
* Configuration du reverse proxy (exemple : NGINX)
* Mise en place et test de l'API (exemple : Express.js) *SI CONCERNÉ*
## 6. Mise en Production
* Déploiement d'un gestionnaire de processus (exemple  : **PM2** pour Node.js)
* Configuration du reverse proxy (exemple : NGINX)
* Certificat SSL (via **Let's Encrypt**) pour securiser l'application (*Facultatif*)
* Test de l'accès public à l'application
## 7. Sécurisation de l'environnement
* Protection des données sensibles (gestion des fichiers .env)
* Bonnes pratiques de sécurité pour MongoDB (authentification, restrictions d'accès)
* Configuration HTTPS
## 8. Résolution des problèmes
* Liste des problèmes courants lors du déploiement (erreurs de connexion, dépendances manquantes, etc)
* Solutions et ressources
## 9. Conclusion
* Synthèse des étapes réalisées
* Conseils pour le maintien en condition opérationnelle de l'application


This project was bootstrapped with [Create React AppLayout](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React AppLayout documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web AppLayout

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

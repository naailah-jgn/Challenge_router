# ChallengeRouter

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.0.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


# CREER UN ROUTING DANS APP.ROUTES.TS

Créer un nouveau projet avec le CLI Angular en répondant N à la fameuse question Would you like to add Angular routing?

Créer deux nouveaux composants home et contact avec le CLI (on utilise le html généré par défaut)

Créer un nouveau fichier app.routes.ts dans le dossier src/app

Importer le type Routes du module Angular @angular/router dans ton fichier app.routes.ts

Déclarer un tableau de type Routes qui va contenir deux objets, un pour chaque route

Le premier objet aura pour chemin home, et comme composant HomeComponent

Le deuxième objet aura pour chemin contact, et comme composant ContactComponent

Exporter ton tableau de type Routes avec le mot-clé export du fichier app.routes.ts
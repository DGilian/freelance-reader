# freelance-reader

Application de relecture des contrats.

L'objectif est de mettre en évidence les pièges d'un contrat lors d'une mission de freelancing.

Travail en cours.

La partie listant les clauses à éviter, notament, reste au stade experimental. N'hésitez pas a me donner vos retours sur les pistes à améliorer.

Démo : https://sbenard.github.io/freelance-reader/

Contrat utilisé pour l'exemple : https://github.com/tibastral/contrats-francais/blob/master/src/cga.md

## Installation

1.  Récupérer le code dans votre espace de travail

```sh
$ git clone https://github.com/sbenard/freelance-reader.git
```

2.  Installer les dépendances

```sh
$ npm install

# ou si vous utilisez yarn

$ yarn install
```

3.  Commencer à coder

```sh
$ npm run dev

# ou si vous utilisez yarn

$ yarn dev
```

## Roadmap

* [x] Listing des pièges d'un contrat
* [ ] Résumé
  * [x] Présentation des éléments selectionnés
  * [ ] Export / partage du résumé
* [ ] Configuration
  * [ ] Liste paramétrable par l'utilisateur
  * [ ] Import / Export du listing
  * [ ] Sauvegarde dans le cache
* [ ] Gérer le pdf

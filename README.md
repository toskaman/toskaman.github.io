# Portfolio GitHub Pages

Site portfolio statique pour presenter des projets, competences et liens de contact.

URL publique : `https://toskaman.github.io/msdos/`

Le depot source `toskaman.github.io` est prive. Le site est publie via le depot public de deploiement `msdos`, car le plan GitHub actuel ne supporte pas GitHub Pages directement depuis ce depot prive.

Version actuelle : mai 2026, avec parcours informatique, Lua, APIs, IA, modeles locaux, serveurs de jeux et contacts publics.

## Modifier le contenu

- `index.html` : textes, projets, liens GitHub/Discord/email. Chaque projet est une `article.card` dans un groupe (`card--sm`, `card--lg` ou `card--xl` pour la taille).
- `styles.css` : tokens de couleurs (theme sombre/clair), typographie, responsive, visuels des cartes.
- `script.js` : traductions FR/EN, recherche, filtres, theme clair/sombre, champ ASCII anime du hero, terminal, compteurs, fenetre de detail des projets.
- `assets/fonts/` : polices Geist et Geist Mono auto-hebergees (licence SIL OFL, voir `OFL.txt`).
- `assets/favicon.svg` : icone du site.

Contacts configures :

- `https://github.com/toskaman`
- `mailto:toskaman5962+portfolio@gmail.com`
- Discord : `therealcopper`

## Publier sur GitHub Pages

1. Cree un depot GitHub, par exemple `portfolio`.
2. Ajoute ces fichiers a la racine du depot.
3. Va dans `Settings` > `Pages`.
4. Source : `Deploy from a branch`.
5. Branch : `main`, dossier `/root`.
6. GitHub donnera une URL du type `https://ton-pseudo.github.io/portfolio/`.

Ce dossier est le depot source prive. Pour publier, pousser une copie statique vers le depot public `msdos`.

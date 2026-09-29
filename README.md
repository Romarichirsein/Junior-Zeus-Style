# Junior Zeus Style — Maison de Haute Mode & Confection Sur Mesure (Yaoundé)

Site web officiel, éditorial, bilingue (Français/Anglais), haut de gamme et administrable pour la maison de création de mode camerounaise **Junior Zeus Style**, fondée par le styliste **Ariel Junior Nzesseu** (« Junior Zeus »).

---

## 1. Contexte & Identité de la Marque

- **Nom :** Junior Zeus Style
- **Fondateur & Styliste :** Ariel Junior Nzesseu (Junior Zeus)
- **Localisation :** Yaoundé, Cameroun (Descente Éleveur, en face de Turbo / Ngousso)
- **WhatsApp Principal :** `+237 691 087 382`
- **Téléphone secondaire à valider :** `+237 671 621 140`
- **E-mail professionnel :** `contact@juniorzeusstyle.com`
- **E-mail de secours :** `juniortamno13@gmail.com`
- **Domaine existant :** `juniorzeusstyle.com`
- **Activité :** Stylisme, confection sur mesure, costumes de cérémonie, tuniques d’apparat contemporaines et créations de collections.

---

## 2. Architecture & Pages

- **Bilinguisme intégral :** Français par défaut, Anglais optionnel (mémorisé dans le navigateur).
- **Thème Sombre / Clair :** Mode sombre sur mesure (Noir encre `#0B0B0C`, accents bronze `#9C7A4B`, ivoire chaud `#F5F1E8`).
- **Arborescence :**
  1. **Accueil (`/fr`, `/en`) :** Hero immersif d'atelier, manifeste de marque, créations en lumière, 5 étapes du geste d'atelier, la signature de la maison, journal et pied de page complet.
  2. **Catalogue (`/fr/catalogue`, `/en/catalogue`) :** Filtres par catégorie, disponibilité, recherche, fiches détaillées, matières, temps de confection, et bouton WhatsApp avec nom prérempli.
  3. **À Propos (`/fr/a-propos`, `/en/about`) :** Portrait du créateur, histoire de l’atelier, valeurs sartoriales, atmosphère de l'espace de confection à Yaoundé.
  4. **Journal (`/fr/actualites`, `/en/journal`) :** Chroniques d'atelier, articles de fond, vue de lecture dédiée et suggestions de lecture.
  5. **Contact (`/fr/contact`, `/en/contact`) :** Coordonnées à Yaoundé, bouton WhatsApp dominant, formulaire de contact sécurisé avec honeypot anti-spam.
  6. **Mentions Légales & Confidentialité :** Cadre juridique, protection des données personnelles.
  7. **Studio Sanity (Gestionnaire CMS intégré) :** Interface d'administration pour tester l'ajout et l'édition de pièces, la personnalisation des messages WhatsApp, les requêtes GROQ et le guide utilisateur.

---

## 3. Design System & Palette

- **Noir encre :** `#0B0B0C` (60% fond sombre / typographie claire)
- **Ivoire chaud :** `#F5F1E8` (60% fond clair / typographie sombre)
- **Sable doux :** `#C8B79C` (30% surfaces et séparateurs)
- **Brun cacao :** `#3C2C26` (textures profondes)
- **Accent bronze discret :** `#9C7A4B` (10% actions, bordures fines et repères de style)
- **Blanc cassé :** `#FBFAF7`
- **Typographie :**
  - Titres et citations : *Cormorant Garamond* (Serif éditoriale haute couture)
  - Corps de texte et interface : *Plus Jakarta Sans* (Sans-serif géométrique lisible)
- **Discipline Anti-Slop :** Zéro pill badge pour les métadonnées (texte brut séparé par des `·`), typographie naturelle, respect strict du Top Bar Contract à 3 zones.

---

## 4. Schémas Sanity CMS (`/src/sanity/schemas/`)

Les schémas sont écrits pour Sanity Studio v3+ :
1. `siteSettings` : Identité, téléphones, emails, WhatsApp, réseaux sociaux, SEO global.
2. `creation` : Titre FR/EN, slug, catégorie, collection, statut, matières, finitions, photos réelles, mise en lumière accueil.
3. `collection` : Titre, saison, année, visuel de campagne.
4. `post` : Actualités du journal, catégories, temps de lecture, corps de texte riche.
5. `aboutPage` : Portrait du créateur, biographie, galerie atelier.
6. `contactPage` : Coordonnées, consignes de rendez-vous.

---

## 5. Guide Simple d’Administration pour Ariel Junior Nzesseu

1. **Ajouter une création :** Ouvrez Sanity Studio &gt; *Création* &gt; *Créer*. Renseignez le nom, la catégorie, le statut (« Sur commande » ou « Disponible ») et chargez la photo réelle.
2. **Mettre une pièce sur l’accueil :** Cochez *« Mettre en lumière sur la page d’accueil »*.
3. **Changer le message WhatsApp :** Dans *Site Settings*, modifiez la phrase préremplie. Le mot `[NOM_DE_LA_CREATION]` prend automatiquement le nom du vêtement cliqué par le client.
4. **Publier dans le Journal :** Créez un article avec une photo d'atelier et rédigez les coulisses ou conseils de style.

---

## 6. Installation & Déploiement

```bash
# Installation des dépendances
npm install

# Lancement en développement
npm run dev

# Construction pour la production
npm run build
```

Pour déployer sur Vercel : connectez votre dépôt GitHub, configurez les variables d'environnement de `.env.example`, et lancez le déploiement.

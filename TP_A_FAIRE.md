# TP : Refonte complète de la page Contact - Trevixia

**Date de rendu :** Samedi 23h 59
**Niveau :** Intermédiaire  
**Technologies :** HTML, CSS

---

## Contexte

Vous travaillez sur la landing page de Trevixia, une entreprise de services digitaux. Actuellement, le site contient deux sections principales :
- **Accueil** : Section hero avec présentation de l'entreprise
- **Services** : Présentation des services avec modales détaillées

Votre mission est de **créer une nouvelle section Contact** pour permettre aux visiteurs de contacter Trevixia. Cette section doit s'intégrer harmonieusement avec le reste du site et offrir une expérience utilisateur moderne et fluide.

**Important :** Vous devez créer cette section de zéro. Inspirez-vous du style et de la structure des autres sections, mais créez un design original et adapté aux besoins d'un formulaire de contact.

---

## Objectifs pédagogiques

À la fin de ce TP, vous serez capable de :
- Concevoir et structurer un formulaire de contact complet
- Créer un design moderne et responsive avec CSS
- Utiliser la validation HTML5 native
- Créer des animations et transitions CSS
- Gérer l'accessibilité d'un formulaire
- Intégrer une nouvelle section dans un site existant

---

## Fichiers à créer

Vous devez créer/modifier les fichiers suivants :

1. **`index.html`** :
   - Ajouter une nouvelle section `<section id="contact">` avant le `</main>`
   - Ajouter le lien "Contact" dans le menu de navigation (il existe déjà mais pointe vers #contact)

2. **`css/contact.css`** :
   - Créer un nouveau fichier CSS pour votre section Contact
   - L'ajouter dans le `<head>` de `index.html` : `<link rel="stylesheet" href="css/contact.css">`

---

## Partie 1 : Analyse et conception (45 min)

### Consignes

1. **Analysez le site existant** :
   - Étudiez les sections Accueil et Services
   - Identifiez le style graphique, les couleurs, la typographie
   - Notez la structure HTML et CSS utilisée
   - Observez les animations et transitions présentes

2. **Concevez votre page Contact** :
   - **Sketch/Wireframe** : Dessinez sur papier ou avec un outil (Figma, Excalidraw) la structure de votre page Contact
   - **Fonctionnalités** : Listez toutes les fonctionnalités que vous souhaitez implémenter
   - **Design** : Choisissez un style cohérent avec le reste du site mais avec votre touche personnelle

3. **Définissez les spécifications** :
   - Quels champs seront dans le formulaire ? (nom, email, téléphone, sujet, message minimum)
   - Comment sera organisée la mise en page ? (formulaire seul, avec infos de contact, etc.)
   - Quelles animations/transitions souhaitez-vous ?
   - Comment intégrerez-vous WhatsApp ? (utilisez un lien `https://wa.me/` avec un message prérempli) => pas besoin d'implementer juste dire comment procéder 

---

## Partie 2 : Structure HTML et design CSS (1h30)

### Consignes

Créez la structure HTML et le design CSS de votre nouvelle page Contact :

1. **Structure HTML** :
   - Créez une nouvelle section avec `id="contact"`
   - Organisez le contenu selon votre wireframe
   - Utilisez une structure sémantique (form, fieldset, legend si nécessaire)
   - Ajoutez tous les attributs d'accessibilité nécessaires (aria-*, labels, etc.)
   - Utilisez la validation HTML5 native (required, type="email", type="tel", pattern, etc.)
   - Pour WhatsApp (optionnel): Créez un lien avec `href="https://wa.me/NUMERO?text=MESSAGE"` où le message est construit à partir des champs du formulaire

2. **Design CSS moderne** :
   - Créez un design cohérent avec les sections Accueil et Services
   - Utilisez les mêmes variables CSS (couleurs primaires, transitions, etc.)
   - Implémentez un layout responsive (mobile-first recommandé)
   - Ajoutez des animations et transitions fluides
   - Utilisez des effets visuels modernes (glassmorphism, gradients, ombres, etc.)
   - Inspirez-vous du style des autres sections mais avec votre créativité

3. **Éléments visuels obligatoires** :
   - Un indicateur de progression du formulaire (barre ou pourcentage)
   - Des icônes pour chaque champ (utilisez SVG ou une bibliothèque d'icônes)
   - Des états visuels clairs (focus, valid, invalid, disabled)
   - Un design cohérent avec le reste du site Trevixia mais avec votre touche personnelle

4. **Responsive design** :
   - Mobile : Formulaire en une colonne, optimisé pour le tactile
   - Tablette : Layout adapté
   - Desktop : Mise en page optimale pour les grands écrans

---

## Partie 3 : Intégration et finalisation (1h)

### Consignes

Finalisez votre page Contact et intégrez-la au site :

1. **Intégration avec le site existant** :
   - Votre section doit s'intégrer harmonieusement avec les sections Accueil et Services
   - Le lien "Contact" dans le menu de navigation doit fonctionner (scroll vers #contact)
   - Le style doit être cohérent avec la charte graphique Trevixia (même palette de couleurs, même typographie)
   - Utilisez les mêmes classes utilitaires si nécessaire (`.container`, `.section-header`, etc.)
   - Vérifiez que le scroll vers la section fonctionne correctement

2. **Optimisations** :
   - Vérifiez que le code est optimisé (pas de code inutile)
   - Assurez-vous que les animations sont fluides (60fps)
   - Testez les performances (pas de lag lors de la saisie)

3. **Accessibilité** :
   - Vérifiez que tous les champs sont accessibles au clavier
   - Testez avec un lecteur d'écran (si possible)
   - Assurez-vous que les contrastes de couleurs sont suffisants
   - Ajoutez des attributs ARIA si nécessaire

4. **Tests finaux** :
   - Testez sur différents navigateurs (Chrome, Firefox, Edge, Safari)
   - Testez sur mobile (responsive)
   - Testez tous les cas d'usage (formulaire vide, partiellement rempli, valide, invalide)

---

## Partie 4 : Documentation et présentation (30 min)

### Consignes

1. **Documentation du code** :
   - Ajoutez des commentaires dans votre HTML et CSS
   - Expliquez les choix techniques et de design
   - Documentez la structure HTML et CSS
   - Ajoutez des commentaires pour les parties complexes

2. **Documentation utilisateur** :
   - Créez un fichier `CONTACT_DOCUMENTATION.md` avec :
     - Description de la nouvelle page Contact
     - Liste de toutes les fonctionnalités implémentées
     - Guide d'utilisation
     - Captures d'écran ou GIFs montrant les fonctionnalités

3. **Présentation** :
   - Préparez une présentation de 5 minutes pour expliquer :
     - Votre approche et vos choix de design
     - Les fonctionnalités principales
     - Les difficultés rencontrées et solutions trouvées
     - Ce que vous avez appris

---

## Critères d'évaluation

Votre travail sera évalué sur :

| Critère | Points | Description |
|---------|--------|-------------|
| **Structure et organisation** | 2.5 pts | Code bien structuré, fichiers organisés, HTML sémantique, validation HTML5 |
| **Design et créativité** | 3 pts | Design moderne et original, cohérent avec le site, animations CSS fluides |
| **Fonctionnalités et intégration** | 2 pts | Formulaire fonctionnel, intégration WhatsApp, indicateur de progression |
| **Responsive et accessibilité** | 1.5 pts | Adaptation mobile/tablette/desktop, accessibilité respectée, états visuels clairs |
| **Code qualité et documentation** | 1 pt | Code commenté, documentation présente, présentation claire |

**Total : 10 points**

### Bonus (jusqu'à +2 points)

- Fonctionnalités supplémentaires originales et pertinentes
- Design particulièrement créatif et soigné
- Code particulièrement optimisé et performant

---

## Fonctionnalités bonus (optionnel)

Si vous avez terminé toutes les parties obligatoires, vous pouvez ajouter :

1. **Mode sombre/clair** : Toggle CSS pour changer le thème du formulaire
2. **Animations avancées** : Effets de transition plus sophistiqués
3. **Compteur de caractères** : Affichage visuel du nombre de caractères dans le message
4. **États visuels améliorés** : Animations pour les états valid/invalid des champs
5. **Design alternatif** : Proposer plusieurs variantes de design
6. **Informations de contact** : Ajouter une section avec adresse, téléphone, email

---

## Ressources utiles

- [MDN - Validation HTML5](https://developer.mozilla.org/fr/docs/Learn/Forms/Form_validation)
- [MDN - Formulaires HTML](https://developer.mozilla.org/fr/docs/Learn/Forms)
- [CSS Tricks - Form Styling](https://css-tricks.com/tag/forms/)
- [WhatsApp Click to Chat](https://faq.whatsapp.com/general/chats/how-to-use-click-to-chat)

---

## Aide et support

Si vous êtes bloqué :

1. **Relisez le code existant** - Inspirez-vous de la structure HTML et CSS des autres sections
2. **Testez étape par étape** - Ne codez pas tout d'un coup, testez chaque élément
3. **Utilisez les outils de développement** - Inspectez les éléments pour comprendre le CSS
4. **Demandez de l'aide** - N'hésitez pas à poser des questions

---

## Livrables

À la fin du TP, vous devez rendre :

1. **Code source** :
   - Les fichiers HTML et CSS de votre nouvelle page Contact
   - Tous les fichiers doivent être fonctionnels et prêts à être intégrés

2. **Documentation** :
   - `CONTACT_DOCUMENTATION.md` : Documentation complète de votre réalisation
   - Commentaires dans le code HTML et CSS

3. **Présentation** :
   - Une présentation de 5 minutes.
   - Expliquez vos choix, fonctionnalités, difficultés et apprentissages

---

## Objectifs d'apprentissage

En réalisant ce TP, vous allez :

- Concevoir et structurer une page web complète
- Créer un design moderne et responsive avec CSS
- Maîtriser la validation HTML5 native
- Implémenter des animations et transitions CSS avancées
- Développer votre sens de l'UX et de l'accessibilité
- Apprendre à documenter et présenter votre travail
- Gérer un projet de A à Z (conception → réalisation → documentation)

---

## Contraintes importantes

1. **Cohérence** : Votre page Contact doit s'intégrer naturellement avec les sections Accueil et Services existantes
2. **Respectez** la structure générale du site (header, footer, navigation)
3. **Maintenez** la cohérence avec la charte graphique Trevixia (couleurs, typographie, espacements)
4. **Réutilisez** les variables CSS existantes (--primary-color, --transition, etc.)
5. **Testez** votre code avant de le rendre
6. **Documentez** vos choix et difficultés

---

## Conseils pour réussir

1. **Analysez d'abord** : Prenez le temps d'étudier les sections Accueil et Services pour comprendre la structure et le style
2. **Planifiez avant de coder** : Dessinez votre wireframe, listez les fonctionnalités
3. **Réutilisez intelligemment** : Inspirez-vous des classes CSS existantes mais créez votre propre structure
4. **Testez régulièrement** : Ne codez pas tout d'un coup, testez au fur et à mesure
5. **Inspirez-vous** : Regardez d'autres formulaires de contact sur le web pour des idées
6. **Testez visuellement** : Utilisez les outils de développement pour ajuster le CSS
7. **Demandez de l'aide** : N'hésitez pas à poser des questions si vous êtes bloqué

## Note importante

Le menu de navigation contient déjà un lien "Contact" qui pointe vers `#contact`. Votre section doit donc avoir `id="contact"` pour que le lien fonctionne. Le bouton "Demander un devis" dans le header pointe également vers `#contact`.

---

**Bon courage ! **

*Rappelez-vous : L'objectif n'est pas de tout faire, mais de bien faire ce que vous entreprenez. Un design simple mais bien exécuté vaut mieux qu'un design complexe mal réalisé.*

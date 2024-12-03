# Gestion de l'Équipe FUT

## Contexte du Projet

Cette application permet aux utilisateurs de créer, gérer et personnaliser leur équipe de football Ultimate Team (FUT). L'utilisateur peut ajouter des joueurs, les positionner sur le terrain en fonction de la formation choisie (ex. 4-4-2, 4-3-3), et voir l'impact des liens de chimie entre les joueurs. L'application propose également une gestion dynamique des joueurs, avec une interface interactive et la possibilité de sauvegarder les formations via localStorage.

## Fonctionnalités Clés

### 1. **Intégration UI et Ajout Dynamique des Joueurs**
   - Un formulaire permettant l'ajout de joueurs avec des champs pour le nom, la position, la note, les statistiques et d'autres détails pertinents.
   - Les joueurs sont positionnés en fonction de la formation choisie (4-3-3, 4-4-2, etc.).

### 2. **Positionnement des Joueurs Selon la Formation Tactique**
   - Formation 4-3-3 : 1 GK, 2 CB, 1 LB, 1 RB, 3 CM, 1 LW, 1 RW, 1 ST.
   - Formation 4-4-2 : 1 GK, 2 CB, 1 LB, 1 RB, 2 CM, 1 RM, 1 LM, 2 ST.
   - Les positions des joueurs sont automatiquement ajustées selon la formation choisie.

### 3. **Gestion des Cartes de Joueurs**
   - Les joueurs peuvent être ajoutés, modifiés ou supprimés via l'interface utilisateur.
   - Un maximum de 11 joueurs peut être ajouté à la formation principale ; les autres joueurs seront réservistes.

### 4. **Formulaires Dynamiques pour la Gestion des Joueurs**
   - Ajout et suppression de joueurs avec validation des données (nom, position, note).
   - Gestion dynamique des joueurs en fonction des règles de formation.

### 5. **Calcul de la Chimie de l'Équipe**
   - Le score de chimie est calculé en fonction des liens entre joueurs : club, championnat, nationalité.
   - Exemple de calcul : Un joueur correctement positionné reçoit 10 points. Des points supplémentaires sont ajoutés pour les liens entre club, ligue et nationalité.

### 6. **Validation des Champs des Formulaires**
   - Validation des champs du formulaire pour assurer la validité des informations saisies.

### 7. **LocalStorage des Formations et Joueurs**
   - Sauvegarde automatique des formations et joueurs dans le `localStorage`.
   - Récupération des données à l'ouverture de l'application.

### 8. **Drag & Drop pour le Changement des Joueurs**
   - Réorganiser les joueurs en utilisant une fonctionnalité de "drag and drop" pour effectuer des changements dans la formation.

### 9. **Changement Dynamique de Formation**
   - Mise à jour automatique du positionnement des joueurs en fonction de la formation choisie.

### 10. **Responsive Design**
   - L'application s'adapte aux différentes tailles d'écran (mobile, tablette, ordinateur).

## Technologies Utilisées

- **HTML** pour la structure de la page.
- **CSS** (natifs ou frameworks comme Tailwind CSS ou Bootstrap) pour la mise en page et le design.
- **JavaScript Vanilla** pour la logique de l'application et la manipulation du DOM.
- **LocalStorage** pour la sauvegarde des données des formations et joueurs.

## User Stories

### 1. **Création d'une Équipe de 11 Joueurs**
   - En tant qu'utilisateur, je souhaite pouvoir ajouter des joueurs à ma formation via un formulaire dynamique.
   - **Critères d'acceptation** : Je peux ajouter un joueur à partir d'un formulaire dynamique comprenant les champs nécessaires (nom, position, statistiques). Le formulaire vérifie la validité des données saisies.

### 2. **Adaptation de la Formation Choisie**
   - En tant qu'utilisateur, je souhaite pouvoir changer la formation de mon équipe et voir les positions des joueurs ajustées en conséquence.
   - **Critères d'acceptation** : Je peux choisir entre les formations prédéfinies (ex. 4-4-2, 4-3-3) et le positionnement des joueurs est mis à jour automatiquement.

### 3. **Calcul du Score de Chimie**
   - En tant qu'utilisateur, je souhaite voir le score de "chimie" de mon équipe calculé en fonction des relations entre les joueurs.
   - **Critères d'acceptation** : Le score de chimie est mis à jour dynamiquement en fonction des joueurs sélectionnés et leur compatibilité.

### 4. **Sauvegarde et Récupération des Données**
   - En tant qu'utilisateur, je souhaite que mes données de formation et d'équipe soient sauvegardées automatiquement pour pouvoir les récupérer plus tard.
   - **Critères d'acceptation** : Les données sont stockées localement et récupérées lors du chargement de l'application.

### 5. **Formulaire Dynamique pour les Joueurs**
   - En tant qu'utilisateur, je souhaite pouvoir ajouter dynamiquement de nouveaux joueurs au sein de l'interface.
   - **Critères d'acceptation** : Un formulaire dynamique permet de créer de nouveaux joueurs et l'interface ajuste les positions et le nombre de joueurs.

## Installation

### Prérequis
- Un navigateur moderne pour exécuter l'application (Chrome, Firefox, Safari, etc.).
- Aucun serveur ou base de données n'est requis puisque l'application fonctionne avec **localStorage**.

### Pour Lancer l'Application
1. Clonez ce dépôt :
   ```bash
   git clone https://github.com/votre-utilisateur/fut-team-manager.git

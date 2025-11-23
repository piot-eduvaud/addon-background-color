# Guide de Configuration pour les Enseignants

Ce guide explique comment configurer votre environnement de développement pour gérer à la fois le dépôt public destiné aux étudiants et votre dépôt privé contenant la solution complète (avec CI/CD).

## Objectif

Avoir une configuration Git locale avec :
1.  **`origin`** : Votre fork public (pour les étudiants).
2.  **`solution`** : Votre dépôt privé (pour la correction et le CI/CD).
3.  **`upstream`** : Le dépôt original de référence (matinfo).

## Pré-requis

1.  Avoir un compte GitHub.
2.  Git installé sur votre machine.

## Étapes de Configuration

### 1. Forker le dépôt public
Allez sur le dépôt de référence (ex: `https://github.com/matinfo/addon-background-color`) et cliquez sur **Fork**.
Cela crée une copie dans votre compte (ex: `https://github.com/votre-user/addon-background-color`).

### 2. Créer le dépôt privé pour la solution
Sur GitHub, créez un **nouveau dépôt** (ex: `I324-addon-background-color-solution`).
**Important :** Mettez-le en **Privé**. Ne l'initialisez pas avec un README ou autre.

### 3. Cloner votre fork public
Sur votre machine, clonez votre fork public :

```bash
git clone git@github.com:votre-user/addon-background-color.git
cd addon-background-color
```

### 4. Configurer les Remotes
Ajoutez les liens vers le dépôt original (`upstream`) et votre dépôt privé (`solution`) :

```bash
# Ajouter le dépôt de référence (pour récupérer les mises à jour du cours)
git remote add upstream git@github.com:matinfo/addon-background-color.git

# Ajouter votre dépôt privé (pour stocker la solution)
git remote add solution git@github.com:votre-user/I324-addon-background-color-solution.git

# Vérifier la configuration
git remote -v
```

Vous devriez voir :
- `origin` -> Votre fork public
- `solution` -> Votre dépôt privé
- `upstream` -> Le dépôt matinfo

### 5. Initialiser la branche Solution
Poussez la version actuelle vers votre dépôt privé pour l'initialiser :

```bash
git push solution main
```

Ensuite, créez une branche locale dédiée à la solution qui suivra ce dépôt privé :

```bash
git fetch solution
git checkout -b solution-main solution/main
```

### 6. Workflow Quotidien

#### Pour travailler sur la version Étudiant (Public)
```bash
git checkout main
```
- C'est la version "propre" que les étudiants voient.
- Pour mettre à jour depuis le prof principal : `git pull upstream main`
- Pour mettre à jour votre fork public : `git push origin main`

#### Pour travailler sur la Solution (Privé)
```bash
git checkout solution-main
```
- C'est ici que vous avez les workflows CI/CD, la config ESLint complète, etc.
- Pour sauvegarder votre travail : `git add .`, `git commit`, `git push` (cela ira vers `solution` par défaut).

#### Fusionner les mises à jour du cours dans la solution
Si `upstream` a changé et que vous voulez répercuter les changements dans votre solution :

```bash
git checkout solution-main
git merge upstream/main
# Réglez les conflits éventuels
git push
```

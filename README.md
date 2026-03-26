# 🍳 Batch Cooking App — Guide de publication

## Structure du projet
```
batch-cooking-app/
├── api/
│   └── generate.js     ← Serveur sécurisé (clé API cachée ici)
├── public/
│   └── index.html      ← Ton application
├── vercel.json         ← Configuration Vercel
└── README.md
```

---

## 📋 Étapes de publication (20 minutes)

### ÉTAPE 1 — Créer un compte GitHub (gratuit)
1. Va sur **github.com**
2. Clique **"Sign up"**
3. Crée ton compte avec ton email

### ÉTAPE 2 — Mettre le projet sur GitHub
1. Une fois connecté sur GitHub, clique **"New repository"** (bouton vert)
2. Nom du projet : `batch-cooking-app`
3. Laisse tout par défaut, clique **"Create repository"**
4. Sur la page suivante, clique **"uploading an existing file"**
5. Glisse-dépose les 3 dossiers/fichiers :
   - le dossier `api/`
   - le dossier `public/`
   - le fichier `vercel.json`
6. Clique **"Commit changes"**

### ÉTAPE 3 — Créer un compte Vercel (gratuit)
1. Va sur **vercel.com**
2. Clique **"Sign up"**
3. Choisis **"Continue with GitHub"** (connecte ton compte GitHub)

### ÉTAPE 4 — Déployer l'app sur Vercel
1. Sur Vercel, clique **"Add New Project"**
2. Tu verras ton projet `batch-cooking-app` — clique **"Import"**
3. Laisse tout par défaut, clique **"Deploy"**
4. Attends 1 minute... 🎉 Ton app est en ligne !

### ÉTAPE 5 — Ajouter ta clé API Claude (IMPORTANT)
Sans ça, l'IA ne fonctionnera pas.

1. Va sur **console.anthropic.com**
2. Crée un compte si tu n'en as pas
3. Va dans **"API Keys"** → clique **"Create Key"**
4. Copie la clé (commence par `sk-ant-...`)
5. Retourne sur **Vercel** → ton projet → onglet **"Settings"**
6. Clique **"Environment Variables"**
7. Ajoute :
   - **Name** : `ANTHROPIC_API_KEY`
   - **Value** : colle ta clé `sk-ant-...`
8. Clique **"Save"**
9. Va dans **"Deployments"** → clique les **3 points** → **"Redeploy"**

### ✅ C'est terminé !
Ton app est accessible à l'adresse :
`https://batch-cooking-app.vercel.app`

---

## 💰 Coûts estimés

| Service | Prix |
|---------|------|
| GitHub | Gratuit |
| Vercel | Gratuit (jusqu'à 100 000 requêtes/mois) |
| API Claude | ~0.003€ par génération de recettes |

Pour 1000 utilisateurs qui génèrent 3 recettes chacun → environ **9€** d'API.

---

## 🔒 Sécurité
- Ta clé API n'est **jamais visible** dans le code HTML
- Elle est stockée sur Vercel de façon sécurisée
- Les utilisateurs ne peuvent pas la voir ou la voler

---

## ❓ Problèmes fréquents

**L'app s'affiche mais l'IA ne répond pas**
→ Vérifie que tu as bien ajouté la variable `ANTHROPIC_API_KEY` dans Vercel et redéployé.

**Erreur 404 sur Vercel**
→ Vérifie que le fichier `vercel.json` est bien à la racine du projet.

**Je veux changer le nom de domaine**
→ Dans Vercel → Settings → Domains → ajoute ton domaine personnalisé.

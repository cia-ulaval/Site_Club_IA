# Forum - Documentation Technique

## 📋 Vue d'ensemble

Forum intégré complet développé pour le Site Club IA, construit avec React 18, TypeScript, Vite, Tailwind CSS et Supabase. Le forum offre une expérience moderne avec toutes les fonctionnalités essentielles pour une communauté active.

## 🚀 Fonctionnalités Implémentées

### ✅ Fonctionnalités de Base

- **Catégories** : Organisation des discussions par thématiques
- **Threads/Sujets** : Création et gestion de sujets de discussion
- **Posts/Messages** : Système de réponses et discussions
- **Pagination** : Navigation efficace dans les listes
- **Recherche** : Recherche avancée avec filtres
- **Responsive Design** : Interface adaptée à tous les écrans

### ✅ Authentification & Autorisation

- **Connexion/Inscription** : Formulaires sécurisés avec validation
- **OAuth** : Connexion via GitHub
- **Profils utilisateurs** : Gestion des informations personnelles
- **Rôles et permissions** : Système de modération avancé
- **RLS (Row Level Security)** : Sécurité au niveau base de données

### ✅ Fonctionnalités Avancées

- **Markdown** : Support complet avec rendu sécurisé
- **Mentions** : Système de mentions d'utilisateurs (@username)
- **Notifications temps réel** : Via Supabase Realtime
- **Upload d'images** : Intégration Supabase Storage
- **Réactions** : Système de likes et réactions
- **Modération** : Outils de modération intégrés
- **Thème sombre** : Support du mode sombre

### ✅ Interface Utilisateur

- **ThreadView** : Vue complète d'un sujet avec ses posts
- **NewThread** : Formulaire de création de sujet
- **Search** : Page de recherche avancée
- **Activity** : Page d'activité complète
- **Login/Signup** : Pages d'authentification
- **Notifications** : Système de notifications en temps réel

## 🏗 Architecture

### Structure des dossiers

```
src/features/forum/
├── api/           # Appels API et intégrations Supabase
├── components/    # Composants UI réutilisables
├── hooks/         # React Query hooks personnalisés
├── pages/         # Pages principales du forum
├── types/         # Définitions TypeScript
└── index.ts       # Point d'entrée du module
```

### Technologies utilisées

- **Frontend** : React 18, TypeScript, Vite
- **Styling** : Tailwind CSS
- **State Management** : @tanstack/react-query
- **Forms** : react-hook-form + zod
- **Markdown** : remark + rehype
- **Backend** : Supabase (PostgreSQL + Auth + Realtime + Storage)
- **Dates** : date-fns avec localisation française

## 📊 Base de Données

### Tables principales

- `profiles` : Profils utilisateurs
- `categories` : Catégories du forum
- `threads` : Sujets de discussion
- `posts` : Messages/réponses
- `thread_views` : Statistiques de vues
- `notifications` : Système de notifications
- `post_mentions` : Mentions d'utilisateurs
- `post_reactions` : Likes et réactions
- `forum_uploads` : Fichiers uploadés

### Fonctionnalités automatiques

- **Triggers** : Notifications automatiques
- **Compteurs** : Mise à jour des statistiques
- **Timestamps** : Gestion automatique des dates
- **RLS** : Sécurité au niveau des lignes

### Supabase Storage

Le forum utilise un bucket `forum-uploads` pour stocker les images :

- Accès public en lecture
- Upload limité aux utilisateurs authentifiés
- Politique de suppression par l'auteur

## 🎯 Utilisation

### Routes principales

- `/forum` : Page d'accueil du forum
- `/forum/c/:slug` : Threads d'une catégorie
- `/forum/t/:id` : Vue détaillée d'un thread
- `/forum/new` : Création d'un nouveau thread
- `/forum/search` : Recherche avancée
- `/forum/activity` : Activité récente
- `/forum/auth/login` : Connexion
- `/forum/auth/signup` : Inscription

### API Hooks

```typescript
// Categories
const { data: categories } = useCategories();

// Threads
const { data: threads } = useThreadsByCategory(categorySlug);
const { data: thread } = useThread(threadId);
const createThread = useCreateThread();

// Posts
const { data: posts } = usePostsByThread(threadId);
const createPost = useCreatePost();

// Search
const { data: results } = useSearchThreads({ query, categoryId, sortBy });

// Activity
const { data: activity } = useRecentActivity();
```

### Composants principaux

```typescript
// Layout
<ForumLayout />

// Navigation
<CategoryCard category={category} />
<ThreadsList threads={threads} />

// Content
<PostItem post={post} />
<PostComposer onSubmit={handleSubmit} />
<MarkdownRenderer content={content} />

// Features
<NotificationSystem userId={userId} />
<ImageUpload onImageUploaded={handleUpload} />
```

## 🔒 Sécurité

### Row Level Security (RLS)

Toutes les tables ont des politiques RLS strictes :

- Les utilisateurs ne peuvent voir que le contenu autorisé
- Les modifications sont limitées aux propriétaires/modérateurs
- L'authentification est requise pour les actions sensibles

### Validation des données

- Validation côté client avec Zod
- Validation côté serveur via Supabase
- Sanitisation du contenu Markdown
- Limitations de taille pour les uploads

## 📈 Performance

### Optimisations implémentées

- **React Query** : Cache intelligent des requêtes
- **Pagination** : Chargement par chunks
- **Lazy Loading** : Composants chargés à la demande
- **Debounced Search** : Recherche optimisée
- **Indexes DB** : Requêtes optimisées
- **CDN** : Assets statiques via Supabase

### Monitoring

- Métriques de performance via React Query DevTools
- Logs d'erreurs structurés
- Suivi des métriques utilisateur

## 🚧 Extensions possibles

### Fonctionnalités futures

- [ ] **Chat en temps réel** : Messages privés
- [ ] **Gamification** : Badges et points
- [ ] **Sondages** : Création de sondages dans les threads
- [ ] **Calendrier** : Événements communautaires
- [ ] **API publique** : Accès externe aux données
- [ ] **Mobile App** : Application React Native
- [ ] **Analytics** : Dashboard analytique avancé
- [ ] **Webhooks** : Intégrations externes

### Améliorations techniques

- [ ] **Cache Redis** : Performance avancée
- [ ] **Search ElasticSearch** : Recherche full-text
- [ ] **CDN Images** : Optimisation des images
- [ ] **PWA** : Application web progressive
- [ ] **Offline Support** : Fonctionnement hors ligne

## 🛠 Maintenance

### Scripts utiles

```bash
# Installation
npm install

# Développement
npm run dev

# Build
npm run build

# Tests
npm run test

# Linting
npm run lint
```

### Mise à jour de la base de données

```sql
-- Exécuter les migrations dans l'ordre :
-- 1. supabase/forum.sql (schéma de base)
-- 2. supabase/forum-extensions.sql (fonctionnalités avancées)
```

## 🐛 Dépannage

### Problèmes courants

1. **Erreurs d'authentification** : Vérifier les variables d'environnement
2. **Uploads qui échouent** : Vérifier les politiques Storage
3. **Notifications non reçues** : Vérifier la configuration Realtime
4. **Permissions insuffisantes** : Vérifier les politiques RLS

### Logs et debug

- Utiliser React Query DevTools pour le debug
- Consulter les logs Supabase dans le dashboard
- Vérifier la console navigateur pour les erreurs client

## 👥 Contribution

### Standards de code

- TypeScript strict
- ESLint + Prettier
- Conventions de nommage consistantes
- Tests unitaires pour les fonctions critiques
- Documentation des composants complexes

### Processus de contribution

1. Fork du projet
2. Branche feature dédiée
3. Tests et validation
4. Pull Request avec description détaillée
5. Review et merge

---

**Forum développé avec ❤️ pour le Club IA**

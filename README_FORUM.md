# Forum CIA - Setup et Documentation

Ce document décrit la configuration et l'utilisation du forum intégré au site du Club d'Intelligence Artificielle de l'Université Laval.

## 🚀 Setup Initial

### 1. Configuration Supabase

1. Créez un compte sur [Supabase](https://app.supabase.com)
2. Créez un nouveau projet
3. Copiez l'URL et la clé anonyme de votre projet
4. Créez un fichier `.env.local` à la racine du projet :

```bash
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key
```

### 2. Configuration de la Base de Données

1. Dans votre tableau de bord Supabase, allez dans l'éditeur SQL
2. Exécutez le contenu du fichier `supabase/forum.sql`
3. Cela créera toutes les tables, politiques RLS, et données d'exemple

### 3. Configuration de l'Authentification

1. Dans Supabase, allez dans Authentication → Settings
2. Configurez les providers OAuth que vous souhaitez (Google recommandé)
3. Ajoutez votre domaine dans les URLs de redirection autorisées

### 4. Promouvoir un Administrateur

Pour promouvoir un utilisateur au rôle d'administrateur :

```sql
UPDATE profiles 
SET role = 'admin' 
WHERE username = 'nom_utilisateur';
```

## 📖 Structure du Forum

### Routes Principales

- `/forum` - Index des catégories
- `/forum/c/:slug` - Liste des sujets d'une catégorie  
- `/forum/t/:id` - Vue d'un sujet avec ses posts
- `/forum/new` - Création d'un nouveau sujet
- `/forum/search` - Recherche dans le forum
- `/forum/activity` - Activité récente

### Rôles et Permissions

#### Membre (`member`)
- Créer des sujets et posts
- Modifier/supprimer ses propres contenus
- Voir tous les contenus publics

#### Mentor (`mentor`) 
- Toutes les permissions de membre
- Modifier les posts des autres (permissions étendues)

#### Administrateur (`admin`)
- Toutes les permissions
- Épingler/verrouiller des sujets
- Supprimer n'importe quel contenu
- Gérer les catégories

### Fonctionnalités

#### ✅ Implémentées
- [x] Index des catégories avec statistiques
- [x] Liste des sujets par catégorie 
- [x] Affichage des posts d'un sujet
- [x] Création de sujets et posts
- [x] Système de rôles (membre/mentor/admin)
- [x] Badges épinglé/verrouillé
- [x] Compteurs de vues/réponses
- [x] Activité récente (Recent Posts/Topics)
- [x] Recherche dans le contenu
- [x] Thème Dark/Light/System
- [x] Rendu Markdown
- [x] Authentification Supabase
- [x] Politiques RLS sécurisées
- [x] API temps réel
- [x] Responsive design

#### 🚧 En cours/À venir
- [ ] Vue complète d'un sujet avec posts
- [ ] Formulaire de création de sujet
- [ ] Page de recherche complète 
- [ ] Page d'activité complète
- [ ] Système de citations de posts
- [ ] Notifications temps réel
- [ ] Modération avancée
- [ ] Upload d'images
- [ ] Système de mentions
- [ ] Abonnements aux sujets

## 🎨 Interface Utilisateur

Le forum utilise un design inspiré des forums modernes avec :

- **Layout responsive** adapté mobile/desktop
- **Thème adaptatif** (clair/sombre/système)
- **Navigation intuitive** avec onglets
- **Cards et composants** cohérents avec le site principal
- **États de chargement** et gestion d'erreurs
- **Accessibilité** (ARIA, navigation clavier)

### Composants Principaux

- `ForumLayout` - Layout principal avec navigation
- `CategoryCard` - Carte d'affichage des catégories
- `ThreadsList` - Liste des sujets avec badges
- `PostItem` - Affichage d'un post avec actions
- `PostComposer` - Éditeur de post avec prévisualisation
- `MarkdownRenderer` - Rendu sécurisé du Markdown

## 🔧 API et Hooks

### Hooks React Query

```typescript
// Catégories
useCategories() - Liste des catégories
useThreadsByCategory(slug, params) - Sujets d'une catégorie
useThread(id) - Détails d'un sujet

// Posts
usePostsByThread(threadId, params) - Posts d'un sujet
useCreatePost() - Création d'un post
useUpdatePost() - Modification d'un post

// Recherche et activité
useSearch(query, params) - Recherche
useRecentActivity() - Activité récente
```

### API Supabase

Les API utilisent les capacités suivantes de Supabase :
- **Authentification** OAuth et gestion des sessions
- **Base de données** PostgreSQL avec politiques RLS
- **Temps réel** pour les nouveaux posts
- **Storage** (prévu pour les uploads futurs)

## 🔒 Sécurité

### Politiques RLS

Toutes les tables utilisent Row Level Security :

- **Profiles** : lecture publique, modification par propriétaire
- **Categories** : lecture publique, modification par admin
- **Threads** : lecture publique, CRUD selon rôles
- **Posts** : lecture publique, CRUD selon rôles

### Validation

- **Frontend** : Validation avec Zod et React Hook Form
- **Backend** : Politiques RLS + contraintes SQL
- **Markdown** : Sanitisation avec rehype-sanitize

## 🧪 Tests et Développement

### Scripts Disponibles

```bash
npm run dev          # Développement local
npm run build        # Build production  
npm run lint         # Linting
npm run preview      # Prévisualisation build
```

### Variables d'Environnement

```bash
VITE_SUPABASE_URL=        # URL du projet Supabase
VITE_SUPABASE_ANON_KEY=   # Clé anonyme Supabase
```

## 📊 Performance

- **React Query** pour la mise en cache intelligente
- **Lazy loading** des composants lourds
- **Pagination** pour les grandes listes
- **Optimistic updates** pour une UX fluide
- **Bundle splitting** automatique avec Vite

## 🤝 Contribution

Pour contribuer au forum :

1. Familiarisez-vous avec la structure des composants
2. Suivez les conventions TypeScript strictes
3. Testez avec différents rôles d'utilisateurs
4. Assurez-vous que les politiques RLS fonctionnent
5. Vérifiez l'accessibilité et le responsive

## 📞 Support

Pour toute question ou problème :
- Consultez les logs Supabase pour les erreurs API
- Vérifiez les politiques RLS si problème de permissions
- Utilisez les React DevTools pour déboguer les hooks
- Testez avec différents navigateurs et tailles d'écran

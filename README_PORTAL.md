# Portail Forum Club IA

## Setup rapide

1. Copier `.env.example` → `.env.local` et remplir les variables Supabase.
2. Installer les dépendances :
   ```sh
   npm install
   ```
3. Appliquer le schéma SQL (nécessite psql et un compte admin sur la DB) :
   ```sh
   npm run db:push
   ```
   > Le script utilise `$DATABASE_URL` (voir doc Supabase pour le format).
4. Lancer le site :
   ```sh
   npm run dev
   ```

## Authentification

- Connexion via Google (Supabase Auth).
- Pour promouvoir un admin :
  ```sql
  update public.profiles set role = 'admin' where username = 'VOTRE_USERNAME';
  ```

## Commandes utiles

- `npm run db:push` : applique `supabase/portal.sql` sur la base.

## Test plan

- Voir README principal pour les tests manuels et captures d’écran.

## Variables d’environnement

- `NEXT_PUBLIC_SUPABASE_URL` : URL de votre projet Supabase
- `NEXT_PUBLIC_SUPABASE_ANON_KEY` : clé anonyme publique
- `SUPABASE_SERVICE_ROLE_KEY` : clé service (optionnel, côté serveur uniquement)
- `DATABASE_URL` : URL Postgres pour le script SQL

## Realtime (live posts)

- Sur chaque page de thread, un bouton permet d’activer/désactiver l’abonnement Realtime : les nouveaux posts apparaissent en direct sans recharger la page.
- Par défaut, le Realtime est désactivé (préserve les quotas Supabase).
- Si besoin, désactivez cette fonctionnalité côté UI ou dans le code.

## Notes

- Les routes `/portal/*` sont protégées (auth requise pour écrire).
- Pas d’indexation SEO (robots noindex).
- Dark mode supporté.
- Voir le code pour les détails sur les rôles, RLS, et policies.

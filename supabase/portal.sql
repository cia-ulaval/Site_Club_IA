-- Profils étendent auth.users
create table if not exists public.profiles (
  id uuid primary key references auth.users on delete cascade,
  username text unique not null,
  role text not null default 'member' check (role in ('member','mentor','admin')),
  created_at timestamptz default now()
);

create table if not exists public.categories (
  id bigserial primary key,
  name text not null unique,
  slug text not null unique,
  description text,
  position int default 0
);

create table if not exists public.threads (
  id bigserial primary key,
  category_id bigint references public.categories on delete set null,
  author_id uuid references public.profiles(id) on delete set null,
  title text not null check (length(title) between 3 and 160),
  content text not null check (length(content) between 3 and 20000),
  is_pinned boolean default false,
  is_locked boolean default false,
  created_at timestamptz default now(),
  updated_at timestamptz
);
create index if not exists idx_threads_category_created on public.threads (category_id, created_at desc);

create table if not exists public.posts (
  id bigserial primary key,
  thread_id bigint references public.threads on delete cascade,
  author_id uuid references public.profiles(id) on delete set null,
  content text not null check (length(content) between 1 and 20000),
  created_at timestamptz default now(),
  updated_at timestamptz
);
create index if not exists idx_posts_thread_created on public.posts (thread_id, created_at);

create table if not exists public.thread_subscriptions (
  thread_id bigint references public.threads on delete cascade,
  user_id uuid references public.profiles(id) on delete cascade,
  primary key (thread_id, user_id)
);

-- RLS
alter table public.profiles enable row level security;
alter table public.threads  enable row level security;
alter table public.posts    enable row level security;
alter table public.thread_subscriptions enable row level security;

-- Policies: profiles
create policy "profiles_read_all"
on public.profiles for select
to authenticated
using (true);

create policy "profiles_update_self"
on public.profiles for update
to authenticated
using (auth.uid() = id);

-- Policies: threads
create policy "threads_read_all"
on public.threads for select
to authenticated
using (true);

create policy "threads_insert_auth"
on public.threads for insert
to authenticated
with check (auth.uid() = author_id);

create policy "threads_update_owner_or_admin"
on public.threads for update
to authenticated
using (
  author_id = auth.uid()
  or exists(select 1 from public.profiles p where p.id = auth.uid() and p.role = 'admin')
);

create policy "threads_delete_owner_or_admin"
on public.threads for delete
to authenticated
using (
  author_id = auth.uid()
  or exists(select 1 from public.profiles p where p.id = auth.uid() and p.role = 'admin')
);

-- Policies: posts
create policy "posts_read_all"
on public.posts for select
to authenticated
using (true);

create policy "posts_insert_auth"
on public.posts for insert
to authenticated
with check (auth.uid() = author_id);

create policy "posts_update_owner_or_admin"
on public.posts for update
to authenticated
using (
  author_id = auth.uid()
  or exists(select 1 from public.profiles p where p.id = auth.uid() and p.role = 'admin')
);

create policy "posts_delete_owner_or_admin"
on public.posts for delete
to authenticated
using (
  author_id = auth.uid()
  or exists(select 1 from public.profiles p where p.id = auth.uid() and p.role = 'admin')
);

-- Policies: subscriptions
create policy "subs_read_own"
on public.thread_subscriptions for select
to authenticated
using (user_id = auth.uid());

create policy "subs_upsert_own"
on public.thread_subscriptions for insert
to authenticated
with check (user_id = auth.uid());

create policy "subs_delete_own"
on public.thread_subscriptions for delete
to authenticated
using (user_id = auth.uid());

-- Seeds de catégories
insert into public.categories (name, slug, description, position) values
  ('Annonces', 'annonces', 'Infos officielles du club', 0),
  ('Événements', 'evenements', 'Ateliers, talks, meetups', 1),
  ('Projets', 'projets', 'Discussions techniques, repos, entraide', 2),
  ('Recrutement', 'recrutement', 'Stages, offres, coéquipiers', 3),
  ('Aide/Questions', 'aide-questions', 'Q&A, debugging, conseils', 4)
on conflict (slug) do nothing;

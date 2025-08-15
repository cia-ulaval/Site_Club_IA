import { supabase } from '../../../lib/supabase';
import { 
  CategoryWithStats, 
  ThreadWithDetails, 
  PostWithDetails, 
  CreateThreadForm, 
  CreatePostForm,
  SearchResult,
  RecentActivity,
  PaginatedResponse,
  Thread,
  Post
} from '../types';

// Categories API
export const categoriesApi = {
  async getAll(): Promise<CategoryWithStats[]> {
    console.log('🔍 Récupération des catégories...');
    
    // Données de fallback basées sur vos données réelles
    const fallbackCategories = [
      {
        id: "a1bd4597-24d9-4861-a45d-947f798ac7f2",
        name: "Annonces",
        slug: "annonces",
        description: "Annonces officielles du club",
        icon: "📢",
        position: 1,
        is_private: false,
        created_at: "2025-08-14 19:41:15.383492+00",
        updated_at: "2025-08-14 19:41:15.383492+00"
      },
      {
        id: "6c7a794c-8f0d-4236-9709-407f8dbf8fae",
        name: "Événements",
        slug: "evenements",
        description: "Événements et activités du club",
        icon: "📅",
        position: 2,
        is_private: false,
        created_at: "2025-08-14 19:41:15.383492+00",
        updated_at: "2025-08-14 19:41:15.383492+00"
      },
      {
        id: "241b698b-02e2-4594-af03-6f98bb19178a",
        name: "Projets",
        slug: "projets",
        description: "Discussions sur les projets en cours",
        icon: "🚀",
        position: 3,
        is_private: false,
        created_at: "2025-08-14 19:41:15.383492+00",
        updated_at: "2025-08-14 19:41:15.383492+00"
      },
      {
        id: "8785ff17-0740-4dba-b6fb-1ece13395b58",
        name: "Recrutement",
        slug: "recrutement",
        description: "Offres de stage et opportunités",
        icon: "💼",
        position: 4,
        is_private: false,
        created_at: "2025-08-14 19:41:15.383492+00",
        updated_at: "2025-08-14 19:41:15.383492+00"
      },
      {
        id: "c36617f3-9cc3-4c4d-a632-76c744e8db1d",
        name: "Aide & Questions",
        slug: "aide-questions",
        description: "Questions techniques et aide générale",
        icon: "❓",
        position: 5,
        is_private: false,
        created_at: "2025-08-14 19:41:15.383492+00",
        updated_at: "2025-08-14 19:41:15.383492+00"
      },
      {
        id: "8f924d47-12c1-48a1-9b4d-6d00bd5211a8",
        name: "Général",
        slug: "general",
        description: "Discussions générales",
        icon: "💬",
        position: 6,
        is_private: false,
        created_at: "2025-08-14 19:41:15.383492+00",
        updated_at: "2025-08-14 19:41:15.383492+00"
      }
    ];
    
    try {
      // Essayer d'abord de récupérer depuis Supabase
      const { data: categories, error: categoriesError } = await supabase
        .from('categories')
        .select('*')
        .order('position');

      if (categoriesError) {
        console.warn('⚠️ Erreur Supabase, utilisation du fallback:', categoriesError);
        return fallbackCategories.map(category => ({
          ...category,
          threads_count: 0,
          posts_count: 0,
          last_post: undefined
        }));
      }

      if (!categories || categories.length === 0) {
        console.log('⚠️ Aucune catégorie trouvée dans Supabase, utilisation du fallback');
        return fallbackCategories.map(category => ({
          ...category,
          threads_count: 0,
          posts_count: 0,
          last_post: undefined
        }));
      }

      console.log('✅ Catégories récupérées depuis Supabase:', categories);

      // Pour chaque catégorie, calculer les statistiques dynamiques
      const categoriesWithStats = await Promise.all(
        categories.map(async (category) => {
          try {
            console.log(`📊 Calcul des stats pour ${category.name}...`);
            
            // Compter les threads dans cette catégorie
            const { count: threadsCount, error: threadsError } = await supabase
              .from('threads')
              .select('*', { count: 'exact', head: true })
              .eq('category_id', category.id);

            if (threadsError) {
              console.warn(`⚠️ Erreur comptage threads pour ${category.name}:`, threadsError);
            }

            console.log(`📈 ${category.name}: ${threadsCount || 0} threads`);

            // Récupérer les IDs des threads pour compter les posts
            const { data: threads, error: threadsListError } = await supabase
              .from('threads')
              .select('id')
              .eq('category_id', category.id);

            if (threadsListError) {
              console.warn(`⚠️ Erreur récupération liste threads pour ${category.name}:`, threadsListError);
            }

            let postsCount = 0;
            let lastPost = undefined;

            if (threads && threads.length > 0) {
              // Compter tous les posts dans les threads de cette catégorie
              const { count: postsCountResult, error: postsError } = await supabase
                .from('posts')
                .select('*', { count: 'exact', head: true })
                .in('thread_id', threads.map(t => t.id));
              
              if (postsError) {
                console.warn(`⚠️ Erreur comptage posts pour ${category.name}:`, postsError);
              } else {
                postsCount = postsCountResult || 0;
                console.log(`💬 ${category.name}: ${postsCount} posts`);
              }

              // Récupérer le dernier post de cette catégorie
              const { data: recentPost, error: lastPostError } = await supabase
                .from('posts')
                .select(`
                  id,
                  created_at,
                  author:profiles(username, display_name),
                  thread:threads!inner(title, slug)
                `)
                .in('thread_id', threads.map(t => t.id))
                .order('created_at', { ascending: false })
                .limit(1)
                .single();

              if (!lastPostError && recentPost && recentPost.thread) {
                lastPost = {
                  id: recentPost.id,
                  author: recentPost.author as any,
                  thread_title: (recentPost.thread as any).title || '',
                  thread_slug: (recentPost.thread as any).slug || '',
                  created_at: recentPost.created_at
                };
                console.log(`🕒 ${category.name}: dernier post ${lastPost.thread_title}`);
              }
            }

            const result = {
              ...category,
              threads_count: threadsCount || 0,
              posts_count: postsCount,
              last_post: lastPost
            };

            console.log(`✅ Stats finales pour ${category.name}:`, {
              threads: result.threads_count,
              posts: result.posts_count,
              hasLastPost: !!result.last_post
            });

            return result;
          } catch (error) {
            console.error(`❌ Erreur lors du calcul des stats pour la catégorie ${category.name}:`, error);
            // Retourner la catégorie avec des stats à 0 en cas d'erreur
            return {
              ...category,
              threads_count: 0,
              posts_count: 0,
              last_post: undefined
            };
          }
        })
      );

      console.log('📊 Catégories avec stats dynamiques:', categoriesWithStats);
      return categoriesWithStats;

    } catch (error) {
      console.warn('❌ Erreur générale, utilisation du fallback:', error);
      
      // En cas d'erreur générale, utiliser les données de fallback
      return fallbackCategories.map(category => ({
        ...category,
        threads_count: 0,
        posts_count: 0,
        last_post: undefined
      }));
    }
  },

  async getBySlug(slug: string) {
    const { data, error } = await supabase
      .from('categories')
      .select('*')
      .eq('slug', slug)
      .single();

    if (error) throw error;
    return data;
  }
};

// Threads API
export const threadsApi = {
  async getRecent(
    { page = 1, pageSize = 20 } = {}
  ): Promise<PaginatedResponse<ThreadWithDetails>> {
    const offset = (page - 1) * pageSize;
    
    console.log('🔍 API getRecent - Récupération threads récents...', { page, pageSize, offset });
    
    try {
      // STRATÉGIE 1: Essayer avec jointures complètes
      console.log('🔄 Tentative avec jointures complètes...');
      const { data: fullData, error: fullError } = await supabase
        .from('threads')
        .select(`
          *,
          author:profiles!inner(username, display_name),
          category:categories!inner(name, slug, icon)
        `)
        .order('created_at', { ascending: false })
        .range(offset, offset + pageSize - 1);

      if (!fullError && fullData && fullData.length > 0) {
        console.log('✅ Succès avec jointures complètes:', fullData);
        return {
          data: fullData,
          pagination: {
            page,
            pageSize,
            totalPages: Math.ceil(fullData.length / pageSize),
            totalCount: fullData.length,
            hasNextPage: false,
            hasPreviousPage: false
          }
        };
      }

      console.log('⚠️ Jointures complètes échouent, tentative jointures optionnelles...');
      
      // STRATÉGIE 2: Jointures optionnelles
      const { data: optionalData, error: optionalError } = await supabase
        .from('threads')
        .select(`
          *,
          author:profiles(username, display_name),
          category:categories(name, slug, icon)
        `)
        .order('created_at', { ascending: false })
        .range(offset, offset + pageSize - 1);

      if (!optionalError && optionalData && optionalData.length > 0) {
        console.log('✅ Succès avec jointures optionnelles:', optionalData);
        return {
          data: optionalData,
          pagination: {
            page,
            pageSize,
            totalPages: Math.ceil(optionalData.length / pageSize),
            totalCount: optionalData.length,
            hasNextPage: false,
            hasPreviousPage: false
          }
        };
      }

      console.log('⚠️ Jointures optionnelles échouent, tentative requête simple...');

      // STRATÉGIE 3: Requête simple sans jointures + enrichissement manuel
      const { data: simpleData, error: simpleError } = await supabase
        .from('threads')
        .select('*')
        .order('created_at', { ascending: false })
        .range(offset, offset + pageSize - 1);

      if (simpleError) {
        throw simpleError;
      }

      console.log('✅ Threads récupérés sans jointures:', simpleData);

      if (!simpleData || simpleData.length === 0) {
        console.log('ℹ️ Aucun thread trouvé');
        return {
          data: [],
          pagination: {
            page, pageSize, totalPages: 0, totalCount: 0, 
            hasNextPage: false, hasPreviousPage: false
          }
        };
      }

      // Enrichir manuellement avec les données des catégories ET des profils
      console.log('🔧 Enrichissement manuel des données...');
      
      const { data: categoriesData } = await supabase
        .from('categories')
        .select('id, name, slug, icon');

      const { data: profilesData } = await supabase
        .from('profiles')
        .select('id, username, display_name, avatar_url');

      const categoriesMap = new Map(
        (categoriesData || []).map(cat => [cat.id, cat])
      );

      const profilesMap = new Map(
        (profilesData || []).map(profile => [profile.id, profile])
      );

      console.log(`📚 Cartes créées: ${categoriesMap.size} catégories, ${profilesMap.size} profils`);

      // Mapper les données enrichies avec de vraies données utilisateur
      const enrichedData = simpleData.map(thread => {
        const realAuthor = profilesMap.get(thread.author_id);
        const realCategory = categoriesMap.get(thread.category_id);
        
        const enriched = {
          ...thread,
          author: realAuthor || { 
            id: thread.author_id || 'unknown',
            username: 'Utilisateur inconnu', 
            display_name: 'Utilisateur inconnu',
            avatar_url: null
          },
          category: realCategory || { 
            id: thread.category_id || 'unknown',
            name: 'Catégorie inconnue', 
            slug: 'unknown', 
            icon: '📁' 
          }
        };

        console.log(`📝 Thread enrichi: "${thread.title}" par ${enriched.author.display_name} dans ${enriched.category.name}`);
        
        return enriched;
      });

      console.log('✅ Enrichissement terminé pour tous les threads');

      return {
        data: enrichedData,
        pagination: {
          page,
          pageSize,
          totalPages: Math.ceil(enrichedData.length / pageSize),
          totalCount: enrichedData.length,
          hasNextPage: false,
          hasPreviousPage: false
        }
      };
      
    } catch (error) {
      console.error('❌ Erreur complète récupération threads:', error);
      
      // DERNIER RECOURS: Données factices pour démonstration
      if (import.meta.env.VITE_DEV_MODE === 'true') {
        console.log('🔧 Mode dev: génération de données factices...');
        const mockThreads = [
          {
            id: 'demo-1',
            title: 'Bienvenue sur le forum !',
            slug: 'bienvenue-sur-le-forum',
            content: 'Premier sujet de démonstration',
            author_id: 'demo-user',
            category_id: 'demo-category',
            is_pinned: false,
            is_locked: false,
            views_count: 1,
            replies_count: 0,
            last_post_id: undefined,
            last_post_at: new Date().toISOString(),
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString(),
            author: { 
              id: 'demo-user',
              username: 'admin', 
              display_name: 'Administrateur',
              avatar_url: undefined,
              role: 'développeur' as const,
              bio: undefined,
              created_at: new Date().toISOString(),
              updated_at: new Date().toISOString()
            },
            category: { 
              id: 'demo-category',
              name: 'Général', 
              slug: 'general', 
              icon: '💬',
              description: 'Discussions générales',
              position: 1,
              is_private: false,
              created_at: new Date().toISOString(),
              updated_at: new Date().toISOString()
            }
          }
        ];
        
        return {
          data: mockThreads,
          pagination: {
            page, pageSize, totalPages: 1, totalCount: 1,
            hasNextPage: false, hasPreviousPage: false
          }
        };
      }
      
      return {
        data: [],
        pagination: {
          page, pageSize, totalPages: 0, totalCount: 0,
          hasNextPage: false, hasPreviousPage: false
        }
      };
    }
  },

  async getByCategory(
    categorySlug: string, 
    { page = 1, pageSize = 20, search = '' } = {}
  ): Promise<PaginatedResponse<ThreadWithDetails>> {
    const offset = (page - 1) * pageSize;
    
    let query = supabase
      .from('threads')
      .select(`
        *,
        author:profiles(*),
        category:categories(*),
        last_post:posts(
          *,
          author:profiles(*)
        )
      `)
      .eq('category.slug', categorySlug);

    if (search) {
      query = query.or(`title.ilike.%${search}%,content.ilike.%${search}%`);
    }

    const { data, error, count } = await query
      .order('is_pinned', { ascending: false })
      .order('last_post_at', { ascending: false })
      .range(offset, offset + pageSize - 1);

    if (error) throw error;

    const totalCount = count || 0;
    const totalPages = Math.ceil(totalCount / pageSize);

    return {
      data: data || [],
      pagination: {
        page,
        pageSize,
        totalPages,
        totalCount,
        hasNextPage: page < totalPages,
        hasPreviousPage: page > 1
      }
    };
  },

  async getById(id: string): Promise<ThreadWithDetails> {
    const { data, error } = await supabase
      .from('threads')
      .select(`
        *,
        author:profiles(*),
        category:categories(*)
      `)
      .eq('id', id)
      .single();

    if (error) throw error;
    return data;
  },

  async create(thread: CreateThreadForm, authorId: string): Promise<Thread> {
    const slug = thread.title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');

    try {
      const { data, error } = await supabase
        .from('threads')
        .insert({
          ...thread,
          slug: `${slug}-${Date.now()}`,
          author_id: authorId
        })
        .select()
        .single();

      if (error) throw error;
      
      console.log('✅ Thread créé avec succès:', data);
      return data;
      
    } catch (error) {
      console.warn('⚠️ Erreur création thread dans Supabase:', error);
      
      // Fallback en mode développement
      if (import.meta.env.VITE_DEV_MODE === 'true') {
        console.log('📄 Mode dev: simulation création de thread');
        
        const mockThread: Thread = {
          id: 'thread-' + Math.random().toString(36).substr(2, 9),
          title: thread.title,
          slug: `${slug}-${Date.now()}`,
          content: thread.content,
          author_id: authorId,
          category_id: thread.category_id,
          is_pinned: false,
          is_locked: false,
          views_count: 0,
          replies_count: 0,
          last_post_id: undefined,
          last_post_at: new Date().toISOString(),
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString()
        };
        
        console.log('✅ Thread simulé créé:', mockThread);
        return mockThread;
      }
      
      throw error;
    }
  },

  async update(id: string, updates: Partial<Thread>): Promise<Thread> {
    const { data, error } = await supabase
      .from('threads')
      .update(updates)
      .eq('id', id)
      .select()
      .single();

    if (error) throw error;
    return data;
  },

  async delete(id: string): Promise<void> {
    const { error } = await supabase
      .from('threads')
      .delete()
      .eq('id', id);

    if (error) throw error;
  },

  async incrementViews(threadId: string, userId?: string): Promise<void> {
    try {
      // For authenticated users, one view per user per thread
      // For anonymous users, one view per IP per thread
      const viewData: any = {
        thread_id: threadId,
        viewed_at: new Date().toISOString()
      };

      if (userId) {
        viewData.user_id = userId;
      } else {
        // For anonymous users, we'll use a placeholder or skip IP tracking for now
        viewData.ip_address = '127.0.0.1'; // Placeholder - in real app, get actual IP
      }

      const { error } = await supabase
        .from('thread_views')
        .upsert(viewData, {
          onConflict: userId ? 'user_id,thread_id' : 'ip_address,thread_id'
        });

      // Ignore unique constraint violations
      if (error && !error.message.includes('duplicate key') && !error.message.includes('violates unique constraint')) {
        throw error;
      }
    } catch (error) {
      // Silently ignore duplicate view errors
      console.debug('View tracking error (ignored):', error);
    }
  }
};

// Posts API
export const postsApi = {
  async getByThread(
    threadId: string,
    { page = 1, pageSize = 20 } = {}
  ): Promise<PaginatedResponse<PostWithDetails>> {
    const offset = (page - 1) * pageSize;

    const { data, error, count } = await supabase
      .from('posts')
      .select(`
        *,
        author:profiles(*),
        reply_to:posts(
          id,
          content,
          author:profiles(username, display_name)
        )
      `)
      .eq('thread_id', threadId)
      .order('created_at')
      .range(offset, offset + pageSize - 1);

    if (error) throw error;

    const totalCount = count || 0;
    const totalPages = Math.ceil(totalCount / pageSize);

    return {
      data: data || [],
      pagination: {
        page,
        pageSize,
        totalPages,
        totalCount,
        hasNextPage: page < totalPages,
        hasPreviousPage: page > 1
      }
    };
  },

  async create(post: CreatePostForm, authorId: string): Promise<Post> {
    const { data, error } = await supabase
      .from('posts')
      .insert({
        ...post,
        author_id: authorId
      })
      .select()
      .single();

    if (error) throw error;
    return data;
  },

  async update(id: string, content: string): Promise<Post> {
    const { data, error } = await supabase
      .from('posts')
      .update({
        content,
        is_edited: true,
        edited_at: new Date().toISOString()
      })
      .eq('id', id)
      .select()
      .single();

    if (error) throw error;
    return data;
  },

  async delete(id: string): Promise<void> {
    const { error } = await supabase
      .from('posts')
      .delete()
      .eq('id', id);

    if (error) throw error;
  }
};

// Search API
export const searchApi = {
  async search(query: string, { page = 1, pageSize = 20 } = {}): Promise<PaginatedResponse<SearchResult>> {
    const offset = (page - 1) * pageSize;

    // Search in threads
    const { data: threadResults, error: threadError } = await supabase
      .from('threads')
      .select(`
        id,
        title,
        content,
        slug,
        created_at,
        author:profiles(*)
      `)
      .or(`title.ilike.%${query}%,content.ilike.%${query}%`)
      .order('created_at', { ascending: false });

    if (threadError) throw threadError;

    // Search in posts
    const { data: postResults, error: postError } = await supabase
      .from('posts')
      .select(`
        id,
        content,
        created_at,
        author:profiles(*),
        thread:threads(id, title, slug)
      `)
      .ilike('content', `%${query}%`)
      .order('created_at', { ascending: false });

    if (postError) throw postError;

    // Combine and format results
    const results: SearchResult[] = [
      ...(threadResults || []).map(thread => ({
        type: 'thread' as const,
        id: thread.id,
        title: thread.title,
        content: thread.content,
        author: thread.author as any,
        created_at: thread.created_at,
        thread: {
          id: thread.id,
          title: thread.title,
          slug: thread.slug
        }
      })),
      ...(postResults || []).map(post => ({
        type: 'post' as const,
        id: post.id,
        content: post.content,
        author: post.author as any,
        created_at: post.created_at,
        thread: post.thread as any
      }))
    ];

    // Sort by relevance (simple text matching for now)
    results.sort((a, b) => {
      const aRelevance = (a.title?.toLowerCase().includes(query.toLowerCase()) ? 2 : 0) +
                        (a.content.toLowerCase().includes(query.toLowerCase()) ? 1 : 0);
      const bRelevance = (b.title?.toLowerCase().includes(query.toLowerCase()) ? 2 : 0) +
                        (b.content.toLowerCase().includes(query.toLowerCase()) ? 1 : 0);
      return bRelevance - aRelevance;
    });

    const totalCount = results.length;
    const paginatedResults = results.slice(offset, offset + pageSize);
    const totalPages = Math.ceil(totalCount / pageSize);

    return {
      data: paginatedResults,
      pagination: {
        page,
        pageSize,
        totalPages,
        totalCount,
        hasNextPage: page < totalPages,
        hasPreviousPage: page > 1
      }
    };
  }
};

// Activity API
export const activityApi = {
  async getRecentActivity(): Promise<RecentActivity> {
    console.log('🔍 Récupération de l\'activité récente...');
    
    try {
      // Get recent posts avec jointures
      const { data: recentPosts, error: postsError } = await supabase
        .from('posts')
        .select(`
          id,
          content,
          created_at,
          author:profiles(username, display_name),
          thread:threads!inner(id, title, slug)
        `)
        .order('created_at', { ascending: false })
        .limit(10);

      if (postsError) {
        console.error('❌ Erreur lors de la récupération des posts récents:', postsError);
      }

      // Get recent threads avec jointures
      const { data: recentThreads, error: threadsError } = await supabase
        .from('threads')
        .select(`
          id,
          title,
          slug,
          replies_count,
          views_count,
          created_at,
          author:profiles(username, display_name),
          category:categories(name, slug, icon)
        `)
        .order('created_at', { ascending: false })
        .limit(10);

      if (threadsError) {
        console.error('❌ Erreur lors de la récupération des threads récents:', threadsError);
      }

      const activity = {
        recent_posts: (recentPosts || []) as any,
        recent_threads: (recentThreads || []) as any
      };

      console.log('✅ Activité récente récupérée:', activity);
      return activity;

    } catch (error) {
      console.error('❌ Erreur générale lors de la récupération de l\'activité:', error);
      
      // Retourner des tableaux vides en cas d'erreur
      return {
        recent_posts: [],
        recent_threads: []
      };
    }
  }
};

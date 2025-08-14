import { threadSchema, postSchema } from '../../lib/supabase/validators';

describe('Zod validation', () => {
  it('valide un thread correct', () => {
    expect(() => threadSchema.parse({
      title: 'Titre',
      content: 'Contenu',
      category_id: 1
    })).not.toThrow();
  });
  it('rejette un titre trop court', () => {
    expect(() => threadSchema.parse({
      title: 'A', content: 'Contenu', category_id: 1 })).toThrow();
  });
  it('valide un post correct', () => {
    expect(() => postSchema.parse({
      thread_id: 1,
      content: 'Réponse'
    })).not.toThrow();
  });
  it('rejette un post vide', () => {
    expect(() => postSchema.parse({ thread_id: 1, content: '' })).toThrow();
  });
});

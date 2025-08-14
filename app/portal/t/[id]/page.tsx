// Vue d’un thread avec ses posts
"use client";
import React, { useEffect, useState } from "react";
import ThreadItem from "../../../components/portal/ThreadItem";
import PostList from "../../../components/portal/PostList";
import PostComposer from "../../../components/portal/PostComposer";
import RealtimeToggle from "../../../components/portal/RealtimeToggle";
import { getThreadById, getPostsByThread } from "../../../lib/supabase/server";
import { subscribeToPosts, unsubscribe } from "../../../lib/supabase/realtime";

export default function ThreadPage({ params, searchParams }: any) {
  const { id } = params;
  const page = Number(searchParams?.page) || 1;
  const [thread, setThread] = useState<any>(null);
  const [posts, setPosts] = useState<any[]>([]);
  const [total, setTotal] = useState(0);
  const [realtime, setRealtime] = useState(false);

  useEffect(() => {
    (async () => {
      setThread(await getThreadById(id));
      const { posts, total } = await getPostsByThread(id, page);
      setPosts(posts);
      setTotal(total);
    })();
  }, [id, page]);

  useEffect(() => {
    if (!realtime) return;
    const channel = subscribeToPosts(Number(id), (post) => {
      setPosts((prev) => [...prev, post]);
      setTotal((t) => t + 1);
    });
    return () => unsubscribe(channel);
  }, [realtime, id]);

  return (
    <main className="max-w-2xl mx-auto py-8">
      <div className="flex items-center mb-2">
        <ThreadItem thread={thread} />
        <RealtimeToggle enabled={realtime} onToggle={setRealtime} />
      </div>
      <PostList posts={posts} total={total} thread={thread} page={page} />
      <PostComposer threadId={id} />
    </main>
  );
}

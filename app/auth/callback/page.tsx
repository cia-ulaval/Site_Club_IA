// Callback OAuth Supabase
"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "../../../lib/supabase/client";

export default function AuthCallback() {
  const router = useRouter();
  useEffect(() => {
    supabase.auth.onAuthStateChange((_event, session) => {
      if (session) router.replace("/portal");
    });
  }, [router]);
  return <div className="p-8 text-center">Connexion…</div>;
}

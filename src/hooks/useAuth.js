import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabaseClient';

export function useAuth() {
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(!!supabase);

  useEffect(() => {
    if (!supabase) return;

    supabase.auth.getSession().then(({ data }) => {
      setSession(data.session);
      setLoading(false);
    });

    const { data: listener } = supabase.auth.onAuthStateChange((_event, newSession) => {
      setSession(newSession);
    });

    return () => listener.subscription.unsubscribe();
  }, []);

  async function enviarMagicLink(email) {
    if (!supabase) throw new Error('Supabase no está configurado.');
    const { error } = await supabase.auth.signInWithOtp({
      email,
      options: { emailRedirectTo: window.location.origin },
    });
    if (error) throw error;
  }

  async function cerrarSesion() {
    if (!supabase) return;
    await supabase.auth.signOut();
  }

  return {
    session,
    usuario: session?.user ?? null,
    loading,
    disponible: !!supabase,
    enviarMagicLink,
    cerrarSesion,
  };
}

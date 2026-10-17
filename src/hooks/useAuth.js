import { useEffect, useState } from 'react';
import {
  isSignInWithEmailLink,
  onAuthStateChanged,
  sendSignInLinkToEmail,
  signInWithEmailLink,
  signOut,
} from 'firebase/auth';
import { auth } from '../lib/firebaseClient';

const EMAIL_KEY = 'vc_email_login';

// El link del mail es de un solo uso: evita que React (StrictMode en
// desarrollo) lo intente canjear dos veces.
let canjeEnCurso = false;

function limpiarUrl() {
  window.history.replaceState({}, document.title, window.location.origin + window.location.pathname);
}

export function useAuth() {
  const [usuario, setUsuario] = useState(null);
  const [loading, setLoading] = useState(!!auth);
  const [necesitaEmail, setNecesitaEmail] = useState(false);
  const [errorLink, setErrorLink] = useState('');

  useEffect(() => {
    if (!auth) return;
    return onAuthStateChanged(auth, (user) => {
      setUsuario(user ? { id: user.uid, email: user.email } : null);
      setLoading(false);
    });
  }, []);

  async function canjearLink(email) {
    try {
      await signInWithEmailLink(auth, email, window.location.href);
      localStorage.removeItem(EMAIL_KEY);
      setNecesitaEmail(false);
      setErrorLink('');
    } catch (err) {
      setErrorLink('El link ya se usó o venció. Pedí uno nuevo.');
      console.error('[firebase] error al canjear el link', err);
    } finally {
      limpiarUrl();
    }
  }

  useEffect(() => {
    if (!auth || canjeEnCurso || !isSignInWithEmailLink(auth, window.location.href)) return;
    canjeEnCurso = true;
    const guardado = localStorage.getItem(EMAIL_KEY);
    if (guardado) {
      canjearLink(guardado);
    } else {
      // El link se abrió en otro dispositivo o navegador: hay que confirmar el mail.
      setNecesitaEmail(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function enviarMagicLink(email) {
    if (!auth) throw new Error('Los usuarios todavía no están configurados.');
    await sendSignInLinkToEmail(auth, email, {
      url: window.location.origin,
      handleCodeInApp: true,
    });
    localStorage.setItem(EMAIL_KEY, email);
  }

  async function completarConEmail(email) {
    await canjearLink(email);
  }

  async function cerrarSesion() {
    if (!auth) return;
    await signOut(auth);
  }

  return {
    usuario,
    loading,
    disponible: !!auth,
    enviarMagicLink,
    cerrarSesion,
    necesitaEmail,
    completarConEmail,
    errorLink,
  };
}

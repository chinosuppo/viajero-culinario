import { useState } from 'react';

export default function AuthBar({ disponible, usuario, loading, onEnviarLink, onCerrarSesion }) {
  const [email, setEmail] = useState('');
  const [estado, setEstado] = useState('idle'); // idle | enviando | enviado | error
  const [errorMsg, setErrorMsg] = useState('');

  if (!disponible || loading) return null;

  if (usuario) {
    return (
      <div className="auth-bar">
        <span className="auth-status">
          ☁️ Conectado como <strong>{usuario.email}</strong> — tus favoritos e historial se guardan
          en tu cuenta.
        </span>
        <button className="auth-link-btn" onClick={onCerrarSesion}>
          Cerrar sesión
        </button>
      </div>
    );
  }

  if (estado === 'enviado') {
    return (
      <div className="auth-bar">
        <span className="auth-status">
          📬 Te mandamos un link a <strong>{email}</strong>. Abrilo desde este mismo dispositivo
          para entrar.
        </span>
        <button className="auth-link-btn" onClick={() => setEstado('idle')}>
          Usar otro email
        </button>
      </div>
    );
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (!email.trim()) return;
    setEstado('enviando');
    setErrorMsg('');
    try {
      await onEnviarLink(email.trim());
      setEstado('enviado');
    } catch (err) {
      setEstado('error');
      setErrorMsg(err.message || 'No se pudo enviar el link. Probá de nuevo.');
    }
  }

  return (
    <form className="auth-bar" onSubmit={handleSubmit}>
      <span className="auth-status">
        ☁️ Iniciá sesión para guardar favoritos e historial en cualquier dispositivo (opcional):
      </span>
      <input
        type="email"
        required
        placeholder="tu@email.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="auth-input"
      />
      <button className="auth-link-btn" type="submit" disabled={estado === 'enviando'}>
        {estado === 'enviando' ? 'Enviando...' : 'Enviarme el link'}
      </button>
      {estado === 'error' && <span className="auth-error">{errorMsg}</span>}
    </form>
  );
}

import { useState } from 'react';
import { flagImageUrl } from '../utils/flags';

export default function Flag({ emoji, size = 48, className = '' }) {
  const [failed, setFailed] = useState(false);
  const url = flagImageUrl(emoji, size);

  if (!url || failed) {
    return <span className={className}>{emoji}</span>;
  }

  return (
    <img
      src={url}
      alt=""
      className={`flag-img ${className}`}
      onError={() => setFailed(true)}
    />
  );
}

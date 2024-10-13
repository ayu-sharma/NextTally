// utility/createEmotionCache.js
import createCache from '@emotion/cache';

// This is for client-side emotion caching to avoid CSS insertion delay
export default function createEmotionCache() {
  return createCache({ key: 'css', prepend: true });
}

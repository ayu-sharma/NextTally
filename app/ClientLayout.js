// app/ClientLayout.js
'use client';

import { CacheProvider } from '@emotion/react';
import { ThemeProvider } from '@mui/material/styles';
import createEmotionCache from '../utility/createEmotionCache';
import CssBaseline from '@mui/material/CssBaseline';
import theme from '../utility/theme';

// Client-side Emotion cache
const clientSideEmotionCache = createEmotionCache();

export default function ClientLayout({ children }) {
  return (
    <CacheProvider value={clientSideEmotionCache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </CacheProvider>
  );
}

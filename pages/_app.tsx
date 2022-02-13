import { CacheProvider } from '@emotion/react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { AppProps } from 'next/app';
import { EmotionCache } from '@emotion/cache';
import Head from 'next/head';

import createEmotionCache from 'utils/create-emotion-cache';
import lightTheme from 'styles/theme';

const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache: EmotionCache;
}

function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  return (
    <CacheProvider value={ emotionCache }>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={ lightTheme }>
        <CssBaseline />
        <Component { ...pageProps } />
      </ThemeProvider>
    </CacheProvider>
  );
}

export default MyApp;

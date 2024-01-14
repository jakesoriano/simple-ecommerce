import { ReactElement } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import Head from 'next/head';
import type { AppProps } from 'next/app';

import { AppCacheProvider } from '@mui/material-nextjs/v13-pagesRouter';
import { ThemeProvider } from '@mui/material/styles';
import { DialogProvider } from '@/contexts/dialog';

import CssBaseline from '@mui/material/CssBaseline';
import GlobalStyles from '@mui/material/GlobalStyles';
import { globalStyles } from '@/styles/global';

import theme from '@/theme';
import { persistor, store } from '@/store';

export default function App({ Component, pageProps }: AppProps) {
  const getLayout =
    (Component as any).getLayout || ((page: ReactElement) => page);
  return (
    <AppCacheProvider>
      <Head>
        <meta name='viewport' content='initial-scale=1, width=device-width' />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <GlobalStyles styles={globalStyles} />
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <DialogProvider>
              {getLayout(<Component {...pageProps} />)}
            </DialogProvider>
          </PersistGate>
        </Provider>
      </ThemeProvider>
    </AppCacheProvider>
  );
}

// pages/_app.tsx
import { AppProps } from 'next/app';
import '../styles/globals.css';
import RootLayout from '../components/layout';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RootLayout>
      <Component {...pageProps} />
    </RootLayout>
  );
}

export default MyApp;

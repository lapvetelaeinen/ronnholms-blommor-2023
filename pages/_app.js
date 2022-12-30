import { useRouter } from "next/router";
import { IntlProvider } from "react-intl";
import '../styles/globals.css'
import Layout from "../components/Layout.js";
import { NavStateProvider } from '../context/AppContext';
import { Inter, Playfair_Display } from '@next/font/google';

import fi from "../lang/fi.json";
import se from "../lang/se.json";
import { Main } from "next/document";

const messages = {
  "fi": fi,
  "se": se,
};

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
})

function MyApp({ Component, pageProps }) {
  const { locale } = useRouter();

  return (
    <main className={`${inter.variable} ${playfair.variable} font-bread`}>
    <NavStateProvider>
      <Layout>
        <IntlProvider locale={locale} messages={messages[locale]}>
        <Component {...pageProps} />
        </IntlProvider>
      </Layout>
      </NavStateProvider>
      </main>

  );
}

export default MyApp

import { useRouter } from "next/router";
import { IntlProvider } from "react-intl";
import '../styles/globals.css'
import Layout from "../components/Layout.js";
import { NavStateProvider } from '../context/AppContext';

import fi from "../lang/fi.json";
import se from "../lang/se.json";

const messages = {
  "fi": fi,
  "se": se,
};

function MyApp({ Component, pageProps }) {
  const { locale } = useRouter();

  return (
    <NavStateProvider>
      <Layout>
        <IntlProvider locale={locale} messages={messages[locale]}>
        <Component {...pageProps} />
        </IntlProvider>
      </Layout>
      </NavStateProvider>
  );
}

export default MyApp

import { useRouter } from "next/router";
import { IntlProvider } from "react-intl";
import '../styles/globals.css'
import Layout from "../components/Layout.js";

import fi from "../lang/fi.json";
import se from "../lang/se.json";

const messages = {
  "fi": fi,
  "se": se,
};

function MyApp({ Component, pageProps }) {
  const { locale } = useRouter();

  return (
      <Layout>
        <IntlProvider locale={locale} messages={messages[locale]}>
        <Component {...pageProps} />
        </IntlProvider>
      </Layout>
  );
}

export default MyApp

import Head from "next/head";
import { useRouter } from "next/router";
import { FormattedMessage, useIntl } from "react-intl";
import FlowersContainer from "../components/FlowersContainer";
import { NavStateContext } from "../context/AppContext";
import { useContext, useEffect } from "react";
import FlowerCardBig from "../components/FlowerCardBig";


export default function MinLista() {

  const { cookieFlowers, setCookieFlowers } = useContext(NavStateContext);

  const { locales } = useRouter();

  const intl = useIntl();



  return (
    <div className="">
      <Head>
        <title>Rönnholms blommor</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="pt-[59px]">
      <div className="bg-[url(/stjarnoga.jpg)] bg-cover bg-bottom md:bg-center relative cursor-pointer h-[200px] md:h-[200px]">
          <div className="flex flex-col justify-center items-center bg-black bg-opacity-40 w-full px-10 py-8 md:py-8 md:px-12 h-[200px] md:h-[200px]">
            <h1 className="text-white text-3xl font-heading text-center leading-normal">
              Min lista
            </h1>
          </div>
        </div>
        <div className="flex flex-col md:flex-row md:flex-wrap md:items-baseline md:justify-center gap-8 bg-neutral-100 items-center pt-16 pb-24">
            { cookieFlowers.length ? cookieFlowers.map((flower) => <FlowerCardBig data={flower} liked={true}/>) : <div>Du har inga blommor i din lista</div>} 
        </div>
      </main>
    </div>
  );
}

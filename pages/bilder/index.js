import Head from "next/head";
import { useRouter } from "next/router";
import { FormattedMessage, useIntl } from "react-intl";
import galleri2 from "../../public/galleri2.jpg";
import Image from "next/image";

export default function Gallery() {
  const router = useRouter();

  return (
    <div className="">
      <Head>
        <title>Rönnholms blommor</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-neutral-100">


        <div className="w-full h-[200px] relative">
          <Image
            src={galleri2}
            fill
            placeholder="blur"
            priority
            className="object-cover overflow-hidden"
          />
          <div className="absolute flex flex-col justify-center items-center bg-black bg-opacity-40 w-full px-10 py-8 md:py-8 md:px-12 h-[200px] md:h-[200px]">
            <h1 className="text-white text-3xl font-heading text-center leading-normal">
              Bildgalleri
            </h1>
          </div>
        </div>

        <div className="flex justify-center">

        <div className="bg-yellow-100 border-b-2 border-dashed border-neutral-600 md:mt-10 md:w-[50vw] md:text-center md:border-2 md:p-8">
          <h3 className="p-4 text-5xl font-heading leading-normal text-neutral-900">
            Låt dig inspireras
          </h3>
          <p className="px-4 pb-8 text-xl font-bread leading-normal text-neutral-600">
            Våra sommarblommor lämpar sig bra i alla olika miljöer. <br />{" "}
            Bläddra igenom de olika kategorierna för inspiration till din egna
            plantering!
          </p>
        </div>
        </div>

        <div className="mx-4 pt-20 pb-32 flex flex-col gap-2 md:flex-row md:justify-center">
          <div
            className="bg-[url(/vaxthus.jpg)] bg-cover relative cursor-pointer"
            onClick={() => router.push("/bilder/vaxthus")}
          >
            <div className="flex flex-col justify-center items-center bg-black bg-opacity-40 w-full py-8 md:py-8 md:px-12">
              <h3 className="text-white text-3xl font-heading">Vårt växthus</h3>
              <p className="text-neutral-300 pt-4">Klicka för att se mer</p>
            </div>
          </div>
          <div
            className="bg-[url(/narpes-stad.jpg)] bg-cover bg-center relative cursor-pointer"
            onClick={() => router.push("/bilder/narpes-stad")}
          >
            <div className="flex flex-col justify-center items-center bg-black bg-opacity-40 w-full py-8 md:py-8 md:px-12">
              <h3 className="text-white text-3xl font-heading">Närpes Stad</h3>
              <p className="text-neutral-300 pt-4">Klicka för att se mer</p>
            </div>
          </div>
          <div
            className="bg-[url(/mosedal.jpg)] bg-cover relative bg-center cursor-pointer"
            onClick={() => router.push("/bilder/sfim")}
          >
            <div className="flex flex-col justify-center items-center bg-black bg-opacity-40 w-full py-8 md:py-8 md:px-12">
              <h3 className="text-white text-3xl font-heading">SFIM 2021</h3>
              <p className="text-neutral-300 pt-4">Klicka för att se mer</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}


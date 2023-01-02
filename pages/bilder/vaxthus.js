import Head from "next/head";
import { useRouter } from "next/router";
import { FormattedMessage, useIntl } from "react-intl";
import GalleryContainer from "../../components/GalleryContainer";

export default function Gallery(props) {
  const router = useRouter();

  return (
    <main className="pt-[59px] md:pt-[100px] bg-neutral-100 flex flex-col items-center">
      <div className="bg-yellow-100 border-b-2 border-dashed border-neutral-600 md:mt-10 md:w-[50vw] md:text-center md:border-none md:shadow-md md:p-8">
        <h3 className="p-4 text-5xl font-heading leading-normal text-neutral-900">
          Växthuset
        </h3>
        <p className="px-4 pb-8 text-xl font-bread leading-normal text-neutral-600">
          Bläddra igenom bilderna nedan så får du se hur vi har det i vårt växthus i Övermark!
        </p>
      </div>
      <GalleryContainer data={props.data} />
    </main>
  );
}

export const getStaticProps = async () => {
  const data = await fetch(
    "https://arzcqb3s2d.execute-api.eu-west-2.amazonaws.com/prod/get-gallery?gallery=vaxthus"
  ).then((response) => response.json());
  return {
    props: { data },
  };
};

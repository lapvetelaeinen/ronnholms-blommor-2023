import Head from "next/head";
import { useRouter } from "next/router";
import { FormattedMessage, useIntl } from "react-intl";
import GalleryContainer from "../../components/GalleryContainer";



export default function Gallery(props) {

const router = useRouter();


  return (

      <main>

        <h1 className="text-4xl font-heading font-medium">Bilder från Närpes Stad</h1>
        <GalleryContainer data={props.data}/>

      </main>

  );
}


export const getStaticProps = async () => {
  const data = await fetch(
    "https://arzcqb3s2d.execute-api.eu-west-2.amazonaws.com/prod/get-gallery?gallery=narpes-stad"
  ).then((response) => response.json());
  return {
    props: { data }
  };
};
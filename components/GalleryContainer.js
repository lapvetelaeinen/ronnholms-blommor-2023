import { useState } from "react";
import { useRouter } from "next/router";
import GalleryCard from "./GalleryCard";
import Image from "next/image";

export default function GalleryContainer({ data }){

    const [images, setImages] = useState(data);

    const router = useRouter();
  
    const getNewGallery = async (gallery) => {

        const res = await fetch(
          `https://arzcqb3s2d.execute-api.eu-west-2.amazonaws.com/prod/get-gallery?gallery=${gallery}`
        );
        const newImages = await res.json();
        setImages(newImages);
  
        console.log(images);
      };

    return(
<>
<div className="flex flex-col gap-12 pt-20 pb-32 md:flex-row justify-center items-center md:flex-wrap md:items-baseline">

          {images
            ? images.map((image, index) => (
                <GalleryCard key={index} data={image}/>
              ))
            : null}

</div>

</>


    )
}
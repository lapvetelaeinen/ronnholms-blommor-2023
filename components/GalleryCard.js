import Image from "next/image"

export default function GalleryCard({ data }){

    console.log("<>>> : ", data.imgName);

    return(
        <div className="h-[400px] md:h-[350px] flex flex-col mx-4 shadow-md rounded-md">
            <div className="w-full h-full relative">
                <Image
                src={`https://ronnholms-blommor-bilder.s3.eu-west-2.amazonaws.com/${data.imgName.S + ".jpg"}`}
                alt="lala"
                fill
                priority
                sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
                className="object-cover rounded-md"
                />
            </div>
        </div>
    )
}
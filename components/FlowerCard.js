import Image from "next/image"

export default function FlowerCard({ data }){
    return(
        <div className="h-[400px] md:h-[350px] flex flex-col mx-4 shadow-md rounded-3xl">
            <div className="w-full h-4/5 relative">
                <Image
                src={`https://ronnholms-blommor-bilder.s3.eu-west-2.amazonaws.com/${data.imgName}`}
                alt="lala"
                fill
                priority
                sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
                className="object-cover rounded-t-3xl"
                />
            </div>
            <div className="bg-white flex-1 flex items-center justify-center rounded-b-3xl">
                {data.name}
            </div>
        </div>
    )
}
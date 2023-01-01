import Image from "next/image"

export default function FlowerCard({ data }){
    return(
        <div className="h-[400px] md:h-[350px] flex flex-col shadow-md">
            <div className="min-w-[300px] h-4/5 relative bg-white">
                <Image
                src={`https://ronnholms-blommor-bilder.s3.eu-west-2.amazonaws.com/${data.imgName}`}
                alt="lala"
                fill
                priority
                sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
                className="object-cover overflow-hidden"
                />
            </div>
            <div className="bg-neutral-100 flex-1 flex items-center justify-center overflow-hidden">
                {data.name}
            </div>
        </div>
    )
}
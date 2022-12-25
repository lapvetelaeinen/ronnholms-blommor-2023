import Image from "next/image"

export default function FlowerCard({ img }){
    return(
        <div className="h-[400px] md:h-[350px] flex flex-col mx-4 shadow-md rounded-3xl">
            <div className="w-full h-4/5 relative">
                <Image
                src={`https://ronnholms-blommor-bilder.s3.eu-west-2.amazonaws.com/${flower.imgName}`}
                alt="lala"
                fill
                priority
                className="object-cover rounded-t-3xl"
                />
            </div>
            <div className="bg-white flex-1 flex items-center justify-center rounded-b-3xl">
                FlowerName
            </div>
        </div>
    )
}
import Image from "next/image";
import Heart from "./svg/Heart";
import HeartLight from "./svg/HeartLight";

export default function FlowerCard({ data }) {
  return (
    <div className="flex flex-col">
      <div className="min-w-[200px] h-[250px] relative bg-white shadow-md">
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
        <div className="absolute right-0 bottom-0 p-4">
          <HeartLight width={40} fill="Gainsboro"/>
        </div>
      </div>
      <h3 className="text-lg p-2 font-bread font-semibold text-neutral-600">
        {data.name}
      </h3>
      <p className="font-bread italic pl-2 text-neutral-400">{data.category}</p>
    </div>
  );
}

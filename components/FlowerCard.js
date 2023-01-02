import Image from "next/image";
import { useState, useEffect, useContext } from "react";
import { NavStateContext } from "../context/AppContext";
import HeartSolid from "./svg/HeartSolid";
import HeartLight from "./svg/HeartLight";
import Times from "./svg/Times";
import { setCookie, getCookie } from 'cookies-next';

export default function FlowerCard({ data, liked }) {
const [isLiked, setIsLiked] = useState(false);

const { cookieFlowers, setCookieFlowers } = useContext(NavStateContext);

function toggleObjectInArray(array, object) {
    const index = array.findIndex(item => item.name === object.name);
    if (index === -1) {
      array.push(object);
    } else {
      array.splice(index, 1);
      setCookieFlowers([]);
    }
  }

const likeFlower = (flower) => {
    const cookie = getCookie('liked');
    setIsLiked(!isLiked);
    console.log(cookieFlowers);

    if(cookie){
        const oldCookie = JSON.parse(cookie);
        toggleObjectInArray(oldCookie, flower);
        setCookie('liked', oldCookie);
        setCookieFlowers(oldCookie);
    } else {
        const newCookie = [];
        newCookie.push(flower);
        setCookie('liked', newCookie);
        setCookieFlowers(newCookie);
    }
}

useEffect(() => {
    const cookie = getCookie('liked');

    if(cookie){
        const oldCookie = JSON.parse(cookie);


        const index = oldCookie.findIndex(item => item.name === data.name);
        if (index === -1) {
          return;
        } else {
          setIsLiked(true);
        }

    } else {
        return;
    }
},[])

  return (
    <div className="flex flex-col">
      <div className="w-[200px] h-[250px] relative bg-white shadow-md">
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
        <div className={`cursor-pointer ${liked ? "absolute right-0 top-0 p-4" : "absolute right-0 bottom-0 p-4"}`} onClick={() => likeFlower(data)}>
            {liked ? <Times width={25} fill="black"/> : isLiked ? <HeartSolid width={40} fill="salmon"/> : <HeartLight width={40} fill="Gainsboro"/>}
          
        </div>
      </div>
      <h3 className="text-lg p-2 font-bread font-semibold text-neutral-600 w-[200px]">
        {data.name}
      </h3>
      <p className="font-bread italic pl-2 text-neutral-400">{data.category}</p>
    </div>
  );
}

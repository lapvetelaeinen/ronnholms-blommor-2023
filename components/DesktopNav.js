import { useState } from "react";
import { useRouter } from "next/router.js";
import Heart from "./svg/Heart";
import Flower from "./svg/Flower";
import Phone from "./svg/Phone";
import Question from "./svg/Question";
import Images from "./svg/Images";
import Clock from "./svg/Clock";
import Home from "./svg/Home";
import Se from "./svg/Se";
import Fi from "./svg/Fi";
import Link from "next/link.js";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

function DesktopNav() {
  const router = useRouter();

  const { pathname, asPath, query } = router;

  const { locale } = useRouter();


  return (
    <>
      <div className="bg-rose-600 hidden md:flex justify-between items-center">
        <Link href="/" className="pl-6">
          <img src="/logo.svg" alt="next" className="w-[150px]" />
        </Link>
        <div className="flex justify-between items-center font-appareo text-neutral-100">
          <Link href="/">
            <div className={`flex items-center hover:bg-rose-700 py-8 px-6 ${asPath == "/" ? "bg-rose-700" : ""}`}>
              <Home fill="#f5f5f5" width="20px" height="20px" />
              <p className="text-center leading-none pl-2">Startsida</p>
            </div>
          </Link>
          <Link href="/blommor">
            <div className={`flex items-center hover:bg-rose-700 py-8 px-6 ${asPath == "/blommor" ? "bg-rose-700" : ""}`}>
              <Flower fill="#f5f5f5" width="20px" height="20px" />
              <p className="text-center leading-none pl-2">Blommor</p>
            </div>
          </Link>
          <Link href="/kontakt">
            <div className={`flex items-center hover:bg-rose-700 py-8 px-6 ${asPath == "/kontakt" ? "bg-rose-700" : ""}`}>
              <Phone fill="#f5f5f5" width="20px" height="20px" />
              <p className="text-center leading-none pl-2">Kontakt</p>
            </div>
          </Link>
          <Link href="/om-oss">
            <div className={`flex items-center hover:bg-rose-700 py-8 px-6 ${asPath == "/om-oss" ? "bg-rose-700" : ""}`}>
              <Question fill="#f5f5f5" width="20px" height="20px" />
              <p className="text-center leading-none pl-2">Om oss</p>
            </div>
          </Link>
          <Link href="/oppettider">
            <div className={`flex items-center hover:bg-rose-700 py-8 px-6 ${asPath == "/oppettider" ? "bg-rose-700" : ""}`}>
              <Clock fill="#f5f5f5" width="20px" height="20px" />
              <p className="text-center leading-none pl-2">Öppettider</p>
            </div>
          </Link>
          <Link href="/galleri">
            <div className={`flex items-center hover:bg-rose-700 py-8 px-6 ${asPath == "/galleri" ? "bg-rose-700" : ""}`}>
              <Images fill="#f5f5f5" width="20px" height="20px" />
              <p className="text-center leading-none pl-2">Bildgalleri</p>
            </div>
          </Link>
          <Link href="/min-lista">
            <div className={`flex items-center hover:bg-rose-700 py-8 px-6 ${asPath == "/min-lista" ? "bg-rose-700" : ""}`}>
              <Heart fill="#f5f5f5" width="20px" height="20px" />
              <p className="text-center leading-none pl-2">Min lista</p>
            </div>
          </Link>
          <DropdownMenu.Root>
            <DropdownMenu.Trigger className="flex items-center hover:bg-rose-700 py-8 px-6">
              
              {locale == "se" ? <Se width={20} /> : <Fi width={20} />}
              {locale == "se" ? <p className="pl-2">Svenska</p> : <p className="pl-2">Suomi</p>}
              
            </DropdownMenu.Trigger>
            <DropdownMenu.Content className="bg-neutral-500 w-full rounded-b-lg text-neutral-600 shadow-md z-50">
              <DropdownMenu.Item className="bg-neutral-300 hover:bg-neutral-400" onClick={() => router.push({ pathname, query }, asPath, { locale: "se" })}>

                  <div className="flex items-center justify-start py-2 px-6 cursor-pointer">
                    <Se width={15} />
                    <p className="pl-2">Svenska</p>
                  </div>

              </DropdownMenu.Item>
              <DropdownMenu.Item className="bg-neutral-300 hover:bg-neutral-400 rounded-b-lg" onClick={() => router.push({ pathname, query }, asPath, { locale: "fi" })}>

                  <div className="flex items-center justify-start py-2 px-6 cursor-pointer">
                    <Fi width={15} />
                    <p className="pl-2">Suomi</p>
                  </div>

              </DropdownMenu.Item>

            </DropdownMenu.Content>
          </DropdownMenu.Root>
        </div>
      </div>
    </>
  );
}

export default DesktopNav;

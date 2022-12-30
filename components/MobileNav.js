import { useState, useContext, useEffect } from "react";
import { useRouter } from "next/router.js";
import { NavStateContext } from "../context/AppContext";
import Bars from "./svg/Bars";
import Times from "./svg/Times";
import Heart from "./svg/Heart";
import Flower from "./svg/Flower";
import Phone from "./svg/Phone";
import Question from "./svg/Question";
import Images from "./svg/Images";
import Clock from "./svg/Clock";
import Home from "./svg/Home";
import Se from "./svg/Se";
import Fi from "./svg/Fi";
import Link from "next/link";
import { FormattedMessage, useIntl } from "react-intl";

function MobileNav() {
  const { isNavOpen, setIsNavOpen } = useContext(NavStateContext);
  const [isOpen, setIsOpen] = useState(false);


  const router = useRouter();

  const { asPath } = router;

  const clickLogo = () => {
    router.push("/");
  };

  const { locales, locale } = useRouter();

  const toggleNav = () => {
    setIsOpen(!isOpen);
  }

  useEffect(() => {
    isOpen ? document.body.style.overflow = "hidden" : document.body.style.overflow = "auto";
    isOpen ? document.body.style.position = "fixed" : document.body.style.position = "static";
    isOpen ? document.body.style.width = "100%" : null;
  })





  return (
    <>
      <div className="relative">
        <div className="bg-rose-600 flex justify-between items-center py-3 px-4 md:hidden">
          {isOpen ? (
            <Times
              fill="#f5f5f5"
              width="30px"
              height="30px"
              onClick={() => toggleNav()}
            />
          ) : (
            <Bars
              fill="#f5f5f5"
              width="30px"
              height="30px"
              onClick={() => toggleNav()}
            />
          )}
          <Link href="/" onClick={() => setIsOpen(false)}>

          <img src='/logo.svg' alt='next' className="w-[80px]"/>
          </Link>
          <Heart
            fill="#f5f5f5"
            width="30px"
            height="30px"
            onClick={() => toggleNav()}
          />
        </div>

        <div
          className={`bg-red-400 w-full z-50 min-h-[100vh] absolute ${
            isOpen ? "left-0" : "-left-full"
          } transition-all ease-in-out duration-500`}
        >
          <div className="bg-slate-300 flex justify-between">
            <Link
              key={locales[0]}
              href="/"
              locale={locales[0]}
              className={`flex-1 py-4 ${
                locale == "se"
                  ? "bg-neutral-300 shadow-inner"
                  : "bg-neutral-200"
              }`}
            >
              <div className="flex items-center justify-center">
                <Se width={30} />
                <p className="pl-2 text-lg">Svenska</p>
              </div>
            </Link>
            <Link
              key={locales[1]}
              href="/"
              locale={locales[1]}
              className={`flex-1 py-4 ${
                locale == "fi"
                  ? "bg-neutral-300 shadow-inner"
                  : "bg-neutral-200"
              }`}
            >
              <div className="flex items-center justify-center">
                <Fi width={30} />
                <p className="pl-2 text-lg">Suomi</p>
              </div>
            </Link>
          </div>
          <div className="flex flex-col font-appareo text-xl text-neutral-200">

            <Link href="/" onClick={() => toggleNav()}>
              <div className={`flex items-center py-4 pl-6 border-b-2 ${asPath == "/" ? "bg-rose-500" : ""}`}>
                <Home fill="#f5f5f5" width="30px" height="30px" />
                <p className="text-center leading-none pl-4">
                  Startsida
                </p>
              </div>
            </Link>
            <Link href="/blommor">
              <div className={`flex items-center py-4 pl-6 border-b-2 ${asPath == "/blommor" ? "bg-rose-500" : ""}`}>
                <Flower fill="#f5f5f5" width="30px" height="30px" />
                <p className="text-center leading-none pl-4">
                  Blommor
                </p>
              </div>
            </Link>
            <Link href="/kontakt">
              <div className={`flex items-center py-4 pl-6 border-b-2 ${asPath == "/kontakt" ? "bg-rose-500" : ""}`}>
                <Phone fill="#f5f5f5" width="30px" height="30px" />
                <p className="text-center leading-none pl-4">
                  Kontakt
                </p>
              </div>
            </Link>
            <Link href="/om-oss">
              <div className={`flex items-center py-4 pl-6 border-b-2 ${asPath == "/om-oss" ? "bg-rose-500" : ""}`}>
                <Question fill="#f5f5f5" width="30px" height="30px" />
                <p className="text-center leading-none pl-4">
                  Om oss
                </p>
              </div>
            </Link>
            <Link href="/oppettider">
              <div className={`flex items-center py-4 pl-6 border-b-2 ${asPath == "/oppettider" ? "bg-rose-500" : ""}`}>
                <Clock fill="#f5f5f5" width="30px" height="30px" />
                <p className="text-center leading-none pl-4">
                  Öppettider
                </p>
              </div>
            </Link>
            <Link href="/galleri">
              <div className={`flex items-center py-4 pl-6 border-b-2 ${asPath == "/galleri" ? "bg-rose-500" : ""}`}>
                <Images fill="#f5f5f5" width="30px" height="30px" />
                <p className="text-center leading-none pl-4">
                  Bildgalleri
                </p>
              </div>
            </Link>
            <Link href="/min-lista">
              <div className={`flex items-center py-4 pl-6 border-b-2 ${asPath == "/min-lista" ? "bg-rose-500" : ""}`}>
                <Heart fill="#f5f5f5" width="30px" height="30px" />
                <p className="text-center leading-none pl-4">
                  Min lista
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default MobileNav;

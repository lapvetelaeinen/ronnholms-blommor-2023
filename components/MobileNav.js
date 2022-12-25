import { useState } from "react";
import { useRouter } from "next/router.js";
import Bars from "./svg/Bars";
import Times from "./svg/Times";
import Heart from "./svg/Heart";

function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  const router = useRouter();

  const clickLogo = () => {
    router.push("/");
  };

  return (
    <>
      <div className="bg-rose-600 flex justify-between items-center py-3 px-4 md:hidden">
        {isOpen ? (
          <Times
            fill="#f5f5f5"
            width="30px"
            height="30px"
            onClick={() => setIsOpen(false)}
          />
        ) : (
          <Bars
            fill="#f5f5f5"
            width="30px"
            height="30px"
            onClick={() => setIsOpen(true)}
          />
        )}
                  <Heart
            fill="#f5f5f5"
            width="30px"
            height="30px"
            onClick={() => setIsOpen(false)}
          />

      </div>
      {isOpen ? (
        <div className="bg-neutral-900 h-[100vh]">
          <ul className="flex flex-col font-appareo text-4xl text-neutral-300 pt-10 pl-4">

          </ul>
        </div>
      ) : null}
    </>
  );
}

export default MobileNav;
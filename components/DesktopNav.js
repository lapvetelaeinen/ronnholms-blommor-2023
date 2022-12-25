import { useState } from "react";
import { useRouter } from "next/router.js";
import Link from "next/link.js";

function DesktopNav() {
  const [isOpen, setIsOpen] = useState(false);

  const router = useRouter();

  const clickLogo = () => {
    router.push("/");
  };

  return (
    <>
      <div className="bg-rose-600 py-3 px-8 hidden md:flex justify-between items-center">
        <div className="flex gap-6 justify-between items-center font-appareo text-neutral-300 ">

        </div>
Y
      </div>
    </>
  );
}

export default DesktopNav;
"use client";

import { IoMdBus } from "react-icons/io";
import { BiPackage } from "react-icons/bi";
import Navbar from "./Navbar";
import { useTranslations } from "next-intl";

const Header = () => {
  const t = useTranslations("home");

  return (
    <header className="sticky top-0 w-full z-50 border-b border-[1px] bg-white">
      <div className="h-8 shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-center md:justify-start h-full gap-2 md:gap-6 text-sm font-medium">
          <div className="flex items-center gap-1 cursor-pointer hover:text-primary transition-colors ease-in-out">
            <IoMdBus size={20} />
            <p>{t("passengerTransport")}</p>
          </div>

          <div className="flex items-center gap-1 cursor-pointer hover:text-primary transition-colors ease-in-out">
            <BiPackage size={20} />
            <p>{t("cargoTransport")}</p>
          </div>
        </div>
      </div>

      <Navbar />
    </header>
  );
};

export default Header;

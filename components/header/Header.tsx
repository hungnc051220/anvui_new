'use client';

import { IoMdBus } from "react-icons/io";
import { BiPackage } from "react-icons/bi";
import { useTranslation } from "@/i18n/client";
import Navbar from "./Navbar";

const Header = ({ lng }: { lng: string }) => {
  const { t } = useTranslation(lng);

  return (
    <header className="sticky top-0 w-full z-50 border-b border-[1px] bg-white">
      <div className="h-8 shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-center md:justify-start h-full gap-2 md:gap-6 text-sm font-medium">
          <div className="flex items-center gap-1 cursor-pointer hover:text-primary transition-colors ease-in-out">
            <IoMdBus size={20} />
            <p>{t("home.passengerTransport")}</p>
          </div>

          <div className="flex items-center gap-1 cursor-pointer hover:text-primary transition-colors ease-in-out">
            <BiPackage size={20} />
            <p>{t("home.cargoTransport")}</p>
          </div>
        </div>
      </div>

      <Navbar lng={lng}/>
    </header>
  );
};

export default Header;

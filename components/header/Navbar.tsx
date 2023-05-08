"use client";

import Image from "next/image";
import { IconType } from "react-icons";
import { AiOutlineHome, AiOutlineMenu } from "react-icons/ai";
import { TbDiscountCheck } from "react-icons/tb";
import { MdOutlineHomeWork } from "react-icons/md";
import { BiNews } from "react-icons/bi";
import { BsHeadphones, BsPeople } from "react-icons/bs";
import { useState } from "react";
import { Drawer } from "antd";
import { FiPhoneCall } from "react-icons/fi";
import { useTranslation } from "@/i18n/client";
import Link from "next/link";

const NavLink = ({
  title,
  icon: Icon,
  href,
  lng
}: {
  title: string;
  icon: IconType;
  href: string;
  lng: string;
}) => {
  return (
    <Link
      href={`/${lng}/${href}`}
      className="hover:text-primary font-medium text-gray-800 flex flex-col items-center transition-all"
    >
      <Icon size={24} />
      <p>{title}</p>
    </Link>
  );
};

const NavLinkMobile = ({
  title,
  icon: Icon,
  onClick,
}: {
  title: string;
  icon: IconType;
  onClick: () => void;
}) => {
  return (
    <li
      className="p-4 pl-6 flex items-center gap-4 font-medium hover:text-primary text-gray-800"
      onClick={onClick}
    >
      <Icon size={24} />
      <p>{title}</p>
    </li>
  );
};

const Navbar = ({ lng }: { lng: string }) => {
  const { t } = useTranslation(lng);
  const [isOpen, setIsOpen] = useState(false);

  const onOpen = () => setIsOpen(true);
  const onClose = () => setIsOpen(false);

  return (
    <div className="max-w-7xl mx-auto py-4 px-4 xl:px-0">
      <div className="flex items-center justify-between">
        <div
          className="bg-primary p-2 rounded-lg inline-block md:hidden cursor-pointer"
          onClick={onOpen}
        >
          <AiOutlineMenu size={18} className="text-white" />
        </div>
        <p className="orange_gradient text-2xl font-bold block md:hidden">
          AN VUI
        </p>
        <div className="relative h-10 w-10 md:h-12 md:w-12 cursor-pointer">
          <Image
            src="/assets/icons/logo.svg"
            alt="logo"
            fill
            className="object-contain"
          />
        </div>
        <div className="items-center gap-8 cursor-pointer hidden md:flex">
          <NavLink title={t("home.home")} icon={AiOutlineHome} href="/" lng={lng} />
          <NavLink title={t("home.promo")} icon={TbDiscountCheck} href="/" lng={lng} />
          <NavLink
            title={t("home.ticketRoom")}
            icon={MdOutlineHomeWork}
            href="/phong-ve"
            lng={lng}
          />
          <NavLink title={t("home.news")} icon={BiNews} href="/" lng={lng} />
          <NavLink title={t("home.recruitment")} icon={BsPeople} href="/" lng={lng} />
          <NavLink title={t("home.contact")} icon={BsHeadphones} href="/" lng={lng} />
        </div>
      </div>
      <Drawer
        placement="left"
        onClose={onClose}
        open={isOpen}
        width={250}
        bodyStyle={{ paddingLeft: 0, paddingRight: 0 }}
        closable={false}
      >
        <div className="flex flex-col h-full">
          <div className="flex-1 border-b border-gray-200">
            <ul className="cursor-pointer">
              <NavLinkMobile
                title={t("home.home")}
                icon={AiOutlineHome}
                onClick={onClose}
              />
              <NavLinkMobile
                title={t("home.promo")}
                icon={TbDiscountCheck}
                onClick={onClose}
              />
              <NavLinkMobile
                title={t("home.ticketRoom")}
                icon={MdOutlineHomeWork}
                onClick={onClose}
              />
              <NavLinkMobile
                title={t("home.news")}
                icon={BiNews}
                onClick={onClose}
              />
              <NavLinkMobile
                title={t("home.recruitment")}
                icon={BsPeople}
                onClick={onClose}
              />
              <NavLinkMobile
                title={t("home.contact")}
                icon={BsHeadphones}
                onClick={onClose}
              />
            </ul>
          </div>
          <div className="p-4 pl-6 pb-0">
            <div>
              <h3 className="font-semibold text-sm">Tổng đài đặt vé và CSKH</h3>
              <div className="flex items-center text-primary gap-2">
                <FiPhoneCall size={20} />
                <p className="text-xl font-semibold">1900 6467</p>
              </div>
            </div>
            <div className="mt-2">
              <h3 className="font-semibold text-sm">
                Tổng đài đặt chuyển phát nhanh
              </h3>
              <div className="flex items-center text-primary gap-2">
                <FiPhoneCall size={20} />
                <p className="text-xl font-semibold">1900 6762</p>
              </div>
            </div>
          </div>
        </div>
      </Drawer>
    </div>
  );
};

export default Navbar;

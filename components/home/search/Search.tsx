"use client";

import { useTranslation } from "@/i18n/client";
import ArrowIcon from "./ArrowIcon";
import SearchInput from "./SearchInput";
import StepCard from "./StepCard";
import { AiFillCreditCard } from "react-icons/ai";
import { BsFillBusFrontFill, BsTicketDetailedFill } from "react-icons/bs";
import { IoLocationSharp } from "react-icons/io5";

const Search = ({ lng }: { lng: string }) => {
  const { t } = useTranslation(lng);

  return (
    <section className="w-full bg-white rounded-2xl shadow-md p-4 md:p-6 max-w-5xl mx-auto">
      <SearchInput lng={lng} />

      <div className="pt-4 md:pt-6">
        <h2 className="font-semibold text-lg text-center">
          {t("home.step.title")}
        </h2>

        <div className="flex justify-between flex-wrap mt-6">
          <StepCard text={t("home.step.des1")} icon={IoLocationSharp} />
          <ArrowIcon />
          <StepCard text={t("home.step.des2")} icon={BsFillBusFrontFill} />
          <ArrowIcon />
          <StepCard text={t("home.step.des3")} icon={AiFillCreditCard} />
          <ArrowIcon />
          <StepCard text={t("home.step.des4")} icon={BsTicketDetailedFill} />
        </div>
      </div>
    </section>
  );
};

export default Search;

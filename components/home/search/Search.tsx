"use client";

import CustomButton from "@/components/customFormInput/CustomButton";
import CustomDatePicker from "@/components/customFormInput/CustomDatePicker";
import CustomSelect from "@/components/customFormInput/CustomSelect";
import CustomInputNumber from "@/components/customFormInput/CustomInputNumber";
import { IoLocationSharp } from "react-icons/io5";
import { AiOutlineClockCircle, AiOutlineSearch, AiFillCreditCard } from "react-icons/ai";
import { BsPeople, BsFillBusFrontFill, BsTicketDetailedFill } from "react-icons/bs";
import { CiLocationOn } from 'react-icons/ci';
import { useTranslations } from "next-intl";
import StepCard from "./StepCard";
import ArrowIcon from "./ArrowIcon";

const Search = () => {
  const t = useTranslations("home");

  return (
    <section className="w-full bg-white rounded-lg shadow-md p-6 max-w-5xl mx-auto">
      <div className="flex gap-2 items-center justify-between pb-6 border-b border-gray-200 flex-col md:flex-row">
        <div className="flex-1 grid grid-cols-2 md:grid-cols-4 gap-2 w-full">
          <CustomSelect
            label={t("departure")}
            icon={IoLocationSharp}
            placeholder={`${t("select")} ${t("departure").toLowerCase()}`}
          />
          <CustomSelect
            label={t("destination")}
            icon={IoLocationSharp}
            placeholder={`${t("select")} ${t("destination").toLowerCase()}`}
          />
          <CustomDatePicker
            label={t("departureDay")}
            icon={AiOutlineClockCircle}
            placeholder={`${t("select")} ${t("departureDay").toLowerCase()}`}
          />
          <CustomInputNumber
            label={t("amountOfPeopleMax10")}
            icon={BsPeople}
            placeholder={`${t("import")} ${t("amountOfPeople").toLowerCase()}`}
          />
        </div>
        <CustomButton title={t("findTicket")} icon={AiOutlineSearch} />
      </div>

      <div className="pt-4 md:pt-6">
        <h2 className="font-semibold text-lg text-center">{t("step.title")}</h2>

        <div className="flex justify-between flex-wrap mt-6">
          <StepCard text={t("step.des1")} icon={IoLocationSharp}/>
          <ArrowIcon />
          <StepCard text={t("step.des2")} icon={BsFillBusFrontFill}/>
          <ArrowIcon />
          <StepCard text={t("step.des3")} icon={AiFillCreditCard}/>
          <ArrowIcon />
          <StepCard text={t("step.des4")} icon={BsTicketDetailedFill}/>
        </div>
      </div>
    </section>
  );
};

export default Search;

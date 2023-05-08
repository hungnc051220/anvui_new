"use client";

import CustomButton from "@/components/customFormInput/CustomButton";
import CustomDatePicker from "@/components/customFormInput/CustomDatePicker";
import CustomInputNumber from "@/components/customFormInput/CustomInputNumber";
import CustomSelect from "@/components/customFormInput/CustomSelect";
import { AiOutlineClockCircle, AiOutlineSearch } from "react-icons/ai";
import { BsPeople } from "react-icons/bs";
import { IoLocationSharp } from "react-icons/io5";
import { TFunction } from "i18next";
import { useTranslation } from "@/i18n/client";

const SearchInput = ({ lng }: { lng: string }) => {
  const { t } = useTranslation(lng);
  return (
    <div className="flex gap-2 items-center justify-between pb-6 border-b border-gray-200 flex-col md:flex-row">
      <div className="flex-1 grid grid-cols-2 md:grid-cols-4 gap-2 w-full">
        <CustomSelect
          label={t("home.departure")}
          icon={IoLocationSharp}
          placeholder={`${t("home.select")} ${t(
            "home.departure"
          ).toLowerCase()}`}
        />
        <CustomSelect
          label={t("home.destination")}
          icon={IoLocationSharp}
          placeholder={`${t("home.select")} ${t(
            "home.destination"
          ).toLowerCase()}`}
        />
        <CustomDatePicker
          label={t("home.departureDay")}
          icon={AiOutlineClockCircle}
          placeholder={`${t("home.select")} ${t(
            "home.departureDay"
          ).toLowerCase()}`}
        />
        <CustomInputNumber
          label={t("home.amountOfPeopleMax10")}
          icon={BsPeople}
          placeholder={`${t("home.import")} ${t(
            "home.amountOfPeople"
          ).toLowerCase()}`}
        />
      </div>
      <CustomButton title={t("home.findTicket")} icon={AiOutlineSearch} />
    </div>
  );
};

export default SearchInput;

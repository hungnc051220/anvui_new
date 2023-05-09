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

interface OptionProps {
  label: string;
  value: string;
}

const SearchInput = ({ lng }: { lng: string }) => {
  const { t } = useTranslation(lng);

  const departureOptions: OptionProps[] = [
    { value: "hn", label: "Hà Nội" },
    { value: "qn", label: "Quảng Ninh" },
    { value: "hp", label: "Hải Phòng" },
  ];

  const seatOptions: OptionProps[] = [
    { value: "1", label: "1" },
    { value: "2", label: "2" },
    { value: "3", label: "3" },
    { value: "4", label: "4" },
    { value: "5", label: "5" },
    { value: "6", label: "6" },
    { value: "7", label: "7" },
    { value: "9", label: "8" },
    { value: "9", label: "9" },
    { value: "10", label: "10" },
  ];

  return (
    <div className="flex gap-2 items-center justify-between pb-6 border-b border-gray-200 flex-col md:flex-row">
      <div className="flex-1 grid grid-cols-1 md:grid-cols-4 gap-2 w-full">
        <CustomSelect
          options={departureOptions}
          label={t("home.departure")}
          icon={IoLocationSharp}
          placeholder={`${t("home.select")} ${t(
            "home.departure"
          ).toLowerCase()}`}
        />
        <CustomSelect
          options={departureOptions}
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
        <CustomSelect
          options={seatOptions}
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

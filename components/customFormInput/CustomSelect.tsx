'use client';

import { IconType } from "react-icons";
import { Select } from "antd";

interface CustomSelectProps {
  icon: IconType;
  label: string;
  placeholder?: string;
}

const CustomSelect: React.FC<CustomSelectProps> = ({
  icon: Icon,
  label,
  placeholder,
}) => {
  return (
    <div className="relative col-span-2 sm:col-span-1">
      <Select
        showArrow={false}
        className="custom-select w-full"
        placeholder={placeholder}
        options={[
          { value: "hn", label: "Hà Nội" },
          { value: "qn", label: "Quảng Ninh" },
          { value: "hp", label: "Hải Phòng" },
        ]}
      />
      <Icon size={24} className="absolute top-3 left-2 pointer-events-none" />
      <p className="text-sm font-medium mb-1 absolute top-2 left-[42px] text-gray-500 pointer-events-none">
        {label}
      </p>
    </div>
  );
};

export default CustomSelect;

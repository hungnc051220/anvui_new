import { IconType } from "react-icons";
import { DatePicker } from "antd";

interface CustomDatePickerProps {
  icon: IconType;
  label: string;
  placeholder?: string;
}

const CustomDatePicker: React.FC<CustomDatePickerProps> = ({
  icon: Icon,
  label,
  placeholder,
}) => {
  return (
    <div className="relative">
      <DatePicker className="custom-picker w-full" format="DD/MM/YYYY" placeholder={placeholder} allowClear={false} suffixIcon={<></>}/>
      <Icon
        size={24}
        className="absolute top-3 left-2 pointer-events-none"
      />
      <p className="text-sm font-medium mb-1 absolute top-2 left-[42px] text-gray-500 pointer-events-none">
        {label}
      </p>
    </div>
  );
};

export default CustomDatePicker;

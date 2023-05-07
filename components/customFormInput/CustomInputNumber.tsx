import { IconType } from "react-icons";
import { InputNumber } from "antd";

interface CustomInputNumberProps {
  icon: IconType;
  label: string;
  placeholder?: string;
}

const CustomInputNumber: React.FC<CustomInputNumberProps> = ({
  icon: Icon,
  label,
  placeholder,
}) => {
  return (
    <div className="relative">
      <InputNumber
        className="custom-input-number w-full"
        placeholder={placeholder}
        controls={false}
        min={1}
        max={10}
      />
      <Icon size={24} className="absolute top-3 left-2 pointer-events-none" />
      <p className="text-sm font-medium mb-1 absolute top-2 left-[42px] text-gray-500 pointer-events-none">
        {label}
      </p>
    </div>
  );
};

export default CustomInputNumber;

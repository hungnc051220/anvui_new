import { Button } from "antd";
import { IconType } from "react-icons";

interface CustomButtonProps {
  title: string;
  icon?: IconType;
}

const CustomButton: React.FC<CustomButtonProps> = ({ title, icon: Icon }) => {
  return (
    <Button
      type="primary"
      className="custom-btn font-semibold text-white text-base uppercase w-full md:w-auto"
      icon={Icon ? <Icon size={24} /> : null}
    >
      {title}
    </Button>
  );
};

export default CustomButton;

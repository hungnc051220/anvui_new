import { IconType } from "react-icons";

interface StepCardProps {
  text: string;
  icon: IconType;
}

const StepCard: React.FC<StepCardProps> = ({ text, icon: Icon }) => {
  return (
    <div className="w-[21%] flex flex-col justify-center items-center flex-1 h-full">
      <div className="bg-primary/10 rounded-full h-12 md:h-[60px] w-12 md:w-[60px] flex-center">
        <Icon size={24} className="text-primary" />
      </div>
      <p className="hidden md:block mt-4 text-center px-6">{text}</p>
    </div>
  );
};

export default StepCard;

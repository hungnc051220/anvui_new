import { AiOutlineArrowRight } from "react-icons/ai";

const ArrowIcon = () => {
  return (
    <div className="h-5 w-5 md:h-10 md:w-10 rounded-full bg-transparent md:bg-gray-100 flex items-center justify-center mt-4">
      <AiOutlineArrowRight className="text-xs md:text-lg"/>
    </div>
  );
};

export default ArrowIcon;

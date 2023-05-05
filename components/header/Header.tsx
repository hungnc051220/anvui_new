import { IoMdBus } from "react-icons/io";
import { BiPackage } from "react-icons/bi";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <div className="sticky top-0 z-50 bg-white border-b border-[1px] w-full">
      <div className="py-2 shadow-sm border-b border-[1px]">
        <div className="space-x-6 max-w-7xl mx-auto flex items-center font-medium text-sm">
          <div className="flex items-center gap-2 cursor-pointer hover:text-primary transition-all">
            <IoMdBus size={20} />
            <p>Vận chuyển hàng khách</p>
          </div>
          <div className="flex items-center gap-2 cursor-pointer hover:text-primary transition-all">
            <BiPackage size={20} />
            <p>Vận chuyển hàng hoá</p>
          </div>
        </div>
      </div>

      {/* Navbar */}
      <Navbar />
    </div>
  );
};

export default Header;

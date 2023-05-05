import { AiFillHome } from "react-icons/ai";
import { TbDiscountCheck } from "react-icons/tb";
import { MdHomeWork } from "react-icons/md";
import { BiNews } from "react-icons/bi";
import { FaPeopleArrows } from "react-icons/fa";
import { BsHeadphones } from 'react-icons/bs';
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="max-w-7xl mx-auto py-4">
      <div className="flex items-center justify-between">
        <Image src="/images/logo.svg" alt="logo" width="60" height="60" style={{objectFit: "contain"}} />
        <div className="flex items-center gap-8 cursor-pointer">
          <div className="hover:text-primary font-medium text-gray-800 flex flex-col items-center transition-all">
            <AiFillHome size={24} />
            <p>Trang chủ</p>
          </div>
          <div className="hover:text-primary font-medium text-gray-800 flex flex-col items-center transition-all">
            <TbDiscountCheck size={24} />
            <p>Chương trình khuyến mãi</p>
          </div>
          <div className="hover:text-primary font-medium text-gray-800 flex flex-col items-center transition-all">
            <MdHomeWork size={24} />
            <p>Danh sách phòng vé</p>
          </div>
          <div className="hover:text-primary font-medium text-gray-800 flex flex-col items-center transition-all">
            <BiNews size={24} />
            Tin tức
          </div>
          <div className="hover:text-primary font-medium text-gray-800 flex flex-col items-center transition-all">
            <FaPeopleArrows size={24} />
            <p>Tuyển dụng</p>
          </div>
          <div className="hover:text-primary font-medium text-gray-800 flex flex-col items-center transition-all">
            <BsHeadphones size={24} />
            <p>Liên hệ</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

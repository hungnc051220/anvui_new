'use client';

import CustomButton from "@/components/customFormInput/CustomButton";
import { Button, Input } from "antd";
import { AiOutlineSearch } from "react-icons/ai";

const Lookup = () => {
  return (
    <section className="mt-4 max-w-5xl mx-auto">
        <div className="shadow-md bg-white py-4 px-6 rounded-lg flex items-center justify-between gap-2 md:gap-6 border-[1px] border-gray-200 flex-col md:flex-row">
            <h3 className="text-xl font-semibold whitespace-nowrap">Tra cứu tình trạng vé</h3>
            <Input size="large" placeholder="Nhập mã vé hoặc số điện thoại của bạn"/>
            <Button type="primary" size="large" className="w-full md:w-auto" icon={<AiOutlineSearch size={18} />}>Tìm kiếm</Button>
        </div>
    </section>
  )
}

export default Lookup
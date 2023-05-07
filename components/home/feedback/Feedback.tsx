"use client";

import Image from "next/image";
import { AiFillMail, AiOutlineGlobal } from "react-icons/ai";
import { IoCallSharp } from "react-icons/io5";

const Feedback = () => {
  return (
    <section className="pt-4 md:pt-24 pb-0 md:pb-6">
      <div className="p-6 bg-primary/20 relative pl-[130px] md:pl-[300px] rounded-lg">
        <div className="absolute top-8 md:-top-16 left-2 md:left-0">
          <div className="relative h-[123px] w-[111px] md:h-[277px] md:w-[256px]">
            <Image
              src="/assets/images/feedback.svg"
              alt="feedback"
              fill
              className="object-cover"
            />
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-medium mb-2">Các thắc mắc, góp ý</h2>
          <p>
            Nếu có bất kỳ thắc mắc hay góp ý nào, bạn hãy liên hệ tới các địa
            chỉ dưới đây, chúng tôi luôn sẵn sàng lắng nghe và cải thiện dịch vụ
            để phục vụ khách hàng!
          </p>
        </div>
      </div>

      <div className="px-4 md:pr-0 md:pl-[300px] p-6 space-y-4 font-medium text-lg">
        <div className="flex items-center gap-2">
          <IoCallSharp size={24} className="text-primary" />
          <p>0283 588 776 - 0293 579 579</p>
        </div>
        <div className="flex items-center gap-2">
          <AiFillMail size={24} className="text-primary" />
          <p>anvui.vn@gmail.com</p>
        </div>
        <div className="flex items-center gap-2">
          <AiOutlineGlobal size={24} className="text-primary" />
          <p>www.anvui.vn</p>
        </div>
      </div>
    </section>
  );
};

export default Feedback;

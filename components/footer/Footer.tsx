import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="pt-6 bg-gray-200">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-4">
          <div>
            <h3 className="text-xl text-primary font-medium mb-4">
              Công ty TNHH Văn Minh
            </h3>
            <p>
              Đ/c: Đường Mai Thúc Loan, T.X Cửa Lò, Nghệ An
              <br /> MST và GPĐK KD: 2900839257 (ngày cấp: 22/11/2007) <br />
              <br />
              Tổng giám đốc: Nguyễn Đàm Văn
              <br />
              Email: vanminh76.vn@gmail.com
              <br />
              ĐT: 02383588776
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl text-primary font-medium mb-4">
              Các hình thức thanh toán
            </h3>
            <Image
              src="/images/footer1.png"
              alt="cash"
              width="123"
              height="48"
            />
            <Image
              src="/images/footer2.png"
              alt="cash"
              width="75"
              height="48"
            />
          </div>
          <div className="space-y-4">
            <h3 className="text-xl text-primary font-medium">Liên kết nhanh</h3>
            <p>Hệ thống phòng vé</p>
            <p>Lịch trình</p>
            <p>Điều khoản sử dụng</p>
            <p>Liên hệ</p>
            <p>Tuyển dụng</p>
          </div>
          <div>
            <h3 className="text-xl text-primary font-medium">Bản đồ</h3>
          </div>
        </div>
      </div>
      <div className="text-center bg-gray-400 py-2 mt-8">
        <p className="font-semibold">
          Copyright ©2023 Du Lịch Văn Minh. All rights reserved. Developed by
          anvui.vn
        </p>
      </div>
    </footer>
  );
};

export default Footer;

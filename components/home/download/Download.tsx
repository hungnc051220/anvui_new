'use client';

import Image from "next/image";
import { BsTelephoneFill } from "react-icons/bs";

const Download = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 max-w-5xl mx-auto mt-4 gap-4">
      <div className="flex items-center gap-4 pr-0 md:pr-16">
        <Image
          src="/assets/images/mobile.png"
          alt="mobile"
          height="156"
          width="80"
          className="hidden sm:inline-flex"
        />
        <div>
          <h3 className="text-gray-500 leading-8 text-lg font-medium text-center md:text-left">
            Tải ngay ứng dụng xe AnVui để đặt xe dễ dàng & gửi hàng tiện lợi
          </h3>
          <div className="flex justify-center md:justify-start gap-2 mt-4">
            <a
              href="#"
              className="rounded-lg border-2 border-gray-600 flex items-center justify-start px-2 py-1 gap-2 text-gray-700"
            >
              <Image
                src="/assets/images/appstore.svg"
                alt="appstore"
                width="30"
                height="30"
              />
              <div>
                <p className="text-xs font-semibold">Tải xuống từ</p>
                <h4 className="text-lg font-semibold leading-5">App Store</h4>
              </div>
            </a>
            <a
              href="#"
              className="rounded-lg border-2 border-gray-600 flex items-center justify-start px-2 py-1 gap-2 text-gray-700"
            >
              <Image
                src="/assets/images/chplay.svg"
                alt="appstore"
                width="30"
                height="30"
              />
              <div>
                <p className="text-xs font-semibold">Tải xuống từ</p>
                <h4 className="text-lg font-semibold leading-5">Google Play</h4>
              </div>
            </a>
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <p className="font-semibold text-center md:text-left">
          Tổng đài đặt vé và chăm sóc khách hàng 24/24
        </p>
        <div className="flex items-center justify-center md:justify-start gap-2">
          <BsTelephoneFill size={24} className="text-primary"/>
          <h3 className="text-2xl text-primary font-semibold">1900 6467</h3>
        </div>
        <div className="p-2 border-dashed rounded-lg border-2 border-gray-300 bg-gray-200">
          <p className="text-sm">
            Quý hành khách có thể đặt vé qua tổng đài phục vụ 24/24 (cả thứ 7 và
            Chủ Nhật): 1900 6467 hoặc mua vé tiện lợi ngay trên chiếc điện thoại
            thông minh của quý vị thông qua ứng dụng Xe Văn Minh trên hai hệ
            điều hành phổ biến hiện nay là IOS và Android.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Download;

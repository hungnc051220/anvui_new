"use client";
import Image from "next/image";
import { Button, DatePicker, Input, Select } from "antd";
import Header from "@/components/header/Header";
import Banner from "@/components/banner/Banner";
import { IoLocationSharp } from "react-icons/io5";
import { AiOutlineArrowRight, AiOutlineSearch } from "react-icons/ai";
import About from "@/components/about/About";
import Card from "@/components/card/Card";
import News from "@/components/news/News";
import Footer from "@/components/footer/Footer";
import Slide from "@/components/slide/Slide";
const { Option } = Select;

export default function Home() {
  return (
    <main>
      <Header />
      <div className="">
        <Banner />

        <div className="my-6">
          <div className="bg-white rounded-lg shadow-sm drop-shadow-sm max-w-5xl w-full z-10 -mt-[220px] right-0 my-0 mx-auto p-6">
            <div className="grid grid-cols-5 gap-2 pb-6 border-b border-gray-200">
              <div className="relative">
                <Select
                  className="w-full h-14"
                  showArrow={false}
                  placeholder="Chọn điểm đi"
                >
                  <Option value="hn">Hà Nội</Option>
                  <Option value="na">Nghệ An</Option>
                  <Option value="hp">Hải Phòng</Option>
                </Select>
                <IoLocationSharp
                  size={24}
                  className="absolute top-3 left-2 pointer-events-none"
                />
                <p className="text-sm font-medium mb-1 absolute top-2 left-[42px] text-gray-500 pointer-events-none">
                  Điểm khởi hành
                </p>
              </div>
              <div className="relative">
                <Select
                  className="w-full h-14"
                  showArrow={false}
                  placeholder="Chọn điểm đi"
                >
                  <Option value="hn">Hà Nội</Option>
                  <Option value="na">Nghệ An</Option>
                  <Option value="hp">Hải Phòng</Option>
                </Select>
                <IoLocationSharp
                  size={24}
                  className="absolute top-3 left-2 pointer-events-none"
                />
                <p className="text-sm font-medium mb-1 absolute top-2 left-[42px] text-gray-500 pointer-events-none">
                  Điểm đến
                </p>
              </div>
              <div className="relative">
                <DatePicker className="w-full" format="DD/MM/YYYY" placeholder="Chọn ngày đi"/>
                <IoLocationSharp
                  size={24}
                  className="absolute top-3 left-2 pointer-events-none"
                />
                <p className="text-sm font-medium mb-1 absolute top-2 left-[42px] text-gray-500 pointer-events-none">
                  Ngày khởi hành
                </p>
              </div>
              <div className="relative">
              <DatePicker className="w-full" picker="time" showSecond={false} format="HH:mm" placeholder="Chọn giờ đi"/>
                <IoLocationSharp
                  size={24}
                  className="absolute top-3 left-2 pointer-events-none"
                />
                <p className="text-sm font-medium mb-1 absolute top-2 left-[42px] text-gray-500 pointer-events-none">
                  Giờ khởi hành
                </p>
              </div>
              <Button className="h-14 bg-primary text-xl text-white font-semibold flex items-center gap-4 justify-center" icon={<AiOutlineSearch size={24}/>}>
                Tìm vé xe
              </Button>
            </div>

            <div>
              <p className="text-lg font-semibold text-center pt-6">
                DỄ DÀNG ĐẶT VÉ XE TRÊN WEBSITE VĂN MINH
              </p>

              <div className="grid grid-cols-4 items-center gap-2 mt-6">
                <div className="flex items-center flex-col h-full relative">
                  <div className="h-[60px] w-[60px] rounded-full bg-primary/20 flex items-center justify-center mb-4 relative">
                    <Image
                      src="/images/uil_location-pin-alt.svg"
                      alt="location"
                      height={36}
                      width={36}
                    />
                  </div>
                  <p className="text-center px-3">
                    Chọn thông tin hành trình và ấn Tìm vé
                  </p>
                  <div className="absolute h-10 w-10 rounded-full bg-gray-100 -right-4 top-3 flex items-center justify-center">
                    <AiOutlineArrowRight size={18} />
                  </div>
                </div>

                <div className="flex items-center flex-col h-full relative">
                  <div className="h-[60px] w-[60px] rounded-full bg-primary/20 flex items-center justify-center mb-4 relative">
                    <Image
                      src="/images/bx_bx-bus.svg"
                      alt="location"
                      height={36}
                      width={36}
                    />
                  </div>
                  <p className="text-center px-3">
                    Chọn chuyến xe, chỗ ngồi phù hợp và điền thông tin
                  </p>
                  <div className="absolute h-10 w-10 rounded-full bg-gray-100 -right-4 top-3 flex items-center justify-center">
                    <AiOutlineArrowRight size={18} />
                  </div>
                </div>

                <div className="flex items-center flex-col h-full relative">
                  <div className="h-[60px] w-[60px] rounded-full bg-primary/20 flex items-center justify-center mb-4 relative">
                    <Image
                      src="/images/bx_bx-credit-card.svg"
                      alt="location"
                      height={36}
                      width={36}
                    />
                  </div>
                  <p className="text-center px-3">
                    Tiến hành thanh toán online hoặc giữ chỗ trước
                  </p>
                  <div className="absolute h-10 w-10 rounded-full bg-gray-100 -right-4 top-3 flex items-center justify-center">
                    <AiOutlineArrowRight size={18} />
                  </div>
                </div>

                <div className="flex items-center flex-col h-full">
                  <div className="h-[60px] w-[60px] rounded-full bg-primary/20 flex items-center justify-center mb-4 relative">
                    <Image
                      src="/images/uil_ticket.svg"
                      alt="location"
                      height={36}
                      width={36}
                    />
                  </div>
                  <p className="text-center px-3">Nhận mã vé và lên xe!</p>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 max-w-5xl mx-auto mt-4">
            <div className="flex items-center gap-4 pr-16">
              <Image
                src="/images/mobile.png"
                alt="mobile"
                height="156"
                width="80"
              />
              <div>
                <h3 className="text-gray-500 leading-8 text-lg font-medium">
                  Tải ngay ứng dụng xe Văn Minh để đặt xe dễ dàng & gửi hàng
                  tiện lợi
                </h3>
                <div className="flex gap-2 mt-4">
                  <a
                    href="#"
                    className="rounded-lg border-2 border-gray-600 flex items-center justify-start px-2 py-1 gap-2 text-gray-700"
                  >
                    <Image
                      src="/images/apple.svg"
                      alt="appstore"
                      width="30"
                      height="30"
                    />
                    <div>
                      <p className="text-xs font-semibold">Tải xuống từ</p>
                      <h4 className="text-lg font-semibold leading-5">
                        App Store
                      </h4>
                    </div>
                  </a>
                  <a
                    href="#"
                    className="rounded-lg border-2 border-gray-600 flex items-center justify-start px-2 py-1 gap-2 text-gray-700"
                  >
                    <Image
                      src="/images/chplay.svg"
                      alt="appstore"
                      width="30"
                      height="30"
                    />
                    <div>
                      <p className="text-xs font-semibold">Tải xuống từ</p>
                      <h4 className="text-lg font-semibold leading-5">
                        Google Play
                      </h4>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <p className="font-semibold">
                Tổng đài đặt vé và chăm sóc khách hàng 24/24
              </p>
              <div className="flex items-center gap-2">
                <Image
                  src="/images/phone.svg"
                  alt="phone"
                  height="24"
                  width="24"
                />
                <h3 className="text-2xl text-primary font-semibold">
                  1900 6467
                </h3>
              </div>
              <div className="p-2 border-dashed rounded-lg border-2 border-gray-300 bg-gray-200">
                <p className="text-sm">
                  Quý hành khách có thể đặt vé qua tổng đài phục vụ 24/24 (cả
                  thứ 7 và Chủ Nhật): 1900 6467 hoặc mua vé tiện lợi ngay trên
                  chiếc điện thoại thông minh của quý vị thông qua ứng dụng Xe
                  Văn Minh trên hai hệ điều hành phổ biến hiện nay là IOS và
                  Android.
                </p>
              </div>
            </div>
          </div>

          <Slide />
        </div>
      </div>

      <About />
      <Card />
      <News />
      <Footer />
    </main>
  );
}

"use client";

import Search from "../home/search/Search";
import React from "react";
import { Button, Input, Space, Table, Tag } from "antd";
import type { ColumnsType } from "antd/es/table";
import { AiOutlineClockCircle } from "react-icons/ai";
import { BsFillBusFrontFill } from "react-icons/bs";
import { MdOutlineAirlineSeatReclineNormal } from "react-icons/md";
import { GiSteeringWheel } from "react-icons/gi";

const Tickets = () => {
  interface DataType {
    key: string;
    time: string;
    timeString: string;
    location: string;
    seats: number;
    seatType: string;
    price: string;
  }

  const columns: ColumnsType<DataType> = [
    {
      dataIndex: "time",
      key: "time",
      render: (_, record) => (
        <div className="flex gap-2 h-full">
          <div>
            <AiOutlineClockCircle size={24} className="text-gray-500" />
          </div>
          <div>
            <p className="font-bold text-base">{record.time}</p>
            <p className="text-sm text-gray-500">{record.timeString}</p>
          </div>
        </div>
      ),
    },
    {
      dataIndex: "location",
      key: "location",
      render: (_, record) => (
        <div className="flex gap-2">
          <div>
            <BsFillBusFrontFill size={24} className="text-gray-500" />
          </div>
          <div>
            <p className="font-bold text-base">{record.location}</p>
            <p className="text-sm text-gray-500">Quốc lộ 1</p>
            <p className="text-red-500 font-bold text-sm">Điểm đón trả khách</p>
          </div>
        </div>
      ),
    },
    {
      dataIndex: "seats",
      key: "seats",
      render: (_, record) => (
        <div className="flex gap-2">
          <div>
            <MdOutlineAirlineSeatReclineNormal
              size={24}
              className="text-gray-500"
            />
          </div>
          <div>
            <p className="font-bold text-base">{record.seats} chỗ online</p>
            <p className="text-sm text-gray-500">{record.seatType}</p>
            <a className="text-red-500 font-bold text-sm">Chính sách huỷ vé</a>
          </div>
        </div>
      ),
    },
    {
      key: "price",
      dataIndex: "price",
      render: (text) => (
        <p className="text-xl font-bold text-green-500">{text}</p>
      ),
    },
    Table.EXPAND_COLUMN,
  ];

  const data: DataType[] = [
    {
      key: "1",
      time: "14:00 - 18:30",
      timeString: "~4 giờ 30 phút",
      location: "BX Nước Ngầm - BX Hà Tĩnh",
      seats: 30,
      seatType: "Xe giường nằm",
      price: "250.000",
    },
    {
      key: "2",
      time: "14:00 - 18:30",
      timeString: "~4 giờ 30 phút",
      location: "BX Nước Ngầm - BX Hà Tĩnh",
      seats: 30,
      seatType: "Xe giường nằm",
      price: "250.000",
    },
    {
      key: "3",
      time: "14:00 - 18:30",
      timeString: "~4 giờ 30 phút",
      location: "BX Nước Ngầm - BX Hà Tĩnh",
      seats: 30,
      seatType: "Xe giường nằm",
      price: "250.000",
    },
    {
      key: "4",
      time: "14:00 - 18:30",
      timeString: "~4 giờ 30 phút",
      location: "BX Nước Ngầm - BX Hà Tĩnh",
      seats: 30,
      seatType: "Xe giường nằm",
      price: "250.000",
    },
    {
      key: "5",
      time: "14:00 - 18:30",
      timeString: "~4 giờ 30 phút",
      location: "BX Nước Ngầm - BX Hà Tĩnh",
      seats: 30,
      seatType: "Xe giường nằm",
      price: "250.000",
    },
    {
      key: "6",
      time: "14:00 - 18:30",
      timeString: "~4 giờ 30 phút",
      location: "BX Nước Ngầm - BX Hà Tĩnh",
      seats: 30,
      seatType: "Xe giường nằm",
      price: "250.000",
    },
    {
      key: "7",
      time: "14:00 - 18:30",
      timeString: "~4 giờ 30 phút",
      location: "BX Nước Ngầm - BX Hà Tĩnh",
      seats: 30,
      seatType: "Xe giường nằm",
      price: "250.000",
    },
    {
      key: "8",
      time: "14:00 - 18:30",
      timeString: "~4 giờ 30 phút",
      location: "BX Nước Ngầm - BX Hà Tĩnh",
      seats: 30,
      seatType: "Xe giường nằm",
      price: "250.000",
    },
    {
      key: "9",
      time: "14:00 - 18:30",
      timeString: "~4 giờ 30 phút",
      location: "BX Nước Ngầm - BX Hà Tĩnh",
      seats: 30,
      seatType: "Xe giường nằm",
      price: "250.000",
    },
    {
      key: "10",
      time: "14:00 - 18:30",
      timeString: "~4 giờ 30 phút",
      location: "BX Nước Ngầm - BX Hà Tĩnh",
      seats: 30,
      seatType: "Xe giường nằm",
      price: "250.000",
    },
    {
      key: "11",
      time: "14:00 - 18:30",
      timeString: "~4 giờ 30 phút",
      location: "BX Nước Ngầm - BX Hà Tĩnh",
      seats: 30,
      seatType: "Xe giường nằm",
      price: "250.000",
    },
  ];
  return (
    <div>
      {/* <Search /> */}
      <Table
        columns={columns}
        dataSource={data}
        showHeader={false}
        expandable={{
          expandedRowRender: (record) => (
            <div>
              <div className="flex p-2">
                <div className="w-2/3 space-y-4">
                  <div className="h-[300px] w-full bg-white p-4 rounded-lg shadow-sm">
                    <div className="flex gap-3">
                      <h3 className="text-base font-bold">Tầng 2</h3>
                      <div className="grid grid-cols-7 gap-2 flex-1">
                        <div className="h-10 bg-white border border-gray-600 rounded-md shadow-sm relative">
                          <div className="h-1/2 w-1 bg-gray-800 absolute right-2 top-0 bottom-0 my-auto"></div>
                        </div>
                        <div className="h-10 bg-white border border-gray-600 rounded-md shadow-sm relative">
                          <div className="h-1/2 w-1 bg-gray-800 absolute right-2 top-0 bottom-0 my-auto"></div>
                        </div>
                        <div className="h-10 bg-white border border-gray-600 rounded-md shadow-sm relative">
                          <div className="h-1/2 w-1 bg-gray-800 absolute right-2 top-0 bottom-0 my-auto"></div>
                        </div>
                        <div className="h-10 bg-blue-400 border border-gray-600 rounded-md shadow-sm relative">
                          <div className="h-1/2 w-1 bg-gray-800 absolute right-2 top-0 bottom-0 my-auto"></div>
                        </div>
                        <div className="h-10 bg-white border border-gray-600 rounded-md shadow-sm relative">
                          <div className="h-1/2 w-1 bg-gray-800 absolute right-2 top-0 bottom-0 my-auto"></div>
                        </div>
                        <div className="h-10 bg-white border border-gray-600 rounded-md shadow-sm relative">
                          <div className="h-1/2 w-1 bg-gray-800 absolute right-2 top-0 bottom-0 my-auto"></div>
                        </div>
                        <div className="h-10 bg-white border border-gray-600 rounded-md shadow-sm relative">
                          <div className="h-1/2 w-1 bg-gray-800 absolute right-2 top-0 bottom-0 my-auto"></div>
                        </div>
                        <div className="h-10 bg-white border border-gray-600 rounded-md shadow-sm relative">
                          <div className="h-1/2 w-1 bg-gray-800 absolute right-2 top-0 bottom-0 my-auto"></div>
                        </div>
                        <div className="h-10 bg-red-400 border border-gray-600 rounded-md shadow-sm relative">
                          <div className="h-1/2 w-1 bg-gray-800 absolute right-2 top-0 bottom-0 my-auto"></div>
                        </div>
                        <div className="h-10 bg-white border border-gray-600 rounded-md shadow-sm relative">
                          <div className="h-1/2 w-1 bg-gray-800 absolute right-2 top-0 bottom-0 my-auto"></div>
                        </div>
                        <div className="h-10 bg-orange-400 border border-gray-600 rounded-md shadow-sm relative">
                          <div className="h-1/2 w-1 bg-gray-800 absolute right-2 top-0 bottom-0 my-auto"></div>
                        </div>
                        <div className="h-10 bg-white border border-gray-600 rounded-md shadow-sm relative">
                          <div className="h-1/2 w-1 bg-gray-800 absolute right-2 top-0 bottom-0 my-auto"></div>
                        </div>
                        <div className=""></div>
                        <div className=""></div>
                        <div className="h-10 bg-white border border-gray-600 rounded-md shadow-sm relative">
                          <div className="h-1/2 w-1 bg-gray-800 absolute right-2 top-0 bottom-0 my-auto"></div>
                        </div>
                        <div className="h-10 bg-white border border-gray-600 rounded-md shadow-sm relative">
                          <div className="h-1/2 w-1 bg-gray-800 absolute right-2 top-0 bottom-0 my-auto"></div>
                        </div>
                        <div className="h-10 bg-red-400 border border-gray-600 rounded-md shadow-sm relative">
                          <div className="h-1/2 w-1 bg-gray-800 absolute right-2 top-0 bottom-0 my-auto"></div>
                        </div>
                        <div className="h-10 bg-orange-400 border border-gray-600 rounded-md shadow-sm relative">
                          <div className="h-1/2 w-1 bg-gray-800 absolute right-2 top-0 bottom-0 my-auto"></div>
                        </div>
                        <div className="h-10 bg-white border border-gray-600 rounded-md shadow-sm relative">
                          <div className="h-1/2 w-1 bg-gray-800 absolute right-2 top-0 bottom-0 my-auto"></div>
                        </div>
                        <div className=""></div>
                        <div className=""></div>
                        <div className="h-10 bg-gray-400 border border-gray-600 rounded-md shadow-sm relative">
                          <div className="h-1/2 w-1 bg-gray-800 absolute right-2 top-0 bottom-0 my-auto"></div>
                        </div>
                        <div className="h-10 bg-white border border-gray-600 rounded-md shadow-sm relative">
                          <div className="h-1/2 w-1 bg-gray-800 absolute right-2 top-0 bottom-0 my-auto"></div>
                        </div>
                        <div className="h-10 bg-orange-400 border border-gray-600 rounded-md shadow-sm relative">
                          <div className="h-1/2 w-1 bg-gray-800 absolute right-2 top-0 bottom-0 my-auto"></div>
                        </div>
                        <div className="h-10 bg-white border border-gray-600 rounded-md shadow-sm relative">
                          <div className="h-1/2 w-1 bg-gray-800 absolute right-2 top-0 bottom-0 my-auto"></div>
                        </div>
                        <div className="h-10 bg-white border border-gray-600 rounded-md shadow-sm relative">
                          <div className="h-1/2 w-1 bg-gray-800 absolute right-2 top-0 bottom-0 my-auto"></div>
                        </div>
                        <div className=""></div>
                        <div className=""></div>
                        <div className="h-10 bg-gray-400 border border-gray-600 rounded-md shadow-sm relative">
                          <div className="h-1/2 w-1 bg-gray-800 absolute right-2 top-0 bottom-0 my-auto"></div>
                        </div>
                        <div className="h-10 bg-red-500 border border-gray-600 rounded-md shadow-sm relative">
                          <div className="h-1/2 w-1 bg-gray-800 absolute right-2 top-0 bottom-0 my-auto"></div>
                        </div>
                        <div className="h-10 bg-white border border-gray-600 rounded-md shadow-sm relative">
                          <div className="h-1/2 w-1 bg-gray-800 absolute right-2 top-0 bottom-0 my-auto"></div>
                        </div>
                        <div className="h-10 bg-white border border-gray-600 rounded-md shadow-sm relative">
                          <div className="h-1/2 w-1 bg-gray-800 absolute right-2 top-0 bottom-0 my-auto"></div>
                        </div>
                        <div className="h-10 bg-white border border-gray-600 rounded-md shadow-sm relative">
                          <div className="h-1/2 w-1 bg-gray-800 absolute right-2 top-0 bottom-0 my-auto"></div>
                        </div>
                        <div className="h-10 bg-white border border-gray-600 rounded-md shadow-sm relative">
                          <div className="h-1/2 w-1 bg-gray-800 absolute right-2 top-0 bottom-0 my-auto"></div>
                        </div>
                        <div className="h-10 bg-white border border-gray-600 rounded-md shadow-sm relative">
                          <div className="h-1/2 w-1 bg-gray-800 absolute right-2 top-0 bottom-0 my-auto"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="h-[300px] w-full bg-white p-4 rounded-lg shadow-sm">
                    <div className="flex gap-3">
                      <h3 className="text-base font-bold">Tầng 1</h3>
                      <div className="grid grid-cols-7 gap-2 flex-1">
                        <div className="h-10 bg-gray-400 border border-gray-600 rounded-md shadow-sm relative">
                          <GiSteeringWheel
                            size={24}
                            className="absolute left-2 top-0 bottom-0 my-auto"
                          />
                        </div>
                        <div className="h-10 bg-white border border-gray-600 rounded-md shadow-sm relative">
                          <div className="h-1/2 w-1 bg-gray-800 absolute right-2 top-0 bottom-0 my-auto"></div>
                        </div>
                        <div className="h-10 bg-white border border-gray-600 rounded-md shadow-sm relative">
                          <div className="h-1/2 w-1 bg-gray-800 absolute right-2 top-0 bottom-0 my-auto"></div>
                        </div>
                        <div className="h-10 bg-blue-400 border border-gray-600 rounded-md shadow-sm relative">
                          <div className="h-1/2 w-1 bg-gray-800 absolute right-2 top-0 bottom-0 my-auto"></div>
                        </div>
                        <div className="h-10 bg-white border border-gray-600 rounded-md shadow-sm relative">
                          <div className="h-1/2 w-1 bg-gray-800 absolute right-2 top-0 bottom-0 my-auto"></div>
                        </div>
                        <div className="h-10 bg-white border border-gray-600 rounded-md shadow-sm relative">
                          <div className="h-1/2 w-1 bg-gray-800 absolute right-2 top-0 bottom-0 my-auto"></div>
                        </div>
                        <div className="h-10 bg-white border border-gray-600 rounded-md shadow-sm relative">
                          <div className="h-1/2 w-1 bg-gray-800 absolute right-2 top-0 bottom-0 my-auto"></div>
                        </div>
                        <div className="h-10 bg-white border border-gray-600 rounded-md shadow-sm relative">
                          <div className="h-1/2 w-1 bg-gray-800 absolute right-2 top-0 bottom-0 my-auto"></div>
                        </div>
                        <div className="h-10 bg-red-400 border border-gray-600 rounded-md shadow-sm relative">
                          <div className="h-1/2 w-1 bg-gray-800 absolute right-2 top-0 bottom-0 my-auto"></div>
                        </div>
                        <div className="h-10 bg-white border border-gray-600 rounded-md shadow-sm relative">
                          <div className="h-1/2 w-1 bg-gray-800 absolute right-2 top-0 bottom-0 my-auto"></div>
                        </div>
                        <div className="h-10 bg-orange-400 border border-gray-600 rounded-md shadow-sm relative">
                          <div className="h-1/2 w-1 bg-gray-800 absolute right-2 top-0 bottom-0 my-auto"></div>
                        </div>
                        <div className="h-10 bg-white border border-gray-600 rounded-md shadow-sm relative">
                          <div className="h-1/2 w-1 bg-gray-800 absolute right-2 top-0 bottom-0 my-auto"></div>
                        </div>
                        <div className=""></div>
                        <div className=""></div>
                        <div className="h-10 bg-white border border-gray-600 rounded-md shadow-sm relative">
                          <div className="h-1/2 w-1 bg-gray-800 absolute right-2 top-0 bottom-0 my-auto"></div>
                        </div>
                        <div className="h-10 bg-white border border-gray-600 rounded-md shadow-sm relative">
                          <div className="h-1/2 w-1 bg-gray-800 absolute right-2 top-0 bottom-0 my-auto"></div>
                        </div>
                        <div className="h-10 bg-red-400 border border-gray-600 rounded-md shadow-sm relative">
                          <div className="h-1/2 w-1 bg-gray-800 absolute right-2 top-0 bottom-0 my-auto"></div>
                        </div>
                        <div className="h-10 bg-orange-400 border border-gray-600 rounded-md shadow-sm relative">
                          <div className="h-1/2 w-1 bg-gray-800 absolute right-2 top-0 bottom-0 my-auto"></div>
                        </div>
                        <div className="h-10 bg-white border border-gray-600 rounded-md shadow-sm relative">
                          <div className="h-1/2 w-1 bg-gray-800 absolute right-2 top-0 bottom-0 my-auto"></div>
                        </div>
                        <div className=""></div>
                        <div className=""></div>
                        <div className="h-10 bg-gray-400 border border-gray-600 rounded-md shadow-sm relative">
                          <div className="h-1/2 w-1 bg-gray-800 absolute right-2 top-0 bottom-0 my-auto"></div>
                        </div>
                        <div className="h-10 bg-white border border-gray-600 rounded-md shadow-sm relative">
                          <div className="h-1/2 w-1 bg-gray-800 absolute right-2 top-0 bottom-0 my-auto"></div>
                        </div>
                        <div className="h-10 bg-orange-400 border border-gray-600 rounded-md shadow-sm relative">
                          <div className="h-1/2 w-1 bg-gray-800 absolute right-2 top-0 bottom-0 my-auto"></div>
                        </div>
                        <div className="h-10 bg-white border border-gray-600 rounded-md shadow-sm relative">
                          <div className="h-1/2 w-1 bg-gray-800 absolute right-2 top-0 bottom-0 my-auto"></div>
                        </div>
                        <div className="h-10 bg-white border border-gray-600 rounded-md shadow-sm relative">
                          <div className="h-1/2 w-1 bg-gray-800 absolute right-2 top-0 bottom-0 my-auto"></div>
                        </div>
                        <div className=""></div>
                        <div className=""></div>
                        <div className="h-10 bg-gray-400 border border-gray-600 rounded-md shadow-sm relative">
                          <div className="h-1/2 w-1 bg-gray-800 absolute right-2 top-0 bottom-0 my-auto"></div>
                        </div>
                        <div className="h-10 bg-red-500 border border-gray-600 rounded-md shadow-sm relative">
                          <div className="h-1/2 w-1 bg-gray-800 absolute right-2 top-0 bottom-0 my-auto"></div>
                        </div>
                        <div className="h-10 bg-white border border-gray-600 rounded-md shadow-sm relative">
                          <div className="h-1/2 w-1 bg-gray-800 absolute right-2 top-0 bottom-0 my-auto"></div>
                        </div>
                        <div className="h-10 bg-white border border-gray-600 rounded-md shadow-sm relative">
                          <div className="h-1/2 w-1 bg-gray-800 absolute right-2 top-0 bottom-0 my-auto"></div>
                        </div>
                        <div className="h-10 bg-white border border-gray-600 rounded-md shadow-sm relative">
                          <div className="h-1/2 w-1 bg-gray-800 absolute right-2 top-0 bottom-0 my-auto"></div>
                        </div>
                        <div className="h-10 bg-white border border-gray-600 rounded-md shadow-sm relative">
                          <div className="h-1/2 w-1 bg-gray-800 absolute right-2 top-0 bottom-0 my-auto"></div>
                        </div>
                        <div className="h-10 bg-white border border-gray-600 rounded-md shadow-sm relative">
                          <div className="h-1/2 w-1 bg-gray-800 absolute right-2 top-0 bottom-0 my-auto"></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-4">
                    <div className="flex items-center gap-4">
                      <div className="h-10 w-24 bg-white border border-gray-600 rounded-md shadow-sm relative">
                        <div className="h-1/2 w-1 bg-gray-800 absolute right-2 top-0 bottom-0 my-auto"></div>
                      </div>
                      <p className="font-medium">Ghế trống</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="h-10 w-24 bg-orange-400 border border-gray-600 rounded-md shadow-sm relative">
                        <div className="h-1/2 w-1 bg-gray-800 absolute right-2 top-0 bottom-0 my-auto"></div>
                      </div>
                      <p className="font-medium">Ghế đã đặt</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="h-10 w-24 bg-blue-400 border border-gray-600 rounded-md shadow-sm relative">
                        <div className="h-1/2 w-1 bg-gray-800 absolute right-2 top-0 bottom-0 my-auto"></div>
                      </div>
                      <p className="font-medium">Ghế đang chọn</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="h-10 w-24 bg-red-400 border border-gray-600 rounded-md shadow-sm relative">
                        <div className="h-1/2 w-1 bg-gray-800 absolute right-2 top-0 bottom-0 my-auto"></div>
                      </div>
                      <p className="font-medium">Ghế đã bán</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="h-10 w-24 bg-gray-400 border border-gray-600 rounded-md shadow-sm relative">
                        <div className="h-1/2 w-1 bg-gray-800 absolute right-2 top-0 bottom-0 my-auto"></div>
                      </div>
                      <p className="font-medium">Ghế không bán</p>
                    </div>
                  </div>

                  <div>
                    <p className="text-red-500 font-medium">Lưu ý:</p>
                    <p>
                      - Giờ trung chuyển Nội Bài → Nước Ngầm: 07:15, 10:30,
                      15:30, 21:00
                    </p>
                    <p>
                      - Giờ trung chuyển Nước Ngầm → Nội Bài: 05:15, 09:30,
                      14:30, 19:40
                    </p>
                    <p className="mt-3">
                      Mọi thắc mắc về dịch vụ của công ty du lịch Văn Minh, Quý
                      khách vui lòng liên hệ{" "}
                      <span className="text-red font-medium">1900 6467</span>
                    </p>
                  </div>
                </div>
                <div className="w-1/3 pl-6">
                  <div className="pb-2 border-b border-gray-200">
                    <h3 className="text-lg font-bold">Hà Nội - Nghệ An</h3>
                    <p className="text-gray-400">14:00 - 20/12/2020</p>
                  </div>

                  <div className="space-y-4 pt-4">
                    <div className="flex">
                      <div className="w-1/3">
                        <p className="text-gray-700">Ghế đã chọn</p>
                      </div>
                      <div className="w-2/3 font-bold">A12</div>
                    </div>

                    <div className="flex">
                      <div className="w-1/3">
                        <p>Tổng tiền</p>
                      </div>
                      <div className="w-2/3 font-bold">250.000đ</div>
                    </div>

                    <div className="flex items-center">
                      <div className="w-1/3">
                        <p>Họ tên</p>
                      </div>
                      <div className="w-2/3">
                        <Input placeholder="Nhập họ tên" />
                      </div>
                    </div>

                    <div className="flex items-center">
                      <div className="w-1/3">
                        <p>Số điện thoại</p>
                      </div>
                      <div className="w-2/3">
                        <Input placeholder="Nhập số điện thoại" />
                      </div>
                    </div>

                    <div className="flex items-center">
                      <div className="w-1/3">
                        <p>Email</p>
                      </div>
                      <div className="w-2/3">
                        <Input placeholder="Nhập Email" />
                      </div>
                    </div>

                    <div className="flex items-center">
                      <div className="w-1/3">
                        <p>Điểm đón</p>
                      </div>
                      <div className="w-2/3">
                        <Input placeholder="Nhập điểm đón" />
                      </div>
                    </div>

                    <div className="flex items-center">
                      <div className="w-1/3">
                        <p>Điểm trả</p>
                      </div>
                      <div className="w-2/3">
                        <Input placeholder="Nhập điểm trả" />
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <Button
                      type="primary"
                      size="large"
                      className="mt-6 w-[200px]"
                    >
                      Đặt vé
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ),
          expandIcon: ({ expanded, onExpand, record }) => (
            <Button
              onClick={(e) => onExpand(record, e)}
              className="border-primary text-primary hover:bg-primary hover:text-white"
            >
              Chọn chỗ
            </Button>
          ),
        }}
      />
    </div>
  );
};

export default Tickets;

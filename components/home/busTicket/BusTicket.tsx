'use client';

import { Button, Table } from "antd";
import { ColumnsType } from "antd/es/table";
import Image from "next/image";
import { IoLocationSharp } from "react-icons/io5";

interface DataType {
  key: string;
  name: string;
  address: string;
  phone: string;
}

const dataSource: DataType[] = [
  {
    key: "1",
    name: "236 Xã Đàn",
    address: "236 Xã Đàn – Q. Đống Đa",
    phone: "19006467",
  },
  {
    key: "2",
    name: "Trần Duy Hưng",
    address: "170A Trần Duy Hưng, Q. Cầu Giấy",
    phone: "19006467",
  },
  {
    key: "3",
    name: "172 Trần Bình",
    address: "172 Trần Bình – Q.Cầu Giấy",
    phone: "19006467",
  },
  {
    key: "4",
    name: "VP Xuân Mai",
    address: "Cầu Giấy Xuân Thủy – Xã Thủy Xuân Tiên – Chương Mỹ",
    phone: "19006467",
  },
  {
    key: "5",
    name: "VP Bến xe Nước Ngầm",
    address: "Bến xe Nước Ngầm– Q. Hoàng Mai",
    phone: "19006467",
  },
  {
    key: "6",
    name: "Bến xe Gia Lâm",
    address: "Trong nhà bán vé bến xe Gia Lâm – Gia Lâm",
    phone: "19006467",
  },
  {
    key: "7",
    name: "Bến xe Yên Nghĩa",
    address: "Trong nhà bán vé bến xe Yên Nghĩa – Q. Hà Đông",
    phone: "19006467",
  },
];

const columns: ColumnsType<DataType> = [
  { title: "STT", dataIndex: "key", key: "key", align: "center" },
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Địa chỉ",
    dataIndex: "address",
    key: "address",
  },
  {
    title: "Số điện thoại",
    dataIndex: "phone",
    key: "phone",
    render: (text: string) => <a className="text-blue-500">{text}</a>,
  },
  {
    key: "action",
    dataIndex: "action",
    render: () => (
      <div className="h-6 w-6 rounded-full bg-primary flex-center cursor-pointer">
        <IoLocationSharp size={16} color="#fff" />
      </div>
    ),
  },
];

const BusTicket = () => {
  return (
    <section className="pt-4 md:pt-24 pb-6 border-b border-dashed border-primary">
      <div className="p-6 bg-primary/20 relative pl-[130px] md:pl-[300px] rounded-lg">
        <div className="absolute top-8 md:-top-16 left-2 md:left-0">
          <div className="relative h-[123px] w-[111px] md:h-[277px] md:w-[256px]">
            <Image
              src="/assets/images/bus-ticket.svg"
              alt="bus-ticket"
              fill
              className="object-cover"
            />
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-medium mb-2">Hệ thống phòng vé</h2>
          <p>
            Để thuận tiện cho việc đặt và mua vé xe Văn Minh, xin mời quý khách
            liên hệ với các phòng vé tại Nghệ An, Hà Tĩnh, Thanh Hóa và Hà Nội.
          </p>
        </div>
      </div>

      <div className="md:pr-0 md:pl-[300px] mt-4 space-y-4">
        <div className="flex items-center gap-2 overflow-auto scrollbar-hide">
          <Button
            size="large"
            className="bg-primary/20 text-primary font-medium"
          >
            Khu vực Hà Nội
          </Button>
          <Button
            size="large"
            className="bg-gray-100 text-gray-500 font-medium"
          >
            Khu vực Nghệ An
          </Button>
          <Button
            size="large"
            className="bg-gray-100 text-gray-500 font-medium"
          >
            Khu vực Thanh Hoá
          </Button>
          <Button
            size="large"
            className="bg-gray-100 text-gray-500 font-medium"
          >
            Khu vực Hà Tĩnh
          </Button>
        </div>

        <Table
          dataSource={dataSource}
          columns={columns}
          size="small"
          pagination={false}
        />
      </div>
    </section>
  );
};

export default BusTicket;

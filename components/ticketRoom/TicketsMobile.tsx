"use client";

import { Avatar, List } from "antd";

const data = [
  {
    title: "Ant Design Title 1",
  },
  {
    title: "Ant Design Title 2",
  },
  {
    title: "Ant Design Title 3",
  },
  {
    title: "Ant Design Title 4",
  },
  {
    title: "Ant Design Title 4",
  },
  {
    title: "Ant Design Title 4",
  },
  {
    title: "Ant Design Title 4",
  },
  {
    title: "Ant Design Title 4",
  },
  {
    title: "Ant Design Title 4",
  },
  {
    title: "Ant Design Title 4",
  },
  {
    title: "Ant Design Title 4",
  },
  {
    title: "Ant Design Title 4",
  },
  {
    title: "Ant Design Title 4",
  },
  {
    title: "Ant Design Title 4",
  },
  {
    title: "Ant Design Title 4",
  },
  {
    title: "Ant Design Title 4",
  },
  {
    title: "Ant Design Title 4",
  },
  {
    title: "Ant Design Title 4",
  },
  {
    title: "Ant Design Title 4",
  },
];

const TicketsMobile = () => {
  return (
    <List
      itemLayout="horizontal"
      dataSource={data}
      renderItem={(item, index) => (
        <List.Item>
          <List.Item.Meta
            avatar={
              <div className="font-medium">
                <p className="mb-1">14:00</p>
                <p>18:00</p>
              </div>
            }
            title={
              <p className="text-gray-600 font-medium">Bến xe nước ngầm</p>
            }
            description={
              <div>
                <p className="text-gray-600 font-medium">Bến xe Hà Tĩnh</p>
                <p>(Quốc lộ 1)</p>
              </div>
            }
          />
          <div>
            <h3 className="text-green-500 font-semibold text-base mb-1">250.000</h3>
            <p className="text font-bold text-xs">30 chỗ online</p>
            <p className="text-xs text-gray-600">Xe ghế ngồi</p>
          </div>
        </List.Item>
      )}
    />
  );
};

export default TicketsMobile;

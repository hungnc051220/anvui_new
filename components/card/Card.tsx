import { Button } from "antd";
import Image from "next/image";

const Card = () => {
  return (
    <section className="max-w-7xl mx-auto border-dashed border-primary py-6">
      <div className="grid grid-cols-2 gap-8">
        <div className="pr-[250px] p-6 border-t border-[1px] shadow-sm rounded-lg relative">
          <div className="space-y-4">
            <h3 className="text-2xl font-medium">Hệ thống phòng vé</h3>
            <p>Địa chỉ chi tiết các phòng vé trong hệ thống của Văn Minh</p>
            <Button className="bg-primary/20 text-primary">Xem đầy đủ</Button>
          </div>
          <div className="absolute bottom-0 right-0 h-[90%] w-2/5">
            <Image src="/images/ellipse1.png" alt="ellipse1" fill />
          </div>
          <div className="absolute -bottom-3 right-6 w-[170px] h-full">
            <Image src="/images/about1.svg" alt="about1" fill style={{objectFit: "contain"}} />
          </div>
        </div>

        <div className="pr-[250px] p-6 border-t border-[1px] shadow-sm rounded-lg relative">
          <div className="space-y-4">
            <h3 className="text-2xl font-medium">Lịch trình</h3>
            <p>Các tuyến đường cùng ngày giờ cụ thể các chuyến xe của Văn Minh</p>
            <Button className="bg-primary/20 text-primary">Xem đầy đủ</Button>
          </div>
          <div className="absolute bottom-0 right-0 h-[90%] w-2/5">
            <Image src="/images/ellipse1.png" alt="ellipse1" fill />
          </div>
          <div className="absolute -bottom-3 right-6 w-[170px] h-full">
            <Image src="/images/about2.svg" alt="about1" fill style={{objectFit: "contain"}} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Card;

"use client";

import { Button } from "antd";

const Rules = () => {
  return (
    <section className="py-6 border-b border-dashed border-primary">
      <h2 className="text-xl font-medium text-center mb-6">
        Quy định đổi trả vé, hoàn tiền, hủy vé đặt
      </h2>
      <div className="flex items-center gap-2 overflow-auto scrollbar-hide">
        <Button size="large" className="bg-primary/20 text-primary font-medium">
          Đổi trả vé bán
        </Button>
        <Button size="large" className="bg-gray-100 text-gray-500 font-medium">
          Hoàn tiền
        </Button>
        <Button size="large" className="bg-gray-100 text-gray-500 font-medium">
          Hủy vé đặt
        </Button>
        <Button size="large" className="bg-gray-100 text-gray-500 font-medium">
          Quy định về vé ưu tiên
        </Button>
        <Button size="large" className="bg-gray-100 text-gray-500 font-medium">
          Quy định chuyển vé, vé gửi bán ngoài thời gian quy định
        </Button>
      </div>

      <div className="mt-2 bg-white shadow p-4 border-[1px] border-gray-100 rounded-lg text-gray-500 space-y-1">
        <p>- Từ 01 đến 02 vé: Đổi, trả trước 02h xe xuất bến.</p>
        <p>- Từ 03 đến 05 vé: Đổi, trả trước 12h xe xuất bến.</p>
        <p>- Từ 06 đến 09 vé: Đổi, trả trước 24h xe xuất bến.</p>
        <p>- Từ 10 đến 20 vé: Đổi, trả trước 36 xe xuất bến.</p>
        <p>- Trên 20 vé: Đổi, trả trước 60h xe xuất bến.</p>
        <p>
          - Thời gian đổi trả vé được căn cứ vào thời gian xe xuất bến hoặc đón
          khách tại các văn phòng (điểm đón khách của xe giường nằm).
        </p>
        <p>
          - Khách đổi trả vé phải đem đến văn phòng hoặc yêu cầu đổi trả tại nhà
          (Đối với các khu vực có dịch vụ giao vé tại nhà)
        </p>
        <p>
          - Trường hợp khách hàng mua vé đã thanh toán tiền vé nhưng chưa xuất
          vé(áp dụng cho khách hàng thanh toán tiền vé bằng hình thức chuyển
          khoản hoặc thu tiền hộ), nếu khách hàng muốn trả vé thì nhân viên kiểm
          tra, xác minh số điện thoại và thông tin khách hàng bằng cách nhắn
          thông tin vé cần hủy vào số điện thoại của công ty, để đổi/trả vé.
        </p>
        <p>
          - Nhận đổi, trả vé cho khách hàng qua điện thoại, đối với các khu vực
          có dịch vụ giao vé tại nhà. Khi nhân viên giao vé nhận được vé từ
          khách thì mới báo cho tổng đài hủy vé hoặc đổi vé.
        </p>
        <p>
          - Trường hợp khi khách hàng bị mất vé nhưng không có nhu cầu đi nữa
          muốn được trả vé. Trường hợp này sẽ giải quyết cấp lại vé cho khách
          bằng giờ xe xuất bến và sau khi xuất lại vé thì hoàn lại 50% tiền vé
          cho khách theo quy định công ty.
        </p>
        <p>
          - Trường hợp khi khách hàng đã lên xe vé đã xé, khách hàng thay đổi kế
          hoạch không đi và vé của khách hàng đang trong thời gian được hoàn lại
          50% tiến vé. Trường hợp này khách hàng được trả vé với điều kiện khi
          xe chưa xuất bến.
        </p>
        <p>
          - Trường hợp đổi, trả vé ngoài quy định phải báo cho quản lý để xin ý
          kiến Ban giám đốc Công ty. Ghi rõ lý do hủy và người cho hủy.
        </p>
      </div>
    </section>
  );
};

export default Rules;

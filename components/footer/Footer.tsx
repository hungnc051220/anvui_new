import Image from "next/image";

const Footer = () => {
  return (
    <footer className="pt-6 bg-gray-200 relative">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div>
            <h3 className="text-lg text-primary font-medium mb-4">
              Công ty CP Công nghệ An Vui
            </h3>
            <p>
              Đ/c: Toà Ecolife Capital, Số 58 Tố Hữu, Nam Từ Liêm, Hà Nội
              <br />
              Giấy chứng nhận ĐKKD số 0107003437 do Sở KH& ĐT TP. Hà Nội cấp lần
              đầu ngày 23/09/2015
              <br />
              <br />
              Đại diện: CTHĐQT PHAN BÁ MẠNH
              <br />
              Email: anvuihcm@anvui.vn
              <br />
              ĐT: 02383588776
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg text-primary font-medium mb-4">
              Các hình thức thanh toán
            </h3>
            <Image
              src="/assets/images/footer1.png"
              alt="cash"
              width="123"
              height="48"
            />
            <Image
              src="/assets/images/footer2.png"
              alt="cash"
              width="75"
              height="48"
            />
          </div>
          <div className="space-y-4">
            <h3 className="text-lg text-primary font-medium">Liên kết nhanh</h3>
            <p>Hệ thống phòng vé</p>
            <p>Lịch trình</p>
            <p>Điều khoản sử dụng</p>
            <p>Liên hệ</p>
            <p>Tuyển dụng</p>
          </div>
          <div>
            <h3 className="text-lg text-primary font-medium">Bản đồ</h3>
          </div>
        </div>
      </div>
      <div className="text-center bg-gray-400 py-2 mt-8">
        <p className="font-semibold">
          Copyright ©2023 AnVui. All rights reserved. Developed by
          anvui.vn
        </p>
      </div>
    </footer>
  );
};

export default Footer;

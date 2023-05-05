import { Button } from "antd";

const About = () => {
  return (
    <section className="bg-gray-200 py-4 md:py-6 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-medium">Giới thiệu về công ty Văn Minh</h2>
        <p className="mt-6 text-gray-600">
          Công ty trách nhiệm hữu hạn Văn Minh được thành lập ngày 22 tháng 11
          năm 2007, trụ sở chính tại Bến xe phía Đông, Nghi Phú, TP Vinh, tỉnh
          Nghệ An. <br /> <br />
          Trong tương lai, công ty Văn Minh có mục tiêu mở rộng các văn phòng
          vận tải hành khách và chuyển phát nhanh ra các thành phố khác từ Bắc
          vào Nam. Cùng với đó là việc đưa vào hệ thống bến xe mới của riêng
          công ty, làm nơi tập kết xe trên địa bàn toàn tỉnh Nghệ An, cũng như
          thúc đẩy việc đưa lao động đi học tập và làm việc ở nước ngoài. Chúng
          tôi đang từng bước xây dựng công ty trở thành một trong những tập đoàn
          lớn mạnh của Việt Nam.
        </p>
        <div className="text-center mt-2">
          <Button className="bg-primary/20 text-primary">
            Xem thêm
          </Button>
        </div>
      </div>
    </section>
  );
};

export default About;

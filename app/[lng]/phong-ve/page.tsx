import SearchInput from "@/components/home/search/SearchInput";
import Tickets from "@/components/ticketRoom/Tickets";

export default function Page({ params: { lng } }: { params: { lng: string } }) {

  return (
    <section className="bg-white rounded-lg shadow-md p-6 mb-10">
      <SearchInput lng={lng} />
      <div className="grid grid-cols-3 h-12">
        <div className="flex-center bg-primary text-white font-bold text-lg crumb z-[3]">
          <p>Chọn chỗ và điền thông tin</p>
        </div>
        <div className="flex-center font-bold text-lg crumb -ml-4 z-[2] bg-gray-200"><p>Thanh toán hoặc giữ chỗ trước</p></div>
        <div className="flex-center bg-gray-200 font-bold text-lg -ml-4"><p>Hoàn thành</p></div>
      </div>

      <div className="h-10 bg-gray-100 flex items-center gap-4 pl-10">
          <h4 className="uppercase font-bold">Sắp xếp</h4>
          <p>Thời gian khởi hành</p>
          <p>Số ghế trống</p>
      </div>

      <Tickets />

    </section>
  );
}

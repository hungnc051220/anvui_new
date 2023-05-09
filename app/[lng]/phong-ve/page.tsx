import SearchInput from "@/components/home/search/SearchInput";
import Tickets from "@/components/ticketRoom/Tickets";
import TicketsMobile from "@/components/ticketRoom/TicketsMobile";

export default function Page({ params: { lng } }: { params: { lng: string } }) {
  return (
    <section className="bg-white rounded-2xl shadow-md p-4 md:p-6">
      <SearchInput lng={lng} />
      <div className="grid grid-cols-3 h-8 md:h-12 -mx-4 md:mx-0">
        <div className="flex-center bg-primary text-white font-bold text-sm md:text-lg crumb-mobile md:crumb z-[3]">
          <p className="hidden md:block">Chọn chỗ và điền thông tin</p>
          <p className="block md:hidden">Chọn chỗ</p>
        </div>
        <div className="flex-center font-bold md:text-lg crumb-mobile md:crumb text-sm -ml-6 pl-6 z-[2] bg-gray-200">
          <p className="hidden md:block">Thanh toán hoặc giữ chỗ trước</p>
          <p className="block md:hidden">Thanh toán</p>
        </div>
        <div className="flex-center bg-gray-200 font-bold md:text-lg -ml-6 text-sm pl-6">
          <p>Hoàn thành</p>
        </div>
      </div>

      <div className="h-8 md:h-10 bg-gray-100 flex items-center gap-4 pl-4 md:pl-10 text-sm md:text-base -mx-4 md:mx-0">
        <h4 className="uppercase font-bold">Sắp xếp</h4>
        <p>Thời gian khởi hành</p>
        <p>Số ghế trống</p>
      </div>

      <div className="hidden md:block">
        <Tickets />
      </div>

      <div className="block md:hidden">
        <TicketsMobile />
      </div>
    </section>
  );
}

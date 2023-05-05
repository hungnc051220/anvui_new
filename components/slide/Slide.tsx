import Image from "next/image";

const Slide = () => {
  return (
    <section className="max-w-7xl mx-auto mt-6">
      <div className="flex items-center gap-4 overflow-scroll scrollbar-hide">
        <div className="relative h-[160px] min-w-[256px] cursor-pointer hover:scale-105 transition duration-150">
          <Image
            src="/images/slide1.png"
            alt="slide"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="relative h-[160px] min-w-[256px] cursor-pointer hover:scale-105 transition duration-150">
          <Image
            src="/images/slide2.png"
            alt="slide"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="relative h-[160px] min-w-[256px] cursor-pointer hover:scale-105 transition duration-150 translate">
          <Image
            src="/images/slide3.png"
            alt="slide"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="relative h-[160px] min-w-[256px] cursor-pointer hover:scale-105 transition duration-150 translate">
          <Image
            src="/images/slide4.png"
            alt="slide"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="relative h-[160px] min-w-[256px] cursor-pointer hover:scale-105 transition duration-150 translate">
          <Image
            src="/images/slide4.png"
            alt="slide"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="relative h-[160px] min-w-[256px] cursor-pointer hover:scale-105 transition duration-150 translate">
          <Image
            src="/images/slide4.png"
            alt="slide"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>
    </section>
  );
};

export default Slide;

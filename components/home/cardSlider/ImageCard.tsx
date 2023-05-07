import Image from "next/image";

const ImageCard = ({ imageSrc }: { imageSrc: string }) => {
  return (
    <div className="relative h-[160px] min-w-[256px] cursor-pointer hover:scale-105 transition duration-150 my-2 overflow-hidden">
      <Image
        src={imageSrc}
        alt="slide"
        fill
        style={{ objectFit: "cover", borderRadius: 16 }}
      />
    </div>
  );
};

export default ImageCard;

"use client";

import Image from "next/image";

const Banner = () => {
  return (
    <section className="absolute top-0 h-[250px] md:h-[300px] w-full bg-primary/70">
      <Image
        src="/assets/images/banner.svg"
        alt="banner"
        fill
        className="object-cover"
      />
    </section>
  );
};

export default Banner;

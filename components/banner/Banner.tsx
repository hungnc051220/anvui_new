'use client';

import Image from "next/image";

const Banner = () => {
  return (
    <div className="relative h-[30vh] min-h-[250px] bg-primary">
        <Image src="/images/banner.png" alt="banner" fill style={{objectFit: "cover"}}/>
    </div>
  )
}

export default Banner
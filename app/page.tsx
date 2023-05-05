"use client";
import Image from "next/image";
import { DatePicker, Input } from "antd";
import Header from "@/components/header/Header";
import Banner from "@/components/banner/Banner";

export default function Home() {
  return (
    <main>
      <Header />
      <div className="relative">
        <Banner />
        <div className="bg-white rounded-lg shadow-sm drop-shadow-sm max-w-5xl w-full h-[500px] z-10 absolute top-16 left-0 right-0 my-0 mx-auto">
          
        </div>
      </div>
    </main>
  );
}

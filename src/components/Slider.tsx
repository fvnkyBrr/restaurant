"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const data = [
  {
    id: 1,
    title: "",
    image: "/banner-1.jpg",
  },
  {
    id: 2,
    title: "",
    image: "/banner-2.jpg",
  },
  {
    id: 3,
    title: "",
    image: "/banner-3.jpg",
  },
  {
    id: 4,
    title: "",
    image: "/banner-4.jpg",
  },
];

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (data.length - 1 === prev ? 0 : prev + 1));
      //* jika prev sama dengan indeks terakhir, yaitu jika prev adalah 4 dalam kasus ini, maka currentSlide akan diatur kembali ke 0. Jika tidak, currentSlide akan diatur menjadi prev + 1.
    }, 3000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="flex flex-col h-[calc(100vh-9rem)] md:h-[calc(100vh-18rem)] lg:h-[calc(100vh-14rem)] w-full">
      <div className=" h-[calc(100vh-18rem)] md:h-[calc(100vh-20rem)] relative mx-4 my-6  md:mx-14 lg:mx-24 md:my-8">
        <Image
          className="object-cover object-center rounded-lg md:rounded-[2rem] shadow-2xl"
          src={data[currentSlide].image}
          alt=""
          fill
        />
      </div>
      <div className="flex justify-center items-center ">
        <button className="bg-red-600 text-white text-xl font-bold  py-4 px-16 rounded-2xl">
          Pesan Sekarang
        </button>
      </div>
    </div>
  );
};

export default Slider;

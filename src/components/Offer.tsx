import Image from "next/image";
import React from "react";

const Offer = () => {
  return (
    // <div className="bg-black h-screen flex flex-col md:flex-row md:justify-between bg-[url('/offerBg2.jpg')] md:h-[70vh]">
    <div className="bg-yellow-500 h-screen flex flex-col md:flex-row md:justify-between  md:h-[70vh]">
      {/* image container */}
      <div className="flex-1 w-full relative md:h-full">
        <Image src="/offerProduct.png" alt="" fill className="object-contain" />
      </div>
      {/* text container */}
      <div className="flex-1 flex flex-col items-center md:items-start justify-center text-center md:text-start gap-8 p-8">
        <h1 className="text-gray-800 text-4xl xl:text-5xl font-bold">
          Beautiful Wagyu & Black Truffle Demi-Glace{" "}
        </h1>
        <p className="text-red-500  text-md xl:text-lg">
          Nikmati kenikmatan luar biasa dari steak kami yang dipanggang dengan
          sempurna, simfoni rasa yang meningkatkan kenikmatan bersantap ke
          tingkat kenikmatan kuliner yang tak tertandingi.
        </p>
        <button
          className="bg-red-600 text-white rounded-full py-4 px-6 items-start font-bold"
        >
          Beli Sekarang
        </button>
      </div>
    </div>
  );
};

export default Offer;

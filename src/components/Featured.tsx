// import { featuredProducts } from "@/data";
import { ProductType } from "@/types/types";
import Image from "next/image";
import { title } from "process";
import React from "react";

const getData = async () => {
  const res = await fetch("http://localhost:3000/api/products", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
};

const Featured = async () => {
  const featuredProducts: ProductType[] = await getData();

  return (
    <div className="w-screen overflow-x-scroll scrollbar-hide overflow-y-hidden text-green-800">
      {/* wrapper */}
      <div className="w-max flex md:mt-10">
        {/* single item */}
        {featuredProducts.map((item) => (
          <div
            key={item.id}
            className="w-screen h-[60vh] flex flex-col justify-around items-center p-8 hover:bg-fuchsia-50 transition-all duration-300 md:w-[50vw] xl:w-[33vw] xl:h-[90vh] "
          >
            {/* image container */}
            {item.img && (
              <div className="relative w-full flex-1 hover:rotate-[60deg] transition-all duration-500">
                <Image src={item.img} alt="" fill className="object-contain" />
              </div>
            )}

            {/* text container */}
            <div className="flex-1  flex flex-col gap-4 item-center text-center">
              <h1 className="text-xl font-bold uppercase xl:text-2xl 2xl:text-3xl">
                {item.title}
              </h1>
              <p className="p-4 2xl:p-8">{item.desc}</p>
              <span className="font-lg font-bold">{item.price}</span>
              <button className="bg-red-600 text-white  p-2 rounded">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Featured;

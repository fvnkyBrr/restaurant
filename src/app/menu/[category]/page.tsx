import { pizzas } from "@/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const CategoryPage = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-red-500 p-8">
      {pizzas.map((item) => (
        <Link
          href={`/product/${item.id}`}
          className=" h-[60vh] border-2 border-red-500 p-4 flex flex-col justify-between group odd:bg-fuchsia-50 rounded-md"
          key={item.id}
        >
          {/* image container */}
          {item.img && (
            <div className="relative h-[80%] ">
              <Image
                src={item.img}
                alt=""
                fill
                className="object-contain"
              ></Image>
            </div>
          )}
          {/* text container */}
          <div className="flex items-center justify-between font-bold">
            <h1 className="text-2xl uppercase p-2">{item.title}</h1>
            <h2 className="group-hover:hidden text-xl">${item.price}</h2>
            {/* <button className="hidden group-hover:block uppercase bg-red-500 text-white p-2 rounded-md">
              Add to Cart
            </button> */}
            <div className="cursor-pointer  hidden group-hover:block items-center bg-red-500 rounded-3xl bg-opacity-20 mb-2 mr-2">
              <Image
                src="/cart3.png"
                alt=""
                width={40}
                height={40}
                className="opacity-80 "
              />
            </div>
          </div>

          {/* <div className="flex items-start justify-between px-4 ">
            <div className="flex flex-col ">
              <h1 className="mb-2 uppercase text-xl">{item.title}</h1>
              <h1>{item.price}</h1>
            </div>
            <div className="flex flex-row relative  items-center ">
              <button className="flex gap-1 group-hover:block hidden">
                <span className="uppercase font-bold mt-2">add</span>
                <Image
                  src="/cart3.png"
                  alt=""
                  width={30}
                  height={30}
                  className="opacity-80"
                ></Image>
              </button>
            </div> */}
          {/* <button className="uppercase bg-red-500 p-2 text-white rounded-md ">
              Add to Card
            </button>     */}
          {/* </div> */}
        </Link>
      ))}
    </div>
  );
};

export default CategoryPage;

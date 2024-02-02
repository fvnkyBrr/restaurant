import Image from "next/image";
import React from "react";

const CartPage = () => {
  return (
    <div className="h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex flex-col  text-red-500 lg:flex-row">
      {/* product container */}
      <div className="h-1/2 flex flex-col justify-center overflow-scroll scrollbar-hide p-4 lg:h-full lg:w-2/3 2xl:w-1/2 lg:px-20 xl:px-40">
        {/* single item */}
        <div className="flex justify-between items-center mb-4 ">
          <Image
            src="/temporary/p3.png"
            alt=""
            className=""
            width={100}
            height={100}
          />
          <div className="">
            <h1 className="uppercase text-xl font-bold">Burger</h1>
            <span>large</span>
          </div>
          <h2 className="font-bold">Rp 100K</h2>
          <span className="cursor-pointer">X</span>
        </div>
        <div className="flex justify-between items-center mb-4 ">
          <Image
            src="/temporary/p3.png"
            alt=""
            className=""
            width={100}
            height={100}
          />
          <div className="">
            <h1 className="uppercase text-xl font-bold">Burger</h1>
            <span>large</span>
          </div>
          <h2 className="font-bold">Rp 100K</h2>
          <span className="cursor-pointer">X</span>
        </div>

        <div className="flex justify-between items-center mb-4 ">
          <Image
            src="/temporary/p3.png"
            alt=""
            className=""
            width={100}
            height={100}
          />
          <div className="">
            <h1 className="uppercase text-xl font-bold">Burger</h1>
            <span>large</span>
          </div>
          <h2 className="font-bold">Rp 100K</h2>
          <span className="cursor-pointer">X</span>
        </div>
      </div>
      {/* payment container */}
      <div className="h-1/2 p-4 bg-fuchsia-100 flex flex-col gap-4 justify-center lg:h-full lg:w-1/3 2xl:w-1/2 ig:px-20 xl:px-40 2xl:text-xl 2xl:gap-6">
        <div className="flex justify-between">
          <span>Subtotal (2 items)</span>
          <span>Rp 200K</span>
        </div>
        <div className="flex justify-between">
          <span>Service Cost </span>
          <span>Rp0</span>
        </div>
        <div className="flex justify-between">
          <span>Total</span>
          <span className="font-bold">Rp200K</span>
        </div>
        <hr className="m-2" />
        <button className="uppercase bg-red-500 text-white rounded-md p-3 w-1/2 self-end">
          Checkout
        </button>
      </div>
    </div>
  );
};

export default CartPage;

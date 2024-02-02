"use client";
import Image from "next/image";
// import React from "react";
import React, { useEffect, useState } from "react";

type Props = {
  price: number;
  id: number;
  options?: { title: string; additionalPrice: number }[];
};

const Price = ({ price, id, options }: Props) => {
  const [total, setTotal] = useState(price);
  const [quantity, setQuantity] = useState(1);
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    setTotal(
      quantity * (options ? price + options[selected].additionalPrice : price)
    );
  }, [quantity, selected, price, options]);

  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between py-4">
        <span className="text-lg">Subtotal</span>
        <h2 className="text-2xl font-bold">${total.toFixed(2)}</h2>
      </div>
      {/* options container */}
      <div className="flex gap-4 justify-end">
        {options?.map((options, index) => (
          <button
            key={options.title}
            className="min-w-[6rem] p-2 ring-1 ring-red-500 rounded-md"
            style={{
              background: selected === index ? "rgb(239 68 68)" : "white",
              color: selected === index ? "white" : "red",
            }}
            onClick={() => setSelected(index)}
          >
            {options.title}
          </button>
        ))}
      </div>
      {/* quantity and add button container */}
      <div className="flex justify-between items-center">
        {/* quantity */}
        <div className="flex justify-between w-full p-3 ring-1 ring-red-500">
          <span>Quantity</span>
          <div className="flex gap-6 mx-4 items-center">
            <div
              className={`cursor-pointer ${quantity === 1 ? "opacity-50" : ""}`}
              onClick={() => setQuantity((prev) => (prev > 1 ? prev - 1 : 1))}
            >
              <Image src={"/minus.png"} alt="" width={20} height={20} />
            </div>
            <span>{quantity}</span>
            <div
              className="cursor-pointer "
              onClick={() => setQuantity((prev) => (prev < 9 ? prev + 1 : 9))}
            >
              <Image src={"/plus.png"} alt="" width={20} height={20} />
            </div>
          </div>
        </div>
        {/* cart button */}
        <button className="uppercase w-56 bg-red-500 ring-1 ring-red-500 text-white p-3 ">
          + Cart
        </button>
      </div>
    </div>
  );
};

export default Price;

"use client";
import { OrderType } from "@/types/types";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import React, { useState } from "react";

const OrdersPage = () => {
  // const { data: session, status } = useSession();

  // const router = useRouter();

  // if (status === "unauthenticated") {
  //   router.push("/");
  // }

  // const { isPending, error, data } = useQuery({
  //   queryKey: ["orders"],
  //   queryFn: () =>
  //     fetch("https://localhost:3000/api/orders").then((res) => res.json()),
  // });

  // if (isLoading || status === "loading") return "Loading...";
  return (
    <div className="p-4 lg:px-20 xl:px-40">
      <table className="w-full ">
        <thead className="text-left">
          <tr>
            <th className="hidden md:block">Order ID</th>
            <th>Date</th>
            <th>Price</th>
            <th className="hidden md:block">Product</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody className="">
          {/* {data.map((item: OrderType) => ( */}
            <tr
              className="text-sm md:text-base border-b border-solid border-red-500"
              key={0}
            >
              <td className="hidden md:block py-6 px-1">123456789</td>
              <td className="py-6 px-1">28.01.2023</td>
              <td className="py-6 px-1">100.000</td>
              <td className="hidden md:block py-6 px-1">
                Big Burger, Pizza (2)
              </td>
              <td className="py-6 px-1">otw (10 mnt estimasi)</td>
            </tr>
          {/* ))} */}
        </tbody>
      </table>
    </div>
  );
};

export default OrdersPage;

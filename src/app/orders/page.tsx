import React from 'react'

const OrdersPage = () => {
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
          <tr className="text-sm md:text-base border-b border-solid border-red-500">
            <td className="hidden md:block py-6 px-1">123456789</td>
            <td className="py-6 px-1">28.01.2023</td>
            <td className="py-6 px-1">100.000</td>
            <td className="hidden md:block py-6 px-1">Big Burger, Pizza (2)</td>
            <td className="py-6 px-1">otw (10 mnt estimasi)</td>
          </tr>      
        </tbody>
      </table>
    </div>
  );
}

export default OrdersPage
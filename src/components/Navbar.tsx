import React from "react";
import Menu from "./Menu";
import Link from "next/link";
import CartIcon from "./CartIcon";
import Image from "next/image";

const Navbar = () => {
  
  const user = false;
  return (
    <div className="h-12 mt-12  text-red-500 p-4 flex items-center justify-between border-b-2 border-b-red-500 uppercase md:h-24 lg:px-20 lx:px-40 font-semibold">

      {/* <div className="flex gap-2 cursor-pointer items-center px-1 md:absolute top-3 right-2 lg:static ">
        <Image src="/telephone.png" alt="" width={20} height={20} />
        <span className="whitespace-nowrap ">+62 895-2313-3302</span>
      </div> */}

      <div className="flex gap-2 cursor-pointer items-center px-1 md:px-9 ">
        <Image src="/telephone.png" alt="" width={20} height={20} />
        <span className="whitespace-nowrap ">+62 895-2313-3302</span>
      </div>

      {/* LINKS */}
      <div className="hidden md:flex gap-4 flex-1 md:justify-center ">
        <Link href="/">Home</Link>
        <Link href={"/menu"}>Menu</Link>
        <Link href={"/"}>Contact</Link>
      </div>

      {/* MOBILE MENU */}
      <div className="md:hidden">
        <Menu />
      </div>
      {/* Right LINKS */}
      <div className="hidden md:flex gap-4 xl:gap-6 items-center  md:justify-end md:px-9 xl:px-10">
        {!user ? (
          <Link href="/login">Login</Link>
        ) : (
          <Link href={"/orders"}>Orders</Link>
        )}
        <CartIcon />
      </div>
    </div>
  );
};

export default Navbar;

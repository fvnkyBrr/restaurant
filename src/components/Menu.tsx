"use client";

import { link } from "fs";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import CartIcon from "./CartIcon";

const links = [
  { id: 1, title: "HomePage", url: "/" },
  { id: 2, title: "Menu", url: "/menu" },
  { id: 3, title: "Working Hours", url: "/" },
  { id: 4, title: "Contact", url: "/" },
];

const Menu = () => {
  const [open, setOpen] = useState(false);

  const user = false;
  return (
    <div >
      {!open ? (
        <Image
          src="/open.png"
          alt=""
          width={20}
          height={20}
          onClick={() => setOpen(true)}
        />
      ) : (
        <Image
          src="/close.png"
          alt=""
          width={20}
          height={20}
          onClick={() => setOpen(false)}
        />
      )}
      {open && ( 
      <div className="bg-green-600 text-white absolute left-0  top-24 w-full h-[calc(100vh-6rem)] gap-8 flex flex-col justify-center items-center text-3xl z-10 ">
        {links.map((item) => (
          <Link href={item.url} key={item.id} onClick={() => setOpen(false)}>
            {item.title}
          </Link>
        ))}
        {!user ? (<Link href="/login" onClick={() => setOpen(false)}>lOGIN</Link>
        ) : (
        <Link href="/orders" onClick={() => setOpen(false)}>Orders</Link>
        )}
        <Link href="/cart">
          <CartIcon/>
          </Link>
      </div>)}
    </div>
  );
};

export default Menu;

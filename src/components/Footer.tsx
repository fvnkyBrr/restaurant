import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className="h-12 md:h-24 p-4 lg:px-20 xl:px-40 flex items-center justify-between">
      <Link href="" className="font-bold text-lx">
        High Street Restaurant
      </Link>
      <p>+62 895-2313-3302</p>
    </div>
  );
}

export default Footer
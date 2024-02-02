import React from 'react'

const Notification = () => {
  return (
    <div className="fixed top-0 left-0 z-[9999] w-screen grid place-items-center ">
      <div className="w-full md:w-[90%] mx-auto h-12 text-white px-4 flex items-center justify-center text-center text-sm md:text-base cursor-pointer rounded-bl-full rounded-br-full bg-[url('/bgRed2.jpg')]">
        High Street Restaurant
      </div>
    </div>
  );
}

export default Notification
import Link from "next/link";
import React from "react";

const RegisPage = () => {
  return (
    <div>
      <div className="p-4 h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex items-center justify-center">
        {/* box */}
        <div className="h-full shadow-2xl rounded-lg md:h-[90%] ">
          {/*form container */}
          <div className="p-10 flex flex-col gap-8">
            <h1 className="text-xl font-bold xl:text-3xl">Create Account</h1>
            <p>Log in to your account or create a new account</p>
            <div className="flex flex-col gap-6 p-4  rounded-md">
              {/* <label htmlFor="">Username :</label> */}
              <input
                type="email"
                placeholder="Email"
                id="email"
                className="h-10 pl-2 shadow-md ring-1 ring-green-100 rounded focus:outline-none "
              />
              {/* <label htmlFor="">Password :</label> */}
              <input
                type="password"
                id="password"
                placeholder="password"
                className="h-10 pl-2 shadow-md ring-green-100 rounded focus:outline-none"
              />
            </div>
            <button className="text-white bg-red-500 p-2 rounded-md ">
              SignUp
            </button>
            <p className="text-sm">
              Already have an account?{" "}
              <Link href="/login" className="underline">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisPage;

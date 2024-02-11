"use client";

import { signOut } from "next-auth/react";
import Link from "next/link";

const UserLink = () => {
  const user = true;

  // const { data: session, status } = useSession();

  return (
    <div>
      {!user ? (
        <Link href="/login">Login</Link>
      ) : (
        <div>
          <Link href={"/orders"}>Orders</Link>
          <span className="ml-4 cursor-pointer" onClick={() => signOut()}>
            Logout
          </span>
        </div>
      )}
    </div>

    //    <div>
    //    {status === "loading" && <div>Loading...</div>}
    //    {status === "unauthenticated" && <Link href="/login">Login</Link>}
    //    {status === "authenticated" && (
    //      <div>
    //        <Link href={"/orders"}>Orders</Link>
    //        <span className="ml-4 cursor-pointer" onClick={() => signOut()}>
    //          Logout
    //        </span>
    //      </div>
    //    )}
    //  </div>
  );
};

export default UserLink;

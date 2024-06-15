"use client";
import Link from "next/link";
import { useAuth } from "../context/AuthContext";

export default function NavigationBar() {
  const { token, handleLogout } = useAuth();
  return (
    <>
      <nav
        className={`fixed top-0 w-full flex justify-between items-center py-1 px-5 z-10 bg-orange-600`}
      >
        <Link href={"/"}>
          <div className="cursor-pointer w-14 h-14 p-1">
            <img
              src="./logo-black.png"
              alt="logo"
              className="rounded-full  p-1"
            />
          </div>
        </Link>
        {!token && (
          <Link href={"/add"}>
            <button className="cursor-pointer bg-transparent w-5 h-5 shadow-lg"></button>
          </Link>
        )}

        {token && (
          <div className="gap-2 flex">
            <Link
              href={"/add"}
              className="cursor-pointer bg-inherit text-black py-1 px-4 rounded-lg shadow-md hover:shadow-orange-700 hover:border-black-400 border text-sm"
            >
              Add
            </Link>
            <button
              className="cursor-pointer bg-inherit text-black py-1 px-4 rounded-lg shadow-md hover:shadow-orange-700 hover:border-black-400 border text-sm"
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
        )}
      </nav>
    </>
  );
}

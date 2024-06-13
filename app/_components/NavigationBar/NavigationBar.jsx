"use client";
import { Dumbbell, MenuIcon, X } from "lucide-react";
// import { DarkModeButton } from "./DarkModeButton";
import Link from "next/link";
import { useTheme } from "next-themes";

export default function NavigationBar() {
  const { theme } = useTheme("light");

  return (
    <>
      <div
        className={`fixed top-0 w-full flex justify-between items-center py-2 px-5 z-10 shadow-md bg-black`}
      >
        <Link href={"/"}>
          <div className="cursor-pointer w-12 h-12 p-1">
            <img
              src="./logo-black.png"
              alt="logo"
              className="rounded-full bg-white p-1"
            />
          </div>
        </Link>
        {/* <div>
          <DarkModeButton />
        </div> */}
      </div>
    </>
  );
}

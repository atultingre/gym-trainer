"use client";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { Dumbbell, MenuIcon, X } from "lucide-react";
import { DarkModeButton } from "./DarkModeButton";
import Link from "next/link";
import { useTheme } from "next-themes";

const navigation = [
  { name: "Home", href: "/", current: true },
  { name: "Clients", href: "/clients", current: false },
  { name: "Reviews", href: "/reviews", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function NavigationBar() {
  const { theme } = useTheme();

  return (
    <>
      <div
        className={`fixed top-0 w-full flex justify-between items-center py-2 px-11 z-10 shadow-md ${
          theme === "light" ?"bg-white":  "bg-black"  
        }`}
      >
        <div className="rotate-[-45deg] cursor-pointer">
          <Dumbbell size={40} className=" text-red-600" />
        </div>
        <div>
          <DarkModeButton />
        </div>
      </div>
    </>
    // <Disclosure
    //   as="nav"
    //   className="fixed top-0 w-full shadow-md bg-inherit z-10"
    //   asChild
    // >
    //   {({ open }) => (
    //     <>
    //       <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
    //         <div className="relative flex h-16 items-center justify-between">
    //           <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
    //             {/* Mobile menu button*/}
    //             <DisclosureButton className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
    //               <span className="absolute -inset-0.5" />
    //               <span className="sr-only">Open main menu</span>
    //               {open ? (
    //                 <X className="block h-6 w-6" aria-hidden="true" />
    //               ) : (
    //                 <MenuIcon className="block h-6 w-6" aria-hidden="true" />
    //               )}
    //             </DisclosureButton>
    //           </div>
    //           <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
    //             <div className="hidden sm:ml-6 sm:block">
    //               <Dumbbell size={40} className="rotate-[55px] text-red-600"/>
    //               {/* <div className="flex space-x-4">
    //                 {navigation.map((item) => (
    //                   <Link
    //                     key={item.name}
    //                     href={item.href}
    //                     className={classNames(
    //                       item.current
    //                         ? "bg-gray-900 text-white"
    //                         : "text-gray-300 hover:bg-gray-700 hover:text-white",
    //                       "rounded-md px-3 py-2 text-sm font-medium"
    //                     )}
    //                     aria-current={item.current ? "page" : undefined}
    //                   >
    //                     {item.name}
    //                   </Link>
    //                 ))}
    //               </div> */}
    //             </div>
    //           </div>
    //           <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
    //             <DarkModeButton />
    //           </div>
    //         </div>
    //       </div>

    //       <DisclosurePanel className="sm:hidden">
    //         <div className="space-y-1 px-2 pb-3 pt-2">
    //           {navigation.map((item) => (
    //             <Link
    //               key={item.name}
    //               href={item.href}
    //               className={classNames(
    //                 item.current
    //                   ? "bg-gray-900 text-white"
    //                   : "text-gray-300 hover:bg-gray-700 hover:text-white",
    //                 "block rounded-md px-3 py-2 text-base font-medium"
    //               )}
    //               aria-current={item.current ? "page" : undefined}
    //             >
    //               {item.name}
    //             </Link>
    //           ))}
    //         </div>
    //       </DisclosurePanel>
    //     </>
    //   )}
    // </Disclosure>
  );
}

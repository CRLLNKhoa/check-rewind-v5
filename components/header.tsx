import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { LuArrowRight } from "react-icons/lu";
import CheckMenu from "./ui/checkMenu";

export default function Header() {
  return (
    <header className="flex flex-col z-50 sticky top-0 left-0 right-0 bottom-0 border-b bg-white shadow-lg">
      <div className="flex justify-between items-center px-4 lg:px-6 py-4">
        <Link href="/" className="flex items-center">
          <img src="/logo.svg" alt="logo_img" className="w-[42px] h-[42px]" />
          <h1 className="font-semibold text-xl translate-y-[2px]">CheckCost</h1>
        </Link>
        <div className="flex items-center">
          <CheckMenu />
          <Link href="/about" className=" hover:text-pink-600 px-4 py-1 rounded-md duration-500 font-semibold">
            About
          </Link>
          <Button className="ml-2" size={"sm"}>Login <LuArrowRight className="ml-2" /></Button>
        </div>
      </div>
    </header>
  );
}

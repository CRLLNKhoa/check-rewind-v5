import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { LuArrowRight } from "react-icons/lu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { GrMenu } from "react-icons/gr";

export default function Header() {
  return (
    <header className="flex flex-col z-50 sticky top-0 left-0 right-0 bottom-0 border-b bg-white shadow-lg">
      <div className="flex justify-between items-center px-4 lg:px-6 py-4">
        <Link href="/" className="flex items-center">
          <img
            src="/logo.png"
            alt="logo_img"
            className="w-[36px] h-[36px] mr-2"
          />
          <h1 className="font-semibold text-xl translate-y-[2px]">CheckCost</h1>
        </Link>
        <div className="flex items-center">
          <Sheet>
            <SheetTrigger asChild>
              <Button className="mr-4 lg:hidden" size={"icon"} variant={"outline"}><GrMenu /></Button>
            </SheetTrigger>
            <SheetContent>
              <div className="flex flex-col gap-4">
                <Link
                  href={"/single-rewind"}
                  className="mr-4  font-semibold text-lg cursor-pointer hover:text-sky-500 duration-500"
                >
                  Single Rewind
                </Link>
                <Link
                  href={"/double-rewind"}
                  className="mr-4 font-semibold text-lg cursor-pointer hover:text-sky-500 duration-500"
                >
                  Double Rewind
                </Link>
                <Link
                  href={"/triple-rewind"}
                  className="mr-4 font-semibold text-lg cursor-pointer hover:text-sky-500 duration-500"
                >
                  Triple Rewind
                </Link>
                <Link
                  href={"/time-rewind"}
                  className="mr-4 font-semibold text-lg cursor-pointer hover:text-sky-500 duration-500"
                >
                  Time Rewind
                </Link>
                <Link
                  href={"/teams"}
                  className="mr-4 font-semibold text-lg cursor-pointer hover:text-sky-500 duration-500"
                >
                  Build Team
                </Link>
                <Link
                  href={"/push"}
                  className="mr-4 font-semibold text-lg cursor-pointer hover:text-sky-500 duration-500"
                >
                  Push Day
                </Link>
                <Link
                  href={"/calculator"}
                  className="mr-4 font-semibold text-lg cursor-pointer hover:text-sky-500 duration-500"
                >
                  Calculator
                </Link>
                <Link
                  href={"/push"}
                  className="mr-4 font-semibold text-lg cursor-pointer hover:text-sky-500 duration-500"
                >
                  Other App
                </Link>
                <Link
                  href={"/about-me"}
                  className="mr-4 font-semibold text-lg cursor-pointer hover:text-sky-500 duration-500"
                >
                  About me
                </Link>
              </div>
            </SheetContent>
          </Sheet>

          <div className="hidden lg:flex items-center">
            <Link
              href={"/"}
              className="font-bold mr-4 cursor-pointer hover:text-sky-500 duration-500"
            >
              Home
            </Link>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <h1 className="font-bold mr-4 cursor-pointer hover:text-sky-500 duration-500">
                  Menu
                </h1>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem asChild>
                  <Link
                    href={"/single-rewind"}
                    className="mr-4 cursor-pointer hover:text-sky-500 duration-500"
                  >
                    Single Rewind
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link
                    href={"/double-rewind"}
                    className="mr-4 cursor-pointer hover:text-sky-500 duration-500"
                  >
                    Double Rewind
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link
                    href={"/triple-rewind"}
                    className="mr-4 cursor-pointer hover:text-sky-500 duration-500"
                  >
                    Triple Rewind
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link
                    href={"/time-rewind"}
                    className="mr-4 cursor-pointer hover:text-sky-500 duration-500"
                  >
                    Time Rewind
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link
                    href={"/teams"}
                    className="mr-4 cursor-pointer hover:text-sky-500 duration-500"
                  >
                    Build Team
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link
                    href={"/push"}
                    className="mr-4 cursor-pointer hover:text-sky-500 duration-500"
                  >
                    Push Day
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link
                    href={"/calculator"}
                    className="mr-4 cursor-pointer hover:text-sky-500 duration-500"
                  >
                    Calculator
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link
                    href={"/push"}
                    className="mr-4 cursor-pointer hover:text-sky-500 duration-500"
                  >
                    Other App
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Link
              href={"/about-me"}
              className="font-bold mr-4 cursor-pointer border-r border-black pr-4 hover:text-sky-500 duration-500"
            >
              About me
            </Link>
          </div>
          <SignedIn>
            {/* Mount the UserButton component */}
            <UserButton />
          </SignedIn>
          <SignedOut>
            {/* Signed out users get sign in button */}
            <SignInButton>
              <Button className="ml-2" size={"sm"}>
                Login <LuArrowRight className="ml-2" />
              </Button>
            </SignInButton>
          </SignedOut>
        </div>
      </div>
    </header>
  );
}

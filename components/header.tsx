import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { LuArrowRight } from "react-icons/lu";
import CheckMenu from "./ui/checkMenu";
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/nextjs";

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
          <CheckMenu />
          <Link
            href="/about"
            className="hidden lg:block hover:text-pink-600 px-4 py-1 rounded-md duration-500 font-semibold"
          >
            About
          </Link>
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

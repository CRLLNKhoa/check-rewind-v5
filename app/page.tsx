import MenuList from "@/components/menuList";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <div className="text-center mb-8">
        <h1 className="font-bold text-3xl">Welcome to Checkcost Website</h1>
        <p>
          CheckCost is a website that helps you check rewind and some other
          advanced functions to help you play the game easier.
        </p>
        <Button className="mt-4">Check now !</Button>
      </div>
      <MenuList />
    </main>
  );
}

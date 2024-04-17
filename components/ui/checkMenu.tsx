"use client";
import React, { useState } from "react";
import { GoTriangleDown } from "react-icons/go";
import { motion,AnimatePresence  } from "framer-motion";
import { cn } from "@/lib/utils";
import { HiMiniArrowSmallRight } from "react-icons/hi2";

export default function CheckMenu() {
  const [isShow, setIsShow] = useState(false);
  const variants = {
    hidden: { x: 100, opacity: 0 }, // Bắt đầu từ -100px so với vị trí ban đầu và độ trong suốt là 0
    visible: { x: 0, opacity: 1 }, // Kết thúc tại vị trí tự nhiên và độ trong suốt là 1
  };
  return (
    <div className="relative hidden lg:block">
      <div onClick={() => setIsShow(!isShow)} className={cn("hover:text-pink-600 z-50 flex items-center cursor-pointer px-4 py-1 rounded-md duration-500 font-semibold",isShow && "text-pink-500")}>
        Check <GoTriangleDown />
      </div>
      <AnimatePresence>
      {isShow && <motion.div
        initial="hidden" // Bắt đầu ở trạng thái 'hidden'
        animate="visible" // Chuyển sang trạng thái 'visible' khi component mount
        exit="hidden" // Chuyển về trạng thái 'hidden' khi component unmount
        variants={variants} // Sử dụng đối tượng variants đã khai báo
        transition={{ duration: 0.5 }} // Thời gian chuyển động là 0.5 giây
      >
        <div className="shadow-lg absolute rounded-lg p-4 bg-white w-[200px] right-0 top-[100%]
        flex flex-col">
           <h2 className="flex items-center gap-2 cursor-pointer hover:text-pink-500"><HiMiniArrowSmallRight />Single Rewind</h2> 
           <h2 className="flex items-center gap-2 cursor-pointer hover:text-pink-500"><HiMiniArrowSmallRight />Double Rewind</h2> 
           <h2 className="flex items-center gap-2 cursor-pointer hover:text-pink-500"><HiMiniArrowSmallRight />Triple Rewind</h2> 
        </div>
      </motion.div>}
      </AnimatePresence>
    </div>
  );
}

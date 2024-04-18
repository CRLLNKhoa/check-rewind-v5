"use client"
import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { Checkbox } from "./ui/checkbox";

export default function NoticPopup() {
    const [show,setShow] = useState(false)
    const [check,setCheck] = useState(false)

    const handleClose = () => {
        if(check){
            localStorage.setItem("notic-show", JSON.stringify(false))
            setShow(false)
        }else {
            setShow(false)
        }
    }

    useEffect(() => {
     const isShow =  localStorage.getItem("notic-show")
     if(isShow){
        setShow(JSON.parse(isShow))
     }else setShow(true)
    }, [])
    

    if(!show){
        return null
    }


  return (
    <div className="fixed top-0 right-0 left-0 bottom-0 z-50 bg-black/40 flex items-center justify-center">
      <div className="bg-white absolute w-full max-w-lg p-6 rounded-lg shadow-lg">
        <h1 className="font-bold text-xl">Thông báo</h1>
        <div className="my-6 flex flex-col flex-wrap">
            Nếu các bạn dùng địa chỉ "https://www.luongkhoa.shop" để truy cập chuyển xin hãy chuyển sang địa chỉ: 
            <a className="text-sky-500 underline" href="https://check-rewind.vercel.app">"https://check-rewind.vercel.app"</a>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Checkbox id="terms" checked={check} onCheckedChange={() => setCheck(!check)} />
            <label
              htmlFor="terms"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Ẩn thông báo
            </label>
          </div>
          <Button onClick={handleClose} size={"sm"}>Đóng</Button>
        </div>
      </div>
    </div>
  );
}

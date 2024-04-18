import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa6";
export default function Page() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-lg w-full bg-white shadow-lg p-4">
        <h1 className="font-bold">Xin Chào tôi là Carolo Lương Khoa</h1>
        <p>
          Tôi code website này trong 1 ngày và tôi rất lười nên code cho có nên
          là nó như ... Mọi người thông cảm!
        </p>
        <div className="flex flex-col my-4 items-center border-y py-4">
            <p className="font-bold">Ủng hộ tên địa chỉ truy cập ngắn:</p>
            <img src="/qr.png" alt="qr" className="h-[160px] w-[160px]" />
        </div>
        <p>Liện hệ tôi bằng các liên kết ở dưới</p>
        <div className="flex items-center mt-2 gap-4 flex-wrap">
          <a href="https://www.facebook.com/lnkhoa1205" target="_blank" className="bg-sky-600 px-4 py-1 rounded-lg text-white flex items-center gap-2 cursor-pointer">
            <FaFacebook /> Facebook
          </a>
          <a href="https://discord.gg/DFEMK42hx6" target="_blank" className="bg-indigo-700 px-4 py-1 rounded-lg text-white flex items-center gap-2 cursor-pointer">
            <FaDiscord /> Discord
          </a>
        </div>
      </div>
    </div>
  );
}

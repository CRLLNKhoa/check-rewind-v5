"use client";
import { getLogs } from "@/actions/log";
import CardPushDay from "@/components/cardPushDay";
import React, { useEffect, useState } from "react";
import { TInputData } from "../add/page";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

export default function Page({ params }: { params: { player: string } }) {
  const [list, setList] = useState<TInputData[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getLog = async () => {
      setIsLoading(true);
      const result = await getLogs(params.player);
      if (result?.status === 200) {
        setList(result?.data);
        setIsLoading(false);
      } else {
        alert("Có lỗi xảy ra rồi!");
        setIsLoading(false);
      }
    };
    getLog();
  }, []);

  return (
    <div className="bg-white my-6 min-h-screen shadow-lg rounded-lg flex flex-col p-4">
      <h1 className="font-bold text-lg border-b pb-1">
        😍 Nhật kí leo day của idol: {params.player}
      </h1>
      <div className="flex flex-col">
        {list
          .sort((a, b) => Number(a.day) - Number(b.day))
          .map((log) => (
            <CardPushDay data={log} />
          ))}
      </div>
      {(isLoading===false && list.length === 0) && (
        <div className="flex items-center justify-center flex-1">
          Người chơi không tồn tại!
        </div>
      )}
      {isLoading && (
        <div className="flex items-center justify-center flex-1">
          <AiOutlineLoading3Quarters className="w-8 h-8 text-sky-600 animate-spin mr-4" />Đang lấy thông tin!
        </div>
      )}
    </div>
  );
}

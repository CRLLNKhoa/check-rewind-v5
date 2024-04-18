"use client";
import CardPushDay from "@/components/cardPushDay";
import React, { useEffect, useState } from "react";
import { TInputData } from "./add/page";
import { getAllLog } from "@/actions/log";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Page() {
  const [isLoading, setIsLoading] = useState(true);
  const [listLog, setListLog] = useState<any[]>([]);
  const [limit,setLimit] = useState(10)
  const [countLog,setCountLog] = useState<any>("*")

  const handleGet = async () => {
    const result = await getAllLog(limit);
    if (result?.status === 200) {
      setListLog(result.data);
      setIsLoading(false);
      setCountLog(Number(result.count))
    } else {
      setListLog([]);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    handleGet();
  }, [limit]);
  return (
    <div className="flex flex-col my-6 p-4 rounded-lg shadow-lg min-h-screen bg-white">
      {isLoading && (
        <div className="fixed top-0 left-0 right-0 bottom-0 bg-black/40">
          <div className="absolute size-24 rounded-lg left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-white flex items-center justify-center">
            <AiOutlineLoading3Quarters className="w-8 h-8 animate-spin" />
          </div>
        </div>
      )}

      <div className="flex items-center justify-between">
        <h1 className="font-semibold text-xl border-b pb-2">📝 Nhật kí leo day ({countLog})</h1>
        <Link href={"/push/add"}>
            <Button variant={"outline"}>Thêm mới</Button>
        </Link>
      </div>

      {listLog?.sort((a,b) => a.created_at - b.created_at).map((item) => (
        <CardPushDay data={item} />
      ))}

      <div className="flex items-center justify-center mt-4">
        {limit < Number(countLog) && <div onClick={() => setLimit(limit+10)}
          className="p-2 w-[120px] flex items-center justify-center 
        border rounded-lg cursor-pointer hover:bg-black hover:text-white duration-500"
        >
          Xem thêm
        </div>}
      </div>
    </div>
  );
}

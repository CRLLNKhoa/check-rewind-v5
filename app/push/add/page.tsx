"use client";
import CardPushDay from "@/components/cardPushDay";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { toast } from "react-toastify";
import { addLog, getLog } from "@/actions/log";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { cn } from "@/lib/utils";

export type TInputData = {
  em: any;
  bd: any;
  up: any;
  in: any;
  ms: any;
  bs: any;
  crit: { lv: any; lvUnl: any };
  dame: { lv: any; lvUnl: any };
  hero: { lv: any; lvUnl: any };
  cc: any;
  heal: any;
  team: any;
  day: any;
  player?: string
};

export default function Page() {
  const [inputData, setInputData] = useState<TInputData>({
    em: "",
    bd: "",
    up: "",
    in: "",
    ms: "",
    bs: "",
    crit: { lv: "", lvUnl: "" },
    dame: { lv: "", lvUnl: "" },
    hero: { lv: "", lvUnl: "" },
    cc: "",
    heal: "",
    team: [],
    day: "",
  });

  const [isLoading,setIsLoading] = useState(true)

  const [listLog, setListLog] = useState<TInputData[]>([]);

  const notify = () =>
    toast.error("Max 6 heroes!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  const notifySuccess = () =>
    toast.success("Add Success!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });

    useEffect(() => {
      const handleGet =  async () => {
        const result  = await getLog()
        if(result?.status === 200){
            setListLog(result.data)
            setIsLoading(false)
        }else {
            setListLog([])
            setIsLoading(false)
        }
      }
      handleGet()
    }, [])
    


  const handleSelectHero = (id: number) => {
    if (inputData.team.includes(id)) {
      setInputData({
        ...inputData,
        team: inputData.team.filter((i: number) => i !== id),
      });
    } else {
      if (inputData.team.length < 6) {
        setInputData({ ...inputData, team: [...inputData.team, id] });
      } else {
        notify();
      }
    }
  };

  const handleAdd = async () => {
    if (
      inputData.day !== "" &&
      inputData.team.length > 0 &&
      inputData.em !== "" &&
      inputData.bd !== "" &&
      inputData.up !== "" &&
      inputData.in !== "" &&
      inputData.ms !== "" &&
      inputData.bs !== "" &&
      inputData.crit.lv !== "" &&
      inputData.crit.lvUnl !== "" &&
      inputData.dame.lv !== "" &&
      inputData.dame.lvUnl !== "" &&
      inputData.hero.lv !== "" &&
      inputData.hero.lvUnl !== "" &&
      inputData.cc !== "" &&
      inputData.heal !== ""
    ){
        setIsLoading(true)
        const result = await addLog(inputData)
        if(result?.status === 200){
            setListLog([...listLog, result.data[0]])
            setInputData({...inputData, day: ""})
            setIsLoading(false)
            notifySuccess()
        }
    }
    else{
        toast.error("Nhập chưa đủ thông tin!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
    }
      
  };

  return (
    <div className="flex flex-col my-6 bg-white min-h-screen p-6 shadow-lg rounded-lg">
       {isLoading &&  <div className="fixed top-0 left-0 right-0 bottom-0 bg-black/40">
            <div className="absolute size-24 rounded-lg left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-white flex items-center justify-center">
            <AiOutlineLoading3Quarters className="w-8 h-8 animate-spin" />
            </div>
        </div>}
      <h1 className="font-bold text-xl border-b pb-1 mb-4">Add new Log</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="flex items-center">
          <p className="w-8 h-8 mr-4">Day: </p>
          <Input
            type="text"
            placeholder="Level..."
            value={inputData.day}
            onChange={(e) =>
              setInputData({ ...inputData, day: e.target.value })
            }
          />
        </div>
        <div className="flex items-center justify-between col-span-2">
          <p className="w-8 h-8 mr-4">Team: </p>
          <div className="border flex items-center p-2 rounded-lg gap-2 mr-auto ml-4">
            {inputData.team?.map((hero: any) => (
              <img
                className="w-8 h-8 rounded-full"
                key={hero}
                src={`/hero/${hero}.png`}
                alt="hero"
              />
            ))}
          </div>
          <Dialog>
            <DialogTrigger asChild>
              <Button size={"icon"} className="w-8 h-8">
                +
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Select heroes?</DialogTitle>
              </DialogHeader>
              <div className="flex items-center justify-around flex-wrap gap-2">
                {Array.from({ length: 45 }, (_, index) => index).map((i) => (
                  <img
                    onClick={() => handleSelectHero(i + 1)}
                    key={i}
                    src={`/hero/${i + 1}.png`}
                    alt="heroes"
                    className={cn("border-4  w-12 h-12 rounded-full cursor-pointer", inputData.team.includes(i+1) && "border-red-500")}
                  />
                ))}
              </div>
            </DialogContent>
          </Dialog>
        </div>
        <div className="flex items-center">
          <img src="/skill/empng.png" alt="skill" className="w-8 h-8 mr-4" />
          <Input
            type="text"
            placeholder="Level..."
            value={inputData.em}
            onChange={(e) => setInputData({ ...inputData, em: e.target.value })}
          />
        </div>
        <div className="flex items-center">
          <img src="/skill/bdpng.png" alt="skill" className="w-8 h-8 mr-4" />
          <Input
            type="text"
            placeholder="Level..."
            value={inputData.bd}
            onChange={(e) => setInputData({ ...inputData, bd: e.target.value })}
          />
        </div>
        <div className="flex items-center">
          <img src="/skill/uppng.png" alt="skill" className="w-8 h-8 mr-4" />
          <Input
            type="text"
            placeholder="Level..."
            value={inputData.up}
            onChange={(e) => setInputData({ ...inputData, up: e.target.value })}
          />
        </div>
        <div className="flex items-center">
          <img src="/skill/inspng.png" alt="skill" className="w-8 h-8 mr-4" />
          <Input
            type="text"
            placeholder="Level..."
            value={inputData.in}
            onChange={(e) => setInputData({ ...inputData, in: e.target.value })}
          />
        </div>
        <div className="flex items-center">
          <img src="/skill/mspng.png" alt="skill" className="w-8 h-8 mr-4" />
          <Input
            type="text"
            placeholder="Level..."
            value={inputData.ms}
            onChange={(e) => setInputData({ ...inputData, ms: e.target.value })}
          />
        </div>
        <div className="flex items-center">
          <img src="/skill/bspng.png" alt="skill" className="w-8 h-8 mr-4" />
          <Input
            type="text"
            placeholder="Level..."
            value={inputData.bs}
            onChange={(e) => setInputData({ ...inputData, bs: e.target.value })}
          />
        </div>
        <div className="flex items-center gap-2">
          <img src="/runes/crit.webp" alt="skill" className="w-8 h-8 mr-4" />
          <Input
            type="text"
            placeholder="Level..."
            value={inputData.crit.lv}
            onChange={(e) =>
              setInputData({
                ...inputData,
                crit: { ...inputData.crit, lv: e.target.value },
              })
            }
          />
          <Input
            type="text"
            placeholder="Level Unless..."
            value={inputData.crit.lvUnl}
            onChange={(e) =>
              setInputData({
                ...inputData,
                crit: { ...inputData.crit, lvUnl: e.target.value },
              })
            }
          />
        </div>
        <div className="flex items-center gap-2">
          <img src="/runes/dame.webp" alt="skill" className="w-8 h-8 mr-4" />
          <Input
            type="text"
            placeholder="Level..."
            value={inputData.dame.lv}
            onChange={(e) =>
              setInputData({
                ...inputData,
                dame: { ...inputData.dame, lv: e.target.value },
              })
            }
          />
          <Input
            type="text"
            placeholder="Level Unless..."
            value={inputData.dame.lvUnl}
            onChange={(e) =>
              setInputData({
                ...inputData,
                dame: { ...inputData.dame, lvUnl: e.target.value },
              })
            }
          />
        </div>
        <div className="flex items-center gap-2">
          <img src="/runes/hero.webp" alt="skill" className="w-8 h-8 mr-4" />
          <Input
            type="text"
            placeholder="Level..."
            value={inputData.hero.lv}
            onChange={(e) =>
              setInputData({
                ...inputData,
                hero: { ...inputData.hero, lv: e.target.value },
              })
            }
          />
          <Input
            type="text"
            placeholder="Level Unless..."
            value={inputData.hero.lvUnl}
            onChange={(e) =>
              setInputData({
                ...inputData,
                hero: { ...inputData.hero, lvUnl: e.target.value },
              })
            }
          />
        </div>
        <div className="flex items-center gap-2">
          <img src="/runes/cc.webp" alt="skill" className="w-8 h-8 mr-4" />
          <Input
            type="text"
            placeholder="Level..."
            value={inputData.cc}
            onChange={(e) => setInputData({ ...inputData, cc: e.target.value })}
          />
        </div>
        <div className="flex items-center gap-2">
          <img src="/runes/heal.webp" alt="skill" className="w-8 h-8 mr-4" />
          <Input
            type="text"
            placeholder="Level..."
            value={inputData.heal}
            onChange={(e) =>
              setInputData({ ...inputData, heal: e.target.value })
            }
          />
        </div>
        <Button onClick={handleAdd}>Add Log</Button>
      </div>
      <div className="flex flex-col border-t mt-4">
        <h1 className="font-bold text-xl mt-4 border-b pb-1">Your log list</h1>
        {listLog?.map((item) => (
          <CardPushDay data={item} />
        ))}
      </div>
    </div>
  );
}

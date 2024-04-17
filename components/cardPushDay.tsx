import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function CardPushDay({ data }: { data: any }) {
  const {
    em,
    bd,
    up,
    in: ins,
    ms,
    bs,
    crit,
    dame,
    hero,
    cc,
    heal,
    team,
    day,
    hl,player
  } = data;
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger>
          <div className="flex items-center w-full px-2 rounded-lg py-2 justify-between">
            <h2>Day: {day}</h2>
            {player && <h2>Player: {player}</h2>}
            <div className="hidden lg:flex  items-center">
              <h2 className="font-bold mr-2">Team:</h2>
              <div className="flex items-center gap-1 ">
                {team?.map((item:any) => (
                    <img
                    src={`/hero/${item}.png`}
                    alt="hero_img"
                    className="w-8 h-8 rounded-full"
                  />
                ))}
              </div>
            </div>
          </div>
        </AccordionTrigger>
        <AccordionContent>
          <div className="flex flex-col">
            <div className="flex items-center flex-wrap gap-2">
              <div className="flex items-center border p-2 rounded-lg">
                <img src="/skill/empng.png" alt="icon" className="w-8 h-8" />
                <p className="ml-2">: {em}</p>
              </div>
              <div className="flex items-center border p-2 rounded-lg">
                <img src="/skill/bdpng.png" alt="icon" className="w-8 h-8" />
                <p className="ml-2">: {bd}</p>
              </div>
              <div className="flex items-center border p-2 rounded-lg">
                <img src="/skill/uppng.png" alt="icon" className="w-8 h-8" />
                <p className="ml-2">: {up}</p>
              </div>
              <div className="flex items-center border p-2 rounded-lg">
                <img src="/skill/inspng.png" alt="icon" className="w-8 h-8" />
                <p className="ml-2">: {ins}</p>
              </div>
              <div className="flex items-center border p-2 rounded-lg">
                <img src="/skill/hlpng.png" alt="icon" className="w-8 h-8" />
                <p className="ml-2">: {hl}</p>
              </div>
              <div className="flex items-center border p-2 rounded-lg">
                <img src="/skill/mspng.png" alt="icon" className="w-8 h-8" />
                <p className="ml-2">: {ms}</p>
              </div>
              <div className="flex items-center border p-2 rounded-lg">
                <img src="/skill/bspng.png" alt="icon" className="w-8 h-8" />
                <p className="ml-2">: {bs}</p>
              </div>
            </div>
            <div className="flex items-center flex-wrap mb-4 gap-2">
              <div className="flex items-center  border p-2 rounded-lg mt-2">
                <img src="/runes/crit.webp" alt="icon" className="w-8 h-8" />
                <div className="ml-2 flex items-center">
                  : {crit?.lv} <p className="ml-2">Unl ({crit?.lvUnl})</p>
                </div>
              </div>
              <div className="flex items-center border p-2 rounded-lg mt-2">
                <img src="/runes/dame.webp" alt="icon" className="w-8 h-8" />
                <div className="ml-2 flex items-center">
                  : {dame?.lv} <p className="ml-2">Unl ({dame?.lvUnl})</p>
                </div>
              </div>
              <div className="flex items-center border p-2 rounded-lg mt-2">
                <img src="/runes/hero.webp" alt="icon" className="w-8 h-8" />
                <div className="ml-2 flex items-center">
                  : {hero?.lv} <p className="ml-2">Unl ({hero?.lvUnl})</p>
                </div>
              </div>
              <div className="flex items-center border p-2 rounded-lg mt-2">
                <img src="/runes/cc.webp" alt="icon" className="w-8 h-8" />
                <div className="ml-2 flex items-center">: {cc}</div>
              </div>
              <div className="flex items-center border p-2 rounded-lg mt-2">
                <img src="/runes/heal.webp" alt="icon" className="w-8 h-8" />
                <div className="ml-2 flex items-center">: {heal}</div>
              </div>
            </div>
            <div className="flex lg:hidden  items-center">
              <h2 className="font-bold mr-2">Team:</h2>
              <div className="flex items-center gap-1 ">
                {team?.map((item:any) => (
                    <img
                    src={`/hero/${item}.png`}
                    alt="hero_img"
                    className="w-8 h-8 rounded-full"
                  />
                ))}
              </div>
            </div>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

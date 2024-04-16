import Link from "next/link";
import React from "react";

export default function MenuList() {
  return (
        <div className="mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <Item title="Single Rewind" icon="/single.svg" link="/single-rewind" />
          <Item title="Double Rewind" icon="/double.svg" link="/double-rewind" />
          <Item title="Triple Rewind" icon="/tripple.svg" link="/triple-rewind" />
          <Item title="Time Rewind" icon="/time.svg" link="/time-rewind" />
          <Item title="Build Team" icon="/team.svg" link="/teams" />
          <Item title="Push Day" icon="/push.svg" link="/push" />
          <Item title="Calculator" icon="/calculator.svg" link="/calculator" />
          <Item title="Other App" icon="/other.svg" link="/other-app" />
        </div>
  );
}

type IProps = {
    title: string,
    icon: string,
    link: string
}

function Item(_props: IProps) {
  return (
    <Link href={_props.link} className="flex flex-col shadow-lg items-center justify-center cursor-pointer bg-white size-[142px] relative rounded-lg group">
      <div className="bg-white z-10 w-full h-full flex flex-col items-center justify-center rounded-lg">
        <img src={_props.icon} alt="icon" className="w-12 h-12" />
        <h1 className="mt-2">{_props.title}</h1>
      </div>
      <div className="absolute bg-gradient-to-br from-red-600 to-orange-700 rounded-lg top-0 right-0 left-0 bottom-0 opacity-1 group-hover:scale-110 duration-500"></div>
    </Link>
  );
}

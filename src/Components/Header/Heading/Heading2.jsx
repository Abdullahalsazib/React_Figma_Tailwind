import React from "react";
import { HiAcademicCap, HiBookOpen } from "react-icons/hi";
import { Button } from "./Footer";

export default function Heading2() {
  return (
    <>
      <div className=" lg:h-[742px] flex items-center lg:px-20 justify-center bg-[url('./src/Images/svg2.svg')] bg-[right_100px] bg-no-repeat">
        <div className="  w-[85%] space-y-6">
          <h1 className=" font-semibold text-3xl lg:text-[50px]">
            Light, Fast & Powerfull
          </h1>
          <p className="text-sm text-slate-500 lg:w-[50%]">
            Lorem Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Officiis earum voluptatibus quod natus esse cumque saepe dolorum
            consequuntur eaque perspiciatis? ipsum dolor sit amet consectetur
            adipisicing elit. Officiis consequatur non eligendi quo minus?
            Repudiandae in officiis quasi vitae numquam!
          </p>
          <p className="text-sm text-slate-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime,
            odit.
          </p>
          <div className=" md:flex items-center md:space-y-0 md:space-x-10 space-y-10">
            <TitleCard
              icon={
                <HiBookOpen className=" text-[80px] hover:text-sky-600 duration-300" />
              }
              title="title goes here"
              titleP=" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat
              animi at fugit expedita aliquid velit dolorem, debitis alias sunt
              minima!"
            />
            <TitleCard
              icon={
                <HiAcademicCap className=" text-[80px] hover:text-sky-600 duration-300" />
              }
              title="title goes here"
              titleP=" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat
              animi at fugit expedita aliquid velit dolorem, debitis alias sunt
              minima!"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export function TitleCard(titleCard) {
  return (
    <>
      <div className=" p-5 bg-[#E7ECFF] lg:space-y-2 w-full">
        <div>{titleCard.icon}</div>
        <h1 className="font-semibold text-[30px] capitalize">
          {titleCard.title}
        </h1>
        <p className="text-sm text-slate-500">{titleCard.titleP}</p>
        <Button content="See More" />
      </div>
    </>
  );
}

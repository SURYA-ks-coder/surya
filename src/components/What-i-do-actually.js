import React from "react";
import { FaReact } from "react-icons/fa6";
import { IoLogoNodejs } from "react-icons/io5";
import { MdOutlineWeb } from "react-icons/md";
import { BiCodeBlock, BiLogoFirebase } from "react-icons/bi";
import { AiOutlineDatabase } from "react-icons/ai";

import {
  SiMongodb,
  SiNextdotjs,
  SiRedis,
  SiSocketdotio,
  SiTailwindcss,
  SiVercel,
  SiVisualstudiocode,
} from "react-icons/si";
export default function WhatIDoActually() {
  const Lists = [
    {
      logo: <MdOutlineWeb />,
      title: "Web Developement",
      discription:
        "I utilize Next.js to develop websites and web applications, which can then be seamlessly deployed on Vercel.",
      icons: [
        <SiNextdotjs />,
        <FaReact />,
        <SiTailwindcss />,
        <SiVercel />,
        <SiVisualstudiocode />,
      ],
    },
    {
      logo: <BiCodeBlock />,
      title: "Backend Developement",
      discription:
        "I code Node.js and sockets to seamlessly integrate front-end elements with databases.",
      icons: [
        <IoLogoNodejs />,
        <SiSocketdotio />,
        <SiRedis />,
        // <SiVercel />,
        <SiVisualstudiocode />,
      ],
    },
    {
      logo: <AiOutlineDatabase />,
      title: "Database Management",
      discription:
        "I establish and oversee databases, handling queries and related tasks.",
      icons: [<SiMongodb />, <BiLogoFirebase />],
    },
  ];
  return (
    <div className=" text-center md:px-20  z-0 lg:pb-40 lg:pt-40 ">
      <h1 className="text-3xl font-bold py-20 text-white">
        What I Do Actually
      </h1>
      <div className="grid grid-cols-3 gap-3 mx-auto ">
        {Lists.map((each, i) => (
          <div
            key={i}
            className="md:mx-auto shadow-2xl  p-5 px-6 rounded-xl bg-zinc-800 md:w-96 text-white "
          >
            <div className="text-start pb-5">
              <span className="py-4 text-8xl text-blue-500">{each.logo}</span>
              <h2 className="pt-5 pb-2 text-2xl uppercase">{each.title}</h2>
              <p className=" h-16  text-sm opacity-75">{each.discription}</p>
            </div>
            <hr />
            <div className="flex items-end list-none justify-start pt-5 pb-5 relative left-0">
              {each.icons.map((icon, i) => (
                <span key={i} className="pr-5 text-3xl flex items-end">
                  {icon}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

import Image from "next/image";
import React from "react";
import image1 from "../assets/Screenshot 2023-08-14 at 10.04.18 AM.png";
import image2 from "../assets/Screenshot 2023-08-14 at 10.06.29 AM.png";
import {
  SiNextdotjs,
  SiRedis,
  SiSocketdotio,
  SiTailwindcss,
  SiVercel,
  SiVisualstudiocode,
} from "react-icons/si";
import { FaReact } from "react-icons/fa6";
import { IoLogoNodejs } from "react-icons/io5";

export default function Showcase() {
  const Lists = [
    {
      img: image1,
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
      img: image1,
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
      img: image1,
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
  ];
  return (
    <div className=" container-sm text-center px-20 mt-10">
      <h1 className="text-3xl font-bold">Showcase</h1>
      <div className=" lg:flex justify-between mt-28 ">
        {Lists.map((each, i) => (
          <div
            key={i}
            className=" shadow-2xl mx-2   rounded-xl bg-zinc-800 w-96 xl:my-0 my-1 "
          >
            <div className=" relative">
              <Image
                src={each.img}
                alt=""
                height={250}
                className="rounded-t-xl"
              />
            </div>
            <div className="p-5 px-6">
              <div className="text-start">
                {/* <span className="py-4 text-5xl text-blue-500">{each.logo}</span> */}
                <h2 className="py-5 text-2xl uppercase">{each.title}</h2>
                <p className=" h-20 text-sm opacity-75">{each.discription}</p>
              </div>
              <div className="flex items-end list-none justify-start pt-10 pb-5 relative left-0">
                {each.icons.map((icon, i) => (
                  <span key={i} className="pr-5 text-3xl flex items-end">
                    {icon}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

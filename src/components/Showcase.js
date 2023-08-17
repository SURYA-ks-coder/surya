import Image from "next/image";
import React from "react";
import webSite from "../assets/webSite.png";
import webBooking from "../assets/webBooking.png";
import tripCharts from "../assets/graph.png";
import journeyCatalog from "../assets/list.png";
import ZervxLogo from "../assets/zervx.png";
import {
  SiGoogleanalytics,
  SiMoleculer,
  SiMongodb,
  SiNextdotjs,
  SiRedis,
  SiSocketdotio,
  SiTailwindcss,
  SiVercel,
  SiVisualstudiocode,
} from "react-icons/si";
import { FaDigitalOcean, FaReact } from "react-icons/fa6";
import { TbBrandBootstrap, TbBrandRedux } from "react-icons/tb";
import { IoLogoFirebase, IoLogoGoogle, IoLogoNodejs } from "react-icons/io5";

export default function Showcase() {
  const Lists = [
    {
      img: webSite,
      title: "zervx.com Website",
      discription:
        "Created a Website for Zervx App dev Company including pricing, contact us, features, and everything.",
      icons: [
        <SiNextdotjs />,
        <FaReact />,
        <TbBrandBootstrap />,
        <SiTailwindcss />,
        <SiGoogleanalytics />,

        <TbBrandRedux />,
        <FaDigitalOcean />,
      ],
      logo: ZervxLogo,
    },
    {
      img: webBooking,
      title: "User WebApp",
      discription:
        "A Created ride-hailing user web app with the user's Quick Booking, Real-Time Tracking, Transparent Pricing, Scheduled Rides, Trip History, Notifications.",
      icons: [
        <FaReact />,
        <TbBrandBootstrap />,
        <SiTailwindcss />,
        <IoLogoFirebase />,
        <SiSocketdotio />,
        <FaDigitalOcean />,
      ],
      logo: ZervxLogo,
    },
    {
      img: tripCharts,
      title: "Trip Charts",
      discription:
        "Written backend code for the trip graph on location-based Admin rides, user rides, driver rides, corporate rides, income, and expenses.",
      icons: [
        <FaReact />,
        <SiTailwindcss />,
        <SiMoleculer />,
        <IoLogoGoogle />,
        <SiMongodb />,
        <FaDigitalOcean />,
      ],
      logo: ZervxLogo,
    },
    {
      img: journeyCatalog,
      title: "Journey Catalog",
      discription:
        "Written backend code for the journey catalog on location and date-based Admin rides, user rides, driver rides, corporate user rides, and corporate officer rides.",
      icons: [
        <FaReact />,
        <SiTailwindcss />,
        <SiMoleculer />,
        <SiMongodb />,
        <FaDigitalOcean />,
      ],
      logo: ZervxLogo,
    },
  ];
  return (
    <div className=" container-sm text-center md:px-20 mt-10">
      <h1 className="text-3xl font-bold">Showcase</h1>
      <div className=" xl:flex flex-wrap justify-between mt-28 ">
        {Lists.map((each, i) => (
          <div
            key={i}
            className="md:mx-auto shadow-2xl mx-2   rounded-xl bg-zinc-800 md:w-96 my-5 relative"
          >
            <div className="absolute top-0 right-0 z-50 ">
              <Image
                src={each.logo}
                alt=""
                width={50}
                className="bg-gray-600 rounded-tr-xl rounded-bl-xl text-white"
              />
            </div>
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

"use client";
import Image from "next/image";
import berarkrays from "../assets/logo-modified.png";
import srishit from "../assets/logo_Srishit-modified.png";
import WhatIDoActually from "@/components/What-i-do-actually";
import Showcase from "@/components/Showcase";
import Talk from "@/components/Talk";
import img from "../assets/surya.jpg";
import { MdOutlineWork } from "react-icons/md";
import NavBar from "@/components/header/NavBar";
import { ImLinkedin } from "react-icons/im";
import { FaSquareInstagram } from "react-icons/fa6";
import { BsGithub } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io5";
export default function Home() {
  return (
    <section className="">
      <NavBar />

      <div className="grid grid-cols-4 md:gap-4 gap-1 items-center justify-center md:hidden bg-white rounded-full fixed bottom-2 left-0 right-0 z-50 p-2 mx-10">
        <div className="text-xl text-black  text-center flex justify-center ">
          <ImLinkedin
            className=" hover:text-[#035efcc2] cursor-pointer"
            onClick={() => {
              window.open("https://www.linkedin.com/in/suryaksdeveloper");
            }}
          />
        </div>
        <div className="  text-2xl text-black flex justify-center">
          <FaSquareInstagram
            className=" hover:text-[#035efcc2] cursor-pointer"
            onClick={() => {
              window.open("https://instagram.com/s_u_r_y_a_403");
            }}
          />
        </div>
        <div className="  text-2xl text-black flex justify-center">
          <BsGithub
            onClick={() => {
              window.open("https://github.com/SURYA-ks-coder");
            }}
          />
        </div>
        <div className="  text-2xl text-black flex justify-center">
          <IoLogoWhatsapp
            className=" hover:text-[#035efcc2] cursor-pointer "
            onClick={() => {
              window.open("https://wa.me/+919600449653");
            }}
          />
        </div>
      </div>
      <div className="h-full w-full items-center xl:px-0 px-10 ">
        <div className="md:flex justify-center items-center md:pt-32 pt-10">
          <div className="text-start md:order-1 order-2">
            <h1 className="md:text-6xl text-4xl text-blue-500 font-bold uppercase">
              Surya Developer
            </h1>
            <p className=" md:text-sm text-xs py-4 uppercase ">
              Building quality
              <span className="md:text-2xl text-lg px-2  font-bold uppercase tracking-tighter">
                websites
              </span>
              and
              <span className="md:text-2xl text-lg px-2 font-bold uppercase tracking-tighter">
                web application
              </span>
            </p>
            <div className="flex items-center md:text-xl text-sm">
              <MdOutlineWork className="mr-2 text-xl text-blue-700" />
              Junior Software Engineer at BerarkRays.
            </div>
          </div>
          <div className="flex justify-center items-center border px-[26px] md:pt-0 pt-10 md:order-2 order-1">
            <Image
              src={img}
              alt="profile"
              width={280}
              className=" rounded-full"
            />
          </div>
          <div className=" md:hidden flex justify-center py-5">
            <button
              className="p-1 bg-white text-black px-5 font-bold rounded-xl border-none"
              onClick={() => {
                window.open("https://wa.me/+919600449653");
              }}
            >
              Chat
            </button>
          </div>
        </div>
        {/* <div className="flex justify-center  pt-20 -z-0">
          <div className=" flex px-4  ">
            <Image
              // src={company.img.src}
              src={berarkrays}
              width={190}
              // height={75}
              alt="clients logo"
              className={` img-fluid ${" customer-logo text-light"} p-1 p-md-2 p-lg-3 m-auto  `} //customer-logo
              priority={true}
              // loading="lazy"
            />
          </div>
          <div className=" flex items-end px-4 mt-4">
            <Image
              // src={company.img.src}
              src={srishit}
              width={220}
              // height={75}
              alt="clients logo"
              className={`img-fluid ${" customer-logo text-light"} p-1 p-md-2 p-lg-3 m-auto items-end `} //customer-logo
              priority={true}
              // loading="lazy"
            />
          </div>
        </div> */}
      </div>
      <div className=" relative">
        <WhatIDoActually />
      </div>
      {/* <section>
        <Showcase />
      </section> */}
      <section>
        <Talk />
      </section>
    </section>
  );
}

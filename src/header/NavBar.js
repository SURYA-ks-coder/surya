import React from "react";
import { ImLinkedin } from "react-icons/im";
import { FaSquareInstagram } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io5";
import { BsGithub } from "react-icons/bs";
import img from "../assets/surya.jpg";
import Image from "next/image";
const NavBar = () => {
  return (
    <div className=" sticky top-0 bg-black z-50">
      <div className=" flex justify-evenly py-5 ">
        <div className=" flex">
          <Image
            src={img}
            alt=""
            height={20}
            width={50}
            className="rounded-full "
          />
          <div className=" px-3">
            <h1 className="mb-0 text-xl uppercase tracking-tighter font-bold">
              Surya Coder
            </h1>
            <p className="mt-0 text-sm uppercase tracking-tighter font-bold">
              1+ years in Tech
            </p>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-4 items-center ">
          <div className=" text-2xl text-center ">
            <ImLinkedin className="" />
          </div>
          <div className=" text-3xl text-center">
            <FaSquareInstagram />
          </div>
          <div className=" text-3xl text-center">
            <BsGithub />
          </div>
          <div className=" text-3xl text-center">
            <IoLogoWhatsapp />
          </div>
        </div>
        <div className="flex items-center justify-center">
          <button
            className=" px-5 py-1 text-sm font-bold rounded-xl border-none bg-white text-black"
            role="buttton"
          >
            Let's Talk
          </button>
        </div>
      </div>
    </div>
  );
};
export default NavBar;

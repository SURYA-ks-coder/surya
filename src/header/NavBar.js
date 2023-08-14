import React from "react";
import { ImLinkedin } from "react-icons/im";
import { FaSquareInstagram } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io5";
import { BsGithub } from "react-icons/bs";
const NavBar = () => {
  return (
    <div className=" sticky top-0 bg-black z-50">
      <div className=" flex justify-evenly ">
        <div className="">
          <h1 className="mb-0">Surya Coder</h1>
          <p className="mt-0">1+ years of Tech</p>
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
            className=" px-5 py-1 text-xl rounded-xl border-none"
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

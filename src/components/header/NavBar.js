"use client";
import React from "react";
import { ImLinkedin } from "react-icons/im";
import { FaSquareInstagram } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io5";
import { BsGithub } from "react-icons/bs";
import img from "../../assets/surya.jpg";
import Image from "next/image";
import { scroller } from "react-scroll";
// import resume from "../../assets/pdf/SURYA K S.pdf";
// import resume from "../../assets/pdfs/SURYA_K_S.pdf";

const NavBar = () => {
  const handleScrollToComponent = (hrefdata) => {
    scroller.scrollTo(hrefdata, {
      duration: 100,
      delay: 4,
      smooth: "easeInOutQuart",
    });
  };

  return (
    <div className=" sticky top-0 bg-black z-50">
      <div className=" flex md:justify-evenly justify-start py-5 md:px-0 px-10">
        <div className=" flex  ">
          <Image
            src={img}
            alt=""
            height={20}
            width={50}
            className="rounded-full md:w-50 w-10 h-10"
          />
          <div className=" py-auto px-3 items-center">
            <h1 className="mb-0 md:text-xl text-[15px] uppercase tracking-tighter font-bold">
              Surya Developer
            </h1>
            <p className="mt-0 md:text-sm text-[10px] uppercase tracking-tighter font-bold">
              3+ years in Tech
            </p>
          </div>
        </div>
        <div className="md:grid grid-cols-4 md:gap-4 gap-1 items-center hidden ">
          <div className=" md:text-2xl text-sm text-center ">
            <ImLinkedin
              className=" hover:text-[#dee0e2c2] cursor-pointer"
              onClick={() => {
                window.open("https://www.linkedin.com/in/suryaksdeveloper");
              }}
            />
          </div>
          <div className="  md:text-3xl text-md text-center">
            <FaSquareInstagram
              className=" hover:text-[#dee0e2c2] cursor-pointer"
              onClick={() => {
                window.open("https://instagram.com/s_u_r_y_a_403");
              }}
            />
          </div>
          <div className="  md:text-3xl text-md text-center">
            <BsGithub
              className=" hover:text-[#dee0e2c2] cursor-pointer"
              onClick={() => {
                window.open("https://github.com/SURYA-ks-coder");
              }}
            />
          </div>
          <div className="  md:text-3xl text-md text-center">
            <IoLogoWhatsapp
              className=" hover:text-[#dee0e2c2] cursor-pointer "
              onClick={() => {
                window.open("https://wa.me/+919600449653");
              }}
            />
          </div>
        </div>
        <div className="md:flex items-center justify-center hidden">
          <a
            className=" md:px-5 px-3 py-1 text-sm font-bold rounded-xl border-none bg-white text-black"
            role="buttton"
            // onClick={() => {
            //   handleScrollToComponent("#LetTalk");
            // }}
            // href={resume}
            href={"#LetTalk"}
            // download={"SURYA K S"}
          >
            Let's Talk
          </a>
        </div>
      </div>
    </div>
  );
};
export default NavBar;

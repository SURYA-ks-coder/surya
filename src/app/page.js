import Image from "next/image";
import berarkrays from "../assets/logo-modified.png";
import srishit from "../assets/logo_Srishit-modified.png";
import NavBar from "@/header/NavBar";
import WhatIDoActually from "@/components/What-i-do-actually";
import Showcase from "@/components/Showcase";
import Talk from "@/components/Talk";
import img from "../assets/surya.jpg";
import { MdOutlineWork } from "react-icons/md";
export default function Home() {
  return (
    <section className="">
      <NavBar />
      <div className="h-screen w-full items-center">
        <div className="flex justify-center items-center pt-32">
          <div className="w-">
            <h1 className="text-6xl text-blue-500 font-bold uppercase">
              Surya_K_S Coder
            </h1>
            <p className=" text-sm py-4 uppercase ">
              Building quality
              <span className="text-2xl px-2  font-bold uppercase tracking-tighter">
                websites
              </span>
              and
              <span className="text-2xl px-2 font-bold uppercase tracking-tighter">
                web application
              </span>
            </p>
            <div className="flex items-center">
              <MdOutlineWork className="mr-2 text-xl text-blue-700" />
              Software Engineer at berarkrays.
            </div>
          </div>
          <div className="flex items-center border px-[26px]">
            <Image
              src={img}
              alt="profile"
              width={280}
              className=" rounded-full"
            />
          </div>
        </div>
        <div className="flex justify-center  pt-20 -z-0">
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
        </div>
      </div>
      <div className=" relative">
        <WhatIDoActually />
      </div>
      <section>
        <Showcase />
      </section>
      <section>
        <Talk />
      </section>
    </section>
  );
}

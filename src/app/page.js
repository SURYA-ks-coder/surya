import Image from "next/image";
import img from "../assets/IMG_20220720_114119.jpg";
import berarkrays from "../assets/logo-modified.png";
import srishit from "../assets/logo_Srishit-modified.png";
import NavBar from "@/header/NavBar";
import WhatIDoActually from "@/components/What-i-do-actually";
import Showcase from "@/components/Showcase";
import Talk from "@/components/Talk";
export default function Home() {
  return (
    <section className="">
      <NavBar />
      <div className="h-screen w-full items-center">
        <div className="flex justify-center items-center pt-32">
          <div className="w-96">
            <h1 className=" text-4xl"> Surya K S</h1>
            <p className=" ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
              incidunt qui eos dignissimos magni cupiditate mollitia neque,
              assumenda aliquid facere alias ipsa, laudantium eum, fugit amet
              voluptas veritatis esse eligendi?
            </p>
          </div>
          <div className="flex items-center border">
            <Image src="" alt="profile" width={200} className=" rounded-full" />
          </div>
        </div>
        <div className="flex justify-center  pt-20 -z-0">
          <div className=" flex px-4 ">
            <Image
              // src={company.img.src}
              src={berarkrays}
              width={150}
              // height={75}
              alt="clients logo"
              className={`img-fluid ${" customer-logo text-light"} p-1 p-md-2 p-lg-3 m-auto  `} //customer-logo
              priority={true}
              // loading="lazy"
            />
          </div>
          <div className=" flex items-end px-4">
            <Image
              // src={company.img.src}
              src={srishit}
              width={150}
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

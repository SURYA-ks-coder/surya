import Image from "next/image";
import img from "../assets/IMG_20220720_114119.jpg";
export default function Home() {
  return (
    <div className="flex items-center px-20 h-screen w-full">
      <div>
        <h1 className=""> Surya K S</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint incidunt
          qui eos dignissimos magni cupiditate mollitia neque, assumenda aliquid
          facere alias ipsa, laudantium eum, fugit amet voluptas veritatis esse
          eligendi?
        </p>
      </div>
      <div className="flex items-center">
        <Image src={img} alt="" />
      </div>
    </div>
  );
}

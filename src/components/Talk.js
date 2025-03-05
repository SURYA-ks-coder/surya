import React, { useEffect, useState } from "react";
import image from "../assets/Strategic consulting-amico.png";
import Image from "next/image";
import EmailJSResponseStatus from "@emailjs/browser";

export default function Talk() {
  const [sendEmails, setSendEmails] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [emailSendSucess, setEmailSendSucess] = useState(false);

  // useEffect(() => {
  //   alert(JSON.stringify(sendEmails));
  // }, [sendEmails]);

  const sendEmail = () => {
    // alert(JSON.stringify(sendEmails));
    EmailJSResponseStatus.send(
      "suryaKS",
      "template_nu5zrvh",
      sendEmails,
      "Had0ERUPI9600d0lv"
    ).then(
      function (response) {
        console.log("SUCCESS!", response);
        setSendEmails({ name: "", email: "", message: "" });
        setEmailSendSucess(true);
      },
      function (error) {
        console.log("FAILED...", error);
      }
    );
  };
  return (
    <div
      className=" md:px-20 px-10 text-center lg:py-20 bg-black "
      id="LetTalk"
    >
      <h1 className=" text-3xl font-bold py-20 text-white">Let's Talk</h1>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-2  text-center mtb-10">
        <div className=" grid grid-rows-3 gap-2 px-5 items-center justify-center ">
          {/* <form action="" className="block w-full"> */}
          <input
            type="text"
            className="h-10 rounded-xl px-2 text-black"
            placeholder="Name"
            onChange={(e) => {
              setSendEmails({
                ...sendEmails,
                name: e.target.value,
              });
            }}
            value={sendEmails.name}
            // require={true}
          />
          <input
            type="email"
            className="h-10 rounded-xl px-2 text-black"
            placeholder="Email"
            onChange={(e) => {
              setSendEmails({ ...sendEmails, email: e.target.value });
            }}
            value={sendEmails.email}
            // require={true}
          />
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            className="h-20 rounded-xl px-2 p-2 text-black"
            placeholder="Message..."
            onChange={(e) => {
              setSendEmails({
                ...sendEmails,
                message: e.target.value,
              });
            }}
            value={sendEmails.message}
            // require={true}
          ></textarea>
          {emailSendSucess === true && (
            <p className="text-green-400 font-extrabold">
              Mail has been send...
            </p>
          )}
          <button className="  flex justify-center">
            <span
              className="border-none rounded-xl bg-[#1BA40C] p-2 px-5 mt-5 text-white"
              onClick={sendEmail}
            >
              Submit
            </span>
          </button>

          {/* </form> */}
        </div>
        <div className="md:flex hidden">
          {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi eos amet
          facilis voluptate? Maiores vel quam nulla doloremque culpa nisi,
          architecto cumque deserunt adipisci quis atque ipsum quo minima
          quibusdam. */}
          <Image src={image} alt="" width={400} />
        </div>
      </div>
    </div>
  );
}

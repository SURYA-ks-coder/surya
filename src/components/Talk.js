import React from "react";

export default function Talk() {
  return (
    <div className=" px-20 text-center my-20 ">
      <h1 className=" text-3xl font-bold my-20">Let's Talk</h1>
      <div className="grid grid-cols-2 gap-2 text-center mtb-10">
        <div className=" grid grid-rows-3 gap-2 px-5 items-center justify-center ">
          {/* <form action="" className="block w-full"> */}
          <input
            type="text"
            className="h-10 rounded-xl px-2"
            placeholder="Name"
          />
          <input
            type="email"
            className="h-10 rounded-xl px-2"
            placeholder="Email"
          />
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            className="h-20 rounded-xl px-2"
          ></textarea>
          <button className="  flex justify-center">
            <span className="border-none rounded-xl bg-red-400 p-2 px-5">
              Submit
            </span>
          </button>
          {/* </form> */}
        </div>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi eos amet
          facilis voluptate? Maiores vel quam nulla doloremque culpa nisi,
          architecto cumque deserunt adipisci quis atque ipsum quo minima
          quibusdam.
        </div>
      </div>
    </div>
  );
}

import React from "react";
import icon1 from "./images/Icon (2).png";
import man1 from "./images/Photo.jpg";
import man2 from "./images/Image (1).png";
import man3 from "./images/Image (2).png";
import face from "./images/Facebook.png";
import tweet from "./images/Twitter.png";
import instagram from "./images/Instagram.png";

const Expart = () => {
  return (
    <div className="mb-8 ">
      <div className="flex flex-col items-center justify-center pt-24">
        <img style={{ width: "64px", height: "64px" }} src={icon1} alt="" />
        <h1 className="my-8 mx-3 text-3xl text-black">
          Our team of expert advertisement manager
        </h1>
      </div>
      <div className="items-center justify-between gap-5 pb-8 md:mx-20 md:flex ">
        <div className="mb-2 rounded-xl border-2 pb-10 text-center">
          <img className="rounded-2xl p-2" src={man2} alt="" />

          <h1 className="mt-3 text-lg font-bold text-gray-900">
            Pippa Clarkson
          </h1>
          <h6 className=" px-4 pb-4 text-sm text-gray-800">Lead Manager</h6>

          <div className="flex items-center justify-center gap-2">
            <img className="w-6" src={face} alt="" />
            <img className="w-6" src={tweet} alt="" />
            <img className="w-6" src={instagram} alt="" />
          </div>
        </div>

        <div className="mb-2 rounded-xl border-2 bg-gray-400 pb-10 text-center">
          <img className="rounded-2xl p-2" src={man1} alt="" />

          <h1 className="mt-3 text-lg font-bold text-gray-900">
            ERichard Walsh
          </h1>
          <h6 className=" px-4 pb-4 text-sm text-gray-800">Lead Manager</h6>

          <div className="flex items-center justify-center gap-2">
            <img className="w-6" src={face} alt="" />
            <img className="w-6" src={tweet} alt="" />
            <img className="w-6" src={instagram} alt="" />
          </div>
        </div>

        <div className="mb-2 rounded-xl border-2 pb-10 text-center">
          <img className="rounded-2xl p-2" src={man3} alt="" />

          <h1 className="mt-3 text-lg font-bold text-gray-900">
            Richard Walsh
          </h1>
          <h6 className=" px-4 pb-4 text-sm text-gray-800">Lead Manager</h6>

          <div className="flex items-center justify-center gap-2">
            <img className="w-6" src={face} alt="" />
            <img className="w-6" src={tweet} alt="" />
            <img className="w-6" src={instagram} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Expart;

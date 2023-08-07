import React from "react";
import icon1 from "./images/Icon.png";
import icon2 from "./images/Icon (1).png";
import icon3 from "./images/img (1).png";
import icon4 from "./images/img.png";

const ValueWork = () => {
  return (
    <div className="mb-8 bg-gray-900">
      <div className="flex flex-col items-center justify-center pt-24">
        <img style={{ width: "64px", height: "64px" }} src={icon1} alt="" />
        <h1 className="my-6 mx-3 text-3xl text-white">
          The core values behind our work
        </h1>
      </div>
      <div className="items-center justify-between gap-5 pb-8 md:mx-20 md:flex ">
        <div className="mb-2 rounded-xl bg-gray-800 p-6 pb-10 text-center">
          <div
            style={{
              width: "100px",
              borderRadius: "50%",
              backgroundColor: "#292930",
            }}
            className="mx-auto flex items-center justify-center  "
          >
            <img className="p-3" src={icon2} alt="" />
          </div>
          <h1 className="my-3 text-lg font-bold text-gray-400">Efficiency</h1>
          <h6 className="border-b-2 border-gray-500 px-8 pb-8 text-sm text-white md:leading-7">
            Lorem ipsum dolor sit amet consecte tur adipiscing elit olme do
            semper dalaracc lacus vel facilisis volutpat est velitolm.
          </h6>
        </div>

        <div className="mb-2 rounded-xl bg-gray-800 p-6 pb-10 text-center">
          <div
            style={{
              width: "100px",
              borderRadius: "50%",
              backgroundColor: "#292930",
            }}
            className="mx-auto flex items-center justify-center  "
          >
            <img className="p-3" src={icon3} alt="" />
          </div>
          <h1 className="my-3 text-lg font-bold text-gray-400">
            Accountability
          </h1>
          <h6 className="border-b-2 border-gray-500 px-8 pb-8 text-sm text-white md:leading-7">
            Lorem ipsum dolor sit amet consecte tur adipiscing elit olme do
            semper dalaracc lacus vel facilisis volutpat est velitolm.
          </h6>
        </div>

        <div className="mb-2 rounded-xl bg-gray-800 p-6 pb-10 text-center">
          <div
            style={{
              width: "100px",
              borderRadius: "50%",
              backgroundColor: "#292930",
            }}
            className="mx-auto flex items-center justify-center  "
          >
            <img className="p-3" src={icon4} alt="" />
          </div>
          <h1 className="my-3 text-lg font-bold text-gray-400">Commitment</h1>
          <h6 className="border-b-2 border-gray-500 px-8 pb-8 text-sm text-white md:leading-7">
            Lorem ipsum dolor sit amet consecte tur adipiscing elit olme do
            semper dalaracc lacus vel facilisis volutpat est velitolm.
          </h6>
        </div>
      </div>
      <div className=" flex items-center justify-center">
        <div className="my-4 gap-5 pb-20 md:flex">
          <button
            type="button"
            className="mb-2 mr-2 rounded border border-gray-100 bg-gray-900 px-8 py-3 font-medium text-gray-100"
          >
            Get in touch
          </button>
          <button
            type="button"
            className="mb-2 rounded border border-gray-100 bg-gray-100 px-8 py-3 font-medium text-gray-900"
          >
            Our Services
          </button>
        </div>
      </div>
    </div>
  );
};

export default ValueWork;

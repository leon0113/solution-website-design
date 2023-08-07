import React from "react";
import bannerIcon from "../Home/images/Group 260.png";
import Header from "../Home/Header/Header";

const AboutHeader = () => {
  return (
    <div className="bg-gray-400">
      <Header/>

      <div
        className="flex justify-center  "
        style={{ height: "500px" }}
      >
        <h1 className=" mt-36 rounded-t-full bg-white p-40 text-center text-3xl font-bold text-black md:text-5xl">
          About Us
        </h1>
      </div>

      {/* stats */}
      <section className="mb-5 bg-gray-900 p-6 md:mx-20 ">
        <div className="container mx-auto grid grid-cols-1 justify-center text-center text-white lg:grid-cols-4">
          <div className="m-2 flex items-center justify-start gap-3 py-4 lg:m-6">
            <p className=" text-2xl font-bold text-white lg:text-3xl">320+</p>
            <p className="text-sm text-gray-400 sm:text-base">
              Clients <br /> Worldwide
            </p>
          </div>
          <div className="m-2 flex items-center justify-start gap-3  lg:m-6">
            <p className=" text-2xl font-bold text-white lg:text-3xl">975+</p>
            <p className="text-sm text-gray-400 sm:text-base">
              Projects <br />
              Completed
            </p>
          </div>
          <div className="m-2 flex items-center justify-start gap-3  lg:m-6">
            <p className=" text-2xl font-bold text-white lg:text-3xl">70+</p>
            <p className="text-sm text-gray-400 sm:text-base">
              Team <br />
              Members
            </p>
          </div>
          <div className="m-2 flex items-center justify-start gap-3  lg:m-6">
            <p className=" text-2xl font-bold text-white lg:text-3xl">85m+</p>
            <p className="text-sm text-gray-400 sm:text-base">
              Revenue <br /> Generated
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutHeader;

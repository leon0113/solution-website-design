import React from "react";
import de2 from "./images/details-1.png";
import icon1 from "./images/ctr_icon 1.png";
import icon2 from "./images/spend-analyzed-png 1.png";
import icon3 from "./images/increased-conversions-png 1.png";

const BuisnessDetail = () => {
  return (
    <div className="mb-5">
      <h1 className="my-12 text-center text-3xl font-bold text-black md:text-5xl">
        Do you need to grow your business?
      </h1>
      <div className="items-center justify-center md:mx-20 md:flex">
        <img
          className="rounded-2xl px-2"
          src="https://img.freepik.com/free-vector/illustration-graphs_53876-28520.jpg?w=740&t=st=1691070631~exp=1691071231~hmac=470ea8ffc3ced5d33b403062183f6997f624d5d157dc338a5024472c56332491"
          alt=""
        />
        <div className="p-4 md:p-16">
          <h1 className="mb-2 text-2xl font-bold text-black">
            For Advertisers
          </h1>
          <h6 className="mb-3 text-lg text-black">
            Our software and services are built for small and mid-sized
            businesses to help drive big results from online advertising.
          </h6>
          <h1 className="mb-2 text-2xl font-bold text-black">Features</h1>
          <h6 className="mb-3 text-lg text-black">
            Our software and services are built for small and mid-sized
            businesses to help drive big results from online advertising.
          </h6>
          <p className="font-normal text-indigo-500">Grow My Business..</p>
        </div>
      </div>

      <div className="items-center justify-center p-4 md:mx-10 md:flex md:p-1">
        <div className="md:mx-10 md:p-16">
          <h1 className="mb-2 text-2xl font-bold text-black">
            For Marketing Agencies
          </h1>
          <h6 className="mb-3 text-lg text-black">
            Scale your agency, train up your team and drive dynamic online
            advertising growth for your clients with our software and services..
          </h6>
          <h1 className="mb-2 text-2xl font-bold text-black">Features</h1>
          <h6 className="mb-3 text-lg text-black">
            Our software and services are built for small and mid-sized
            businesses to help drive big results from online advertising.
          </h6>
          <p className="font-normal text-indigo-500">Boost Conversions..</p>
        </div>
        <img src={de2} alt="" />
      </div>

      {/* Marketing */}
      <div className="mt-5">
        <h1 className="my-10 text-center text-3xl font-bold text-black md:text-6xl">
          MS Marketing
        </h1>
        <section className="p-6 text-gray-900">
          <div className="container mx-auto grid items-center justify-center text-center md:grid-cols-2 lg:grid-cols-3">
            <div className="m-2 flex flex-col items-center justify-center lg:m-6">
              <img style={{ width: "146px" }} src={icon1} alt="" />
              <h1 className="text-4xl font-bold ">55%</h1>
              <p className="text-sm text-black sm:text-base">
                Average Increase in CTR <br /> (Click-Through Range)
              </p>
            </div>
            <div className="m-2 flex flex-col items-center justify-center lg:m-6">
              <img style={{ width: "146px" }} src={icon2} alt="" />
              <h1 className=" text-3xl font-bold ">$5,000,000,000</h1>
              <p className="text-sm text-black sm:text-base">
                Total Ad Spend Analysed
              </p>
            </div>
            <div className="m-2 flex flex-col items-center justify-center lg:m-6">
              <img style={{ width: "128px" }} src={icon3} alt="" />
              <h1 className=" text-4xl font-bold ">31%</h1>
              <p className="text-sm text-black sm:text-base">
                Average Increase <br /> in Conversions
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default BuisnessDetail;

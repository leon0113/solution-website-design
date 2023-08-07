import React from "react";
import flag1 from "./images/image 55.png";
import flag2 from "./images/image 57.png";

const Address = () => {
  return (
    <div className="mb-8 bg-gray-400">
      <div className="items-center justify-between pt-24 md:mx-20 md:flex">
        <h1 className="my-6 mx-3 text-3xl font-semibold text-gray-900">
          Come and visit us all around the world
        </h1>
        <button
          type="button"
          className="mb-2 mr-2 rounded border border-gray-100 bg-gray-900 px-8 py-3 font-medium text-gray-100"
        >
          Get in touch
        </button>
      </div>
      <div className="items-center justify-center gap-5 px-2 pb-20 md:mx-20 md:flex ">
        <div className="mb-2 rounded-xl bg-gray-100 p-6 pb-10 text-start">
          <div
            style={{
              width: "78px",
            }}
          >
            <img className="pb-2" src={flag1} alt="" />
          </div>
          <h1 className="my-2 text-lg font-bold text-gray-900">
            San Francisco, USA
          </h1>
          <h6 className=" pb-1 text-xs text-gray-700 ">
            1650 Page. San Francisco, California(CA), 94117
          </h6>
          <h6 className=" pb-1 text-sm text-gray-900 ">
            Phone : (414) 809 - 2567
          </h6>
          <h6 className="pb-1 text-sm text-gray-900 ">
            Mail : Contact@marketingagency.com
          </h6>
        </div>
        <div className="mb-2 rounded-xl bg-gray-100 p-6 pb-10 text-start">
          <div
            style={{
              width: "78px",
            }}
          >
            <img className="pb-2" src={flag2} alt="" />
          </div>
          <h1 className="my-2 text-lg font-bold text-gray-900">
            San Francisco, USA
          </h1>
          <h6 className=" pb-1 text-xs text-gray-700 ">
            1650 Page. San Francisco, California(CA), 94117
          </h6>
          <h6 className=" pb-1 text-sm text-gray-900 ">
            Phone : (414) 809 - 2567
          </h6>
          <h6 className="pb-1 text-sm text-gray-900 ">
            Mail : Contact@marketingagency.com
          </h6>
        </div>

        <div className="mb-2 rounded-xl bg-gray-100 p-6 pb-10 text-start">
          <div
            style={{
              width: "78px",
            }}
          >
            <img className="pb-2" src={flag1} alt="" />
          </div>
          <h1 className="my-2 text-lg font-bold text-gray-900">
            San Francisco, USA
          </h1>
          <h6 className=" pb-1 text-xs text-gray-700 ">
            1650 Page. San Francisco, California(CA), 94117
          </h6>
          <h6 className=" pb-1 text-sm text-gray-900 ">
            Phone : (414) 809 - 2567
          </h6>
          <h6 className="pb-1 text-sm text-gray-900 ">
            Mail : Contact@marketingagency.com
          </h6>
        </div>
      </div>
      {/* <div className=" flex items-center justify-center">
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
      </div> */}
    </div>
  );
};

export default Address;

import React from "react";
import marketingDetail from "./images/Image.png";

const MarketingDetail = () => {
  return (
    <div className="mx-2 items-center justify-between md:flex md:px-10">
      <div>
        <img
          style={{ width: "1500px" }}
          className="ml-6"
          src={marketingDetail}
          alt=""
        />
      </div>
      <div className="mx-3">
        <h1 className="mb-3 text-xl font-bold text-black  md:text-3xl">
          The #1 digital marketing services company
        </h1>
        <hr />
        <div className="my-4 gap-5 md:flex">
          <button
            type="button"
            className="mb-2 rounded border border-gray-100 bg-gray-900 px-8 py-3 font-medium text-gray-100"
          >
            Development Scale
          </button>
          <button
            type="button"
            className="mb-2 rounded border border-gray-100 bg-gray-900 px-8 py-3 font-medium text-gray-100"
          >
            Research & Strategy
          </button>
        </div>
        <h6 className="pr-8 ">
          Lorem ipsum dolors sit non amet consectetur adipiscing elit fringilla
          aliquam Aliquam vestibulum libero morbi blandit cursus risus. Laoreet
          non curabitur gravida arcu ac tortor semper vivera nam libero justo
          laoreet mollis aliquam ut porttitor leo a diam.
        </h6>
        <button
          type="button"
          className="border-1 my-4 rounded border-black px-8 py-3 font-medium text-gray-900"
        >
          Get in touch
        </button>
      </div>
    </div>
  );
};

export default MarketingDetail;

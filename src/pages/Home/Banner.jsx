import React from "react";
import bannerImg from "./images/main screen photo.png";
import faceBookIcon from "./images/facebook.png";
import gIcon from "./images/gIcon.png";
import twitterIcon from "./images/twitter.png";
import partner1 from "./images/badge-microsoft-elite-channel-partner-2021.png";
import partner2 from "./images/facebook marketing partner.png";
import partner3 from "./images/officialpartner-badge-blue-576x504.png.twimg.png";
import partner4 from "./images/Google Partner.png";
import Header from "./Header/Header";


const Banner = () => {

  return (
    <div className="bg-gray-400">
      <Header/>

      {/* Banner Section */}

      <div className=" md:flex">
        <div>
          <img style={{ width: "100vh" }} src={bannerImg} alt="" />
        </div>
        <div className="mx-3">
          <h1
            style={{ font: "Maven Pro" }}
            className="mt-20 mb-3 text-6xl font-bold text-white"
          >
            Online Advertising <br /> Made Easy.{" "}
          </h1>
          <span className=" font-semibold text-white">
            Turn 60% more leads into customers while spending 10% less. <br />
            MS Management can help make it happen for your small business.
          </span>
          <div className="mt-3 gap-5 md:flex">
            <button
              type="button"
              className="mb-2 rounded border border-gray-100 bg-gray-900 px-8 py-3 font-medium text-gray-100"
            >
              Grade My Ad Accounts
            </button>
            <button
              type="button"
              className="border-3 mb-2 rounded border-black px-8 py-3 font-medium text-gray-900"
            >
              Start My Free Trial
            </button>
          </div>
          <div className="mx-3 mt-10 mb-2 flex flex-wrap items-center justify-between">
            <img
              className="mb-2"
              style={{ width: "100px" }}
              src={gIcon}
              alt=""
            />
            <img style={{ width: "162px" }} src={faceBookIcon} alt="" />
            <img style={{ width: "100px" }} src={twitterIcon} alt="" />
          </div>
        </div>
      </div>

      {/* Partners */}

      <div className="flex flex-wrap items-center justify-evenly bg-gray-900 py-3">
        <img
          className="mb-3 mt-2"
          style={{ width: "221px" }}
          src={partner1}
          alt=""
        />
        <img
          className="mb-3"
          style={{ width: "221px" }}
          src={partner2}
          alt=""
        />
        <img
          className="mb-3"
          style={{ width: "221px" }}
          src={partner4}
          alt=""
        />
        <img
          className="mb-3"
          style={{ width: "221px" }}
          src={partner3}
          alt=""
        />
      </div>
    </div>
  );
};

export default Banner;

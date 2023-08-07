import React, { useState } from "react";
import DatePicker from "react-datepicker";

import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { useNavigate, useLocation } from "react-router-dom";
import { useForm } from "react-hook-form";
import "./adsDetails.css";

const AdSet = () => {
  const navigate = useNavigate();

  const location = useLocation();
  const compaignID = location.state?.id;
  console.log(compaignID);

  const [adset, setAdSet] = useState({
    name: "",
    campaign_id: compaignID,
    lifetime_budget: 0,
    start_time: "",
    end_time: "",
  });

  console.log(adset);

  // submission ads details
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const submit = (e) => {
    e.preventDefault();
    navigate("/dashboard/add-set");
    // navigate("/dashboard/add-set", { state: { ADSET: adset } });

  };

  return (
    <div className="bg-slate-300 mx-auto p-0 lg:container">
      <div className="mt-5 rounded-lg bg-white p-0 shadow-md">
        <p className="text-center">Step 2/3</p>
        <div className="content__wrapper__padding">
          <p className="text-xl font-medium text-[#5E5873] lg:text-2xl">
            Ad Set
          </p>
          <hr className="mt-3 lg:mt-8" />
          <div>
            <div className="row mt-4">
              <div className="col">
                <label
                  className=""
                  style={{
                    letterSpacing: "0.3px",
                    fontWeight: "500",
                    fontSize: "20px",
                    color: "#63666A",
                  }}
                >
                  AdSet Name
                </label>
                <div className="col">
                  <input
                    value={adset.name}
                    //  {...register("add_name", { required: true })}
                    onChange={(e) => {
                      setAdSet((prevValue) => ({
                        ...prevValue,
                        name: e.target.value,
                      }));
                    }}
                    name="name"
                    aria-invalid={errors.add_name ? "true" : "false"}
                    className="placeholder:font-regular w-100 mt-2 rounded-md border px-4 py-2.5 text-sm focus:outline-none lg:text-base lg:placeholder:font-semibold"
                    placeholder="AdSet Name"
                  />

                  {errors.headline?.type === "required" && (
                    <span
                      role="alert"
                      className="text-xs font-normal text-danger lg:text-sm"
                    >
                      This filed is required
                    </span>
                  )}
                </div>
              </div>
            </div>
            <div className="margin-top-7">
              <label className="mb-2.5 text-sm font-semibold lg:text-base">
                Performance Goal
              </label>
              <select
                {...register("Buyingtype", { required: true })}
                aria-invalid={errors.Buyingtype ? "true" : "false"}
                className="w-full rounded-md border px-4 py-[12px] text-sm focus:outline-none lg:text-base"
                id=""
              >
                <option value="">Maximize reach of Ads</option>
                <option value="SelectAccount">Select Account</option>
                <option value="SelectAccount">Select Account</option>
                <option value="SelectAccount">Select Account</option>
              </select>
              {errors.Buyingtype && (
                <span className="text-xs text-danger lg:text-sm">
                  This filed is required
                </span>
              )}
            </div>
            <div className="mt-7 flex items-center gap-10">
              <div className="flex-1">
                <label className="text-sm font-semibold lg:text-base">
                  Facebook Page
                </label>
                <select
                  {...register("FacebookPage", { required: true })}
                  aria-invalid={errors.FacebookPage ? "true" : "false"}
                  className="mt-2.5 w-full rounded-md border px-4 py-[12px] text-sm focus:outline-none lg:text-base "
                  id=""
                >
                  <option value="">Prospective Solutions</option>
                  <option value="SelectAccount">Select Account</option>
                  <option value="SelectAccount">Select Account</option>
                  <option value="SelectAccount">Select Account</option>
                </select>
                {errors.FacebookPage && (
                  <span className="text-xs text-danger lg:text-sm">
                    This filed is required
                  </span>
                )}
              </div>

              <div className="mt-2.5 ">
                <p className="m-0 flex h-11 w-11 items-center justify-center rounded border bg-gray-100 text-3xl">
                  +
                </p>
              </div>
            </div>
            <div className="margin-top-7">
              <label className="mb-2.5 text-sm font-semibold lg:text-base">
                Lifetime Budget
              </label>
              <div className="flex items-center">
                <input
                  value={adset.lifetime_budget}
                  //  {...register("add_name", { required: true })}
                  onChange={(e) => {
                    setAdSet((prevValue) => ({
                      ...prevValue,
                      lifetime_budget: parseInt(e.target.value),
                    }));
                  }}
                  type="number"
                  name="lifetime_budget"
                  aria-invalid={errors.add_name ? "true" : "false"}
                  className="placeholder:font-regular w-100 mt-2 rounded-md border px-4 py-2.5 text-sm focus:outline-none lg:text-base lg:placeholder:font-semibold"
                  placeholder="0.0"
                />
              </div>
            </div>
            <div>
              {/* <div className="margin-top-7">
                  <label className="mb-2.5 text-sm font-semibold lg:text-base">
                    Daily Budget
                  </label>
                  <div className="grid grid-cols-1 lg:grid-cols-2">
                    <select
                      {...register("DailyBudget", { required: true })}
                      aria-invalid={errors.DailyBudget ? "true" : "false"}
                      className="w-full rounded-md border px-4 py-[12px] text-sm focus:outline-none lg:text-base"
                      id=""
                    >
                      <option value="">Select...</option>
                      <option value="usd">USD</option>
                      <option value="bdt">BDT</option>
                      <option value="rupee">Rupee</option>
                      <option value="rupee">Rupee</option>
                    </select>
                    <div>
                      <input
                        type="text"
                        name=""
                        className="w-full rounded-md border px-4 py-2.5 placeholder:font-semibold focus:outline-none text-end"
                        placeholder="USD"
                      />
                    </div>
                  </div>
                  {errors.DailyBudget && (
                    <span className="text-xs text-danger lg:text-sm">
                      This filed is required
                    </span>
                  )}
                </div> */}
            </div>
            <div className="margin-top-7  grid-gap-20 grid grid-cols-1 lg:grid-cols-2">
              <div>
                <label className="mb-2.5 text-sm font-semibold lg:text-base">
                  Start Date
                </label>
                <div className="flex w-full items-center gap-2 rounded-md border px-4 py-[12px] text-sm focus:outline-none lg:text-base">
                  <CalendarMonthIcon style={{ width: "20px" }} />
                  <DatePicker
                    selected={adset.start_time}
                    onChange={(date) => {
                      setAdSet((prevValue) => ({
                        ...prevValue,
                        start_time: date,
                      }));
                    }}
                    placeholderText={"Select Date"}
                    filterDate={(date) =>
                      date.getDay() !== 6 && date.getDay() !== 0
                    } // weekends cancel
                    showYearDropdown // year show and scrolldown alos
                    scrollableYearDropdown
                  />
                </div>
              </div>

              <div>
                <label className="mb-2.5 text-sm font-semibold lg:text-base">
                  End Date
                </label>
                <div className="flex w-full items-center gap-2 rounded-md border px-4 py-[12px] text-sm focus:outline-none lg:text-base">
                  <CalendarMonthIcon style={{ width: "20px" }} />
                  <DatePicker
                    selected={adset.end_time}
                    onChange={(date) => {
                      setAdSet((prevValue) => ({
                        ...prevValue,
                        end_time: date,
                      }));
                    }} // weekends cancel
                    placeholderText={"Select Date"}
                    showYearDropdown // year show and scrolldown alos
                    scrollableYearDropdown
                    dateFormat="yyyy-MM-dd"
                  />
                </div>
              </div>
            </div>
            <div className="mt-8 flex items-center gap-2">
              <button className="rounded-md border border-gray-900 px-6 py-2.5 text-sm lg:text-base ">
                Cancel
              </button>
              <button
                type="button"
                onClick={submit}
                className="rounded-md bg-[#63666A] px-6 py-2.5 text-sm text-white lg:text-base"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdSet;

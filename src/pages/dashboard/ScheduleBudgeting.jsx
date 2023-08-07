
import React, { useState } from "react";
import DatePicker from "react-datepicker";

import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import "./adsDetails.css";

const ScheduleBudgeting = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const navigate = useNavigate();

  // submission ads details
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data, e) => {
    e.preventDefault();
    // navigate Schedule and Budgeting to Targeting
    navigate("/dashboard/Targeting");
  };

  return (
    <div className="bg-slate-300 mx-auto p-0 lg:container">
      <div className="mt-5 rounded-lg bg-white p-0 shadow-md">
        <p className="text-center">Step 2/3</p>
        <div className="content__wrapper__padding">
          <p className="text-xl font-medium text-[#5E5873] lg:text-2xl">
            A Schedule and Budgeting
          </p>
          <span className="text-xs font-medium lg:text-sm">
            Set your ad schedule and total amount to spent on the ad
          </span>
          <hr className="lg:mt-8 mt-3" />
          <div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="margin-top-7">
                <label className="mb-2.5 text-sm font-semibold lg:text-base">
                  Facebook Ad Account
                </label>
                <select
                  {...register("facebook_ad_account", { required: true })}
                  aria-invalid={errors.facebook_ad_account ? "true" : "false"}
                  className="w-full rounded-md border px-4 py-[12px] text-sm focus:outline-none lg:text-base"
                  id=""
                >
                  <option value="">Select Account</option>
                  <option value="SelectAccount">Select Account</option>
                  <option value="SelectAccount">Select Account</option>
                  <option value="SelectAccount">Select Account</option>
                </select>
                {errors.facebook_ad_account && (
                  <span className="text-xs text-danger lg:text-sm">
                    This filed is required
                  </span>
                )}
              </div>

              <div className="margin-top-7">
                <label className="mb-2.5 text-sm font-semibold lg:text-base">
                  Select Facebook Page
                </label>
                <select
                  {...register("select_page", { required: true })}
                  aria-invalid={errors.select_page ? "true" : "false"}
                  className="w-full rounded-md border px-4 py-[12px] text-sm focus:outline-none lg:text-base"
                  id=""
                >
                  <option value="">Select page</option>
                  <option value="SelectPage">Select page</option>
                  <option value="SelectPage">Select page</option>
                  <option value="SelectPage">Select page</option>
                </select>
                {errors.select_page && (
                  <span className="text-xs text-danger lg:text-sm">
                    This filed is required
                  </span>
                )}
              </div>

              <div className="margin-top-7">
                <label className="mb-2.5 text-sm font-semibold lg:text-base">
                  Budget
                </label>
                <div className="flex items-center">
                  <select
                    {...register("currency", { required: true })}
                    aria-invalid={errors.currency ? "true" : "false"}
                    className="w-32 rounded-md border px-4 py-[12px] text-sm focus:outline-none lg:text-base"
                    id=""
                  >
                    <option value="">Select...</option>
                    <option value="usd">USD</option>
                    <option value="bdt">BDT</option>
                    <option value="rupee">Rupee</option>
                    <option value="rupee">Rupee</option>
                  </select>
                  <input
                    type="text"
                    name=""
                    className="w-full rounded-md border px-4 py-2.5 placeholder:font-semibold focus:outline-none"
                  />
                </div>
                {errors.currency && (
                  <span className="text-xs text-danger lg:text-sm">
                    This filed is required
                  </span>
                )}
              </div>

              <div className="margin-top-7  grid-gap-20 grid grid-cols-1 lg:grid-cols-2">
                <div>
                  <label className="mb-2.5 text-sm font-semibold lg:text-base">
                    Campaign Start
                  </label>
                  <div className="flex w-full items-center gap-2 rounded-md border px-4 py-[12px] text-sm focus:outline-none lg:text-base">
                    <CalendarMonthIcon style={{ width: "20px" }} />
                    <DatePicker
                      selected={startDate}
                      onChange={(date) => setStartDate(date)}
                      placeholderText={"Select Date"}
                      filterDate={(date) =>
                        date.getDay() !== 6 && date.getDay() !== 0
                      } // weekends cancel
                      showYearDropdown // year show and scrolldown alos
                      scrollableYearDropdown
                    />
                  </div>
                  {!startDate && (
                    <span className="text-xs text-danger lg:text-sm">
                      This filed is required
                    </span>
                  )}
                </div>

                <div>
                  <label className="mb-2.5 text-sm font-semibold lg:text-base">
                    Campaign End
                  </label>
                  <div className="flex w-full items-center gap-2 rounded-md border px-4 py-[12px] text-sm focus:outline-none lg:text-base">
                    <CalendarMonthIcon style={{ width: "20px" }} />
                    <DatePicker
                      selected={endDate}
                      onChange={(date) => setEndDate(date)}
                      placeholderText={"Select Date"}
                      filterDate={(date) =>
                        date.getDay() !== 6 && date.getDay() !== 0
                      } // weekends cancel
                      showYearDropdown // year show and scrolldown alos
                      scrollableYearDropdown
                    />
                  </div>
                  {!endDate && (
                    <span className="text-xs text-danger lg:text-sm">
                      This filed is required
                    </span>
                  )}
                </div>
              </div>

              <div className="mt-8 flex items-center gap-2">
                <button className="rounded-md border border-gray-900 px-6 py-2.5 text-sm lg:text-base ">
                  Cancel
                </button>
                <button
                  type="submit"
                  className="rounded-md bg-[#63666A] px-6 py-2.5 text-sm text-white lg:text-base"
                >
                  Next
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScheduleBudgeting;


import React from "react";
import { useForm } from "react-hook-form";
import "./adsDetails.css";

const Targeting = () => {
  // submission ads details
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data, e) => {
    e.preventDefault();
  };

  return (
    <div className="bg-slate-300 mx-auto p-0 lg:container">
      <div className="mt-5 rounded-lg bg-white p-0 shadow-md">
        <p className="text-center">Step 3/3</p>
        <div className="content__wrapper__padding">
          <p className="text-xl font-medium text-[#5E5873] lg:text-2xl">
            Targeting
          </p>
          <span className="text-xs font-medium lg:text-sm">
            Tailor your ad to the right audience
          </span>
          <hr className="mt-3 lg:mt-8" />
          <div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="margin-top-7">
                <label className="mb-2.5 text-sm font-semibold lg:text-base">
                  Ad Category
                </label>
                <select
                  {...register("category", { required: true })}
                  aria-invalid={errors.category ? "true" : "false"}
                  className="w-full rounded-md border px-4 py-[12px] text-sm focus:outline-none lg:text-base"
                  id=""
                >
                  <option value="">Select Category</option>
                  <option value="Select Category">Select Category</option>
                  <option value="Select Category">Select Category</option>
                  <option value="Select Category">Select Category</option>
                </select>
                {errors.category && (
                  <span className="text-xs text-danger lg:text-sm">
                    This filed is required
                  </span>
                )}
              </div>

              <div className="margin-top-7">
                <label className="mb-2.5 text-sm font-semibold lg:text-base">
                  Website URL
                </label>
                <div className="rounded-md border p-4">
                  <div>
                    <div className="mb-2 flex items-center gap-5">
                      <div>
                        <input
                          {...register("select_audience", { required: true })}
                          aria-invalid={
                            errors.select_audience ? "true" : "false"
                          }
                          type="radio"
                          id="new_audience"
                          defaultValue="New Audience"
                        />
                        <label
                          htmlFor="new_audience"
                          className="ml-2 cursor-pointer text-sm  lg:text-base"
                        >
                          New Audience
                        </label>
                      </div>
                      <div>
                        <input
                          {...register("select_audience", { required: true })}
                          aria-invalid={
                            errors.select_audience ? "true" : "false"
                          }
                          type="radio"
                          id="saved_audience"
                          defaultValue="Custom URL"
                        />
                        <label
                          htmlFor="saved_audience"
                          className="ml-2 cursor-pointer text-sm  lg:text-base"
                        >
                          Saved Audience
                        </label>
                      </div>
                    </div>
                    {errors.select_audience?.type === "required" && (
                      <span
                        role="alert"
                        className="text-xs font-normal text-danger lg:text-sm"
                      >
                        This filed is required
                      </span>
                    )}
                  </div>

                  <div>
                    <select
                      {...register("audience", { required: true })}
                      aria-invalid={errors.audience ? "true" : "false"}
                      name="audience"
                      className="w-full rounded-md border px-4 py-[12px] text-sm focus:outline-none lg:text-base"
                      id=""
                    >
                      <option value="">Select Audience</option>
                      <option value="Select Audience">Select Audience</option>
                      <option value="Select Audience">Select Audience</option>
                      <option value="Select Audience">Select Audience</option>
                    </select>
                    {errors.audience?.type === "required" && (
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

              <div className="mt-8 flex items-center gap-2">
                <button className="rounded-md border border-gray-900 px-6 py-2.5 text-sm lg:text-base ">
                  Cancel
                </button>
                <button
                  type="submit"
                  className="rounded-md bg-[#63666A] px-6 py-2.5 text-sm text-white lg:text-base"
                >
                  Finish
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Targeting;

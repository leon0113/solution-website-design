import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { creatCompaign } from "@/redux/features/compaign/compaignSlice";

const AddCompaign = () => {
  const [deta, setDeta] = useState([]);

  const location = useLocation();
  const objective = location.state?.objective;
  const currentDate = new Date().toLocaleDateString();
  const compaignTitle = `${objective} ${currentDate}`;
  const [compaign, setCompaign] = useState({
    name: compaignTitle,
    special_ad_categories: [],
    objective: "",
    status: "ACTIVE",
  });

  let compaignId = null;

  const data = [
    "NONE",
    "EMPLOYMENT",
    "HOUSING",
    "CREDIT",
    "ISSUES_ELECTIONS_POLITICS",
    "ONLINE_GAMBLING_AND_GAMING",
  ];
  console.log(compaign);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  // const onchange = (val) => {
  //   setCompaign((prevValue) => ({
  //     ...prevValue,
  //     objective : val,
  //   }));
  // };

  const handleSelectChange = (event) => {
    const selectedValues = Array.from(
      event.target.selectedOptions,
      (option) => option.value
    );
    setDeta((prevValues) => [...prevValues, ...selectedValues]);
  };

  useEffect(() => {
    setCompaign((prevCompaign) => ({
      ...prevCompaign,
      special_ad_categories: deta,
    }));
  }, [deta]);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = async () => {
    try {
      // const compaigns = await dispatch(creatCompaign(compaign));
      // const paylodData = compaigns?.payload;
      // let idValue = paylodData.result.id;

      // compaignId = idValue;

      // console.log("id--------", compaignId);

      // navigate("/dashboard/adset", { state: { id: idValue } });
      navigate("/dashboard/adset");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container mt-5 pt-2">
      <div className="row card">
        <form action="" onSubmit={handleSubmit(onSubmit)} className="">
          <div className="">
            <div className="ps-4 pt-2">
              <label
                className=""
                style={{
                  letterSpacing: "0.3px",
                  fontWeight: "500",
                  fontSize: "20px",
                  color: "#63666A",
                }}
              >
                Compaign Name
              </label>
              <div className="block">
                <input
                  value={compaign.name}
                  //  {...register("add_name", { required: true })}
                  onChange={(e) => {
                    setCompaign((prevValue) => ({
                      ...prevValue,
                      name: e.target.value,
                    }));
                  }}
                  name="name"
                  aria-invalid={errors.add_name ? "true" : "false"}
                  className="placeholder:font-regular  mt-2 block w-full rounded-md border px-4 py-2.5 text-sm focus:outline-none lg:text-base lg:placeholder:font-semibold"
                  placeholder="Ex. New Awareness Compaign"
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

          <div className="row mt-4">
            <div className="col ps-4">
              <label
                className=""
                style={{
                  letterSpacing: "0.3px",
                  fontWeight: "500",
                  fontSize: "20px",
                  color: "#63666A",
                }}
              >
                Special Ad Categories
              </label>

              <br />
              <select
                className="col w-full mt-2 rounded-md border px-4 py-[12px] text-sm focus:outline-none lg:text-base"
                multiple
                // {...register("cta_button", { required: true })}
                value={compaign.special_ad_categories}
                name="special_ad_categories"
                aria-invalid={errors.cta_button ? "true" : "false"}
                onChange={handleSelectChange}
              >
                {data?.map((option) => (
                  <option className="col mt-2" key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              <br />
              {errors.cta_button && (
                <span className="text-danger">This field is required</span>
              )}
            </div>
          </div>

          <div className="row mt-4">
            <div className="col-6 ps-4">
              <label
                className=""
                style={{
                  letterSpacing: "0.3px",
                  fontWeight: "500",
                  fontSize: "20px",
                  color: "#63666A",
                }}
              >
                Objective
              </label>

              <div className="col-6 mt-2" style={{ width: "100%" }}>
                <select
                  // {...register("cta_button", { required: true })}
                  // value={compaign.objective}
                  onChange={(e) => {
                    setCompaign((prevValue) => ({
                      ...prevValue,
                      objective: e.target.value,
                    }));
                  }}
                  name="objective"
                  aria-invalid={errors.cta_button ? "true" : "false"}
                  className=" w-full rounded-md border px-4 py-[12px] text-sm focus:outline-none lg:text-base"
                >
                  <option selected disabled>
                    select....
                  </option>
                  <option>OUTCOME_TRAFFIC</option>
                </select>
                <br />
                {errors.cta_button && (
                  <span className="mt-2 text-danger">
                    This field is required
                  </span>
                )}
              </div>
            </div>

            <div className="col-6">
              <label
                className=""
                style={{
                  letterSpacing: "0.3px",
                  fontWeight: "500",
                  fontSize: "20px",
                  color: "#63666A",
                }}
              >
                Status
              </label>

              <div className="col-6" style={{ width: "100%" }}>
                <select
                  // {...register("cta_button", { required: true })}

                  onChange={(e) => {
                    setCompaign((prevValue) => ({
                      ...prevValue,
                      status: e.target.value,
                    }));
                  }}
                  name="status"
                  aria-invalid={errors.cta_button ? "true" : "false"}
                  className="mt-2  w-full rounded-md border px-4 py-[12px] text-sm focus:outline-none lg:text-base"
                >
                  <option>ACTIVE</option>
                  <option>PAUSED</option>
                </select>
                <br />
                {errors.cta_button && (
                  <span className="my-2 text-danger">
                    This field is required
                  </span>
                )}
              </div>
            </div>
          </div>

          <div className="ps-3 mt-8 mb-3 flex items-center gap-2">
            <button className="rounded-md border border-gray-900 px-6 py-2.5 text-sm lg:text-base">
              Cancel
            </button>
            <button
              type="submit"
              className="ms-2 rounded-md bg-[#63666A] px-6 py-2.5 text-sm text-white lg:text-base"
            >
              Next
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCompaign;

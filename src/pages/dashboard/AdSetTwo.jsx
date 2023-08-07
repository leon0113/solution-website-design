
import React,{useState,useEffect} from "react";
import { useForm } from "react-hook-form";
import { useLocation } from "react-router-dom";
import "./adsDetails.css";
import SearchIcon from "@mui/icons-material/Search";
import { useDispatch } from "react-redux";
// import { createAdset } from "@/redux/features/compaign/compaignSlice";

const AdSetTwo = () => {


      // const dispatch = useDispatch()
      const location = useLocation()

      const ADSET = location.state?.ADSET;
        console.log(ADSET);

        const startTime = ADSET?.start_time.toISOString().split('T')[0];
        const endTime = ADSET?.end_time.toISOString().split('T')[0];

        const[geoLocation,setGeoLocation] = useState([])
        const [gender, setGender] = useState([]);
    
        const [adset, setAdSet] = useState({
          name:ADSET.name,
          campaign_id:ADSET.campaign_id,
          start_time:startTime,
          end_time:endTime,
          lifetime_budget:ADSET.lifetime_budget,
          bid_amount:0,
        billing_event:'',
        optimization_goal:'',
        status:'ACTIVE',
        genders:[],
        age_min:18,
        age_max:65,
        geo_locations:[]
          })


      useEffect(() => {
        // Update the adSet whenever the genders array changes
        setAdSet((prevValue) => ({
          ...prevValue,
          genders: gender,
        }));
      }, [gender]);
      console.log(adset);

      const countries =["US","CA","GB","AU","DE","FR","IN","JP","BR","MX"]





      const handleSelectChange = (event) => {
        const selectedValues = Array.from(event.target.selectedOptions, (option) => option.value);
      
        selectedValues.forEach((value) => {
          if (!geoLocation.includes(value)) {
            setGeoLocation((prevValues) => [...prevValues, value]);
          }
        });
      };
      
      const handleGenderChange = (selectedGender) => {
        if (selectedGender === "All") {
          setGender(["1", "2"]);
        } else {
          setGender([selectedGender]);
        }
      };



      useEffect(() => {
        setAdSet((prevCompaign) => ({
          ...prevCompaign,
          geo_locations: geoLocation
        }));
      }, [geoLocation]);




      const ageOptions = [];
      for (let age = adset.age_min; age <= adset.age_max; age++) {
        ageOptions.push(<option value={age} key={age}>
            {age}
            </option>);
      }


  // submission ads details
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const Submit = async (e) => {
     e.preventDefault()


    // const data =  await dispatch(createAdset(adset))
    // console.log(data.payload);
try {
   await fetch('http://localhost:4000/campaign/adset', {
    Method: 'POST',
    Headers: {
      Accept: 'application.json',
      'Content-Type': 'application/json'
    },
    Body: adset,
    Cache: 'default'
  })
  .then((res)=>res.json())
  .then((res)=>console.log(res))
} catch (error) {
  console.log(error);
}
  //  const res =  await dispatch(createAdset(adset))
  //  console.log(data);
  };



  return (
    <div className="bg-slate-300 mx-auto p-0 lg:container">
      <div className="mt-5 rounded-lg bg-white p-0 shadow-md">
        <p className="text-center">Step 3/3</p>
        <div className="content__wrapper__padding">
          <p className="text-xl font-medium text-[#5E5873] lg:text-2xl">
            Create New Audience
          </p>
          <hr className="mt-3 lg:mt-8" />
          <div>
          
              <div className="margin-top-7">
                <label className="mb-2.5 text-sm font-semibold lg:text-base">
                  Bid Amount
                </label>

                <div className="relative">
                  <SearchIcon className="absolute top-2.5 left-3" />

                  <input
                    {...register("Adsetname", { required: true })}
                    value={adset.bid_amount}
                    //  {...register("add_name", { required: true })}
                    onChange={(e) => {
                      setAdSet((prevValue) => ({
                        ...prevValue,
                        bid_amount: parseInt(e.target.value),
                      }));
                    }}
                  name="bid_amount"
                    aria-invalid={errors.Adsetname ? "true" : "false"}
                    className="placeholder:font-regular w-full rounded-md border py-2.5 pr-4 pl-10 text-sm focus:outline-none lg:text-base lg:placeholder:font-semibold"
                    placeholder="bid amount"
                    type="number"
                  />
                  {/* {errors.Adsetname?.type === "required" && (
                    <span
                      role="alert"
                      className="text-xs font-normal text-danger lg:text-sm"
                    >
                      This filed is required
                    </span>
                  )} */}
                </div>
              </div>


<div className="row mt-3">
    
<div className="col">
              <label className=" mb-2.5 text-sm font-semibold lg:text-base">
              Billing Event
              </label>

              <div className="col mt-2">
                <select
              // {...register("cta_button", { required: true })}
                  // value={compaign.objective}
                  onChange={(e) => {
                    setAdSet((prevValue) => ({
                      ...prevValue,
                      billing_event: e.target.value,
                    }));
                  }}

                  name="billing_event"
                  aria-invalid={errors.cta_button ? 'true' : 'false'}
                  className="rounded-md border w-100 px-4 py-[12px] text-sm focus:outline-none lg:text-base"
                >
                  <option 
                  selected 
                  disabled>select....</option>
                  <option 
                  >IMPRESSIONS</option>
                </select>
                <br />
                {errors.cta_button && <span className="text-danger mt-2">This field is required</span>}
              </div>
            </div>
</div>


<div className="row mt-3">
    
<div className="col">
              <label className=" mb-2.5 text-sm font-semibold lg:text-base">
              Optimization Goal
              </label>

              <div className="col mt-2">
                <select
              // {...register("cta_button", { required: true })}
                  // value={compaign.objective}
                  onChange={(e) => {
                    setAdSet((prevValue) => ({
                      ...prevValue,
                      optimization_goal: e.target.value,
                    }));
                  }}

                  name="optimization_goal"
                  aria-invalid={errors.cta_button ? 'true' : 'false'}
                  className="rounded-md border w-100 px-4 py-[12px] text-sm focus:outline-none lg:text-base"
                >
                  <option 
                  selected 
                  disabled>select....</option>
                  <option 
                  >POST_ENGAGEMENT</option>
                </select>
                <br />
                {errors.cta_button && <span className="text-danger mt-2">This field is required</span>}
              </div>
            </div>
</div>


<div className="row mt-3">

<div className="col">
              <label className="mb-2.5 text-sm font-semibold lg:text-base">
                Status
              </label>
              <br />
              <select
                  // {...register("cta_button", { required: true })}

                onChange={(e) => {
                  setAdSet((prevValue) => ({
                    ...prevValue,
                    status: e.target.value,
                  }));
                }}
                name="status"
                aria-invalid={errors.cta_button ? 'true' : 'false'}
                className="rounded-md w-100 border px-4 mt-2 py-[12px] text-sm focus:outline-none lg:text-base"
              >
                <option>ACTIVE</option>
                <option>PAUSED</option>
              </select>
              <br />
              {errors.cta_button && <span className="text-danger my-2">This field is required</span>}
            </div>
</div>

              {/* <div className="margin-top-7">
                <label className="mb-2.5 text-sm font-semibold lg:text-base">
                  Language
                </label>
                <select
                  {...register("Language", { required: true })}
                  aria-invalid={errors.Language ? "true" : "false"}
                  className="w-full rounded-md border px-4 py-[12px] text-sm focus:outline-none lg:text-base"
                  id=""
                >
                  <option value="">Language</option>
                  <option value="Select Category">Select Category</option>
                  <option value="Select Category">Select Category</option>
                  <option value="Select Category">Select Category</option>
                </select>
                {errors.Language && (
                  <span className="text-xs text-danger lg:text-sm">
                    This filed is required
                  </span>
                )}
              </div> */}

              {/* <div className="margin-top-7">
                <label className="mb-2.5 text-sm font-semibold lg:text-base">
                  Geo Locations
                </label>
                <select
                  {...register("Locations", { required: true })}
                  aria-invalid={errors.Locations ? "true" : "false"}
                  className="w-full rounded-md border px-4 py-[12px] text-sm focus:outline-none lg:text-base"
                  id=""
                >
                  <option value="">Locations</option>
                  <option value="Select Category">Select Category</option>
                  <option value="Select Category">Select Category</option>
                  <option value="Select Category">Select Category</option>
                </select>
                {errors.Locations && (
                  <span className="text-xs text-danger lg:text-sm">
                    This filed is required
                  </span>
                )}
              </div> */}

              <div className="row mt-3">
              <label className=" mb-2.5 text-sm font-semibold lg:text-base">
              Geo Location
              </label>
                <div className="col">
                <select
              className='col w-100  rounded-md mt-2 border px-4 py-[12px] text-sm focus:outline-none lg:text-base'
              multiple
              // {...register("cta_button", { required: true })}
               value={adset.geo_locations} 
               name="special_ad_categories"
               aria-invalid={errors.cta_button ? "true" : "false"}
               onChange={handleSelectChange}>
        {countries?.map((option) => (
          <option
          className='col mt-2 '
          key={option} 
          value={option}>
            {option}
          </option>
        ))}
      </select> 
                </div>
              </div>

              <div className="w-[300px]">
                <div className="margin-top-7">
                  <label className="mb-2.5 text-sm font-semibold lg:text-base">
                    Age
                  </label>
                  <div className="flex items-center">
                    <div className="col-5">
                      <select
                        // {...register("age", { required: true })}

                        value={adset.age_min.toString()}
                        
                      onChange={(e) => {
                        setAdSet((prevValue) => ({
                          ...prevValue,
                          age_min: parseInt(e.target.value),
                        }));
                      }}
                      name="age_min"

                        aria-invalid={errors.age ? "true" : "false"}
                        className="w-full rounded-md border px-4 py-[12px] text-sm focus:outline-none lg:text-base"
                        id=""
                      >
                      {ageOptions.map((option) => option)}
                      {/* {
                    ageOptions
                      } */}
                      <option value="18">18</option>
                        
                      </select>
                      {errors.age && (
                        <span className="text-xs text-danger lg:text-sm">
                          This filed is required
                        </span>
                      )}
                    </div>

                    <div className="col ps-5">
                      <select
                        // {...register("age", { required: true })}

                        value={adset.age_max.toString()}

                        
                        onChange={(e) => {
                          setAdSet((prevValue) => ({
                            ...prevValue,
                            age_max: parseInt(e.target.value),
                          }));
                        }}
                        name="age_max"
                        aria-invalid={errors.age ? "true" : "false"}
                        className="w-full rounded-md border px-4 py-[12px] text-sm focus:outline-none lg:text-base"
                        id=""
                      >
                       {ageOptions.map((option) =>option)}
                       {/* {
                    ageOptions
                      } */}
                      </select>
                      {errors.age && (
                        <span className="text-xs text-danger lg:text-sm">
                          This filed is required
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <p className="text-[14px] font-normal text-gray-600">
                  Selecting an audience under 18 will limit your AdSetTwo
                  options to some locations and age.
                </p>
              </div>

              <div className="margin-top-7">
                <label className="mb-2.5 text-sm font-semibold lg:text-base">
                  Gender
                </label>
                <div className="">
                  <div>
                    <div className="mb-2">
                      <div className="my-2">
                        <input
                        //  value={adset.genders}
                        
                        defaultChecked={gender.includes("1") && gender.includes("2")}
                       onChange={() => handleGenderChange("All")}
                       
                         name="gender"
                          // {...register("gender", { required: true })}
                          
                          aria-invalid={errors.gender ? "true" : "false"}
                          type="radio"
                          id="all"
                         
                        />
                        <label
                          htmlFor="all"
                          className="ml-2 cursor-pointer text-sm  lg:text-base"
                        >
                          All
                        </label>
                      </div>
                      <div className="my-2">
                        <input
                          {...register("gender", { required: true })}
                          // value={adset.genders}
                          defaultChecked={gender.includes("1")}
                          onChange={() => handleGenderChange("1")}
                         
                          name="gender"
                          aria-invalid={errors.gender ? "true" : "false"}
                          type="radio"
                          id="men"
                        />
                        <label
                          htmlFor="men"
                          className="ml-2 cursor-pointer text-sm  lg:text-base"
                        >
                          Men
                        </label>
                      </div>
                      <div className="my-2">
                        <input
                          {...register("gender", { required: true })}
                          // value={adset.genders}
                        
                          defaultChecked={gender.includes("2")}
                          onChange={() => handleGenderChange("2")}
                         value='Women'
                          name="gender"
                          aria-invalid={errors.gender ? "true" : "false"}
                          type="radio"
                          id="women"
                        />
                        <label
                          htmlFor="women"
                          className="ml-2 cursor-pointer text-sm  lg:text-base"
                        >
                          Women
                        </label>
                      </div>
                    </div>
                    {errors.gender?.type === "required" && (
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
                  type="button"
                  onClick={Submit}
                  className="rounded-md bg-[#63666A] px-6 py-2.5 text-sm text-white lg:text-base"
                >
                  Finish
                </button>
              </div>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdSetTwo;

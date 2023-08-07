
import { useCallback,useState } from "react";
import { useDropzone } from "react-dropzone";
import attached_img from "../../Assets/attatched_image.png";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

const AdsDetails = () => {

   const data = ["NONE", "EMPLOYMENT", "HOUSING", "CREDIT", "ISSUES_ELECTIONS_POLITICS", "ONLINE_GAMBLING_AND_GAMING"]

   const [adsData,setAdsData] = useState({
        
       })



  const navigate = useNavigate();

  const onDrop = useCallback((acceptedFiles) => {
    acceptedFiles.forEach((file) => {
      const reader = new FileReader();
      reader.onabort = () => console.log("file reading was aborted");
      reader.onerror = () => console.log("file reading has failed");
      reader.onload = () => {
        // Do whatever you want with the file contents
        const binaryStr = reader.result;
        console.log(binaryStr);
      };
      reader.readAsArrayBuffer(file);
      console.log("reader.onload", reader.onload);
    });
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  // submission ads details
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();




  const onSubmit = (e) => {
    e.preventDefault();
    // navigate to Schedule and Budgeting
    navigate("/dashboard/ScheduleBudgeting");
  };
  // py-12 px-14
  return (
    <div className="bg-slate-300 mx-auto p-0 lg:container">
      <div className="mt-3 rounded-lg bg-white p-0 shadow-md lg:mt-5">
        <p className="text-center text-sm lg:text-base">Step 1/3</p>
        <div className="content__wrapper__padding">
          <p className="text-xl font-medium text-[#63666A] lg:text-2xl">
            Ads Details
          </p>
          <p className="text-xs font-[400] lg:text-sm">
            Complete your ads details, to engage with your audience
          </p>
          <hr className="mt-3 lg:mt-[30px]" />

          <div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="margin-top-7">
                <label className="mb-2.5 text-sm font-semibold lg:text-base">
                  Ad Name
                </label>
                <input
                  {...register("add_name", { required: true })}
                  aria-invalid={errors.add_name ? "true" : "false"}
                  className="placeholder:font-regular w-full rounded-md border px-4 py-2.5 text-sm focus:outline-none lg:text-base lg:placeholder:font-semibold"
                  placeholder="Ex. Best Restraunt in Town"
                />
                {errors.add_name?.type === "required" && (
                  <span
                    role="alert"
                    className="lg:text-sm text-xs font-normal text-danger"
                  >
                    This filed is required
                  </span>
                )}
              </div>

              <div className="margin-top-7">
                <label className="mb-2.5 text-sm font-semibold lg:text-base">
                  Headline
                </label>

                <input
                  {...register("headline", { required: true })}
                  aria-invalid={errors.headline ? "true" : "false"}
                  className="placeholder:font-regular w-full rounded-md border px-4 py-2.5 text-sm focus:outline-none lg:text-base lg:placeholder:font-semibold"
                  placeholder="Ex. Best Restraunt in Town"
                />
                {errors.headline?.type === "required" && (
                  <span
                    role="alert"
                    className="lg:text-sm text-xs font-normal text-danger"
                  >
                    This filed is required
                  </span>
                )}
              </div>

              {/* Drag and drop image/video */}
              <div>
                <div className="margin-top-7">
                  <label className="mb-2.5 text-sm font-semibold lg:text-base">
                    Ad Image or Video
                  </label>
                  <div className="border-spacing-1 border-2 border-dashed border-gray-700 p-8 lg:p-10">
                    <div {...getRootProps()}>
                      <input {...getInputProps()} />
                      {isDragActive ? (
                        <div>
                          <div className="gap-5 lg:flex">
                            <img
                              className="h-[85px] w-[85px]"
                              src={attached_img}
                              alt=""
                            />
                            <div>
                              <h2 className="text-sm font-[600] text-[#63666A] lg:text-xl">
                                Drag and drop file or browse from your PC.
                              </h2>
                              <span className="mt-2.5 block text-xs font-[500] text-[#63666A] lg:text-base">
                                you can add more than one
                              </span>
                              <span className="mt-3.5 block text-xs font-medium text-[#63666A] lg:text-base">
                                Support jpg, png, gif, mp4 or max 100Mb
                              </span>
                              <button className="lg:mt-5 mt-3 lg:text-base text-sm rounded-md border lg:px-8 px- py-2.5">
                                Add Image/Video
                              </button>
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div>
                          <div className="gap-5 lg:flex">
                            <img
                              className="h-[85px] w-[85px]"
                              src={attached_img}
                              alt=""
                            />
                            <div>
                              <h2 className="text-sm font-[600] text-[#63666A] lg:text-xl">
                                Drag and drop file or browse from your PC.
                              </h2>
                              <span className="mt-2.5 block text-xs font-[500] text-[#63666A] lg:text-base">
                                you can add more than one
                              </span>
                              <span className="mt-3.5 block text-xs font-medium text-[#63666A] lg:text-base">
                                Support jpg, png, gif, mp4 or max 100Mb
                              </span>
                              <button className="lg:mt-5 mt-3 lg:text-base text-sm rounded-md border lg:px-8 px- py-2.5">
                                Add Image/Video
                              </button>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              <div className="margin-top-7">
                <label className="mb-2.5 text-sm font-semibold lg:text-base">
                  CTA Button
                </label>
    <br />
                <select
              className='col rounded-md mt-2 w-100 border px-4 py-[12px] text-sm focus:outline-none lg:text-base'
              multiple
              // {...register("cta_button", { required: true })}
               value={adsData} 
               name="ro"
               aria-invalid={errors.cta_button ? "true" : "false"}
             
               >
        {data?.map((option) => (
          <option
          className='col mt-2'
          key={option} 
          value={option}>
            {option}
          </option>
        ))}
      </select> 
                {errors.cta_button && (
                  <span className="text-danger">This filed is required</span>
                )}
              </div>

              <div className="margin-top-7">
                <label className="mb-2.5 text-sm font-semibold lg:text-base">
                  Website URL
                </label>
                <div className="flex items-center gap-5 rounded-md border px-4 py-[12px]">
                  <div>
                    <input
                      {...register("web_url", { required: true })}
                      aria-invalid={errors.web_url ? "true" : "false"}
                      type="radio"
                      id="other_page"
                      name="web_url"
                    />
                    <label
                      htmlFor="other_page"
                      className="ml-2 text-xs lg:text-base"
                    >
                      Other Pages
                    </label>
                  </div>
                  <div>
                    <input
                      type="radio"
                      id="custom_url"
                      name="web_url"
                      {...register("web_url", { required: true })}
                      aria-invalid={errors.web_url ? "true" : "false"}
                      defaultValue="Custom URL"
                    />
                    <label
                      htmlFor="custom_url"
                      className="ml-2 text-xs lg:text-base"
                    >
                      Custom URL
                    </label>
                  </div>
                </div>
                {errors.web_url?.type === "required" && (
                  <span
                    role="alert"
                    className="lg:text-sm text-xs font-normal text-danger"
                  >
                    This filed is required
                  </span>
                )}
                <div>
                  <input
                    type="text"
                    {...register("enter_url", { required: true })}
                    aria-invalid={errors.enter_url ? "true" : "false"}
                    placeholder="Enter URL"
                    name="enter_url"
                    className="placeholder:font-regular w-full rounded-md border px-4 py-2.5 text-sm focus:outline-none lg:text-base lg:placeholder:font-semibold"
                  />
                </div>
                {errors.enter_url?.type === "required" && (
                  <span
                    role="alert"
                    className="lg:text-sm text-xs font-normal text-danger"
                  >
                    This filed is required
                  </span>
                )}
              </div>

              <div className="margin-top-7">
                <label className="mb-2.5 text-sm font-semibold lg:text-base">
                  Copywriting
                </label>
                <textarea
                  {...register("copywriting", { required: true })}
                  aria-invalid={errors.copywriting ? "true" : "false"}
                  name="copywriting"
                  placeholder="Add your copywriting"
                  className="h-[100px] w-full rounded-md border px-4 py-2.5 text-sm focus:outline-none lg:h-[200px] lg:text-base"
                  id=""
                  // rows="7"
                ></textarea>
                {errors.copywriting?.type === "required" && (
                  <span
                    role="alert"
                    className="lg:text-sm text-xs font-normal text-danger"
                  >
                    This filed is required
                  </span>
                )}
              </div>

              <p className="text-xs font-semibold text-[#63666A] lg:text-sm">
                Your audience will be redirect to this site when they engage and
                click the CTA
              </p>

              <div className="mt-8 flex items-center gap-2">
                <button className="rounded-md border border-gray-900 px-6 py-2.5 text-sm lg:text-base ">
                  Cancel
                </button>
                <button
                  type="submit"
                  // onClick={handleNavigate}
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

export default AdsDetails;

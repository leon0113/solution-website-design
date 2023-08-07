import testImg from "./images/testi-img.png";

const Testimonial = () => {
  return (
    <div className="mb-10">
      <h1 className="my-10 text-center text-3xl font-bold text-black md:text-5xl">
        Testimonial
      </h1>
      <div className="grid bg-gray-900  text-white md:grid-cols-3 ">
        <div className="flex items-center justify-center py-3 md:col-span-2">
          <div className="mx-4 md:mx-20">
            <h1 className="mb-4 text-xl font-bold md:text-3xl">
              OWNER OF SOLIDJACKET COMPANIES
            </h1>
            <h3 className="text-lg">
              “In marketing, one of the most important thing is managing the ads
              statistically. If you aren’t good at statistics, you can prefer
              them with peace in mind.”
            </h3>
            <h4 className="mt-3 text-xs">- Kim Min-jae</h4>
          </div>
        </div>
        <div className="hidden md:block">
          <img
            style={{ width: "315px", height: "315px" }}
            src={testImg}
            alt=""
          />
        </div>
      </div>

      <div className="flex items-center justify-center">
        <div>
          <h1 className="mt-16 mb-3 text-5xl text-black">Start with us</h1>
          <h5 className="mb-4 flex pl-12 text-center text-black">
            Our partnership can start <br /> well with our newcomer <br />{" "}
            campaigns!
          </h5>
          <button
            type="button"
            className="ml-10 rounded border border-gray-100 bg-gray-900 px-8 py-3 font-medium text-gray-100"
          >
            See The Option
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;

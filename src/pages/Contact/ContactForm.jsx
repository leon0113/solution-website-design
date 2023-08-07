import React from "react";

const ContactForm = () => {
  return (
    <div className="mb-10">
      <h1 className="mt-4 text-center text-3xl font-bold text-black">
        Contact Us
      </h1>
      <h6 className="mt-2 text-center font-thin text-gray-700">
        Any question or remarks? Just write us a message!
      </h6>

      {/* Form */}
      <section className="mt-6  py-6 text-gray-900">
        <div className="mx-auto grid max-w-6xl grid-cols-1 px-6 md:grid-cols-3 md:divide-x lg:px-8">
          <div className="rounded-xl  bg-gray-700 pt-10 pb-24  md:px-6">
            <h1 className="pl-2 text-2xl font-semibold text-gray-100">
              Contact Information
            </h1>
            <p className="pt-2 pl-2 pb-4 font-thin text-gray-100">
              Say something to start a live chat!
            </p>
            <div className="space-y-4">
              <p className="flex items-center pl-2 font-thin text-gray-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="mr-2 h-5 w-5 sm:mr-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span>Fake address, 9999 City</span>
              </p>
              <p className="flex items-center pl-2 font-thin text-gray-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="mr-2 h-5 w-5 sm:mr-6"
                >
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                </svg>
                <span>123456789</span>
              </p>
              <p className="flex items-center pl-2 font-thin text-gray-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="mr-2 h-5 w-5 sm:mr-6"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                </svg>
                <span>contact@business.com</span>
              </p>
            </div>
          </div>
          <form
            novalidate=""
            className="col-span-2 mx-10 my-10 flex flex-col space-y-6 py-6 pl-2 md:py-0 md:px-6"
          >
            <div className="justify-between md:flex">
              <label className=" block">
                <span className=" text-gray-600">First Name</span>
                <input
                  type="text"
                  placeholder="First Name"
                  className=" mb-3 block border-b-2 border-gray-700  shadow-sm focus:outline-none "
                />
              </label>
              <label className="block">
                <span className=" text-gray-600">Last Name</span>
                <input
                  type="text"
                  placeholder="Last Name"
                  className=" mb-3 block  border-b-2 border-gray-700  shadow-sm focus:outline-none "
                />
              </label>
            </div>
            <div className="justify-between md:flex">
              <label className="block">
                <span className="text-gray-600">Email </span>
                <input
                  type="email"
                  placeholder="Email"
                  className=" mb-3 block  border-b-2  border-gray-700  shadow-sm focus:outline-none "
                />
              </label>
              <label className="block">
                <span className="text-gray-600">Phone</span>
                <input
                  type="email"
                  placeholder="+1 012 3456 789"
                  className=" block border-b-2  border-gray-700  shadow-sm focus:outline-none"
                />
              </label>
            </div>
            <label className="block">
              <span className="text-gray-600">Message</span>

              <textarea
                name=""
                placeholder="Write your message"
                className=" mb-3 block w-full border-b-2 border-gray-700 py-3 shadow-sm focus:outline-none"
                id=""

              ></textarea>
            </label>
            <button
              type="button"
              className="self-end rounded bg-black px-10 py-2 text-lg font-bold text-gray-100 "
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default ContactForm;

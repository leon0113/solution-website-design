
// export default CreatedAt;
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
// import FacebookLogin from 'react-facebook-login';
import "react-toastify/dist/ReactToastify.css";
import { BiUpArrowAlt, BiUserCircle } from "react-icons/bi";
import DateRangeOutlinedIcon from "@mui/icons-material/DateRangeOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { BsSearch, BsThreeDots } from "react-icons/bs";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import facebook from "../../Assets/facebook.png";
import { GoPrimitiveDot } from "react-icons/go";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { Button, IconButton } from "@material-tailwind/react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";
import active from "../../Assets/active.png";

export function CreatedAt() {
  const steps = [
    "Choose Business Obj",
    "Select Bus Status",
    "Review Suggestion",
    "Create Ad",
    "Run Campaign",
  ];
  const formArray = [1, 2, 3, 4, 5];
  const [formNo, setFormNo] = useState(formArray[0]);
  const [first, setfirst] = useState("");
  const [second, setSeconds] = useState("");
  const [third, setThird] = useState("");
  const [state, setState] = useState({
    name: "",
    dept: "",
    batch: "",
    varsity: "",
    session: "",
    address: "",
    district: "",
    thana: "",
    post: "",
  });

  const navigate = useNavigate();

  let Arr = [
    "Sale Product Online",
    "Get More App Install",
    "Increase Brand Awareness",
    "Get More Store Trafic",
  ];
  const firstdropDownArr = [
    "Sale Product Online With a Website",
    "Sale Product Online Without Website",
  ];
  const secondDropdown = {
    "Sale Product Online With a Website": [
      "New Business",
      "Established Business",
    ],
    "Sale Product Online Without Website": [
      "New Business",
      "Established Business",
    ],
  };
  const inputHandle = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };
  const next = () => {
    if (formNo === 1 && first) {
      console.log(formNo, "formNo");
      setFormNo(formNo + 1);
    } else if (formNo === 2 && third) {
      console.log(formNo, "formNo");
      setFormNo(formNo + 1);
    } else if (formNo === 3) {
      console.log(formNo, "formNo");
      setFormNo(formNo + 1);
    } else if (formNo === 4) {
      console.log(formNo, "formNo");
      setFormNo(formNo + 1);
    } else {
      console.log(formNo, "formNo");
      toast.error("Please fillup all input field");
    }
  };
  const pre = () => {
    setFormNo(formNo - 1);
  };
  const finalSubmit = () => {
    if (state.district && state.thana && state.post) {
      toast.success("form submit success");
    } else {
      toast.error("Please fillup all input field");
    }
  };
  const responseFacebook = (response) => {
    console.log("login result", response);
    let token = response.accessToken;
    const userId = JSON.parse(localStorage.getItem("user"));
    console.log(token, userId.user.id, "asasa");
  };
  const componentClicked = (data) => {
    console.log(data, "data");
  };

  // pagination
  const [active, setActive] = useState(1);

  const getItemProps = (index) => ({
    variant: active === index ? "filled" : "text",
    color: active === index ? "blue" : "blue-gray",
    onClick: () => setActive(index),
    className: "rounded-full",
  });

  const paginationNext = () => {
    if (active === 7) return;

    setActive(active + 1);
  };

  const paginationPrev = () => {
    if (active === 1) return;

    setActive(active - 1);
  };

  // user status fake data
  const userStatusData = [
    {
      title: "Impression",
      count: "537",
      up: "0.08%",
      down: "",
      subtitle: "Across All Network",
    },
    {
      title: "Clicks",
      count: "182",
      up: "0.08%",
      down: "",
      subtitle: "$0.035 each",
    },
    {
      title: "Contact",
      count: "156",
      up: "0.08%",
      down: "",
      subtitle: "$0.035 each",
    },
    {
      title: "Amount Spent",
      count: "$154.560",
      up: "",
      down: "0.08%",
      subtitle: "Across All Network",
    },
  ];

  //  table fake data
  const tableData = [
    {
      offer: "Web & Mobile App Design Offer",
      social: "Cognuitive Solutions Inc.",
      social_icon: facebook,
      isActive: true,
      impression: 123,
      click: 25,
      totalContact: 141,
      cost_per_contact: "$  2.86",
      amount_spent: "$  209",
    },
    {
      offer: "Web & Mobile App Design Offer",
      social: "Cognuitive Solutions Inc.",
      social_icon: facebook,
      isActive: true,
      impression: 123,
      click: 25,
      totalContact: 141,
      cost_per_contact: "$  2.86",
      amount_spent: "$  209",
    },
    {
      offer: "Web & Mobile App Design Offer",
      social: "Cognuitive Solutions Inc.",
      social_icon: facebook,
      isActive: true,
      impression: 123,
      click: 25,
      totalContact: 141,
      cost_per_contact: "$  2.86",
      amount_spent: "$  209",
    },
    {
      offer: "Web & Mobile App Design Offer",
      social: "Cognuitive Solutions Inc.",
      social_icon: facebook,
      isActive: true,
      impression: 123,
      click: 25,
      totalContact: 141,
      cost_per_contact: "$  2.86",
      amount_spent: "$  209",
    },
    {
      offer: "Web & Mobile App Design Offer",
      social: "Cognuitive Solutions Inc.",
      social_icon: facebook,
      isActive: true,
      impression: 123,
      click: 25,
      totalContact: 141,
      cost_per_contact: "$  2.86",
      amount_spent: "$  209",
    },
    {
      offer: "Web & Mobile App Design Offer",
      social: "Cognuitive Solutions Inc.",
      social_icon: facebook,
      isActive: true,
      impression: 123,
      click: 25,
      totalContact: 141,
      cost_per_contact: "$  2.86",
      amount_spent: "$  209",
    },
    {
      offer: "Web & Mobile App Design Offer",
      social: "Cognuitive Solutions Inc.",
      social_icon: facebook,
      isActive: true,
      impression: 123,
      click: 25,
      totalContact: 141,
      cost_per_contact: "$  2.86",
      amount_spent: "$  209",
    },
    {
      offer: "Web & Mobile App Design Offer",
      social: "Cognuitive Solutions Inc.",
      social_icon: facebook,
      isActive: true,
      impression: 123,
      click: 25,
      totalContact: 141,
      cost_per_contact: "$  2.86",
      amount_spent: "$  209",
    },
    {
      offer: "Web & Mobile App Design Offer",
      social: "Cognuitive Solutions Inc.",
      social_icon: facebook,
      isActive: true,
      impression: 123,
      click: 25,
      totalContact: 141,
      cost_per_contact: "$  2.86",
      amount_spent: "$  209",
    },
  ];

  // handle navigate to ads details page
  const handleNavigateToAdsDetails = () => {
    navigate("/dashboard/adsDetails");
  };

  return (
    <div className="bg-slate-300 mx-auto p-0 lg:container-fluid">
      <ToastContainer />

      <div className="mt-5 rounded-xl border bg-white px-4 py-5 shadow-md  ">
        <div className="flex items-center justify-between">
          <p className="lg:text-md font-medium xl:text-[24px]">Ads</p>
          <button className="flex items-center gap-2 rounded-lg border px-3 py-2.5 font-medium shadow-md lg:px-5">
            <span className="text-sm lg:text-base">Compaign</span>
            <span className="rounded-md bg-gray-700 px-2.5 text-sm text-white lg:text-base">
              12
            </span>
          </button>
        </div>

        {/* action buttons */}
        <>
          <div className="mt-5 items-center justify-between xl:flex ">
            <div className="items-center justify-between  gap-2 md:flex">
              <div className="my-2 flex w-full items-center gap-1 rounded-lg border border-[#000] px-3 py-2.5 lg:my-0">
                <AccountCircleOutlinedIcon />
                <select
                  name="account"
                  className="w-full text-sm focus:outline-none"
                  id=""
                >
                  <option value="2 Account Selected">2 Account Selected</option>
                  <option value="2 Account Selected">2 Account Selected</option>
                  <option value="2 Account Selected">2 Account Selected</option>
                </select>
              </div>

              <div className="my-2 flex w-full items-center gap-1 rounded-lg border border-[#000] px-3 py-2.5 lg:my-0">
                <DateRangeOutlinedIcon />
                <select
                  name="account"
                  className="w-full text-sm focus:outline-none"
                  id=""
                >
                  <option value="Last Month">Last Month</option>
                  <option value="Last Month">Last Month</option>
                  <option value="Last Month">Last Month</option>
                </select>
              </div>

              <div className="my-2 flex w-full items-center gap-1 rounded-lg border border-[#000] px-3 py-2.5 lg:my-0">
                <img src={active} className="h-5 w-5" alt="" />
                <select
                  name="account"
                  className="w-full text-sm focus:outline-none"
                  id=""
                >
                  <option value="active">Active</option>
                  <option value="disabled">Disabled</option>
                </select>
              </div>
            </div>

            <div className="items-center justify-between gap-2 md:flex">
              <div className="my-2 w-full lg:my-0 xl:w-auto">
                <button className="w-full rounded-lg border px-3 py-2.5  text-sm ">
                  Export
                </button>
              </div>
              <div className="my-2 w-full lg:my-0 xl:w-auto">
                <button className="w-full rounded-lg border px-3 py-2.5  text-sm ">
                  Connect Ad Account
                </button>
              </div>
              <div className="my-2 w-full lg:my-0 xl:w-auto">
                <button
                  onClick={handleNavigateToAdsDetails}
                  className="w-full rounded-lg border bg-gray-600 px-3 py-2.5 text-sm text-white "
                >
                  Create Ad Compaign
                </button>
              </div>
            </div>
          </div>
        </>

        {/* User activities status */}
        <>
          <div className="mt-8 grid grid-cols-1 gap-2 md:grid-cols-2 lg:mt-[50px] lg:grid-cols-4 lg:gap-4">
            {userStatusData.map((data, i) => (
              <div
                key={i}
                className="w-full rounded-md border-gray-500 shadow-md last:border-none md:pr-5 lg:mb-0 lg:w-auto lg:rounded-none lg:border-r lg:pr-8 lg:shadow-none xl:pr-[70px]"
              >
                <div className="p-4 lg:p-0">
                  <h3 className="text-base font-semibold text-[#63666A]">
                    {data.title}
                  </h3>
                  <div className="flex items-center gap-3">
                    <p className="font-bold lg:text-3xl">{data.count}</p>
                    <button
                      className={`flex items-center rounded-full px-2 py-1 ${
                        data?.up
                          ? "bg-[#DEFFDF] text-[#48DA89]"
                          : "bg-[#FED7CB] text-[#F96E6F]"
                      }`}
                    >
                      <BiUpArrowAlt className="text-lg" />
                      <span className="text-sm">
                        {data?.up ? data?.up : data?.down}
                      </span>
                    </button>
                  </div>
                  <p className="text-xs font-medium text-[#63666A]">
                    Across All Network
                  </p>
                </div>
              </div>
            ))}
          </div>
        </>

        {/* table data */}
        <>
          <div className="mt-12 rounded-lg border p-4">
            <div className="items-center justify-between lg:flex">
              <div className="relative">
                <BsSearch className="text-md absolute left-3 top-3.5 lg:text-xl" />
                <input
                  type="text"
                  name="search"
                  placeholder="Search Compaign"
                  required
                  className="w-full rounded-md border-2 border-gray-700 px-8 py-2.5 focus:outline-none lg:w-[400px] lg:px-12"
                />
              </div>
              <div className="my-2 lg:my-0">
                <div className="flex items-center gap-3">
                  <p className="text-sm font-medium">Showing</p>
                  <select
                    name="lg:text-base text-sm show"
                    id=" w-full"
                    className="rounded bg-[#e5e5e6] px-2 py-1 focus:outline-none"
                  >
                    <option value="2">2</option>
                    <option value="4">4</option>
                    <option value="6">6</option>
                    <option value="8">8</option>
                    <option value="10">10</option>
                  </select>
                  <p className="text-sm font-medium">of 26 results</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell
                      sx={{
                        borderRight: "1px solid #ddd",
                        fontSize: {
                          xs: "12px",
                          md: "16px",
                        },
                      }}
                    >
                      <div className="flex items-center gap-2">
                        <p>COMPAIGN NAME</p>
                        <div>
                          <IoIosArrowUp />
                          <IoIosArrowDown />
                        </div>
                      </div>
                    </TableCell>
                    <TableCell
                      sx={{
                        borderRight: "1px solid #ddd",
                        fontSize: {
                          xs: "12px",
                          md: "16px",
                        },
                      }}
                    >
                      <div className="flex items-center gap-2">
                        <p>IMPRESSION</p>
                        <div>
                          <IoIosArrowUp />
                          <IoIosArrowDown />
                        </div>
                      </div>
                    </TableCell>
                    <TableCell
                      sx={{
                        borderRight: "1px solid #ddd",
                        fontSize: {
                          xs: "12px",
                          md: "16px",
                        },
                      }}
                    >
                      <div className="flex items-center gap-2">
                        <p>CLICKS</p>
                        <div>
                          <IoIosArrowUp />
                          <IoIosArrowDown />
                        </div>
                      </div>
                    </TableCell>
                    <TableCell
                      sx={{
                        borderRight: "1px solid #ddd",
                        fontSize: {
                          xs: "12px",
                          md: "16px",
                        },
                      }}
                    >
                      <div className="flex items-center gap-2">
                        <p className="text-xs lg:text-base">TOTAL CONTACT</p>
                        <div>
                          <IoIosArrowUp />
                          <IoIosArrowDown />
                        </div>
                      </div>
                    </TableCell>
                    <TableCell
                      sx={{
                        borderRight: "1px solid #ddd",
                        fontSize: {
                          xs: "12px",
                          md: "16px",
                        },
                      }}
                    >
                      <div className="flex items-center gap-2">
                        <p className="text-xs lg:text-base">
                          {" "}
                          COST PER CONTACT
                        </p>
                        <div>
                          <IoIosArrowUp />
                          <IoIosArrowDown />
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <p className="text-xs lg:text-base">AMOUNT SPENT</p>
                        <div>
                          <IoIosArrowUp />
                          <IoIosArrowDown />
                        </div>
                      </div>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {tableData.map((data, i) => (
                    <TableRow
                      key={i}
                      sx={{
                        "&:last-child td, &:last-child th": { border: 0 },
                      }}
                    >
                      <TableCell component="th" scope="row">
                        <div className="flex items-center justify-between">
                          <div>
                            <span className="m-0 mb-1 block p-0 text-sm font-medium lg:text-base">
                              {data.offer}
                            </span>
                            <div className="flex items-center gap-1">
                              <img
                                src={data.social_icon}
                                className="w-4"
                                alt=""
                              />
                              <span className="text-[rgba(99, 102, 106, 0.6)] text-xs font-medium">
                                {data.social}
                              </span>
                            </div>
                          </div>
                          <div>
                            {data.isActive ? (
                              <button className="flex items-center rounded-full bg-[#DEFFDF] px-2 py-1 text-[#48DA89]">
                                <GoPrimitiveDot className="" />
                                <span className="text-xs lg:text-base">
                                  Active
                                </span>
                              </button>
                            ) : (
                              <button className="flex items-center rounded-full bg-[#FED7CB] px-3 py-1 text-[#F96E6F]">
                                <GoPrimitiveDot className="" />
                                <span className="text-xs lg:text-base">
                                  Active
                                </span>
                              </button>
                            )}
                          </div>
                        </div>
                      </TableCell>
                      <TableCell
                        sx={{
                          fontSize: {
                            xs: "14px",
                            md: "16px",
                          },
                          fontWeight: "600",
                        }}
                      >
                        {data.impression}
                      </TableCell>
                      <TableCell
                        sx={{
                          fontSize: {
                            xs: "14px",
                            md: "16px",
                          },
                          fontWeight: "600",
                        }}
                      >
                        {data.click}
                      </TableCell>
                      <TableCell
                        sx={{
                          fontSize: {
                            xs: "14px",
                            md: "16px",
                          },
                          fontWeight: "600",
                        }}
                      >
                        {data.totalContact}
                      </TableCell>
                      <TableCell
                        sx={{
                          fontSize: {
                            xs: "14px",
                            md: "16px",
                          },
                          fontWeight: "600",
                        }}
                      >
                        {data.cost_per_contact}
                      </TableCell>
                      <TableCell
                        sx={{
                          fontSize: {
                            xs: "14px",
                            md: "16px",
                          },
                          fontWeight: "600",
                        }}
                      >
                        <div className="flex items-center justify-between">
                          <span>{data.amount_spent}</span>
                          <BsThreeDots className="text-2xl" />
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </>

        {/*  pagination */}
        <>
          <div className="flex items-center justify-end">
            <div className="mt-12 flex items-center justify-center gap-4 rounded-full bg-gray-100 lg:w-1/2">
              <Button
                variant="text"
                color="blue-gray"
                className="flex items-center gap-2 rounded-full"
                onClick={paginationPrev}
                disabled={active === 1}
              >
                <ArrowLeftIcon strokeWidth={2} className="h-4 w-4" /> Previous
              </Button>
              <div className="flex items-center">
                <IconButton {...getItemProps(1)}>1</IconButton>
                <IconButton {...getItemProps(2)}>2</IconButton>
                <IconButton {...getItemProps(3)}>3</IconButton>
                <IconButton {...getItemProps(4)}>4</IconButton>
                <IconButton {...getItemProps(5)}>5</IconButton>
                <IconButton {...getItemProps(6)}>6</IconButton>
                <IconButton {...getItemProps(7)}>7</IconButton>
              </div>
              <Button
                variant="text"
                color="blue-gray"
                className="flex items-center gap-2 rounded-full"
                onClick={paginationNext}
                disabled={active === 7}
              >
                Next
                <ArrowRightIcon strokeWidth={2} className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </>
      </div>
    </div>
  );
}

export default CreatedAt;

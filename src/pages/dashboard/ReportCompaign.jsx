import axios from "axios";
import { useEffect, useState } from "react";
// import DatePicker from "react-datepicker";
// import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import "./reportCompaign.css";
// import {  Switch } from "@mui/material";
// import ReportTabs from './ReportTabs';
import { useLocation, useNavigate } from "react-router-dom";
import vector1 from "../../Assets/Vector.png";
import vector2 from "../../Assets/vector2.png";

const ReportCompaign = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();
  const id = location.state?.id;
  console.log(id, "id123");

  useEffect(() => {
    // Define the API endpoint URL
    const apiUrl = `http://localhost:4000/getcampaign/single-campaign-report/${id}`; // Replace this with your API URL

    // Axios GET request to fetch data from the API
    axios
      .get(apiUrl)
      .then((response) => {
        setData(response.data); // Set the fetched data into the state
        setLoading(false); // Set loading to false once data is received
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false); // Set loading to false in case of an error
      });
  }, []);

  console.log(data, "data");
  const backButton = () => {
    navigate("/dashboard/compaigns");
  };
  return (
    <>
      <div className="container-fluid mt-5">
        <div className="row">
          <div className="row">
            <div className="col-md-8 col-sm-6">
              <h2
                className="fs-2"
                style={{
                  fontWeight: "500",
                  color: "#5E5873",
                  fontSize: "24px",
                }}
              >
                Reports
              </h2>
            </div>
            {/* <div className="col-lg-3 col-md-3">
          <div className="flex shadow w-full items-center gap-2 rounded-md border bg-white px-4 py-[12px] text-sm focus:outline-none lg:text-base">
                    <CalendarMonthIcon style={{ width: "20px" }} />
                    <DatePicker
                    //   selected={startDate}
                    //   onChange={(date) => setStartDate(date)}
                      placeholderText={"Date"}
                    //   filterDate={(date) =>
                    //     date.getDay() !== 6 && date.getDay() !== 0
                    //   } // weekends cancel
                      showYearDropdown // year show and scrolldown alos
                      scrollableYearDropdown
                    />
                  </div>
          </div>
         

          <div className="col-lg-2 col-md-2 card p-0 m-0">
  <div className="d-flex align-items-center shadow ps-5">
    <h2 className="text-start" style={{ fontWeight: '500', fontSize: '16px', marginRight: '10px' }}>Export</h2>
    <span className="text-white" style={{ background: '#5E5873', padding: '2px 7px', borderRadius: '4px' }}>4</span>
  </div>
</div> */}

            <div className="col p-0 text-end">
              <button
                className="btn btn-lg"
                style={{
                  background: "#63666A",
                  color: "white",
                  fontWeight: "500",
                  textTransform: "capitalize",
                }}
                onClick={backButton}
              >
                Back
              </button>
            </div>

            <div className="col ps-0 text-end">
              <button
                className="btn btn-lg"
                style={{
                  background: "#63666A",
                  color: "white",
                  fontWeight: "500",
                  textTransform: "capitalize",
                }}
                onClick={backButton}
              >
                Go to Compaign
              </button>
            </div>
          </div>

          <div className="row my-4">
            <div className="col" >
              <div className="card shadow" style={{height:"140px"}}>
                <div className="card-body">
                  <div className="d-flex">
                    <h4
                      className=""
                      style={{
                        letterSpacing: "0.3px",
                        fontWeight: "500",
                        color: "#5E5873",
                      }}
                    >
                      Spent on 5 Ads in Last 30 Days
                    </h4>
                    <button
                      className="fs-5 rounded-5  ms-3 px-3"
                      style={{
                        background: "rgb(99, 102, 106)",
                        color: "white",
                        fontWeight: "500",
                      }}
                    >
                      $
                    </button>
                  </div>
                  <h2 className="fs-3" style={{ fontWeight: "600" }}>
                    {data?.totalSpend}
                  </h2>
                  <div className="d-flex">
                    <div className="col d-flex align-items-center">
                      <img
                        src={vector1}
                        alt=""
                        style={{ width: "20px", height: "20px" }}
                      />
                      <p style={{ fontWeight: "500" }} className="ps-2">
                        + $154321
                      </p>
                    </div>

                    <div className="col d-flex align-items-center">
                      {" "}
                      <img
                        src={vector2}
                        alt=""
                        style={{ width: "20px", height: "20px" }}
                      />
                      <p style={{ fontWeight: "500" }} className="ps-2">
                        - $154321
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col" >
              <div className="card shadow" style={{height:"140px"}}>
                <div className="card-body">
                  <div className="d-flex">
                    <h4
                      className="fs-4 text-muted"
                      style={{
                        letterSpacing: "0.3px",
                        fontWeight: "500",
                        color: "#5E5873",
                      }}
                    >
                      Reach
                    </h4>
                  </div>
                  <h2 className="fs-2 my-2" style={{ fontWeight: "600" }}>
                    {data?.totalReach}
                  </h2>

                  <h4
                    className="my-2"
                    style={{
                      letterSpacing: "0.5px",
                      fontWeight: "400",
                      color: "#5E5873",
                    }}
                  >
                    Reach
                  </h4>

                  <div className="progress my-2">
                    <div
                      className="progress-bar bg-success"
                      role="progressbar"
                      style={{ width: "75%" }}
                      aria-valuenow="25"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col" >
              <div className="card shadow" style={{height:"140px"}}>
                <div className="card-body">
                  <div className="d-flex">
                    <h4
                      className="fs-4 text-muted"
                      style={{
                        letterSpacing: "0.3px",
                        fontWeight: "500",
                        color: "#5E5873",
                      }}
                    >
                      Engagement
                    </h4>
                  </div>
                  <h2 className="fs-2 my-2" style={{ fontWeight: "600" }}>
                    {data?.totalInlinePostEngagement}
                  </h2>

                  <h4
                    className="my-2"
                    style={{
                      letterSpacing: "0.5px",
                      fontWeight: "400",
                      color: "#5E5873",
                    }}
                  >
                    Engagement
                  </h4>

                  <div className="progress my-2">
                    <div
                      className="progress-bar bg-success"
                      role="progressbar"
                      style={{ width: "75%" }}
                      aria-valuenow="25"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col" >
              <div className="card shadow" style={{height:"140px"}}>
                <div className="card-body">
                  <div className="d-flex">
                    <h4
                      className="fs-4 text-muted"
                      style={{
                        letterSpacing: "0.3px",
                        fontWeight: "500",
                        color: "#5E5873",
                      }}
                    >
                      Link Clicks
                    </h4>
                  </div>
                  <h2 className="fs-2 my-2" style={{ fontWeight: "600" }}>
                    {data?.totalClicks}
                  </h2>

                  <h4
                    className="my-2"
                    style={{
                      letterSpacing: "0.5px",
                      fontWeight: "400",
                      color: "#5E5873",
                    }}
                  >
                    Link Clicks
                  </h4>

                  <div className="progress my-2">
                    <div
                      className="progress-bar bg-info"
                      role="progressbar"
                      style={{ width: "75%" }}
                      aria-valuenow="25"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReportCompaign;

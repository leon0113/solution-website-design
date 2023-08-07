import React from "react";
import "./analytics.css";
import analytics1 from "../Assets/analytics1.png";
import analytics2 from "../Assets/analytics2.png";
import analytics3 from "../Assets/analytics3.png";
import analytics4 from "../Assets/analytics4.png";
import analytics6 from "../Assets/analytics6.png";
import t1 from "../Assets/t1.png";
import t2 from "../Assets/t2.png";
import t3 from "../Assets/t3.png";
import p1 from "../Assets/p1.png";
import p2 from "../Assets/p2.png";
import p3 from "../Assets/p3.png";
import r1 from "../Assets/r1.png";
import chrome from "../Assets/chrome.png";
import r2 from "../Assets/r2.png";
import firefox from "../Assets/firefox.png";
import safari from "../Assets/safari.png";
import ie from "../Assets/ie.png";
import opera from "../Assets/opera.png";
import a1 from "../Assets/a1.png";
import a2 from "../Assets/a2.png";
import a3 from "../Assets/a3.png";
import a4 from "../Assets/a4.png";
import a5 from "../Assets/a5.png";
import a6 from "../Assets/a6.png";
import Donut from "@/charts/Donut";
import LineChart from "@/charts/LineChart";
import OrderBarChart from "@/charts/OrderBarChart";
import RevenueLineChart from "@/charts/RevenueLineChart";
import RevenueBarChart from "@/charts/RevenueBarChart";







const Analytics = () => {
  return (
    <div className="container-fluid m-0 p-0">
      <div className="row justify-content-center m-0 p-0">
        <div className="row m-0 p-0 mt-lg-5 mt-md-5 mt-sm-2 mt-4">
          <div className="col-lg-5 col-md-5 col-sm-12 col-12 ps-0">
            <div className="card shadow">
              <div className="card-body pe-0 ps-0 pt-0">
                <div className="row justify-content-end me-0">
                  <div className="col-7 pt-3">
                    <h3
                      style={{
                        fontWeight: "400",
                        color: "#5E5873",
                        fontSize: "16px",
                      }}
                    >
                      Congratulations 🎉 John!
                    </h3>
                    <p
                      className="text-muted"
                      style={{ fontWeight: "400", fontSize: "14px" }}
                    >
                      You have won gold medal
                    </p>
                    <h1
                      style={{
                        fontWeight: "700",
                        color: "#7367F0",
                        fontSize: "21px",
                      }}
                    >
                      $48.9k
                    </h1>
                    <button
                      className="mt-3"
                      style={{
                        fontWeight: "500",
                        color: "white",
                        fontSize: "11px",
                        background: "#7367F0",
                        width: "100px",
                        height: "35px",
                        borderRadius: "5px",
                      }}
                    >
                      View Sales
                    </button>
                  </div>
                  <div className="col-4 pe-0">
                    <img
                      src={analytics1}
                      alt=""
                      style={{ height: "150px", width: "90px" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-7 col-md-7 col-sm-12 col-12 mt-sm-5 mt-lg-0 mt-md-0 mt-2 pe-0 ps-sm-3 ps-lg-3 ps-md-0">
            <div className="card shadow">
              <div className="card-body pe-0 me-0">
                <div className="row justify-content-end mb-5">
                  <div className="col">
                    <h3
                      style={{
                        fontWeight: "500",
                        fontSize: "20px",
                        color: "#5E5873",
                      }}
                    >
                      Statistics
                    </h3>
                  </div>
                  <div
                    className="col text-muted text-end"
                    style={{
                      fontWeight: "400",
                      fontSize: "13px",
                      color: "#6E6B7B",
                    }}
                  >
                    Updated 1 month ago
                  </div>
                </div>
                <div className="row" style={{ marginBottom: "13px" }}>
                  <div className=" col d-flex">
                    <div style={{ marginRight: "8px" }}>
                      <img
                        src={analytics2}
                        alt=""
                        style={{ width: "48px", height: "48px" }}
                      />
                    </div>
                    <div>
                      <h3
                        style={{
                          color: "#5E5873",
                          width: "46px",
                          height: "22px",
                          fontWeight: "700",
                          fontSize: "18px",
                        }}
                      >
                        230k
                      </h3>
                      <h5
                        style={{
                          fontWeight: "400",
                          fontSize: "14px",
                          lineHeight: "14.65px",
                          color: "#6E6B7B",
                          marginTop: "5px",
                        }}
                      >
                        Sales
                      </h5>
                    </div>
                  </div>

                  <div className=" col d-flex">
                    <div style={{ marginRight: "8px" }}>
                      <img
                        src={analytics3}
                        alt=""
                        style={{ width: "48px", height: "48px" }}
                      />
                    </div>
                    <div>
                      <h3
                        style={{
                          color: "#5E5873",
                          width: "46px",
                          height: "22px",
                          fontWeight: "700",
                          fontSize: "18px",
                        }}
                      >
                        230k
                      </h3>
                      <h5
                        style={{
                          fontWeight: "400",
                          fontSize: "14px",
                          lineHeight: "14.65px",
                          color: "#6E6B7B",
                          marginTop: "5px",
                        }}
                      >
                        Sales
                      </h5>
                    </div>
                  </div>

                  <div className=" col d-flex">
                    <div style={{ marginRight: "8px" }}>
                      <img
                        src={analytics4}
                        alt=""
                        style={{ width: "48px", height: "48px" }}
                      />
                    </div>
                    <div>
                      <h3
                        style={{
                          color: "#5E5873",
                          width: "46px",
                          height: "22px",
                          fontWeight: "700",
                          fontSize: "18px",
                        }}
                      >
                        230k
                      </h3>
                      <h5
                        style={{
                          fontWeight: "400",
                          fontSize: "14px",
                          lineHeight: "14.65px",
                          color: "#6E6B7B",
                          marginTop: "5px",
                        }}
                      >
                        Sales
                      </h5>
                    </div>
                  </div>

                  <div className=" col d-flex">
                    <div style={{ marginRight: "8px" }}>
                      <img
                        src={analytics6}
                        alt=""
                        style={{ width: "48px", height: "48px" }}
                      />
                    </div>
                    <div>
                      <h3
                        style={{
                          color: "#5E5873",
                          width: "46px",
                          height: "22px",
                          fontWeight: "700",
                          fontSize: "18px",
                        }}
                      >
                        230k
                      </h3>
                      <h5
                        style={{
                          fontWeight: "400",
                          fontSize: "14px",
                          lineHeight: "14.65px",
                          color: "#6E6B7B",
                          marginTop: "5px",
                        }}
                      >
                        Sales
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row p-0 m-0 mt-lg-5 mt-md-5 mt-sm-2 mt-4">
          <div className="col-lg-5 col-md-5 col-sm-12 col-12 ps-0">
            <div className="row m-0">
              <div className="col ps-0 pe-0">
                <div className="card shadow">
                  <div className="card-body">
                    <div>
                      <h3
                        style={{
                          fontWeight: "500",
                          fontSize: "16px",
                          color: "#5E5873",
                        }}
                        className="text-muted"
                      >
                        Orders
                      </h3>
                      <h1
                        className="mt-2"
                        style={{
                          fontWeight: "800",
                          fontSize: "24px",
                          color: "#5E5873",
                        }}
                      >
                        2,76k
                      </h1>
                    </div>
                    <div className="mt-4">
                 
 <OrderBarChart/>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col pe-0">
                <div className="card shadow">
                  <div className="card-body">
                    <div>
                      <h3
                        style={{
                          fontWeight: "500",
                          fontSize: "16px",
                          color: "#5E5873",
                        }}
                        className="text-muted"
                      >
                        Profit
                      </h3>
                      <h1
                        className="mt-2"
                        style={{
                          fontWeight: "800",
                          fontSize: "24px",
                          color: "#5E5873",
                        }}
                      >
                        6,24k
                      </h1>
                    </div>
                    <div className="mt-4">
                    
                      <LineChart/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col mt-4">
              <div className="card shadow">
                <div className="card-body ps-4 p-0">
                  <div className="row mt-3 p-0">
                    <div className="col-7">
                      <div>
                        <h2
                          style={{
                            fontWeight: "500",
                            fontSize: "18px",
                            color: "#5E5873",
                            marginBottom: "-10px",
                            lineHeight: "normal",
                          }}
                          className=""
                        >
                          Earning
                        </h2>
                        <p
                          style={{
                            fontWeight: "400",
                            fontSize: "13px",
                            color: "##6E6B7B",
                            marginBottom: "-30px",
                          }}
                          className="text-muted"
                        >
                          This Month
                        </p>
                        <p
                          style={{
                            fontWeight: "500",
                            fontSize: "15.5px",
                            color: "#5E5873",
                          }}
                          className="text-muted"
                        >
                          $4055.56
                        </p>
                        <p
                          style={{
                            fontWeight: "700",
                            fontSize: "12px",
                            color: "#B9B9C3",
                            lineHeight: "normal",
                          }}
                        >
                          68.2% more earning than
                          <br /> last month{" "}
                        </p>
                      </div>
                    </div>
                    <div className="col-5 mt-3">
                    
                      <Donut/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-7 col-md-7 col-sm-12 col-12 mt-sm-5 mt-lg-0 mt-md-0 mt-2 pe-0">
            <div className="card shadow">
              <div className="card-body">
                <div className="row">
                  <div className="col">
                    <div className="row">
                      <div className="col-6 ps-2 pe-0">
                        <h2 className="m-0"
                          style={{
                            fontWeight: "500",
                            fontSize: "16px",
                            color: "#5E5873",
                          }}
                        >
                          Revenue Report
                        </h2>
                      </div>
                      
                    </div>
                    <div className="row mt-5">
                     
                      <RevenueBarChart/>
                    </div>
                  </div>
                  <div className="col text-center">
                    <div className="">
                      <select
                        className="text-center"
                        style={{
                          border: "1px solid #7367F0",
                          color: "#7367F0",
                          width: "80px",
                          borderRadius: "5px",
                          height: "35px",
                        }}
                        aria-label="Default select example"
                      >
                        <option selected className="">
                          2020
                        </option>
                      </select>
                      <h3
                        style={{
                          fontWeight: "500",
                          fontSize: "24px",
                          color: "background: #5E5873",
                        }}
                        className="text-muted mt-4"
                      >
                        $25,852
                      </h3>
                      <h4
                        style={{
                          fontWeight: "",
                          fontSize: "",
                          color: "#7367F0",
                        }}
                        className="mt-4"
                      >
                        $58,800
                      </h4>
                 
                      <RevenueLineChart/>
                      <button
                        style={{
                          width: "131px",
                          height: "38px",
                          color: "white",
                          background: "#7367F0",
                          borderRadius: "5px",
                          fontWeight: "400",
                          fontSize: "14px",
                        }}
                        className="mt-5"
                      >
                        Increase Budget
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row p-0 m-0 mt-lg-5 mt-md-5 mt-sm-2 mt-4">
          <div className="col-lg-8 col-md-8 col-sm-12 col-12 ps-0">
            <div className="card shadow">
              <table>
                <thead
                  className=""
                  style={{
                    color: "#5E5873",
                    fontWeight: "700",
                    backgroundColor: "#F3F2F7",
                    height: "80px",
                  }}
                >
                  <th className="p-3">Company</th>

                  <th>Category</th>
                  <th>Views</th>
                  <th>Revenue</th>
                  <th>Sales</th>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <div className="d-flex align-items-center ps-3">
                        <div>
                          <img
                            src={t1}
                            alt=""
                            style={{
                              width: "32px",
                              height: "32px",
                              verticalAlign: "middle",
                            }}
                          />
                        </div>
                        <div className="d-flex flex-column align-items-center ps-3">
                          <div>
                            <p
                              className="p-1"
                              style={{
                                fontWeight: "700",
                                color: "#6E6B7B",
                                verticalAlign: "middle",
                                lineHeight: "normal",
                              }}
                            >
                              Dixons
                            </p>
                          </div>
                          <div>
                            <p
                              style={{
                                fontWeight: "400",
                                color: "#B9B9C3",
                                fontSize: "12px",
                                margin: "0",
                                marginTop: "1px",
                                lineHeight: "normal",
                              }}
                            >
                              meguc@ruj.io
                            </p>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <div>
                          <img
                            src={t2}
                            alt=""
                            style={{
                              width: "32px",
                              height: "32px",
                              verticalAlign: "middle",
                            }}
                          />
                        </div>
                        <div className="d-flex flex-column align-items-center">
                          <div>
                            <p
                              className="p-1"
                              style={{
                                fontWeight: "400",
                                color: "#6E6B7B",
                                verticalAlign: "middle",
                              }}
                            >
                              Technology
                            </p>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="d-flex flex-column align-items-center">
                        <div>
                          <p
                            className="p-1"
                            style={{
                              fontWeight: "700",
                              color: "#6E6B7B",
                              verticalAlign: "middle",
                              lineHeight: "normal",
                            }}
                          >
                            23.4k
                          </p>
                        </div>
                        <div>
                          <p
                            style={{
                              fontWeight: "400",
                              color: "#B9B9C3",
                              fontSize: "12px",
                              margin: "0",
                              marginTop: "1px",
                              lineHeight: "normal",
                            }}
                          >
                            in 24 hours
                          </p>
                        </div>
                      </div>
                    </td>
                    <td>$891.2</td>
                    <td>
                      <div className="d-flex align-items-center">
                        <div className="d-flex flex-column align-items-center">
                          <div>
                            <p
                              className="p-1"
                              style={{
                                fontWeight: "700",
                                color: "#6E6B7B",
                                verticalAlign: "middle",
                                lineHeight: "normal",
                              }}
                            >
                              68%
                            </p>
                          </div>
                        </div>
                        <div>
                          <img
                            src={t3}
                            alt=""
                            style={{
                              width: "16px",
                              height: "10px",
                              verticalAlign: "middle",
                            }}
                          />
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="d-flex align-items-center ps-3">
                        <div>
                          <img
                            src={t1}
                            alt=""
                            style={{
                              width: "32px",
                              height: "32px",
                              verticalAlign: "middle",
                            }}
                          />
                        </div>
                        <div className="d-flex flex-column align-items-center ps-3">
                          <div>
                            <p
                              className="p-1"
                              style={{
                                fontWeight: "700",
                                color: "#6E6B7B",
                                verticalAlign: "middle",
                                lineHeight: "normal",
                              }}
                            >
                              Dixons
                            </p>
                          </div>
                          <div>
                            <p
                              style={{
                                fontWeight: "400",
                                color: "#B9B9C3",
                                fontSize: "12px",
                                margin: "0",
                                marginTop: "1px",
                                lineHeight: "normal",
                              }}
                            >
                              meguc@ruj.io
                            </p>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <div>
                          <img
                            src={t2}
                            alt=""
                            style={{
                              width: "32px",
                              height: "32px",
                              verticalAlign: "middle",
                            }}
                          />
                        </div>
                        <div className="d-flex flex-column align-items-center">
                          <div>
                            <p
                              className="p-1"
                              style={{
                                fontWeight: "400",
                                color: "#6E6B7B",
                                verticalAlign: "middle",
                              }}
                            >
                              Technology
                            </p>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="d-flex flex-column align-items-center">
                        <div>
                          <p
                            className="p-1"
                            style={{
                              fontWeight: "700",
                              color: "#6E6B7B",
                              verticalAlign: "middle",
                              lineHeight: "normal",
                            }}
                          >
                            23.4k
                          </p>
                        </div>
                        <div>
                          <p
                            style={{
                              fontWeight: "400",
                              color: "#B9B9C3",
                              fontSize: "12px",
                              margin: "0",
                              marginTop: "1px",
                              lineHeight: "normal",
                            }}
                          >
                            in 24 hours
                          </p>
                        </div>
                      </div>
                    </td>
                    <td>$891.2</td>
                    <td>
                      <div className="d-flex align-items-center">
                        <div className="d-flex flex-column align-items-center">
                          <div>
                            <p
                              className="p-1"
                              style={{
                                fontWeight: "700",
                                color: "#6E6B7B",
                                verticalAlign: "middle",
                                lineHeight: "normal",
                              }}
                            >
                              68%
                            </p>
                          </div>
                        </div>
                        <div>
                          <img
                            src={t3}
                            alt=""
                            style={{
                              width: "16px",
                              height: "10px",
                              verticalAlign: "middle",
                            }}
                          />
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="d-flex align-items-center ps-3">
                        <div>
                          <img
                            src={t1}
                            alt=""
                            style={{
                              width: "32px",
                              height: "32px",
                              verticalAlign: "middle",
                            }}
                          />
                        </div>
                        <div className="d-flex flex-column align-items-center ps-3">
                          <div>
                            <p
                              className="p-1"
                              style={{
                                fontWeight: "700",
                                color: "#6E6B7B",
                                verticalAlign: "middle",
                                lineHeight: "normal",
                              }}
                            >
                              Dixons
                            </p>
                          </div>
                          <div>
                            <p
                              style={{
                                fontWeight: "400",
                                color: "#B9B9C3",
                                fontSize: "12px",
                                margin: "0",
                                marginTop: "1px",
                                lineHeight: "normal",
                              }}
                            >
                              meguc@ruj.io
                            </p>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <div>
                          <img
                            src={t2}
                            alt=""
                            style={{
                              width: "32px",
                              height: "32px",
                              verticalAlign: "middle",
                            }}
                          />
                        </div>
                        <div className="d-flex flex-column align-items-center">
                          <div>
                            <p
                              className="p-1"
                              style={{
                                fontWeight: "400",
                                color: "#6E6B7B",
                                verticalAlign: "middle",
                              }}
                            >
                              Technology
                            </p>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="d-flex flex-column align-items-center">
                        <div>
                          <p
                            className="p-1"
                            style={{
                              fontWeight: "700",
                              color: "#6E6B7B",
                              verticalAlign: "middle",
                              lineHeight: "normal",
                            }}
                          >
                            23.4k
                          </p>
                        </div>
                        <div>
                          <p
                            style={{
                              fontWeight: "400",
                              color: "#B9B9C3",
                              fontSize: "12px",
                              margin: "0",
                              marginTop: "1px",
                              lineHeight: "normal",
                            }}
                          >
                            in 24 hours
                          </p>
                        </div>
                      </div>
                    </td>
                    <td>$891.2</td>
                    <td>
                      <div className="d-flex align-items-center">
                        <div className="d-flex flex-column align-items-center">
                          <div>
                            <p
                              className="p-1"
                              style={{
                                fontWeight: "700",
                                color: "#6E6B7B",
                                verticalAlign: "middle",
                                lineHeight: "normal",
                              }}
                            >
                              68%
                            </p>
                          </div>
                        </div>
                        <div>
                          <img
                            src={t3}
                            alt=""
                            style={{
                              width: "16px",
                              height: "10px",
                              verticalAlign: "middle",
                            }}
                          />
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="d-flex align-items-center ps-3">
                        <div>
                          <img
                            src={t1}
                            alt=""
                            style={{
                              width: "32px",
                              height: "32px",
                              verticalAlign: "middle",
                            }}
                          />
                        </div>
                        <div className="d-flex flex-column align-items-center ps-3">
                          <div>
                            <p
                              className="p-1"
                              style={{
                                fontWeight: "700",
                                color: "#6E6B7B",
                                verticalAlign: "middle",
                                lineHeight: "normal",
                              }}
                            >
                              Dixons
                            </p>
                          </div>
                          <div>
                            <p
                              style={{
                                fontWeight: "400",
                                color: "#B9B9C3",
                                fontSize: "12px",
                                margin: "0",
                                marginTop: "1px",
                                lineHeight: "normal",
                              }}
                            >
                              meguc@ruj.io
                            </p>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <div>
                          <img
                            src={t2}
                            alt=""
                            style={{
                              width: "32px",
                              height: "32px",
                              verticalAlign: "middle",
                            }}
                          />
                        </div>
                        <div className="d-flex flex-column align-items-center">
                          <div>
                            <p
                              className="p-1"
                              style={{
                                fontWeight: "400",
                                color: "#6E6B7B",
                                verticalAlign: "middle",
                              }}
                            >
                              Technology
                            </p>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="d-flex flex-column align-items-center">
                        <div>
                          <p
                            className="p-1"
                            style={{
                              fontWeight: "700",
                              color: "#6E6B7B",
                              verticalAlign: "middle",
                              lineHeight: "normal",
                            }}
                          >
                            23.4k
                          </p>
                        </div>
                        <div>
                          <p
                            style={{
                              fontWeight: "400",
                              color: "#B9B9C3",
                              fontSize: "12px",
                              margin: "0",
                              marginTop: "1px",
                              lineHeight: "normal",
                            }}
                          >
                            in 24 hours
                          </p>
                        </div>
                      </div>
                    </td>
                    <td>$891.2</td>
                    <td>
                      <div className="d-flex align-items-center">
                        <div className="d-flex flex-column align-items-center">
                          <div>
                            <p
                              className="p-1"
                              style={{
                                fontWeight: "700",
                                color: "#6E6B7B",
                                verticalAlign: "middle",
                                lineHeight: "normal",
                              }}
                            >
                              68%
                            </p>
                          </div>
                        </div>
                        <div>
                          <img
                            src={t3}
                            alt=""
                            style={{
                              width: "16px",
                              height: "10px",
                              verticalAlign: "middle",
                            }}
                          />
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="d-flex align-items-center ps-3">
                        <div>
                          <img
                            src={t1}
                            alt=""
                            style={{
                              width: "32px",
                              height: "32px",
                              verticalAlign: "middle",
                            }}
                          />
                        </div>
                        <div className="d-flex flex-column align-items-center ps-3">
                          <div>
                            <p
                              className="p-1"
                              style={{
                                fontWeight: "700",
                                color: "#6E6B7B",
                                verticalAlign: "middle",
                                lineHeight: "normal",
                              }}
                            >
                              Dixons
                            </p>
                          </div>
                          <div>
                            <p
                              style={{
                                fontWeight: "400",
                                color: "#B9B9C3",
                                fontSize: "12px",
                                margin: "0",
                                marginTop: "1px",
                                lineHeight: "normal",
                              }}
                            >
                              meguc@ruj.io
                            </p>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <div>
                          <img
                            src={t2}
                            alt=""
                            style={{
                              width: "32px",
                              height: "32px",
                              verticalAlign: "middle",
                            }}
                          />
                        </div>
                        <div className="d-flex flex-column align-items-center">
                          <div>
                            <p
                              className="p-1"
                              style={{
                                fontWeight: "400",
                                color: "#6E6B7B",
                                verticalAlign: "middle",
                              }}
                            >
                              Technology
                            </p>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="d-flex flex-column align-items-center">
                        <div>
                          <p
                            className="p-1"
                            style={{
                              fontWeight: "700",
                              color: "#6E6B7B",
                              verticalAlign: "middle",
                              lineHeight: "normal",
                            }}
                          >
                            23.4k
                          </p>
                        </div>
                        <div>
                          <p
                            style={{
                              fontWeight: "400",
                              color: "#B9B9C3",
                              fontSize: "12px",
                              margin: "0",
                              marginTop: "1px",
                              lineHeight: "normal",
                            }}
                          >
                            in 24 hours
                          </p>
                        </div>
                      </div>
                    </td>
                    <td>$891.2</td>
                    <td>
                      <div className="d-flex align-items-center">
                        <div className="d-flex flex-column align-items-center">
                          <div>
                            <p
                              className="p-1"
                              style={{
                                fontWeight: "700",
                                color: "#6E6B7B",
                                verticalAlign: "middle",
                                lineHeight: "normal",
                              }}
                            >
                              68%
                            </p>
                          </div>
                        </div>
                        <div>
                          <img
                            src={t3}
                            alt=""
                            style={{
                              width: "16px",
                              height: "10px",
                              verticalAlign: "middle",
                            }}
                          />
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="d-flex align-items-center ps-3">
                        <div>
                          <img
                            src={t1}
                            alt=""
                            style={{
                              width: "32px",
                              height: "32px",
                              verticalAlign: "middle",
                            }}
                          />
                        </div>
                        <div className="d-flex flex-column align-items-center ps-3">
                          <div>
                            <p
                              className="p-1"
                              style={{
                                fontWeight: "700",
                                color: "#6E6B7B",
                                verticalAlign: "middle",
                                lineHeight: "normal",
                              }}
                            >
                              Dixons
                            </p>
                          </div>
                          <div>
                            <p
                              style={{
                                fontWeight: "400",
                                color: "#B9B9C3",
                                fontSize: "12px",
                                margin: "0",
                                marginTop: "1px",
                                lineHeight: "normal",
                              }}
                            >
                              meguc@ruj.io
                            </p>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <div>
                          <img
                            src={t2}
                            alt=""
                            style={{
                              width: "32px",
                              height: "32px",
                              verticalAlign: "middle",
                            }}
                          />
                        </div>
                        <div className="d-flex flex-column align-items-center">
                          <div>
                            <p
                              className="p-1"
                              style={{
                                fontWeight: "400",
                                color: "#6E6B7B",
                                verticalAlign: "middle",
                              }}
                            >
                              Technology
                            </p>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="d-flex flex-column align-items-center">
                        <div>
                          <p
                            className="p-1"
                            style={{
                              fontWeight: "700",
                              color: "#6E6B7B",
                              verticalAlign: "middle",
                              lineHeight: "normal",
                            }}
                          >
                            23.4k
                          </p>
                        </div>
                        <div>
                          <p
                            style={{
                              fontWeight: "400",
                              color: "#B9B9C3",
                              fontSize: "12px",
                              margin: "0",
                              marginTop: "1px",
                              lineHeight: "normal",
                            }}
                          >
                            in 24 hours
                          </p>
                        </div>
                      </div>
                    </td>
                    <td>$891.2</td>
                    <td>
                      <div className="d-flex align-items-center">
                        <div className="d-flex flex-column align-items-center">
                          <div>
                            <p
                              className="p-1"
                              style={{
                                fontWeight: "700",
                                color: "#6E6B7B",
                                verticalAlign: "middle",
                                lineHeight: "normal",
                              }}
                            >
                              68%
                            </p>
                          </div>
                        </div>
                        <div>
                          <img
                            src={t3}
                            alt=""
                            style={{
                              width: "16px",
                              height: "10px",
                              verticalAlign: "middle",
                            }}
                          />
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="d-flex align-items-center ps-3">
                        <div>
                          <img
                            src={t1}
                            alt=""
                            style={{
                              width: "32px",
                              height: "32px",
                              verticalAlign: "middle",
                            }}
                          />
                        </div>
                        <div className="d-flex flex-column align-items-center ps-3">
                          <div>
                            <p
                              className="p-1"
                              style={{
                                fontWeight: "700",
                                color: "#6E6B7B",
                                verticalAlign: "middle",
                                lineHeight: "normal",
                              }}
                            >
                              Dixons
                            </p>
                          </div>
                          <div>
                            <p
                              style={{
                                fontWeight: "400",
                                color: "#B9B9C3",
                                fontSize: "12px",
                                margin: "0",
                                marginTop: "1px",
                                lineHeight: "normal",
                              }}
                            >
                              meguc@ruj.io
                            </p>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <div>
                          <img
                            src={t2}
                            alt=""
                            style={{
                              width: "32px",
                              height: "32px",
                              verticalAlign: "middle",
                            }}
                          />
                        </div>
                        <div className="d-flex flex-column align-items-center">
                          <div>
                            <p
                              className="p-1"
                              style={{
                                fontWeight: "400",
                                color: "#6E6B7B",
                                verticalAlign: "middle",
                              }}
                            >
                              Technology
                            </p>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="d-flex flex-column align-items-center">
                        <div>
                          <p
                            className="p-1"
                            style={{
                              fontWeight: "700",
                              color: "#6E6B7B",
                              verticalAlign: "middle",
                              lineHeight: "normal",
                            }}
                          >
                            23.4k
                          </p>
                        </div>
                        <div>
                          <p
                            style={{
                              fontWeight: "400",
                              color: "#B9B9C3",
                              fontSize: "12px",
                              margin: "0",
                              marginTop: "1px",
                              lineHeight: "normal",
                            }}
                          >
                            in 24 hours
                          </p>
                        </div>
                      </div>
                    </td>
                    <td>$891.2</td>
                    <td>
                      <div className="d-flex align-items-center">
                        <div className="d-flex flex-column align-items-center">
                          <div>
                            <p
                              className="p-1"
                              style={{
                                fontWeight: "700",
                                color: "#6E6B7B",
                                verticalAlign: "middle",
                                lineHeight: "normal",
                              }}
                            >
                              68%
                            </p>
                          </div>
                        </div>
                        <div>
                          <img
                            src={t3}
                            alt=""
                            style={{
                              width: "16px",
                              height: "10px",
                              verticalAlign: "middle",
                            }}
                          />
                        </div>
                      </div>
                    </td>
                  </tr>
                  
                </tbody>
              </table>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12 col-12 mt-sm-5 mt-lg-0 mt-md-0 mt-2 pe-0">
            <div className="card shadow">
              <div className="row m-0 p-0">
                <img src={p1} alt="" className="w-100 img-fluid p-0" />
              </div>
              <div className="row ps-4 mt-4">
                <div className="col-3 ps-0 pe-0">
                  <h2
                    style={{
                      fontWeight: "500",
                      fontSize: "21px",
                      color: "#5E5873",
                      lineHeight: "normal",
                    }}
                  >
                    THU
                    <p
                      style={{
                        fontWeight: "500",
                        fontSize: "24px",
                        color: "#5E5873",
                        lineHeight: "normal",
                      }}
                    >
                      29
                    </p>
                  </h2>
                </div>
                <div className="col ps-0 pe-0">
                  <h2
                    style={{
                      fontWeight: "500",
                      fontSize: "18px",
                      color: "#5E5873",
                      lineHeight: "normal",
                    }}
                  >
                    Developer Meetup
                  </h2>
                  <p
                    style={{
                      fontWeight: "400",
                      fontSize: "14px",
                      color: "#6E6B7B",
                      lineHeight: "normal",
                    }}
                  >
                    Meet World Popular developers
                  </p>
                </div>
              </div>
              <div className="row mt-3">
                <div className="d-flex ps-5">
                  <div
                    style={{
                      background: "#7367F0",
                      height: "30px",
                      width: "30px",
                    }}
                  ></div>
                  <div className="d-flex flex-column align-items-center ps-3">
                    <div>
                      <p
                        className="p-1"
                        style={{
                          fontWeight: "700",
                          color: "#6E6B7B",
                          verticalAlign: "middle",
                          lineHeight: "normal",
                          marginRight: "-45px",
                        }}
                      >
                        Sat, May 25, 2020
                      </p>
                    </div>
                    <div>
                      <p
                        style={{
                          fontWeight: "400",
                          color: "#B9B9C3",
                          fontSize: "12px",
                          margin: "0",
                          marginTop: "1px",
                          lineHeight: "normal",
                        }}
                      >
                        10:AM to 6:PM
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row mt-3">
                <div className="d-flex ps-5">
                  <img src={p2} alt=""  
                   style={{
                      height: "35px",
                      width: "35px",
                    }}/>
                  <div className="d-flex flex-column align-items-center ps-3">
                    <div>
                      <p
                        className="p-1"
                        style={{
                          fontWeight: "700",
                          color: "#6E6B7B",
                          verticalAlign: "middle",
                          lineHeight: "normal",
                          marginLeft: "-35px",
                        }}
                      >
                        Central Park
                      </p>
                    </div>
                    <div>
                      <p
                        className="ps-1"
                        style={{
                          fontWeight: "400",
                          color: "#B9B9C3",
                          fontSize: "12px",
                          margin: "0",
                          marginTop: "1px",
                          lineHeight: "normal",
                        }}
                      >
                        Manhattan,New York City
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row mt-3">
                <img src={p3} alt="" style={{width:'180px',height:'45px'}} className="col ps-4 text-end pe-0" />
                <p style={{color:'#5E5873',fontWeight:'500',fontSize:'14px'}} className="col pe-0 ps-0">+42</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row p-0 m-0 mt-lg-5 mt-md-5 mt-sm-2 mt-4">
          <div className="col-lg-4 col-md-4 col-sm-12 col-12 ps-0">
            <div className="card shadow">
              <div className="card-body p-0 ps-3">
               <div className="row mt-2">
               <div className="col-10">
                <h2 style={{fontWeight:'500',fontSize:'18px',color:'#5E5873'}}>Browser States</h2></div>
                <div className="col-2 ps-0 pe-0 text-end pt-3"><img src={r1} alt="" style={{width:'4px',height:'13px'}}/></div>
               </div>
               <div className="row">
                <p style={{fontWeight:"400",fontSize:"12px",lineHeight:"14px",color:'#6E6B7B'}}>Counter August 2020</p>
               </div>
               <div className="row mt-4">
                <div className="col">
                  <img src={chrome} alt="" style={{width:'28px',height:"28px"}} />
                </div>
                <div className="col"><p style={{fontWeight:"500",fontSize:"12px",color:'#5E5873',lineHeight:'normal'}}>
                  Google Chrome</p></div>
                <div className="col"><p style={{fontWeight:"500",fontSize:'14px'}}>59.3%</p></div>
                <div className="col"><img src={r2} alt="" style={{width:'38px',height:'38px'}} /></div>
               </div>
               <div className="row mt-3">
                <div className="col">
                  <img src={firefox} alt="" style={{width:'28px',height:"28px"}} />
                </div>
                <div className="col"><p style={{fontWeight:"500",fontSize:"12px",color:'#5E5873',lineHeight:'normal'}}>
                  Mozilla FireFox</p></div>
                <div className="col"><p style={{fontWeight:"500",fontSize:'14px'}}>59.3%</p></div>
                <div className="col"><img src={r2} alt="" style={{width:'38px',height:'38px'}} /></div>
               </div>
               <div className="row mt-3">
                <div className="col">
                  <img src={safari} alt="" style={{width:'28px',height:"28px"}} />
                </div>
                <div className="col"><p style={{fontWeight:"500",fontSize:"12px",color:'#5E5873',lineHeight:'normal'}}>
                  Apple Safari</p></div>
                <div className="col"><p style={{fontWeight:"500",fontSize:'14px'}}>59.3%</p></div>
                <div className="col"><img src={r2} alt="" style={{width:'38px',height:'38px'}} /></div>
               </div>
               <div className="row mt-3">
                <div className="col">
                  <img src={ie} alt="" style={{width:'28px',height:"28px"}} />
                </div>
                <div className="col"><p style={{fontWeight:"500",fontSize:"12px",color:'#5E5873',lineHeight:'normal'}}>
                  Internet Explorer</p></div>
                <div className="col"><p style={{fontWeight:"500",fontSize:'14px'}}>59.3%</p></div>
                <div className="col"><img src={r2} alt="" style={{width:'38px',height:'38px'}} /></div>
               </div>
               <div className="row mt-3">
                <div className="col">
                  <img src={opera} alt="" style={{width:'28px',height:"28px"}} />
                </div>
                <div className="col"><p style={{fontWeight:"500",fontSize:"12px",color:'#5E5873',lineHeight:'normal'}}>
                  Opera Mini</p></div>
                <div className="col"><p style={{fontWeight:"500",fontSize:'14px'}}>59.3%</p></div>
                <div className="col"><img src={r2} alt="" style={{width:'38px',height:'38px'}} /></div>
               </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12 col-12">
          <div className="card shadow">
            <div className="card-body p-0 ps-3">
            <div className="row mt-2">
              <div className="col-10">
                <h2 style={{fontSize:'18px',fontWeight:'500',color:'#5E5873'}}>Goal Overview
                </h2></div>
              <div className="col-2 pt-3 p-0">
                <div style={{background:'#BABFC7',height:'17px',width:'17px'}} className="rounded-circle"></div>
              </div>
            </div>
            <div className="row">
              <img src={a1} alt="" style={{width:'267px',height:'250px'}} />
              <p className="text-muted text-center" style={{fontWeight:'400',fontSize:'14px',color:'#B9B9C3'}}>completed</p>
              <h2 style={{fontWeight:'700',fontSize:'21px',color:'#5E5873'}} className="text-center">786,617</h2>
            </div>
            </div>
          </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12 col-12 pe-0">
            <div className="card shadow">
              <div className="card-body p-0 ps-3">
              <div className="row mt-2">
               <div className="col-10">
                <h2 style={{fontWeight:'500',fontSize:'18px',color:'#5E5873'}}>Browser States</h2></div>
                <div className="col-2 ps-0 pe-0 text-end pt-3"><img src={r1} alt="" style={{width:'4px',height:'13px'}}/></div>
               </div>
               <div className="row mt-4">
                <div className="col d-flex align-items-center ps-3">
                        <div>
                          <img
                            src={a2}
                            alt=""
                            style={{
                              width: "42px",
                              height: "42px",
                              verticalAlign: "middle",
                            }}
                          />
                        </div>
                        <div className="d-flex flex-column align-items-center ps-3">
                          <div className="pe-2">
                            <p
                              className="p-2"
                              style={{
                                fontWeight: "500",
                                color: "#6E6B7B",
                                fontSize:'14px',
                                verticalAlign: "middle",
                                lineHeight: "normal",
                              }}
                            >
                              Wallet
                            </p>
                          </div>
                          <div>
                            <p
                              style={{
                                fontWeight: "400",
                                color: "#B9B9C3",
                                fontSize: "12px",
                                margin: "0",
                                marginTop: "1px",
                                lineHeight: "normal",
                              }}
                            >
                              Starbucks
                            </p>
                          </div>
                        </div>
                      </div>
                <div className="col-3"><h2 style={{fontWeight:'700',fontSize:'14px',color:'#EA5455'}}>-$74</h2></div>
               </div>
               <div className="row mt-3">
                <div className="col d-flex align-items-center ps-3">
                        <div>
                          <img
                            src={a3}
                            alt=""
                            style={{
                              width: "42px",
                              height: "42px",
                              verticalAlign: "middle",
                            }}
                          />
                        </div>
                        <div className="d-flex flex-column align-items-center ps-3">
                          <div>
                            <p
                              className="p-2"
                              style={{
                                fontWeight: "500",
                                color: "#6E6B7B",
                                fontSize:'14px',
                                verticalAlign: "middle",
                                lineHeight: "normal",
                              }}
                            >
                              Bank Transfer
                            </p>
                          </div>
                          <div className="pe-4">
                            <p
                              style={{
                                fontWeight: "400",
                                color: "#B9B9C3",
                                fontSize: "12px",
                                margin: "0",
                                marginTop: "1px",
                                lineHeight: "normal",
                              }}
                            >
                              Add Money
                            </p>
                          </div>
                        </div>
                      </div>
                <div className="col-3"><h2 style={{fontWeight:'700',fontSize:'14px',color:'#EA5455'}}>+$480</h2></div>
               </div>
               <div className="row mt-3">
                <div className="col d-flex align-items-center ps-3">
                        <div>
                          <img
                            src={a4}
                            alt=""
                            style={{
                              width: "42px",
                              height: "42px",
                              verticalAlign: "middle",
                            }}
                          />
                        </div>
                        <div className="d-flex flex-column align-items-center ps-3">
                          <div className="pe-3">
                            <p
                              className="p-2"
                              style={{
                                fontWeight: "500",
                                color: "#6E6B7B",
                                fontSize:'14px',
                                verticalAlign: "middle",
                                lineHeight: "normal",
                              }}
                            >
                             Paypal
                            </p>
                          </div>
                          <div>
                            <p
                              style={{
                                fontWeight: "400",
                                color: "#B9B9C3",
                                fontSize: "12px",
                                margin: "0",
                                marginTop: "1px",
                                lineHeight: "normal",
                              }}
                            >
                              Add Money
                            </p>
                          </div>
                        </div>
                      </div>
                <div className="col-3"><h2 style={{fontWeight:'700',fontSize:'14px',color:'#EA5455'}}>+$590</h2></div>
               </div>
               <div className="row mt-3">
                <div className="col d-flex align-items-center ps-3">
                        <div>
                          <img
                            src={a5}
                            alt=""
                            style={{
                              width: "42px",
                              height: "42px",
                              verticalAlign: "middle",
                            }}
                          />
                        </div>
                        <div className="d-flex flex-column align-items-center ps-3">
                          <div>
                            <p
                              className="p-2"
                              style={{
                                fontWeight: "500",
                                color: "#6E6B7B",
                                fontSize:'14px',
                                verticalAlign: "middle",
                                lineHeight: "normal",
                              }}
                            >
                              Master Card
                            </p>
                          </div>
                          <div className="pe-3">
                            <p
                              style={{
                                fontWeight: "400",
                                color: "#B9B9C3",
                                fontSize: "12px",
                                margin: "0",
                                marginTop: "1px",
                                lineHeight: "normal",
                              }}
                            >
                             Order Food
                            </p>
                          </div>
                        </div>
                      </div>
                <div className="col-3"><h2 style={{fontWeight:'700',fontSize:'14px',color:'#EA5455'}}>-$23</h2></div>
               </div>
               <div className="row mt-4">
                <div className="col d-flex align-items-center ps-3">
                        <div>
                          <img
                            src={a6}
                            alt=""
                            style={{
                              width: "42px",
                              height: "42px",
                              verticalAlign: "middle",
                            }}
                          />
                        </div>
                        <div className="d-flex flex-column align-items-center ps-3">
                          <div>
                            <p
                              className="p-2"
                              style={{
                                fontWeight: "500",
                                color: "#6E6B7B",
                                fontSize:'14px',
                                verticalAlign: "middle",
                                lineHeight: "normal",
                              }}
                            >
                              Transfer
                            </p>
                          </div>
                          <div className="pe-2">
                            <p
                              style={{
                                fontWeight: "400",
                                color: "#B9B9C3",
                                fontSize: "12px",
                                margin: "0",
                                marginTop: "1px",
                                lineHeight: "normal",
                              }}
                            >
                              Refund
                            </p>
                          </div>
                        </div>
                      </div>
                <div className="col-3"><h2 style={{fontWeight:'700',fontSize:'14px',color:'#EA5455'}}>+$98</h2></div>
               </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    
    </div>
  );
};

export default Analytics;

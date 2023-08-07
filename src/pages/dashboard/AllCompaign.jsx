import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./compaigns.css";
// import axios from '@/redux/axios/axios';
import { allCompaigns } from "../../redux/features/compaign/compaignSlice";

export default function AllCompaign() {
  const [selectedItems, setSelectedItems] = useState([]);
  const [data, setData] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [id, setId] = useState("");
  console.log(
    "🚀 ~ file: AllCompaign.jsx:13 ~ AllCompaign ~ searchValue:",
    searchValue
  );
  const navigate = useNavigate();

  const dispatch = useDispatch();

  useEffect(() => {
    const getData = async () => {
      const data = await dispatch(allCompaigns());
      console.log(
        "🚀 ~ file: AllCompaign.jsx:34 ~ useEffect ~ data:",
        data.payload.campaigns
      );
      setData(data.payload.campaigns);
    };
    getData();
  }, []);
  console.log("All Data:", data);

  const handleSelectAll = (event) => {
    if (event.target.checked) {
      const checkboxes = document.querySelectorAll(".checkbox");
      const selected = Array.from(checkboxes).map((checkbox) =>
        checkbox.getAttribute("data-id")
      );
      setSelectedItems(selected);
    } else {
      setSelectedItems([]);
    }
  };

  const handleCheckboxChange = (event) => {
    const itemId = event.target.getAttribute("data-id");
    if (event.target.checked) {
      setSelectedItems((prevSelectedItems) => [...prevSelectedItems, itemId]);
    } else {
      setSelectedItems((prevSelectedItems) =>
        prevSelectedItems.filter((id) => id !== itemId)
      );
    }
  };

  const toggleUserStatus = (userId) => {
    console.log(data);
    const userIndex = data?.findIndex((user) => user.id === userId);
    const user = data[userIndex];
    const isActive =
      user?.status === "ACTIVE" && user?.user_status_title !== "PAUSED";

    const updatedUser = {
      ...user,
      status: isActive ? "PAUSED" : "ACTIVE",
    };

    const updatedUsers = [...data];
    updatedUsers[userIndex] = updatedUser;
    setData(updatedUsers);

    const newStatus = isActive ? "PAUSED" : "ACTIVE";
    console.log(userId, "USER ID");

    axios
      .put(`auth/block-user/${userId}`, {
        status: newStatus,
      })
      .then(() => {
        toast(` User status updated successfully`, {
          theme: "light",
          bgColor: "grey",
        });
      })
      .catch((error) => {
        console.error(`Error updating user ${userId} status:`, error);
      });
  };

  // const filteredData = data?.filter((item) =>
  //   item.name.toLowerCase().includes(searchValue.toLowerCase())
  // );
  const createCompaign = (e) => {
    e.preventDefault();
    navigate("/dashboard/chose-compaign");
  };

  const filteredData = [
    {
      name: "SOC 2 Type II -  Share on Facebook",
      status: "Active",
      optimization: "View",
      reports: "View",
      alerts: "view",
    },
    {
      name: "SOC 2 Type II -  Share on Facebook",
      status: "Finished",
      optimization: "View",
      reports: "View",
      alerts: "view",
    },
    {
      name: "SOC 2 Type II -  Share on Facebook",
      status: "Active",
      optimization: "View",
      reports: "View",
      alerts: "view",
    },
    {
      name: "SOC 2 Type II -  Share on Facebook",
      status: "Active",
      optimization: "View",
      reports: "View",
      alerts: "view",
    },
    {
      name: "SOC 2 Type II -  Share on Facebook",
      status: "Paused",
      optimization: "View",
      reports: "View",
      alerts: "view",
    },
    {
      name: "SOC 2 Type II -  Share on Facebook",
      status: "Active",
      optimization: "View",
      reports: "View",
      alerts: "view",
    },
    {
      name: "SOC 2 Type II -  Share on Facebook",
      status: "Paused",
      optimization: "View",
      reports: "View",
      alerts: "view",
    },
  ];
  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col card">
            <div className="row card-body">
              <h1
                style={{
                  color: "#63666A",
                  fontWeight: "500",
                  fontSize: "24px",
                  letterSpacing: "0.3px",
                }}
              >
                All Compaign
              </h1>
            </div>

            <div
              className="row ps-3"
              style={{ verticalAlign: "center", alignItems: "center" }}
            >
              <div className="col">
                <div
                  className="input-group rounded-pill w-75"
                  style={{ border: "2px solid #000000" }}
                >
                  <input
                    className="form-control w-100 rounded-pill border-0"
                    type="search"
                    id="any"
                    placeholder="Search Users"
                    aria-label="Search"
                    style={{ borderRight: "none" }}
                    value={searchValue}
                    onChange={(event) => setSearchValue(event.target.value)}
                    onInput={(event) => {
                      const input = event.target;
                      if (input.value) {
                        input.style.borderRight = "none";
                      } else {
                        input.style.borderRight = "";
                      }
                    }}
                  />
                </div>
              </div>

              <div className="col text-end">
                <button
                  className="btn"
                  style={{
                    background: "#63666A",
                    color: "white",
                    fontWeight: "500",
                    textTransform: "capitalize",
                  }}
                  onClick={createCompaign}
                  // disabled={selectedItems.length === 0}
                >
                  Create New Compaign
                </button>
              </div>
            </div>

            <div className="row">
              <div className="col ps-4">
                <table className="mt-4 table text-center">
                  <thead className="border-2">
                    <tr>
                      <th className="fw-bold pe-0" scope="col">
                        <input
                          type="checkbox"
                          id="selectAll"
                          className=""
                          onChange={handleSelectAll}
                        />
                      </th>
                      <th
                        className="fw-bold ps-3 text-start"
                        scope="col"
                        style={{ borderRight: "1px solid black" }}
                      >
                        Name
                      </th>
                      <th
                        className="fw-bold"
                        scope="col"
                        style={{ borderRight: "1px solid black" }}
                      >
                        Status
                      </th>
                      <th
                        className="fw-bold"
                        scope="col"
                        style={{ borderRight: "1px solid black" }}
                      >
                        Optimization
                      </th>
                      <th
                        className="fw-bold"
                        scope="col"
                        style={{ borderRight: "1px solid black" }}
                      >
                        Reports
                      </th>
                      <th className="fw-bold" scope="col">
                        Alerts
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    {filteredData?.map((item, i) => {
                      return (
                        <tr key={i}>
                          <td className="pe-0">
                            <input type="checkbox" className="checkbox" />
                          </td>
                          <td className="ps-0">
                            <div className="d-flex align-items-center ps-3">
                              <div>
                                <img
                                  src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
                                  alt=""
                                  style={{
                                    width: "32px",
                                    height: "32px",
                                    verticalAlign: "middle",
                                  }}
                                />
                              </div>
                              <div className=" ps-3">
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
                                    {item.name}
                                  </p>
                                </div>
                                <div className="flex items-center gap-2 font-medium mt-2">
                                  <h6>Sender</h6>
                                  <h6>2 groups</h6>
                                </div>
                              </div>
                            </div>
                          </td>

                          <th className="">
                            {item.status === "Active" ? (
                              <button className="rounded-md bg-[#28C76F54] px-3 py-2 font-semibold text-gray-800">
                                Active
                              </button>
                            ) : item.status === "Paused" ? (
                              <button className="rounded-md bg-[#FFF20366] px-3 py-2 font-semibold text-gray-800">
                                Paused
                              </button>
                            ) : (
                              <button className="rounded-md bg-[#20E0A5] px-3 py-2 font-semibold text-white">
                                Finished
                              </button>
                            )}
                          </th>

                          <td>
                            <button className="rounded-md bg-[#679CF6] px-3 py-2 font-semibold text-white">
                              View
                            </button>
                          </td>
                          <td>
                            <button
                              className="rounded-md bg-[#679CF6] px-3 py-2 font-semibold text-white"
                              onClick={() => {
                                navigate("/dashboard/report", {
                                  state: { id: item.id },
                                });
                              }}
                            >
                              View
                            </button>
                          </td>
                          <td>
                            <button className="rounded-md bg-[#679CF6] px-3 py-2 font-semibold text-white">
                              View
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

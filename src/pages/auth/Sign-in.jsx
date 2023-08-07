import React, { useState } from "react";
import LoginIMG from "../../Assets/LoginIMG.png";
import axios from "axios";
import "./signin.css";
import { useNavigate, Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
// import Modal from 'react-bootstrap/Modal';
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBTypography,
  MDBCardImage,
  MDBCheckbox,
} from "mdb-react-ui-kit";

export function SignIn() {
  const [check, setCheck] = useState(false);
  const [errors, setErrors] = useState({});
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const Navigate = useNavigate();
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };
  // const Navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
    } else {
      setErrors(validationErrors);
    }

    setData({
      email: "",
      password: "",
    });
  };

  const validateForm = () => {
    let errors = {};

    if (!data.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
      errors.email = "Invalid email address";
    }

    if (!data.password) {
      errors.password = "Password is required";
    }

    return errors;
  };

  const login = async (e) => {
    e.preventDefault()
    // use
    if (check) {
      let result = await fetch("http://localhost:4000/auth/login", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });
      result = await result.json()
      .then(Result => {

          if (Result.success === false) {
            console.log(Result.message );
              toast.error(Result.message, {
                  position: "top-center"
              });
          } else  if (Result.success === true) {
              if (Result.Role[0].title === 'user') {
                  toast.success(Result.message, {
                      position: "top-center"
                  });
                  Navigate('/dashboard')
                  window.localStorage.setItem("user", JSON.stringify(Result))
                 
                  window.location.href = '/dashboard/userdashboard' ;
              } else {
                if (Result.Role[0].title === 'admin')
                  toast.success(Result.message, {
                      position: "top-center"
                  })
                  Navigate('/dashboard')
                  window.localStorage.setItem("user", JSON.stringify(Result))
                  
                  window.location.href = '/dashboard' ;
              }
             

          }
      })
  }  
}  
  
    
      
                         

  return (
    <>
      <form action="" onSubmit={handleSubmit} autoComplete="none">
        <div className="container-fluid">
          <div className="row align-item-center justify-content-center">
            <MDBContainer className="">
              <div className="row justify-content-center">
                <div className="col-10">
                  <div className="main-row">
                    <MDBRow className="d-flex">
                      <div className="col-sm-12 col-md-6 col-lg-6 col-12 mt-sm-5 mt-lg-0 mt-md-0 d-flex align-items-center order-lg-1 order-md-2 order-sm-2 order-2  mt-2">
                        <MDBCardImage
                          src={LoginIMG}
                          className="img-fluid"
                          style={{ width: "90%" }}
                        />
                      </div>

                      <MDBCol
                        md="6"
                        lg="6"
                        className="col-sm-10  order-lg-2 order-md-2 order-sm-1 d-flex flex-column align-items-center  order-1 text-start"
                      >
                        <div
                          className="w-100 text-start"
                          style={{ marginTop: "80px" }}
                        >
                          <MDBTypography
                            tag="h2"
                            variant="display-6"
                            className="typo"
                          >
                            Welcome to PS 👋🏻
                          </MDBTypography>
                        </div>

                        <div className="w-100 mb-4 mt-3">
                          <p className="pp" style={{ lineHeight: "normal" }}>
                            Welcome to `Prospective Solutions, please put your
                            login credential below to start using the app{" "}
                          </p>
                        </div>

                        <div className="row w-100 mt-4">
                          <div className="col-4">
                            <label
                              style={{ color: "black" }}
                              htmlFor="exampleFormControlInput1"
                              className="form-label fw-bold m-0"
                            >
                              E-mail
                            </label>
                          </div>
                          <div className="col-sm-8">
                            <input
                              name="email"
                              type="email"
                              className="form-control rounded-5 border border"
                              autoComplete="off"
                              value={data.email}
                              onChange={handleChange}
                            />
                            <div className="mt-2" style={{color:'red'}}>
                              {errors.email && <div>{errors.email}</div>}
                            </div>
                          </div>
                        </div>
                        <div className="row w-100 my-3">
                          <div className="col-4">
                            <label
                              style={{ color: "black" }}
                              htmlFor="exampleFormControlInput1"
                              className="form-label fw-bold m-0"
                            >
                              Password
                            </label>
                          </div>
                          <div className="col-sm-8">
                            <input
                              name="password"
                              value={data.password}
                              type="Password"
                              className="form-control rounded-5 border"
                              autoComplete="off"
                              onChange={handleChange}
                            />
                            <div className="mt-2" style={{color:'red'}}>
                              {errors.password && <div>{errors.password}</div>}
                            </div>
                          </div>
                        </div>

                        <div className="row w-100">
                          <div className="col text-end">
                            <Link
                              style={{
                                color: "#7367F0",
                                fontWeight: "700",
                                fontSize: "15px",
                                lineHeight: "24px",
                              }}
                              to="/forget-password"
                            >
                              Forgot Password?
                            </Link>
                          </div>
                        </div>
                        <hr
                          style={{
                            width: "100%",
                            color: "rgba(0, 0, 0, 0.2)",
                            border: "2px solid",
                            marginTop: "20px",
                          }}
                        />

                        <div className="row w-100 mt-4">
                          <div className="col">
                            <MDBCheckbox
                              style={{
                                fontWeight: "500",
                                color: "#000000 60%",
                              }}
                              className="flexCheck ps-0"
                              value=""
                              id="flexCheckDefault"
                              label="Remember me"
                              onClick={() => {
                                setCheck(!check);
                              }}
                            />
                          </div>
                          <div className="col text-end">
                            <button
                              style={{
                                background: "#7367F0",
                                color: "white",
                                textTransform: "capitalize",
                              }}
                              className=" btn mb-4"
                              onClick={login}
                            >
                              Sign in
                            </button>
                          </div>
                        </div>

                        <div
                          className="row d-flex w-100"
                          style={{ marginLeft: "100px" }}
                        >
                          <div className="col p-0 text-end">
                            <p style={{ marginRight: "-10px" }}>
                              Don't have any account?
                            </p>
                          </div>
                          <div className="col" style={{ marginTop: "12px" }}>
                            <Link
                              to="/auth/sign-up"
                              style={{ color: "#7367F0" }}
                            >
                              SignUp
                            </Link>
                          </div>
                        </div>
                      </MDBCol>
                      {/* <ToastContainer position="top-center" /> */}
                    </MDBRow>
                  </div>
                </div>
              </div>
            </MDBContainer>
          </div>
        </div>
      </form>
    </>
  );
                            } 
                       

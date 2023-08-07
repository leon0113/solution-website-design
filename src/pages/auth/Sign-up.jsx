import React, { useState } from "react";
import signUp from "./../../Assets/signUP.png";
import "./signup.css";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
// import Modal from 'react-bootstrap/Modal';
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBTypography,
  //   MDBCard,
  //   MDBCardBody,
  MDBCardImage,
  MDBCheckbox,
} from "mdb-react-ui-kit";

export function SignUp() {

  const options = [{ title: 'Punjab' }, { id: 2, title: 'Sindh' }];

  const [errors, setErrors] = useState({});
  const [check, setCheck] = useState(false);

  const [data, setData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    industry: "",
    company: "",
    province: options[0].title

  });
  const Navigate = useNavigate()

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      // Submit the form data
      console.log("Form submitted:", data);
      setData({
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        industry: "",
        company: "",
        province: null
    
      });
    } else {
      setErrors(validationErrors);
    }
  };

  const validateForm = () => {
    let errors = {};
    if (!data.firstname) {
      errors.firstname = "First Name is required";
    }
    if (!data.lastname) {
      errors.lastname = "Last Name is required";
    }

    if (!data.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
      errors.email = "Invalid email address";
    }

    if (!data.company) {
      errors.company = "company name is required";
    }

    if (!data.password) {
      errors.password = "Password is required";
    }

    if (!data.repeatPassword) {
      errors.repeatPassword = "Repeat Password is required";
    } else if (data.repeatPassword !== data.password) {
      errors.repeatPassword = "Passwords do not match";
    }
    // else if (data.password.length > 4) {
    //     console.log(data.password.length,"length");
    //   errors.password = "Password must be greater then 4 characters";
    // }

    if (!data.industry) {
      errors.industry = "industry name is required";
    }

    return errors;
  };

  const SignUp = async () => {
    // use
    if (check) {
      console.log(data);
      let result = await fetch("http://localhost:4000/auth/signup", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });
      result = await result.json().then((Result) => {
          console.log(Result, "result");
          setData(Result)
          console.log(data);
          if (Result.success === false) {
            console.log(Result.message)
            // toast.error(Result.message);
          } else {
            toast.success(Result.message);
            Navigate('/auth/sign-in')
          }
        })
       
      }
    else {
     
      toast.error('check all fields!');

    }
  };

  return (
    <>
      <form action="" onSubmit={handleSubmit} autoComplete="none">
        <div className="container-fluid main">
          
          <div className="row align-item-center justify-content-center">
            <MDBContainer className="">
              {/* <MDBCard className="text-black" style={{  }}> */}
              {/* <MDBCardBody> */}
              <div className="row justify-content-center">
                <div className="col-10 mt-1">
                  <MDBRow className="">
                    <MDBCol
                     
                      
                      
                      className="col-sm-12 col-md-6 col-lg-6 col-12 d-flex align-items-center order-lg-1 order-md-1 order-sm-2  order-2"
                      style={{ marginTop: "35px" }}
                    >
                      <MDBCardImage
                        src={signUp}
                        className="img-fluid"
                        style={{ width: "90%" }}
                      />
                    </MDBCol>

                    <MDBCol
                      md="8"
                      lg="6"
                      sm="10"
                      // style={{marginTop:'5px'}}
                      className="order-lg-2 order-md-2 order-sm-1 order-1 d-flex flex-column align-items-center  text-start"
                    >
                      <div
                        className="w-100 text-start"
                        style={{ marginTop: "50px" }}
                      >
                        <MDBTypography
                          tag="h2"
                          variant="display-6"
                          className="typo"
                        >
                          Adventure starts here 🚀
                        </MDBTypography>
                        <h2></h2>
                      </div>

                      <div className="w-100 mb-4">
                        <p className="pp">
                          Get access to exclusive features by creating an
                          account
                        </p>
                      </div>
                           

                      <div className="row w-100">
                        <div className="col-4">
                          <label
                            style={{ color: "black" }}
                            htmlFor="exampleFormControlInput1"
                            className="form-label fw-bold m-0"
                          >
                           FirstName
                          </label>
                        </div>
                        <div className="col-8">
                          <input
                            name="firstname"
                            type="text"
                            placeholder="First Name"
                            className="form-control rounded-5 border border"
                            autoComplete="off"
                            value={data.firstname}
                            onChange={handleChange}
                          />
                            <div className="mt-2" style={{color:'red'}}>
                       {errors.firstname && <div>{errors.firstname}</div>}
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
                          Last Name
                          </label>
                        </div>
                        <div className="col-8">
                          <input
                            name="lastname"
                            type="text"
                            placeholder="Last Name"
                            className="form-control rounded-5 border border"
                            autoComplete="off"
                            value={data.lastname}
                            onChange={handleChange}
                          />
                            <div className="mt-2" style={{color:'red'}}>
                       {errors.lastname && <div>{errors.lastname}</div>}
                       </div>
                        </div>
                      </div>
                      <div className="row w-100">
                        <div className="col-4">
                          <label
                            style={{ color: "black" }}
                            htmlFor="exampleFormControlInput1"
                            className="form-label fw-bold m-0"
                          >
                            E-mail
                          </label>
                        </div>
                        <div className="col-8">
                          <input
                            name="email"
                            type="email"
                            placeholder="Email"
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
                            Company
                          </label>
                        </div>
                        <div className="col-8">
                          <input
                            name="company"
                            type="text"
                            placeholder="Company Name"
                            className="form-control rounded-5 border border"
                            autoComplete="off"
                            value={data.company}
                            onChange={handleChange}
                          />
                            <div className="mt-2" style={{color:'red'}}>
                       {errors.company && <div>{errors.company}</div>}
                       </div>
                        </div>
                      </div>
                      <div className="row w-100 ">
                        <div className="col-4">
                          <label
                            style={{ color: "black" }}
                            htmlFor="exampleFormControlInput1"
                            className="form-label fw-bold m-0"
                          >
                            Password
                          </label>
                        </div>
                        <div className="col-8">
                          <input
                            name="password"
                            type="Password"
                            placeholder="password"
                            className="form-control rounded-5 border"
                            autoComplete="off"
                            value={data.password}
                            onChange={handleChange}
                          />
                            <div className="mt-2" style={{color:'red'}}>
                       {errors.password && <div>{errors.password}</div>}
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
                            Repeat Password
                          </label>
                        </div>
                        <div className="col-8">
                          <input
                            name="repeatPassword"
                            type="Password"
                            placeholder="Repeat Password"
                            className="form-control rounded-5 border"
                            autoComplete="off"
                            value={data.repeatPassword}
                            onChange={handleChange}
                          />
                          <div className="mt-2" style={{color:'red'}}>
                       {errors.repeatPassword && <div>{errors.repeatPassword}</div>}
                       </div>
                        </div>
                      </div>
                      <div className="row w-100">
                        <div className="col-4">
                          <label
                            style={{ color: "black" }}
                            htmlFor="exampleFormControlInput1"
                            className="form-label fw-bold m-0"
                          >
                            Industry
                          </label>
                        </div>
                        <div className="col-8">
                          <input
                            name="industry"
                            type="text"
                            placeholder="Industry"
                            className="form-control rounded-5 border"
                            autoComplete="off"
                            value={data.industry}
                            onChange={handleChange}
                          />
                           <div className="mt-2" style={{color:'red'}}>
                       {errors.industry && <div>{errors.industry}</div>}
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
                            Province/Territory
                          </label>
                        </div>
                        <div className="col-8">
                        <select
                            className="form-label fw-bold m-0 w-100 border rounded-5 p-1"
                            name='province' value={data.province} onChange={handleChange}
                          >
                            {options.map((value,i) => (
                              <option value={value.title} key={i} >
                                {value.title}
                              </option>

                            ))}
                          </select>
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

                      <div className="row d-flex w-100 mt-4">
                        <div className="col">
                          <MDBCheckbox
                            className="flexCheck ps-0"
                            value=""
                            label={
                              <>
                                I’ve read and accept the{" "}
                                <Link
                                  to="/Terms&Conditions"
                                  style={{ color: "#7367F0" }}
                                >
                                  Terms & Conditions
                                </Link>
                              </>
                            }
                            onClick={() => {
                              setCheck(!check);
                            }}
                          />
                        </div>
                      </div>

                      <div className="row w-100 mt-1">
                        {/* <div className="col-9">
                        <MDBCheckbox
                          className="flexCheck ps-0"
                          value=""
                         
                          label="Subscribe to the newsletter to stay up to date"
                          onClick={() => {
                            setCheck(!check);
                          }}
                        />
                      </div> */}
                        <div className="col text-end">
                          <button
                            style={{
                              background: "#7367F0",
                              color: "white",
                              textTransform: "capitalize",
                            }}
                            className=" btn"
                            onClick={SignUp}
                          >
                            Sign up
                          </button>
                        </div>
                      </div>

                      <div
                        className="row d-flex w-100"
                        style={{ marginLeft: "100px", lineHeight: "18.29px" }}
                      >
                        <div className="col p-0 text-end">
                          <p style={{ marginRight: "-10px" }}>
                            Already have an account?{" "}
                          </p>
                        </div>
                        <div className="col" style={{ marginTop: "15px" }}>
                          <b>
                            <Link to="/" style={{ color: "#7367F0" }}>
                              Sign in
                            </Link>
                          </b>
                        </div>
                      </div>
                    </MDBCol>
                  </MDBRow>
                </div>
              </div>
              {/* </MDBCardBody> */}
              {/* </MDBCard> */}
            </MDBContainer>
          </div>
        </div>
      </form>
    </>
  );
}

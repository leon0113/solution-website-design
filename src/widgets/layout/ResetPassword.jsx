import React, { useState, } from "react";
import resetIMG from "../../Assets/Reset img.png";
import { useNavigate, Link,useParams } from "react-router-dom";
import { toast } from "react-toastify";

import "./forgotPassword.css";
// import FontAwesomeIcon from '@fortawesome/fontawesome-free'

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

export function ResetPassword(props) {

  const param = useParams();
  var user_id = param.id
  console.log(user_id, "user id");

  const [data, setData] = useState({
    password: "",
    repeatNewPasword: "",
    id: user_id
  });

  const [errors, setErrors] = useState({});
  


  const Navigate = useNavigate();

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
    } else {
      setErrors(validationErrors);
    }

    setData({
      password: "",
      repeatNewPasword: "",
    });
    
    Navigate('/reset-password-verified')
  
  };

  const validateForm = () => {
    let errors = {};

    if (!data.password) {
      errors.password = "Password is required";
    }
    if (!data.repeatNewPasword) {
      errors.repeatNewPasword = "Password is required";
    }

    return errors;
  };



  const resetPassword = async (e) => {
    
    console.log(data, "data");
    let result = await fetch('http://localhost:4000/auth/update-password',
      {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json'
        },
      });
      result = await result.json()
      .then(Result => {
        setData(Result);
            console.log(Result, "Result");
    })
      .catch(error => {
          console.error(error);
          // toast.error("An error occurred", {
          //     position: "top-center"
          // });
      });

  }

  return (
    <>
      <form action="" onSubmit={handleSubmit} autoComplete="none">
        <div className="container-fluid">
          <div className="row align-itme-center justify-content-center mt-1">
            <MDBContainer className="">
              <div className="row justify-content-center">
                
                  <MDBRow className="w-100 p-0">
                    <MDBCol
                      md="5"
                      lg="5"
                      className="order-lg-1 d-flex align-items-center order-2 "
                    >
                      <MDBCardImage
                        src={resetIMG}
                        className="img-fluid"
                        style={{ width: "100%", height: "530px" }}
                      />
                    </MDBCol>

                    <MDBCol
                      md="7"
                      lg="7"
                      className="order-lg-2 ps-5 d-flex flex-column align-items-center order-1  text-start"
                    >
                      <div
                        className="w-100 text-start"
                        style={{ marginTop: "80px" }}
                      >
                        <MDBTypography
                          tag="h2"
                          variant="display-5"
                          className="typo"
                          style={{
                            fontWeight: "800",
                            color: "black",
                            fontSize: "40px",
                            letterSpacing: "0.2px",
                          }}
                        >
                          Set New Password
                        </MDBTypography>
                      </div>
                      {/* <FontAwesomeIcon icon="fa-solid fa-lock" /> */}

                      <div className="w-100 mb-5 mt-4">
                        <p
                          className="pp"
                          style={{
                            fontSize: "18px",
                            letterSpacing: "0.2px",
                            lineHeight: "1.2",
                          }}
                        >
                          Your new password must be different to previously
                          <span
                            style={{
                              display: "block",
                              marginTop: "0.2em",
                              fontSize: "inherit",
                            }}
                          >
                            used passwords.
                          </span>
                        </p>
                      </div>

                      <div className="row w-100">
                        <div className="col-4">
                          <label
                            style={{
                              color: "black",
                              fontWeightL: "600",
                              fontSize: "25px",
                            }}
                            htmlFor="exampleFormControlInput1"
                            className="form-label fw-bold m-0"
                          >
                            New Password
                          </label>
                        </div>
                        <div className="col-8">
                          <input
                            style={{ padding: "10px" }}
                            type="password"
                            className="form-control rounded-5 border border"
                            autocomplete="off"
                            name="password"
                            value={data.password}
                            onChange={handleChange}
                          />
                          <div className="mt-2" style={{color:'red'}}>
                              {errors.password && <div>{errors.password}</div>}
                            </div>
                        </div>
                      </div>
                      <div className="row w-100 mt-4">
                        <div className="col-4">
                          <label
                            style={{
                              color: "black",
                              fontWeightL: "600",
                              fontSize: "25px",
                            }}
                            htmlFor="exampleFormControlInput1"
                            className="form-label fw-bold m-0"
                          >
                            Repeat Password
                          </label>
                        </div>
                        <div className="col-8">
                          <input
                            style={{ padding: "10px" }}
                            type="password"
                            className="form-control rounded-5 border border"
                            autocomplete="off"
                            name="repeatNewPasword"
                            value={data.repeatNewPasword}
                            onChange={handleChange}
                          />
                          <div className="mt-2" style={{color:'red'}}>
                              {errors.repeatNewPasword && <div>{errors.repeatNewPasword}</div>}
                            </div>
                        </div>
                      </div>

                      <hr
                        style={{
                          width: "100%",
                          color: "rgba(0, 0, 0, 0.2)",
                          border: "2px solid",
                        }}
                        className="my-5"
                      />

                      <div className="row w-100">
                        <div className="col text-end">
                          <button
                            onClick={resetPassword}
                            style={{
                              background: "#63666A",
                              color: "white",
                              textTransform: "capitalize",
                              fontWeight:'700',
                              fontSize:'21px',
                              letterSpacing:'0.3px'
                            }}
                            className=" btn mb-4"
                          >
                            Reset Password
                          </button>
                        </div>
                      </div>

                      <div className="row d-flex w-100 text-center">
                        <div className="col">
                          <b>
                            <u>
                              <Link to="/login" style={{ color: "#63666A" }}>
                                Back to Sign in
                              </Link>{" "}
                            </u>{" "}
                          </b>
                        </div>
                      </div>
                    </MDBCol>
                  </MDBRow>
              
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

export default ResetPassword;

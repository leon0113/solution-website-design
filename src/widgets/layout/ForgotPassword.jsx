import React, { useState } from "react";
import forgotPassword from "../../Assets/forgotPassword.png";
import { useNavigate, Link } from "react-router-dom";

import './forgotPassword.css'
// import FontAwesomeIcon from '@fortawesome/fontawesome-free'
import { ToastContainer, toast } from 'react-toastify';
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

export function ForgotPassword() {

  const [email, setEmail] = useState({ 
    email: '' 
  })

const [errors,setErrors] = useState({})
  
  // const Navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
        // Submit the form data
        console.log("Form submitted:", email);
    } else {
        setErrors(validationErrors);
    }

    setEmail({
      email: "",
    })
};

  
  const validateForm = () => {
    let errors = {};
  
    if (!email.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email.email)) {
      errors.email = "Invalid email address";
    }

  
  
    return errors;
  };

  const sendEmail = async (e) => {
    e.preventDefault()
    console.log(email, "email");
    let result = await fetch('http://localhost:4000/auth/user-forget-link',
        {
            method: 'POST',
            body: JSON.stringify(email),
            headers: {
                'Content-Type': 'application/json'
            },
        })
    result = await result.json()
        .then(Result => {
            setEmail(Result)
            console.log(Result, "Result");
            toast.success(Result.message, {
                position: "top-right"
                });
    
        })
   
}



  return (
    <>
        <form action="" onSubmit={handleSubmit} autoComplete='none'>

      <div className="container-fluid">
        <div className="row align-itme-center justify-content-center mt-1">
          <MDBContainer className="">
            {/* <MDBCard className="text-black" style={{  }}> */}
            {/* <MDBCardBody> */}
            <div className="row justify-content-center">
              <div className="col-10 mt-1">
                <MDBRow className="">
                  <MDBCol
                    md="5"
                    lg="5"
                    className="order-2 order-lg-1 d-flex align-items-center mt-5"
                  >
                    <MDBCardImage
                      src={forgotPassword}
                      className="img-fluid"
                      style={{ width: "80%",height:'530px' }}
                    />
                  </MDBCol>

                  <MDBCol
                    md="7"
                    lg="7"
                    className="order-1 order-lg-2 my-5 d-flex flex-column align-items-center text-start"
                  >
                    <div
                      className="text-start w-100"
                      style={{ marginTop: "80px" }}
                    >
                      <MDBTypography tag="h2" variant="display-5" className="typo" style={{fontWeight:'700',color:'black'}}>
                      Forgot Password? 🔒   
                        </MDBTypography>
                    </div>
                    {/* <FontAwesomeIcon icon="fa-solid fa-lock" /> */}


                    <div className="mb-4 w-100">
                      <p className="pp">
                        Enter your email you’ve used to create a PS account and
                        we’ll send you a reset link
                      </p>
                    </div>

                    <div className="row w-100">
                      <div className="col-4">
                        <label
                        style={{color:'black'}}
                          htmlFor="exampleFormControlInput1"
                          className="form-label fw-bold m-0"
                        >
                          E-mail
                        </label>
                      </div>
                      <div className="col-8">
                        <input
                          type="email"
                          className="form-control border rounded-5 border"
                          autocomplete="off"
                          id="exampleFormControlInput1"
                          value={email.email}
                          onChange={(e) => setEmail({ ...email, email: e.target.value })}
                        />
                       <div className="mt-2">
                       {errors.email && <div>{errors.email}</div>}
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
                        onClick={sendEmail}
                          style={{ background: "#7367F0", color: "white",textTransform:'capitalize' }}
                          className=" btn mb-4"
                          
                        >
                          Send Reset Link
                        </button>
                      </div>
                    </div>

                    <div
                      className="row d-flex w-100 text-center"
                    >
                      
                      <div className="col">
                   <b><u><Link to="/login" style={{color:'#3C60BC'}}>Back to Sign in</Link> </u>  </b>
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

export default ForgotPassword

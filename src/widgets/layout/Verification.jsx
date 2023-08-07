import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./verification.css";
import verification from "../../Assets/Verified.png";

import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBTypography,
  MDBCardBody,
  MDBCardImage,
  MDBCheckbox,
} from "mdb-react-ui-kit";

export function Verification() {
  return (
    <>
      <div className="container-fluid mt-5">
        <div className="row align-itme-center justify-content-center">
          <MDBContainer className="mt-5">
            <div className="row justify-content-center">
              <div className="col-10 mt-1">
                <MDBRow className="">
                  <MDBCol
                    md="6"
                    lg="6"
                    className="order-lg-1 d-flex align-items-center order-2"
                  >
                    <MDBCardImage
                      src={verification}
                      className="img-fluid"
                      style={{ width: "450px", height: "450px" }}
                    />
                  </MDBCol>

                  <MDBCol
                    md="6"
                    lg="6"
                    style={{ marginTop: "100px" }}
                    className="order-lg-2 d-flex flex-column align-items-center order-1 text-start"
                  >
                    <div
                      className="w-100 text-start"
                      style={{ marginTop: "30px" }}
                    >
                      <MDBTypography tag="h6" variant="display-6" style={{fontWeight:'700',color:'black'}}>
                        Verification Successfully ✔️
                      </MDBTypography>
                    </div>
                    {/* <FontAwesomeIcon icon="fa-solid fa-lock" /> */}

                    <div className="w-100 mb-4">
                      <p style={{fontWeight:'500',color:'rgba(0, 0, 0, 0.6)',fontSize:'20px',lineHeight:'29px'}}> 
                        Your account has been verified.
                        <br /> Click
                        <Link to="/login" style={{color:'#7367F0',}}>
                          <u style={{padding:'5px'}}>here</u>
                        </Link>
                        to redirect to login.
                      </p>
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
    </>
  );
}

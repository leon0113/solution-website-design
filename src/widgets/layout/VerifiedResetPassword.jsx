import React from "react";
import reset from "../../Assets/reset.png";
import { Link } from "react-router-dom";

const VerifiedResetPassword = () => {
  return (
    <div className="container-fluid">
     <div className="row">
     <div className="row mt-5">
        <div className="col d-flex justify-content-center align-items-center">
          <img
            className=""
            src={reset}
            alt=""
            style={{ width: "300px", height: "300px" }}
          />
        </div>
      </div>
      <div className="row w-100 mt-4">
        <div className="col text-center">
          <h2
            style={{
              fontWeight: "800",
              color: "black",
              fontSize: "40px",
              letterSpacing: "0.2px",
            }}
          >
            Password Reset
          </h2>
        </div>
      </div>
      <div className="row w-100 mt-4">
        <div className="col text-center">
          <p
            className="pp"
            style={{
              fontWeight: "500",
              fontSize: "18px",
              letterSpacing: "0.3px",
              lineHeight: "1.2",
            }}
          >
            Your password has been successfully reset.
            <span
              style={{
                display: "block",
                marginTop: "0.2em",
                fontSize: "inherit",
              }}
            >
              Click below to sign in magically.
            </span>
          </p>
        </div>
      </div>
      <div className="row w-100 mt-4">
        <div className="col text-center">
          <button
            style={{
              background: "#63666A",
              color: "white",
              textTransform: "capitalize",
              fontWeight: "700",
              fontSize: "21px",
              letterSpacing: "0.3px",
              width: "300px",
            }}
            className=" btn mb-4"
          >
            Continue
          </button>
        </div>
      </div>
      <div className="row d-flex w-100 text-center">
        <div className="col">
          <b>
            <u>
              <Link to="/login" style={{ color: "#63666A" }}>
                Back to Sign in
              </Link>
            </u>
          </b>
        </div>
      </div>
     </div>
    </div>
  );
};

export default VerifiedResetPassword;

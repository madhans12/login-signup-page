import React from "react";
import "./SIGNUPPAGE.css";
import { Link } from "react-router-dom";
import myimage from "./share.png";
const SIGNUPPAGE = () => {
  return (
    <div className="login">
      <div className="login-left">
        <h1 className="lg-1">Kwim.</h1>
        <img className="share-icon" src={myimage} alt="share-icon"></img>

        <div className="context">
          <h2 className="lg-2">Sharing Product</h2>

          <p className="lg-3">Now Share Your Favourite Product</p>

          <p className="lg-4">To Earn Cash Back</p>
        </div>
      </div>

      <div className="login-right">
        {/* <form className="form-1"> */}
        <h1 className="lg-5">Create Business</h1>
        <h3 className="lg-6">Create Your Business Profile</h3>
        <p className="lg-7"> Business Name *</p>
        <input
          className="lg-8"
          type="text"
          placeholder="Buisness Name*"
        ></input>

        <p className="lg-9">Business Email *</p>
        <input
          className="lg-91"
          type="email"
          placeholder="sales@buisness.co.au"
        ></input>
        <br />
        <h5 className="lg-10">
          This information will be securely saved as per the
        </h5>
        <h4 className="lg-11">
          Terms of Service & <a href="">Privacy Policy</a>
        </h4>
        <div className="lg-12">
          <button className="btn-1">Help?</button>
          <button className="btn-2">Sign Up</button>
        </div>
        <div className="lg-13">
          <p>Already have a account?</p>
          <Link className="login-link" to="/login">
            login
          </Link>
        </div>
        {/* </form> */}
      </div>
    </div>
  );
};

export default SIGNUPPAGE;

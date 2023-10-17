import React from "react";
import { Link } from "react-router-dom";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import GoogleIcon from "@mui/icons-material/Google";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import "./LOGINPAGE.css";

const LOGINPAGE = () => {
  return (
    <div className="container">
      <div className="container-left">
        <form>
          <h1 className="cl-1">Login to Your Account</h1>

          <p className="cl-2">Login using social networks</p>

          <div className="cl-3">
            <FacebookRoundedIcon className="icon-1" />
            <GoogleIcon className="icon-2" />

            <TwitterIcon className="icon-3" />
          </div>
          <div className="cl-4">
            <hr />
            <p>or</p>
            <hr />
          </div>
          <div className="cl-5">
            <input type="text" placeholder="Email"></input>
          </div>
          <div className="cl-6">
            <input type="password" placeholder="password"></input>
            <RemoveRedEyeOutlinedIcon className="eye-icon" />
          </div>
          <div className="cl-7">
            <button>SIGN IN</button>
          </div>
        </form>
      </div>
      <div className="container-right">
        <div>
          <h1 className="cr-1">New Here?</h1>
        </div>
        <div className="cr-2">
          <p>Sign up and discover a great </p>
          <p> amount of new oppourtunities!</p>
        </div>
        <div className="cr-3">
          <button>
            <Link to="/signup" className="signup-link">
              SignUp
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default LOGINPAGE;

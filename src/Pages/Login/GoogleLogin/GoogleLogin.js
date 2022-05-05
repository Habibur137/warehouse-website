import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../../firebase.init";
import googleLogo from "../../../images/google-logo.png";

const GoogleLogin = () => {
  let navigate = useNavigate();
  let location = useLocation();
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  let from = location.state?.from?.pathname || "/";
  if (user) {
    toast("Login Succesfull");
    navigate(from, { replace: true });
  }
  return (
    <div>
      <button
        onClick={() => {
          signInWithGoogle();
        }}
      >
        <img style={{ height: "40px" }} src={googleLogo} alt="" />
        Google Sign In
      </button>
    </div>
  );
};

export default GoogleLogin;

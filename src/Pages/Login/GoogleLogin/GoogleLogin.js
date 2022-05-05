import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../../../firebase.init";
import googleLogo from "../../../images/google-logo.png";

const GoogleLogin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  console.log(user);
  if (user) {
    toast("Login Succesfull");
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

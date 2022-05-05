import React, { useState } from "react";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { toast, ToastContainer } from "react-toastify";
import auth from "../../../firebase.init";
import "react-toastify/dist/ReactToastify.css";
import GoogleLogin from "../GoogleLogin/GoogleLogin";
import { Link } from "react-router-dom";
import "./login.css";
import loginImage from "../../../images/log.jpg";

const Login = () => {
  const [signInWithEmailAndPassword, user, loading, signInError] =
    useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail, sending, resetError] =
    useSendPasswordResetEmail(auth);
  const [formData, setFormData] = useState({ email: "", password: "" });
  const { email, password } = formData;
  //handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  // handle login
  const handleForm = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(email, password);
    // show toast
    if (user?.email) {
      toast("Login Successfully");
    }
  };
  return (
    <div className="login-box">
      <div className="img">
        <img src={loginImage} alt="" />
      </div>
      <h3>Login Here</h3>
      <form onSubmit={handleForm}>
        <p>Email</p>
        <input
          onChange={handleChange}
          type="email"
          name="email"
          placeholder="Email"
        />
        <p>Password</p>
        <input
          onChange={handleChange}
          type="password"
          name="password"
          id=""
          placeholder="Password"
        />
        <input type="submit" value="Login" />
      </form>
      <div className="info">
        {" "}
        <Link to="/register">Need an account?</Link>
        <span
          onClick={async () => {
            if (!user) {
              await sendPasswordResetEmail(email);
              toast("Sent password reset email");
            } else {
              return;
            }
          }}
        >
          Forgot Password?
        </span>
      </div>
      <GoogleLogin />
      <ToastContainer />
    </div>
  );
};

export default Login;

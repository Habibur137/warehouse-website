import React, { useState } from "react";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { toast, ToastContainer } from "react-toastify";
import auth from "../../../firebase.init";
import "react-toastify/dist/ReactToastify.css";
import GoogleLogin from "../GoogleLogin/GoogleLogin";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./login.css";
import loginImage from "../../../images/log.jpg";

const Login = () => {
  let navigate = useNavigate();
  let location = useLocation();
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
  let from = location.state?.from?.pathname || "/";
  if (loading || sending) {
    return <p>Loading...</p>;
  }
  let err;
  if (signInError || resetError) {
    err = (
      <p>
        {signInError.message} {resetError.message}
      </p>
    );
  }
  // handle login
  const handleForm = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(email, password);

    fetch("https://damp-escarpment-79081.herokuapp.com/login", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ email }),
    })
      .then((res) => res.json())
      .then((data) => {
        localStorage.setItem("accessToken", data.accessToken);
        toast("Login Successfully");
        navigate(from, { replace: true });
      });
    // show toast
    // if (user?.email) {
    //
    // }
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
      {err}
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

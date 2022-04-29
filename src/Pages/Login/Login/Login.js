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
    <div>
      <form onSubmit={handleForm}>
        <input
          onChange={handleChange}
          type="email"
          name="email"
          placeholder="Email"
        />
        <input
          onChange={handleChange}
          type="password"
          name="password"
          id=""
          placeholder="Password"
        />
        <input type="submit" value="Login" />
      </form>
      <p>
        Need an account? <Link to="/register">Register</Link>
      </p>
      <p
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
      </p>
      <GoogleLogin />
      <ToastContainer />
    </div>
  );
};

export default Login;

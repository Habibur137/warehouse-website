import React, { useState } from "react";
import auth from "../../../firebase.init";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import GoogleLogin from "../GoogleLogin/GoogleLogin";
import { Link } from "react-router-dom";

const Register = () => {
  // user create state
  const [createUserWithEmailAndPassword, createUser, loading, CreateError] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  // update profile state
  const [updateProfile, updating, error] = useUpdateProfile(auth);

  // handle login
  const handleForm = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const displayName = e.target.displayName.value;
    await createUserWithEmailAndPassword(email, password);
    await updateProfile({ displayName });
    toast("account created, verify your email");
    e.target.reset();
  };

  return (
    <div>
      <form onSubmit={handleForm}>
        <input type="text" name="displayName" placeholder="Name" />
        <input type="email" name="email" placeholder="Email" />
        <input type="password" name="password" id="" placeholder="Password" />
        <input type="submit" value="Register" />
      </form>
      <p>
        <Link to="/login">Login</Link>
      </p>
      <GoogleLogin />
      <ToastContainer />
    </div>
  );
};

export default Register;

import React, { useState } from "react";
import auth from "../../../firebase.init";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";

const Register = () => {
  // user create state
  const [createUserWithEmailAndPassword, createUser, loading, CreateError] =
    useCreateUserWithEmailAndPassword(auth);
  // update profile state
  const [updateProfile, updating, error] = useUpdateProfile(auth);
  // handle login
  console.log(createUser);
  const handleForm = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const displayName = e.target.displayName.value;
    await createUserWithEmailAndPassword(email, password);
    await updateProfile({ displayName });
    toast("account created");
    console.log(email, password, displayName);
    console.log(createUser);
  };
  return (
    <div>
      <form onSubmit={handleForm}>
        <input type="text" name="displayName" placeholder="Name" />
        <input type="email" name="email" placeholder="Email" />
        <input type="password" name="password" id="" placeholder="Password" />
        <input type="submit" value="Register" />
      </form>
      <ToastContainer />
    </div>
  );
};

export default Register;

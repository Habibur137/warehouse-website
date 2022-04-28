import React, { useState } from "react";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", passwoed: "" });
  //handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  // handle login
  const handleForm = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <div>
      <form onClick={handleForm}>
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
    </div>
  );
};

export default Login;

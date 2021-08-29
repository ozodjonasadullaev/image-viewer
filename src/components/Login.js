import React, { useState } from "react";
import "../styles/Login.css";
import { userScheme } from "../validation/userValidation";

const Login = ({ settoken }) => {
  const [valid, setvalid] = useState(true);
  const submitHandler = async (e) => {
    e.preventDefault();
    let formData = {
      email: e.target[0].value,
      password: e.target[1].value,
    };
    const isValid = await userScheme.isValid(formData);
    console.log(isValid);
    if (isValid) {
      setvalid(true);
      localStorage.setItem(
        "user",
        JSON.stringify({
          email: e.target[0].value,
          password: e.target[1].value,
        })
      );
      settoken(localStorage.getItem("user"));
    } else {
      setvalid(false);
    }
  };

  return (
    <div className="login">
      <h1>Please sign in</h1>
      <form onSubmit={submitHandler}>
        <input type="text" placeholder="Email..." />

        <input type="password" placeholder="Password..." />
        {!valid && <small>Please enter valid credentials</small>}
        <input type="submit" value="Sign in" />
      </form>
    </div>
  );
};

export default Login;

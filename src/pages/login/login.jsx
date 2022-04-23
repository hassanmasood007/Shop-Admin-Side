import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../redux/apiCalls";
import classes from "./login.module.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const usernameHandler = (event) => {
    setUsername(event.target.value);
  };
  const passwordHandler = (event) => {
    setPassword(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    login(dispatch, { username, password });
  };

  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <section className={classes.auth}>
        <h1>Login</h1>
        <form>
          <div className={classes.control}>
            <label htmlFor="username">Your Email</label>
            <input
              type="text"
              id="username"
              placeholder="username"
              required
              onChange={usernameHandler}
            />
          </div>
          <div className={classes.control}>
            <label htmlFor="password">Your Password</label>
            <input
              type="password"
              id="password"
              placeholder="password"
              required
              onChange={passwordHandler}
            />
          </div>
          <div className={classes.actions}>
            <button onClick={submitHandler}>Login</button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default Login;

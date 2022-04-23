import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../redux/apiCalls";

const login = () => {
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
    <div>
      <input
        type="text"
        placeholder="username"
        onChange={usernameHandler}
      ></input>
      <input
        type="password"
        placeholder="password"
        onChange={passwordHandler}
      ></input>
      <button onClick={submitHandler}>Login</button>
    </div>
  );
};

export default login;

import React, { useState } from "react";

const login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const usernameHandler = (event) => {
    setUsername(event.target.value);
  };
  const passwordHandler = (event) => {
    setPassword(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
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

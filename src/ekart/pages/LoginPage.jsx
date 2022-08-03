import React, { useState } from "react";
import "./LoginPage.css";

function LoginPage() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const userNameHandler = (e) => {
    setUserName(e.target.value);
  };

  const passwordHandler = (e) => {
    setPassword(e.target.value);
  };

  const handlelogin = (e) => {};

  return (
    <div>
      <div className="container">
        <form>
          <h1>login</h1>
          <div>
            <label>Username</label>
            <br />
            <input
              type="text"
              name="username"
              value={userName}
              onChange={userNameHandler}
            />
          </div>

          <div>
            <label>Password</label>
            <br />
            <input
              type="text"
              name="password"
              value={password}
              onChange={passwordHandler}
            />
          </div>

          <button name="login">Login</button>
        </form>
        <div>
          <span>Don't have account?</span> <a href="#">Register</a>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;

import React from "react";
import "./LoginPage.css";
import { useState } from "react";

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Username:", username);
    console.log("Password:", password);
  };
  return (
    <div class="login-box">
      <p>Login</p>
      <form onSubmit={handleSubmit}>
        <div className="user-box">
          <input
            type="username"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <label>Username</label>
        </div>
        <div className="user-box">
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <label>Password</label>
        </div>
        <a href="#">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Submit
        </a>
      </form>
      <p>
        Don't have an account?{" "}
        <a href="" className="a2">
          {" "}
          Sign up!
        </a>
      </p>
    </div>
  );
}

export default LoginPage;

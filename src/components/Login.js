import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (
      storedUser &&
      storedUser.username === username &&
      storedUser.password === password
    ) {
      navigate("/account");
    } else {
      alert("Invalid login credentials");
    }
  };

  return (
    <div className="container">
      <h2 style={{ textAlign: "center", marginTop: 50 }}>Login</h2>
      <div
        style={{
          width: "40%",
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: 50,
          padding: 30,
          borderRadius: 10,
          textAlign: "center",
          backgroundColor: "lightgray",
        }}
      >
        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            style={{ margin: 20 }}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            style={{ margin: 20 }}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button
            type="submit"
            style={{ margin: 30, padding: "5px 50px", borderRadius: 10 }}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;

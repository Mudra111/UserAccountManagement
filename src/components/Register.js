import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const newUser = { username, password };
    localStorage.setItem("user", JSON.stringify(newUser));
    navigate("/account");
  };

  return (
    <div className="container">
      <h2 style={{ textAlign: "center", marginTop: 50 }}>Register</h2>
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
        <form onSubmit={handleRegister}>
          <input
            type="text"
            placeholder="Username"
            style={{ margin: 20 }}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            style={{ margin: 20 }}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button
            type="submit"
            style={{ margin: 30, padding: "5px 50px", borderRadius: 10 }}
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;

import React, { useState, useEffect } from "react";

function Account() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setUsername(storedUser.username);
      setPassword(storedUser.password);
    }
  }, []);

  const handleSave = () => {
    setError("");
    setMessage("");

    // Validation
    if (!username || !password) {
      setError("All fields are required");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters long");
      return;
    }

    const updatedUser = { username, password };
    localStorage.setItem("user", JSON.stringify(updatedUser));
    setMessage("Account information updated successfully!");
  };

  return (
    <div className="container">
      <h2 style={{ textAlign: "center", marginTop: 50 }}>
        Account Information
      </h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {message && <p style={{ color: "green" }}>{message}</p>}
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
        <input
          type="text"
          placeholder="Username"
          value={username}
          style={{ margin: 20 }}
          onChange={(e) => setUsername(e.target.value)}
          required
        />

        <div style={{ position: "relative" }}>
          <input
            type={showPassword ? "text" : "password"} // Toggle input type based on showPassword state
            placeholder="Password"
            value={password}
            style={{ margin: 20 }}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)} // Toggle password visibility
            style={{
              position: "absolute",
              top: "50%",
              transform: "translateY(-50%)",
              background: "none",
              border: "none",
              cursor: "pointer",
            }}
          >
            {showPassword ? "Hide" : "Show"}
          </button>
        </div>

        <button
          onClick={handleSave}
          style={{ margin: 30, padding: "5px 50px", borderRadius: 10 }}
        >
          Save
        </button>
      </div>
    </div>
  );
}

export default Account;

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; 


const Login = ({ setIsLoggedIn }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // To hold error messages
  const navigate = useNavigate(); // Initialize the useNavigate hook

  useEffect(() => {
    // Check if admin is already logged in
    const storedEmail = localStorage.getItem("email");
    if (storedEmail === "preethisivakumar5952@gmail.com") {
      setIsLoggedIn(true); // Set logged-in state
    }
  }, [setIsLoggedIn]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Clear previous errors
    setError("");

    // Validate email and password
    if (!email || !password) {
      setError("Both email and password are required.");
      return;
    }

    // Email validation using regex
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    // Example password validation (min length 6)
    if (password.length < 6) {
      setError("Password must be at least 6 characters long.");
      return;
    }

    
    if (email === "preethisivakumar5952@gmail.com" && password === "pretty17") {
      
      localStorage.setItem("email", email);

      // Update logged-in state
      setIsLoggedIn(true);

      // Navigate to dashboard
      navigate("/dashboard");
    } else {
      setError("Invalid email or password.");
    }
  };

  const formStyle = {
    marginTop: "100px",
    display: "flex",
    flexDirection: "column",
    width: "300px",
    margin: "0 auto",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    backgroundColor: "#f9f9f9",
  };

  const inputStyle = {
    padding: "10px",
    margin: "10px 0",
    border: "1px solid #ccc",
    borderRadius: "4px",
  };

  const buttonStyle = {
    padding: "10px",
    backgroundColor: "#FB6B90",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  };

  const errorStyle = {
    color: "red",
    marginBottom: "10px",
    fontSize: "14px",
  };

  return (
    <>

        <br/>     
        <form onSubmit={handleSubmit} style={formStyle}>
          <h2>Admin Login</h2>

          {/* Display error message if there is one */}
          {error && <div style={errorStyle}>{error}</div>}

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={inputStyle}
            required
          />

          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={inputStyle}
            required
          />

          <button type="submit" style={buttonStyle}>
            Login
          </button>
        </form>
        <br/>
        <br/>
    </>
  );
};

export default Login;

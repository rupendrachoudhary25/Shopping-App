import React, { useState } from "react";
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyCEKt9gVlQq8Ooull7VK6pwkflrc1zcZjI",
  authDomain: "firbase-first25.firebaseapp.com",
  projectId: "firbase-first25",
  storageBucket: "firbase-first25.appspot.com",
  messagingSenderId: "744341708688",
  appId: "1:744341708688:web:0798c2fa974444b1009d15",
  databaseURL: "https://firbase-first25-default-rtdb.firebaseio.com/",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    setErrorMessage("");

    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        toast.success("Logged in successfully!");
        navigate("/home");
      })
      .catch((error) => {
        setErrorMessage("Invalid email or password.");
        console.error("Login error:", error.message);
      });
  };

  return (
    <>
      <form onSubmit={handleLogin}>
        <div>
          <h2>Login</h2>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          />
        </div>

        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
          />
        </div>

        <div style={{ color: "red" }}>{errorMessage}</div>

        <button type="submit">Login</button>
      </form>

      <div>
        <p>
          Don't have an account? <Link to="/register">Register here</Link>
        </p>
      </div>
    </>
  );
}

export default Login;

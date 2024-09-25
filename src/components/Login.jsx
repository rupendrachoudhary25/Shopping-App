import React, { useState } from 'react';
import { getDatabase, ref, push } from 'firebase/database';
import { initializeApp } from 'firebase/app';
import { Link } from "react-router-dom";


// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCEKt9gVlQq8Ooull7VK6pwkflrc1zcZjI",
  authDomain: "firbase-first25.firebaseapp.com",
  projectId: "firbase-first25",
  storageBucket: "firbase-first25.appspot.com",
  messagingSenderId: "744341708688",
  appId: "1:744341708688:web:0798c2fa974444b1009d15",
  databaseURL: "https://firbase-first25-default-rtdb.firebaseio.com/"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
// Email and password validation regex
const emailExp = /^[a-zA-Z0-9\.\_\-]+\@[a-zA-Z0-9]+\.[a-zA-Z]{2,5}$/;
const passExp = /^[a-zA-Z0-9\!\@\#\$\%\^\&\*\(\)\_\-\+\/\>\<]{6,20}$/;

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');

  // Validation functions
  const check = (value, regex, errorMsg, setError) => {
    if (regex.test(value)) {
      setError('');
      return true;
    } else {
      setError(errorMsg);
      return false;
    }
  };

  const check2 = (value1, value2, errorMsg, setError) => {
    if (value1 === value2) {
      setError('');
      return true;
    } else {
      setError(errorMsg);
      return false;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform validation checks
    const isEmailValid = check(email, emailExp, 'Enter a valid email address', setEmailError);
    const isPasswordValid = check(password, passExp, 'Password must be 6-20 characters and include special characters', setPasswordError);

    // If all validations pass, push data to Firebase
    if (isEmailValid && isPasswordValid && isConfirmPasswordValid) {
      const usersRef = ref(database, 'users');
      push(usersRef, {
        email: email,
        password: password
      })
      .then(() => {
        alert("Data saved successfully!");
        setEmail('');
        setPassword('');
        setConfirmPassword('');
      })
      .catch((error) => {
        console.error("Error saving data: ", error);
      });
    }
  }

  return (
    <>
    <form onSubmit={handleSubmit}>
      <div>
        <h2 className='heading1'>Login Account</h2>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your Email"
        />
        <div style={{ color: 'red' }}>{emailError}</div>
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your Password"
        />
        <div style={{ color: 'red' }}>{passwordError}</div>
      </div>
      <button type="submit">Submit</button>
    </form>
    <div className="Register">
      <p>Not a member yet?<Link to="/Register">Register</Link></p>
    </div>
    </>
  );
}

export default Login;
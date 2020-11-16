import React, { useState } from "react";
import { NavLink, withRouter } from "react-router-dom";

import { auth, createUserProfileDocument } from '../../firebase/firebase.utils'
import "./auth-form.styles.scss";

function AuthForm({ authMode, history }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();

    if (authMode === "signup") {
      console.log("Signed up");

      auth.createUserWithEmailAndPassword(email, password).then((user) => {
        createUserProfileDocument(user)
          .then(() => {
            history.push("/");
          })
          .catch((err) => {
            console.log("Error while creating user", err);
            setError(err)
          })
          .catch((error) => {
            console.log("Error while creating user", error);
            setError(error)
          });
      });
      return;
    }

    if (authMode === "login") {
      console.log("Logged in");

      await auth
        .signInWithEmailAndPassword(email, password)
        .then((user) => {
          history.push("/");
          console.log(user);
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <div className='auth-form-container'>
      <form onSubmit={submitHandler} className='auth-form-main'>
        <input
          type="email"
          placeholder="Email"
          value={email}
          className='input'
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          className='input'
          onChange={(e) => setPassword(e.target.value)}
        />
        {authMode === "signup" && (
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            className='input'
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        )}
        <input
          type="submit"
          className='submit-button'
          value={authMode === "signup" ? "SIGN UP" : "LOG IN"}
        />
      </form>
      {error && <p className='error'>{error}</p>}
      {authMode === "signup" ? (
        <div>
          Already have an account?<NavLink className='nav-link' to="login">Sign in</NavLink>
        </div>
      ) : (
        <div>
          Dont have an account <NavLink className='nav-link' to="signup">Sign up</NavLink>
        </div>
      )}
    </div>
  );
}

export default withRouter(AuthForm);

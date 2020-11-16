import React from "react";

import "./nav-bar.styles.scss";
import DogPaw from "../../assets/pawprint.svg";
import { NavLink } from "react-router-dom";
import { auth } from "../../firebase/firebase.utils";

function NavBar({ user, profile }) {
  const handleLogOut = () => {
    auth.signOut()
  }

  return (
    <div className="navbar-container">
      <NavLink to="/" className="logo">
        <img src={DogPaw} alt="dog-paw" />
        <p>Woofer</p>
      </NavLink>
      {profile === "true" ? (
        <button className="my-acc" onClick={handleLogOut}>Log Out</button>
      ) : (
        <NavLink className="my-acc" to={`/profile/${user && user.uid}`}>
          My account
        </NavLink>
      )}
    </div>
  );
}

export default NavBar;

import React from "react";

import "./nav-bar.styles.scss";
import DogPaw from "../../assets/pawprint.svg";
import { NavLink } from "react-router-dom";

function NavBar({ user }) {
  return (
    <div className="navbar-container">
      <NavLink to='/' className='logo'>
        <img src={DogPaw} alt='dog-paw' />
        <p>Woofer</p>
      </NavLink>
      <NavLink className='my-acc' to={`/user/${user && user.uid}`}>My account</NavLink>
    </div>
  );
}

export default NavBar;

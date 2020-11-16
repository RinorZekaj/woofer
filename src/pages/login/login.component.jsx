import React from "react";

import AuthForm from "../../components/auth-form/auth-form.component";
import "./login.styles.scss";
import Face from "../../assets/face.webp";

function LoginPage() {
  return (
    <div className="login-page">
      <div className="auth-form-holder">
        <div className='dog-fave-holder'>
          <img src={Face} alt="dog-face" />
        </div>
        <div className='form-wrapper'>
          <p className='title'>Log In</p>
          <AuthForm authMode="login" />
        </div>
      </div>
    </div>
  );
}

export default LoginPage;

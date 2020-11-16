import React from "react";

import AuthForm from "../../components/auth-form/auth-form.component";
import "./signup.styles.scss";
import Face from "../../assets/face.webp";

function SignUpPage() {
  return (
    <div className="signup-page">
      <div className="auth-form-holder">
        <div className="dog-fave-holder">
          <img src={Face} />
        </div>
        <div className='form-wrapper'>
          <p className='title'>Sign up</p>
          <AuthForm authMode="signup" />
        </div>
      </div>
    </div>
  );
}

export default SignUpPage;

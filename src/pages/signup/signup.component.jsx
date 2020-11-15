import React from 'react'
import AuthForm from '../../components/auth-form/auth-form.component'

import './signup.styles.scss'

function SignUpPage() {
  return (
    <div>
      <p>Sign up</p>
      <div> 
        <AuthForm authMode='signup' />
      </div>
    </div>
  )
}

export default SignUpPage

import React from 'react'
import AuthForm from '../../components/auth-form/auth-form.component'

import './login.styles.scss'

function LoginPage() {
  return (
    <div>
      <p>Log In</p>
      <div>
        <AuthForm authMode='login' />
      </div>
    </div>
  )
}

export default LoginPage

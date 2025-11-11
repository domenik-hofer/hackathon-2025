import React from 'react'
import LoginForm from '../../components/login/LoginForm'
import LoginPageStyles from './LoginPage.module.css'

const LoginPage: React.FC = () => {
  return (
    <div className={LoginPageStyles["login-page-container"]}>
      <main className={LoginPageStyles["login-main"]}>
        <div className={LoginPageStyles["login-header"]}>
          <h1 className={LoginPageStyles["login-title"]}>
            Welcome to ClaimsTrack
          </h1>
          <p className={LoginPageStyles["login-description"]}>
            Track your building insurance claim status with ease
          </p>
        </div>
        <LoginForm />
      </main>
      <footer className={LoginPageStyles["login-footer"]}>
        <p>© 2023 ClaimsTrack. All rights reserved.</p>
      </footer>
    </div>
  )
}
export default LoginPage
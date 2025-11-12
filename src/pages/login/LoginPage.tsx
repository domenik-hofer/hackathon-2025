import React from 'react'
import LoginForm from '../../components/login/LoginForm'
import LoginPageStyles from './LoginPage.module.css'
import claimstrackPng from '../../assets/icons/claimstrack.png';

const LoginPage: React.FC = () => {
  return (
    <div className={LoginPageStyles["login-page-container"]}>
      <main className={LoginPageStyles["login-main"]}>
        <div className={LoginPageStyles["login-header"]}>
            <div className={LoginPageStyles["logo"]}>
                <img src={claimstrackPng} alt='Claimstrack Logo' width='120' />
            </div>
          <h1 className={LoginPageStyles["login-title"]}>
            Willkommen zu ClaimsTrack
          </h1>
          <p className={LoginPageStyles["login-description"]}>
            Verfolgen Sie den Status Ihrer Gebäudeversicherungsansprüche ganz einfach
          </p>
        </div>
        <LoginForm />
      </main>
      <footer className={LoginPageStyles["login-footer"]}>
        <p>© 2025 Hacktracktive Seven. AXA Hackathon 2025.</p>
      </footer>
    </div>
  )
}
export default LoginPage
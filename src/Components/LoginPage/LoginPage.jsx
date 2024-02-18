import React, { useState } from 'react'
import './LoginPage.css'
import userIcon from '../Assets/person.png'
import emailIcon from '../Assets/email.png'
import passwordIcon from '../Assets/password.png'

export default function LoginPage() {
  return (
    <div className="container">
        <div className="header">
            <div className="text">Sign Up</div>
            <div className="underline"></div>
        </div>
        <div className="inputs">
            <div className="input">
                <img src={userIcon} alt="User Icon" />
                <input type="text" placeholder="Name" />
            </div>
            <div className="input">
                <img src={emailIcon} alt="Email Icon" />
                <input type="email" placeholder="Email Address" />
            </div>
            <div className="input">
                <img src={passwordIcon} alt="Password Icon" />
                <input type="password" placeholder="Password" />
            </div>
        <div className="forgot-password">Lost Password? <span>Click Here!</span></div>
        </div>
        <div className="submit-container">
            <div className="submit">Sign Up</div>
            <div className="submit">Login</div>
        </div>
    </div>
  )
}

import { React,  useState } from 'react'
import './LoginPage.css'
import userIcon from '../Assets/person.png'
import emailIcon from '../Assets/email.png'
import passwordIcon from '../Assets/password.png'

export default function LoginPage() {

    const [action, setAction] = useState("Sign Up")

  return (
    <div className="container">
        <div className="header">
            <div className="text">Sign Up</div>
            <div className="underline"></div>
        </div>
        <div className="inputs">
            {action === "Sign Up" ? 
            <div><div className="input">
                <img src={userIcon} alt="User Icon" />
                <input type="text" placeholder="Name" />
            </div></div> : ""
            }
            <div className="input">
                <img src={emailIcon} alt="Email Icon" />
                <input type="email" placeholder="Email Address"/>
            </div>
            <div className="input">
                <img src={passwordIcon} alt="Password Icon" />
                <input type="password" placeholder="Password" />
            </div>
        </div>
        {action === "Login" ? 
            <div className="forgot-password">Forgot Password? <span>Click Here!</span></div> : ""
        }
        <div className="submit-container">
            <div className={action === "Login" ? "submit gray" : "submit"} onClick={() => {setAction("Sign Up")}}>Sign Up</div>
            <div className={action === "Sign Up" ? "submit gray" : "submit"} onClick={() => {setAction("Login")}}>Login</div>
        </div>
    </div>
  )
}

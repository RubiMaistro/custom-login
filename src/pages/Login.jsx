import React, {useState} from "react";
import { GoogleLogin } from '@react-oauth/google';
import jwt_decode from "jwt-decode";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";

export const Login = (props) => {
  const [email, SetEmail] = useState('');
  const [password, SetPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  const loginWithGoogle = useGoogleLogin({
    onSuccess: async response => {
      const res = await axios.get("https://www.googleapis.com/oauth2/v3/userinfo", {
        headers: {
          "Authorization": "Bearer " + response.access_token
        }
      })
      props.setCredentials(res.data.email, res.data.password);
    }
  });

  return (
    <div className="inner-container">
      <div className="inner-fill">
        <div className="login-form-container">
          <div className="logo">
              <img src="/images/syncee-logo-300px.png" />
          </div>
          <div className="login-form-head">
              <div className="title">Login</div>
              <div className="subtitle">See your growth and get consulting support!</div>
          </div>
          <div className="google-auth-container">
              <button onClick={loginWithGoogle}>
                Sign in with Google
              </button>
              <div className="separator">or Sign in with Email</div>
          </div>
          <form className="login-form" onSubmit={handleSubmit}>
            <div className="login-form-group">
              <label htmlFor="email">Email*</label>
              <input value={email} onChange={(e) => SetEmail(e.target.value)} type={"email"} placeholder="mail@website.com" id="email" />
            </div>
            <div className="login-form-group">
              <label htmlFor="password">Password*</label>
              <input value={password} onChange={(e) => SetPassword(e.target.value)} type={"password"} placeholder="Min. 8 character" id="password" />
            </div>
            <div className="remember-forgot-password">
              <div className="remember-me">
                <input type={"checkbox"} />
                <span>Remember me</span>
              </div>
              <div className="forget-password">
                <span>Forget password?</span>
              </div>
            </div>
            <button className="submit-btn" onClick={() => props.setCredentials(email, password)}>Login</button>
          </form>
          <div className="register">
            <div className="text">
              Not registered yet? 
              <span>Create an Account</span>
            </div>
          </div>
          <div className="login-form-foot">
            <span>2022 Syncee, All rights reseverd.</span>
          </div>
        </div>
      </div>
      <div className="inner-background">
        <img src="/images/syncee_frontend_test_wallpaper.png" />
      </div>
    </div>
  )
}

export default Login;
import React from 'react';
import Svg from '../assets/undraw_Login_v483.svg';
import fire from '../config/firebase.js';

class Login extends React.Component {
  login() {
    let email = document.querySelector('#email').value;
    let password = document.querySelector('#password').value;
    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((u) => {
        console.log('Succ Logged in');
      })
      .catch((err) => {
        console.log('Error:' + err.toString());
      });
  }

  signup() {
    let email = document.querySelector('#email').value;
    let password = document.querySelector('#password').value;
    fire
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((u) => {
        console.log('Succ signed up in');
      })
      .catch((err) => {
        console.log('Error:' + err.toString());
      });
  }
  render() {
    return (
      <>
        <div className="flex-center">
          <div className="sign-in-up_ctn d-flex anim_fade-in">
            <div className="logo_ctn flex-center">
              <img src={Svg} alt="" />
            </div>

            <div className="login_ctn flex-center">
              <div className="info_ctn">
                <h1>Login</h1>
              </div>
              <div>
                <h3>Your E-mail:</h3>
                <input
                  type="text"
                  id="email"
                  placeholder="enter your email..."
                />
              </div>
              <div>
                <h3>Password:</h3>
                <input
                  type="password"
                  placeholder="enter your password"
                  id="password"
                />
              </div>
              <div className="flex-center btn-log-in-ctn">
                <button onClick={this.login} className="main_btn-login">
                  Login
                </button>
                <button onClick={this.signup} className="sec_btn-login">
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Login;

import React from 'react';

import fire from '../config/fire.js';

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
      <React.Fragment>
        <div>
          <h1>Email</h1>
          <input type="text" id="email" placeholder="enter your email..." />
        </div>
        <div>
          <h1>Password</h1>
          <input
            type="password"
            placeholder="enter your password"
            id="password"
          />
        </div>
        <div>
          <button onClick={this.login}>Login</button>
          <button onClick={this.signup}>Sign Up</button>
        </div>
      </React.Fragment>
    );
  }
}

export default Login;

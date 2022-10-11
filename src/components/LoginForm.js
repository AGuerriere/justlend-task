import React, { useState } from 'react';
import { ReactComponent as Logo } from '../logo.svg';

function LoginForm({ Login, error }) {
  const [details, setDetails] = useState({name:"User", email:"", password:""});

  const submitHandler = e => {
    e.preventDefault();

    Login(details);
  }

  return (
    <div>
      <Logo />
      <form onSubmit={submitHandler}>
      <div className="form-inner"> 
        {(error != "")? (<div className="error">{error}</div>) : ""}

        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input type="email" name="email" id="email" placeholder="Enter email address" onChange={e => setDetails({...details, email: e.target.value})} value={details.email}/>
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" placeholder="Enter your password" onChange={e => setDetails({...details, password: e.target.value})} value={details.password}/>
        </div>
        <div className="form-group">
        <a href="#" className="forgot-password">Forgot password?</a>
        </div>
      </div>
      <div className="submit-button">
        <input type="submit" value="Login" />
      </div>
      
    </form>
    </div>
  )
}

export default LoginForm
import React, { useState } from 'react';
import { ReactComponent as Logo } from '../logo.svg';

function LoginForm({ Login, error }) {
  const [details, setDetails] = useState({name:"User", email:"", password:""});

  const submitHandler = e => {
    e.preventDefault();

    Login(details);
  }

  return (
    <form onSubmit={submitHandler}>
      <Logo />
      <div className="form-inner"> 
        {(error != "")? (<div className="error">{error}</div>) : ""}

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" name="email" id="email" onChange={e => setDetails({...details, email: e.target.value})} value={details.email}/>
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" name="password" id="password" onChange={e => setDetails({...details, password: e.target.value})} value={details.password}/>
        </div>
        <input type="submit" value="LOGIN" />
      </div>
    </form>
  )
}

export default LoginForm
import { useState } from "react";

export default function Login() {
  const[email,setEmail] = useState('');
  const[password,setPassword] = useState('');

  function handleSubmit(e){
    e.preventDefault()
    console.log("login");
    console.log(email);
    console.log(password);
    
  }
  function handleEmail(e){
     setEmail(e.target.value)
 
     
  }

  function handlePAssword(e) {
    setPassword(e.target.value);
    
    
  }
  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" onChange={handleEmail} />
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input id="password" type="password" name="password" onClick={handlePAssword} />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button onChange={handleSubmit} className="button">Login</button>
      </p>
    </form>
  );
}

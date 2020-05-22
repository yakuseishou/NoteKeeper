import React, { useState } from "react";
import Axios from "axios";

function RegisterForm(props) {
    const [pwError, setPWError] = useState(false);
    const [regiErr, setRegiErr] = useState(false);

    const [user, setUser] = useState({
        username: "",
        password: "",
        confirm: ""
      });
    
      function handleChange(event) {
            const { name, value } = event.target;
    
            setUser(prev => {
            return {
                ...prev,
              [name]: value
          };
          });
      }
    
      function addUser(event) {
    
        if (user.password === user.confirm) {
            Axios.post("http://localhost:5000/user/add", user)
            .then(res => {
              props.setUser(res.data);
              props.setRedirect(true);
            })
            .catch(err => {
                setRegiErr(true);
                console.log('Error: ' + err);
            });         
        } else {
            setPWError(true);
        }
        
          setUser({
            username: "",
            password: "",
            confirm: ""
          });
          event.preventDefault();
      }
      
  return (
    <div>
    {pwError && <div>Password does not match</div>}
    {regiErr && <div>Username exsit</div>}
    <div className="card">
    <div className="card-body">
      <form>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input type="text" className="form-control" 
            name="username"
            onChange={handleChange} 
            value={user.username}
            />
        </div>
        <div className="form-group">
               <label>Password</label>
               <input type="password" className="form-control"
                   name="password"
                   onChange={handleChange}
                   value={user.password}
               />
        </div>
        <div className="form-group">
          <label htmlFor="password">Confirm Password</label>
          <input type="password" className="form-control" 
            onChange={handleChange} 
            name="confirm"
            value={user.confirm}
            />
        </div>
        <button onClick={addUser} className="btn btn-dark">Register</button>
      </form>
    </div>
    </div>
  </div>
  );
}

export default RegisterForm;
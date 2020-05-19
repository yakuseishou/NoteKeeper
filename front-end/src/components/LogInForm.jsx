import React, { useState } from "react";
import {Redirect} from "react-router-dom";
import Axios from "axios";

function LogInForm(props) {
    
    const [user, setUser] = useState({
        username: "",
        password: ""
      });

    const [redirect, setRedirect] = useState(false);
      
    function handleChange(event) {
          const { name, value } = event.target;
    
          setUser(prev => {
          return {
              ...prev,
            [name]: value
        };
        });
    }

    function submitUser(event) {
        // props.validUser(user);

        Axios.post("http://localhost:5000/user/", user)
            .then(res => {
                console.log(res.data);
                setRedirect(true);
            })
            .catch(err => {
                props.auth();
                console.log('Error: ' + err);
            });
        
        
        setUser({
            username: "",
            password: ""
        });

        event.preventDefault();
      }

    function renderRedirect() {
        if (redirect) {
            return <Redirect to='/note' />;
        }
    }
    
    return (
        <div>
        {renderRedirect()}
          <form>
          <div className="form-group">
               <label>Username</label>
               {/* <input className="form-control"
                   name="username"
                   onChange={handleChange}
                   value={user.email}
                   placeholder="username"
               /> */}
              <input className="form-control"
                name="username"
                onChange={handleChange}
                value={user.username}
                placeholder=""
              />
             </div>
             <div className="form-group">
               <label>Password</label>
               <input type="password" className="form-control"
                   name="password"
                   onChange={handleChange}
                   value={user.password}
                   placeholder=""
               />
             </div>
            <button onClick={submitUser} className="btn btn-dark">Login</button>
          </form>
        </div>
    );
}

export default LogInForm;
import React, { useState } from "react";
import {Redirect} from "react-router-dom";
import GoogleLogIn from "./GoogleLogIn";
import LogInForm from "./LogInForm";

function LogIn(props) {
    const [auth, setAuth] = useState(false);
    const [regi, setRegi] = useState(false);

    function handleRegi() {
      setRegi(true);
    }
  
  
    function renderRedirect() {
      if (regi) {
          return <Redirect to='/register' />;
      }
    }

    
    function handleAuth() {
        setAuth(true);
    }

    return (
        <div className="container mt-5">
        {renderRedirect()}
            <h1>Login</h1>
            {auth && <p>Incorrect Log in info please try again...</p>}
            <div className="row">
              <div className="col-sm-7">
                <div className="card shadow-lg p-2 mb-3 bg-white rounded">
                  <div className="card-body">
                    <LogInForm
                        auth={handleAuth}
                        setUser={props.setUser}
                    />
                    <div className="signUp">
                        <div>
                            Don't have an account?
                        </div>
                          <button onClick={handleRegi} className="btn btn-dark">SignUp</button>
                    </div>
                  </div>
                </div>
              </div>
            <GoogleLogIn />
            </div>
        </div>
    );
}

export default LogIn;
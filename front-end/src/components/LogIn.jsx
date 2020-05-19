import React, { useState } from "react";
import GoogleLogIn from "./GoogleLogIn";
import LogInForm from "./LogInForm";

function LogIn() {
    const [auth, setAuth] = useState(false);
    
    function handleAuth() {
        setAuth(true);
    }

    return (
        <div className="container mt-5">
            <h1>Login</h1>
            {auth && <p>Incorrect Log in info please try again...</p>}
            <div className="row">
              <div className="col-sm-7">
                <div className="card shadow-lg p-2 mb-3 bg-white rounded">
                  <div className="card-body">
                    <LogInForm
                        auth={handleAuth}
                    />
                    <div className="signUp">
                        <p>
                            Don't have an account?
                        </p>
                        <a href="/register" className="btn btn-dark" role="button" aria-pressed="true">SignUp</a>
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
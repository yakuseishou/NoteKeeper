import React from "react";
import GoogleLogIn from "./GoogleLogIn";

function Register() {
    return (
        <div className="container mt-5">
            <h1>Register</h1>

            <div className="row">
              <div className="col-sm-8">
                <div className="card">
                  <div className="card-body">

                    <form action="/register" method="POST">
                      <div className="form-group">
                        <label for="email">Email</label>
                        <input type="email" className="form-control" name="username"/>
                      </div>
                      <div className="form-group">
                        <label for="password">Password</label>
                        <input type="password" className="form-control" name="password"/>
                      </div>
                      <button type="submit" className="btn btn-dark">Register</button>
                    </form>

                  </div>
                </div>
              </div>
            <GoogleLogIn />

            </div>
        </div>
    );
}

export default Register;
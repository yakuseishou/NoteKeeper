import React from "react";

function GoogleLogIn() {
    return (
        <div className="col-sm-4">
            <div className="card shadow-lg mb-3 bg-danger rounded google-logIn">
              <div className="card-body">
                <a className="btn btn-block go-log-text" href="/auth/google" role="button">
                  <i className="fab fa-google google-icon"></i>
                  Sign In with Google
                </a>
              </div>
            </div>
        </div>
    );
}

export default GoogleLogIn;
import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import GoogleLogIn from "./GoogleLogIn";
import RegisterForm from "./RegisterForm";

function Register(props) {

  const [redirect, setRedirect] = useState(false);

  function renderRedirect() {
      if (redirect) {
          return <Redirect to='/note' />;
      }
  }

  return (
    <div className="container mt-5">
      {renderRedirect()}
      <h1>Register</h1>
      <div className="row">
        <div className="col-sm-8">
          <RegisterForm
            setRedirect={setRedirect}
            setUser={props.setUser}
          />
        </div>
        <GoogleLogIn />
      </div>
    </div>
  );
}

export default Register;
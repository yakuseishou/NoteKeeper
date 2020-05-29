import React, { useState } from "react";
import {Redirect} from "react-router-dom";
import axios from "axios";
import HighlightIcon from "@material-ui/icons/Highlight";

function Header(props) {

  const [redirect, setRedirect] = useState(false);

  function logOut() {
    axios.get("http://localhost:5000/user/logout")
    .then(res => {
      console.log(res);
      props.setLogState(false);
      setRedirect(true);
    }
    )
    .catch(err => {
      console.log(err);
    });
  }


  function renderRedirect() {
    if (redirect) {
        return <Redirect to='/' />;
    }
  }

  return (
    <header>
    {renderRedirect()}
      <h1>
      <a href="/">
        <HighlightIcon />
        Keeper
      </a>
      {(props.logState) && 
      <button onClick={logOut} className="btn btn-dark logout-btn">LogOut</button>
      }
      </h1>
    </header>
  );
}

export default Header;

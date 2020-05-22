import React, { useState } from "react";
import {Redirect} from "react-router-dom";
import HighlightIcon from "@material-ui/icons/Highlight";

function Header(props) {

  const [redirect, setRedirect] = useState(false);

  function logOut() {
    props.setLogState();
    setRedirect(true);
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
      {(props.logState != "false") && 
      <button onClick={logOut} className="btn btn-dark logout-btn">LogOut</button>
      }
      </h1>
    </header>
  );
}

export default Header;

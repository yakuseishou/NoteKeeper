import React from "react";


function LogOutBtn(props) {

  return (
      <button value={props.state} onClick={() => props.logOut} className="btn btn-dark logout-btn">LogOut</button>
  );
}

export default LogOutBtn;
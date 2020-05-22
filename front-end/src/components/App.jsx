import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import DisplayNotes from "./DisplayNotes";
import LogIn from "./LogIn";
import Register from "./Register";

function App() {
  const [userId, setUserId] = useState("false");

  function setLogState() {
    setUserId("false");
  }

  return (
    <div>
      <Router>
        <Header logState={userId} setLogState={setLogState}/>
          <Route 
            path="/" 
            exact render={(props) => <LogIn {...props} setUser={setUserId} />}
          />
          <Route 
            path="/register" 
            render={(props) => <Register {...props} setUser={setUserId} />}
          />
          <Route
            path='/note'
            render={(props) => <DisplayNotes {...props} user_id={userId} />}
          />
      </Router>
      <Footer />
    </div>
  );
}

export default App;

import React, { useState } from "react";
import axios from "axios";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import DisplayNotes from "./DisplayNotes";
import LogIn from "./LogIn";
import Register from "./Register";

function App() {

  const [userId, setUserId] = useState(false);

  return (
    <div>
      <Router>
        <Header logState={userId} setLogState={setUserId}/>
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
            render={(props) => <DisplayNotes {...props} user_id={userId} setLog={setUserId} />}
          />
      </Router>
      <Footer />
    </div>
  );
}

export default App;

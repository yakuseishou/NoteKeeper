import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import DisplayNotes from "./DisplayNotes";
import LogIn from "./LogIn";
import Register from "./Register";

function App() {
  const [userId, setUserId] = useState("false");

  return (
    <div>
      <Router>
        <Header />
          <Route 
            path="/" 
            exact render={(props) => <LogIn {...props} user_id={userId} setUser={setUserId} />}
          />
          <Route path="/register" component={Register} />
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

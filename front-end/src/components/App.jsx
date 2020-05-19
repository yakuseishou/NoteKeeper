import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import DisplayNotes from "./DisplayNotes";
import LogIn from "./LogIn";
import Register from "./Register";

function App() {

  return (
    <div>
      <Router>
        <Header />
          <Route path="/" exact component={LogIn} />
          <Route path="/register" component={Register} />
          <Route path="/note" component={DisplayNotes} />
        <Footer />
      </Router>
    </div>
  );
}

export default App;

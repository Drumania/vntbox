import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Event from "./pages/Event";

function App() {
  return (
    <div className="container">
      <Router>
        <Header />

        <section className="row">
          <Switch>
            <Route path="/Profile" component={Profile} />
            <Route path="/Event" component={Event} />
            <Route path="/" component={Home} />
          </Switch>
        </section>
      </Router>
    </div>
  );
}

export default App;

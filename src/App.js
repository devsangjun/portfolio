import React from "react";
import "./css/App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navbar, Hero, About } from "./components";
import { GlobalStyle } from "./global";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Hero />
        <About />
      </Router>
      <GlobalStyle />
    </div>
  );
}

export default App;

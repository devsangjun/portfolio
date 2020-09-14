import React from "react";
import "./css/App.css";
import { Navbar, Hero, About, Projects, Footer } from "./components";
import { GlobalStyle } from "./global";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Footer />
      <GlobalStyle />
    </div>
  );
}

export default App;

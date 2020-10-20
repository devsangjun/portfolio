import React, { useEffect, useState } from "react";
import "./css/App.css";
import { IconButton } from "@material-ui/core";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import { Navbar, Hero, MySkills, Projects, Footer } from "./components";
import { GlobalStyle } from "./global";
import { Link } from "react-scroll";

function App() {
  const [showScrollButton, setShowScrollButton] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () =>
      setShowScrollButton(window.pageYOffset > 200)
    );
  }, []);
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <MySkills />
      <Projects />
      <Footer />
      <Link to="nav-bar">
        <IconButton
          className="shadow"
          style={{
            opacity: showScrollButton ? "1" : "0",
            position: "fixed",
            right: "2rem",
            bottom: "2rem",
            backgroundColor: "#1E8DFF",
            transition: "all 300ms ease-in-out",
          }}
          disabled={!showScrollButton}
        >
          <ArrowUpward
            style={{
              fontSize: "1.5em",
              color: "white",
            }}
          />
        </IconButton>
      </Link>

      <GlobalStyle />
    </div>
  );
}

export default App;

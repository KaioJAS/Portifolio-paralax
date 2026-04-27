import React from "react";
import "./App.css";
import CustomCarousel from "./components/carousel/Carousal";
import TitleMessage from "./components/title-message/TitleMessage";
import About from "./views/about/About";
import { Parallax } from "react-parallax";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";
import Container from "react-bootstrap/Container";
import Skills from "./views/skills/Skills";

import Projects from "./views/projects/projects";
import Contact from "./views/contact/Contact";

function App() {
  return (
    <div className="App" style={{ position: "relative" }}>
      <CustomCarousel />
      <TitleMessage />
      <div>
        <Parallax
          blur={{ min: -30, max: 30 }}
          bgImage={require("./assets/img/parallex/background.webp")}
          bgImageAlt=""
          strength={-200}
        >
          <div style={{ backgroundColor: 'rgba(17, 18, 22, 0.85)' }}>
            <Container className="container-box rounded">
              <Fade left duration={2000}>
                <About />
              </Fade>
            </Container>
          </div>
        </Parallax>
      </div>
      <div>
        <div>
          <Container className="container-box rounded">
            <Fade right duration={2000}>
              <Skills />
            </Fade>
          </Container>
        </div>

        <div>
          <Container className="container-box rounded">
            <Slide bottom duration={1000}>
              <hr />
              <Projects />
            </Slide>
          </Container>
        </div>


      </div>

      <div>
        <Container className="container-box rounded">
          <Fade bottom duration={2000}>
            <hr />
            <Contact />
          </Fade>
        </Container>
      </div>
    </div>
  );
}

export default App;

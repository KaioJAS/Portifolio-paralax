import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import "./contact.css";

const Contact = () => {
  const [copied, setCopied] = useState(false);

  return (
    <div id="contact" className="pb-5">
      <h1 className="pt-3 text-center font-details-b pb-4 text-white">CONTATO</h1>
      <Container>
        <Row>
          <Col className="d-flex justify-content-center flex-wrap">
            <div className="m-2">
              <Button 
                variant="outline-light" 
                title="Copiar kaiojas1@gmail.com"
                onClick={() => {
                  navigator.clipboard.writeText("kaiojas1@gmail.com");
                  setCopied(true);
                  setTimeout(() => setCopied(false), 2000);
                }}
              >
                <i className={copied ? "fas fa-check-circle text-success" : "fas fa-envelope-square"}></i> {copied ? "Copiado!" : "Copiar Email"}
              </Button>
            </div>
            <div className="m-2">
              <a href="https://www.linkedin.com/in/kaio-jarbson-araujo-de-souza" target="_blank" rel="noopener noreferrer">
                <Button variant="outline-light" title="Visit my LinkedIn">
                  <i className="fab fa-linkedin"></i> LinkedIn
                </Button>
              </a>
            </div>

            <div className="m-2">
              <a href="https://github.com/kaiojas" target="_blank" rel="noopener noreferrer">
                <Button variant="outline-light" title="My other projects">
                  <i className="fab fa-github-square"></i> GitHub
                </Button>
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;
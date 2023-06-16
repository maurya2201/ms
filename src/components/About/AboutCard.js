import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Maurya Soni </span>
            from <span className="purple"> Ahmedabad, India.</span>
            <br /> I am a final year student pursuing an BTECH
            in IT at CHARUSAT.
            <br />
            Additionally, I am currently doing internship as a Web developer at
            Raven Technolabs.
            <br />
            <br />
            Apart from developing, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Drawing
            </li>
            <li className="about-activity">
              <ImPointRight /> Discovering New Devops Tools
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">MAURYA</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

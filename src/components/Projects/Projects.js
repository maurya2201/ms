import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/5.webp";
import emotion from "../../Assets/5.2.webp";
import editor from "../../Assets/5.1.webp";
import chatify from "../../Assets/1.png"
import suicide from "../../Assets/6.9.jpeg";
import bitsOfCode from "../../Assets/2.png";




function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
         <strong className="purple">MY PROJECTS </strong>
        </h1>
        <p style={{ color: "white" }}>
          
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="COLLEGE WEBSITE"
              description=<center>TECHNOLOGIES USED:-HTML,CSS </center>
              ghLink="https://github.com/maurya2201/COLLEGE-WEBSITE"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="TRAVEL WEBSITE"
              description="TECHNOLOGIES USED:-HTML,CSS,JS,SCSS"
              ghLink="https://github.com/maurya2201/TRAVEL-WEBSITE"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="BOOK RECOMMENDATION SYSTEM"
              description="MODEL:-PYTHON FRONTEND:-HTML,CSS AND BOOTSTRAP BACKEND:-FLASK"
              ghLink="https://github.com/maurya2201/BOOK-RECOMMENDATION-SYSTEM"
           
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title=<center>E-COMMERCE-USING-REACT-JS</center>
              description=<center>TECHNOLOGIES USED:-REACT-JS</center>
              ghLink="https://github.com/maurya2201/E-COMMERCE-USING-REACT-JS"
            />
          </Col>
          <Col md={4} className="project-card">
          <ProjectCard
            imgPath={suicide}
            isBlog={false}
            title="PLANT APP"
            description={<center>TECHNOLOGIES USED:- ANDROID(JAVA)</center>}
            ghLink="https://github.com/maurya2201/PLANT-APP.git"
          />
        </Col>        

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title=<center>CHAT APPLICATION ON EC2</center>
              description=<center>USED:-REACT.JS,FIREBASE AND AWS</center>
              ghLink="https://github.com/maurya2201/CHAT-APPLICATION"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

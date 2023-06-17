import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/5.webp";
import emotion from "../../Assets/5.2.webp";
import editor from "../../Assets/5.1.webp";
import chatify from "../../Assets/1.png"
import suicide from "../../Assets/lms.png";
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
              title=<center>COLLEGE WEBSITE</center>
              description={<center>------------TECHNOLOGIES USED---------------
                <ul>
                 <li>HTML,CSS(FRONTEND)</li> 
                  </ul>
                  </center>}
                  ghLink="https://github.com/maurya2201/COLLEGE-WEBSITE"
                  demoLink="https://maurya2201.github.io/COLLEGE-WEBSITE/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title=<center>TRAVEL WEBSITE</center>
              description={<center>------------TECHNOLOGIES USED---------------
                <ul>
                 <li>HTML,CSS,JS(FRONTEND)</li> 
                  </ul>
                  </center>}
                 ghLink="https://github.com/maurya2201/TRAVEL-WEBSITE"
                 demoLink="https://maurya2201.github.io/TRAVEL-WEBSITE/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title=<center>BOOK RECOMMENDATION SYSTEM</center>
              description={<center>------------TECHNOLOGIES USED---------------
                <ul>
                 <li>HTML,CSS,JS,BOOTSTRAP(FRONTEND)</li> 
                 <li>FLASK(BACKEND)</li> 
                 <li>PYTHON(MODEL)</li>  
                  </ul>
                  </center>}
                  ghLink="https://github.com/maurya2201/BOOK-RECOMMENDATION-SYSTEM"
            />
            
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title=<center>E-COMMERCE-USING-REACT-JS</center>
              description={<center>------------TECHNOLOGIES USED---------------
                <ul>
                 <li>REACT(FRONTEND)</li> 
                  </ul>
                  </center>}
              ghLink="https://github.com/maurya2201/E-COMMERCE-USING-REACT-JS"
              demoLink="https://fashionhubreactjs.netlify.app/"
            />
            
          </Col>
         <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title=<center>CHAT APPLICATION</center>
              description={<center>------------TECHNOLOGIES USED---------------
                <ul>
                 <li>REACT(FRONTEND)</li> 
                 <li>FIREBASE(DATABASE)</li> 
                  </ul>
                  </center>}
              ghLink="https://github.com/maurya2201/CHAT-APPLICATION"
              demoLink="https://chatapprnf.netlify.app/"
            />
          </Col>
          <Col md={4} className="project-card">
          <ProjectCard
            imgPath={suicide}
            isBlog={false}
            title=<center>LIBRARY MANAGEMENT SYSTEM</center>
            description={<center>------------TECHNOLOGIES USED---------------
            <ul>
             <li>REACT(FRONTEND)</li> 
             <li>NODE(BACKEND)</li> 
             <li>MONGODB(DATABASE)</li> 
              </ul>
              </center>}
            ghLink="https://github.com/maurya2201/backend-api.git"
            demoLink="https://lms-bugq.onrender.com"
          />
        </Col> 
        </Row>
      </Container>
     
    </Container>

    
  

  );
}

export default Projects;

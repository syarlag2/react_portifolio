import { Col, Container, Row } from "react-bootstrap";
import colorSharp2 from "../assets/img/color-sharp2.png";
import projImg1 from "../assets/img/project-img1.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {
  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col>
            <TrackVisibility once>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeInUp" : ""}>
                  <h2>Projects</h2>
                  <p>
                    Below is one of my featured works — a Dynamic Project Gallery built using React and Tailwind CSS, fully responsive and deployed live. Click the image to view the live project.
                  </p>
                </div>
              }
            </TrackVisibility>
            <Row className="justify-content-center mt-4">
              <Col md={6} lg={4}>
                <a
                  href="https://syarlag2.github.io/Dynamic-project-Gallery/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none" }}
                >
                  <div className="proj-imgbx">
                    <img src={projImg1} alt="Dynamic Project Gallery" style={{ width: "100%", borderRadius: "12px" }} />
                    <div className="proj-txtx">
                      <h4 style={{ color: "#fff" }}>Dynamic Project Gallery</h4>
                      <span style={{ color: "#ddd" }}>React • Tailwind • Live Demo</span>
                    </div>
                  </div>
                </a>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="bg" />
    </section>
  );
};

import { Col, Container, Row } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/header-img.svg";
import "animate.css";
import TrackVisibility from "react-on-screen";
import { TypeAnimation } from "react-type-animation";

export const Banner = () => {
  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility once>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible
                      ? "animate__animated animate__fadeInUp"
                      : ""
                  }
                >
                  <span className="tagline">Welcome to my space</span>
                  <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
                    {`Hey! I'm`}
                  </h1>

                  <TypeAnimation
                    sequence={[
                      "Developer",
                      2000,
                      "Frontend",
                      300,
                      "Backend",
                      200,
                      "FullStack",
                      1200,
                      "sai snehith yarlagadda",
                      2000,
                      () => {
                        console.log("Sequence completed");
                      },
                    ]}
                    wrapper="span"
                    cursor={true}
                    repeat={Infinity}
                    style={{
                      fontSize: "65px",
                      display: "inline-block",
                    }}
                  />

                  
                  <p>
                  <p>
                    I'm a graduate student in Computer Science with a strong passion for technology and innovation. I enjoy building creative and efficient solutions through full-stack development, and I’m constantly exploring new tools to stay ahead in the ever-evolving tech landscape. Whether it’s front-end design or back-end logic, I bring dedication, curiosity, and a drive to make an impact through code.
                    </p>

                  </p>

                  <button onClick={() => console.log("connect")}>
                    Let's connect <ArrowRightCircle size={25} />
                  </button>
                </div>
              )}
            </TrackVisibility>
          </Col>

          <Col xs={12} md={6} xl={5}>
            <img src={headerImg} alt="Header Image" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

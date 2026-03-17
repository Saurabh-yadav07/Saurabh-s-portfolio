import { Container, Row, Col, Form, Button } from "react-bootstrap";

function Contact() {
  return (
    <section id="contact" className="bg-card">
      <Container>
        <Row className="justify-content-center">
          <Col lg={8}>
            <div className="text-center mb-5">
              <h2 className="display-4 fw-bold mb-3">
                Get In <span className="gradient-text">Touch</span>
              </h2>
              <div
                className="mx-auto mb-4"
                style={{
                  width: "80px",
                  height: "4px",
                  background:
                    "linear-gradient(90deg, var(--primary-color), #00ddff)",
                  borderRadius: "2px",
                }}
              />
              <p className="text-secondary-custom lead">
                Have a project in mind? Let's work together to create something
                amazing.
              </p>
            </div>

            <Row className="g-4 mb-5">
              <Col md={4}>
                <div className="text-center p-4 bg-dark-custom rounded-3 border border-custom h-100">
                  <div
                    className="mb-3 mx-auto d-flex align-items-center justify-content-center"
                    style={{
                      width: "60px",
                      height: "60px",
                      backgroundColor: "var(--accent-glow)",
                      borderRadius: "50%",
                    }}
                  >
                    <i className="bi bi-envelope-fill fs-3 text-primary-custom"></i>
                  </div>
                  <h5 className="text-light mb-2">Email</h5>
                  <a
                    href="mailto:sayas.290797@gmail.com"
                    className="text-secondary-custom text-decoration-none"
                  >
                    sayas.290797@gmail.com
                  </a>
                </div>
              </Col>

              <Col md={4}>
                <div className="text-center p-4 bg-dark-custom rounded-3 border border-custom h-100">
                  <div
                    className="mb-3 mx-auto d-flex align-items-center justify-content-center"
                    style={{
                      width: "60px",
                      height: "60px",
                      backgroundColor: "var(--accent-glow)",
                      borderRadius: "50%",
                    }}
                  >
                    <i className="bi bi-github fs-3 text-primary-custom"></i>
                  </div>
                  <h5 className="text-light mb-2">GitHub</h5>
                  <a
                    href="https://github.com/Saurabh-yadav07"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-secondary-custom text-decoration-none"
                  >
                    @Saurabh-yadav07
                  </a>
                </div>
              </Col>

              <Col md={4}>
                <div className="text-center p-4 bg-dark-custom rounded-3 border border-custom h-100">
                  <div
                    className="mb-3 mx-auto d-flex align-items-center justify-content-center"
                    style={{
                      width: "60px",
                      height: "60px",
                      backgroundColor: "var(--accent-glow)",
                      borderRadius: "50%",
                    }}
                  >
                    <i className="bi bi-linkedin fs-3 text-primary-custom"></i>
                  </div>
                  <h5 className="text-light mb-2">LinkedIn</h5>
                  <a
                    href="https://linkedin.com/in/saurabh-yadav007"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-secondary-custom text-decoration-none"
                  >
                    /saurabh-yadav007
                  </a>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Contact;

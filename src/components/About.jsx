import { Container, Row, Col } from 'react-bootstrap';

function About() {
  return (
    <section id="about" className="bg-dark-custom">
      <Container>
        <Row className="justify-content-center">
          <Col lg={10}>
            <div className="text-center mb-5">
              <h2 className="display-4 fw-bold mb-3">
                About <span className="gradient-text">Me</span>
              </h2>
              <div 
                className="mx-auto mb-4"
                style={{
                  width: '80px',
                  height: '4px',
                  background: 'linear-gradient(90deg, var(--primary-color), #00ddff)',
                  borderRadius: '2px'
                }}
              />
            </div>

            <Row className="g-4">
              <Col lg={6}>
                <div className="animate-slideInLeft">
                  <h3 className="h4 text-primary-custom mb-4">Who I Am</h3>
                  <p className="text-secondary-custom mb-4">
                    I'm a Frontend Developer passionate about creating beautiful, functional, 
                    and user-centered digital experiences. With a strong foundation in React 
                    and modern web technologies, I bring ideas to life through clean code and 
                    intuitive design.
                  </p>
                  <p className="text-secondary-custom mb-4">
                    My journey in web development started with a curiosity about how websites work, 
                    and has evolved into a career where I get to build solutions that make a 
                    difference in people's lives. I'm constantly learning and staying updated with 
                    the latest trends in frontend development.
                  </p>
                </div>
              </Col>

              <Col lg={6}>
                <div className="animate-slideInRight">
                  <h3 className="h4 text-primary-custom mb-4">What I Do</h3>
                  <div className="mb-3">
                    <div className="d-flex align-items-center mb-2">
                      <div 
                        className="me-3"
                        style={{
                          width: '8px',
                          height: '8px',
                          backgroundColor: 'var(--primary-color)',
                          borderRadius: '50%'
                        }}
                      />
                      <h5 className="mb-0 text-light">Responsive Web Design</h5>
                    </div>
                    <p className="text-secondary-custom ms-4">
                      Creating layouts that work seamlessly across all devices and screen sizes.
                    </p>
                  </div>

                  <div className="mb-3">
                    <div className="d-flex align-items-center mb-2">
                      <div 
                        className="me-3"
                        style={{
                          width: '8px',
                          height: '8px',
                          backgroundColor: 'var(--primary-color)',
                          borderRadius: '50%'
                        }}
                      />
                      <h5 className="mb-0 text-light">React Development</h5>
                    </div>
                    <p className="text-secondary-custom ms-4">
                      Building interactive, performant single-page applications with React.
                    </p>
                  </div>

                  <div className="mb-3">
                    <div className="d-flex align-items-center mb-2">
                      <div 
                        className="me-3"
                        style={{
                          width: '8px',
                          height: '8px',
                          backgroundColor: 'var(--primary-color)',
                          borderRadius: '50%'
                        }}
                      />
                      <h5 className="mb-0 text-light">API Integration</h5>
                    </div>
                    <p className="text-secondary-custom ms-4">
                      Connecting frontend applications with backend services through REST APIs.
                    </p>
                  </div>

                  <div className="mb-3">
                    <div className="d-flex align-items-center mb-2">
                      <div 
                        className="me-3"
                        style={{
                          width: '8px',
                          height: '8px',
                          backgroundColor: 'var(--primary-color)',
                          borderRadius: '50%'
                        }}
                      />
                      <h5 className="mb-0 text-light">UI/UX Implementation</h5>
                    </div>
                    <p className="text-secondary-custom ms-4">
                      Translating designs into pixel-perfect, accessible interfaces.
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default About;

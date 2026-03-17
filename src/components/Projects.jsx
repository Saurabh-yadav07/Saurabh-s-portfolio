import { Container, Row, Col, Card, Badge } from 'react-bootstrap';
import { projectsData } from '../data/portfolioData';

function Projects() {
  return (
    <section id="projects" className="bg-dark-custom">
      <Container>
        <Row className="justify-content-center">
          <Col lg={12}>
            <div className="text-center mb-5">
              <h2 className="display-4 fw-bold mb-3">
                Featured <span className="gradient-text">Projects</span>
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
              <p className="text-secondary-custom lead">
                Some of my recent work that I'm proud of
              </p>
            </div>

            <Row className="g-4">
              {projectsData.map((project, index) => (
                <Col lg={4} md={6} key={project.id}>
                  <Card 
                    className="bg-card border border-custom h-100 hover-lift"
                    style={{
                      overflow: 'hidden',
                      transition: 'all 0.3s ease',
                      animationDelay: `${index * 0.1}s`
                    }}
                  >
                    <div 
                      style={{
                        height: '220px',
                        overflow: 'hidden',
                        position: 'relative'
                      }}
                    >
                      <Card.Img 
                        variant="top" 
                        src={project.image}
                        alt={project.title}
                        style={{
                          height: '100%',
                          objectFit: 'cover',
                          transition: 'transform 0.3s ease'
                        }}
                        onMouseEnter={(e) => e.target.style.transform = 'scale(1.1)'}
                        onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                      />
                      <div 
                        style={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          right: 0,
                          bottom: 0,
                          background: 'linear-gradient(to bottom, transparent 0%, rgba(5,8,17,0.8) 100%)',
                          pointerEvents: 'none'
                        }}
                      />
                    </div>
                    
                    <Card.Body className="d-flex flex-column p-4">
                      <Card.Title className="h4 text-light mb-3">
                        {project.title}
                      </Card.Title>
                      
                      <Card.Text className="text-secondary-custom mb-4 flex-grow-1">
                        {project.description}
                      </Card.Text>
                      
                      <div className="mb-4">
                        <div className="d-flex flex-wrap gap-2">
                          {project.technologies.map((tech, techIndex) => (
                            <Badge 
                              key={techIndex}
                              bg="transparent"
                              className="font-mono"
                              style={{
                                border: '1px solid var(--primary-color)',
                                color: 'var(--primary-color)',
                                fontSize: '0.75rem',
                                fontWeight: '400',
                                padding: '0.25rem 0.75rem'
                              }}
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      
                      <div className="d-flex gap-3">
                        <a 
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-sm btn-outline-light flex-grow-1"
                          style={{ borderColor: 'var(--border-color)' }}
                        >
                          <i className="bi bi-github me-2"></i>
                          Code
                        </a>
                        <a 
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-sm flex-grow-1"
                          style={{
                            backgroundColor: 'var(--primary-color)',
                            color: 'var(--dark-bg)',
                            border: 'none',
                            fontWeight: '600'
                          }}
                        >
                          <i className="bi bi-box-arrow-up-right me-2"></i>
                          Demo
                        </a>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>

            <div className="text-center mt-5">
              <a 
                href="https://github.com/Saurabh-yadav07"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary-custom btn-lg"
              >
                View More on GitHub
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Projects;

import { Container, Row, Col, ProgressBar } from 'react-bootstrap';
import { skillsData } from '../data/portfolioData';

function Skills() {
  return (
    <section id="skills" className="bg-card">
      <Container>
        <Row className="justify-content-center">
          <Col lg={10}>
            <div className="text-center mb-5">
              <h2 className="display-4 fw-bold mb-3">
                My <span className="gradient-text">Skills</span>
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
                Technologies and tools I use to bring ideas to life
              </p>
            </div>

            <Row className="g-5">
              {skillsData.map((category, categoryIndex) => (
                <Col lg={6} key={categoryIndex}>
                  <div 
                    className="bg-dark-custom p-4 rounded-3 h-100 border border-custom hover-lift"
                    style={{
                      animationDelay: `${categoryIndex * 0.2}s`
                    }}
                  >
                    <h3 className="h4 text-primary-custom mb-4 font-mono">
                      {category.category}
                    </h3>
                    <div className="d-flex flex-column gap-4">
                      {category.skills.map((skill, skillIndex) => (
                        <div key={skillIndex}>
                          <div className="d-flex justify-content-between align-items-center mb-2">
                            <span className="text-light fw-semibold">{skill.name}</span>
                            <span className="text-primary-custom font-mono">{skill.level}%</span>
                          </div>
                          <ProgressBar 
                            now={skill.level}
                            className="bg-secondary"
                            style={{ 
                              height: '8px',
                              backgroundColor: 'var(--border-color)',
                              borderRadius: '4px'
                            }}
                          >
                            <ProgressBar 
                              now={skill.level}
                              style={{
                                backgroundColor: 'var(--primary-color)',
                                background: 'linear-gradient(90deg, var(--primary-color), #00ddff)',
                                transition: 'width 1s ease-in-out'
                              }}
                            />
                          </ProgressBar>
                        </div>
                      ))}
                    </div>
                  </div>
                </Col>
              ))}
            </Row>

            <Row className="mt-5">
              <Col>
                <div className="bg-dark-custom p-4 rounded-3 border border-custom text-center">
                  <h4 className="text-light mb-3">Also Familiar With</h4>
                  <div className="d-flex flex-wrap justify-content-center gap-3">
                    {['Webpack', 'Redux', 'Sass/SCSS', 'Figma', 'Jest', 'VS Code', 'GitHub', 'Vercel'].map((tech, index) => (
                      <span 
                        key={index}
                        className="badge bg-secondary text-light px-3 py-2 font-mono"
                        style={{
                          fontSize: '0.9rem',
                          fontWeight: '400',
                          border: '1px solid var(--border-color)'
                        }}
                      >
                        {tech}
                      </span>
                    ))}
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

export default Skills;

import { Container, Row, Col, Button } from 'react-bootstrap';

function Hero() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="hero" 
      className="d-flex align-items-center bg-dark-custom"
      style={{ 
        minHeight: '100vh',
        paddingTop: '80px',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Background decoration */}
      <div 
        style={{
          position: 'absolute',
          top: '20%',
          right: '-10%',
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, var(--accent-glow) 0%, transparent 70%)',
          borderRadius: '50%',
          pointerEvents: 'none',
          opacity: '0.5'
        }}
      />
      
      <Container>
        <Row className="align-items-center">
          <Col lg={12} className="text-center text-lg-start">
            <div className="animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
              <p className="font-mono text-primary-custom mb-3 fs-5">
                Hi, my name is
              </p>
            </div>
            
            <div className="animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
              <h1 className="display-1 fw-bold mb-3" style={{ fontSize: 'clamp(2.5rem, 8vw, 5rem)' }}>
                Saurabh Yadav
              </h1>
            </div>
            
            <div className="animate-fadeInUp" style={{ animationDelay: '0.6s' }}>
              <h2 className="display-5 text-secondary-custom mb-4" style={{ fontSize: 'clamp(1.5rem, 5vw, 3rem)' }}>
                I build things for the web.
              </h2>
            </div>
            
            <div className="animate-fadeInUp" style={{ animationDelay: '0.8s' }}>
              <p className="lead text-secondary-custom mb-5" style={{ maxWidth: '600px', margin: '0 auto', marginBottom: '2rem' }}>
                I'm a passionate <span className="text-primary-custom fw-semibold">Frontend Developer</span> specializing 
                in building exceptional digital experiences. Currently focused on creating responsive, 
                user-friendly web applications with modern technologies.
              </p>
            </div>
            
            <div className="animate-fadeInUp d-flex gap-3 justify-content-center justify-content-lg-start flex-wrap" style={{ animationDelay: '1s' }}>
              <Button 
                className="btn-primary-custom"
                onClick={() => scrollToSection('projects')}
              >
                View My Work
              </Button>
              <Button 
                variant="outline-light"
                onClick={() => scrollToSection('contact')}
                className="px-4 py-2 fw-semibold"
              >
                Get In Touch
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Hero;

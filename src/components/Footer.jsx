import { Container, Row, Col } from 'react-bootstrap';

function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-dark-custom border-top border-custom py-5">
      <Container>
        <Row className="align-items-center">
          <Col md={6} className="text-center text-md-start mb-3 mb-md-0">
            <h5 className="font-mono text-primary-custom mb-3">{'<SY />'}</h5>
            <p className="text-secondary-custom mb-0">
              Building digital experiences, one component at a time.
            </p>
          </Col>

          <Col md={6} className="text-center text-md-end">
            <div className="d-flex justify-content-center justify-content-md-end gap-3 mb-3">
              <a 
                href="https://github.com/saurabhyadav"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary-custom"
                style={{ 
                  fontSize: '1.5rem',
                  transition: 'color 0.3s ease'
                }}
                onMouseEnter={(e) => e.target.style.color = 'var(--primary-color)'}
                onMouseLeave={(e) => e.target.style.color = 'var(--text-secondary)'}
              >
                <i className="bi bi-github"></i>
              </a>
              <a 
                href="https://linkedin.com/in/saurabhyadav"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary-custom"
                style={{ 
                  fontSize: '1.5rem',
                  transition: 'color 0.3s ease'
                }}
                onMouseEnter={(e) => e.target.style.color = 'var(--primary-color)'}
                onMouseLeave={(e) => e.target.style.color = 'var(--text-secondary)'}
              >
                <i className="bi bi-linkedin"></i>
              </a>
              <a 
                href="https://twitter.com/saurabhyadav"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary-custom"
                style={{ 
                  fontSize: '1.5rem',
                  transition: 'color 0.3s ease'
                }}
                onMouseEnter={(e) => e.target.style.color = 'var(--primary-color)'}
                onMouseLeave={(e) => e.target.style.color = 'var(--text-secondary)'}
              >
                <i className="bi bi-twitter"></i>
              </a>
              <a 
                href="mailto:saurabh@example.com"
                className="text-secondary-custom"
                style={{ 
                  fontSize: '1.5rem',
                  transition: 'color 0.3s ease'
                }}
                onMouseEnter={(e) => e.target.style.color = 'var(--primary-color)'}
                onMouseLeave={(e) => e.target.style.color = 'var(--text-secondary)'}
              >
                <i className="bi bi-envelope-fill"></i>
              </a>
            </div>
            <p className="text-secondary-custom mb-0 small">
              © {currentYear} Saurabh Yadav. All rights reserved.
            </p>
          </Col>
        </Row>

        <Row className="mt-4">
          <Col className="text-center">
            <button
              onClick={scrollToTop}
              className="btn btn-sm text-secondary-custom"
              style={{
                border: '1px solid var(--border-color)',
                borderRadius: '50%',
                width: '40px',
                height: '40px',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.target.style.borderColor = 'var(--primary-color)';
                e.target.style.color = 'var(--primary-color)';
                e.target.style.transform = 'translateY(-5px)';
              }}
              onMouseLeave={(e) => {
                e.target.style.borderColor = 'var(--border-color)';
                e.target.style.color = 'var(--text-secondary)';
                e.target.style.transform = 'translateY(0)';
              }}
            >
              <i className="bi bi-arrow-up"></i>
            </button>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;

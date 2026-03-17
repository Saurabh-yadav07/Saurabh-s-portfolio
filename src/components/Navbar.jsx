import { useState, useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

function NavigationBar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Navbar
      expand="lg"
      fixed="top"
      className={`py-3 transition ${scrolled ? 'bg-dark-custom border-bottom border-custom' : ''}`}
      style={{
        transition: 'all 0.3s ease',
        backdropFilter: scrolled ? 'blur(10px)' : 'none',
        backgroundColor: scrolled ? 'rgba(5, 8, 17, 0.95)' : 'transparent'
      }}
    >
      <Container>
        <Navbar.Brand 
          onClick={() => scrollToSection('hero')}
          className="font-mono fw-bold text-primary-custom"
          style={{ cursor: 'pointer', fontSize: '1.5rem' }}
        >
          {'<SY />'}
        </Navbar.Brand>
        <Navbar.Toggle 
          aria-controls="basic-navbar-nav"
          className="border-0"
          style={{ 
            backgroundColor: 'var(--card-bg)',
            color: 'var(--primary-color)'
          }}
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto gap-4">
            <Nav.Link 
              onClick={() => scrollToSection('about')}
              className="text-light fw-normal"
              style={{ cursor: 'pointer' }}
            >
              About
            </Nav.Link>
            <Nav.Link 
              onClick={() => scrollToSection('skills')}
              className="text-light fw-normal"
              style={{ cursor: 'pointer' }}
            >
              Skills
            </Nav.Link>
            <Nav.Link 
              onClick={() => scrollToSection('projects')}
              className="text-light fw-normal"
              style={{ cursor: 'pointer' }}
            >
              Projects
            </Nav.Link>
            <Nav.Link 
              onClick={() => scrollToSection('contact')}
              className="text-light fw-normal"
              style={{ cursor: 'pointer' }}
            >
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;

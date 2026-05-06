import React, { useRef } from 'react';
import { Container, Row, Col, Button, Badge } from 'react-bootstrap';
import heroBg from './assets/backgroundimag.jpeg';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

const HeroSection = () => {
  const container = useRef(null); 

  useGSAP(() => {
    if (!container.current) return;

    gsap.from(container.current, { 
      y: -500,         
      opacity: 0,       
      duration: 1.2,    
      ease: "back.out" 
    });


    gsap.from(".hero-content", {
      opacity: 0,
      delay: 0.5,
      duration: 1
    });

  }, { scope: container });
  const heroStyle = {
    backgroundImage: `linear-gradient(135deg, rgba(59, 22, 65, 0.95) 0%, rgba(73, 23, 84, 0.9) 50%, rgba(207, 76, 240, 0.8) 100%)`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    padding: '100px 0',
    minHeight: '90vh',
    display: 'flex',
    alignItems: 'center',
    color: 'white',
    overflow: 'hidden' 
  };

  return (
    <section style={heroStyle} ref={container}> 
      <Container>
        <Row className="align-items-center">
          
          <Col lg={7} className="text-center text-lg-start hero-content">
            <Badge bg="warning" className="mb-3 px-3 py-2 text-uppercase">
              Applications Now Open
            </Badge>
            <h1 className="display-3 fw-bold mb-3">
              Welcome to the <span style={{color: '#ffcc00'}}>Naija Girls in Tech</span> Application Portal
            </h1>
            <p className="lead mb-5 opacity-75" style={{ maxWidth: '600px' }}>
              A 6-month, project-based journey into Software Development, AI, Cloud, and Design.
            </p>
            <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center justify-content-lg-start">
              <a href="#payandApply" className="text-decoration-none">
                <Button variant="warning" size="lg" className="px-5 py-3 fw-bold shadow">
                  Apply Now
                </Button>
              </a>
              <Button href="#track-section" variant="outline-light" size="lg" className="px-5 py-3 shadow">
                View Tracks
              </Button>
            </div>
          </Col>

          <Col lg={5} className="d-none d-lg-block hero-image"> 
            <div className="position-relative">
              <div 
                className="glow-circle" 
                style={{ 
                  position: 'absolute', top: '-20px', left: '-20px', 
                  width: '100px', height: '100px', background: '#ffcc00', 
                  borderRadius: '50%', filter: 'blur(50px)', opacity: '0.9' 
                }}
              ></div>
              <img 
                src={heroBg} alt="Women collaborating" 
                className="img-fluid rounded-4 shadow-lg border border-secondary"
                style={{ transform: 'rotate(2deg)' }}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeroSection;
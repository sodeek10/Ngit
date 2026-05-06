import React, { useRef } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { 
  FaFacebookF, FaInstagram, FaTiktok, FaLinkedinIn, 
  FaEnvelope, FaHome, FaGlobe, FaCheckCircle, FaWhatsapp 
} from 'react-icons/fa';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const yellowColor = '#ffcc00';
  const purpleLine = '#491754';
 
  const linksRef = useRef();

  useGSAP(() => {
    gsap.from(".footer-link-item", {
      scrollTrigger: {
        trigger: linksRef.current,
        start: "top 90%",
      },
      opacity: 0,
      x: -20,
      duration: 0.5,
      stagger: 0.1, 
      ease: "power2.out"
    });
  }, { scope: linksRef });

  const headingStyle = {
    color: yellowColor,
    fontWeight: 'bold',
    fontSize: '1.25rem',
    borderBottom: `1px solid ${purpleLine}`,
    paddingBottom: '15px',
    marginBottom: '20px',
    display: 'inline-block',
    width: '100%'
  };

  const socialIconStyle = {
    border: '1px solid white',
    padding: '8px',
    fontSize: '2.2rem',
    color: '#ffcc00',
    borderRadius: '4px',
    marginRight: '10px'
  };

  return (
    <footer style={{ backgroundColor: '#111', color: 'white', padding: '60px 0 20px 0', position: 'relative' }}>
      <Container>
        <Row className="gy-4">
          {/* About Us */}
          <Col lg={3} md={6}>
            <h5 style={headingStyle}>About Us</h5>
            <p className="small mb-4" style={{ lineHeight: '1.6' }}>
              Naija Girls in Tech (NGiT) is a pan-African social impact initiative founded by Nigerian women. Our mission is to bridge the gender gap in Africa’s digital space by equipping girls and young women with future…
            </p>
            <Button href="https://naijagirlsintech.ng/about-us/" variant="outline-warning" size="sm" className="px-3" style={{ color: 'white', borderColor: yellowColor }}>
              Read more
            </Button>
          </Col>

          {/* Quick Links */}
         <Col lg={3} md={6} ref={linksRef}>
  <h5 style={headingStyle}>Quick Links</h5>
  <ul className="list-unstyled">
    {[
      { label: 'Home', url: '/' },
      { label: 'About Us', url: 'https://naijagirlsintech.ng/about-us/' },
      { label: 'Sponsor a Girl', url: 'https://naijagirlsintech.ng/tech-volution-2025/' },
      { label: 'Volunteer Sign-up', url: 'https://naijagirlsintech.ng/volunteer-sign-up/' },
      { label: 'Blog', url: 'https://naijagirlsintech.ng/blog/' },
      { label: 'Media Gallery', url: 'https://naijagirlsintech.ng/media-gallery/' }
    ].map((item) => (
      <li key={item.label} className="mb-3 d-flex align-items-center small footer-link-item">
        <FaCheckCircle className="me-3" style={{ color: yellowColor, fontSize: '1.1rem' }} />
        <a 
          href={item.url} 
          className="text-decoration-none text-white"
        >
          {item.label}
        </a>
      </li>
    ))}
  </ul>
</Col>

          {/* Program Info */}
          <Col lg={3} md={6}>
            <h5 style={headingStyle}>Tech-Volution 2025</h5>
            <p className="small mb-4" style={{ lineHeight: '1.6' }}>
             Tech-Volution 2025 is NGiT’s yearlong, flagship program designed to prepare African girls for the future of work. It includes digital skills bootcamps, innovation labs, mentorship, startup challenges…
            </p>
            <Button href="https://naijagirlsintech.ng/tech-volution-2025/" variant="outline-warning" size="sm" className="px-3" style={{ color: 'white', borderColor: yellowColor }}>
              Read more
            </Button>
          </Col>

          {/* Contact us */}
          <Col lg={3} md={6}>
            <h5 style={headingStyle}>Contact us</h5>
            <div className="d-flex mb-3 small">
              <FaHome className="me-3" style={{ color: yellowColor, fontSize: '1.2rem' }} />
              <span>Lagos, Nigeria | United Kingdom | Active across Africa</span>
            </div>
            <div className="d-flex mb-3 small">
              <a href="mailto:info@naijagirlsintech.ng" style={{ textDecoration: 'none', color:'white'}}>
              <FaEnvelope className="me-3" style={{ color: yellowColor, fontSize: '1.2rem' }} />
              <span>info@naijagirlsintech.ng</span>
              </a>
            </div>
            <div className="d-flex mb-4 small">
              <FaGlobe className="me-3" style={{ color: yellowColor, fontSize: '1.2rem' }} />
              <div style={{ wordBreak: 'break-all' }}>
               <a href="https://naijagirlsintech.ng/" target="_blank"  rel="noopener noreferrer" style={{ textDecoration: 'none', color:'white' }} > www.naijagirlsintech.ng |<br />www.naijagirlstech.uk</a>
              </div>
            </div>
            {/* Sm */}
            <div className="d-flex">
              <a href="https://www.facebook.com/share/1871JCCKP9/?mibextid=wwXIfr" target="_blank"  rel="noopener noreferrer" style={{ textDecoration: 'none' }} >
              <FaFacebookF style={socialIconStyle} />
              </a>
              <a href="https://www.instagram.com/naija_girlsintech?igsh=dTdpam03eWZwYjZr" target="_blank"  rel="noopener noreferrer" style={{ textDecoration: 'none' }} >
              <FaInstagram style={socialIconStyle} />
              </a>
              <a href=" www.tiktok.com/@naija_girls_intech" target="_blank"  rel="noopener noreferrer" style={{ textDecoration: 'none' }} >
              <FaTiktok style={socialIconStyle} />
              </a>
              <a href="https://www.linkedin.com/company/naijagirlsintech/" target="_blank"  rel="noopener noreferrer" style={{ textDecoration: 'none' }} >
              <FaLinkedinIn style={socialIconStyle} />
              </a>
            </div>
          </Col>
        </Row>

        {/* Bottom  */}
        <div style={{ borderTop: `1px solid ${purpleLine}`, marginTop: '50px', paddingTop: '20px' }}>
          <p className="small text-white">Copyright © 2025 – Naija Girls in Tech</p>
        </div>
      </Container>

      {/*  WhatsApp Button */}
      {/* <a 
        href="https://wa.me/2348102000575" 
        target="_blank" 
        rel="noreferrer"
        style={{
          position: 'fixed', bottom: '30px', right: '30px',
          backgroundColor: '#25D366', color: 'white',
          borderRadius: '50%', width: '60px', height: '60px',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: '30px', boxShadow: '0 4px 10px rgba(0,0,0,0.3)',
          zIndex: 1000
        }}
      >
        <FaWhatsapp />
      </a> */}
    </footer>
  );
};

export default Footer;
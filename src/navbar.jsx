import { useState } from "react";
import { Navbar, Container, Nav, Offcanvas } from "react-bootstrap";
import image from './assets/ngit_logo.png';

function ResponsiveNavbar() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Navbar bg="light" variant="light" expand="lg" className="mb-3" fixed="top">
        <Container fluid>
         <Navbar.Brand href="#" className="d-flex align-items-center">
  <img src={image} alt="NGiT Logo" width="50" height="50" className="me-3" />
  <div className="d-none d-lg-block">
  <h5 className="mb-0 fw-bold" style={{ color: '#3b1641', lineHeight: '1.2' }}>
    NGiT
  </h5>
  <p className="mb-0 small text-muted text-uppercase" style={{ fontSize: '11px', letterSpacing: '1px' }}>
    Cohort Application Portal
  </p>
</div>
</Navbar.Brand>

          {/* Toggle  (sm) */}
          <Navbar.Toggle 
            aria-controls="offcanvasNavbar"
            onClick={handleShow}
          />

          {/* navbar collapse lg */}
          <Navbar.Collapse className="d-none d-lg-flex">
            <Nav className="ms-auto">
              <Nav.Link href="/" className="nav-link-black fw-bold">Home</Nav.Link>
              <Nav.Link href="#payandApply" className="nav-link-black">Application</Nav.Link>
              {/* <Nav.Link href="#">Services</Nav.Link>
              <Nav.Link href="#">Contact</Nav.Link> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Offcanvas sm */}
      <Offcanvas show={show} onHide={handleClose} placement="start" className="d-lg-none" style={{ width: '70%' }}>
        <Offcanvas.Header closeButton>
          {/* <Offcanvas.Title>Menu</Offcanvas.Title> */}
        </Offcanvas.Header>

        <Offcanvas.Body>
          <Nav className="flex-column">
            <Nav.Link onClick={handleClose} className="nav-link-black">Home</Nav.Link>
            <Nav.Link onClick={handleClose} className="nav-link-black" href="#payandApply">Application</Nav.Link>
            {/* <Nav.Link onClick={handleClose}>Services</Nav.Link>
            <Nav.Link onClick={handleClose}>Contact</Nav.Link> */}
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default ResponsiveNavbar;
import React from 'react';
import { Container, Row, Col, Card, Button, Badge } from 'react-bootstrap';
import gsap from 'gsap'; 

const ProgramDetails = () => {
 const onEnter = ({ currentTarget }) => {
    gsap.to(currentTarget, { 
      y: -15, 
      scale: 1.02, 
      boxShadow: "0px 10px 30px rgba(207, 76, 240, 0.4)", // NGiT Purple Glow
      duration: 0.3 
    });
  };

  const onLeave = ({ currentTarget }) => {
    gsap.to(currentTarget, { 
      y: 0, 
      scale: 1, 
      boxShadow: "0px 4px 6px rgba(0,0,0,0.1)", 
      duration: 0.3 
    });
  };
  const sectionStyle = {
    backgroundColor: '#fff', 
    color: '#000',
    padding: '80px 0'
  };

  const accentColor = '#ffcc00'; 
  const gradientText = {
    background: 'linear-gradient(45deg, #cf4cf0, #ffcc00)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    fontWeight: 'bold'
  };

  return (
    <div style={sectionStyle}>
      <Container>
        {/* SECTION 1: WHY THIS PROGRAM */}
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold mb-4">Why This Program?</h2>
          <Row className="g-4">
            {[
              { title: "Virtual Mastery", desc: "Learn from anywhere via Google Classroom and collaborative tools." },
              { title: "Daily Live Support", desc: "No recorded-only lectures. Join daily live sessions with industry experts." },
              { title: "Mentor-Led", desc: "Get weekly reviews on your work to ensure you never get stuck." }
            ].map((item, idx) => (
              <Col md={4} key={idx}>
                <div className="p-4 rounded-3" style={{ border: `1px solid #491754`, backgroundColor: '#491754' }}>
                  <h4 style={{ color: accentColor }}>{item.title}</h4>
                  <p className="small text-white opacity-1">{item.desc}</p>
                </div>
              </Col>
            ))}
          </Row>
        </div>

        <hr className="my-5 opacity-25" />

        {/* SECTION 2: TRACKS AVAILABLE */}
        <h2 className="text-center mb-5" id='track-section'><span style={{color:'black',}}>Choose Your</span> <span style={gradientText}>Career Track</span></h2>
        <Row className="g-4 mb-5">
          {[
            { name: "Software Development", tools: "HTML, CSS, JS, Python, REST APIs" },
            { name: "Data & AI Fundamentals", tools: "Python, Pandas, ML Basics, Ethics" },
            { name: "Cloud & DevOps", tools: "Docker, CI/CD, AWS/Azure, Automation" },
            { name: "Cybersecurity", tools: "Network Security, Encryption, Threat Detection" },
            { name: "UI/UX Design", tools: "Strategy, Figma Prototyping, Agile" },
            { name: "Product Management & Design", tools: "User-Centric Approach, Iterative Design, Collaboration, Outcome Focus" }
          ].map((track, idx) => (
            <Col lg={4} md={6} key={idx}>
              <Card className="h-100 border-0 shadow-sm" style={{ backgroundColor: '#491754', color: 'white' }} 
              onMouseEnter={onEnter}
                onMouseLeave={onLeave}>
                <Card.Body>
                  <h5 style={{ color: '#cf4cf0' }}>{track.name}</h5>
                  <p className="small text-white-5">{track.tools}</p>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {/* SECTION 3: THE 6-MONTH ROADMAP */}
        <div className="py-5 rounded-4 px-4" style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)' }}>
          <h2 className="text-center mb-5" style={{color:'#000'}}>The 6-Month Roadmap</h2>
          <Row className="text-center g-3">
            {[
              { month: "1-2", title: "Foundations", desc: "Digital literacy & track basics" },
              { month: "3", title: "App Sprint", desc: "Virtual office & Git workflows" },
              { month: "4-5", title: "Specialization", desc: "Deep technical dive" },
              { month: "6", title: "Internship", desc: "Capstone & Demo Day" }
            ].map((step, idx) => (
              <Col xs={6} md={3} key={idx}>
                <div className="p-3">
                  <h3 style={{ color: accentColor }}>Month {step.month}</h3>
                  <h6>{step.title}</h6>
                  <p className="x-small opacity-50">{step.desc}</p>
                </div>
              </Col>
            ))}
          </Row>
        </div>

        {/* SECTION 4: Cta */}
        <div className="text-center mt-5 p-5 rounded-4" style={{ background: 'linear-gradient(rgba(207, 76, 240, 0.2), transparent)' }}>
          <h3>Ready to Start Your Journey?</h3>
          <p className="mb-4">Application Fee: <span className="fw-bold" style={{ color: accentColor }}>₦20,000</span></p>
          <p className="mb-4">
  Selection Criteria: <Badge bg="warning" text="dark" className='p-2'>On passing assessment</Badge>
</p>
<a href="https://paystack.shop/pay/ngitappfee" target="_blank" rel="noreferrer" className="text-decoration-none">
          <Button variant="outline-light" size="md" className="px-3 py-3 border-2 fw-bold" id="payandApply" style={{ borderColor: '#cf4cf0', color:'purple' }}>
            Pay & Apply
          </Button>
          </a>
          {/* pay with discount */}
          <a href="https://paystack.shop/pay/ngitappfee50" target="_blank" rel="noreferrer" className="text-decoration-none">
    <Button 
      variant="outline-light" 
      size="md" 
      className="mt-3 mt-md-0 ms-3 px-3 py-3 border-2 fw-bold" 
      onMouseEnter={(e) => {
        gsap.to(e.currentTarget, { 
          backgroundColor: "#ffcc00", 
          borderColor: "#ffcc00", 
          color: "#000", 
          scale: 1.05,
          duration: 0.3 
        });
      }}
      onMouseLeave={(e) => {
        gsap.to(e.currentTarget, { 
          backgroundColor: "transparent", 
          borderColor: "#cf4cf0", 
          color: "purple", 
          scale: 1,
          duration: 0.3 
        });
      }}
      style={{ borderColor: '#cf4cf0', color:'purple' }}
    >
      Pay with Discount
    </Button>
  </a>
        </div>
      </Container>
    </div>
  );
};

export default ProgramDetails;
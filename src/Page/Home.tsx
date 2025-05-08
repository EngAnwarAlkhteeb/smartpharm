import React from "react";
import Navbar from "../Components/Navbar";
import Img1 from "../assets/img/doctor.png";
import Card from "../Components/Card/Card";
import { Container, Row, Col } from "react-bootstrap";

const Home: React.FC = () => {
  return (
    <>
      <Navbar />

      <div className="scroll-container">
        {/* --- Section 1: Hero --- */}
        <section className="section hero-section">
          <Container>
            <Row className="align-items-center">
              {/* Left Side - Text */}
              {/* Left Side - Text */}
              <Col
                md={6}
                className="text-white d-flex flex-column "
              >
                <h1
                  style={{
                    fontSize: "100px",
                    fontFamily: '"Sofia", sans-serif',
                  }}
                >
                  Smart<span style={{ fontSize: "100px" }}>Pharm</span>
                </h1>
                <h3 style={{ fontSize: "40px", marginBottom: "20px" }}>
                  <span>🧬</span> Welcome to PharmaGuide AI
                </h3>
                <p style={{ fontSize: "24px", lineHeight: "1.6" }}>
                  This is an AI-powered assistant designed to help you
                  understand medications, symptoms, and general health tips —
                  but it will never replace a doctor’s advice. Always follow
                  what your doctor says.
                </p>
                {/* <p
                  style={{
                    fontSize: "30px",
                    marginTop: "20px",
                    fontWeight: "bold",
                  }}
                >
                  Your AI-Powered{" "}
                  <span style={{ marginLeft: "156px" }}>
                    Treatment Companion
                  </span>
                </p> */}
                <p
                  style={{
                    fontSize: "20px",
                    color: "#cccccc",
                    marginTop: "10px",
                  }}
                >
                  💡 Think of us as your 24/7 pharmacy helper — here to guide,
                  not to diagnose.
                </p>
              </Col>

              {/* Right Side - Image */}
              <Col md={6} className="text-center">
                <img
                  src={Img1}
                  alt="Doctor"
                  style={{
                    width: "80%",
                    height: "auto",
                    maxWidth: "415px",
                  }}
                />
              </Col>
            </Row>
          </Container>
        </section>

        {/* --- Section 2: Doctors --- */}
        <section className="section doctors-section">
          <Container>
            <h2 className="text-center text-white mb-4">Our Doctors</h2>
            <Row className="justify-content-center">
              <Col md={4}>
                <Card
                  image={Img1}
                  title="Dr. Alice"
                  details="Specialist in Neurology"
                />
              </Col>
              <Col md={4}>
                <Card
                  image={Img1}
                  title="Dr. Bob"
                  details="Cardiology Expert"
                />
              </Col>
              <Col md={4}>
                <Card image={Img1} title="Dr. Clara" details="Pediatrician" />
              </Col>
            </Row>
          </Container>
        </section>

        {/* --- Section 3: Treatment --- */}
        <section className="section treatment-section">
          <Container className="text-white text-center">
            <h2>Treatment Options</h2>
            <p style={{ fontSize: "20px" }}>
              Explore our range of AI-assisted treatments tailored to your
              needs.
            </p>
            <ul style={{ listStyle: "none", paddingLeft: 0 }}>
              <li>🩺 AI Diagnosis Tools</li>
              <li>💊 Personalized Medication Plans</li>
              <li>📊 Real-time Health Monitoring</li>
            </ul>
          </Container>
        </section>

        {/* --- Section 4: Contact Us + Map --- */}
        <section className="section contact-section">
          <Container className="text-white text-center">
            <h2>Contact Us</h2>
            <p>📍 123 Medical Street, Health City, HC 101</p>
            <p>📞 Phone: +123 456 7890</p>
            <p>✉️ Email: info@smartpharm.com</p>

            {/* Embedded Google Map */}
            <div style={{ marginTop: "30px", height: "400px" }}>
              <iframe
                title="Google Map Location"
                width="100%"
                height="100%"
                frameBorder="0"
                scrolling="no"
                marginHeight={0}
                marginWidth={0}
                src="https://maps.google.com/maps?q=New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed"
              ></iframe>
            </div>
          </Container>
        </section>
      </div>

      <style jsx>{`
        .scroll-container {
          scroll-snap-type: y mandatory;
          overflow-y: scroll;
          height: 100vh;
        }

        .section {
          scroll-snap-align: start;
          height: 100vh;
          padding: 40px 20px;
          box-sizing: border-box;
        }

        .hero-section {
          background: linear-gradient(to bottom right, #0a0953, #1c1a8c);
          color: white;
        }

        .doctors-section {
          background-color: #1e1d70;
        }

        .treatment-section {
          background-color: #2f2dbb;
        }

        .contact-section {
          background-color: #0a0953;
        }
      `}</style>
    </>
  );
};

export default Home;

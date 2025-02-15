import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import './About.css';
import { useSpring, animated } from 'react-spring';
import { motion } from "framer-motion";


const About = () => {

    // const aboutAnimation = useSpring({ opacity: 1, from: { opacity: 0 }, delay: 200 });

    return (
        <motion.div
        className="about-section"
        initial={{ opacity: 0, y: 50 }} // Start hidden and slightly below
        animate={{ opacity: 1, y: 0 }} // Fade in and move to original position
        transition={{ duration: 1 }} // Smooth transition over 1 second
        >
        {/* // <animated.div style={aboutAnimation} className="about-section"> */}
        <Container id="about" className="section">

            <Row>
                <Col md={6}>
                    <h2>About Me</h2>
                    <p>
            I am a passionate web developer with a love for creating dynamic
            and user-friendly websites. I specialize in front-end technologies
            like React, JavaScript, and CSS, and have a deep interest in 3D
            development.
          </p>
          <p>
            I love learning new technologies, improving my skills, and
            creating projects that push the boundaries of what's possible on
            the web.
          </p>

                </Col>
                <Col md={6}>
                    <img 
                        src="/logo192.png"
                        alt="Photo"
                        className="img-fluid"
                    />
                </Col>
            </Row>
        </Container>
        {/* // </animated.div> */}

        </motion.div>
    
    );
};

export default About;
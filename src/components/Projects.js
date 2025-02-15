import React from "react";
import "./Projects.css";
import { Container, Row, Col, Card } from "react-bootstrap";
import { motion } from "framer-motion";

const projectVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, staggerChildren: 0.3 }
  },
};

// const cardVariants = {
//   hidden: { opacity: 0, y: 50 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.6 }, // Smooth entry effect for each card
//   },
// };

const cardHover = {
  hover: {
    scale: 1.05,
    boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.2)",
    transition: { duration: 0.3 },
  },
};


const Projects = () => {
  const projectData = [
    {
      title: "Expense Tracker App",
      description: "A web application to track daily expenses with charts.",
      imgSrc: "https://via.placeholder.com/300",
    },
    {
      title: "Portfolio Website",
      description: "My personal 3D interactive portfolio using React.js & Bootstrap.",
      imgSrc: "https://via.placeholder.com/300",
    },
    {
      title: "E-commerce Website",
      description: "An online shopping platform with payment integration.",
      imgSrc: "https://via.placeholder.com/300",
    },
  ];
  // const projectAnimation = useSpring({
  //   opacity: 1,
  //   from: { opacity: 0 },
  //   delay: 200,
  // });

  return (

    <motion.div
      className="projects-section"
      variants={projectVariants}
      initial="hidden"
      animate="visible"
      >
    {/* // <animated.div style={projectAnimation} className="projects-section"> */}
      <section className="projects-section">
      <Container>
        <motion.h2 variants={projectVariants} className="section-title">My Projects</motion.h2>
        <motion.p variants={projectVariants}>Here are some of my recent works.</motion.p>

        <Row>
          {projectData.map((project, index) => (
            
            <Col md={4} key={index}>
                            <motion.div whileHover="hover" variants={cardHover}>

             
              <Card className="project-card">
                <Card.Img variant="top" src={project.imgSrc} />
                <Card.Body>
                  <Card.Title>{project.title}</Card.Title>
                  <Card.Text>{project.description}</Card.Text>
                </Card.Body>
              </Card>
              </motion.div>
            </Col>
            
          ))}
        </Row>
      </Container>
    </section>
    {/* // </animated.div> */}
    </motion.div>
  );
};

export default Projects;

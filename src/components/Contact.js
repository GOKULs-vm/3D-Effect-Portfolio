import React from "react";
import { Form, Button } from "react-bootstrap";
import "./Contact.css";
import { motion } from "framer-motion";

const contactVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, staggerChildren: 0.3 },
  },
};

const formItemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8 },
  },
};

const buttonVariants = {
  hover: {
    scale: 1.1,
    backgroundColor: "#007bff",
    transition: { duration: 0.2 },
  },
};

const Contact = () => {
  return (
    <motion.div
      className="contact-section"
      variants={contactVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <motion.h2 variants={contactVariants}>Contact Me</motion.h2>
      <motion.p variants={contactVariants}>Let's connect! Feel free to reach out.</motion.p>

      <motion.div className="contact-form" variants={contactVariants}>
        <Form>
          <motion.div variants={formItemVariants}>
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your name" />
            </Form.Group>
          </motion.div>

          <motion.div variants={formItemVariants}>
            <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter your email" />
            </Form.Group>
          </motion.div>

          <motion.div variants={formItemVariants}>
            <Form.Group controlId="formMessage">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="Your message..." />
            </Form.Group>
          </motion.div>

          <motion.div variants={formItemVariants}>
            <motion.button
              className="send-button"
              whileHover="hover"
              variants={buttonVariants}
              >
              Send Message
            </motion.button>
          </motion.div>
        </Form>
      </motion.div>
    </motion.div>
  );
};

export default Contact;

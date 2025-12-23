import React, { useRef, useState } from "react";
import { FaEnvelope, FaPhone, FaTwitter, FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";
import emailjs from "emailjs-com";
import { Slide } from "react-awesome-reveal";
import "./Footer.css";

const Footer = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_gays7ym",
        "template_zcxsssr",
        form.current,
        "UvVyY9uLeqwb8XjAT"
      )
      .then(
        () => {
          setLoading(false);
          setSent(true);
          form.current.reset();
          setTimeout(() => setSent(false), 3000);
        },
        (error) => {
          console.error(error);
          setLoading(false);
        }
      );
  };

  return (
    <section className="contact-section" id = "contact">
      <div className="contact-container">

        {/* LEFT SIDE */}
        <div className="contact-info">
          <h2>LET’S GET IN TOUCH</h2>
          <p>Feel free to both ask questions and send business inquiries.</p>
          <div className="contact-line" />
          <div className="contact-details">
            <p>
              <FaEnvelope className="icon" /> adityagoyal1505@gmail.com
            </p>
            <p>
              <FaPhone className="icon" /> +91 9887678111
            </p>
          </div>

          {/* Social Media Links */}
          <div className="social-links">
            <Slide direction="up" triggerOnce>
            <a href="https://x.com/AdityaGoya1505" target="_blank" rel="noreferrer"><FaTwitter /></a>
            </Slide>
            <Slide direction="up" duration={1300} triggerOnce>
            <a href="https://www.linkedin.com/in/aditya-goyal-5a7546289" target="_blank" rel="noreferrer"><FaLinkedin /></a>
            </Slide>
            <Slide direction="up" duration={1500} triggerOnce>
            <a href="https://www.instagram.com/adityagoyal579" target="_blank" rel="noreferrer"><FaInstagram /></a>
            </Slide>
            <Slide direction="up" duration={1700} triggerOnce>
            <a href="https://github.com/AdityaGoyal1505" target="_blank" rel="noreferrer"><FaGithub /></a>
            </Slide>
          </div>
        </div>

        {/* RIGHT SIDE FORM */}
        <Slide direction="up" triggerOnce>
        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <div className="form-grid">
            <div className="form-group">
              <label>Name</label>
              <input type="text" name="user_name" placeholder="Jane Smith" required />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input type="email" name="user_email" placeholder="example@example.com" required />
            </div>
            <div className="form-group">
              <label>Location</label>
              <input type="text" name="location" placeholder="Club X, New York" />
            </div>
            <div className="form-group">
              <label>Phone</label>
              <input type="text" name="phone" placeholder="+123123123" />
            </div>
          </div>
          <div className="form-group full-width">
            <label>Message</label>
            <textarea name="message" placeholder="We want you to perform in our club..." required></textarea>
          </div>
          <button type="submit" disabled={loading}>
            {loading ? "Sending..." : "Submit"}
          </button>
          {sent && <p className="success-msg">✅ Message sent successfully!</p>}
        </form>
        </Slide>
      </div>
    </section>
  );
};

export default Footer;

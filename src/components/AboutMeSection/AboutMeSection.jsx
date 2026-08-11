import React from "react";
import "./AboutMeSection.css";
import { CheckCircle, Smile } from "lucide-react";

export default function AboutMeSection() {
  return (
    <section className="about-section">
      <h2 className="about-title">About Me</h2>

      <div className="about-container">
        {/* Left Side - Stats */}
        <div className="about-stats">
          <div className="stat-box">
            <CheckCircle className="stat-icon" />
            <h3 className="stat-number">20</h3>
            <p className="stat-text">Completed Project</p>
          </div>

          <div className="stat-box">
            <Smile className="stat-icon" />
            <h3 className="stat-number">20</h3>
            <p className="stat-text">Happy Clients</p>
          </div>

          <div className="stat-box">
            <span className="stat-icon">💎</span>
            <h3 className="stat-number">2</h3>
            <p className="stat-text">Awards Won</p>
          </div>
        </div>

        {/* Divider */}
        <div className="about-divider"></div>

        {/* Right Side - Content */}
       <div className="about-content">
  <p>
    My name is <strong>Muhammed Niyas</strong>. I am a passionate Software Web
    Developer with a strong focus on creating innovative, user-friendly, and
    high-performance web applications. I enjoy crafting seamless digital
    experiences that blend creativity with clean and efficient code.
  </p>

  <p>
    I focus on developing responsive and scalable solutions using modern
    technologies like MongoDB, Express, React, and Node.js. I believe great web
    design should connect functionality with aesthetic simplicity. My goal is to
    deliver digital products that look great, perform smoothly, and make a real
    difference for users and businesses.
  </p>

  <p>
    I’m constantly learning and improving my skills to stay ahead in the fast-
    evolving tech world. Collaboration, creativity, and continuous growth drive
    my development journey. I’m always ready to take on new challenges and build
    meaningful digital experiences that inspire.
  </p>

<button
  className="contact-btn"
  onClick={() =>
    window.open("https://wa.me/9778340818", "_blank")
  }
>
  Contact Me
</button>

  {/* Signature (optional)
  <img
    src="https://ober-jekyll.netlify.app/assets/img/signature.png"
    alt="Signature"
    className="signature-img"
  /> */}
</div>

      </div>
    </section>
  );
}

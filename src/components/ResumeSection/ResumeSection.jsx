import React from "react";
import "./ResumeSection.css";

export default function ResumeSection() {
  const skills = [
    { name: "React.js", level: 9, percent: "90%" },
    { name: "Node.js", level: 8, percent: "80%" },
    { name: "MongoDB", level: 8, percent: "80%" },
    { name: "Express.js", level: 8, percent: "80%" },
    { name: "JavaScript (ES6+)", level: 9, percent: "90%" },
  ];

  const services = [
    {
      icon: "💻",
      title: "Full-Stack Web Development",
      description:
        "Building fast, scalable, and responsive web applications using the MERN stack — MongoDB, Express, React, and Node.js.",
    },
    {
      icon: "🧠",
      title: "API Development",
      description:
        "Designing and developing secure, high-performance RESTful APIs that power dynamic, data-driven applications.",
    },
    {
      icon: "📱",
      title: "Responsive UI/UX Design",
      description:
        "Creating user-focused, modern, and visually appealing interfaces that adapt seamlessly across all devices.",
    },
    {
      icon: "⚙️",
      title: "Deployment & Optimization",
      description:
        "Deploying and maintaining web applications on cloud platforms like AWS, Vercel, and Render with continuous optimization.",
    },
  ];

  const education = [
    {
      year: "2021 - 2024",
      title: "Bachelor in Computer Application",
      place: "University of Calicut",
    },
    {
      year: "2019 - 2021",
      title: "Higher Secondary Education",
      place: "HSS Srekrishnapuram",
    },
  ];

  const experience = [
    {
      year: "Feb 2026 - Present",
      title: "MERN Stack Developer",
      position: "Ociuz Infotech (Thrissur, Kerala)",
      desc: "Developing full-stack web solutions, integrating REST APIs, managing databases, and deploying scalable applications.",
    },
    {
      year: "March 2025 - Feb 2026",
      title: "MERN Stack Developer",
      position: "Dexo Innovations",
      desc: "Developing full-stack web solutions, integrating REST APIs, managing databases, and deploying scalable applications.",
    },
    {
      year: "2024 - 2025",
      title: "Training & Internship",
      position: "Luminar Technolab",
      desc: "Assisted in building responsive and accessible websites while gaining practical experience with backend integration.",
    },
  ];

  const certifications = [
    {
      year: "2024",
      title: "MERN/MEAN Stack Developer",
      desc: "Recognized for outstanding MERN/MEAN stack projects showcasing innovation, performance, and design excellence.",
    },
    
  ];

  // ✅ Function to handle CV download
  const handleDownloadCV = () => {
    // ✅ Replace with your actual file path inside public/
    const link = document.createElement("a");
    link.href = "\Muhammed Niyas P.pdf"; // <-- put your actual PDF file name here
    link.download = "\Muhammed Niyas P.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="resume-section">
      <h2 className="resume-title">My Resume</h2>

      <div className="resume-container">
        <div className="resume-content">
          <p className="resume-description">
            Passionate MERN Stack Developer with hands-on experience in building
            responsive, high-performance web applications. Skilled in crafting
            user-centric digital experiences and delivering efficient backend
            systems. I enjoy transforming ideas into real-world web solutions
            that help businesses grow and users connect seamlessly.
          </p>

          {/* --- SKILLS SECTION --- */}
          <div className="skills-section">
            <h3 className="skills-title">Skills</h3>
            <div className="skills-list">
              {skills.map((skill, index) => (
                <div key={index} className="skill-item">
                  <span className="skill-name">{skill.name}</span>
                  <div className="skill-dots">
                    {[...Array(10)].map((_, i) => (
                      <span
                        key={i}
                        className={`dot ${i < skill.level ? "filled" : ""}`}
                      ></span>
                    ))}
                  </div>
                  <span className="skill-percent">{skill.percent}</span>
                </div>
              ))}
            </div>
          </div>

          {/* --- EDUCATION, CERTIFICATIONS & EXPERIENCE SECTION --- */}
          <div className="edu-exp-section">
            <div className="edu-exp-grid">
              {/* Education */}
              <div className="edu-col">
                <h2 className="edu-title">EDUCATION</h2>
                {education.map((item, index) => (
                  <div key={index} className="edu-item">
                    <p className="edu-year">{item.year}</p>
                    <h3 className="edu-degree">{item.title}</h3>
                    <p className="edu-place">{item.place}</p>
                  </div>
                ))}

                {/* Certifications */}
                <h2 className="edu-title">CERTIFICATIONS</h2>
                {certifications.map((cert, index) => (
                  <div key={index} className="edu-item">
                    <p className="edu-year">{cert.year}</p>
                    <h3 className="edu-degree">{cert.title}</h3>
                    <p className="edu-desc">{cert.desc}</p>
                  </div>
                ))}
              </div>

              {/* Experience */}
              <div className="exp-col">
                <h2 className="edu-title">EXPERIENCE</h2>
                {experience.map((item, index) => (
                  <div key={index} className="exp-item">
                    <p className="edu-year">{item.year}</p>
                    <h3 className="edu-degree">{item.title}</h3>
                    <p className="edu-place">{item.position}</p>
                    <p className="edu-desc">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* --- SERVICES SECTION --- */}
          <section className="services">
            <h2 className="services-title">Services</h2>
            <div className="services-grid">
              {services.map((service, index) => (
                <div className="service-card" key={index}>
                  <div className="service-icon">{service.icon}</div>
                  <h3 className="service-title">{service.title}</h3>
                  <p className="service-description">{service.description}</p>
                  <a href="#" className="order-now">
                    order now
                  </a>
                </div>
              ))}
            </div>
          </section>

          {/* --- PDF DOWNLOAD BUTTON --- */}
          <button className="download-btn" onClick={handleDownloadCV}>
            Download CV
          </button>
        </div>
      </div>
    </section>
  );
}

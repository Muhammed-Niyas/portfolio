import React, { useState } from "react";
import "./ExploreSection.css";

const ExploreSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  const goBack = () => setSelectedProject(null); // ⬅️ Back to project list

  const sections = [
    {
      title: "Dexo",
      subtitle: "Agency",
      image: "/Screenshot 2025-10-13 124805.png",
      link: "https://www.dexoinnovation.com/",
    },
    {
      title: "Dexo",
      subtitle: "Academy",
      image: "/Screenshot 2025-10-13 124939.png",
      link: "https://www.dexoacademy.com/",
    },
    {
      title: "Online",
      subtitle: "News",
      image: "/Screenshot 2025-10-13 125208.png",
      link: "https://valluvanadonline.com/",
    },
    

    {
      title: "Hospital",
      subtitle: "Dental",
      image: "/Screenshot 2025-10-20 103244.png",
      link: "https://docter-backend.vercel.app/",
    },
    {
      title: "Cloth",
      subtitle: "Ecommerce (Twilio OTP & Razorpay)",
      image: "/Screenshot 2025-10-29 152718.png",
      link: "https://mocca-store.vercel.app/",
      video: "/Recording 2025-10-29 154431.mp4",
      note: "This is a study project demonstrating Twilio-based OTP login (works only with verified numbers).",
    },
        {
      title: "Home",
      subtitle: "Home Deccor and interier",
      image: "/Screenshot 2025-11-07 174852.png",
      link: "https://starline-nine.vercel.app/",
      note: "This is a study project demonstrating Twilio-based OTP login (works only with verified numbers).",
    },
        {
      title: "cloth",
      subtitle: "Uniform",
      image:
        "/Screenshot 2025-11-07 175909.png",
      link: "https://romosgarments.com/",
    },
        {
      title: "Product",
      subtitle: "Portfolio Masal Product",
      image: "/Screenshot 2025-11-07 175825.png",
      link: "https://spices-lovat.vercel.app/",
      note: "This is a study project demonstrating Twilio-based OTP login (works only with verified numbers).",
    },
    {
      title: "Cart",
      subtitle: "Ecommerce",
      image: "/Screenshot 2025-11-07 180534.png",
      link: "https://shop.mghomecart.com/home",
    },
  ];

  return (
    <div className="explore-section-wrapper">
      {/* 🔹 Project Grid */}
      <div className="explore-grid">
        {sections.map((section, index) => (
          <div className="explore-container" key={index}>
            <div className="explore-image">
              <a
                href={section.link}
                target="_blank"
                rel="noopener noreferrer"
                className="live-image-link"
              >
                <span className="live-icon">🔗</span>
                <img
                  src={section.image}
                  alt={section.title}
                  className="live-preview-image"
                />
              </a>
            </div>

            <div className="explore-text">
              <h1>{section.title}</h1>
              <p>{section.subtitle}</p>
              {section.video && (
                <button
                  className="video-btn"
                  onClick={() => {
                    setSelectedProject(section);
                    openModal();
                  }}
                >
                  🎬 Watch Demo
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* 🔹 Top bar button */}
      <div className="explore-topbar">
        <button className="next-projects-btn" onClick={openModal}>
          Next Projects →
        </button>
      </div>

      {/* 🔹 Modal */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="modal-close-btn" onClick={closeModal}>
              ×
            </button>

            {selectedProject && selectedProject.video ? (
              <>
                <h2>{selectedProject.title} Demo</h2>
                <video
                  className="project-video"
                  controls
                  autoPlay
                  loop
                  muted
                >
                  <source src={selectedProject.video} type="video/mp4" />
                  Your browser does not support video playback.
                </video>
                <p className="project-note">{selectedProject.note}</p>

                {/* ⬅️ Back Button */}
                <button className="back-btn" onClick={goBack}>
                  ← Back to Projects
                </button>
              </>
            ) : (
              <>
                <h2>Next Projects</h2>
                <div className="modal-projects-grid">
                  {sections.map((section, idx) => (
                    <div className="modal-project-card" key={idx}>
                      <img
                        src={section.image}
                        alt={section.title}
                        className="modal-project-image"
                      />
                      <h3>{section.title}</h3>
                      <p>{section.subtitle}</p>
                      <a
                        href={section.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="modal-project-link"
                      >
                        Visit
                      </a>
                      {section.video && (
                        <button
                          className="small-demo-btn"
                          onClick={() => setSelectedProject(section)}
                        >
                          🎬 Watch Demo
                        </button>
                      )}
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ExploreSection;

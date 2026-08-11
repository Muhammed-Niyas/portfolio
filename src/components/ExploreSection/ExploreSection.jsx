import React, { useState } from "react";
import "./ExploreSection.css";

const ExploreSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };
  const goBack = () => setSelectedProject(null);

  const sections = [
    {
      title: "Accounts ERP",
      subtitle: "Enterprise Resource Planning",
      image: "/accounts.png",
      link: "https://your-accounts-url.com",
    },
    {
      title: "CRM",
      subtitle: "Customer Relationship Management",
      image: "/crmnew.png",
      link: "#",
    },
    
    {
      title: "Articles LedgerX",
      subtitle: "News & Articles Platform",
      image: "/ledger x.png",
      link: "https://your-articles-url.com",
    },
 
    {
      title: "Bloom Bake House",
      subtitle: "Bakery Website",
      image: "/bloom.png",
      link: "https://demo.bloombakehouse.me/en",
    },
    {
      title: "BPP Kuwait",
      subtitle: "Organization Website",
      image: "/bpp.png",
      link: "https://bppkuwait.com/",
    },
    {
      title: "Cardia HMS",
      subtitle: "Hospital Management System",
      image: "/ChatGPT Image Aug 10, 2026, 10_05_54 PM.png",
      link: "https://your-cardia-url.com",
    },
    {
      title: "Kabani Website",
      subtitle: "Corporate Website",
      image: "/kabani.png",
      link: "https://your-kabani-url.com",
    },
     {
      title: "HRMS",
      subtitle: "Human Resource Management System",
      image: "/hrms.png",
      link: "#",
    },
    {
      title: "MAB",
      subtitle: "Business Portal",
      image: "/mab.png",
      link: "#",
    },
    {
      title: "Meridian Portal",
      subtitle: "Shipping Software",
      image: "/meridain.png",
      link: "https://your-meridian-url.com",
    },
    {
      title: "Home",
      subtitle: "Home Deccor and interier",
      image: "/Screenshot 2025-11-07 174852.png",
      link: "https://starlinegroup.ae/",
      note: "This is a study project demonstrating Twilio-based OTP login (works only with verified numbers).",
    },
    {
      title: "Nice Foods",
      subtitle: "Food & Beverage",
      image: "/nice foods.png",
      link: "https://www.nicefoods.in/index",
    },
    {
      title: "Nutrich Society",
      subtitle: "Community Website",
      image: "/Screenshot 2025-11-09 140400.png",
      link: "https://your-nutrich-url.com",
    },
    {
      title: "Ociuz Academy",
      subtitle: "Learning Platform",
      image: "/academy.png",
      link: "https://your-ociuzacademy-url.com",
    },
    {
      title: "Ociuz Academy Website",
      subtitle: "Educational Website",
      image: "/academy.png",
      link: "https://your-ociuzacademywebsite-url.com",
    },
    {
      title: "Ociuz Infotech",
      subtitle: "IT Services",
      image: "/infotech.png",
      link: "https://infotech.ociuz.in/",
    },
    {
      title: "Ociuz NTC",
      subtitle: "Corporate Website",
      image: "/Screenshot 2025-11-10 161224.png",
      link: "https://ntcfinance.in/",
    },
    
    {
      title: "Ozone",
      subtitle: "Business Solution",
      image: "/ozone.png",
      link: "https://www.ozonefoodstuff.com/",
    },
    {
      title: "Table UI",
      subtitle: "UI Components",
      image: "/Screenshot 2025-11-07 180534.png",
      link: "https://your-table-url.com",
    },
    {
      title: "WA Connect",
      subtitle: "WhatsApp Integration",
      image: "/wa.png",
      link: "https://your-wa-url.com",
    },
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
      title: "Portfolio",
      subtitle: "Trading",
      image: "/Tradinhg.png",
      link: "https://luxypips.com/",
    },
     {
      title: "Style",
      subtitle: "Ecommerce (Twilio OTP & Razorpay)",
      image: "/Screenshot 2026-02-16 170641.png",
      link: "https://egoss-footwear.vercel.app/",
    },
   
    
    
    {
      title: "cloth",
      subtitle: "Uniform",
      image: "/Screenshot 2025-11-07 175909.png",
      link: "https://romosgarments.com/",
    },
   
    {
      title: "Portfolio",
      subtitle: "Funding",
      image: "/Screenshot 2026-02-16 171159.png",
      link: "hhttps://ryleni-steel.vercel.app/",
    },
      {
      title: "Product",
      subtitle: "Portfolio Masal Product",
      image: "/Screenshot 2025-11-07 175825.png",
      link: "https://spices-lovat.vercel.app/",
      note: "This is a study project demonstrating Twilio-based OTP login (works only with verified numbers).",
    },
    {
      title: "Hospital",
      subtitle: "Dental",
      image: "/Screenshot 2025-10-20 103244.png",
      link: "https://docter-backend.vercel.app/",
    },
    {
      title: "Online News",
      subtitle: "Media Portal",
      image: "/Screenshot 2025-10-13 125208.png",
      link: "https://valluvanadonline.com/",
    },
   
  
    {
      title: "Dental Care Clinic",
      subtitle: "Medical Portal",
      image: "/Screenshot 2025-10-20 103215.png",
      link: "#",
    },
    {
      title: "Style & Fashion Shop",
      subtitle: "E-commerce Portal",
      image: "/Screenshot 2025-10-29 152700.png",
      link: "#",
    },
    {
      title: "Gourmet Food Store",
      subtitle: "Food & Beverage",
      image: "/Screenshot 2025-11-07 180534.png",
      link: "#",
    },
   
  ];

  // Determine which projects to show: either all or only first 6
  const visibleProjects = showAll ? sections : sections.slice(0, 6);

  const modalProjectTitles = [
    "Accounts ERP",
    "Articles LedgerX",
    "Cardia HMS",
    "CRM",
    "HRMS",
    "Kabani Website",
    "MAB",
    "Nutrich Society"
  ];

  return (
    <div className="explore-section-wrapper">
      {/* 🔹 Project Grid */}
      <div className="explore-grid">
        {visibleProjects.map((section, index) => {
          const isModalProject = modalProjectTitles.includes(section.title);
          return (
            <div
              className="explore-container"
              key={index}
              onClick={() => {
                if (isModalProject) {
                  setSelectedProject(section);
                  openModal();
                }
              }}
            >
              <div className="explore-image">
                {isModalProject ? (
                  <div className="live-image-link">
                    <span className="live-icon">🔍</span>
                    <img
                      src={section.image}
                      alt={section.title}
                      className="live-preview-image"
                      loading="lazy"
                    />
                  </div>
                ) : (
                  <a
                    href={section.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="live-image-link"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <span className="live-icon">🔗</span>
                    <img
                      src={section.image}
                      alt={section.title}
                      className="live-preview-image"
                      loading="lazy"
                    />
                  </a>
                )}
              </div>

              <div className="explore-text">
                <h3>{section.title}</h3>
                <p>{section.subtitle}</p>
                {section.video && (
                  <button
                    className="video-btn"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedProject(section);
                      openModal();
                    }}
                  >
                    🎬 Watch Demo
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* 🔹 Show More / Show Less Button */}
      {sections.length > 6 && (
        <div className="show-more-container">
          <button
            className="show-more-btn"
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? "Show Less" : "Show More"}
          </button>
        </div>
      )}

      {/* 🔹 Modal */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="modal-close-btn"
              onClick={closeModal}
            >
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
                  <source
                    src={selectedProject.video}
                    type="video/mp4"
                  />
                  Your browser does not support video playback.
                </video>
                {selectedProject.note && (
                  <p className="project-note">
                    {selectedProject.note}
                  </p>
                )}
                <button
                  className="back-btn"
                  onClick={goBack}
                >
                  ← Back to Projects
                </button>
              </>
            ) : selectedProject && modalProjectTitles.includes(selectedProject.title) ? (
              <div className="modal-project-detail" style={{ textAlign: "center" }}>
                <h2>{selectedProject.title}</h2>
                <p style={{ color: "#666", marginBottom: "15px" }}>{selectedProject.subtitle}</p>
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  style={{ width: "100%", maxHeight: "70vh", objectFit: "contain", borderRadius: "8px" }}
                />
                {selectedProject.note && (
                  <p className="project-note">
                    {selectedProject.note}
                  </p>
                )}
                <button
                  className="back-btn"
                  onClick={goBack}
                >
                  ← Back to Projects
                </button>
              </div>
            ) : (
              <>
                <h2>Next Projects</h2>
                <div className="modal-projects-grid">
                  {sections.map((section, idx) => (
                    <div
                      className="modal-project-card"
                      key={idx}
                    >
                      <img
                        src={section.image}
                        alt={section.title}
                        className="modal-project-image"
                      />
                      <h3>{section.title}</h3>
                      <p>{section.subtitle}</p>
                      {modalProjectTitles.includes(section.title) ? (
                        <button
                          className="modal-project-link"
                          onClick={() => setSelectedProject(section)}
                          style={{ border: "none", cursor: "pointer" }}
                        >
                          View
                        </button>
                      ) : (
                        <a
                          href={section.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="modal-project-link"
                        >
                          Visit
                        </a>
                      )}
                      {section.video && (
                        <button
                          className="small-demo-btn"
                          onClick={() =>
                            setSelectedProject(section)
                          }
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

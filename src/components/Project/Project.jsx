import React, { useState } from "react";
import "./Project.css";

// ✅ Import images
import project1Img from "../../assets/project1.png";
import project2Img from "../../assets/project2.png";
import project3Img from "../../assets/project3.png";

const projects = [
  {
    id: 1,
    title: "Food Delivery Website",
    img: project1Img,
    github: "https://github.com/Zain0832/Food-delivery-website", // <-- PASTE YOUR GITHUB REPO LINK HERE
    live: "https://food-delivery-demo.com",
  },
  {
    id: 2,
    title: "Weather App",
    img: project2Img,
    github: "https://github.com/Zain0832/Weather-App", // <-- PASTE YOUR GITHUB REPO LINK HERE
    live: "https://movie-search-demo.com",
  },
  {
    id: 3,
    title: "Personal Portfolio",
    img: project3Img,
    github: "https://github.com/Zain0832/", // <-- PASTE YOUR GITHUB REPO LINK HERE
    live: "https://project3-demo.com",
  },
];

function Project() {
  const [activeId, setActiveId] = useState(null);

  const toggleButtons = (id) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <section className="projects-section" id="projects">
      <h2 className="projects-title">
        My <span>Projects</span>
      </h2>
      <div className="projects-wrapper">
        {projects.map((project) => (
          <div
            className={`project-card ${
              activeId === project.id ? "active" : ""
            }`}
            key={project.id}
            onClick={() => toggleButtons(project.id)}
          >
            <img src={project.img} alt={project.title} />
            <h3>{project.title}</h3>

            {activeId === project.id && (
              <div className="project-buttons">
                {/* GitHub - direct repo link */}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn"
                >
                  GitHub
                </a>

                {/* Live Demo */}
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn"
                >
                  Live Demo
                </a>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Project;

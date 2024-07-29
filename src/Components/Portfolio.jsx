import React from "react";
import image from "../images/dev.jpg";

const imageAltText = "desktop with laptop";

const projectList = [
  {
    title: "My first Hagman game 🎉",
    description: "One of the firsts games I made.",
    url: "https://game.nazelord.com",
  },
  {
    title: "Bank Core",
    description:
      "I've made a bank core from scratch with Java",
    url: "https://github.com/Nazelord/byteBank",
  },
  {
    title: "Converter Java App",
    description:
      "This is a currency, mass and temperature convertion program.",
    url: "https://github.com/Nazelord/Challenge-Java-Conversor",
  },
  {
    title: "Cryptography Project",
    description:
      "Web App tool to make text unreadable for the human without platform",
    url: "https://encrypt.nazelord.com/",
  },
];

const Portfolio = () => {
  const handleClick = (url) => {
    window.open(url, "_blank");
  };

  return (
    <section className="padding" id="portfolio">
      <h3 style={{ textAlign: "center" }}>Portfolio</h3>
      <div className="portfolio-content">
        <div className="portfolio-image">
          <img
            src={image}
            alt={imageAltText}
          />
        </div>
        <div className="container">
        {projectList.map((project) => (
            <div className="box" key={project.title} onClick={() => handleClick(project.url)}>
            <h3>{project.title}</h3>
            <p className="small">{project.description}</p>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
};

export default Portfolio;

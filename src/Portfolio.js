import React, { Component } from "react";
import "./Portfolio.css";
import Card from "./Card";

const projects = [
  {
    title: "Kuro Retail",
    description: "Mock e-commerce site",
    URL: "https://kuro-retail.netlify.app/",
    imgUrl: "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png"
  },
  {
    title: "YearUp Mock Site",
    description: "Educational program site",
    imgUrl: "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png"
  },
  {
    title: "Gemini Constellation",
    description: "Python turtle project",
    imgUrl: "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png"
  },
  {
    title: "Bakery Mock Site",
    description: "Mock restaurant site with pure HTML and CSS.",
    imgUrl: "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png"
  },
]

class Portfolio extends Component {
  render() {
    return (
      <div className="section" id="portfolio">
        <h1>Portfolio</h1>
        <div id="projects">
          {projects.map((project) => (
            <Card
              title={project.title}
              description={project.description}
              imgUrl={project.imgUrl}
              URL={project.URL}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Portfolio;

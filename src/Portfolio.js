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
    title: "Project 2",
    description: "lorem ipsum",
    imgUrl: "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png"
  },
  {
    title: "Project 3",
    description: "lorem ipsum",
    imgUrl: "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png"
  },
  {
    title: "Project 4",
    description: "lorem ipsum",
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

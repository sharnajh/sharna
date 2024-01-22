import React, { Component } from "react";
import "./Portfolio.css";
import Card from "./Card";

const projects = [
  {
    title: "Digigram",
    description: "Fullstack social media app, built with Spring Boot, React.js, MySQL, and hosted on AWS.",
    URL: "https://github.com/sharnajh/capstone_backend",
    imgUrl: "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png"
  },
  {
    title: "Kuro Retail",
    description: "Online urban retail store. Built with React, Redux, Reselect, React Router, Firebase, Stripe, and more.",
    URL: "https://kuro-retail.netlify.app/",
    imgUrl: "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png"
  },
  {
    title: "YearUp Mock Site",
    description: "Educational program site built with pure HTML/CSS",
    URL: "https://clever-monstera-3ac05a.netlify.app/",
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

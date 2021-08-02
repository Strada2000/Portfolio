import React from "react";
import "./projects.scss";


export default function Projects() {
  return (
    <div className="main" id="projects">
      <div className="title1">Projects</div>
      <div className="project">
        <div className="project-card">
          <h1 className="ptitle">Path-Finding Visualiser:</h1>
          <p className="info">
            Pathfinding Algorithms are used to solve shortest path problem in
            Graph Theory.
          </p>
        </div>
        <div className="project-card">
          <h1 className="ptitle">React Calculator:</h1>
          <p className="info">
            A basic online calculator build using React able to perform basic
            calculations.
          </p>
        </div>
        <div className="project-card">
          <h1 className="ptitle">Recruiter-Client App:</h1>
          <p className="info">
            A Job finding and posting app able to connect multiple people.
          </p>
        </div>
      </div>
      <br />
      <br />
      <br />
      <div className="ct" id='contact'>
        <h1 className="head">Contact</h1>

        <a
          href="https://www.linkedin.com/in/SanketMense/"
          className="fa fa-linkedin-square linked"
          target="_blank"
        ></a>
        <a
          href="https://github.com/Strada2000"
          className="fa fa-github git"
          target="_blank"
        ></a>
      </div>
    </div>
  );
}

import React from "react";
import Project from "../components/Project";
import projects from "../images/projects.json";


function Portfolio() {
  return (
    <div>
      <div className="container portfolio-container">
        <h1 className="title">Portfolio</h1>
        <div className="row">
          <Project
            name={projects[0].name}
            image={projects[0].image}
            project={projects[0].project}
            location={projects[0].location}
          />
          <Project
            name={projects[1].name}
            image={projects[1].image}
            project={projects[1].project}
            location={projects[1].location}
          />
        </div>
        <div className="row">
          <Project
            name={projects[2].name}
            image={projects[2].image}
            project={projects[2].project}
            location={projects[2].location}
          />
          <Project
            name={projects[3].name}
            image={projects[3].image}
            project={projects[3].project}
            location={projects[3].location}
          />
        </div>
        <div className="row">
          <Project
            name={projects[4].name}
            image={projects[4].image}
            project={projects[4].project}
            location={projects[4].location}
          />

          <Project
            name={projects[5].name}
            image={projects[5].image}
            project={projects[5].project}
            location={projects[5].location}
          />
        </div>
      </div>
    </div >
  );
}

export default Portfolio;
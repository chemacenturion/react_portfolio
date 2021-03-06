import React from "react";
import Project from "../components/Project";
import projects from "../images/projects.json";


function Portfolio() {
  return (
      <div className="row row-cols-1 row-cols-md-3 g-4 mt-2">
        <Project
          name={projects[0].name}
          image={projects[0].image}
          project={projects[0].project}
          deployment={projects[0].deployment}
          repository={projects[0].repository}
        />
        <Project
          name={projects[1].name}
          image={projects[1].image}
          project={projects[1].project}
          deployment={projects[1].deployment}
          repository={projects[1].repository}
        />
        <Project
          name={projects[2].name}
          image={projects[2].image}
          project={projects[2].project}
          deployment={projects[2].deployment}
          repository={projects[2].repository}
        />
        <Project
          name={projects[3].name}
          image={projects[3].image}
          project={projects[3].project}
          deployment={projects[3].deployment}
          repository={projects[3].repository}
        />
        <Project
          name={projects[4].name}
          image={projects[4].image}
          project={projects[4].project}
          deployment={projects[4].deployment}
          repository={projects[4].repository}
        />
        <Project
          name={projects[5].name}
          image={projects[5].image}
          project={projects[5].project}
          deployment={projects[5].deployment}
          repository={projects[5].repository}
        />
      </div>
  );
}

export default Portfolio;
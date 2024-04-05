import { FC } from "react";
import projects from "../data/projects.json";
import Project from "../components/Project";
const Featured: FC = () => {
  return (
    <div className="py-4" id="work">
      <h1 className="bebas text-6xl md:text-7xl py-5">Featured Projects</h1>
      <p className="text-lg text-gray-400 mb-10">
        Here are some of the selected projects that showcase my passion for
        front-end development.
      </p>
      {projects.map((project) => {
        return (
          <div key={project.id}>
            <Project {...project} />
          </div>
        );
      })}
    </div>
  );
};

export default Featured;

import React from "react";
import { Project } from "../types";
import "../App.css";
import { useTheme } from "../components/theme/ThemeProvider";
import StarIcon from "./icons/StarIcon";
import Gallery from "./Gallery";
import { ScrollArea } from "./ui/scroll-area";

interface ProjectsProps {
  projectsArr: Project[];
  selected: number;
  handleProjectSelect: (index: number) => void;
}

const Projects: React.FC<ProjectsProps> = ({
  projectsArr,
  selected,
  handleProjectSelect,
}) => {
  const { theme } = useTheme();

  return (
    <div className="w-full md:w-[40%] h-full z-10 md:border-r lg:border-x border-neutral-700 relative">
      <ScrollArea className="h-full">
        <div className="flex flex-col">
          <div
            className={`sticky top-0 px-5 py-5 ${
              theme === "dark" ? "bg-neutral-950" : "bg-white"
            }`}
          >
            <div className="overlay absolute top-0 left-0 w-full h-full" />
            <h2 className={`font-bold dark:text-neutral-400`}>PROJECTS</h2>
          </div>
          <div className="px-5 pb-5">
            {projectsArr?.map((project, index) => {
              return (
                <button
                  key={project.name}
                  className={`w-full border-b ${
                    index === 0 ? "border-t" : ""
                  } border-neutral-700 text-lg flex flex-col cursor-pointer`}
                  onClick={() => handleProjectSelect(index)}
                >
                  <div className="w-full flex gap-4 justify-between items-center">
                    <div className="flex gap-4 items-center">
                      {index === selected && <StarIcon />}
                      <div
                        className={`${
                          index === selected && "underline"
                        } py-6 text-2xl font-bold text-left`}
                      >
                        {project.name}
                      </div>
                    </div>
                    <div className="border border-neutral-700 px-3 rounded-full">
                      {project.year}
                    </div>
                  </div>
                  {index === selected && (
                    <div className="text-left pb-5 text-base text-pretty">
                      {projectsArr[selected]?.description}
                    </div>
                  )}
                  <div className="md:hidden">
                    <Gallery
                      selectedImgUrl={project.image.asset.url}
                      skills={project.skills}
                      link={project.link}
                    />
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </ScrollArea>
      <div
        className={`absolute bottom-0 left-0 right-0 h-16 pointer-events-none z-20 hidden md:block ${
          theme === "dark"
            ? "bg-gradient-to-t from-neutral-950 to-transparent"
            : "bg-gradient-to-t from-neutral-50 to-transparent"
        }`}
      />
    </div>
  );
};

export default Projects;

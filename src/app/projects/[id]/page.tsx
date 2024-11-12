"use client";

import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import Loading from "@/components/Loading";

interface TechStackItem {
  path: string;
  name: string;
}

interface Project {
  _id: string;
  name: string;
  description: string;
  imageUrl: string[];
  techStack: TechStackItem[];
  liveLink: string;
  sourceCodeLink: string;
}

const ProjectDetails = () => {
  const params = useParams();
  const projectId = params.id as string; // Assuming `id` is the parameter name
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (projectId) {
      const fetchProjectDetails = async () => {
        try {
          const response = await axios.get("/projects.json"); // Fetch from the local JSON file in the public folder
          const projects: Project[] = response.data;
          const foundProject = projects.find(
            (project) => project._id === projectId
          );
          setProject(foundProject || null);
        } catch (error) {
          console.error("Error fetching project details:", error);
        } finally {
          setLoading(false); // Set loading to false after fetching data
        }
      };

      fetchProjectDetails();
    } else {
      setLoading(false); // If no projectId, stop loading
    }
  }, [projectId]);

  if (loading) {
    return (
      <div>
        <Loading />
      </div>
    );
  }

  if (!project) {
    return <div>Project not found.</div>;
  }

  return (
    <div className="my-4 lg:mt-0 w-full lg:border-[1px] border-slate-600/20 dark:lg:border-slate-300/20 rounded-xl items-center p-0 md:p-8">
      <div className="flex flex-col gap-8 w-full text-right">
        
        <div className="flex flex-col gap-4">
          <div className="flex justify-between items-center">
            <div className="flex gap-2">
              <h2 className="text-2xl md:text-4xl font-bold uppercase tracking-wider  text-gray-800 dark:text-white ">
                {project.name}
              </h2>
              <div className="text-[#f59e0b]">
                <i className="ri-star-s-fill"></i>
              </div>
            </div>
          </div>
          <div>
            <p className="text-[15px] flex justify-start font-semibold text-gray-800 dark:text-white">
              Built with the latest tech stack
            </p>
            <div className="flex flex-wrap gap-4 mt-2">
              {project.techStack.map((tech, index) => (
                <div key={index} className="relative group">
                  <Image
                    src={tech.path}
                    alt="Technology Icon"
                    width={30}
                    height={30}
                  />
                  <span className="mb-2 shadow-xl absolute bottom-full left-1/2 -translate-x-1/2 dark:bg-white dark:text-black bg-black text-white text-center text-xs font-semibold rounded-[7px] py-2 px-3 hidden group-hover:block transition-opacity duration-300">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <p className="text-[15px] flex justify-start font-semibold text-gray-800 dark:text-white">
              Description
            </p>
            <p className="text-left text-sm font-normal text-neutral-600 dark:text-neutral-400 md:text-sm md:font-normal mt-2">
              {project.description.map((elem, index) => (
                <ul key={index} className="list-disc pl-3">
                    <li  className="mb-2"> {elem}</li>
                </ul>
              ))}
            </p>
          </div>
          <div className="flex gap-4 mt-4">
            <Link
              href={project.liveLink}
              passHref
              target="_blank"
              className="gap-1 md:gap-2 inline-flex h-12 animate-shimmer items-center justify-center 
                        rounded-xl border border-slate-800 
                        bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%]
                        px-3 md:px-6 font-medium text-slate-400 transition-colors 
                        focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-1 focus:ring-offset-slate-50"
              rel="noreferrer"
            >
              <i className="ri-links-line mb-1 text-xl"></i> Live Preview
            </Link>
            <Link
              href={project.sourceCodeLink}
              passHref
              target="_blank"
              className="gap-1 md:gap-2 inline-flex h-12 animate-shimmer items-center justify-center 
                        rounded-xl border border-slate-800 
                        bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%]
                        px-3 md-px-6 font-medium text-slate-400 transition-colors 
                        focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-1 focus:ring-offset-slate-50"
              rel="noreferrer"
            >
              <i className="ri-github-fill mb-1 text-xl"></i> Source Code
            </Link>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-5">
          {project.imageUrl.map((path,index ) => (
            <div key={index} className="flex rounded-[5px] overflow-hidden justify-center items-center border border-[rgba(255,255,255,0.10)] dark:bg-[rgba(40,40,40,0.70)] bg-gray-100 shadow-[2px_4px_16px_0px_rgba(248,248,248,0.06)_inset]">
              <Image
                src={path}
                alt="Project Image"
                width={1000}
                height={400}
                className="shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;

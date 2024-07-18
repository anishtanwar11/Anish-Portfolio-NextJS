"use client";

import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import Loading from "@/components/Loading";

interface Project {
  _id: string;
  name: string;
  description: string;
  imageUrl: string;
  category: string;
  techStack: string;
  liveLink: string;
  sourceCodeLink: string;
}

const ProjectDetails = () => {
  const params = useParams();
  const userId = params.id as string; // Assuming `id` is the parameter name
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (userId) {
      const fetchProjectDetails = async () => {
        try {
          const response = await axios.get(
            `https://project-catalouge-backend.vercel.app/project/${userId}`
          );
          setProject(response.data);
        } catch (error) {
          console.error("Error fetching project details:", error);
        } finally {
          setLoading(false); // Set loading to false after fetching data
        }
      };

      fetchProjectDetails();
    } else {
      setLoading(false); // If no userId, stop loading
    }
  }, [userId]);

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
    <div className='my-4 lg:mt-0 w-full lg:border-[1px] border-slate-600/20 dark:lg:border-slate-300/20  rounded-xl items-center p-0 md:p-8'>
      <div className="flex flex-col gap-8 w-full text-right">
        <div className="flex gap-2 justify-end text-[.8rem] mg:text-[1rem] font-semibold text-gray-800 dark:text-white">
            <Link href={"/"} className="">Home</Link> 
            {"/"} 
            <Link href={"/projects"}>Projects</Link> 
            {"/"} &nbsp;
            {project.name}
        </div>
        <div className="flex  rounded-xl overflow-hidden justify-center items-center border border-[rgba(255,255,255,0.10)] dark:bg-[rgba(40,40,40,0.70)] bg-gray-100 shadow-[2px_4px_16px_0px_rgba(248,248,248,0.06)_inset] ">
          <Image
            src={project.imageUrl}
            alt="Project Image"
            width={1000}
            height={400}
            className="shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]"
          />
        </div>
        <div className=" flex flex-col gap-4">
          <div className="flex justify-between items-center">
            <div className="flex gap-2">
              <h2 className="text-[1rem] md:text-2xl uppercase tracking-wider font-semibold text-gray-800 dark:text-white ">
                {project.name}
              </h2>
              <div className="text-[#f59e0b]">
                <i className="ri-star-s-fill"></i>
              </div>
            </div>
            <p className="border-[1px] text-[15px] lg:border-[1px] border-slate-600/20 dark:lg:border-slate-300/20 rounded-[20px]  py-1 md:py-2 px-4 md:px-8 text-gray-800 dark:text-white ">
              {project.category}
            </p>
          </div>
          <div>
            <p className="text-[15px] flex justify-start font-semibold text-gray-800 dark:text-white">
              Technologies
            </p>
            <p className="text-sm font-normal text-neutral-600 dark:text-neutral-400  md:text-sm md:font-normal text-justify mt-2">
              {project.techStack}
            </p>
          </div>
          <div>
            <p className="text-[15px] flex justify-start font-semibold text-gray-800 dark:text-white">
              Description
            </p>
            <p className="text-left text-sm font-normal text-neutral-600 dark:text-neutral-400  md:text-sm md:font-normal mt-2">
              {project.description}
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
              <i className="ri-links-line mb-1 text-xl"></i> Live Link
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
      </div>
    </div>
  );
};

export default ProjectDetails;

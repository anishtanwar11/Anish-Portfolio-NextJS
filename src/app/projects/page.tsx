"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import axios from "axios";
import Loading from "@/components/Loading";

interface Project {
  _id: string;
  name: string;
  description: string;
  coverImg: string;
}

function ProjectDisplay() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function fetchProjects() {
      try {
        const response = await axios.get("/projects.json");
        const formattedProjects = response.data.map((project: Project) => ({
          ...project,
          imageUrl: project.coverImg.replace(/\\/g, "/"), // Convert backslashes to forward slashes
        }));
        setProjects(formattedProjects);
      } catch (error) {
        console.error("Error fetching projects:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchProjects();
  }, []);

  if (loading) {
    return (
      <div>
        <Loading />
      </div>
    );
  }

  return (
    <div className="pt-4 mb-4 lg:pt-0 w-full justify-center flex">
      <div className="w-full">
        <ul className=" justify-center md:columns-2 ">
          {projects.map((project) => (
            <li
              key={project._id}
              className="mb-5 bg-gray-50 dark:bg-[#141515] border dark:border-white/[0.2] border-black/[0.1] relative rounded-xl p-3 md:p-5 "
            >
              <Link
                href={`/projects/[id]`}
                as={`/projects/${project._id}`}
                passHref
              >
                <div className="rounded-xl overflow-hidden object-cover flex items-center justify-center">
                  <Image
                    src={project.coverImg}
                    alt="Project Image"
                    width={500}
                    height={280}
                    className="h-auto w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  />
                </div>
                <div className="pt-4 flex flex-col gap-2">
                  <div className="flex items-center text-xl font-medium">
                    <h1 className="text-lg font-medium text-neutral-600 dark:text-white">
                      {project.name}
                    </h1>
                  </div>
                  <p className=" truncate text-neutral-500 text-xs max-w-sm  dark:text-neutral-300">
                    {project.description}
                  </p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ProjectDisplay;

"use client";
// /app/projects/page.tsx
import Link from 'next/link';
import Image from 'next/image';
import { WobbleCard } from '@/components/ui/wobble-card';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Loading from '@/components/Loading';

interface Project {
  _id: string;
  name: string;
  description: string;
  imageUrl: string;
}

function ProjectDisplay() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {

    async function fetchProjects() {
      try {
        const response = await axios.get('https://project-catalouge-backend.vercel.app/project');
        const formattedProjects = response.data.map((project: Project) => ({
          ...project,
          imageUrl: project.imageUrl.replace(/\\/g, '/'), // Convert backslashes to forward slashes
        }));
        setProjects(formattedProjects);
      } catch (error) {
        console.error('Error fetching projects:', error);
      }finally {
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
    <div className='pt-4 lg:pt-0 w-full justify-center flex'>
      <div className='w-full'>
      <div className="mb-8 flex gap-2 justify-end text-[.8rem] mg:text-[1rem] font-semibold text-gray-800 dark:text-white">
            <Link href={"/"} className="">Home</Link> 
            {"/"} &nbsp;
            Projects 
        </div>
        <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5'>
          {projects.map(project => (
            <li key={project._id} className='bg-gray-50 dark:bg-black border dark:border-white/[0.2] border-black/[0.1]  relative rounded-xl p-2 md:p-4 '>
              <Link href={`/projects/[id]`} as={`/projects/${project._id}`} passHref>
                <div className='rounded-xl overflow-hidden h-[200px] sm:h-[280px] md:h-[200px] object-cover flex items-center justify-center'>
                  <Image
                    src={project.imageUrl}
                    alt="Project Image"
                    width={500}
                    height={280}
                    className='h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl'
                  />
                </div>
                <div className='p-4 flex flex-col gap-4'>
                  <div className='flex items-center gap-2 text-xl font-medium'>
                    <h1 className='text-xl font-bold text-neutral-600 dark:text-white'>{project.name}</h1>
                    <div className='text-[#f59e0b]'>
                      <i className="ri-star-s-fill"></i>
                    </div>
                  </div>
                  <p className='truncate text-neutral-500 text-sm max-w-sm  dark:text-neutral-300'>{project.description}</p>
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

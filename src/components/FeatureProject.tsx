"use client";
import Image from "next/image";
import FP1 from "@/assets/images/figma.png";
import FP2 from "@/assets/images/cover-notebook.png";
import FP3 from "@/assets/images/noise-img.png";
import Link from "next/link";

const FeatureProject = () => {
  return (
    <div>
      <h1 className="text-xl md:text-3xl font-semibold text-center text-gray-800 dark:text-white">
        Featured Projects
      </h1>

      <Link
        href="/projects"
        className="text-lg  font-semibold mb-10 text-center w-full flex items-center justify-center text-blue-500"
      >
        View all <i className="ri-arrow-right-s-line"></i>
      </Link>

      <div className="flex flex-col md:flex-row gap-4 mb-14 ">
        <div className="md:w-1/2 overflow-hidden rounded-[8px]">
          <Image src={FP1} alt="Cover-image" />
        </div>

        <div className="text-gray-800 dark:text-white md:w-1/2">
          <h1 className="flex items-center gap-x-2 text-lg font-semibold text-gray-800 dark:text-white">
            🎨 Figma (UI/UX Design)
          </h1>
          <p className="mt-2 mb-4 text-base text-neutral-800 dark:text-neutral-200">
            <i>
              <span className="dark:text-white text-black text-xl">&quot;</span>
              Redesigned interfaces for various web and mobile apps focusing on
              modern layouts, usability, and visual appeal.
              <span className="dark:text-white text-black text-xl">&quot;</span>
            </i>
          </p>
          <a
            href="https://www.figma.com/design/CkiChsRq6GmV0mbyVMCFse/All-Designs?node-id=0-1&p=f&t=p42uKDVodsCMRXzk-0"
            target="_blank"
            className="text-gray-200 bg-gray-500/50 dark:border-slate-100/30 duration-300 ease-in-out px-5 py-3 rounded-[6px] text-sm dark:hover:bg-white dark:hover:text-black hover:bg-black hover:text-white"
          >
            <i className="ri-links-line mb-1"></i> Take a tour
          </a>
        </div>
      </div>

      <div className="flex flex-col-reverse md:flex-row gap-4 mb-14 ">
        <div className="text-gray-800 dark:text-white md:w-1/2">
          <h1 className="flex items-center gap-x-2 text-lg font-semibold text-gray-800 dark:text-white">
            📒 Notebook (MERN Stack)
          </h1>
          <p className="mt-2 mb-4 text-base text-neutral-800 dark:text-neutral-200">
            <i>
              <span className="dark:text-white text-black text-xl">&quot;</span>
              Your all-in-one digital notebook to organize ideas, collaborate,
              and stay productive.
              <span className="dark:text-white text-black text-xl">&quot;</span>
            </i>
          </p>
          <a
            href="https://cloudbooks.vercel.app/"
            target="_blank"
            className="text-gray-200 bg-gray-500/50 dark:border-slate-100/30 duration-300 ease-in-out px-5 py-3 rounded-[6px] text-sm dark:hover:bg-white dark:hover:text-black hover:bg-black hover:text-white"
          >
            <i className="ri-links-line mb-1"></i> Take a tour
          </a>
        </div>
        <div className="md:w-1/2 overflow-hidden rounded-[8px]">
          <Image src={FP2} alt="Cover-image" />
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-4">
        <div className="md:w-1/2 overflow-hidden rounded-[8px]">
          <Image src={FP3} alt="Cover-image" width={1000} />
        </div>
        <div className="text-gray-800 dark:text-white md:w-1/2">
          <h1 className="flex items-center gap-x-2 text-lg font-semibold text-gray-800 dark:text-white">
            🛍️ Noise Clone
          </h1>
          <p className="mt-2 mb-4 text-base text-neutral-800 dark:text-neutral-200">
            <i>
              <span className="dark:text-white text-black text-xl ">
                &quot;
              </span>
              Experience seamless online shopping with our Noise-inspired
              e-commerce platform.
              <span className="dark:text-white text-black text-xl">&quot;</span>
            </i>
          </p>
          <a
            href="https://gonoise-clone.netlify.app/"
            target="_blank"
            className="text-gray-200 bg-gray-500/50 dark:border-slate-100/30 duration-300 ease-in-out px-5 py-3 rounded-[6px] text-sm dark:hover:bg-white dark:hover:text-black hover:bg-black hover:text-white"
          >
            <i className="ri-links-line mb-1"></i> Take a tour
          </a>
        </div>
      </div>
    </div>
  );
};

export default FeatureProject;

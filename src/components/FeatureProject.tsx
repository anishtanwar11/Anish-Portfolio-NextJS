"use client";
import Image from "next/image";
import FP1 from "@/assets/images/FP_1.png";
import FP2 from "@/assets/images/noise-img.png";

const FeatureProject = () => {
  return (
    <div>
      <h1 className="text-xl md:text-3xl font-semibold mb-4 text-gray-800 dark:text-white">
        Featured Projects
      </h1>

        <div className="flex flex-col md:flex-row gap-4 mb-6 ">
          <div className="md:w-1/2 overflow-hidden rounded-[8px]">
            <Image src={FP1} alt="Cover-image" />
          </div>

          <div className="text-gray-800 dark:text-white md:w-1/2">
            <h1 className="flex items-center gap-x-2 text-lg font-semibold text-gray-800 dark:text-white">
              Notebook (MERN Stack)
            </h1>
            <p className="mt-2 text-base mb-5 text-neutral-600 dark:text-neutral-400">
              A full-featured MERN Stack Notebook app with a User Dashboard,
              allowing users to manage multiple notebooks, sections, and pages
              with a rich text editor and secure user authentication.
            </p>

            <a
              href="https://cloudbooks.vercel.app/"
              target="_blank"
              className="border-2 border-slate-600/30 dark:lg:border-slate-300/30 px-4 py-2 rounded-[6px] text-sm dark:hover:bg-white dark:hover:text-black hover:bg-black hover:text-white"
            >
              <i className="ri-links-line mb-1"></i> Take a tour
            </a>
          </div>
        </div>

        <div className="flex flex-col-reverse md:flex-row gap-4">
          <div className="text-gray-800 dark:text-white md:w-1/2">
            <h1 className="flex items-center gap-x-2 text-lg font-semibold text-gray-800 dark:text-white">
              Noise Clone
            </h1>
            <p className="mt-2 text-base mb-5 text-neutral-600 dark:text-neutral-400">
              Developed a Noise Clone e-commerce website with essential shopping
              features, including product categories, product detail pages,
              search filters, and a shopping cart.
            </p>

            <a
              href="https://gonoise-clone.netlify.app/"
              target="_blank"
              className="border-2 border-slate-600/30 dark:lg:border-slate-300/30 px-4 py-2 rounded-[6px] text-sm dark:hover:bg-white dark:hover:text-black hover:bg-black hover:text-white"
            >
              <i className="ri-links-line mb-1"></i> Take a tour
            </a>
          </div>

          <div className="md:w-1/2 overflow-hidden rounded-[8px]">
            <Image src={FP2} alt="Cover-image" width={1000} />
          </div>
        </div>
    </div>
  );
};

export default FeatureProject;

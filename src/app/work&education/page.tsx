"use client";
import React from "react";
import { twMerge } from "tailwind-merge";
import { TracingBeam } from "../../components/ui/tracing-beam";

import Image from "next/image";

import PrimeWise from "../../assets/certificates/Primewise.jpg";
import Solitare from "../../assets/certificates/Solitare.jpg";
import Kuk from "../../assets/institutes/kuk_logo-e1668590054813.png";
import DSC from "../../assets/institutes/DyalSinghCollege.jpg";

export default function WorkAndEducation() {
  return (
    <div className="mb-4 w-full lg:border-[1px] border-slate-600/20 dark:lg:border-slate-300/20  rounded-xl items-center">
      <TracingBeam className="">
        <div className="max-w-2xl mx-auto antialiased pt-4 pl-4 lg:pl-0 relative border-b-[1px] border-opacity-20 border-slate-600/20 dark:lg:border-slate-300/20 ">
          <h1 className="text-gray-800 dark:text-white text-center text-xl md:text-3xl mb-10 font-semibold ">
            <i className="ri-briefcase-line"></i> WORK EXPRIENCE
          </h1>
          {workContent.map((item, index) => (
            <div key={`content-${index}`} className="mb-10">
              <h2 className="text-gray-800 dark:text-white  rounded-full text-sm w-fit px-4 py-1 mb-4">
                {item.badge}
              </h2>

              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2 md:gap-4 mb-2">
                  {item?.logoImage && (
                    <Image
                      src={item.logoImage}
                      alt="blog thumbnail"
                      height="40"
                      width="40"
                      className="rounded-lg  object-cover"
                    />
                  )}
                  <p
                    className={twMerge(
                      " md:text-xl text-gray-800 dark:text-white"
                    )}
                  >
                    {item.title}
                  </p>
                </div>

                <div className="flex gap-3 text-xl">
                  <a
                    href={item.webLink}
                    target="_blank"
                    className="relative group text-gray-800 dark:text-white  duration-200"
                    rel="noreferrer"
                  >
                    <i className="ri-global-line"></i>
                    <span className="mb-3 w-28 absolute bottom-full left-1/2 -translate-x-1/2 dark:bg-white dark:text-black bg-black text-white text-center text-xs font-semibold rounded-[7px] py-2 px-3 hidden group-hover:block transition-opacity duration-300">
                      Visit Website
                    </span>
                  </a>
                  <a
                    href={item.linkedInLinks}
                    target="_blank"
                    className="relative group text-gray-800 dark:text-white  duration-200"
                    rel="noreferrer"
                  >
                    <i className="ri-linkedin-box-line"></i>
                    <span className="mb-3 w-28 absolute bottom-full left-1/2 -translate-x-1/2 dark:bg-white dark:text-black bg-black text-white text-center text-xs font-semibold rounded-[7px] py-2 px-3 hidden group-hover:block transition-opacity duration-300">
                      Visit LinkedIn
                    </span>
                  </a>
                </div>
              </div>

              <p
                className={twMerge(
                  "text-[13px] mb-1 text-gray-800 dark:text-white"
                )}
              >
                {item.duration}
              </p>
              <p
                className={twMerge(
                  "text-[13px] mb-4 text-gray-800 dark:text-white"
                )}
              >
                {item.location}
              </p>

              <div className="text-sm font-normal text-neutral-600 dark:text-neutral-400  md:text-sm md:font-normal prose prose-sm dark:prose-invert">
                {item.description}
                {item?.certificateImage && (
                  <Image
                    src={item.certificateImage}
                    alt="blog thumbnail"
                    height="1000"
                    width="1000"
                    className="rounded-lg mt-4 md:mt-10 object-cover"
                  />
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-2xl mx-auto antialiased pt-4 pl-4 lg:pl-0 mt-4 relative">
          <h1 className="text-gray-800 dark:text-white flex items-center justify-center gap-2 text-center text-xl md:text-3xl font-semibold mb-10 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill="currentColor"
              viewBox="0 0 256 256"
            >
              <path d="M251.76,88.94l-120-64a8,8,0,0,0-7.52,0l-120,64a8,8,0,0,0,0,14.12L32,117.87v48.42a15.91,15.91,0,0,0,4.06,10.65C49.16,191.53,78.51,216,128,216a130,130,0,0,0,48-8.76V240a8,8,0,0,0,16,0V199.51a115.63,115.63,0,0,0,27.94-22.57A15.91,15.91,0,0,0,224,166.29V117.87l27.76-14.81a8,8,0,0,0,0-14.12ZM128,200c-43.27,0-68.72-21.14-80-33.71V126.4l76.24,40.66a8,8,0,0,0,7.52,0L176,143.47v46.34C163.4,195.69,147.52,200,128,200Zm80-33.75a97.83,97.83,0,0,1-16,14.25V134.93l16-8.53ZM188,118.94l-.22-.13-56-29.87a8,8,0,0,0-7.52,14.12L171,128l-43,22.93L25,96,128,41.07,231,96Z"></path>
            </svg>
            EDUCATION
          </h1>
          {educationContent.map((item, index) => (
            <div key={`content-${index}`} className="mb-10">
              <h2 className="text-gray-800 dark:text-white rounded-full text-sm w-fit px-4 py-1 mb-4">
                {item.badge}
              </h2>

              <div className="flex items-center gap-2 md:gap-4 mb-2">
                {item?.image && (
                  <Image
                    src={item.image}
                    alt="blog thumbnail"
                    height="40"
                    width="40"
                    className="rounded-lg object-cover"
                  />
                )}
                <p
                  className={twMerge(
                    " md:text-xl text-gray-800 dark:text-white"
                  )}
                >
                  {item.title}
                </p>
              </div>

              <p
                className={twMerge(
                  "text-[15px] md:text-[17px] mb-1 text-gray-800 dark:text-white"
                )}
              >
                {item.field}
              </p>
              <p
                className={twMerge(
                  "text-[13px] mb-1 text-gray-800 dark:text-white"
                )}
              >
                {item.duration}
              </p>
              <p
                className={twMerge(
                  "text-[13px] mb-2 text-gray-800 dark:text-white"
                )}
              >
                {item.location}
              </p>
              <h2
                className={twMerge(
                  "text-[15px] mb-2 text-gray-800 dark:text-white"
                )}
              >
                Grade: {item.grade}
              </h2>
            </div>
          ))}
        </div>
      </TracingBeam>
    </div>
  );
}

const workContent = [
  {
    title: "Primewise Consulting",
    webLink: "https://primewiseconsulting.com/",
    linkedInLinks: "https://www.linkedin.com/company/primewise-consulting/",
    duration: "Oct 2023 - Apr 2024",
    location: "Bengaluru, Karnataka, India · Remote",
    description: (
      <ul className="list-disc ml-3 flex flex-col gap-2">
        <li className="">
          Developed and maintained web applications using React.js, Next.js for
          server-side rendering, and Node.js/Express.js for backend services,
          ensuring high performance and scalability.
        </li>
        <li>
          Enhanced user experience by implementing responsive designs using HTML
          and Tailwind CSS, optimizing interfaces for various devices and
          improving load times by 20%.
        </li>
        <li>
          Collaborated with cross-functional teams to deliver features on
          schedule, adhering to agile development principles.
        </li>
        <li>
          Actively participated in code reviews, ensuring code quality and
          adherence to project requirements and timelines.
        </li>
        <li>
          Utilized Git and GitHub for version control and team collaboration,
          contributing to over 100 pull requests across multiple projects.
        </li>
      </ul>
    ),
    badge: "Web Development Intern",
    certificateImage: PrimeWise,
    logoImage:
      "https://media.licdn.com/dms/image/D560BAQFV-sRoAjY2-Q/company-logo_200_200/0/1694249171005/primewise_consulting_logo?e=1728518400&v=beta&t=wb-66b97tUhLtn4eCYTMe5VczHQg8uwkLeC3jpCT9kM",
  },
  {
    title: "Solitaire Infosys Inc",
    webLink: "https://solitaireinfosystems.com/",
    linkedInLinks: "https://www.linkedin.com/company/solitaire-infosys-inc/",
    duration: "Aug 2022 - Oct 2022",
    location: "Sahibzada Ajit Singh Nagar, Punjab, India · On-site",
    description: (
      <ul className="list-disc ml-3 flex flex-col gap-2">
        <li>
          Completed a 45-day internship focused on building dynamic single-page
          applications (SPAs) using Angular.
        </li>
        <li>
          Implemented responsive and visually appealing user interfaces with
          HTML, CSS, Bootstrap, and Angular components, increasing engagement by
          15%.
        </li>
        <li>
          Gained proficiency in building reusable components and services,
          improving the maintainability of web applications.
        </li>
        <li>
          Collaborated with senior developers to design and implement efficient
          client-side routing and data handling, contributing to a 30% reduction
          in API response times.
        </li>
      </ul>
    ),
    badge: "Frontend Development Intern",
    certificateImage: Solitare,
    logoImage:
      "https://media.licdn.com/dms/image/C4D0BAQE8xg9YXHSNXA/company-logo_200_200/0/1630560859402/solitaire_infosys_inc_logo?e=1728518400&v=beta&t=gR3RWe64e6KsdBBi9YtTDqTr9LPHmKextY0iAaBumgY",
  },
];

const educationContent = [
  {
    title: "Kurukshetra University, Kurukshetra",
    duration: "Aug 2021 - Jun 2023",
    location: "Kurukshetra, Haryana, India · Full Time",
    grade: "7.38 CGPA",
    badge: "MCA (Master of Computer Application)",
    image: Kuk,
  },
  {
    title: "Dyal Singh College, Karnal",
    duration: "July 2018 - Jun 2021",
    location: "Karnal, Haryana, India · Full Time",
    grade: "70.71%",
    badge: "BCA (Bachelor of Computer Application)",
    image: DSC,
  },

  {
    title: "SD SR SEC School, Karnal",
    field: "Commerce",
    duration: "Apr 2017 - Mar 2018",
    location: "Karnal, Haryana, India · Full Time",
    grade: "77.2%",
    badge: "12th class from (HBSE)",
    image:
      "https://ipsf.net/wp-content/uploads/2021/12/dummy-image-square-370x370.webp",
  },
  {
    title: "SD SR SEC School, Karnal",
    field: "Maths, Science",
    duration: "Apr 2015 - Mar 2016",
    location: "Karnal, Haryana, India · Full Time",
    grade: "65.8%",
    badge: "10th class from (HBSE)",
    image:
      "https://ipsf.net/wp-content/uploads/2021/12/dummy-image-square-370x370.webp",
  },
];

"use client";
import React from "react";
import { HoverBorderGradient } from "./ui/hover-border-gradient";
import { useTheme } from "./ThemeContext";

import Image from "next/image";
import ProfileImg from "../assets/images/farewalle3.jpg";
import LeetCode from "../assets/images/leetcode.svg";
import Github from "../assets/images/github.svg";
import GithubLight from "@/assets/frontend/github-light.svg";
import LinkedIn from "@/assets/images/linkedin-original.svg";
import WordRotate from "./magicui/word-rotate";

import "remixicon/fonts/remixicon.css";

function Profile() {
  const { theme } = useTheme();

  return (
    <div className="w-full justify-center  lg:pr-4">
      <div className="lg:border-[0px] bg-white dark:bg-black border-slate-600/20 dark:lg:border-slate-300/20 p-4 rounded-[15px]">
        <div className="mb-10 ">
          <div className="flex-none w-40 h-40 mx-auto ">
            <Image
              className=" inset-0 w-full h-full object-cover rounded-[50%]"
              src={ProfileImg}
              alt="Profile Image"
            />
          </div>
          <div className="mt-1 text-xl font-semibold text-gray-800 dark:text-white flex  items-center justify-center gap-2">
            <WordRotate
              className="text-xl font-semibold text-gray-800 dark:text-white"
              words={["Web", "Frontend", "Backend"]}
            />
            <p>Developer</p>
          </div>
        </div>

        <div className=" grid gap-2 text-[14px] text-neutral-900 md:text-neutral-600 dark:text-neutral-400">
          <div className="flex gap-2 items-center ">
            <li className="text-xl list-none">
              <i className="ri-map-pin-line"></i>
            </li>
            Karnal, Haryana
          </div>
          <a href="mailto:tanwaranish333@gmail.com" target="_blank">
            <div className="flex gap-2 items-center hover:text-black dark:hover:text-white duration-200">
              <li className="text-xl list-none">
                <i className="ri-mail-line"></i>
              </li>
              anishtanvar@gmail.com
            </div>
          </a>
          <a
            href="https://www.instagram.com/thisisanishtanwar/"
            target="_blank"
          >
            <div className="flex gap-2 items-center hover:text-black dark:hover:text-white duration-200">
              <li className="text-xl list-none">
                <i className="ri-instagram-line"></i>
              </li>
              thisisanishtanwar
            </div>
          </a>
          <a href="https://twitter.com/thisistanwar" target="_blank">
            <div className="flex gap-2 items-center hover:text-black dark:hover:text-white duration-200">
              <li className="text-xl list-none">
                <i className="ri-twitter-line"></i>
              </li>
              thisistanwar
            </div>
          </a>
        </div>

        <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-4 h-[1px] w-full" />

        <div className="flex justify-center text-center mt-4 w-full">
          <a href="/Anish-Resume_2024.pdf" download>
            <HoverBorderGradient
              containerClassName="rounded-full"
              as="button"
              className="border-none dark:bg-black bg-white text-black dark:text-white flex items-center justify-center space-x-2"
            >
              <i className="ri-download-cloud-line"></i>
              <span>Resume</span>
            </HoverBorderGradient>
          </a>
        </div>

        <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-4 h-[1px] w-full" />

        {/* Plateform Links */}
        <div className="mt-5">
          <ul className="grid gap-3">
            <li className="flex justify-between items-center border-[1px] border-slate-900/20 dark:border-slate-300/20 rounded-[15px] p-2 hover:dark:bg-[rgba(40,40,40,0.70)] hover:bg-gray-100 hover:shadow-[2px_4px_16px_0px_rgba(248,248,248,0.06)_inset] duration-200">
              <div className="flex justify-center items-center gap-2">
                <Image className="w-8" src={LinkedIn} alt="Leet Code" />
                <div>
                  <h2 className="text-[16px] font-semibold text-gray-800 dark:text-white">
                    Linked In
                  </h2>
                  <p className="text-[12px] text-neutral-900 md:text-neutral-600 dark:text-neutral-400">
                    @thisisanishtanwar
                  </p>
                </div>
              </div>
              <a
                href="https://www.linkedin.com/in/thisisanishtanwar/"
                target="_blank"
              >
                <div className="relative group text-gray-800 dark:text-white text-xl border-[1px] border-slate-900/20 dark:border-slate-300/20 rounded w-8 h-8 flex text-center justify-center ">
                  <i className="ri-external-link-line"></i>
                  <span className="mb-3 absolute bottom-full left-1/2 -translate-x-1/2 dark:bg-white dark:text-black bg-black text-white text-center text-xs font-semibold rounded-[7px] py-2 px-3 hidden group-hover:block transition-opacity duration-300">
                    LinkedIn
                  </span>
                </div>
              </a>
            </li>
            <li className="flex justify-between items-center border-[1px] border-slate-900/20 dark:border-slate-300/20 rounded-[15px] p-2 hover:dark:bg-[rgba(40,40,40,0.70)] hover:bg-gray-100 hover:shadow-[2px_4px_16px_0px_rgba(248,248,248,0.06)_inset] duration-200">
              <div className="flex justify-center items-center gap-2">
                <Image
                  className="w-10"
                  src={theme === "dark" ? Github : GithubLight}
                  alt="Leet Code"
                />
                <div>
                  <h2 className="text-[16px] font-semibold text-gray-800 dark:text-white">
                    Github
                  </h2>
                  <p className="text-[12px] text-neutral-900 md:text-neutral-600 dark:text-neutral-400">
                    @anishtanwar11
                  </p>
                </div>
              </div>
              <a href="https://github.com/anishtanwar11" target="_blank">
                <div className="relative group text-gray-800 dark:text-white text-xl border-[1px] border-slate-900/20 dark:border-slate-300/20 rounded w-8 h-8 flex text-center justify-center ">
                  <i className="ri-external-link-line"></i>
                  <span className="mb-3 absolute bottom-full left-1/2 -translate-x-1/2 dark:bg-white dark:text-black bg-black text-white text-center text-xs font-semibold rounded-[7px] py-2 px-3 hidden group-hover:block transition-opacity duration-300">
                    Github
                  </span>
                </div>
              </a>
            </li>
            <li className="flex justify-between items-center border-[1px] border-slate-900/20 dark:border-slate-300/20 rounded-[15px] p-2 hover:dark:bg-[rgba(40,40,40,0.70)] hover:bg-gray-100 hover:shadow-[2px_4px_16px_0px_rgba(248,248,248,0.06)_inset] duration-200">
              <div className="flex justify-center items-center gap-2">
                <Image className="w-10" src={LeetCode} alt="Leet Code" />
                <div>
                  <h2 className="text-[16px] font-semibold text-gray-800 dark:text-white">
                    LeetCode
                  </h2>
                  <p className="text-[12px] text-neutral-900 md:text-neutral-600 dark:text-neutral-400">
                    @anishtanwar
                  </p>
                </div>
              </div>
              <a href="https://leetcode.com/u/anishtanwar/" target="_blank">
                <div className="relative group text-gray-800 dark:text-white text-xl border-[1px] border-slate-900/20 dark:border-slate-300/20 rounded w-8 h-8 flex text-center justify-center ">
                  <i className="ri-external-link-line"></i>
                  <span className="mb-3 absolute bottom-full left-1/2 -translate-x-1/2 dark:bg-white dark:text-black bg-black text-white text-center text-xs font-semibold rounded-[7px] py-2 px-3 hidden group-hover:block transition-opacity duration-300">
                    Letcode
                  </span>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Profile;

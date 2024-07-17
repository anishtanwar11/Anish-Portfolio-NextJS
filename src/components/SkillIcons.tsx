"use client";
import { useTheme } from "./ThemeContext";

import Image from "next/image";
import Angular from "../assets/frontend/angular.png";
import React from "../assets/frontend/react.png";
import Next from "../assets/frontend/nextJS.svg";
import NextLight from '@/assets/frontend/nextjs-dark.svg';
import Html from "../assets/frontend/html.svg";
import Css from "../assets/frontend/css.svg";
import Tailwind from "../assets/frontend/tailwind.svg";
import Bootstrap from "../assets/frontend/bootstrap.svg";
import Javascript from "../assets/frontend/javascript.svg";
import Typescript from "../assets/frontend/typescript.svg";

import NodeJS from "../assets/backend/nodejs.svg";
import ExpressJS from "../assets/backend/express.svg";
import ExpressJSLight from "@/assets/backend/express-light.svg"
import MongoDB from "../assets/backend/mongo.svg";

import Github from "../assets/tools/github.svg";
import GithubLight from "@/assets/frontend/github-light.svg"
import Git from "../assets/tools/git.svg";
import Netlify from "../assets/tools/netlify.svg";
import VScode from "../assets/tools/visual-studio.svg";
import Vercel from "../assets/tools/vercel.svg";

export default function SkillIcons() {
  const {theme} = useTheme();

  return (
    <div>
       <div className=" flex flex-col md:flex-row  gap-3 w-full">
        
        <div className="border-[1px] border-slate-600/20 dark:lg:border-slate-300/20 rounded-xl flex flex-col gap-5 items-center justify-center md:w-1/2 p-3 md:p-4">
          <h1 className="font-semibold text-xl text-gray-800 dark:text-white">Frontend Skills</h1>
          <div>
            <ul className="grid grid-cols-3 gap-4 md:gap-6">
              <li className="w-24 h-24 lg:w-32 lg:h-32  rounded-xl border border-[rgba(255,255,255,0.10)] dark:bg-[rgba(40,40,40,0.70)] bg-gray-100 shadow-[2px_4px_16px_0px_rgba(248,248,248,0.06)_inset] flex items-center justify-center">
                <Image src={React} alt="" className="w-12" />
              </li>
              <li className="w-24 h-24 lg:w-32 lg:h-32 rounded-xl border border-[rgba(255,255,255,0.10)] dark:bg-[rgba(40,40,40,0.70)] bg-gray-100 shadow-[2px_4px_16px_0px_rgba(248,248,248,0.06)_inset] flex items-center justify-center">
              <Image src={theme === "dark" ? Next : NextLight} alt="Next.js" className="w-14" />
              </li>
              <li className="w-24 h-24 lg:w-32 lg:h-32 rounded-xl border border-[rgba(255,255,255,0.10)] dark:bg-[rgba(40,40,40,0.70)] bg-gray-100 shadow-[2px_4px_16px_0px_rgba(248,248,248,0.06)_inset] flex items-center justify-center">
                <Image src={Angular} alt="" className="w-12" />
              </li>
              <li className="w-24 h-24 lg:w-32 lg:h-32 rounded-xl border border-[rgba(255,255,255,0.10)] dark:bg-[rgba(40,40,40,0.70)] bg-gray-100 shadow-[2px_4px_16px_0px_rgba(248,248,248,0.06)_inset] flex items-center justify-center">
                <Image src={Html} alt="" className="w-12" />
              </li>
              <li className="w-24 h-24 lg:w-32 lg:h-32 rounded-xl border border-[rgba(255,255,255,0.10)] dark:bg-[rgba(40,40,40,0.70)] bg-gray-100 shadow-[2px_4px_16px_0px_rgba(248,248,248,0.06)_inset] flex items-center justify-center">
                <Image src={Css} alt="" className="w-12" />
              </li>
              <li className="w-24 h-24 lg:w-32 lg:h-32 rounded-xl border border-[rgba(255,255,255,0.10)] dark:bg-[rgba(40,40,40,0.70)] bg-gray-100 shadow-[2px_4px_16px_0px_rgba(248,248,248,0.06)_inset] flex items-center justify-center">
                <Image src={Tailwind} alt="" className="w-12" />
              </li>
              <li className="w-24 h-24 lg:w-32 lg:h-32 rounded-xl border border-[rgba(255,255,255,0.10)] dark:bg-[rgba(40,40,40,0.70)] bg-gray-100 shadow-[2px_4px_16px_0px_rgba(248,248,248,0.06)_inset] flex items-center justify-center">
                <Image src={Bootstrap} alt="" className="w-12" />
              </li>
              <li className="w-24 h-24 lg:w-32 lg:h-32 rounded-xl border border-[rgba(255,255,255,0.10)] dark:bg-[rgba(40,40,40,0.70)] bg-gray-100 shadow-[2px_4px_16px_0px_rgba(248,248,248,0.06)_inset] flex items-center justify-center">
                <Image src={Javascript} alt="" className="w-12" />
              </li>
              <li className="w-24 h-24 lg:w-32 lg:h-32 rounded-xl border border-[rgba(255,255,255,0.10)] dark:bg-[rgba(40,40,40,0.70)] bg-gray-100 shadow-[2px_4px_16px_0px_rgba(248,248,248,0.06)_inset] flex items-center justify-center">
                <Image src={Typescript} alt="" className="w-12" />
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-4 md:w-1/2">
          <div className="border-[1px] border-slate-600/20 dark:lg:border-slate-300/20 rounded-xl  flex flex-col gap-5 items-center justify-center p-3 md:p-4">
            <h1 className="font-semibold text-xl text-gray-800 dark:text-white">
              Backtend Skills
            </h1>
            <div>
              <ul className="grid grid-cols-3 gap-3 md:gap-6">
                <li className="w-24 h-24 lg:w-32 lg:h-32 rounded-xl border border-[rgba(255,255,255,0.10)] dark:bg-[rgba(40,40,40,0.70)] bg-gray-100 shadow-[2px_4px_16px_0px_rgba(248,248,248,0.06)_inset] flex items-center justify-center">
                  <Image src={NodeJS} alt="" className="w-12" />
                </li>
                <li className="w-24 h-24 lg:w-32 lg:h-32 rounded-xl border border-[rgba(255,255,255,0.10)] dark:bg-[rgba(40,40,40,0.70)] bg-gray-100 shadow-[2px_4px_16px_0px_rgba(248,248,248,0.06)_inset] flex items-center justify-center">
                  <Image src={theme === "dark" ? ExpressJS : ExpressJSLight} alt="" className="w-12" />
                </li>
                <li className="w-24 h-24 lg:w-32 lg:h-32 rounded-xl border border-[rgba(255,255,255,0.10)] dark:bg-[rgba(40,40,40,0.70)] bg-gray-100 shadow-[2px_4px_16px_0px_rgba(248,248,248,0.06)_inset] flex items-center justify-center">
                  <Image src={MongoDB} alt="" className="w-12" />
                </li>
              </ul>
            </div>
          </div>

          <div className="border-[1px] border-slate-600/20 dark:lg:border-slate-300/20 rounded-xl  flex flex-col  gap-5 items-center justify-center p-3 md:p-4">
            <h1 className="font-semibold text-xl text-gray-800 dark:text-white ">Tools</h1>
            <div>
              <ul className="grid grid-cols-3 gap-3 md:gap-6">
                <li className="w-24 h-24 lg:w-32 lg:h-32 rounded-xl border border-[rgba(255,255,255,0.10)] dark:bg-[rgba(40,40,40,0.70)] bg-gray-100 shadow-[2px_4px_16px_0px_rgba(248,248,248,0.06)_inset] flex items-center justify-center">
                  <Image src={theme === "dark" ? Github : GithubLight} alt="" className="w-12" />
                </li>
                <li className="w-24 h-24 lg:w-32 lg:h-32 rounded-xl border border-[rgba(255,255,255,0.10)] dark:bg-[rgba(40,40,40,0.70)] bg-gray-100 shadow-[2px_4px_16px_0px_rgba(248,248,248,0.06)_inset] flex items-center justify-center">
                  <Image src={Git} alt="" className="w-12" />
                </li>
                <li className="w-24 h-24 lg:w-32 lg:h-32 rounded-xl border border-[rgba(255,255,255,0.10)] dark:bg-[rgba(40,40,40,0.70)] bg-gray-100 shadow-[2px_4px_16px_0px_rgba(248,248,248,0.06)_inset] flex items-center justify-center">
                  <Image src={Netlify} alt="" className="w-12" />
                </li>
                <li className="w-24 h-24 lg:w-32 lg:h-32 rounded-xl border border-[rgba(255,255,255,0.10)] dark:bg-[rgba(40,40,40,0.70)] bg-gray-100 shadow-[2px_4px_16px_0px_rgba(248,248,248,0.06)_inset] flex items-center justify-center">
                  <Image src={VScode} alt="" className="w-12" />
                </li>
                <li className="w-24 h-24 lg:w-32 lg:h-32 rounded-xl border border-[rgba(255,255,255,0.10)] dark:bg-[rgba(40,40,40,0.70)] bg-gray-100 shadow-[2px_4px_16px_0px_rgba(248,248,248,0.06)_inset] flex items-center justify-center">
                  <Image src={Vercel} alt="" className="w-12" />
                </li>
              </ul>
            </div>
          </div>
        </div>
      
      </div>
    </div>
  )
}


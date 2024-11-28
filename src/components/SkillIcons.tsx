"use client";
import { useTheme } from "./ThemeContext";

import Image from "next/image";
import Angular from "../assets/frontend/angular.png";
import React from "../assets/frontend/react.png";
import Redux from "../assets/frontend/redux-icon.svg";
import Next from "../assets/frontend/nextJS.svg";
import NextLight from "@/assets/frontend/nextjs-dark.svg";
import Html from "../assets/frontend/html.svg";
import Css from "../assets/frontend/css.svg";
import Tailwind from "../assets/frontend/tailwind.svg";
import Bootstrap from "../assets/frontend/bootstrap.svg";
import Javascript from "../assets/frontend/javascript.svg";
import Typescript from "../assets/frontend/typescript.svg";

import NodeJS from "../assets/backend/nodejs.svg";
import ExpressJS from "../assets/backend/express.svg";
import ExpressJSLight from "@/assets/backend/express-light.svg";
import RestApi from "../assets/backend/restapi-icon.svg";
import MongoDB from "../assets/backend/mongo.svg";

import Github from "../assets/tools/github.svg";
import GithubLight from "@/assets/frontend/github-light.svg";
import Git from "../assets/tools/git.svg";
import Netlify from "../assets/tools/netlify.svg";
import VScode from "../assets/tools/visual-studio.svg";
import Vercel from "../assets/tools/vercel.svg";
import VercelLight from "../assets/tools/vercel-light.svg";
import Postman from "../assets/tools/postman.svg";
import Figma from "../assets/tools/figma.svg";

export default function SkillIcons() {
  const { theme } = useTheme();

  return (
    <div>
      <div className="flex flex-col gap-y-4 md:flex-row md:gap-x-4 items-start justify-center w-full">
        <div className="w-full border-[1px] border-slate-600/20 dark:border-slate-300/20 rounded-xl flex flex-col items-center justify-center  p-3 md:p-4">
          <h1 className="font-semibold text-xl text-gray-800 dark:text-white">
            Frontend Skills
          </h1>
          <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent mt-2 mb-6 h-[1px] w-full" />

          <div>
            <ul className="grid grid-cols-3 gap-4 md:gap-6">
              <li className="flex-col gap-y-2 w-24 h-24 lg:w-32 lg:h-32  rounded-xl border border-[rgba(255,255,255,0.10)] dark:bg-[rgba(40,40,40,0.70)] bg-gray-100 shadow-[2px_4px_16px_0px_rgba(248,248,248,0.06)_inset] flex items-center justify-center">
                <Image src={React} alt="" className="w-12" />
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  React
                </p>
              </li>
              <li className="flex-col gap-y-2 w-24 h-24 lg:w-32 lg:h-32  rounded-xl border border-[rgba(255,255,255,0.10)] dark:bg-[rgba(40,40,40,0.70)] bg-gray-100 shadow-[2px_4px_16px_0px_rgba(248,248,248,0.06)_inset] flex items-center justify-center">
                <Image src={Redux} alt="" className="w-12" />
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Redux
                </p>
              </li>
              <li className="flex-col gap-y-2 w-24 h-24 lg:w-32 lg:h-32 rounded-xl border border-[rgba(255,255,255,0.10)] dark:bg-[rgba(40,40,40,0.70)] bg-gray-100 shadow-[2px_4px_16px_0px_rgba(248,248,248,0.06)_inset] flex items-center justify-center">
                <Image
                  src={theme === "dark" ? Next : NextLight}
                  alt="Next.js"
                  className="w-14"
                />
                <p className="text-sm text-gray-700 dark:text-gray-300">Next</p>
              </li>
              <li className="flex-col gap-y-2 w-24 h-24 lg:w-32 lg:h-32 rounded-xl border border-[rgba(255,255,255,0.10)] dark:bg-[rgba(40,40,40,0.70)] bg-gray-100 shadow-[2px_4px_16px_0px_rgba(248,248,248,0.06)_inset] flex items-center justify-center">
                <Image src={Angular} alt="" className="w-12" />
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Angular
                </p>
              </li>
              <li className="flex-col gap-y-2 w-24 h-24 lg:w-32 lg:h-32 rounded-xl border border-[rgba(255,255,255,0.10)] dark:bg-[rgba(40,40,40,0.70)] bg-gray-100 shadow-[2px_4px_16px_0px_rgba(248,248,248,0.06)_inset] flex items-center justify-center">
                <Image src={Javascript} alt="" className="w-12" />
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Javascript
                </p>
              </li>
              <li className="flex-col gap-y-2 w-24 h-24 lg:w-32 lg:h-32 rounded-xl border border-[rgba(255,255,255,0.10)] dark:bg-[rgba(40,40,40,0.70)] bg-gray-100 shadow-[2px_4px_16px_0px_rgba(248,248,248,0.06)_inset] flex items-center justify-center">
                <Image src={Typescript} alt="" className="w-12" />
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Typescript
                </p>
              </li>
              <li className="flex-col gap-y-2 w-24 h-24 lg:w-32 lg:h-32 rounded-xl border border-[rgba(255,255,255,0.10)] dark:bg-[rgba(40,40,40,0.70)] bg-gray-100 shadow-[2px_4px_16px_0px_rgba(248,248,248,0.06)_inset] flex items-center justify-center">
                <Image src={Html} alt="" className="w-12" />
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  HTML 5
                </p>
              </li>
              <li className="flex-col gap-y-2 w-24 h-24 lg:w-32 lg:h-32 rounded-xl border border-[rgba(255,255,255,0.10)] dark:bg-[rgba(40,40,40,0.70)] bg-gray-100 shadow-[2px_4px_16px_0px_rgba(248,248,248,0.06)_inset] flex items-center justify-center">
                <Image src={Css} alt="" className="w-12" />
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  CSS 3
                </p>
              </li>
              <li className="flex-col gap-y-2 w-24 h-24 lg:w-32 lg:h-32 rounded-xl border border-[rgba(255,255,255,0.10)] dark:bg-[rgba(40,40,40,0.70)] bg-gray-100 shadow-[2px_4px_16px_0px_rgba(248,248,248,0.06)_inset] flex items-center justify-center">
                <Image src={Tailwind} alt="" className="w-12" />
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Tailwind CSS
                </p>
              </li>
              <li className="flex-col gap-y-2 w-24 h-24 lg:w-32 lg:h-32 rounded-xl border border-[rgba(255,255,255,0.10)] dark:bg-[rgba(40,40,40,0.70)] bg-gray-100 shadow-[2px_4px_16px_0px_rgba(248,248,248,0.06)_inset] flex items-center justify-center">
                <Image src={Bootstrap} alt="" className="w-12" />
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Bootstrap
                </p>
              </li>
            </ul>
          </div>
        </div>

        <div className="w-full grid grid-flow-row gap-4 ">
          <div className="border-[1px] border-slate-600/20 dark:border-slate-300/20 rounded-xl  flex flex-col items-center justify-center p-3 md:p-4">
            <h1 className="font-semibold text-xl text-gray-800 dark:text-white">
              Backtend Skills
            </h1>
            <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent mt-2 mb-6 h-[1px] w-full" />

            <div>
              <ul className="grid grid-cols-3 gap-3 md:gap-6">
                <li className="flex-col gap-y-2 w-24 h-24 lg:w-32 lg:h-32 rounded-xl border border-[rgba(255,255,255,0.10)] dark:bg-[rgba(40,40,40,0.70)] bg-gray-100 shadow-[2px_4px_16px_0px_rgba(248,248,248,0.06)_inset] flex items-center justify-center">
                  <Image src={NodeJS} alt="" className="w-12" />
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    NodeJS
                  </p>
                </li>
                <li className="flex-col gap-y-2 w-24 h-24 lg:w-32 lg:h-32 rounded-xl border border-[rgba(255,255,255,0.10)] dark:bg-[rgba(40,40,40,0.70)] bg-gray-100 shadow-[2px_4px_16px_0px_rgba(248,248,248,0.06)_inset] flex items-center justify-center">
                  <Image
                    src={theme === "dark" ? ExpressJS : ExpressJSLight}
                    alt=""
                    className="w-12"
                  />
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Express
                  </p>
                </li>
                <li className="flex-col gap-y-2 w-24 h-24 lg:w-32 lg:h-32 rounded-xl border border-[rgba(255,255,255,0.10)] dark:bg-[rgba(40,40,40,0.70)] bg-gray-100 shadow-[2px_4px_16px_0px_rgba(248,248,248,0.06)_inset] flex items-center justify-center">
                  <Image src={RestApi} alt="" className="w-12" />
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    REST APIs
                  </p>
                </li>
                <li className="flex-col gap-y-2 w-24 h-24 lg:w-32 lg:h-32 rounded-xl border border-[rgba(255,255,255,0.10)] dark:bg-[rgba(40,40,40,0.70)] bg-gray-100 shadow-[2px_4px_16px_0px_rgba(248,248,248,0.06)_inset] flex items-center justify-center">
                  <Image src={Javascript} alt="" className="w-12" />
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Javascript
                  </p>
                </li>
                <li className="flex-col gap-y-2 w-24 h-24 lg:w-32 lg:h-32 rounded-xl border border-[rgba(255,255,255,0.10)] dark:bg-[rgba(40,40,40,0.70)] bg-gray-100 shadow-[2px_4px_16px_0px_rgba(248,248,248,0.06)_inset] flex items-center justify-center">
                  <Image src={MongoDB} alt="" className="w-12" />
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    MongoDB
                  </p>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-[1px] border-slate-600/20 dark:border-slate-300/20 rounded-xl  flex flex-col  items-center justify-center p-3 md:p-4">
            <h1 className="font-semibold text-xl text-gray-800 dark:text-white ">
              Tools
            </h1>
            <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent mt-2 mb-6 h-[1px] w-full" />

            <div>
              <ul className="grid grid-cols-3 gap-3 md:gap-6">
                <li className="flex-col gap-y-2 w-24 h-24 lg:w-32 lg:h-32 rounded-xl border border-[rgba(255,255,255,0.10)] dark:bg-[rgba(40,40,40,0.70)] bg-gray-100 shadow-[2px_4px_16px_0px_rgba(248,248,248,0.06)_inset] flex items-center justify-center">
                  <Image
                    src={theme === "dark" ? Github : GithubLight}
                    alt=""
                    className="w-12"
                  />
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Github
                  </p>
                </li>
                <li className="flex-col gap-y-2 w-24 h-24 lg:w-32 lg:h-32 rounded-xl border border-[rgba(255,255,255,0.10)] dark:bg-[rgba(40,40,40,0.70)] bg-gray-100 shadow-[2px_4px_16px_0px_rgba(248,248,248,0.06)_inset] flex items-center justify-center">
                  <Image src={Git} alt="" className="w-12" />
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Git
                  </p>
                </li>

                <li className="flex-col gap-y-2 w-24 h-24 lg:w-32 lg:h-32 rounded-xl border border-[rgba(255,255,255,0.10)] dark:bg-[rgba(40,40,40,0.70)] bg-gray-100 shadow-[2px_4px_16px_0px_rgba(248,248,248,0.06)_inset] flex items-center justify-center">
                  <Image src={Postman} alt="" className="w-12" />
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Postman
                  </p>
                </li>

                <li className="flex-col gap-y-2 w-24 h-24 lg:w-32 lg:h-32 rounded-xl border border-[rgba(255,255,255,0.10)] dark:bg-[rgba(40,40,40,0.70)] bg-gray-100 shadow-[2px_4px_16px_0px_rgba(248,248,248,0.06)_inset] flex items-center justify-center">
                  <Image src={Netlify} alt="" className="w-12" />
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Netlify
                  </p>
                </li>

                <li className="flex-col gap-y-2 w-24 h-24 lg:w-32 lg:h-32 rounded-xl border border-[rgba(255,255,255,0.10)] dark:bg-[rgba(40,40,40,0.70)] bg-gray-100 shadow-[2px_4px_16px_0px_rgba(248,248,248,0.06)_inset] flex items-center justify-center">
                  <Image
                    src={theme === "dark" ? VercelLight : Vercel}
                    alt=""
                    className="w-12"
                  />
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Vercel
                  </p>
                </li>

                <li className="flex-col gap-y-2 w-24 h-24 lg:w-32 lg:h-32 rounded-xl border border-[rgba(255,255,255,0.10)] dark:bg-[rgba(40,40,40,0.70)] bg-gray-100 shadow-[2px_4px_16px_0px_rgba(248,248,248,0.06)_inset] flex items-center justify-center">
                  <Image src={VScode} alt="" className="w-12" />
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    VSCode
                  </p>
                </li>

                <li className="flex-col gap-y-2 w-24 h-24 lg:w-32 lg:h-32 rounded-xl border border-[rgba(255,255,255,0.10)] dark:bg-[rgba(40,40,40,0.70)] bg-gray-100 shadow-[2px_4px_16px_0px_rgba(248,248,248,0.06)_inset] flex items-center justify-center">
                  <Image src={Figma} alt="" className="w-12" />
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Figma
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

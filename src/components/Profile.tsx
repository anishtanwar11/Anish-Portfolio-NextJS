"use client";
import React from "react";
import { HoverBorderGradient } from "./ui/hover-border-gradient";
import { useTheme } from "./ThemeContext";

import Image from 'next/image';
import ProfileImg from '../assets/images/farewalle3.jpg';
import LeetCode from '../assets/images/leetcode.svg';
import Github from '../assets/images/github.svg';
import GithubLight from "@/assets/frontend/github-light.svg";

import 'remixicon/fonts/remixicon.css';

function Profile() {
    const { theme } = useTheme();

    return (
        <div className='w-full justify-center lg:mt-28 lg:pr-4'>
            <div className='lg:border-[1px] border-slate-600/20 dark:lg:border-slate-300/20   p-4 rounded-[15px]'>
                <div className="flex-none w-40 h-40 mb-10 mx-auto">
                    <Image className=" inset-0 w-full h-full object-cover rounded-[50%]" src={ProfileImg} alt="Profile Image" />
                    <h3 className='text-center mt-3 text-xl font-semibold text-gray-800 dark:text-white'>Web Developer</h3>
                </div>

                <div className='border-b-[1px] border-slate-600/20 dark:border-slate-300/20 py-4 grid gap-2 text-[14px] text-neutral-600 dark:text-neutral-400'>
                    <div className='flex gap-2 items-center hover:text-black dark:hover:text-white duration-200'>
                        <li className="text-xl list-none">
                            <i className="ri-map-pin-line"></i>
                        </li>
                        Karnal, Haryana</div>
                    <div className='flex gap-2 items-center hover:text-black dark:hover:text-white duration-200'>
                        <li className="text-xl list-none">
                            <i className="ri-mail-line"></i>
                        </li>
                        anishtanwar@gmail.com</div>
                    <a href="https://www.linkedin.com/in/thisisanishtanwar/">
                        <div className='flex gap-2 items-center hover:text-black dark:hover:text-white duration-200'>
                        <li className="text-xl list-none">
                                <i className="ri-linkedin-box-line"></i>
                                </li>
                            thisisanishtanwar</div></a>
                    <a href="https://twitter.com/thisistanwar">
                        <div className='flex gap-2 items-center hover:text-black dark:hover:text-white duration-200'>
                        <li className="text-xl list-none">
                                <i className="ri-twitter-line"></i></li>
                            thisistanwar</div></a>
                </div>

                <div className='flex justify-center text-center mt-4 pb-4 w-full border-b-[1px] border-slate-600/20 dark:border-slate-300/20 border-opacity-20'>
                    {/* <a href='#' target='_blanck' className='flex items-center justify-center gap-2 hover:bg-transparent border-[1px] hover:border-slate-300  hover:border-opacity-20 hover:text-white duration-500 bg-white text-black text-[18px] font-[500] py-2 rounded-lg'>
                        <i className="ri-download-cloud-line"></i> Resume
                    </a> */}

                    <HoverBorderGradient 
                    containerClassName="rounded-full"
                    as="button"
                    className="border-none dark:bg-black bg-white text-black dark:text-white flex items-center justify-center space-x-2"
                    >
                       <i className="ri-download-cloud-line"></i>
                       <span>Resume</span> 
                </HoverBorderGradient>
                </div>

                

                {/* Plateform Links */}
                <div className='mt-5'>
                    <ul className='grid gap-3'>
                        <li className='flex justify-between items-center border-[1px] border-slate-600/20 dark:border-slate-300/20 rounded-[15px] p-2 hover:dark:bg-[rgba(40,40,40,0.70)] hover:bg-gray-100 hover:shadow-[2px_4px_16px_0px_rgba(248,248,248,0.06)_inset] duration-200'>
                            <div className='flex justify-center items-center gap-2'>
                                <Image className='w-10' src={LeetCode} alt="Leet Code" />
                                <div>
                                    <h2 className='text-[16px] font-semibold text-gray-800 dark:text-white'>LeetCode</h2>
                                    <p className='text-[12px] text-neutral-600 dark:text-neutral-400'>@anishtanwar</p>
                                </div>
                            </div>
                            <a href="https://leetcode.com/u/anishtanwar/" target='_blank'>
                                <div title="Visit Profile" className='text-gray-800 dark:text-white text-xl border-[1px] border-slate-600/20 dark:border-slate-300/20 rounded w-8 h-8 flex text-center justify-center '>
                                    <i className="ri-external-link-line"></i>
                                </div>
                            </a>
                        </li>
                        <li className='flex justify-between items-center border-[1px] border-slate-600/20 dark:border-slate-300/20 rounded-[15px] p-2 hover:dark:bg-[rgba(40,40,40,0.70)] hover:bg-gray-100 hover:shadow-[2px_4px_16px_0px_rgba(248,248,248,0.06)_inset] duration-200'>
                            <div className='flex justify-center items-center gap-2'>
                                <Image className='w-10' src={theme === "dark" ? Github : GithubLight} alt="Leet Code" />
                                <div>
                                    <h2 className='text-[16px] font-semibold text-gray-800 dark:text-white'>Github</h2>
                                    <p className='text-[12px] text-neutral-600 dark:text-neutral-400'>@anishtanwar11</p>
                                </div>
                            </div>
                            <a href="https://github.com/anishtanwar11" target='_blank'>
                                <div title="Visit Profile" className='text-gray-800 dark:text-white text-xl border-[1px] border-slate-600/20 dark:border-slate-300/20 rounded w-8 h-8 flex text-center justify-center '>
                                    <i className="ri-external-link-line"></i>
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Profile
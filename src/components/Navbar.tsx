"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";
import Image from "next/image";
import ProfileIconImage from "../assets/images/farewalle3.jpg";
import { useTheme } from "@/components/ThemeContext"; // Adjust the import path as necessary

import Profile from "./Profile";
import MenuIcon from "../assets/icons/menu-4-line.svg";
import LogoDark from '@/assets/images/logo-dark.png';
import LogoLight from '@/assets/images/logo-light.png';

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  const [menuOpen, setMenuOpen] = useState<boolean>(false); // State for menu visibility
  const [profileOpen, setProfileOpen] = useState<boolean>(false); // State for profile menu visibility
  const { theme, handleThemeSwitch } = useTheme();

  // function for menu visibility
  function toggleMenu() {
    setMenuOpen(!menuOpen);
  }

  function toggleMenuCloseMenu() {
    setMenuOpen(menuOpen);
  }

  // function for profile menu visibility
  function toggleProfile() {
    setProfileOpen(!profileOpen);
  }

  return (
    <div
      className={cn(
        "fixed md:top-4 inset-x-0 md:max-w-4xl lg:max-w-7xl mx-auto z-50 w-full px-4 lg:px-0 pt-2 lg:pt-0",
        className
      )}
    >
      <Menu setActive={setActive}>
        <div className="flex gap-2 items-center justify-center">
          <div
            className="w-10 h-10 rounded-full overflow-hidden block lg:hidden cursor-pointer"
            onClick={toggleProfile}
          >
            <Image src={ProfileIconImage} alt={"Profile Icon Image"} />
          </div>
          <Image src={theme === "dark" ? LogoDark : LogoLight} alt={"logo image"} className="w-36  md:w-40" />
        </div>

        <div className="flex items-center justify-center gap-3">
          <div className="md:flex flex-col md:flex-row gap-6 hidden">
            <Link href={"/"}>
              <MenuItem
                setActive={setActive}
                active={active}
                item="Home"
              ></MenuItem>
            </Link>

            <Link href={"/projects"}>
              <MenuItem setActive={setActive} active={active} item="Projects">
                <div className="text-sm grid grid-cols-2 gap-10 p-4">
                  <ProductItem
                    title="Noise Clone"
                    href="https://ontime-anish.netlify.app/"
                    src="http://res.cloudinary.com/drgurmhwb/image/upload/v1712741696/hpkvxznguxfwe3hxm4r3.png"
                    description="Online shoping plateform."
                  />
                  <ProductItem
                    title="Portfolio Website"
                    href="https://anishtanwar.netlify.app/"
                    src="http://res.cloudinary.com/drgurmhwb/image/upload/v1712639688/exf2lqjynk4q6upgzk0l.png"
                    description="Personal portfolio website template."
                  />
                  <ProductItem
                    title="On Time"
                    href="https://ontime-anish.netlify.app/"
                    src="http://res.cloudinary.com/drgurmhwb/image/upload/v1712742966/c3ryxqvhp1oduvb8klks.png"
                    description="Task management app."
                  />
                  <ProductItem
                    title="Portfolio Template"
                    href="https://userogue.com"
                    src="https://res.cloudinary.com/drgurmhwb/image/upload/v1721205514/Portfolio-template_o787pk.png"
                    description="Personal portfolio website template."
                  />
                </div>
              </MenuItem>
            </Link>

            <Link href={"/skills"}>
              <MenuItem
                setActive={setActive}
                active={active}
                item="Skills"
              ></MenuItem>
            </Link>

            <Link href={"/work&education"}>
              <MenuItem
                setActive={setActive}
                active={active}
                item="Work/Education"
              ></MenuItem>
            </Link>

            <Link href={"/contact"}>
              <MenuItem
                setActive={setActive}
                active={active}
                item="Contact Me"
              ></MenuItem>
            </Link>
          </div>

          <button
            onClick={handleThemeSwitch}
            className="mr-3 md:mr-0 text-black dark:text-white text-xl md:border-l-[2px] md:pl-3 border-slate-600/20 dark:lg:border-slate-300/20"
          >
            {theme === "dark" ? (
              <i className="ri-sun-fill"></i>
            ) : (
              <i className="ri-moon-fill"></i>
            )}
          </button>

          <div
            className="md:hidden block cursor-pointer text-xl dark:text-white text-black"
            onClick={toggleMenu}
          >
            <i className="ri-menu-4-line"></i>
          </div>
        </div>
      </Menu>

      {menuOpen && (
        <ul className="md:hidden flex flex-col gap-3 absolute top-0 pt-24 pb-4 px-8 right-0 left-0 w-full backdrop-blur-xl dark:bg-black/30 dark:border-white/[0.2] shadow-lg z-[-1] text-black dark:text-white">
          <li>
            <Link href={"/"} onClick={() => setMenuOpen(false)}>
            <i className="ri-home-4-line"></i> Home
            </Link>
          </li>
          <li>
            <Link href={"/projects"} onClick={() => setMenuOpen(false)}>
            <i className="ri-file-text-line"></i> Projects
            </Link>
          </li>
          <li>
            <Link href={"/skills"} onClick={() => setMenuOpen(false)}>
            <i className="ri-shield-star-line"></i> Skills
            </Link>
          </li>
          <li>
            <Link href={"/work&education"} onClick={() => setMenuOpen(false)}>
            <i className="ri-briefcase-line"></i> Work/Education
            </Link>
          </li>
          <li>
            <Link href={"/contact"} onClick={() => setMenuOpen(false)}>
            <i className="ri-chat-3-line"></i> Contact Me
            </Link>
          </li>
        </ul>
      )}

      {profileOpen && (
        <div className="flex w-full h-[100vh] overflow-scroll backdrop-blur-xl dark:bg-black/30 dark:border-white/[0.2] lg:hidden absolute top-0 left-0 right-0 z-[-2]">
          <div className="h-full mt-20 mb-16 w-full flex items-center justify-center lg:hidden">
            <Profile />
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;

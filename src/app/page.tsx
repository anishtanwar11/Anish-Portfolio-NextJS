import SkillCard from "@/components/SkillCard";
import LeetCodeCard from "@/components/LeetCodeCard";
import SocialIconDock from "@/components/SocialIconsDock";
import Link from "next/link";

export default function Home() {
  return (
    <main className="pt-4 lg:pt-0 min-h-screen  antialiased bg-grid-white/[0.02] flex flex-col gap-4">
      <div className="lg:border-[1px] border-slate-600/20 dark:lg:border-slate-300/20  lg:p-4 rounded-[15px]">
        <h1 className="text-xl md:text-3xl font-semibold mb-4 text-gray-800 dark:text-white">
        What I Do
        </h1>
        <p className="mb-2 font-xl  text-neutral-600 dark:text-neutral-400">I enjoy creating Web products.</p>
        <p className="mb-2 font-xl  text-neutral-600 dark:text-neutral-400">
          I&apos;m a passionate <span className="dark:text-white text-black">MERN</span> Stack and <span className="dark:text-white text-black">Next.js</span> Developer with a dedication
          to building clean, efficient, and user-friendly web applications.
        </p>

        <p className="mb-2 font-xl  text-neutral-600 dark:text-neutral-400">
          I&apos;ve hands-on experience from internships at <span className="dark:text-white text-black">Primewise Consulting</span> and <span className="dark:text-white text-black">Solitaire Infosys.</span> My expertise spans both frontend and backend
          development, allowing me to build comprehensive solutions from the
          ground up.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-4 w-full">
        <div className="flex flex-row gap-4 w-full md:w-1/2 ">
          <Link
            href={"/work&education"}
            className="w-full flex flex-col gap-5 border-[1px] border-slate-600/20 dark:border-slate-300/20 p-4 rounded-[15px]"
          >
            <i className="ri-award-line text-black dark:text-white text-2xl"></i>

            <div>
              <p className="text-lg font-semibold text-gray-800 dark:text-white">
                Experience
              </p>
              <p className="text-sm font-normal text-neutral-600 dark:text-neutral-400 max-w-sm">
                8 Months
              </p>
            </div>
          </Link>

          <Link
            href={"/projects"}
            className="w-full flex flex-col gap-5 border-[1px] border-slate-600/20 dark:border-slate-300/20 p-4 rounded-[15px]"
          >
            <i className="ri-briefcase-line text-black dark:text-white text-2xl"></i>
            <div>
              <p className="text-lg font-semibold text-gray-800 dark:text-white">
                Completed
              </p>
              <p className="text-sm font-normal text-neutral-600 dark:text-neutral-400 max-w-sm">
                6+ Projects
              </p>
            </div>
          </Link>
        </div>

        <div className="w-full hidden md:flex flex-col items-center justify-center gap-6 border-[1px] border-slate-600/20 dark:border-slate-300/20 p-4 rounded-[15px]">
          <SocialIconDock />
        </div>
      </div>

      <div className="flex flex-col-reverse md:flex-row gap-4 w-full">
        <div className="w-full flex flex-col gap-6 border-[0px] border-slate-600/20 dark:border-slate-300/20 rounded-[15px]">
          <SkillCard />
        </div>
        <div className="w-full flex flex-col gap-6 border-[1px] border-slate-600/20 dark:border-slate-300/20 p-4 rounded-[15px]">
          <h1 className="text-lg text-center font-semibold text-gray-800 dark:text-white">
            LeetCode Solved Questions (DSA)
          </h1>
          <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent  h-[2px] w-full" />

          <LeetCodeCard />
        </div>
      </div>

      <div className="mb-4 flex flex-col items-center justify-center lg:border-[1px] border-slate-600/20 dark:border-slate-300/20 p-4  lg:px-8 lg:py-16 rounded-[15px]">
        <h1 className="mb-4 text-xl text-center md:text-3xl font-semibold text-gray-800 dark:text-white">
          Ready to take your digital presence to the next level?
        </h1>
        <p className="mb-6 text-xs md:text-sm text-center text-neutral-600 dark:text-neutral-400">
          Reach out to me today and let&apos;s discuss how I can help you
          achieve your goals.
        </p>

        <Link
          href={"/contact"}
          className="text-black dark:text-white hover:bg-black hover:text-white hover:dark:bg-white hover:dark:text-black duration-200 border-2 border-slate-600/30 dark:lg:border-slate-300/30 px-4 py-2 rounded-[10px] "
        >
          Let&apos;s get in touch <i className="ri-send-plane-fill "></i>
        </Link>
      </div>
    </main>
  );
}

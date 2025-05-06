import SkillCard from "@/components/SkillCard";
import LeetCodeCard from "@/components/LeetCodeCard";
import SocialIconDock from "@/components/SocialIconsDock";
import FeatureProject from "@/components/FeatureProject";
import Link from "next/link";

export default function Home() {
  return (
    <main className="pt-4 lg:pt-0 min-h-screen  antialiased bg-grid-white/[0.02] flex flex-col gap-4 ">
      <div className="text-base bg-white dark:bg-black text-neutral-600 dark:text-neutral-400 lg:border-[0px] border-slate-600/20 dark:lg:border-slate-300/20  p-4 rounded-[15px]">
        <h1 className="text-xl md:text-3xl font-semibold mb-4 text-gray-800 dark:text-white">
          What I Do
        </h1>
        <p className="">
          Hello, my name is{" "}
          <span className="text-black dark:text-white font-bold">
            Anish Tanwar
          </span>
          . I enjoy{" "}
          <span className="text-black dark:text-white font-bold">creating</span>{" "}
          Web products.
        </p>
        <p className="my-4 ">
          I&apos;m a passionate{" "}
          <span className="dark:text-white text-black font-bold">MERN</span>{" "}
          Stack and{" "}
          <span className="dark:text-white text-black font-bold">Next.js</span>{" "}
          Developer with a dedication to building clean, efficient, and
          user-friendly web applications.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-4 w-full">
        <div className="flex flex-row gap-4 w-full ">
          <Link
            href={"/work&education"}
            className="w-full bg-white dark:bg-black flex flex-col border-[0px] border-slate-600/20 dark:border-slate-300/20 px-4 py-6 rounded-[15px]"
          >
            <div className="flex flex-col items-center justify-center gap-2">
              <p className="text-sm font-normal dark:text-white">
                <span className="text-5xl">8</span> Months
              </p>
              <p className="text-sm font-semibold text-neutral-600 dark:text-neutral-400 ">
                Work Experience
              </p>
            </div>
          </Link>

          <Link
            href={"/projects"}
            className="w-full flex bg-white dark:bg-black flex-col gap-5 border-[0px] border-slate-600/20 dark:border-slate-300/20 px-4 py-6 rounded-[15px]"
          >
            <div className="flex flex-col items-center justify-center gap-2">
              <p className="text-5xl font-normal dark:text-white">6+</p>
              <p className="text-sm font-semibold text-neutral-600 dark:text-neutral-400">
                Completed Projects
              </p>
            </div>
          </Link>
        </div>

        <div className="w-full hidden md:flex flex-col items-center justify-center border-[1px] border-white/50 dark:border-slate-300/20 p-4 rounded-[15px]">
          <SocialIconDock />
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-4 w-full">
        <div className="w-full flex flex-col gap-6 bg-white dark:bg-black border-[0px] border-slate-600/20 dark:border-slate-300/20 p-4 rounded-[15px]">
          <h1 className="text-lg text-center font-semibold text-gray-800 dark:text-white">
            LeetCode Solved Questions (DSA)
          </h1>
          <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent  h-[2px] w-full" />

          <LeetCodeCard />
        </div>

        <div className="w-full flex flex-col gap-6 border-[0px] border-slate-600/20 dark:border-slate-300/20 rounded-[15px]">
          <SkillCard />
        </div>
      </div>

      <div className="w-full bg-white dark:bg-black flex-col items-center justify-center gap-6 border-[0px] border-slate-600/20 dark:border-slate-300/20 p-[20px] rounded-[15px]">
        <FeatureProject />
      </div>

      <div className="mb-4 flex flex-col items-center justify-center border-[1px] border-slate-600/20 dark:border-slate-300/20 p-4  lg:px-8 lg:py-16 rounded-[15px]">
        <h1 className="mb-4 text-xl text-center md:text-3xl font-semibold text-gray-800 dark:text-white">
          Ready to take your digital presence to the next level?
        </h1>
        <p className="mb-6 text-xs md:text-sm text-center text-neutral-600 dark:text-neutral-400">
          Reach out to me today and let&apos;s discuss how I can help you
          achieve your goals.
        </p>

        <Link
          href={"/contact"}
          className="text-sm flex items-center justify-center text-black  hover:bg-black hover:text-white hover:dark:bg-white hover:dark:text-black dark:text-gray-200 bg-gray-500/50 dark:border-slate-100/30 px-5 py-2 rounded-[10px] duration-300 ease-in-out "
        >
          Let&apos;s get in touch
          <i className="ri-send-plane-fill ml-1 text-lg"></i>
        </Link>
      </div>
    </main>
  );
}

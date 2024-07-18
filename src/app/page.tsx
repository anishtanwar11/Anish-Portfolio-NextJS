import SkillCard from "@/components/SkillCard";
import LeetCodeCard from "@/components/LeetCodeCard";

export default function Home() {
  return (
    <main className="pt-4 lg:pt-0 min-h-screen  antialiased bg-grid-white/[0.02] flex flex-col gap-4">
      <div className="lg:border-[1px] border-slate-600/20 dark:lg:border-slate-300/20  lg:p-4 rounded-[15px]">
        <h1 className="text-xl md:text-3xl font-semibold mb-4 text-gray-800 dark:text-white">ABOUT</h1>
        <p className="font-xl text-justify text-neutral-600 dark:text-neutral-400">
          I&apos;m Anish Tanwar, an enthusiastic web developer driven by the
          incredible potential of web development to foster connections and
          drive innovation. As a newcomer in this dynamic field, my unwavering
          commitment lies in creating user-friendly websites and continuously
          evolving my skills. Let&apos;s join forces and embark on a journey to
          unlock the boundless opportunities of the web together!
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-4 w-full">
        <div className="w-full border-[0px] border-slate-300 border-opacity-20  rounded-[15px]">
          <SkillCard />
        </div>
        <div className="w-full flex flex-col gap-6 border-[1px] border-slate-600/20 dark:border-slate-300/20 p-4 rounded-[15px]">
          <h1 className="text-lg text-center font-semibold text-gray-800 dark:text-white">
            LeetCode Solved Questions
          </h1>
          <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent  h-[2px] w-full" />
 
          <LeetCodeCard />
        </div>
      </div>
    </main>
  );
}

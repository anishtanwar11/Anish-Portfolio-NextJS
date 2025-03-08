import SkillCloud from "../../components/SkillCloud";
import SkillIcons from "@/components/SkillIcons";

export default function Skills() {
  return (
    <div className=" grid gap-4 mb-4">
      <div className="flex p-4 bg-white dark:bg-black flex-col md:flex-row lg:border-[0px] border-slate-600/20 dark:lg:border-slate-300/20 rounded-xl items-center lg:px-4 mt-4 md:mt-0">
        <div className="grid gap-3">
          <h1 className="text-gray-800 dark:text-white text-xl md:text-3xl font-semibold">
            My Skills
          </h1>
          <h2 className="text-neutral-600 dark:text-neutral-400 font-xl">
            See fully what skills I have and perform, to develop the projects
            for you.
          </h2>
          <ul className="font-xl flex flex-row gap-2 dark:text-neutral-400 text-sm font-normal text-neutral-600">
            <li>🔭</li>
            <li>I’m currently learning about MERN Stack Development.</li>
          </ul>
          <ul className="font-xl flex flex-row gap-2 dark:text-neutral-400 text-sm font-normal text-neutral-600">
            <li>🔭</li>
            <li>I’m currently learning about Next.js.</li>
          </ul>
        </div>

        <div>{/* <SkillCloud /> */}</div>
      </div>

      <div>
        <SkillIcons />
      </div>
    </div>
  );
}

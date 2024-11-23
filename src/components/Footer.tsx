import SocialIconDock from "./SocialIconsDock";

function Footer() {
  return (
    <div className="w-full lg:px-0">
      <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-4 h-[1px] w-full" />
      <div className=" flex-col py-8  rounded-xl w-full mb-8 md:my-6  dark:bg-black bg-white flex items-center justify-center">
        <p className="text-center text-2xl sm:text-5xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 ">
          Designed and Developed by <br /> Anish Tanwar
        </p>

        <div className="flex md:hidden">
          <SocialIconDock />
        </div>
        <div className="px-3lg:px-0 flex flex-wrap w-full text-center md:text-left gap-y-3 justify-center md:justify-between items-center mt-8">
          <div className="text-black dark:text-white text-base">
            &copy; 2024 Anish Tanwar, All Rights Reserved.
            <p className="text-gray-500 text-xs font-semibold">Made with love 😍</p>
          </div>
          <div className="text-gray-500 text-xs font-semibold">
            <p>Last updated by Anish on November 23, 2024, 02:58 PM </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;

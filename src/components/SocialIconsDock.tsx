import React from "react";
import Image from "next/image";

import { Dock, DockIcon } from "@/components/magicui/dock";
import { MailIcon } from "lucide-react";
import angularIcon from "@/assets/frontend/angular.png";

export type IconProps = React.HTMLAttributes<SVGElement>;

export default function SocialIconDock() {
  return (
    <div className="relative ">
      <Dock direction="middle">
        <DockIcon className="relative group">
          <Icons.LinkedIn className="size-6 dark:text-white" />
          <span className="absolute bottom-full left-1/2 -translate-x-1/2 dark:bg-white dark:text-black bg-black text-white text-center text-xs font-semibold rounded-[7px] py-2 px-3 hidden group-hover:block transition-opacity duration-300">
            LinkedIn 
          </span>
        </DockIcon>
        <DockIcon className="relative group">
          <Icons.gitHub className="size-6 dark:text-white" />
          <span className="absolute bottom-full left-1/2 -translate-x-1/2 dark:bg-white dark:text-black bg-black text-white text-center text-xs font-semibold rounded-[7px] py-2 px-3 hidden group-hover:block transition-opacity duration-300">
          Github
          </span>
        </DockIcon>
        <DockIcon className="relative group">
          <Icons.Twitter className="size-6 dark:text-white" />
          <span className="absolute bottom-full left-1/2 -translate-x-1/2 dark:bg-white dark:text-black bg-black text-white text-center text-xs font-semibold rounded-[7px] py-2 px-3 hidden group-hover:block transition-opacity duration-300">
            X
          </span>
        </DockIcon>
        <DockIcon className="relative group">
          <Icons.Email className="size-6 dark:text-white" />
          <span className="absolute bottom-full left-1/2 -translate-x-1/2 dark:bg-white dark:text-black bg-black text-white text-center text-xs font-semibold rounded-[7px] py-2 px-3 hidden group-hover:block transition-opacity duration-300">
            Email
          </span>
        </DockIcon>
        <DockIcon className="relative group">
          <Icons.InstaSram className="size-6 dark:text-white cursor-pointer" />
          <span className="absolute bottom-full left-1/2 -translate-x-1/2 dark:bg-white dark:text-black bg-black text-white text-center text-xs font-semibold rounded-[7px] py-2 px-3 hidden group-hover:block transition-opacity duration-300">
            Instagram
          </span>
        </DockIcon>
      </Dock>
    </div>
  );
}

const Icons = {
  gitHub: (props: IconProps) => (
    <svg viewBox="0 0 438.549 438.549" {...props}>
      <path
        fill="currentColor"
        d="M409.132 114.573c-19.608-33.596-46.205-60.194-79.798-79.8-33.598-19.607-70.277-29.408-110.063-29.408-39.781 0-76.472 9.804-110.063 29.408-33.596 19.605-60.192 46.204-79.8 79.8C9.803 148.168 0 184.854 0 224.63c0 47.78 13.94 90.745 41.827 128.906 27.884 38.164 63.906 64.572 108.063 79.227 5.14.954 8.945.283 11.419-1.996 2.475-2.282 3.711-5.14 3.711-8.562 0-.571-.049-5.708-.144-15.417a2549.81 2549.81 0 01-.144-25.406l-6.567 1.136c-4.187.767-9.469 1.092-15.846 1-6.374-.089-12.991-.757-19.842-1.999-6.854-1.231-13.229-4.086-19.13-8.559-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-.951-2.568-2.098-3.711-3.429-1.142-1.331-1.997-2.663-2.568-3.997-.572-1.335-.098-2.43 1.427-3.289 1.525-.859 4.281-1.276 8.28-1.276l5.708.853c3.807.763 8.516 3.042 14.133 6.851 5.614 3.806 10.229 8.754 13.846 14.842 4.38 7.806 9.657 13.754 15.846 17.847 6.184 4.093 12.419 6.136 18.699 6.136 6.28 0 11.704-.476 16.274-1.423 4.565-.952 8.848-2.383 12.847-4.285 1.713-12.758 6.377-22.559 13.988-29.41-10.848-1.14-20.601-2.857-29.264-5.14-8.658-2.286-17.605-5.996-26.835-11.14-9.235-5.137-16.896-11.516-22.985-19.126-6.09-7.614-11.088-17.61-14.987-29.979-3.901-12.374-5.852-26.648-5.852-42.826 0-23.035 7.52-42.637 22.557-58.817-7.044-17.318-6.379-36.732 1.997-58.24 5.52-1.715 13.706-.428 24.554 3.853 10.85 4.283 18.794 7.952 23.84 10.994 5.046 3.041 9.089 5.618 12.135 7.708 17.705-4.947 35.976-7.421 54.818-7.421s37.117 2.474 54.823 7.421l10.849-6.849c7.419-4.57 16.18-8.758 26.262-12.565 10.088-3.805 17.802-4.853 23.134-3.138 8.562 21.509 9.325 40.922 2.279 58.24 15.036 16.18 22.559 35.787 22.559 58.817 0 16.178-1.958 30.497-5.853 42.966-3.9 12.471-8.941 22.457-15.125 29.979-6.191 7.521-13.901 13.85-23.131 18.986-9.232 5.14-18.182 8.85-26.84 11.136-8.662 2.286-18.415 4.004-29.263 5.146 9.894 8.562 14.842 22.077 14.842 40.539v60.237c0 3.422 1.19 6.279 3.572 8.562 2.379 2.279 6.136 2.95 11.276 1.995 44.163-14.653 80.185-41.062 108.068-79.226 27.88-38.161 41.825-81.126 41.825-128.906-.01-39.771-9.818-76.454-29.414-110.049z"
      ></path>
    </svg>
  ),
  whatsapp: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
    >
      <path d="M7.25361 18.4944L7.97834 18.917C9.18909 19.623 10.5651 20 12.001 20C16.4193 20 20.001 16.4183 20.001 12C20.001 7.58172 16.4193 4 12.001 4C7.5827 4 4.00098 7.58172 4.00098 12C4.00098 13.4363 4.37821 14.8128 5.08466 16.0238L5.50704 16.7478L4.85355 19.1494L7.25361 18.4944ZM2.00516 22L3.35712 17.0315C2.49494 15.5536 2.00098 13.8345 2.00098 12C2.00098 6.47715 6.47813 2 12.001 2C17.5238 2 22.001 6.47715 22.001 12C22.001 17.5228 17.5238 22 12.001 22C10.1671 22 8.44851 21.5064 6.97086 20.6447L2.00516 22ZM8.39232 7.30833C8.5262 7.29892 8.66053 7.29748 8.79459 7.30402C8.84875 7.30758 8.90265 7.31384 8.95659 7.32007C9.11585 7.33846 9.29098 7.43545 9.34986 7.56894C9.64818 8.24536 9.93764 8.92565 10.2182 9.60963C10.2801 9.76062 10.2428 9.95633 10.125 10.1457C10.0652 10.2428 9.97128 10.379 9.86248 10.5183C9.74939 10.663 9.50599 10.9291 9.50599 10.9291C9.50599 10.9291 9.40738 11.0473 9.44455 11.1944C9.45903 11.25 9.50521 11.331 9.54708 11.3991C9.57027 11.4368 9.5918 11.4705 9.60577 11.4938C9.86169 11.9211 10.2057 12.3543 10.6259 12.7616C10.7463 12.8783 10.8631 12.9974 10.9887 13.108C11.457 13.5209 11.9868 13.8583 12.559 14.1082L12.5641 14.1105C12.6486 14.1469 12.692 14.1668 12.8157 14.2193C12.8781 14.2457 12.9419 14.2685 13.0074 14.2858C13.0311 14.292 13.0554 14.2955 13.0798 14.2972C13.2415 14.3069 13.335 14.2032 13.3749 14.1555C14.0984 13.279 14.1646 13.2218 14.1696 13.2222V13.2238C14.2647 13.1236 14.4142 13.0888 14.5476 13.097C14.6085 13.1007 14.6691 13.1124 14.7245 13.1377C15.2563 13.3803 16.1258 13.7587 16.1258 13.7587L16.7073 14.0201C16.8047 14.0671 16.8936 14.1778 16.8979 14.2854C16.9005 14.3523 16.9077 14.4603 16.8838 14.6579C16.8525 14.9166 16.7738 15.2281 16.6956 15.3913C16.6406 15.5058 16.5694 15.6074 16.4866 15.6934C16.3743 15.81 16.2909 15.8808 16.1559 15.9814C16.0737 16.0426 16.0311 16.0714 16.0311 16.0714C15.8922 16.159 15.8139 16.2028 15.6484 16.2909C15.391 16.428 15.1066 16.5068 14.8153 16.5218C14.6296 16.5313 14.4444 16.5447 14.2589 16.5347C14.2507 16.5342 13.6907 16.4482 13.6907 16.4482C12.2688 16.0742 10.9538 15.3736 9.85034 14.402C9.62473 14.2034 9.4155 13.9885 9.20194 13.7759C8.31288 12.8908 7.63982 11.9364 7.23169 11.0336C7.03043 10.5884 6.90299 10.1116 6.90098 9.62098C6.89729 9.01405 7.09599 8.4232 7.46569 7.94186C7.53857 7.84697 7.60774 7.74855 7.72709 7.63586C7.85348 7.51651 7.93392 7.45244 8.02057 7.40811C8.13607 7.34902 8.26293 7.31742 8.39232 7.30833Z"></path>
    </svg>
  ),
  LinkedIn: (props: IconProps) => (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fill="currentColor"
        d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
      />
    </svg>
  ),
  Twitter: (props: IconProps) => (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fill="currentColor"
        d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"
      />
    </svg>
  ),
  InstaSram: (props: IconProps) => (
    <svg
      {...props}
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        clip-rule="evenodd"
        d="m7.46494 1.066c1.17334-.05378 1.54734-.066 4.53506-.066 2.9883 0 3.3617.01283 4.5344.066 1.1715.05317 1.9715.23956 2.6712.5115.7339.27631 1.3987.70924 1.9482 1.26867.5595.54943.9925 1.21429 1.2687 1.94822.2719.69972.4577 1.49967.5115 2.67055.0538 1.17334.066 1.54734.066 4.53506 0 2.9877-.0128 3.3617-.066 4.5351-.0532 1.1708-.2396 1.9708-.5115 2.6705-.2811.723-.6576 1.3371-1.2687 1.9482-.5494.5595-1.2143.9925-1.9482 1.2687-.6997.2719-1.4997.4577-2.6705.5115-1.1734.0538-1.5474.066-4.5351.066-2.98772 0-3.36172-.0128-4.53506-.066-1.17088-.0532-1.97083-.2396-2.67055-.5115-.72295-.2811-1.33711-.6576-1.94822-1.2687-.55953-.5494-.99249-1.2143-1.26867-1.9482-.27194-.6997-.45772-1.4997-.5115-2.6705-.05378-1.1734-.066-1.5468-.066-4.5351 0-2.98833.01283-3.36172.066-4.53444.05317-1.1715.23956-1.97145.5115-2.67117.27631-.73388.70924-1.39871 1.26867-1.94822.54942-.55953 1.21428-.99249 1.94822-1.26867.69972-.27194 1.49967-.45772 2.67055-.5115zm8.98026 1.98c-1.1599-.05256-1.5082-.06417-4.4452-.06417s-3.28533.01161-4.44522.06417c-1.0725.04889-1.65489.22794-2.04234.37889-.51333.19922-.88.43755-1.265.82255-.38438.385-.62333.75167-.82255 1.265-.15095.38745-.33.96984-.37889 2.04234-.05256 1.15989-.06417 1.50822-.06417 4.44522s.01161 3.2853.06417 4.4452c.04889 1.0725.22794 1.6549.37889 2.0424.17622.4778.4573.91.82255 1.265.3549.3652.78717.6463 1.265.8225.38745.151.96984.33 2.04234.3789 1.15989.0526 1.50761.0642 4.44522.0642 2.9376 0 3.2853-.0116 4.4452-.0642 1.0725-.0489 1.6549-.2279 2.0424-.3789.5133-.1992.88-.4375 1.265-.8225.3652-.3549.6463-.7872.8225-1.265.151-.3875.33-.9699.3789-2.0424.0526-1.1599.0642-1.5082.0642-4.4452s-.0116-3.28533-.0642-4.44522c-.0489-1.0725-.2279-1.65489-.3789-2.04234-.1992-.51333-.4375-.88-.8225-1.265-.385-.38438-.7517-.62333-1.265-.82255-.3875-.15095-.9699-.33-2.0424-.37889zm-5.8497 12.3449c.4453.1845.9225.2794 1.4045.2794.9735 0 1.907-.3867 2.5953-1.075.6884-.6883 1.0751-1.6219 1.0751-2.5953s-.3867-1.907-1.0751-2.59532c-.6883-.68832-1.6218-1.07502-2.5953-1.07502-.482 0-.9592.09494-1.4045.27939-.4454.18445-.84997.4548-1.19079.79563-.34082.34082-.61118.74542-.79563 1.19072s-.27938.9226-.27938 1.4046.09493.9593.27938 1.4046.45481.8499.79563 1.1907.74539.6112 1.19079.7956zm-2.59345-7.38889c1.06033-1.06033 2.49845-1.65602 3.99795-1.65602 1.4996 0 2.9377.59569 3.998 1.65602s1.656 2.49849 1.656 3.99799-.5957 2.9376-1.656 3.998c-1.0603 1.0603-2.4984 1.656-3.998 1.656-1.4995 0-2.93762-.5957-3.99795-1.656-1.06033-1.0604-1.65602-2.4985-1.65602-3.998s.59569-2.93766 1.65602-3.99799zm10.90565-.81363c.2506-.25065.3914-.59059.3914-.94505 0-.35447-.1408-.69441-.3914-.94505-.2507-.25064-.5906-.39145-.9451-.39145-.3544 0-.6944.14081-.945.39145-.2507.25064-.3915.59058-.3915.94505 0 .35446.1408.6944.3915.94505.2506.25064.5906.39145.945.39145.3545 0 .6944-.14081.9451-.39145z"
        fill="currentColor"
        fill-rule="evenodd"
      />
    </svg>
  ),
  Email: (props: IconProps) => <MailIcon {...props} />,
};
"use client";
import React from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { cn } from "@/utils/cn";

export default function ContactForm() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
  };
  return (
    <div className="max-w-lg w-full mx-auto  md:p-8 shadow-input ">
      <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200 text-center">
    I would love to talk about you amazing ideas
      </h2>
      <p className="w-full text-neutral-600 text-sm mt-2 dark:text-neutral-300 text-justify ">
      If you have a business idea or problem and you wish to speak with me, please reach out to me. Please contact me, fill your name and email and I will reach out to you shortly.
      </p>

      <form className="my-8" onSubmit={handleSubmit}>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="firstname">First name</Label>
          <Input id="firstname" placeholder="Tyler" type="text" />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email Address</Label>
          <Input id="email" placeholder="projectmayhem@fc.com" type="email" />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="password">Number</Label>
          <Input id="phone" placeholder="0000000000" type="phone" />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
        <Label htmlFor="password">Message</Label>
        <textarea 
            name="message" 
            id="message" 
            placeholder="Type your message here..."
            className="w-full relative border-none bg-gray-50 dark:bg-zinc-800 text-black dark:text-white shadow-input rounded-[7px] px-3 py-2 text-sm  file:border-0 file:bg-transparent 
          file:text-sm file:font-medium placeholder:text-neutral-400 dark:placeholder-text-neutral-600 
          focus-visible:outline-none focus-visible:ring-[2px]  focus-visible:ring-neutral-400 dark:focus-visible:ring-neutral-600
           disabled:cursor-not-allowed disabled:opacity-50
           dark:shadow-[0px_0px_1px_1px_var(--neutral-700)]
           group-hover/input:shadow-none transition duration-400" 
            rows={5} 
        >
            <BottomGradient />
        </textarea>
        </LabelInputContainer>

        <button
          className="rounded-[7px] bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white h-10 font-medium
                     shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
          type="submit"
        >
          Send &rarr;
          <BottomGradient />
        </button>
        <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
      </form>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};

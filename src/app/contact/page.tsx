import ContactForm from "@/components/ContactForm";
export default function Contact() {
  return (
    <div className="mb-4 w-full bg-white dark:bg-black lg:border-[0px] border-slate-600/20 dark:lg:border-slate-300/20  rounded-xl items-center px-4 pt-6 md:pt-4 md:p-6">
      <p className="text-2xl md:text-4xl lg:text-5xl text-slate-900 dark:text-white font-bold inter-var text-center lg:mt-8">
        CONTACT ME
      </p>
      <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-4 h-[1px] w-full" />

      <div className="mt-8">
        <ContactForm />
      </div>
    </div>
  );
}

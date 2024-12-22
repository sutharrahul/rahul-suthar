import Link from "next/link";
import React from "react";
import {
  IconBrandGithub,
  IconBrandX,
  IconBrandLinkedin,
  IconMail,
} from "@tabler/icons-react";

export default function Footer() {
  const links = [
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://github.com/sutharrahul",
    },
    {
      title: "Linkedin",
      icon: (
        <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://www.linkedin.com/in/suthar-rahul",
    },

    {
      title: "Mail",
      icon: (
        <IconMail className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "mailto:sutharrahul119@gmail.com",
    },
    {
      title: "X",
      icon: (
        <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://x.com/rahulsuthar_25",
    },
  ];
  return (
    <div className="my-10 max-w-[680px] mx-auto">
      <div className="h-[0.5px] bg-[#e0e0e088]"></div>
      <div className="flex flex-col gap-2 my-5">
        {links?.map((links) => (
          <Link
            className="flex items-center gap-2 mx-4 w-fit hover:text-[#0088f2] duration-150"
            key={links?.title}
            href={links?.href}
          >
            {links?.icon}
            {links?.title}
          </Link>
        ))}
      </div>
      <div className="h-[0.5px] bg-[#e0e0e088]"></div>
      <div className="flex justify-between mt-3">
        <div className="text-sm text-">
          Built with <Link href={""}>Next.js, </Link>
          <Link href={""}>Tailwind, </Link>
          <Link href={""}>Aceternity </Link> and
          <Link href={""}> Vercel</Link>
        </div>
        <span className="text-xs">Crafted by Rahul.</span>
      </div>
    </div>
  );
}

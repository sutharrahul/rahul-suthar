import Link from "next/link";
import React from "react";
import {
  IconBrandGithub,
  IconBrandX,
  IconBrandLinkedin,
  IconMail,
} from "@tabler/icons-react";
import { span } from "framer-motion/client";

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

  const build = [
    {
      title: "Next.js",
      href: "https://nextjs.org",
    },
    {
      title: "Tailwind",
      href: "https://tailwindcss.com",
    },
    {
      title: "Aceternity",
      href: "https://ui.aceternity.com/",
    },
    {
      title: "Vercel",
      href: "https://vercel.com/",
    },
  ];
  return (
    <div className="my-10 max-w-[680px] mx-auto">
      <div className="h-[0.5px] bg-[#e0e0e088]"></div>
      <div className="flex flex-col gap-2 my-5">
        {links?.map((links) => (
          <Link
            className="flex items-center gap-2 w-fit hover:text-[#0088f2] duration-150"
            target="_blank"
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
        <div className="text-xs flex flex-wrap gap-1">
          Built with{" "}
          {build?.map(({ title, href }) => (
            <>
              {title == "Vercel" && <span>{" and Deployed on "}</span>}
              <Link
                target="_blank"
                className="hover:text-[#0088f2] duration-150"
                key={title}
                href={href}
              >
                {title}
              </Link>
            </>
          ))}
        </div>
        <span className="text-xs text-end">Crafted by Rahul.</span>
      </div>
    </div>
  );
}

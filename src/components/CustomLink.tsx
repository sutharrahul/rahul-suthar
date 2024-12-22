import Link from "next/link";
import React from "react";

type Prop = {
  labe: string;
  href: string;
  className?: string;
};

export default function CustomLink({ href, labe, className }: Prop) {
  return (
      <Link className={`${className}`} href={href}>
        {labe}
      </Link>
  );
}

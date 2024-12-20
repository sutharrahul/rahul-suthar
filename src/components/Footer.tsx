import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <div className="my-10">
      <div className="h-[0.5px] bg-[#e0e0e088]"></div>
      <div className="flex justify-between">
        <Link href="mailto:sutharrahul119@gmail.com">
          Contact: sutharrahul119@gmail.com
        </Link>
        <div>Spotify</div>
      </div>
      <div className="h-[0.5px] bg-[#e0e0e088]"></div>
      <span>Crafted by Rahul.</span>
    </div>
  );
}

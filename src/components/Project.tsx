"use client";
import React, { useEffect, useState } from "react";
import Badge from "./Badge";
import projectJson from "../json/project.json";
import { div } from "framer-motion/client";

type Project = {
  title: string;
  description: string;
  technologies: string[];
};

type ProjectData = {
  projects: Project[];
};
export default function Project() {
  const [data, setData] = useState<ProjectData | null>(null);

  useEffect(() => {
    fetch('../json/project.json').then((data)=> console.log(data))
  }, []);

  return (
    <div className="p-5 border-[0.5px] border-[#e0e0e088] rounded-lg bg-[#111111] mt-3">
    
      <h4 className="text-xl font-semibold">Cinema Review</h4>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem
        aliquid ullam mollitia et officia. Sapiente.
      </p>
      <div>
        <Badge label="HTML" />
      </div>
    </div>
  );
}

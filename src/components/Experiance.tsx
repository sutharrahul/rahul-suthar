import React from "react";

type Experience = {
  company : string;
  role : string;
  timeline : string;
  link : string;
  description : string;
  technologies : string[]
};

type Props ={
  experience : Experience
}
export default function Experiance({ experience }: Props) {
  return (
    <div className="flex flex-col gap-2 mt-9">
      <h3 className="text-xl font-medium">Experience</h3>
      <div className="h-[0.5px] bg-[#e0e0e088]"></div>
      <div className="flex flex-col gap-2">
        <h4 className="text-xl font-semibold">
          {experience?.company}{" "}
          <span className="text-sm font-light">{experience?.timeline}</span>
        </h4>
        <span> {experience?.role} </span>
        <p>{experience?.description}</p>
      </div>
    </div>
  );
}

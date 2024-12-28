import React from "react";

type Experience = {
  id: string;
  company: string;
  role: string;
  timeline: string;
  link: string;
  description: string;
  technologies: string[];
};

type Props = {
  experiences: Experience[];
};
export default function Experiance({ experiences }: Props) {
  return (
    <>
      <div className="flex flex-col gap-2 mt-9">
        <h3 className="text-xl font-medium">Experience</h3>
        <div className="h-[0.5px] bg-[#e0e0e088]"></div>
        {experiences?.map((e) => (
          <div className="flex flex-col gap-2" key={e?.id}>
            <h4 className="text-xl font-semibold">
              {e?.company}{" "}
              <span className="text-sm font-light">{e?.timeline}</span>
            </h4>
            <span> {e?.role} </span>
            <p>{e?.description}</p>
          </div>
        ))}
      </div>
    </>
  );
}

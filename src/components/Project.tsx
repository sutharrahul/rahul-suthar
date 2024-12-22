import React from "react";
import Badge from "./Badge";

export default function Project({projectContent}:any) {

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

import Image from "next/image";
import React, { MouseEvent } from "react";

export default function Resume() {
    const hendelClick=(e: MouseEvent<HTMLButtonElement>)=>{
        e.stopPropagation()
        window.open('https://drive.google.com/file/d/1MrGOz9wfxH4qaN02FRLts6oEM1Vi3Jzg/view')
    }
  return (
    <div className="flex flex-col items-end">
      <Image
        height={300}
        width={500}
        src={"/assets/RahulSutharResumeImg.jpg"}
        alt="rahul-suthar"
      />
      <button className="mt-5 font-medium py-1 px-6 bg-[#f0f0f0] text-black rounded-md" onClick={hendelClick}>
        Download
      </button>
    </div>
  );
}

import Image from "next/image";
import React, { MouseEvent, useState } from "react";

export default function Resume() {
    const [isLoading, setIsLoading] = useState(true);

    const imageUrl = 'https://drive.google.com/uc?export=view&id=12hoAsHOmpt9OeifCjefaozHCvPrpIaE8';

    const handleImageLoad = () => {
        setIsLoading(false);
      };

    const hendelClick=(e: MouseEvent<HTMLButtonElement>)=>{
        e.stopPropagation()
        window.open('https://drive.google.com/file/d/1MrGOz9wfxH4qaN02FRLts6oEM1Vi3Jzg/view')
    }
  return (
    <div className="flex flex-col items-end">
        {isLoading && (
        <div className="absolute flex justify-center items-center w-full h-full bg-gray-300 opacity-75">
            <span className="text-lg">...Loading</span>
        </div>
      )}
      <Image
        height={300}
        width={500}
        src={imageUrl}
        alt="rahul-suthar"
        onLoadingComplete={handleImageLoad}
      />
      <button className="mt-5 font-medium py-1 px-6 bg-[#f0f0f0] text-black rounded-md" onClick={hendelClick}>
        Download
      </button>
    </div>
  );
}

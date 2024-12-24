import React from "react";
import { FlipWords } from "./ui/flip-words";
import Image from "next/image";

type Profile = {
  image: string;
  image_alt: string;
  title: string;
  designtion: string;
  role: string[];
  summary: string;
};

type Prop = {
  profile: Profile;
};
export default function Profile({ profile }: Prop) {
  return (
    <>
      {" "}
      <Image width={100} height={100} src={profile?.image} alt={profile?.image_alt} className="rounded-full"/>
      <div className="flex items-center gap-11 mt-6 my-auto">
        <div className="flex flex-col gap-4">
          <div>
            <h1 className="text-2xl font-medium">{profile?.title}</h1>
            <div>
              {profile?.designtion} | <FlipWords words={profile?.role} />
            </div>
            <div className="h-[0.5px] bg-[#e0e0e088] mt-2"></div>
          </div>
          <p>{profile?.summary}</p>
        </div>
      </div>
    </>
  );
}

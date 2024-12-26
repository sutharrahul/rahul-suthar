"use client";
import React, { ReactNode, useState } from "react";
import { FlipWords } from "./ui/flip-words";
import Image from "next/image";
import Modal from "./Modal";
import Resume from "./Resume";

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
  const [modal, setModal] = useState<ReactNode>();

  const handleModal = () => {
   
    setModal(
      <Modal onClose={()=>setModal(null)} onClickOutsideClose>
        <Resume/>
      </Modal>
    );
  };

  return (
    <>
    {modal}
      {" "}
      <Image
        width={100}
        height={100}
        src={profile?.image}
        alt={profile?.image_alt}
        className="rounded-full"
      />
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
      <button
        className="mt-5 font-medium py-1 px-6 bg-[#f0f0f0] text-black rounded-md"
        onClick={handleModal}
      >
        Hire me
      </button>
    </>
  );
}

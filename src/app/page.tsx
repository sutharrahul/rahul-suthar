import Clock from "@/components/Clock";
// import { FloatingDockDemo } from "@/components/FloatingDockDemo";
import Footer from "@/components/Footer";
import { FlipWords } from "@/components/ui/flip-words";
import { TracingBeam } from "@/components/ui/tracing-beam";
import data from "../json/project.json";
import Badge from "@/components/Badge";
import { IconArrowUpRight } from "@tabler/icons-react";
import Link from "next/link";
export default function Home() {
  const { profile, experience, projects, social } = data;
  return (
    <TracingBeam>
      <div className=" mx-auto pt-28 max-w-[680px]">
        <Clock />
        <div className="mx-auto">
          {/* Hero section */}
          <img
            className="w-24 rounded-full"
            src={profile?.image}
            alt={profile?.image_alt}
          ></img>
          <div className="flex items-center gap-11 mt-6 my-auto">
            <div className="flex flex-col gap-4">
              <div>
                <h1 className="text-2xl font-medium">{profile?.title}</h1>
                <div>
                  {profile?.designtion} | <FlipWords words={profile?.role} />
                </div>
              </div>
              <p>{profile?.headline}</p>
              <p>{profile?.summary}</p>
            </div>
          </div>

          {/* Project */}
          <div className="flex flex-col gap-2 mt-9">
            <h3 className="text-xl font-medium">Projects</h3>
            <div className="h-[0.5px] bg-[#e0e0e088]"></div>
            {projects?.map((projectData) => (
              <div
                key={projectData?.id}
                className="flex flex-col gap-2 p-5 border-[0.5px] border-[#e0e0e088] rounded-lg bg-[#111111] mt-3"
              >
                <Link
                  href={projectData?.link}
                  className="text-xl font-semibold flex items-center gap-1"
                >
                  {projectData?.title} <IconArrowUpRight className="h-5" />
                </Link>
                <p>{projectData?.description}</p>
                <div className="mt-4">
                  {projectData?.technologies?.map(
                    (tech) =>
                      tech && <Badge key={tech} label={tech?.toLowerCase()} />
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Experiance */}

          <div className="flex flex-col gap-2 mt-9">
            <h3 className="text-xl font-medium">Experience</h3>
            <div className="h-[0.5px] bg-[#e0e0e088]"></div>

            {/* <Experience expieriences={[]} /> */}
            <div className="flex flex-col gap-2">
              <h4 className="text-xl font-semibold">
                {experience?.company}{" "}
                <span className="text-sm font-light">
                  {experience?.timeline}
                </span>
              </h4>
              <span> {experience?.role} </span>
              <p>{experience?.description}</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      {/* <FloatingDockDemo /> */}
    </TracingBeam>
  );
}

import { TracingBeam } from "@/components/ui/tracing-beam";
import Image from "next/image";

export default function Home() {
  return (
    <TracingBeam className="px-6">
    <div className="h-screen mx-auto">
      <div className="p-10 bg-slate-500 h-1/4"></div>
      <div className="border mx-auto">
      {/* Hero section */}
        <div className="flex items-center gap-11">
          <div className="p-8 bg-slate-400 rounded-full w-16"></div>
          <div>
            <h1>Rahul Suthar</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus id porro alias! Accusantium a quas ratione at error nemo adipisci.</p>
          </div>
        </div>

        {/* Experiance */}
      </div>
    </div>
    </TracingBeam>
  );
}

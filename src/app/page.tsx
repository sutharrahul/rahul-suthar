import Badge from "@/components/Badge";
import Clock from "@/components/Clock";
import { FloatingDockDemo } from "@/components/FloatingDockDemo";
import Footer from "@/components/Footer";
import Project from "@/components/Project";
import { TracingBeam } from "@/components/ui/tracing-beam";
// import Image from "next/image";

export default function Home() {
  return (
    <TracingBeam>

      <div className=" mx-auto pt-28 max-w-[680px]">
        <Clock/>
        <div className="mx-auto">
          {/* Hero section */}
          <div className="p-16 bg-slate-400 w-8 rounded-full"></div>
          <div className="flex items-center gap-11 mt-6 my-auto">
            <div className="flex flex-col gap-4">
                <div>
                  <h1 className=" font-semibold">Hi, I'm Rahul Suthar</h1>
                  <p>Front-End Developer | Crafting Web Experiences That Wow</p>

                  <p className="text-3xl">
                    <strong>
                      Creating innovative web experiences with every line of
                      code
                    </strong>
                  </p>
                </div>
              <p>
                I&rsquo;m a passionate Front-End Web Developer. I build
                beautiful, responsive websites with clean, efficient code. From
                interactive user interfaces to pixel-perfect designs, I turn
                ideas into powerful web solutions.
              </p>
            </div>
          </div>

          {/* Project */}
          <div className="flex flex-col gap-2">
            <h3>Project</h3>
            <div className="h-[0.5px] bg-[#e0e0e088]"></div>

            <Project/>
          </div>
          {/* Experiance */}

          <div className="flex flex-col gap-2 mt-10">
            <h3>Experience</h3>
            <div className="h-[0.5px] bg-[#e0e0e088]"></div>
            <div>
              <h4>The Proven Club</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam,
                consequatur. Itaque laboriosam totam non, delectus minima sint,
                accusantium consequuntur earum fugiat consequatur fuga vel quos
                optio mollitia! Excepturi, sit autem! Lorem ipsum dolor sit amet
                consectetur, adipisicing elit. Maiores quasi voluptates repellat
                fugiat, quos ex deserunt sapiente iste? Voluptatum, minima amet
                magni ab tempora adipisci sint alias quidem reprehenderit vero?
                lorem300
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <FloatingDockDemo />
    </TracingBeam>
  );
}

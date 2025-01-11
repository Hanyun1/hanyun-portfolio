import Education from "@/components/home/Education";
import Photo from "@/components/home/Photo";
import Social from "@/components/home/Social";
import { Button } from "@/components/ui/button";
import { FileDownIcon } from "lucide-react";

const Intro = () => {
  return (
    <section id="home">
      <div className="container mx-auto">
        <div className="pt-10 flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="basis-3/5 order-2 md:order-none flex flex-col items-center gap-10 ">
            {/* text */}
            <div className="text-left container">
              Hello, I&apos;m <br />{" "}
              <span className="text-4xl font-semibold">Hanyun Zhang</span>, a
              <br />
              <span className="text-bright-darker font-bold">
                Software Engineer
              </span>
              <br />
              <br />
              {/* I completed my Master&apos;s in Software Engineering from
              the University of Melbourne, building upon my Bachelor&apos;s in
              Computing and Software Systems.  */}
              I&apos;m passionate about cloud computing, frontend development
              and photography.
            </div>

            <Education />

            <div className="flex flex-col md:flex-row items-center justify-between gap-10">
              {/* Download CV button */}
              <a href="/CV_Hanyun.pdf" download>
                <Button
                  size="lg"
                  className="items-center flex text-lg px-2 bg-bright font-medium hover:bg-gray-500 hover:text-bright"
                >
                  <span>Download CV</span>
                  <FileDownIcon />
                </Button>
              </a>

              <Social
                containerStyles="flex gap-8"
                iconStyles="w-10 h-10 border-2 rounded-full flex justify-center items-center hover:text-bright hover:border-bright hover:transition-all duration-500"
              />
            </div>
          </div>

          {/* photo */}
          <div className="basis-2/5 order-1 md:order-none">
            <Photo />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;

import { GridBackground } from "./ui/gridbackground";
import { Spotlight } from "./ui/spotlight";
import { TextGenerateEffect } from "./ui/text-effect";
import { TypewriterEffect } from "./ui/typewriter";

const words = [
  {
    text: "Hi",
    className:"text-sm md:text-lg lg:text-2xl"
  },
  {
    text: "I'm",
    className:"text-sm md:text-lg lg:text-2xl"
  },
  {
    text: "Lawrence,",
    className:"text-sm md:text-lg lg:text-2xl"
  },
  {
    text: "a",
    className:"text-sm md:text-lg lg:text-2xl"
  },
  {
    text: "software",
    className:"text-sm md:text-lg lg:text-2xl"
  },
  {
    text: "developer",
    className:"text-sm md:text-lg lg:text-2xl"
  },
  {
    text: "from",
    className:"text-sm md:text-lg lg:text-2xl"
  },
  {
    text: "Taiwan.",
    className:"text-sm md:text-lg lg:text-2xl"
  },
];

const Hero = () => {
  return (
    <div className="pb-20 pt-36">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="top-10 left-full h-[80vh] w-[50vw]"
          fill="purple"
        />
        <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue" />
      </div>
      <GridBackground />
      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <h2 className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
            Official Website
          </h2>
          <TextGenerateEffect
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
            words="WenKai, YEH Experience overview"
          />
          <div className="text-center md:tracking-wider mb-4">
            <TypewriterEffect words={words} cursorClassName="h-3 md:h-5 lg:h-6"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
